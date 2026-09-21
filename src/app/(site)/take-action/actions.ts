'use server'

import { after } from 'next/server'

import { field, honeypotTripped } from '@/lib/form-action'
import { SITE_URL } from '@/lib/site'
import { escapeSlackText, notifySlack } from '@/lib/slack'
import { isEduEmail } from './school-email'

export type JoinFormState =
  { status: 'success' } | { status: 'error'; message: string } | null

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const GENERIC_ERROR =
  'Something went wrong submitting the form. Please try again, or email us if the problem persists.'

export async function submitJoinForm(
  _prevState: JoinFormState,
  formData: FormData,
): Promise<JoinFormState> {
  // Honeypot (see lib/form-action.ts). Logged so silently dropped
  // submissions are visible in server logs if a real user ever trips it.
  if (honeypotTripped(formData)) {
    console.warn('Join form honeypot tripped — submission dropped')
    return { status: 'success' }
  }

  const firstName = field(formData, 'firstName')
  const lastName = field(formData, 'lastName')
  const email = field(formData, 'email')
  const isStudentOrganizer = field(formData, 'studentOrganizer') === '1'

  if (!firstName || !lastName || !email) {
    return {
      status: 'error',
      message: 'Please fill in all required fields and try again.',
    }
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }
  // Backstop for the client-side nudge — .edu addresses are rejected so we
  // don't lose members to expiring inboxes.
  if (isEduEmail(email)) {
    return {
      status: 'error',
      message:
        'That looks like a school email — please sign up with a personal address instead.',
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

  // Tags are matched by name to tags that already exist in Action Network;
  // unknown tags are silently ignored by the API
  const addTags = (process.env.ACTION_NETWORK_TAGS ?? '')
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)

  // Per-link attribution (/take-action?source=...) forwarded by the form;
  // falls back to the configured site-wide source.
  const source =
    field(formData, 'source').slice(0, 100) ||
    process.env.ACTION_NETWORK_SOURCE ||
    'ccn-website'

  // Record Submission Helper: https://actionnetwork.org/docs/v2/record_submission_helper
  const submission = {
    person: {
      given_name: firstName,
      family_name: lastName,
      email_addresses: [{ address: email }],
      // Written as '1' or '0' (not omitted when unchecked): Action Network
      // merges custom_fields per person, so omitting the unchecked box would
      // leave a stale '1' from a previous submission sticky forever.
      custom_fields: { 'Student Organizer': isStudentOrganizer ? '1' : '0' },
    },
    ...(addTags.length > 0 && { add_tags: addTags }),
    triggers: {
      autoresponse: {
        enabled: process.env.ACTION_NETWORK_AUTORESPONSE !== 'false',
      },
    },
    'action_network:referrer_data': {
      source,
      website: `${SITE_URL}/take-action`,
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

  // Staff heads-up in Slack. Scheduled with after() so it runs once the
  // response has been sent: a slow or down Slack can never delay or fail the
  // signup. No-op without SLACK_WEBHOOK_URL (see lib/slack.ts).
  after(() =>
    notifySlack(
      [
        ':wave: New signup from the website join form',
        `*${escapeSlackText(`${firstName} ${lastName}`)}* · ${escapeSlackText(email)}`,
        `${isStudentOrganizer ? 'Student organizer' : 'Not a student organizer'} · source: ${escapeSlackText(source)}`,
      ].join('\n'),
    ),
  )

  return { status: 'success' }
}
