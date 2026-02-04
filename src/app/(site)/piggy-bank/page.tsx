import type { Metadata } from 'next'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'CCN Piggy Bank',
  description:
    'The CCN Piggy Bank offers direct financial support to dedicated youth campus organizers working to build a durable, student-led climate justice movement.',
}

const fundingCategories = [
  {
    emoji: '📦',
    title: 'Materials & Supplies',
    description:
      'Supports materials, tools, and software that help your group run campaigns and expand its reach.',
    examples: [
      'Megaphones, printers, projectors, or screenprinting supplies',
      'Software for organizing and communication (e.g., Action Network, Slack, Zoom)',
      'Outreach items like stickers, buttons, pins, or flyers',
    ],
  },
  {
    emoji: '📣',
    title: 'Non-Violent Direct Action',
    description:
      'Supports planning and executing youth-led actions that engage your campus and community in climate campaigns.',
    examples: [
      'Supplies for banners, posters, or signs',
      'Printing flyers or outreach materials',
      'Food, water, or first-aid supplies for participants',
      'Small fees for facilitators, speakers, or contractors',
      'Room or space rentals for actions or planning meetings',
    ],
  },
  {
    emoji: '🌱',
    title: 'Events, Capacity & Community Building',
    description:
      'Supports initiatives that bring people together, strengthen your group, or grow organizing skills.',
    examples: [
      'Campus teach-ins, workshops, or trainings',
      'Planning meetings that build group capacity or networks',
      'Community and social events that advance campaigns or youth engagement',
      'Travel, food, or incidentals to support participation',
    ],
  },
  {
    emoji: '💡',
    title: 'Personal Growth',
    description:
      'Supports student and youth organizers in developing skills, knowledge, and leadership capacity.',
    examples: [
      'Attendance at workshops, retreats, or educational sessions',
      'Books, films, or other resources for political education',
      'Compensation to go towards wages lost to attend a training or organizing event',
      'Mentorship or coaching opportunities',
    ],
  },
  {
    emoji: '⚡',
    title: 'Other',
    description:
      "For funding needs that don't fit the categories above, applications will be reviewed individually to ensure alignment with CCN's mission and priorities.",
    examples: [],
  },
]

const eligibilityOrder = [
  'CCN member group',
  'Non-CCN member group, involved in aligned social justice causes',
  'Individual student/campus organizer, in CCN',
  'Individual student/campus organizer, not in CCN',
]

export default function PiggyBankPage() {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="bg-brand-secondary/10 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
            CCN Piggy Bank
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
            Financial support for student climate organizers.
          </h1>
          <div className="stack stack-dense">
            <p className="text-base text-slate-700">
              Small grants to power the student movement. The CCN Piggy Bank
              puts money directly into the hands of campus groups running
              climate justice campaigns—so you can build power, develop leaders,
              and win!
            </p>
            <p className="text-base font-semibold text-brand-primary">
              Submissions are due by February 16, 2026!
            </p>
          </div>
          <a
            className="inline-flex items-center self-start rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-secondary"
            href="https://airtable.com/appAuUL1H67TKPAEL/pagm6f25umImOEBAS/form"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Acknowledgment Section */}
      <section className="page-container">
        <ScrollReveal variant="fade-up">
          <div className="rounded-2xl border border-brand-accent/30 bg-brand-accent/10 p-6">
            <p className="text-sm text-slate-700">
              We&apos;d like to express gratitude to the{' '}
              <a
                href="https://www.ycfalliance.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-primary hover:underline"
              >
                Youth Climate Finance Alliance (YCFA)
              </a>
              . The structure of the CCN Piggy Bank is largely inspired by
              YCFA&apos;s Organizer Support Fund (OSF). Thank you YCFA for
              showing us what it looks like to redistribute resources to the
              students who make our movement powerful.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Funding Categories Section */}
      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              What funds can be used for
            </h2>
          </div>
        </ScrollReveal>
        <StaggerReveal
          staggerDelay={100}
          variant="blossom"
          className="grid gap-6 md:grid-cols-2"
        >
          {fundingCategories.map((category) => (
            <div
              key={category.title}
              className="flex h-full flex-col rounded-3xl border border-brand-secondary/20 bg-white p-6"
            >
              <div className="stack stack-dense flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-hidden="true">
                    {category.emoji}
                  </span>
                  <h3 className="text-lg font-semibold text-brand-primary">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600">{category.description}</p>
                {category.examples.length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Examples:
                    </p>
                    <ul className="mt-1 list-disc pl-4 text-sm text-slate-600">
                      {category.examples.map((example, index) => (
                        <li key={index}>{example}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </StaggerReveal>
      </section>

      {/* Eligibility Section */}
      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Who is eligible?
            </h2>
            <p className="text-base text-slate-600">
              Anyone involved in college campus organizing is eligible to apply.
              Applicants will be prioritized in the following order:
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={100}>
          <ol className="stack-list-snug list-decimal pl-6 text-base text-slate-700">
            {eligibilityOrder.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary section-dark">
        <div className="page-container text-left text-white">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-cozy">
              <div className="stack stack-dense">
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Ready to apply?
                </h2>
                <p className="text-base text-white/80">
                  Submit your application before the February 16, 2026 deadline.
                  Have questions? Reach out to our team.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="inline-flex items-center rounded-full bg-brand-accent px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-brand-accent/80"
                  href="https://airtable.com/appAuUL1H67TKPAEL/pagm6f25umImOEBAS/form"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
                <a
                  className="inline-flex items-center rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                  href="mailto:info@campusclimatenetwork.org"
                >
                  Ask a question
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
