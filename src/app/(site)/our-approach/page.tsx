import type { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ApproachStackingSection } from './approach-stacking-sections'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Discover how Campus Climate Network trains student organizers, coordinates national campaigns, and builds long-term infrastructure for climate justice.',
}

export default function AboutUsPage() {
  return (
    <div className="page-wrapper">
      <section className="bg-brand-cream/60 section-hero">
        <div className="page-container flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1 stack stack-tight">
            <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
              About us
            </p>
            <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
              We&apos;re organizing the next generation of climate justice
              leaders.
            </h1>
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
        <ScrollReveal variant="fade-up" className="stack stack-loose max-w-3xl">
          <div className="stack stack-dense">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Our mission
            </h2>
            <p className="text-base text-slate-600">
              Campus Climate Network is stewarding a rising generation of
              student organizers to become the backbone of the movement for a
              just and livable future. We equip student leaders with hard
              organizing skills, political education, and tools for emotional
              resilience in the face of crisis that enable them to build durable
              power on and off campus. We strengthen the connective tissue of
              the student movement, linking organizers across campuses and key
              regions into a united force that will shape movement culture and
              strategy for the long haul.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <ApproachStackingSection />
    </div>
  )
}
