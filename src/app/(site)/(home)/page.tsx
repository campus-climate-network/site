import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HeroCarousel } from '@/components/hero-carousel'
import { MovementCarousel } from '@/components/movement-carousel'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'
import { MemberMapWrapper } from '@/components/member-map-wrapper'
import { FAQPageJsonLd } from '@/components/json-ld'
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
}

const pressLogos = [
  {
    name: 'Chicago Tribune',
    image: '/press-logos/Chicago_Tribune_Logo.svg.png',
    width: 3840,
    height: 581,
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

const homeFaqs = [
  {
    question: 'What is Campus Climate Network?',
    answer:
      'Campus Climate Network is a coalition of 50+ student organizations fighting for climate justice on college campuses. We organize students to win fossil-free research policies, divestment commitments, and climate accountability at universities worldwide.',
  },
  {
    question: 'What does Campus Climate Network do?',
    answer:
      'We provide students with training, resources, and connections to run winning climate campaigns on campus. We share strategies, coordinate national actions, and build movement infrastructure so no campus fights Big Oil alone.',
  },
  {
    question: 'How can I join Campus Climate Network?',
    answer:
      'Fill out our intake form on the Take Action page and our organizing team will reach out with next steps. Whether you are launching a new campaign or scaling an existing effort, we provide organizer support, trainings, toolkits, and funding opportunities.',
  },
  {
    question: 'What is Fossil Free Research?',
    answer:
      'Fossil Free Research is our flagship campaign to cut fossil fuel money out of university research. For decades, oil and gas companies have funded academic research to gain legitimacy and influence climate policy. We work to expose these conflicts of interest and win binding policies that protect academic integrity.',
  },
]

export default async function Home() {
  const members = await getMembers()
  return (
    <div className="page-wrapper">
      <FAQPageJsonLd faqs={homeFaqs} />
      <section className="relative isolate overflow-hidden bg-linear-to-br from-brand-secondary via-brand-tertiary to-brand-primary text-white">
        <div className="page-container section-hero grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="stack stack-cozy">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              We&apos;re building a winning student climate movement.
            </h1>
            <p className="text-base sm:text-lg text-brand-cream/90">
              We provide students with the skills, resources, and connections to
              run winning campaigns on campus.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-brand-accent/90"
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
            <div className="grid grid-cols-2 gap-3 text-sm text-brand-cream/70 sm:grid-cols-3 xl:grid-cols-6 xl:gap-6">
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
                    className="flex h-16 items-center justify-center rounded-xl bg-brand-cream/70 px-3 py-2 transition hover:bg-brand-cream sm:h-20 lg:px-4 lg:py-3"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={logo.name}
                    className="flex h-16 items-center justify-center rounded-xl bg-brand-cream/70 px-3 py-2 sm:h-20 lg:px-4 lg:py-3"
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
              <h2 className="text-2xl font-semibold text-pretty text-slate-900 sm:text-3xl">
                Building student power on campuses across the country
              </h2>
              <p className="text-base text-slate-600 sm:text-lg">
                We are a network of student-led organizations running campaigns
                for a just and livable future.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <Link
                  className="inline-flex items-center rounded-full bg-brand-primary px-4 py-2 text-white transition hover:bg-brand-secondary"
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
            className="grid gap-6 md:grid-cols-2"
          >
            {[
              {
                title: 'Leadership Development',
                subtitle: 'Honing students’ organizing skills',
                body: 'We equip students with the skills and political analysis they need to become organizers capable of building durable power on and off campus. Support from CCN includes in-person campus trainings and dedicated coaching for their group.',
              },
              {
                title: 'Network Building',
                subtitle: 'Connecting students with fellow organizers',
                body: 'Students connect with fellow organizers on campuses across the country. These are the people they’ll be in movement with long after leaving campus. Our network is a space for peer learning, support, and relationship building.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-8">
                <p className="eyebrow text-sm font-semibold text-brand-secondary">
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
            <div className="flex h-full flex-col justify-between rounded-3xl bg-brand-primary/10 p-8 text-brand-primary">
              <p className="text-lg text-brand-primary/90">
                Are you a university student, faculty, alumni, or community
                member?
              </p>
              <Link
                className="mt-6 inline-flex w-fit items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
                href="/take-action"
              >
                Join us
              </Link>
            </div>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-brand-secondary/10 p-8 text-brand-secondary">
              <p className="text-lg text-brand-secondary/90">
                Do you want to support the movement?
              </p>
              <Link
                className="mt-6 inline-flex w-fit items-center rounded-full bg-brand-secondary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-primary"
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
