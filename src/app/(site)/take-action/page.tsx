import type { Metadata } from 'next'

import { ActionNetworkForm } from '@/components/action-network-form'
import { ScrollReveal } from '@/components/scroll-reveal'
import { FAQPageJsonLd } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Take Action',
  description:
    'Plug into the Campus Climate Network, get organizer support, and access trainings, toolkits, and funding for your climate justice campaign.',
}

const takeActionFaqs = [
  {
    question: 'How do I join Campus Climate Network?',
    answer:
      'Fill out our intake form on this page and our organizing team will reach out within a few days to schedule an onboarding call. We welcome students, faculty, alumni, and community members who want to fight fossil fuel influence on campus.',
  },
  {
    question: 'What support does Campus Climate Network provide?',
    answer:
      'We provide organizer training and mentorship, research guides to investigate fossil fuel ties at your school, campaign strategy support, connections to students at other campuses, coordinated national actions, and access to funding opportunities for your campaign.',
  },
  {
    question: 'Do I need an existing organization to join?',
    answer:
      'No. Whether you are starting from scratch or already have an established group, we can help. Many of our most successful campaigns started with just a few committed students. We help you build your team, develop strategy, and connect with allies.',
  },
  {
    question: 'What kinds of campaigns does Campus Climate Network support?',
    answer:
      'We support campaigns for Fossil Free Research policies, fossil fuel divestment, campus decarbonization, ending fossil fuel industry recruitment, and broader climate justice initiatives. Each campus adapts these priorities to their local context.',
  },
]

export default function TakeActionPage() {
  return (
    <div className="page-wrapper !pb-0 !gap-0">
      <FAQPageJsonLd faqs={takeActionFaqs} />
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
