import Link from 'next/link'
import type { ReactNode } from 'react'

type ComingSoonCta = {
  label: string
  href: string
  variant?: 'primary' | 'outline'
}

type ComingSoonProps = {
  title: string
  description: string
  ctas?: ComingSoonCta[]
  children?: ReactNode
}

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function renderCta({ label, href, variant = 'primary' }: ComingSoonCta) {
  const baseClasses =
    'inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition'
  const variantClasses =
    variant === 'outline'
      ? 'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'
      : 'bg-brand-primary text-white hover:bg-brand-secondary'

  const className = classNames(baseClasses, variantClasses)
  const isExternal = /^(https?:|mailto:|tel:)/.test(href)

  if (isExternal) {
    return (
      <a key={`${label}-${href}`} className={className} href={href}>
        {label}
      </a>
    )
  }

  return (
    <Link key={`${label}-${href}`} className={className} href={href}>
      {label}
    </Link>
  )
}

export function ComingSoon({
  title,
  description,
  ctas,
  children,
}: ComingSoonProps) {
  return (
    <div className="stack stack-tight mx-auto min-h-[60vh] w-full max-w-6xl justify-center px-6 py-20 text-left">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-secondary/80">
        Coming soon
      </p>
      <h1 className="text-4xl font-semibold text-brand-primary">{title}</h1>
      <p className="text-base text-slate-600">{description}</p>
      {children ? (
        <div className="text-sm text-slate-500">{children}</div>
      ) : null}
      {ctas?.length ? (
        <div className="flex flex-wrap gap-3">
          {ctas.map((cta) => renderCta(cta))}
        </div>
      ) : null}
    </div>
  )
}
