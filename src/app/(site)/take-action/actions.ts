'use server'

import {
  CAMPAIGN_INTERESTS,
  CAMPAIGN_STATUS_OPTIONS,
  COUNTRY_CODES,
  MEMBER_TYPES,
} from './join-form-options'

export type JoinFormState =
  { status: 'success' } | { status: 'error'; message: string } | null

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const GENERIC_ERROR =
  'Something went wrong submitting the form. Please try again, or email us if the problem persists.'

function field(formData: FormData, name: string): string {
  const value = formData.get(name)
  return typeof value === 'string' ? value.trim() : ''
}

export async function submitJoinForm(
  _prevState: JoinFormState,
  formData: FormData,
): Promise<JoinFormState> {
  // Honeypot — real users never see this field. Logged so silently dropped
  // submissions are visible in server logs if a real user ever trips it.
  if (field(formData, 'form_note')) {
    console.warn('Join form honeypot tripped — submission dropped')
    return { status: 'success' }
  }

  const firstName = field(formData, 'firstName')
  const lastName = field(formData, 'lastName')
  const email = field(formData, 'email')
  const phone = field(formData, 'phone')
  const zipCode = field(formData, 'zipCode')
  const country = field(formData, 'country')
  const memberType = field(formData, 'memberType')
  const school = field(formData, 'school')
  const graduationYear = field(formData, 'graduationYear')
  const organization = field(formData, 'organization')
  const referralSource = field(formData, 'referralSource')
  const campaignStatus = field(formData, 'campaignStatus')
  const supportNeeds = field(formData, 'supportNeeds')

  const interests = formData
    .getAll('interest')
    .filter((value): value is string => typeof value === 'string')
    .filter((value) =>
      (CAMPAIGN_INTERESTS as readonly string[]).includes(value),
    )

  const requiredFields = [
    firstName,
    lastName,
    email,
    phone,
    zipCode,
    school,
    graduationYear,
    organization,
  ]
  if (
    requiredFields.some((value) => !value) ||
    !(CAMPAIGN_STATUS_OPTIONS as readonly string[]).includes(campaignStatus) ||
    !(COUNTRY_CODES as readonly string[]).includes(country) ||
    (memberType && !(MEMBER_TYPES as readonly string[]).includes(memberType))
  ) {
    return {
      status: 'error',
      message: 'Please fill in all required fields and try again.',
    }
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }
  if (interests.length === 0) {
    return {
      status: 'error',
      message: 'Please select at least one campaign.',
    }
  }

  const apiKey = process.env.ACTION_NETWORK_API_KEY
  const formId = process.env.ACTION_NETWORK_FORM_ID
  if (!apiKey || !formId) {
    console.error(
      'Action Network is not configured: missing ACTION_NETWORK_API_KEY or ACTION_NETWORK_FORM_ID',
    )
    return { status: 'error', message: GENERIC_ERROR }
  }

  const customFields: Record<string, string> = {
    'School 1': school,
    'Organization 1': organization,
    'Graduation Year': graduationYear,
    'Currently running a campaign?': campaignStatus,
  }
  if (memberType) {
    customFields['Type (Student, Faculty, Alumni, Other)'] = memberType
  }
  if (referralSource) customFields['Come from'] = referralSource
  if (supportNeeds) customFields['Needs for CCN Support'] = supportNeeds
  // Write every interest as '1' or '0': Action Network merges custom_fields
  // per person, so omitting unchecked boxes would leave stale '1's from a
  // previous submission sticky forever.
  for (const interest of CAMPAIGN_INTERESTS) {
    customFields[`Campaign Interest_${interest}`] = interests.includes(interest)
      ? '1'
      : '0'
  }

  // Tags are matched by name to tags that already exist in Action Network;
  // unknown tags are silently ignored by the API
  const addTags = (process.env.ACTION_NETWORK_TAGS ?? '')
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)

  // Record Submission Helper: https://actionnetwork.org/docs/v2/record_submission_helper
  const submission = {
    person: {
      given_name: firstName,
      family_name: lastName,
      email_addresses: [{ address: email }],
      phone_numbers: [{ number: phone }],
      postal_addresses: [{ postal_code: zipCode, country }],
      custom_fields: customFields,
    },
    ...(addTags.length > 0 && { add_tags: addTags }),
    triggers: {
      autoresponse: {
        enabled: process.env.ACTION_NETWORK_AUTORESPONSE !== 'false',
      },
    },
    'action_network:referrer_data': {
      // Per-link attribution (/take-action?source=...) forwarded by the form;
      // falls back to the configured site-wide source.
      source:
        field(formData, 'source').slice(0, 100) ||
        process.env.ACTION_NETWORK_SOURCE ||
        'ccn-website',
      website: 'https://www.campusclimatenetwork.org/take-action',
    },
  }

  try {
    const response = await fetch(
      `https://actionnetwork.org/api/v2/forms/${formId}/submissions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'OSDI-API-Token': apiKey,
        },
        body: JSON.stringify(submission),
        signal: AbortSignal.timeout(15_000),
      },
    )

    if (!response.ok) {
      console.error(
        'Action Network submission failed:',
        response.status,
        await response.text(),
      )
      return { status: 'error', message: GENERIC_ERROR }
    }
  } catch (error) {
    console.error('Action Network submission failed:', error)
    return { status: 'error', message: GENERIC_ERROR }
  }

  return { status: 'success' }
}
