import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ScrollReveal } from '@/components/scroll-reveal'
import { BreadcrumbJsonLd } from '@/components/json-ld'
import { client } from '@/sanity/lib/client'
import { MOVEMENT_WINS_BY_CAMPAIGN_QUERY } from '@/sanity/lib/queries'
import { WinsTimeline } from '@/app/(site)/student-wins/wins-timeline'

const siteUrl = 'https://campusclimatenetwork.org'

interface MovementWin {
  _id: string
  title: string
  date: string
  description?: string
  campaign?: string
  link?: string
  memberOrg: {
    _id: string
    name: string
    logoUrl?: string
  }
}

// Campaign configuration with SEO titles and descriptions
const campaignConfig: Record<
  string,
  {
    title: string
    seoTitle: string
    description: string
    emptyMessage: string
  }
> = {
  'fossil-free-research': {
    title: 'Fossil Free Research',
    seoTitle: 'What universities have banned fossil fuel research funding?',
    description:
      'Universities are ending fossil fuel-funded research, refusing to let Big Oil buy academic credibility. These wins represent institutions choosing scientific integrity over industry money.',
    emptyMessage:
      'No research ban wins recorded yet. Be the first to win this fight at your campus!',
  },
  'campus-decarbonization': {
    title: 'Campus Decarbonization',
    seoTitle: 'What universities are decarbonizing their campuses?',
    description:
      'These universities are moving beyond greenwashing toward genuine emissions reductions. Each win represents a campus committing to real climate action.',
    emptyMessage:
      'No decarbonization wins recorded yet. Help your campus take the lead!',
  },
  'green-new-deal': {
    title: 'Green New Deal for Campuses',
    seoTitle: 'What universities have adopted Green New Deal policies?',
    description:
      'Student-led campaigns are transforming universities into models for a just transition. These wins show what comprehensive climate justice looks like in higher education.',
    emptyMessage:
      'No Green New Deal wins recorded yet. Start the campaign at your university!',
  },
  'fossil-free-careers': {
    title: 'Fossil Free Careers',
    seoTitle: 'What universities have ended fossil fuel recruitment?',
    description:
      'Students are demanding their career centers stop promoting jobs that fuel the climate crisis. These universities have taken a stand for just, green careers.',
    emptyMessage:
      'No fossil free careers wins recorded yet. Push your campus to act!',
  },
  'fossil-fuel-divestment': {
    title: 'Fossil Fuel Divestment',
    seoTitle: 'What universities have divested from fossil fuels?',
    description:
      'From small colleges to major research universities, institutions are pulling their money out of coal, oil, and gas. Every divestment win sends a message that fossil fuels have no future.',
    emptyMessage:
      'No divestment wins recorded yet. Join the global movement to divest!',
  },
}

const campaignLabels: Record<string, string> = {
  'fossil-free-research': 'Fossil Free Research',
  'campus-decarbonization': 'Campus Decarbonization',
  'green-new-deal': 'Green New Deal',
  'fossil-free-careers': 'Fossil Free Careers',
  'fossil-fuel-divestment': 'Fossil Fuel Divestment',
  other: 'Other',
}

interface PageProps {
  params: Promise<{ campaign: string }>
}

export async function generateStaticParams() {
  return Object.keys(campaignConfig).map((campaign) => ({
    campaign,
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { campaign } = await params
  const config = campaignConfig[campaign]

  if (!config) {
    return {
      title: 'Campaign Not Found',
    }
  }

  return {
    title: config.seoTitle,
    description: config.description,
  }
}

async function getWinsByCampaign(campaign: string): Promise<MovementWin[]> {
  return client.fetch(MOVEMENT_WINS_BY_CAMPAIGN_QUERY, { campaign })
}

export default async function CampaignDetailPage({ params }: PageProps) {
  const { campaign } = await params
  const config = campaignConfig[campaign]

  if (!config) {
    notFound()
  }

  const wins = await getWinsByCampaign(campaign)

  return (
    <div className="page-wrapper">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Network Campaigns', url: `${siteUrl}/network-campaigns` },
          { name: config.title, url: `${siteUrl}/network-campaigns/${campaign}` },
        ]}
      />
      <section className="bg-brand-secondary/10 section-hero">
        <div className="page-container stack stack-tight text-left">
          <Link
            href="/network-campaigns"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-secondary hover:text-brand-primary transition-colors mb-2"
          >
            <span aria-hidden="true">←</span>
            All campaigns
          </Link>
          <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
            {config.title}
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
            {config.seoTitle}
          </h1>
          <p className="text-base text-slate-700">{config.description}</p>
        </div>
      </section>

      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              {wins.length > 0
                ? `${wins.length} wins and counting`
                : 'No wins yet'}
            </h2>
            <p className="text-base text-slate-600">
              {wins.length > 0
                ? 'A timeline of victories achieved by student organizers across the movement.'
                : config.emptyMessage}
            </p>
          </div>
        </ScrollReveal>

        {wins.length > 0 ? (
          <WinsTimeline wins={wins} campaignLabels={campaignLabels} />
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
            <p className="text-slate-600 mb-4">{config.emptyMessage}</p>
            <Link
              href="/take-action"
              className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
            >
              Start organizing
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}
