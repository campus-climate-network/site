import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { JoinMovementCta } from '@/components/closing-cta'
import { HeroCarousel } from '@/components/hero-carousel'
import { ScrollReveal } from '@/components/scroll-reveal'
import { CampaignsCarousel } from '../campaigns/campaigns-carousel'
import { campaigns } from '../campaigns/campaigns-data'
import { MemberMapWrapper } from '@/components/member-map-wrapper'
import { client } from '@/sanity/lib/client'
import { MEMBER_ORGS_QUERY } from '@/sanity/lib/queries'
import type { MemberOrg } from '@/components/member-map'

export const metadata: Metadata = {
  title: {
    absolute:
      'Campus Climate Network | Students Organizing for Climate Justice',
  },
  description:
    'Campus Climate Network organizes students to win fossil-free research and climate justice on campus. Join 50+ member organizations nationwide.',
  alternates: {
    canonical: '/',
  },
}

const pressLogos = [
  {
    name: 'Chicago Tribune',
    image: '/press-logos/Chicago_Tribune_Logo.svg.png',
    width: 2350,
    height: 392,
    href: 'https://www.chicagotribune.com/2024/04/22/opinion-earth-day-colleges-fossil-fuel-divestment/',
  },
  {
    name: 'The New York Times',
    image: '/press-logos/new-york-times.png',
    width: 300,
    height: 41,
    href: 'https://www.nytimes.com/2025/10/16/opinion/trump-compact-universities.html',
  },
  {
    name: 'Waging Nonviolence',
    image: '/press-logos/Waging+Nonviolence+Logo.webp',
    width: 590,
    height: 106,
    href: 'https://wagingnonviolence.org/2025/12/student-resistance-to-authoritarianism/',
  },
  {
    name: 'Teen Vogue',
    image: '/press-logos/Teen_Vogue_logo.svg.png',
    width: 960,
    height: 359,
    href: 'https://www.teenvogue.com/story/young-people-fighting-climate-anxiety-in-arkansas-parties-menstrual-cups',
  },
  {
    name: 'The Guardian',
    image: '/press-logos/guardian.png',
    width: 300,
    height: 99,
    href: 'https://www.theguardian.com/us-news/2024/sep/19/oil-donations-universities',
  },
  {
    name: 'The Nation',
    image: '/press-logos/the-nation.png',
    width: 300,
    height: 90,
    href: 'https://www.thenation.com/article/activism/university-of-florida-green-new-deal/',
  },
]

const movementHighlights = [
  {
    image: '/images/climate-justice-now-march.jpg',
    alt: 'Students holding “Climate Justice Now” and “This is Code Red” signs at a climate march.',
  },
  {
    image: '/images/future-is-now-speaker.jpg',
    alt: 'Student speaker at a podium with a “Future is Now” sign addressing an organizing summit.',
  },
  {
    image: '/images/fossil-free-uc-rally.jpg',
    alt: 'Students rallying behind a banner reading “Students need a fossil-fuel free UC”.',
  },
]

async function getMembers(): Promise<MemberOrg[]> {
  return client.fetch(
    MEMBER_ORGS_QUERY,
    {},
    {
      cache: 'force-cache',
      next: { tags: ['memberOrg'] },
    },
  )
}

export default async function Home() {
  const members = await getMembers()
  return (
    <div className="page-wrapper">
      <section className="relative isolate overflow-hidden bg-linear-to-br from-brand-secondary via-brand-tertiary to-brand-primary text-white">
        <div className="page-container section-hero grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="stack stack-cozy">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              We’re building a winning student climate movement
            </h1>
            <p className="text-base sm:text-lg text-white">
              We provide students with the skills, resources, and connections to
              run winning campaigns on campus.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-brand-accent/90"
                href="/take-action"
              >
                Join us
              </Link>
              <Link
                className="inline-flex items-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
                href="/donate"
              >
                Donate
              </Link>
            </div>
          </div>
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-brand-primary/20 blur-3xl"
              aria-hidden="true"
            />
            {/* Mobile: single static photo (FFUC rally) */}
            <div className="sm:hidden">
              <HeroCarousel photos={[movementHighlights[2]]} />
            </div>
            {/* Desktop grid */}
            <div className="relative hidden gap-4 sm:grid sm:grid-cols-2">
              {movementHighlights.map((photo, index) =>
                index === 1 ? (
                  <div
                    key={photo.image}
                    className="relative row-span-2 overflow-hidden rounded-3xl border border-white/15"
                  >
                    <Image
                      src={photo.image}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    key={photo.image}
                    className="overflow-hidden rounded-3xl border border-white/15"
                  >
                    <Image
                      src={photo.image}
                      alt={photo.alt}
                      width={620}
                      height={465}
                      className="aspect-4/3 w-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="page-container">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-cozy">
              <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
                Leadership Development
              </p>
              <h2 className="text-2xl font-semibold text-pretty text-slate-900 sm:text-3xl">
                Honing students’ organizing skills
              </h2>
              <p className="text-base text-slate-600 sm:text-lg">
                We equip student organizers with strategic capacity they need to
                become lifelong movement leaders. Support from CCN includes
                in-person campus trainings and dedicated coaching for their
                group.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="blossom" delay={150}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-brand-secondary/20">
              <Image
                src="/images/movement-hero-6.jpg"
                alt="Students gathered in a small-group discussion at a CCN organizing training."
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-brand-cream/40 section-hero">
        <div className="page-container grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <ScrollReveal variant="fade-up" className="lg:order-2">
            <div className="stack stack-cozy">
              <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
                Connective tissue
              </p>
              <h2 className="text-2xl font-semibold text-pretty text-slate-900 sm:text-3xl">
                Connecting students with fellow organizers
              </h2>
              <p className="text-base text-slate-600 sm:text-lg">
                Stronger connective tissue leads to more powerful and resilient
                student movements. The peers that students meet through CCN are
                the people they’ll be in movement with long after leaving
                campus. We build connective tissue by cultivating spaces for
                peer learning, support, and relationship building.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="blossom" delay={150} className="lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-brand-secondary/20">
              <Image
                src="/images/college-climate-gathering-banner.jpg"
                alt="Students painting a large College Climate Gathering banner together at a CCN convening."
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="page-container">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-cozy">
              <h2 className="text-2xl font-semibold text-pretty text-slate-900 sm:text-3xl">
                Building student power on campuses across the country
              </h2>
              <p className="text-base text-slate-600 sm:text-lg">
                We are a network of student-led organizations running campaigns
                for a just and livable future.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <Link
                  className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-white transition hover:bg-brand-secondary"
                  href="/our-network"
                >
                  Member organizations
                </Link>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="blossom" delay={150}>
            <div className="rounded-3xl border border-brand-secondary/30 overflow-hidden">
              <MemberMapWrapper members={members} compact />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-linear-to-br from-brand-primary via-brand-tertiary to-brand-secondary">
        <div className="py-8">
          <div className="page-container">
            <p className="eyebrow text-xs text-white/70 mb-4">Featured in</p>
          </div>
          <div className="logo-marquee">
            <div className="logo-marquee-track">
              {[0, 1, 2, 3].map((copy) => (
                <div
                  key={copy}
                  className="logo-marquee-group"
                  aria-hidden={copy > 0}
                >
                  {pressLogos.map((logo) => {
                    const scale = 'scale' in logo ? logo.scale : 1
                    const content = (
                      <div className="flex h-full w-full items-center justify-center">
                        <Image
                          src={logo.image}
                          alt={`${logo.name} logo`}
                          width={logo.width}
                          height={logo.height}
                          className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                          sizes="(max-width: 768px) 140px, 160px"
                          style={{ transform: `scale(${scale})` }}
                        />
                      </div>
                    )
                    return logo.href ? (
                      <a
                        key={logo.name}
                        href={logo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={copy > 0 ? -1 : undefined}
                        className="group flex h-16 w-40 flex-none items-center justify-center rounded-xl bg-white px-3 py-2 shadow-sm transition hover:shadow-md sm:h-20 sm:w-48 lg:px-4 lg:py-3"
                      >
                        {content}
                        <span className="sr-only">(opens in new tab)</span>
                      </a>
                    ) : (
                      <div
                        key={logo.name}
                        className="group flex h-16 w-40 flex-none items-center justify-center rounded-xl bg-white px-3 py-2 shadow-sm sm:h-20 sm:w-48 lg:px-4 lg:py-3"
                      >
                        {content}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-container">
        <div className="stack stack-mid text-left">
          <ScrollReveal variant="fade-up">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Students are winning campaigns across the country
              </h2>
              <Link
                className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary sm:hidden"
                href="/campaigns"
              >
                Explore our campaigns
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="blossom" delay={100}>
            <CampaignsCarousel
              campaigns={campaigns}
              cta={
                <Link
                  className="hidden items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary sm:inline-flex"
                  href="/campaigns"
                >
                  Explore our campaigns
                </Link>
              }
            />
          </ScrollReveal>
        </div>
      </section>

      <JoinMovementCta />
    </div>
  )
}
