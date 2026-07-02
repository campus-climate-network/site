import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Quote } from 'lucide-react'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'
import { AnimatedCounter } from '@/app/(site)/impact-reports/2025/animated-counter'
import { WinsShowcase } from './wins-showcase'
import { studentWins } from './wins-data'

export const metadata: Metadata = {
  title: 'Impact',
  description:
    'See the impact of the student climate movement: leaders trained, campaigns won, and the lasting infrastructure CCN is building alongside partners across the movement.',
}

// ── Section 01 · Leadership development ──────────────────────────────────────
const leadershipStats = [
  {
    value: 24,
    label: 'Organizing fellows',
    detail: 'In our year-long, paid fellowship program.',
  },
  {
    value: 289,
    label: 'Coaching sessions',
    detail: 'One-on-one leadership development with students.',
  },
  {
    value: 88,
    label: 'Cohort-based trainings',
    detail: 'Across 20 campuses, online and in person.',
  },
]

const studentPhotos = [
  {
    src: '/images/impact-report/conference-group.jpg',
    alt: 'Students gathered at the Southern College Climate Gathering with the CCN banner.',
  },
  {
    src: '/images/students-rally.jpg',
    alt: 'Students rallying together at a campus climate demonstration.',
  },
  {
    src: '/images/movement-hero-4.jpg',
    alt: 'Students marching with signs at a climate demonstration.',
  },
  {
    src: '/images/impact-report/team-outdoor.jpg',
    alt: 'The CCN team posing outdoors with the Campus Climate Network banner.',
  },
]

// Real student testimonials (CCN 2025 Impact Report).
const testimonials = [
  {
    quote:
      "Having the support and guidance of incredible organizers has been both helpful and inspiring. It's empowering to know that there's a community of people who genuinely want to see you grow and succeed.",
    name: 'Devin Morgan',
    role: 'University of Richmond · 2025 CCN Organizing Fellow',
  },
  {
    quote:
      "It's been great to be in community with people that are also navigating such a rough political moment on campuses.",
    name: 'Amy Okonkwo',
    role: 'UNC Chapel Hill · CCN Planning Committee Elected Rep',
  },
  {
    quote:
      'CCN is a fantastic organization, and they have really impacted my college organizing experience.',
    name: 'Sarah Reuben-Hallock',
    role: 'University of Kansas · 2025 CCN Organizing Fellow',
  },
]

// ── Section 03 · Movement infrastructure ─────────────────────────────────────
// Real ecosystem partnerships (CCN 2025 Impact Report).
// ⚠️ PLACEHOLDER: Section 03 calls for a quote from a partner organization to
// build credibility. We don't have a real one yet — replace the quote and the
// attribution below before relying on this. The text shows the intended tone.
const partnerQuote = {
  quote:
    'CCN has become essential infrastructure for the student climate movement — the leaders they develop and the relationships they build make every organization around them more effective.',
  name: 'Add a real partner quote here',
  org: 'Partner organization · name & title',
}

const studentQuotes = [
  {
    quote:
      "I have never been a part of a national group of organizers and [it is] extremely inspiring and helpful to hear everyone's experiences on their campus.",
    org: 'Student Organizer at the University of Arkansas',
  },
  {
    quote:
      'Having the support and guidance of incredible organizers has been both helpful and inspiring. It’s empowering to know that there’s a community of people who genuinely want to see you grow and succeed. The resources, mentorship, and sense of solidarity I’ve gained through [CCN] have been invaluable for my work on campus and beyond.',
    org: 'Student Organizer at University of Richmond',
  },
]

// ── Closing call to action (one path per audience) ───────────────────────────
const ctaCards = [
  {
    audience: 'Students',
    title: 'Join the movement',
    description:
      'Find your campus group or start one, and get the training to run a winning campaign.',
    cta: 'Get involved',
    href: '/take-action',
  },
  {
    audience: 'Funders & donors',
    title: 'Fuel the work',
    description:
      'Your support trains students and sustains the organizing backbone behind every win.',
    cta: 'Donate',
    href: '/donate',
  },
  {
    audience: 'Organizations',
    title: 'Partner with us',
    description: 'Movement-aligned org? Let’s build student power together.',
    cta: 'Get in touch',
    href: '/contact-us',
  },
]

function SectionLabel({
  number,
  children,
  className = '',
}: {
  number: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-display text-lg leading-none">{number}</span>
      <span className="h-px w-8 bg-current opacity-40" />
      <span className="eyebrow text-xs font-semibold">{children}</span>
    </div>
  )
}

export default function ImpactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-secondary/10 to-transparent section-hero">
        <div className="page-container">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-tight max-w-3xl text-left">
              <p className="eyebrow text-xs font-semibold text-brand-secondary sm:text-sm">
                Our impact
              </p>
              <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
                Developing leaders and building a fossil-free future
              </h1>
              <p className="max-w-2xl text-lg text-slate-700 sm:text-xl">
                We train students to run winning campaigns, back them as they
                take on the fossil fuel industry and attacks on democracy, and
                build the lasting infrastructure the movement needs to keep
                growing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 01 · Leadership development (for students) */}
      <section className="section-hero">
        <div className="page-container stack stack-loose">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-tight max-w-3xl">
              <SectionLabel number="01" className="text-brand-secondary">
                Students
              </SectionLabel>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                We develop the next generation of climate leaders
              </h2>
              <p className="text-lg text-slate-600">
                We’ve supported thousands of student organizers across the
                country to grow through hundreds of 1:1 coaching calls, group
                coaching conversations, virtual trainings, and in person
                trainings.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal
            variant="fade-up"
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
          >
            {studentPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </StaggerReveal>

          <ScrollReveal variant="fade-up">
            <div className="rounded-3xl bg-brand-secondary/[0.07] px-6 py-10 sm:px-10">
              <p className="eyebrow text-xs font-semibold text-brand-secondary">
                In 2025 alone
              </p>
              <dl className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {leadershipStats.map((stat) => (
                  <div key={stat.label}>
                    <dd className="font-display text-4xl text-brand-primary sm:text-5xl">
                      <AnimatedCounter value={stat.value} />
                    </dd>
                    <dt className="mt-2 text-base font-semibold text-slate-900">
                      {stat.label}
                    </dt>
                    <p className="mt-1 text-sm text-slate-600">{stat.detail}</p>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>

          <div className="stack stack-relaxed">
            <ScrollReveal variant="fade-up">
              <h3 className="max-w-2xl text-xl font-semibold text-slate-900 sm:text-2xl">
                What students say
              </h3>
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal
                  key={testimonial.name}
                  variant="fade-up"
                  delay={index * 75}
                >
                  <figure className="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
                    <Quote className="h-7 w-7 text-brand-secondary/40" />
                    <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-700">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-6">
                      <p className="text-sm font-semibold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {testimonial.role}
                      </p>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal variant="fade-up">
            <Link
              href="/take-action"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition hover:text-brand-secondary"
            >
              Join the movement
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 02 · Campaign wins (for funders & movement orgs) */}
      <section className="bg-[#fafaf7] section-hero">
        <div className="page-container stack stack-loose">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-tight max-w-3xl">
              <SectionLabel number="02" className="text-brand-primary">
                Campuses
              </SectionLabel>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                We shape the future of higher education
              </h2>
              <p className="text-lg text-slate-600">
                Equipped with CCN&apos;s coaching, resources, and network,
                member organizations deliver tangible wins: kicking Big Oil off
                campus, defending higher education, and proving that organized
                students can move even the most stubborn institutions.
              </p>
            </div>
          </ScrollReveal>

          <WinsShowcase wins={studentWins} />
        </div>
      </section>

      {/* 03 · Movement infrastructure (for partners & funders) */}
      <section className="bg-brand-primary text-white section-hero">
        <div className="page-container stack stack-loose">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-tight max-w-3xl">
              <SectionLabel number="03" className="text-brand-accent">
                Movement
              </SectionLabel>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                We&apos;re building lasting infrastructure for the movement
              </h2>
              <p className="text-lg text-white/70">
                We&rsquo;re strengthening the connective tissue of the student
                movement. The relationships we cultivate empower students to
                organize on campus and will last long after students graduate.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up">
            <figure className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 sm:p-10">
              <Quote className="h-8 w-8 text-brand-accent/60" />
              <blockquote className="mt-4 text-xl font-medium leading-relaxed text-white/90 sm:text-2xl">
                {partnerQuote.quote}
              </blockquote>
              <figcaption className="mt-6 text-sm text-white/60">
                <span className="font-semibold text-brand-accent">
                  {partnerQuote.name}
                </span>{' '}
                — {partnerQuote.org}
              </figcaption>
            </figure>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {studentQuotes.map((studentQuote, index) => (
              <ScrollReveal
                key={studentQuote.org}
                variant="fade-up"
                delay={index * 75}
              >
                <figure className="flex h-full flex-col rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
                  <Quote className="h-7 w-7 text-brand-accent/60" />
                  <blockquote className="mt-4 flex-1 text-lg font-medium leading-relaxed text-white/90">
                    {studentQuote.quote}
                  </blockquote>
                  <figcaption className="mt-6 text-sm font-semibold text-brand-accent">
                    {studentQuote.org}
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — one path per audience */}
      <section className="section-hero">
        <div className="page-container">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-snug mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Be part of what&apos;s next
              </h2>
              <p className="mx-auto max-w-xl text-lg text-slate-600">
                Whether you want to organize, fund the work, or partner with us
                — there&apos;s a place for you in this movement.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ctaCards.map((card, index) => (
              <ScrollReveal
                key={card.title}
                variant="fade-up"
                delay={index * 75}
              >
                <Link
                  href={card.href}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <p className="eyebrow text-xs font-semibold text-brand-secondary">
                    {card.audience}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-slate-600">
                    {card.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition-all group-hover:gap-2.5">
                    {card.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
