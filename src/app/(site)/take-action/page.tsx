import type { Metadata } from 'next'

import { ActionNetworkForm } from '@/components/action-network-form'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Take Action',
  description:
    'Plug into the Campus Climate Network, get organizer support, and access trainings, toolkits, and funding for your climate justice campaign.',
}

const steps = [
  {
    title: 'Share your campaign goals',
    body: 'Tell us about your campus, current demands, and the support you need. We’ll connect you with resources and peers running similar strategies.',
  },
  {
    title: 'Join orientation calls',
    body: 'New members join monthly onboarding sessions to meet other organizers, learn about CCN offerings, and plug into upcoming trainings.',
  },
  {
    title: 'Access toolkits & funding',
    body: 'Unlock campaign playbooks, trainings, and mini-grants tailored to divestment, Fossil Free Research, and other climate justice campaigns.',
  },
]

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

      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              How onboarding works
            </h2>
          </div>
        </ScrollReveal>
        <StaggerReveal
          staggerDelay={120}
          variant="blossom"
          className="grid gap-6 md:grid-cols-3"
        >
          {steps.map((step) => (
            <div
              key={step.title}
              className="stack stack-dense rounded-3xl border border-brand-secondary/20 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-brand-primary">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600">{step.body}</p>
            </div>
          ))}
        </StaggerReveal>
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
