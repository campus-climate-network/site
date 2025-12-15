import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/scroll-reveal'
import { client } from '@/sanity/lib/client'
import { MOVEMENT_WINS_QUERY } from '@/sanity/lib/queries'
import { WinsTimeline } from './wins-timeline'

export const metadata: Metadata = {
  title: 'Student Wins',
  description:
    'Celebrate the victories won by students in the climate movement—from divestment commitments to policy changes at universities across the country.',
}

interface MovementWin {
  _id: string
  title: string
  date: string
  description?: string
  campaign?: string
  link?: string
  memberOrg: {
    _id: string
    name: string
    logoUrl?: string
  }
}

async function getMovementWins(): Promise<MovementWin[]> {
  return client.fetch(MOVEMENT_WINS_QUERY)
}

const campaignLabels: Record<string, string> = {
  'fossil-free-research': 'Fossil Free Research',
  'campus-decarbonization': 'Campus Decarbonization',
  'green-new-deal': 'Green New Deal',
  'fossil-free-careers': 'Fossil Free Careers',
  'fossil-fuel-divestment': 'Fossil Fuel Divestment',
  other: 'Other',
}

export default async function StudentWinsPage() {
  const wins = await getMovementWins()

  return (
    <div className="page-wrapper">
      <section className="bg-brand-secondary/10 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
            Movement
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
            Student wins
          </h1>
          <p className="text-base text-slate-700">
            Every victory here represents countless hours of organizing,
            coalition-building, and unwavering commitment from students who
            refused to accept the status quo. These wins prove that when
            students unite, institutions listen.
          </p>
        </div>
      </section>

      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Timeline of victories
            </h2>
            <p className="text-base text-slate-600">
              A chronological record of wins achieved by our member
              organizations.
            </p>
          </div>
        </ScrollReveal>

        {wins.length > 0 ? (
          <WinsTimeline wins={wins} campaignLabels={campaignLabels} />
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
            <p className="text-slate-600">
              No wins recorded yet. Check back soon as our network continues to
              grow and achieve victories.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
