import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HeroCarousel } from '@/components/hero-carousel'
import { MovementCarousel } from '@/components/movement-carousel'
import { ScrollReveal } from '@/components/scroll-reveal'
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
    title: 'NYC students flood the streets for climate justice',
    description:
      'Campus Climate Network organizers helped pack the 2023 march demanding the end of fossil fuel expansion.',
    image: '/images/movement-hero-1.jpg',
    alt: 'Campus Climate Network organizers leading a march through downtown streets.',
  },
  {
    title: 'University of Toronto occupies RBC campus branch',
    description:
      'Students with Climate Justice UofT staged a sit-in to force their university to cut ties with the fossil fuel financier.',
    image: '/images/movement-hero-2.jpg',
    alt: 'Students staging a sit-in with banners demanding fossil fuel divestment.',
  },
  {
    title: 'Brown Divest wins major victory',
    description:
      'Student organizers secured a commitment to phase out fossil fuel funding after years of sit-ins and coalition building.',
    image: '/photoprotest.jpg',
    alt: 'Student organizers gathered outside a university building calling for climate action.',
  },
  {
    title: 'Sunrise NYU pushes trustees to divest',
    description:
      'Hundreds marched through campus and delivered signatures that helped drive NYU’s divestment decision.',
    image: '/images/movement-hero-4.jpg',
    alt: 'Students marching with signs demanding divestment from fossil fuels.',
  },
  {
    title: 'Organizers strategize at national summit',
    description:
      'Student leaders from across the country gather to share tactics and build solidarity at our annual training summit.',
    image: '/images/movement-hero-6.jpg',
    alt: 'Students gathered in a circle discussion at an organizing summit.',
  },
]

async function getMembers(): Promise<MemberOrg[]> {
  return client.fetch(MEMBER_ORGS_QUERY)
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
            {/* Mobile carousel */}
            <div className="sm:hidden">
              <HeroCarousel photos={movementHighlights} />
            </div>
            {/* Desktop grid */}
            <div className="relative hidden gap-4 sm:grid sm:grid-cols-2 sm:grid-rows-3">
              {movementHighlights.slice(0, 5).map((photo, index) => (
                <div
                  key={photo.image}
                  className={
                    index === 0
                      ? 'row-span-2 overflow-hidden rounded-3xl border border-white/20'
                      : 'overflow-hidden rounded-3xl border border-white/15'
                  }
                >
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    width={index === 0 ? 620 : 280}
                    height={index === 0 ? 760 : 260}
                    className="h-full w-full object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
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
                We equip students with the skills and political analysis they
                need to become organizers capable of building durable power on
                and off campus. Support from CCN includes in-person campus
                trainings and dedicated coaching for their group.
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
                Students connect with fellow organizers on campuses across the
                country. These are the people they’ll be in movement with long
                after leaving campus. Our network is a space for peer learning,
                support, and relationship building.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="blossom" delay={150} className="lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-brand-secondary/20">
              <Image
                src="/images/students-rally.jpg"
                alt="A group of student organizers smiling together at a climate march, holding divestment signs."
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
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Scenes from campuses taking bold climate action
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="blossom" delay={100}>
            <MovementCarousel highlights={movementHighlights} />
          </ScrollReveal>
        </div>
      </section>

      <section className="page-container">
        <ScrollReveal variant="fade-up">
          <div className="gradient-drift relative isolate overflow-hidden rounded-[2.5rem] bg-linear-to-br from-brand-secondary via-brand-tertiary to-brand-primary px-6 py-16 text-center text-white sm:px-12 sm:py-20">
            <div className="mx-auto stack stack-snug max-w-2xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Be part of what’s next
              </h2>
              <p className="mx-auto max-w-xl text-base text-white sm:text-lg">
                Whether you want to organize on your campus or fuel the movement
                from anywhere, there’s a place for you in this fight.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
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
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
