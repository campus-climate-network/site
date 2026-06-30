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
}

export default function CampaignsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-secondary/10 to-transparent section-hero">
        <div className="page-container">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-tight max-w-3xl text-left">
              <p className="eyebrow text-xs font-semibold text-brand-secondary sm:text-sm">
                Our work
              </p>
              <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
                Running strategic campaigns that build student power
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
              <p className="mt-4 max-w-2xl text-lg text-slate-600 sm:mt-6 sm:text-xl">
                The ability to run a strategic campaign is foundational to good
                organizing. Members of Campus Climate Network run campaigns that
                build durable power. While a majority of CCN member group
                campaigns are focused on climate and environmental justice, we
                support our members to run campaigns that build student power
                toward a more just and liveable future.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Campaign showcase */}
      <section className="bg-[#fafaf7] section-hero">
        <div className="page-container stack stack-loose">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-tight max-w-3xl">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Winning campaigns by student organizers
              </h2>
            </div>
          </ScrollReveal>

          <CampaignsCarousel campaigns={campaigns} />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-hero">
        <div className="page-container">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-snug mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Students are winning a better future
              </h2>
              <p className="mx-auto max-w-xl text-lg text-slate-600">
                CCN gives student organizers the skills, resources, and network
                to run — and win — strategic campaigns. Let&apos;s get started.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link
                  href="/take-action"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary/90"
                >
                  Get involved
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/our-network"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                >
                  Explore the network
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
