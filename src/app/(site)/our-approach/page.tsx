import type { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'
import { ApproachStackingSection } from './approach-stacking-sections'

export const metadata: Metadata = {
  title: 'Our Approach',
  description:
    'Discover how Campus Climate Network trains student organizers, coordinates national campaigns, and builds long-term infrastructure for climate justice.',
}

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

      <ApproachStackingSection />

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
