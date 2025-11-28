import type { Metadata } from 'next'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support student climate leadership with a donation to Campus Climate Network. Every dollar fuels organizing infrastructure, trainings, and rapid-response actions.',
}

const donationOptions = [
  {
    title: 'Monthly sustaining gift',
    body: 'Provide reliable support for fellowships, trainings, and staff time dedicated to campus coordination.',
  },
  {
    title: 'One-time contribution',
    body: 'Fuel rapid-response actions, campaign escalations, and new campus onboarding efforts.',
  },
  {
    title: 'Movement partnerships',
    body: 'Foundations and major donors can underwrite gatherings, stipends, and special projects across the network.',
  },
]

export default function DonatePage() {
  return (
    <div className="page-wrapper">
      <section className="bg-brand-secondary/10 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-brand-secondary">
            Donate
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
            Invest in student climate leadership.
          </h1>
          <p className="text-base text-slate-700">
            Every dollar supports organizing infrastructure, training programs,
            and rapid-response actions led by students on the frontlines of
            campus climate fights.
          </p>
        </div>
      </section>

      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Donate now
            </h2>
            <p className="text-base text-slate-600">
              Your contribution directly supports student climate organizers.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            <iframe
              src="https://hcb.hackclub.com/donations/start/campus-climate-network"
              name="donateFrame"
              frameBorder="0"
              allowFullScreen
              className="h-[1100px] w-full"
              style={{ border: 'none' }}
            />
          </div>
        </ScrollReveal>
      </section>

      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Ways to give
            </h2>
          </div>
        </ScrollReveal>
        <StaggerReveal
          staggerDelay={120}
          variant="blossom"
          className="grid gap-6 md:grid-cols-3"
        >
          {donationOptions.map((option) => (
            <div
              key={option.title}
              className="stack stack-dense rounded-3xl border border-brand-primary/20 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-brand-primary">
                {option.title}
              </h3>
              <p className="text-sm text-slate-600">{option.body}</p>
            </div>
          ))}
        </StaggerReveal>
        <ScrollReveal variant="fade-up" delay={200}>
          <p className="text-center text-sm text-slate-600">
            Have questions or interested in other ways to give? Email us at{' '}
            <a
              href="mailto:info@campusclimatenetwork.org"
              className="font-medium text-brand-primary hover:underline"
            >
              info@campusclimatenetwork.org
            </a>
          </p>
        </ScrollReveal>
      </section>
    </div>
  )
}
