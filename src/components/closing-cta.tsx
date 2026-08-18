import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'

type CtaLink = {
  label: string
  href: string
}

// Shared gradient closing-CTA panel. Campaigns is the one page still
// inlining the shell: its primary CTA embeds an ArrowUpRight icon that the
// string-only CtaLink API can't express.
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

// The sitewide closing CTA shared by the home, our-story, blog, and impact
// pages — copy lives here once.
export function JoinMovementCta() {
  return (
    <ClosingCta
      heading="Be part of what’s next"
      body="Whether you want to organize on your campus or donate to the fight, there is a place for you in the movement."
      primaryCta={{ label: 'Join us', href: '/take-action' }}
      secondaryCta={{ label: 'Donate', href: '/donate' }}
    />
  )
}
