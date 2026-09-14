// Limits shared by the member onboarding form (browser hints and early
// rejection) and its server action, so the two can't drift.

// Text fields: generous for real content, tight enough that a stray paste
// can't bloat a document. `url` applies to the raw website/Instagram input.
export const FIELD_LIMITS = {
  name: 120,
  university: 160,
  address: 240,
  url: 300,
} as const

// Logo uploads. 4 MB keeps the multipart body under Vercel's 4.5 MB function
// payload ceiling (next.config.ts raises Next's own server-action limit to
// match). SVG is deliberately excluded: the site renders logos through
// next/image, which refuses SVG unless dangerouslyAllowSVG is enabled.
export const LOGO_MAX_BYTES = 4 * 1024 * 1024
export const LOGO_MIME_TYPES = [
  'image/png',
  'image/jpeg',
  'image/webp',
] as const
export const LOGO_ACCEPT = LOGO_MIME_TYPES.join(',')

export function isLogoMimeType(type: string) {
  return (LOGO_MIME_TYPES as readonly string[]).includes(type)
}
