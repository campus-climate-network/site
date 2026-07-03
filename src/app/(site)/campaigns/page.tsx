import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { CampaignsCarousel } from './campaigns-carousel'
import { campaigns } from './campaigns-data'

export const metadata: Metadata = {
  title: 'Campaigns',
  description:
    'Campus Climate Network members run strategic campaigns that build durable student power. Explore winning campaigns from CCN member groups across the country.',
  alternates: {
    canonical: '/campaigns',
  },
}

export default function CampaignsPage() {
  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-secondary/10 to-transparent section-hero">
        <div className="page-container">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-tight max-w-3xl text-left">
              <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
                Our work
              </p>
              <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
                Running strategic campaigns that build power
              </h1>
              <figure className="mt-4 border-l-2 border-brand-accent pl-5 sm:mt-6">
                <blockquote className="text-lg italic text-slate-700 sm:text-xl">
                  “What can we do now in order to be able to do tomorrow what we
                  are unable to do today?”
                </blockquote>
                <figcaption className="mt-2 text-sm font-medium text-slate-500">
                  — Paulo Freire
                </figcaption>
              </figure>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Campaign showcase */}
      <section className="bg-[#fafaf7] section-hero">
        <div className="page-container stack stack-loose">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-tight max-w-3xl">
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Winning campaigns by CCN members
              </h2>
            </div>
          </ScrollReveal>

          <CampaignsCarousel campaigns={campaigns} />
        </div>
      </section>

      {/* Why campaigns */}
      <section className="page-container">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-tight max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Our approach to campaigns
            </h2>
            <p className="text-base text-slate-600">
              The ability to run a strategic campaign is foundational to good
              organizing. Members of Campus Climate Network run campaigns that
              build durable power. While a majority of CCN member group
              campaigns are focused on climate and environmental justice, we
              support our members to run campaigns that build student power
              toward a more just and liveable future.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Closing CTA */}
      <section className="page-container">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-snug mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Students are winning a better future
            </h2>
            <p className="mx-auto max-w-xl text-base text-slate-600">
              CCN gives student organizers the skills, resources, and network to
              run winning campaigns on campus.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                href="/take-action"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-secondary"
              >
                Get involved
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/our-network"
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
              >
                Explore the network
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
