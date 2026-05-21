import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'
import { AnimatedCounter } from '@/app/(site)/impact-reports/2025/animated-counter'
import { WinsShowcase } from './wins-showcase'
import { studentWins } from './wins-data'

export const metadata: Metadata = {
  title: 'Student Wins',
  description:
    'Celebrate the victories won by students in the climate movement—from divestment commitments to policy changes at universities across the country.',
}

const stats: {
  prefix?: string
  value: number
  suffix?: string
  label: string
  groupDigits?: boolean
}[] = [
  { value: 3000, suffix: '+', label: 'Students trained', groupDigits: true },
  { value: 60, suffix: '+', label: 'Campuses organized' },
  { prefix: '$', value: 100, suffix: 'B', label: 'Endowment dollars moved' },
]

export default function StudentWinsPage() {
  return (
    <div className="page-wrapper">
      <section className="bg-brand-secondary/10 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
            Movement
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
            Student wins.
          </h1>
          <p className="max-w-2xl text-base text-slate-700">
            Every victory here represents countless hours of organizing,
            coalition-building, and unwavering commitment from students who
            refused to accept the status quo. These wins prove that when
            students unite, institutions change.
          </p>
        </div>
      </section>

      <section className="-mt-8 bg-brand-primary text-white section-dark sm:-mt-10 lg:-mt-12">
        <div className="page-container">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dd className="font-display text-4xl sm:text-5xl">
                  {stat.prefix}
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    groupDigits={stat.groupDigits}
                  />
                </dd>
                <dt className="mt-2 text-sm text-white/70">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="max-w-3xl text-2xl font-semibold sm:text-3xl">
              <span className="text-slate-900">
                Students are winning big on campus.
              </span>{' '}
              <span className="text-slate-400">
                They have real power when organized, and this generation of
                leaders is demanding a livable future.
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <WinsShowcase wins={studentWins} />
      </section>

      <section className="page-container">
        <div className="stack stack-snug rounded-3xl bg-brand-primary px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Your campus could be next.
          </h2>
          <p className="mx-auto max-w-xl text-base text-white/80">
            Every win started with a few students who decided to organize. Join
            the movement, start a campaign, or fuel the work with a donation.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/take-action"
              className="inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-primary transition hover:bg-white/90"
            >
              Start a campaign
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center rounded-xl border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
