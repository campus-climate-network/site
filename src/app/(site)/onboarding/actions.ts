'use server'

import { cookies } from 'next/headers'
import { createHmac, timingSafeEqual } from 'crypto'

import { field, honeypotTripped } from '@/lib/form-action'
import { geocodeAddress } from '@/lib/mapbox'
import {
  FIELD_LIMITS,
  LOGO_MAX_BYTES,
  isLogoMimeType,
} from '@/sanity/lib/member-org'
import { writeClient } from '@/sanity/lib/write-client'

// One shared password gates both seeing and submitting the form — the same
// construction as the member portal (HMAC keyed by the password), scoped to
// this page's path.
const COOKIE_NAME = 'ccn-onboarding-auth'
const COOKIE_PATH = '/onboarding'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // a week, in seconds
const HMAC_MESSAGE = 'ccn-onboarding-authenticated'

export type AuthState = { error: string } | null

export type SubmitState =
  { status: 'success' } | { status: 'error'; message: string } | null

const GENERIC_ERROR =
  'Something went wrong submitting your profile. Please try again, or email info@campusclimatenetwork.org if the problem persists.'

function getExpectedToken(): string | null {
  const password = process.env.MEMBER_ONBOARDING_PASSWORD
  if (!password) return null
  return createHmac('sha256', password).update(HMAC_MESSAGE).digest('hex')
}

export async function authenticate(
  _prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const password = formData.get('password')
  if (typeof password !== 'string' || !password) {
    return { error: 'Please enter the password.' }
  }

  const envPassword = process.env.MEMBER_ONBOARDING_PASSWORD
  if (!envPassword) {
    console.error('MEMBER_ONBOARDING_PASSWORD is not set')
    return { error: 'Onboarding is not configured. Contact CCN staff.' }
  }

  const input = Buffer.from(password, 'utf8')
  const expected = Buffer.from(envPassword, 'utf8')
  if (input.length !== expected.length || !timingSafeEqual(input, expected)) {
    return { error: 'Incorrect password.' }
  }

  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, getExpectedToken()!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: COOKIE_PATH,
    maxAge: COOKIE_MAX_AGE,
  })

  return null
}

export async function isAuthenticated(): Promise<boolean> {
  const expected = getExpectedToken()
  if (!expected) return false
  const cookie = (await cookies()).get(COOKIE_NAME)
  if (!cookie?.value) return false
  const a = Buffer.from(cookie.value, 'utf8')
  const b = Buffer.from(expected, 'utf8')
  return a.length === b.length && timingSafeEqual(a, b)
}

// Accepts "ccn.org" as well as "https://ccn.org"; rejects anything that isn't
// http(s) once a scheme is in place. Returns null when it can't be made valid.
// A colon followed by a digit is a port ("example.edu:8080"), not a scheme.
function normalizeUrl(value: string): string | null {
  if (!value) return ''
  const withScheme = /^[a-z][a-z0-9+.-]*:(?!\d)/i.test(value)
    ? value
    : `https://${value}`
  try {
    const url = new URL(withScheme)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null
    return withScheme
  } catch {
    return null
  }
}

// "@handle" or a bare handle becomes a profile link; anything with a dot and
// no leading @ ("instagram.com/ccn", "linktr.ee") is treated as a link, since
// a bare domain would otherwise be mistaken for a (dotted) handle.
function normalizeInstagram(value: string): string | null {
  if (!value) return ''
  const handle = value.replace(/^@/, '')
  const looksLikeHandle = value.startsWith('@') || !handle.includes('.')
  if (looksLikeHandle && /^[A-Za-z0-9._]{1,30}$/.test(handle)) {
    return `https://www.instagram.com/${handle}/`
  }
  return normalizeUrl(value)
}

// Every existing org carries coordinates, and the map only geocodes in the
// browser as a fallback (with a loading state on each visit until someone
// fills them in). Resolve them once here instead; a miss just leaves the
// field for staff. Needs a server-side token — the public one is
// URL-restricted to the site and 403s from here — so without
// MAPBOX_GEOCODING_TOKEN this is skipped silently and the map's browser-side
// fallback still places the pin.
async function geocode(address: string) {
  const token = process.env.MAPBOX_GEOCODING_TOKEN
  if (!token) return undefined
  return (
    (await geocodeAddress(address, token, {
      signal: AbortSignal.timeout(10_000),
    })) ?? undefined
  )
}

export async function submitOrgProfile(
  _prevState: SubmitState,
  formData: FormData,
): Promise<SubmitState> {
  if (honeypotTripped(formData)) {
    console.warn('Onboarding form honeypot tripped — submission dropped')
    return { status: 'success' }
  }

  // Never trust the client: the gate is re-checked here, not just on render.
  if (!(await isAuthenticated())) {
    return {
      status: 'error',
      message:
        'Your session has expired. Reload the page and enter the password again — your answers will need to be re-entered.',
    }
  }

  const name = field(formData, 'name')
  const university = field(formData, 'university')
  const address = field(formData, 'address')
  const websiteInput = field(formData, 'website')
  const instagramInput = field(formData, 'instagram')
  const logo = formData.get('logo')

  if (!name || !university || !address) {
    return {
      status: 'error',
      message: 'Please fill in all required fields and try again.',
    }
  }
  // Raw lengths, matching the inputs' maxLength — normalizing below can add
  // a scheme, and that mustn't push an accepted value over the limit.
  if (
    name.length > FIELD_LIMITS.name ||
    university.length > FIELD_LIMITS.university ||
    address.length > FIELD_LIMITS.address ||
    websiteInput.length > FIELD_LIMITS.url ||
    instagramInput.length > FIELD_LIMITS.url
  ) {
    return {
      status: 'error',
      message:
        'One of the fields is too long. Please shorten it and try again.',
    }
  }
  const website = normalizeUrl(websiteInput)
  if (website === null) {
    return { status: 'error', message: 'Please enter a valid website link.' }
  }
  const instagram = normalizeInstagram(instagramInput)
  if (instagram === null) {
    return {
      status: 'error',
      message: 'Please enter a valid Instagram handle or link.',
    }
  }
  // An empty file input still submits a zero-byte File.
  const logoFile = logo instanceof File && logo.size > 0 ? logo : null
  if (!logoFile) {
    return {
      status: 'error',
      message: 'Please add your logo — a PNG, JPG or WebP up to 4 MB.',
    }
  }
  if (!isLogoMimeType(logoFile.type)) {
    return {
      status: 'error',
      message: 'Please upload the logo as a PNG, JPG or WebP file.',
    }
  }
  if (logoFile.size > LOGO_MAX_BYTES) {
    return {
      status: 'error',
      message: 'The logo file is over 4 MB. Please upload a smaller version.',
    }
  }

  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('SANITY_WRITE_TOKEN is not set — cannot create member org')
    return { status: 'error', message: GENERIC_ERROR }
  }

  let logoAssetId: string | undefined
  try {
    const asset = await writeClient.assets.upload(
      'image',
      Buffer.from(await logoFile.arrayBuffer()),
      { filename: logoFile.name, contentType: logoFile.type },
    )
    logoAssetId = asset._id

    // Created as a draft so staff review it (and the logo) before it goes
    // live; publishing in Studio fires the memberOrg webhook that refreshes
    // the map. `isActive` is preset so publishing is the only step left.
    const coordinates = await geocode(address)
    await writeClient.create({
      _id: `drafts.${crypto.randomUUID()}`,
      _type: 'memberOrg',
      name,
      university,
      address,
      // Existing orgs use the full address as the pin's display location
      location: address,
      ...(coordinates && { coordinates }),
      ...(website && { website }),
      ...(instagram && { instagram }),
      logo: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
      isActive: true,
    })
  } catch (error) {
    // Nothing references the uploaded logo if the create failed, so remove it
    // rather than leave an orphan in the dataset.
    if (logoAssetId) {
      await writeClient.delete(logoAssetId).catch(() => undefined)
    }
    console.error('Member onboarding submission failed:', error)
    return { status: 'error', message: GENERIC_ERROR }
  }

  return { status: 'success' }
}
