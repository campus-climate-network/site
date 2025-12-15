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
    body: 'The fossil fuel industry’s business model is unjust at its core. The industry systematically sows doubt to delay a just energy transition. Its continued reliance on corporate violence and extraction of fossil fuels systematically harms marginalized communities.',
  },
  {
    title: 'Our universities are overrun by corporate interests.',
    body: 'A narrow set of decision makers tied to corporate donors dictate campus priorities. Private funding for research gives fossil fuel companies outsized influence. We fight for transparent, democratic governance and well-funded public research.',
  },
]

const pillars = [
  {
    title: 'We build a powerful coalition.',
    body: 'We convene student-led climate justice groups across the country, providing training, resources, and community so every organizer can run winning campaigns and stay in the movement for the long haul.',
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

const whatWeDo = [
  {
    title: 'We unify the campus climate movement',
    body: 'We share skills, work together, mentor each other, and coordinate our efforts to create a stronger and more united campus climate movement.',
  },
  {
    title: 'We run effective campaigns on campus',
    body: 'We take nonviolent direct action to force decision makers to confront the violence of the fossil fuel industry and pick a side. Our tactics are accessible, highly visible, and inspiring. They compel others to join our movement.',
  },
  {
    title: 'We frame the conversation',
    body: "We use our collective voice – on a local, national, and global scale – to set the conversation about the fossil fuel industry's influence on higher education.",
  },
  {
    title: 'We center those most impacted by the climate crisis',
    body: 'We highlight the violence enacted on marginalized groups, both in our communities and around the world, by the corporations that our universities wrongly continue to see as reputable partners. We center these frontline struggles in our campus campaigns. As a coalition, we build relationships and stand in solidarity with frontline organizations.',
  },
]

export default function OurApproachPage() {
  return (
    <div className="page-wrapper !pb-0">
      <section className="bg-brand-cream/60 section-hero">
        <div className="page-container flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1 stack stack-tight">
            <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
              Our approach
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
                className="stack stack-dense rounded-3xl border border-brand-primary/30 bg-white p-6"
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

      <section className="bg-brand-cream/60 section-dark -mt-8 sm:-mt-10 lg:-mt-12">
        <div className="page-container stack stack-tight">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-dense">
              <h2 className="text-2xl font-semibold text-brand-primary sm:text-3xl">
                What we do
              </h2>
            </div>
          </ScrollReveal>
          <StaggerReveal
            staggerDelay={120}
            variant="blossom"
            className="grid gap-6 md:grid-cols-2"
          >
            {whatWeDo.map((item) => (
              <div
                key={item.title}
                className="stack stack-dense rounded-3xl border border-brand-primary/20 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-brand-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="bg-brand-primary section-dark -mt-8 sm:-mt-10 lg:-mt-12">
        <div className="page-container stack stack-relaxed text-white">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-dense">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Theory of Change
              </h2>
            </div>
          </ScrollReveal>
          <StaggerReveal
            staggerDelay={100}
            variant="blossom"
            className="stack stack-loose max-w-3xl"
          >
            <p className="text-lg leading-relaxed text-white/90">
              If we build a large, coordinated coalition of skilled student
              climate organizers and campus community members running effective
              campaigns, we will hold the power to successfully influence
              decision-making at universities and publicly pressure them to cut
              ties with the fossil fuel industry.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              <span className="font-semibold text-brand-accent">
                We will win
              </span>{' '}
              because when we unite, we pose a credible threat to
              universities&apos; prestige, credibility, and influence, without
              which they can&apos;t survive.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              Universities have always been on the forefront of social change.
              When universities cut ties with the fossil fuel industry, other
              social institutions will follow.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              Along the way, we will equip a new generation of leaders to
              continue the fight for climate justice long after they have left
              campus.
            </p>
            <p className="text-lg font-medium leading-relaxed text-brand-accent">
              Revoking the fossil fuel industry&apos;s social license to operate
              and developing new climate justice leaders will bring us closer to
              achieving a just energy transition to stop the climate crisis.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              We subscribe to the{' '}
              <a
                href="https://www.ejnet.org/ej/jemez.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-brand-accent hover:text-brand-accent/80"
              >
                Jemez Principles for Democratic Organizing
              </a>
              .
            </p>
          </StaggerReveal>
        </div>
      </section>
    </div>
  )
}
