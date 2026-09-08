import { ArrowUpRight } from 'lucide-react'

// The Apply pill (primary variant, large). Application forms (http/https)
// open in a new tab; mailto: links hand off to the mail client in place.
export function ApplyLink({ href }: { href: string }) {
  const isExternal = /^https?:\/\//.test(href)
  return (
    <a
      href={href}
      className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-secondary"
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      Apply
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      {isExternal && <span className="sr-only">(opens in new tab)</span>}
    </a>
  )
}
