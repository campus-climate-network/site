// Shared by the join form UI (client nudge) and the server action (backstop)
// so the two checks can't drift.
//
// Deliberately .edu-only: international school domains (.ac.uk, .edu.au, …)
// are not rejected — a product decision, not an oversight.
export function isEduEmail(value: string): boolean {
  // Trailing dots are stripped first: 'a@mit.edu.' is a valid root-qualified
  // form of the same mailbox and would otherwise slip past the suffix check.
  return value.trim().toLowerCase().replace(/\.+$/, '').endsWith('.edu')
}
