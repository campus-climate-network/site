import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'
import { FAQPageJsonLd } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Network Campaigns',
  description:
    'Explore coordinated campus campaigns for fossil-free futures including Fossil Free Research, divestment, and ending fossil fuel sponsorships.',
}

const campaigns = [
  {
    slug: 'fossil-free-research',
    title: 'Fossil Free Research',
    description:
      "For decades, the fossil fuel industry has sought to mislead the public on the realities of climate change and obstruct climate action. Fossil fuel funded research provides Big Oil with undue legitimacy, bolsters industry greenwashing, and skews the research we need to inform a just energy transition. It's time to end fossil fuel-funded research at our schools.",
  },
  {
    slug: 'campus-decarbonization',
    title: 'Campus decarbonization',
    description:
      'Universities cannot be true climate leaders while continuing to rely on oil and gas for energy. We are fighting back against performative carbon neutrality plans that lack transparency and rely on greenwashing solutions such as carbon offsets. We demand genuine campus decarbonization.',
  },
  {
    slug: 'green-new-deal',
    title: 'Green New Deal for campuses',
    description:
      "To achieve a just energy transition, we will have to change everything. Let's start with our universities.",
  },
  {
    slug: 'fossil-free-careers',
    title: 'Fossil free careers',
    description:
      'We envision a future with just, green, good jobs for all. Fossil fuel industry recruitment on our campuses must stop.',
  },
  {
    slug: 'fossil-fuel-divestment',
    title: 'Fossil fuel divestment',
    description:
      'Our planet is burning and our schools are investing in the fire. Our endowments must not be used to fuel the climate crisis.',
  },
]

const campaignFaqs = [
  {
    question: 'What is fossil fuel divestment?',
    answer:
      'Fossil fuel divestment is the removal of investment assets like stocks and bonds from companies that extract, process, or sell fossil fuels. Students campaign for their university endowments to divest from oil, gas, and coal companies to align institutional values with climate action and remove social license from polluters.',
  },
  {
    question: 'What is campus decarbonization?',
    answer:
      'Campus decarbonization means transitioning university operations away from fossil fuels for heating, cooling, and electricity. We fight against greenwashing carbon neutrality plans that rely on offsets rather than genuine emissions reductions, and push for transparent, science-based decarbonization timelines.',
  },
  {
    question: 'What are fossil free careers campaigns?',
    answer:
      'Fossil free careers campaigns work to end fossil fuel industry recruitment on college campuses. Oil and gas companies recruit heavily at universities, especially in engineering and business programs. These campaigns push for career fairs and recruiting events that prioritize employers building a just, green economy.',
  },
  {
    question: 'How do campus climate campaigns connect to each other?',
    answer:
      'Campus Climate Network coordinates campaigns across universities so that local wins build national momentum. We share playbooks, messaging, and tactics. When one campus wins a policy, we help others replicate that success. Coordinated actions amplify media attention and pressure on the fossil fuel industry.',
  },
]

export default function NetworkCampaignsPage() {
  return (
    <div className="page-wrapper">
      <FAQPageJsonLd faqs={campaignFaqs} />
      <section className="bg-brand-primary/10 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
            Campaigns
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
            Coordinated campus campaigns for fossil-free futures.
          </h1>
          <p className="text-base text-slate-700">
            Our member organizations run powerful local campaigns and come
            together for national moments that spotlight fossil fuel influence.
            Here&apos;s a snapshot of the work underway.
          </p>
        </div>
      </section>

      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Current priorities
            </h2>
            <p className="text-base text-slate-600">
              Each campus adapts these pillars to their local context, sharing
              playbooks, messaging, and wins through CCN.
            </p>
          </div>
        </ScrollReveal>
        <StaggerReveal
          staggerDelay={100}
          variant="blossom"
          className="grid gap-6 md:grid-cols-2"
        >
          {campaigns.map((campaign) => (
            <div
              key={campaign.slug}
              className="flex flex-col rounded-3xl border border-brand-secondary/20 bg-white p-6"
            >
              <div className="stack stack-dense flex-1">
                <h3 className="text-lg font-semibold text-brand-primary">
                  {campaign.title}
                </h3>
                <p className="text-sm text-slate-600">{campaign.description}</p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </section>

      <section className="bg-brand-primary section-dark">
        <div className="page-container text-left text-white">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-cozy">
              <div className="stack stack-dense">
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Get your campaign started today
                </h2>
                <p className="text-base text-white/80">
                  Whether you are just starting out or looking to scale your
                  campaign, we can help you get started.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  className="inline-flex items-center rounded-full bg-brand-accent px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-brand-accent/80"
                  href="/take-action"
                >
                  Schedule an onboarding call
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
