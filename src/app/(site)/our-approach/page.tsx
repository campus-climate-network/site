import type { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Our Approach',
  description:
    'Discover how Campus Climate Network trains student organizers, coordinates national campaigns, and builds long-term infrastructure for climate justice.',
}

const challenges = [
  {
    title: 'The climate crisis is here and we must act now.',
    body: 'Climate change is an existential threat to humanity and a driver of injustice at every level. Its impacts are already being felt around the world. Tackling climate change requires an immediate and just energy transition away from fossil fuels that centers frontline communities.',
  },
  {
    title: 'The fossil fuel industry impedes climate justice.',
    body: 'Fossil fuel corporations sow doubt, fund disinformation, and rely on corporate violence to protect their profits. Their model harms marginalized communities and delays the energy transition we need.',
  },
  {
    title: 'Our universities are overrun by corporate interests.',
    body: 'A narrow set of decision makers tied to corporate donors dictate campus priorities. Private funding for research gives fossil fuel companies outsized influence. We fight for transparent, democratic governance and well-funded public research.',
  },
]

const pillars = [
  {
    title: 'We build a powerful coalition.',
    body: 'We convene student-led climate justice groups across continents, providing training, resources, and community so every organizer can run winning campaigns and stay in the movement for the long haul.',
  },
  {
    title: 'We favor decentralized, grassroots change.',
    body: 'Campus organizers know their institutions best. We support them with strategy, tools, and national alignment while honoring local leadership and decision making.',
  },
  {
    title: 'We connect to the broader climate justice movement.',
    body: 'We partner with allied organizations, respond to moments of mass mobilization, and ensure campus campaigns reinforce global demands for a just transition.',
  },
]

export default function OurApproachPage() {
  return (
    <div className="page-wrapper !pb-0">
      <section className="bg-brand-cream/60 section-hero">
        <div className="page-container flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1 stack stack-tight">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-brand-secondary">
              Our Approach
            </p>
            <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
              We&apos;re organizing the next generation of climate justice
              leaders.
            </h1>
            <p className="text-base text-slate-700">
              Campus Climate Network empowers students to challenge fossil fuel
              influence and win concrete commitments from their universities. We
              train organizers, share resources, and build cross-campus
              solidarity so climate justice wins everywhere.
            </p>
          </div>
          <div className="flex-1 overflow-hidden rounded-3xl shadow-xl ring-1 ring-brand-primary/10">
            <Image
              src="/images/students-rally.jpg"
              alt="Students rallying for climate justice"
              width={1280}
              height={853}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Vision & mission
            </h2>
          </div>
        </ScrollReveal>
        <StaggerReveal
          staggerDelay={150}
          variant="blossom"
          className="stack stack-loose max-w-3xl"
        >
          <div className="stack stack-snug">
            <h3 className="text-xl font-semibold text-brand-primary">Vision</h3>
            <p className="text-base text-slate-600">
              We strive for a world free from the influence of the fossil fuel
              industry and its enablers, where universities can become true
              climate leaders.
            </p>
          </div>
          <div className="stack stack-snug">
            <h3 className="text-xl font-semibold text-brand-primary">
              Mission
            </h3>
            <p className="text-base text-slate-600">
              Campus Climate Network is building power in the US student climate
              movement. We are building a coalition of student-led climate
              justice groups fighting to cut ties with the fossil fuel industry
              and its enablers. We provide students with the training,
              resources, and connections they need to run winning campaigns on
              campus and become the next generation of climate justice leaders.
            </p>
          </div>
        </StaggerReveal>
      </section>

      <section className="bg-slate-900 section-dark">
        <div className="page-container stack stack-tight text-white">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-dense">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                What we&apos;re up against
              </h2>
              <p className="text-sm text-slate-200">
                We&apos;re honest about the landscape so we can strategize to
                win.
              </p>
            </div>
          </ScrollReveal>
          <StaggerReveal
            staggerDelay={120}
            variant="blossom"
            className="grid gap-6 lg:grid-cols-3"
          >
            {challenges.map((item) => (
              <div
                key={item.title}
                className="stack stack-dense rounded-3xl bg-white/10 p-6"
              >
                <h3 className="text-lg font-semibold text-brand-accent">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-100">{item.body}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="bg-brand-primary/10 section-dark -mt-8 sm:-mt-10 lg:-mt-12">
        <div className="page-container stack stack-tight">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-dense">
              <h2 className="text-2xl font-semibold text-brand-primary sm:text-3xl">
                How we unite
              </h2>
              <p className="text-base text-slate-600">
                We weave together decentralized grassroots campaigns into a
                powerful, coordinated movement.
              </p>
            </div>
          </ScrollReveal>
          <StaggerReveal
            staggerDelay={120}
            variant="blossom"
            className="grid gap-6 lg:grid-cols-3"
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="stack stack-dense rounded-3xl border border-brand-primary/30 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-brand-primary">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600">{pillar.body}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>
    </div>
  )
}
