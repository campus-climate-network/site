import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Toolkits, training decks, campaign templates, and stories from student climate organizers. Resources to help you win your campus climate fight.',
}

const resourceSections = [
  {
    title: 'Resource Library',
    description:
      'Toolkits, training decks, and campaign templates to help you run winning climate justice campaigns on your campus.',
    href: '/resources/library',
    status: 'Coming soon',
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    title: 'Blog',
    description:
      'Dispatches from student organizers, campaign wins, and movement insights powering fossil-free futures on campus.',
    href: '/resources/blog',
    status: 'Live',
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
        />
      </svg>
    ),
  },
]

export default function ResourcesPage() {
  return (
    <div className="page-wrapper">
      <section className="bg-brand-primary/10 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-brand-secondary">
            Resources
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
            Tools and stories for student climate organizers.
          </h1>
          <p className="text-base text-slate-700">
            Access campaign playbooks, training materials, and news from across
            the network to power your campus climate fight.
          </p>
        </div>
      </section>

      <section className="page-container stack stack-relaxed">
        <StaggerReveal
          staggerDelay={150}
          variant="blossom"
          className="grid gap-6 md:grid-cols-2"
        >
          {resourceSections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group flex flex-col rounded-3xl border border-brand-secondary/20 bg-white p-8 transition hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="rounded-2xl bg-brand-primary/10 p-3 text-brand-primary">
                  {section.icon}
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    section.status === 'Live'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {section.status}
                </span>
              </div>
              <div className="mt-6 stack stack-snug flex-1">
                <h2 className="text-2xl font-semibold text-slate-900 transition group-hover:text-brand-primary">
                  {section.title}
                </h2>
                <p className="text-sm text-slate-600">{section.description}</p>
              </div>
              <div className="mt-6 inline-flex items-center text-sm font-semibold text-brand-primary">
                Explore
                <span
                  aria-hidden="true"
                  className="ml-1 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </StaggerReveal>
      </section>

      <section className="bg-slate-900 section-dark">
        <div className="page-container stack stack-tight text-left text-white">
          <ScrollReveal variant="fade-up">
            <h2 className="text-2xl font-semibold sm:text-3xl">Need something specific?</h2>
            <p className="mt-4 text-sm text-slate-200">
              We&apos;re always building new resources based on what organizers
              need. Reach out and let us know how we can support your campaign.
            </p>
            <a
              className="mt-4 inline-flex items-center self-start rounded-full bg-brand-accent px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-yellow-300"
              href="mailto:info@campusclimatenetwork.org"
            >
              Request a Resource
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
