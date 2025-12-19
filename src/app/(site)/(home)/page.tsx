import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HeroCarousel } from '@/components/hero-carousel'
import { MovementCarousel } from '@/components/movement-carousel'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'
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
    'Campus Climate Network organizes students to win fossil-free research and climate justice on campus. Join 80+ member organizations nationwide.',
}

const pressLogos = [
  {
    name: 'The Guardian',
    image: '/press-logos/guardian.png',
    width: 300,
    height: 99,
    href: 'https://www.theguardian.com/us-news/2023/aug/04/harvard-professor-resigns-conocophillips-board',
  },
  {
    name: 'The New York Times',
    image: '/press-logos/new-york-times.png',
    width: 300,
    height: 41,
    href: 'https://www.nytimes.com/2022/05/24/climate/fossil-fuel-divestment.html',
  },
  {
    name: 'The Nation',
    image: '/press-logos/the-nation.png',
    width: 300,
    height: 90,
    href: 'https://www.thenation.com/article/environment/climate-change-cop27-fossil-fuel-university-research/',
  },
  {
    name: 'The Boston Globe',
    image: '/press-logos/boston-globe.png',
    width: 300,
    height: 47,
    href: 'https://www.bostonglobe.com/2025/02/18/science/mit-decarbonization-plan-saves-millions/',
  },
  {
    name: 'The Chronicle of Higher Education',
    image: '/press-logos/chronicle-higher-education.png',
    width: 896,
    height: 228,
    href: 'https://www.chronicle.com/article/big-oil-helped-shape-stanfords-latest-climate-research-focus',
  },
  {
    name: 'Mother Jones',
    image: '/press-logos/mother-jones-2025.png',
    width: 1024,
    height: 209,
    href: 'https://www.motherjones.com/environment/2024/09/fossil-fuel-funding-colleges-universities-clean-energy-transition-study-conflicts-interest/',
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
          <div className="stack stack-tight">
            <p className="eyebrow text-xs sm:text-sm text-brand-cream/70">
              Campus Climate Network
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              We're building a winning student climate movement.
            </h1>
            <p className="text-base sm:text-lg text-brand-cream/90">
              We provide students with the skills, resources, and connections to
              run winning campaigns on campus.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-yellow-300"
                href="/take-action"
              >
                Join us
              </Link>
              <Link
                className="inline-flex items-center rounded-full border border-white/50 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
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
        <div className="border-t border-white/15 bg-white/5">
          <div className="page-container py-6">
            <p className="eyebrow text-xs text-brand-cream/60 mb-4">
              Featured in
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm uppercase tracking-[0.3em] text-brand-cream/70 sm:grid-cols-3 md:flex md:flex-wrap md:items-center md:justify-center md:gap-6">
              {pressLogos.map((logo) => {
                const scale = 'scale' in logo ? logo.scale : 1
                const content = (
                  <div className="flex h-full w-full items-center justify-center">
                    <Image
                      src={logo.image}
                      alt={`${logo.name} logo`}
                      width={logo.width}
                      height={logo.height}
                      className="max-h-full max-w-full object-contain"
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
                    className="flex h-16 items-center justify-center rounded-xl bg-brand-cream/70 px-3 py-2 transition hover:bg-brand-cream sm:h-20 md:w-40 md:px-4 md:py-3"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={logo.name}
                    className="flex h-16 items-center justify-center rounded-xl bg-brand-cream/70 px-3 py-2 sm:h-20 md:w-40 md:px-4 md:py-3"
                  >
                    {content}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="page-container">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-cozy">
              <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
                Our network
              </p>
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Around the world, students just like you are kicking Big Oil off
                campus
              </h2>
              <p className="text-base text-slate-600 sm:text-lg">
                Our members share organizing playbooks, tactical trainings, and
                cross-campus solidarity so every institution can move faster
                toward fossil-free research.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <Link
                  className="inline-flex items-center rounded-full bg-brand-primary px-4 py-2 text-white transition hover:bg-brand-secondary"
                  href="/our-network"
                >
                  Member organizations
                </Link>
                <Link
                  className="inline-flex items-center rounded-full border border-brand-primary px-4 py-2 text-brand-primary transition hover:bg-brand-primary hover:text-white"
                  href="/network-campaigns"
                >
                  Campaigns
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

      <section className="bg-brand-cream/40 section-hero">
        <div className="page-container stack stack-relaxed text-left">
          <ScrollReveal variant="fade-up">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              What we do
            </h2>
          </ScrollReveal>
          <StaggerReveal
            staggerDelay={120}
            variant="blossom"
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                title: 'Train',
                subtitle: 'Hone your organizing skills',
                body: 'We provide you resources to research fossil fuel ties at your school and launch a campaign. Along the way, we develop each other as organizers through training and mentorship.',
              },
              {
                title: 'Network',
                subtitle: 'Connect with fellow student organizers',
                body: 'Meet the students who are doing this work at other schools. Our network is a place of support and connection.',
              },
              {
                title: 'Action',
                subtitle: 'Take action together',
                body: "Our movement is stronger when we use our collective voice. We facilitate coordinated action so we can't be ignored.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-secondary">
                  {item.title}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-brand-primary">
                  {item.subtitle}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="page-container">
        <div className="stack stack-mid text-left">
          <ScrollReveal variant="fade-up">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              What&apos;s next?
            </h2>
          </ScrollReveal>
          <StaggerReveal
            staggerDelay={150}
            variant="blossom"
            className="grid gap-8 lg:grid-cols-2"
          >
            <div className="rounded-3xl bg-brand-primary/10 p-8 text-brand-primary">
              <p className="text-lg text-brand-primary/90">
                Are you a university student, faculty, alumni, or community
                member?
              </p>
              <Link
                className="mt-6 inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
                href="/take-action"
              >
                Join us
              </Link>
            </div>
            <div className="rounded-3xl bg-brand-secondary/10 p-8 text-brand-secondary">
              <p className="text-lg text-brand-secondary/90">
                Do you want to support the movement?
              </p>
              <Link
                className="mt-6 inline-flex items-center rounded-full bg-brand-secondary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-primary"
                href="/donate"
              >
                Donate
              </Link>
            </div>
          </StaggerReveal>
        </div>
      </section>

      <section className="page-container">
        <div className="stack stack-mid text-left">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-dense">
              <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
                We are the movement
              </p>
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Scenes from campuses taking bold climate action
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="blossom" delay={100}>
            <MovementCarousel highlights={movementHighlights} />
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
