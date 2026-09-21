// Server-only: SLACK_WEBHOOK_URL is a Slack Incoming Webhook and anyone
// holding it can post to the channel. Import this from server actions and
// route handlers only — never from a client component or anything one
// imports.

// Posts a message to the channel behind SLACK_WEBHOOK_URL. Fire-and-forget:
// it never throws, and it no-ops when the variable is unset so local dev and
// forks work without a Slack app. Failures are logged so a broken webhook
// shows up in the server logs.
export async function notifySlack(text: string): Promise<void> {
  const url = process.env.SLACK_WEBHOOK_URL
  if (!url) return

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
      signal: AbortSignal.timeout(5_000),
    })
    if (!response.ok) {
      console.error(
        'Slack notification failed:',
        response.status,
        await response.text(),
      )
    }
  } catch (error) {
    console.error('Slack notification failed:', error)
  }
}

// Slack's mrkdwn treats <, > and & as control characters, so user-supplied
// text has to be escaped before interpolation — otherwise someone typing
// <!channel> into a form field would ping the whole channel.
export function escapeSlackText(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}
