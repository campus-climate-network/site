import type { Metadata } from 'next'
import Image from 'next/image'
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
        <div className="page-container flex flex-col gap-10 lg:flex-row lg:items-center">
          <ScrollReveal variant="fade-up" className="flex-1 stack stack-tight">
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
          </ScrollReveal>
          <div className="flex-1 overflow-hidden rounded-3xl shadow-xl ring-1 ring-brand-primary/10">
            <Image
              src="/images/fossil-free-uc.jpg"
              alt="Students marching with a banner reading 'Students Need a Fossil-Fuel Free UC'"
              width={1920}
              height={1280}
              className="h-full w-full object-cover"
              priority
            />
          </div>
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
              campaigns focus on climate and environmental justice, we support
              our members in running campaigns that build student power toward
              a more just and livable future.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Closing CTA */}
      <section className="page-container">
        <ScrollReveal variant="fade-up">
          <div className="gradient-drift relative isolate overflow-hidden rounded-[2.5rem] bg-linear-to-br from-brand-secondary via-brand-tertiary to-brand-primary px-6 py-16 text-center text-white sm:px-12 sm:py-20">
            <div className="mx-auto stack stack-snug max-w-2xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Students are winning a better future
              </h2>
              <p className="mx-auto max-w-xl text-base text-white sm:text-lg">
                CCN gives student organizers the skills, resources, and network
                to run winning campaigns on campus.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link
                  href="/take-action"
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-brand-accent/90"
                >
                  Get involved
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/our-network"
                  className="inline-flex items-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
                >
                  Explore the network
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
