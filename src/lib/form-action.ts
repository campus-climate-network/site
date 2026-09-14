// Helpers shared by the site's form server actions (the take-action join
// form and the member onboarding form).

// Name of the honeypot input. Non-semantic on purpose: autofill vocabularies
// match names like 'website', which risks silently swallowing real
// submissions. The matching client field is HoneypotField in
// components/form-fields.tsx.
export const HONEYPOT_FIELD = 'form_note'

export function field(formData: FormData, name: string): string {
  const value = formData.get(name)
  return typeof value === 'string' ? value.trim() : ''
}

// Real users never see the honeypot. Callers return a fake success so a bot
// learns nothing, and log it so a real user tripping it shows up in the logs.
export function honeypotTripped(formData: FormData): boolean {
  return field(formData, HONEYPOT_FIELD) !== ''
}
