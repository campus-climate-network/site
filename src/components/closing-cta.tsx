import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'

type CtaLink = {
  label: string
  href: string
}

// Shared gradient closing-CTA panel. The home, our-story, blog, campaigns,
// and impact pages still inline this same shell with their own copy — they
// can migrate here incrementally.
export function ClosingCta({
  heading,
  body,
  primaryCta,
  secondaryCta,
}: {
  heading: string
  body: string
  primaryCta: CtaLink
  secondaryCta?: CtaLink
}) {
  return (
    <section className="page-container">
      <ScrollReveal variant="fade-up">
        <div className="gradient-drift relative isolate overflow-hidden rounded-[2.5rem] bg-linear-to-br from-brand-secondary via-brand-tertiary to-brand-primary px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <div className="mx-auto stack stack-snug max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">{heading}</h2>
            <p className="mx-auto max-w-xl text-base text-white sm:text-lg">
              {body}
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                className="inline-flex items-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-brand-accent/90"
                href={primaryCta.href}
              >
                {primaryCta.label}
              </Link>
              {secondaryCta && (
                <Link
                  className="inline-flex items-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
                  href={secondaryCta.href}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
