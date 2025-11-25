import type { Metadata } from 'next'

import { ActionNetworkForm } from '@/components/action-network-form'

export const metadata: Metadata = {
  title: 'Take Action | Campus Climate Network',
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
    body: 'Unlock campaign playbooks, trainings, and mini-grants tailored to divestment, Fossil Free Research, and other climate justice goals.',
  },
]

export default function TakeActionPage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="bg-brand-cream/60">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-20 text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
            Take Action
          </p>
          <h1 className="text-4xl font-semibold text-brand-primary">
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

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6">
        <div className="text-left">
          <h2 className="text-3xl font-semibold text-slate-900">
            How onboarding works
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-brand-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto w-full max-w-6xl px-6 text-left">
          <div className="rounded-3xl bg-white p-8 shadow-2xl">
            <ActionNetworkForm />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-3xl bg-brand-primary/10 p-8">
          <h2 className="text-3xl font-semibold text-brand-primary">
            Upcoming opportunities
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>
              • College Climate Gathering applications open this fall—check your
              email after you sign up.
            </li>
            <li>
              • New organizer trainings launch monthly, covering campaign
              strategy, base building, and media skills.
            </li>
            <li>
              • Fellowships and stipends available for select campuses each
              semester.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
