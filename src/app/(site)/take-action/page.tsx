import type { Metadata } from 'next'

import { ActionNetworkForm } from '@/components/action-network-form'
import { ScrollReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Take Action',
  description:
    'Plug into the Campus Climate Network, get organizer support, and access trainings, toolkits, and funding for your climate justice campaign.',
}

export default function TakeActionPage() {
  return (
    <div className="page-wrapper !pb-0">
      <section className="bg-brand-cream/60 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
            Take action
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
            Join Campus Climate Network.
          </h1>
          <p className="text-base text-slate-700">
            Ready to build power on your campus? Fill out the intake form below
            and our organizing team will reach out with next steps. Whether
            you’re launching a new campaign or scaling an existing effort, we’re
            here to help.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 section-dark">
        <div className="page-container text-left">
          <ScrollReveal variant="blossom">
            <div className="rounded-3xl bg-white p-8 shadow-2xl">
              <ActionNetworkForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
