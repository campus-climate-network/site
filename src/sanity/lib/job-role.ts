// Shared vocabulary for jobRole documents. The Studio schema reads the
// option lists and the site reads the labels and the open/closed rule, so
// the two can't drift apart.

export const LOCATION_TYPES = [
  { value: 'remote', title: 'Remote' },
  { value: 'hybrid', title: 'Hybrid' },
  { value: 'onsite', title: 'In person' },
] as const

export type LocationType = (typeof LOCATION_TYPES)[number]['value']

const LOCATION_LABELS = Object.fromEntries(
  LOCATION_TYPES.map((option) => [option.value, option.title]),
) as Record<LocationType, string>

// `schema` is the schema.org EmploymentType value used in JobPosting JSON-LD.
export const EMPLOYMENT_TYPES = [
  { value: 'full-time', title: 'Full-time', schema: 'FULL_TIME' },
  { value: 'part-time', title: 'Part-time', schema: 'PART_TIME' },
  { value: 'contract', title: 'Contract', schema: 'CONTRACTOR' },
  { value: 'fellowship', title: 'Fellowship', schema: 'OTHER' },
  { value: 'internship', title: 'Internship', schema: 'INTERN' },
  { value: 'volunteer', title: 'Volunteer', schema: 'VOLUNTEER' },
] as const

type Option = { readonly value: string; readonly title: string }

const findOption = <T extends Option>(
  options: readonly T[],
  value?: string | null,
) => options.find((option) => option.value === value)

export const employmentTypeLabel = (value?: string | null) =>
  findOption(EMPLOYMENT_TYPES, value)?.title ?? null

export const employmentTypeSchema = (value?: string | null) =>
  findOption(EMPLOYMENT_TYPES, value)?.schema ?? null

/**
 * `locationType` is required in Studio, so the fallback only covers documents
 * written around the schema (API imports); it matches the field's initial value.
 */
export function resolveLocationType(
  locationType?: string | null,
): LocationType {
  return findOption(LOCATION_TYPES, locationType)?.value ?? 'remote'
}

/** "Remote", "Remote · Midwest US", "Hybrid · New York, NY", "New York, NY" */
export function formatJobLocation(
  locationType?: string | null,
  location?: string | null,
) {
  const type = resolveLocationType(locationType)
  const place = location?.trim() || null
  if (type === 'onsite') return place ?? LOCATION_LABELS.onsite
  return place ? `${LOCATION_LABELS[type]} · ${place}` : LOCATION_LABELS[type]
}

// Deadlines are set by a US-based team; the calendar day is judged there.
const EASTERN = 'America/New_York'

/**
 * Today as YYYY-MM-DD in US Eastern. Passed to the open-role queries as
 * `$today` so the last day to apply stays open until the end of that day on
 * the East Coast rather than UTC midnight.
 */
export function todayInEastern(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: EASTERN,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now)
  const get = (type: string) => parts.find((part) => part.type === type)?.value
  return `${get('year')}-${get('month')}-${get('day')}`
}

/**
 * ISO 8601 end of a YYYY-MM-DD day in US Eastern, offset included. The deadline
 * day is inclusive on the site, so structured data must expire at the end of
 * it — a bare date would read as midnight at its start.
 */
export function endOfDayEastern(date: string) {
  const offset =
    new Intl.DateTimeFormat('en-US', {
      timeZone: EASTERN,
      timeZoneName: 'longOffset',
    })
      .formatToParts(new Date(`${date}T12:00:00Z`))
      .find((part) => part.type === 'timeZoneName')?.value ?? 'GMT-05:00'
  return `${date}T23:59:59${offset.replace('GMT', '') || 'Z'}`
}

/**
 * Mirrors the GROQ open filter in queries.ts. The posting page fetches
 * closed roles too (to show the closed notice) and decides here; the Studio
 * preview uses it for the lock icon.
 */
export function isRoleOpen(
  role: { isOpen?: boolean | null; applicationDeadline?: string | null },
  today = todayInEastern(),
) {
  if (role.isOpen !== true) return false
  return !role.applicationDeadline || role.applicationDeadline >= today
}
