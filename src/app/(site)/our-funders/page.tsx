import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Our Funders',
  description:
    'Learn about the foundations and donors investing in student-led climate justice organizing through Campus Climate Network.',
}

const funders = [
  { name: '128 Collective' },
  { name: 'Broad Reach Fund' },
  { name: 'Energy Transition Fund' },
  { name: 'Erol Foundation' },
  { name: 'The Kaplan Family Fund' },
  { name: 'The Sunrise Project' },
  { name: 'Wallace Global Fund' },
  { name: 'Winslow Foundation' },
  { name: 'Youth Climate Justice Fund' },
  {
    name: 'The Brown University Climate Accountability Lab',
    subtitle: '(via Broad Reach Fund)',
  },
  {
    name: 'The University of Miami Climate Accountability Lab',
    subtitle: '(via the KR Foundation)',
  },
]

export default function OurFundersPage() {
  return (
    <div className="page-wrapper">
      <section className="bg-brand-cream/60 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
            Our funders
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
            Resourcing student power for climate justice.
          </h1>
          <p className="text-base text-slate-700">
            We partner with foundations and individual donors who believe in
            youth-led solutions. Their support enables Campus Climate Network to
            invest in organizers, host trainings, and provide the infrastructure
            our coalition needs to win.
          </p>
        </div>
      </section>

      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Featured institutional supporters
            </h2>
            <p className="text-base text-slate-600">
              A snapshot of the partners who have resourced our work to date.
              We&apos;re building a diversified funding base to sustain the
              long-haul fight for climate justice.
            </p>
          </div>
        </ScrollReveal>
        <StaggerReveal
          staggerDelay={100}
          variant="blossom"
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl"
        >
          {funders.map((funder) => (
            <div
              key={funder.name}
              className="rounded-2xl border border-brand-secondary/20 bg-white px-6 py-4"
            >
              <h3 className="text-lg font-semibold text-brand-primary">
                {funder.name}
              </h3>
              {funder.subtitle && (
                <p className="text-sm text-slate-600">{funder.subtitle}</p>
              )}
            </div>
          ))}
        </StaggerReveal>
      </section>

      <section className="bg-slate-900 section-dark">
        <div className="page-container stack text-left text-white">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-dense">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                How funding moves through CCN
              </h2>
              <p className="text-sm text-slate-200">
                Every contribution strengthens frontline organizing and
                long-term leadership development.
              </p>
            </div>
          </ScrollReveal>
          <StaggerReveal
            staggerDelay={120}
            variant="blossom"
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                title: 'Student fellowships',
                body: 'Stipends, fellowships, and project grants that allow organizers to focus on campaigns without sacrificing financial stability.',
              },
              {
                title: 'Trainings & gatherings',
                body: 'Regional College Climate Gatherings, onboarding cohorts, and targeted skill-building sessions for member organizations.',
              },
              {
                title: 'Campaign partnerships',
                body: 'Rapid-response mini-grants, communications support, and national coordination for strategic campus actions.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="stack stack-dense rounded-3xl bg-white/10 p-6"
              >
                <h3 className="text-lg font-semibold text-brand-accent">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-100">{item.body}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="page-container text-left">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-cozy">
            <div className="stack stack-dense">
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Partner with us
              </h2>
              <p className="text-base text-slate-600">
                We welcome conversations with aligned funders who want to
                resource student leadership, climate justice, and fossil-free
                futures. Reach out to discuss sponsorships, multi-year support,
                or in-kind contributions.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
                href="/contact-us"
              >
                Contact us
              </Link>
              <Link
                className="inline-flex items-center rounded-full border border-brand-primary px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
                href="/donate"
              >
                Give online
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
