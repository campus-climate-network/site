'use server'

import { cookies } from 'next/headers'
import { createHmac, timingSafeEqual } from 'crypto'

const COOKIE_NAME = 'ccn-member-auth'
const HMAC_MESSAGE = 'ccn-member-portal-authenticated'

function getExpectedToken(): string | null {
  const password = process.env.MEMBER_PORTAL_PASSWORD
  if (!password) return null
  return createHmac('sha256', password).update(HMAC_MESSAGE).digest('hex')
}

export async function authenticate(
  _prevState: { error: string } | null,
  formData: FormData,
): Promise<{ error: string } | null> {
  const password = formData.get('password')
  if (typeof password !== 'string' || !password) {
    return { error: 'Please enter a password.' }
  }

  const envPassword = process.env.MEMBER_PORTAL_PASSWORD
  if (!envPassword) {
    return { error: 'Portal is not configured. Contact an administrator.' }
  }

  const input = Buffer.from(password, 'utf8')
  const expected = Buffer.from(envPassword, 'utf8')

  if (input.length !== expected.length || !timingSafeEqual(input, expected)) {
    return { error: 'Incorrect password.' }
  }

  const token = getExpectedToken()!
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/member-portal',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })

  return null
}

export async function isAuthenticated(): Promise<boolean> {
  const expectedToken = getExpectedToken()
  if (!expectedToken) return false

  const cookieStore = await cookies()
  const cookie = cookieStore.get(COOKIE_NAME)
  if (!cookie?.value) return false

  try {
    const a = Buffer.from(cookie.value, 'utf8')
    const b = Buffer.from(expectedToken, 'utf8')
    return a.length === b.length && timingSafeEqual(a, b)
  } catch {
    return false
  }
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}
