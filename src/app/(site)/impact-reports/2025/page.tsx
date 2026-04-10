import type { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/json-ld'
import { AnimatedCounter } from './animated-counter'
import { ScrollableHeader } from './scrollable-header'

const siteUrl = 'https://campusclimatenetwork.org'
const pagePath = '/impact-reports/2025'
const pageUrl = `${siteUrl}${pagePath}`
const ogImagePath = '/images/impact-report/og-2025.jpg'
const publishedAt = '2026-04-10'

const ogTitle = 'The stakes went up. Students rose up.'
const ogDescription =
  'In a year that forced the student climate movement to confront the intersections between climate justice, democracy, and higher education, CCN members kicked Big Oil off campus and resisted authoritarianism. Read the CCN 2025 Impact Report.'

export const metadata: Metadata = {
  title: '2025 Impact Report',
  description:
    'Campus Climate Network 2025 Impact Report - key highlights from a year of student power, movement growth, and major wins on campus.',
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    type: 'article',
    url: pagePath,
    title: ogTitle,
    description: ogDescription,
    siteName: 'Campus Climate Network',
    publishedTime: publishedAt,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: 'Students gathered at the Southern College Climate Gathering with Campus Climate Network banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ogTitle,
    description: ogDescription,
    images: [ogImagePath],
  },
}

const reportDownloadHref = '/impact-reports/ccn-impact-report-2025.pdf'

const missionStatement =
  'Campus Climate Network is building power in the US student climate movement. We are building a coalition of student-led climate justice groups fighting to cut ties with the fossil fuel industry and its enablers. We provide students with the training, resources, and connections they need to run winning campaigns on campus and become the next generation of climate justice leaders.'

const studentQuotes = [
  {
    quote:
      "Having the support and guidance of incredible organizers has been both helpful and inspiring. It's empowering to know that there's a community of people who genuinely want to see you grow and succeed.",
    name: 'Devin Morgan',
    role: 'University of Richmond, 2025 CCN Organizing Fellow',
  },
  {
    quote:
      "It's been great to be in community with people that are also navigating such a rough political moment on campuses.",
    name: 'Amy Okonkwo',
    role: 'UNC Chapel Hill, CCN Planning Committee Elected Rep',
  },
  {
    quote:
      'CCN is a fantastic organization, and they have really impacted my college organizing experience.',
    name: 'Sarah Reuben-Hallock',
    role: 'University of Kansas, 2025 CCN Organizing Fellow',
  },
]

const wins = [
  {
    label: 'BP off campus',
    text: 'Princeton ended a decade-long partnership with BP',
    detail: 'Following pressure from Sunrise Princeton.',
    logo: '/images/impact-report/princeton-seal.png',
    logoAlt: 'Princeton University seal',
  },
  {
    label: 'Fossil free careers',
    text: 'MIT careers fair did not include any fossil fuel companies',
    detail: 'For the first time ever, due to organizing from MIT Divest.',
    logo: '/images/impact-report/mit-logo.png',
    logoAlt: 'MIT logo',
  },
  {
    label: 'Fossil free research',
    text: 'Monash University in Australia passed a Fossil Free Research policy',
    detail: 'Following pressure from Stop Woodside Monash.',
    logo: '/images/impact-report/monash.jpg',
    logoAlt: 'Monash University seal',
  },
]

const primaryStat = {
  value: 1300,
  suffix: '+',
  label: 'students trained',
  detail: 'Through workshops, campus gatherings, and online teach-ins.',
}

const secondaryStats = [
  {
    value: 22,
    label: 'new student groups',
    detail: 'In the CCN coalition representing 18 states.',
  },
  {
    value: 24,
    label: 'organizing fellows',
    detail:
      'In our year-long program, including financial support for fellows.',
  },
  {
    value: 289,
    label: 'coaching sessions',
    detail:
      'With students, providing one-on-one support and leadership development.',
  },
  {
    value: 88,
    label: 'cohort-based trainings',
    detail: '50 online and 38 in person, across 20 different campuses.',
  },
  {
    value: 3,
    label: 'nationwide protests',
    detail:
      'With over 100 universities participating and thousands of students across the country.',
  },
]

const teamStats = [
  { value: 4, label: 'new staff members' },
  { value: 7, label: 'new trainers' },
  { value: 10, label: 'new coaches' },
  { value: 30, label: 'people on the CCN team' },
]

const ecosystemPartnerships = [
  {
    name: 'Climate Resistance Incubator (CRI)',
    description:
      'CCN staff leaders receive regular coaching and support from Varshini Prakash, co-founder and former Executive Director of Sunrise Movement.',
    logo: '/images/impact-report/cri-logo.webp',
    logoAlt: 'Climate Resistance Incubator logo',
  },
  {
    name: 'University of Miami Climate Accountability Lab (CAL)',
    description:
      '28 students from CCN member organizations worked with Geoffrey Supran, CCN Advisory Board Member, to uncover connections between universities and fossil fuel companies.',
    logo: '/images/impact-report/umiami-logo.png',
    logoAlt: 'University of Miami logo',
  },
]

const pruPartners = [
  {
    name: 'Ohio Student Association',
    href: 'https://ohiostudentassociation.org',
  },
  { name: 'Higher Ed Labor United', href: 'https://higheredlaborunited.org' },
  {
    name: 'American Association of University Professors',
    href: 'https://www.aaup.org',
  },
  { name: 'Sunrise Movement', href: 'https://www.sunrisemovement.org' },
  {
    name: 'Educational Freedom Project',
    href: 'https://www.educationalfreedomproject.org',
  },
  { name: 'Frontline for Freedom', href: 'https://www.frontline4freedom.org' },
  { name: 'Youth Action Fund', href: 'https://www.youthactionfund.org' },
]

type DownloadReportLinkProps = {
  className: string
  label: string
}

function DownloadReportLink({ className, label }: DownloadReportLinkProps) {
  return (
    <a href={reportDownloadHref} download className={className}>
      <svg
        className="h-3.5 w-3.5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
      {label}
    </a>
  )
}

function StatCard({
  stat,
  delay,
}: {
  stat: { value: number; label: string; detail: string }
  delay: number
}) {
  return (
    <ScrollReveal variant="fade-up" delay={delay}>
      <div className="text-center">
        <p className="font-display text-6xl leading-none text-brand-primary sm:text-7xl">
          <AnimatedCounter value={stat.value} />
        </p>
        <p className="mt-4 text-2xl font-semibold leading-tight text-slate-900 [text-wrap:balance]">
          {stat.label}
        </p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-900/55">
          {stat.detail}
        </p>
      </div>
    </ScrollReveal>
  )
}

export default function ImpactReport2025() {
  return (
    <div className="text-pretty">
      <ArticleJsonLd
        title="Campus Climate Network 2025 Impact Report"
        description={ogDescription}
        url={pageUrl}
        imageUrl={`${siteUrl}${ogImagePath}`}
        datePublished={publishedAt}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: '2025 Impact Report', url: pageUrl },
        ]}
      />
      <ScrollableHeader />

      <div className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="page-container flex items-center justify-between gap-4 py-2.5">
          <span className="text-sm font-semibold text-slate-900">
            2025 Impact Report
          </span>
          <DownloadReportLink
            label="Download the Report"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-secondary"
          />
        </div>
      </div>

      <section className="pb-10 pt-20 sm:pb-12 sm:pt-24 lg:pb-16 lg:pt-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal variant="fade-up">
            <p className="eyebrow text-xs font-semibold text-brand-secondary">
              2025 Impact Report
            </p>
            <h1 className="mx-auto mt-6 flex max-w-[14rem] flex-col items-center text-5xl leading-[0.9] sm:max-w-[21rem] sm:text-7xl lg:max-w-[25rem] lg:text-8xl">
              <span className="block">The stakes</span>
              <span className="block">went up.</span>
              <span className="block">Students</span>
              <span className="block">rose up.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-900/70 sm:text-xl [text-wrap:balance]">
              In a year of rising repression, student organizers pushed the
              fossil fuel industry further off campus, trained more than 1,300
              students, and defeated Trump&apos;s compact.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal variant="fade">
        <div className="mx-auto max-w-5xl px-6">
          <Image
            src="/images/impact-report/conference-group.jpg"
            alt="Students gathered at the Southern College Climate Gathering with Campus Climate Network banner"
            width={1280}
            height={640}
            className="w-full rounded-2xl object-cover sm:rounded-3xl"
            priority
          />
        </div>
      </ScrollReveal>

      <section className="pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal variant="fade-up">
            <p className="eyebrow text-xs font-semibold text-brand-secondary">
              Note from the Executive Director
            </p>
            <div className="mt-10 space-y-6">
              <p className="text-lg leading-relaxed text-slate-900/70 sm:text-xl">
                In 2025, we confronted the intersections between climate
                justice, democracy, and higher education. International and
                undocumented students were kidnapped in broad daylight, hundreds
                of millions of dollars in public research funding were
                cancelled, and widespread measures were taken to restrict
                academic freedom. These measures are consistent with those of
                authoritarian leaders throughout history.
              </p>
              <p className="text-lg leading-relaxed text-slate-900/70 sm:text-xl">
                Big Oil stands to benefit from Trump&apos;s bid to capture US
                universities. There is no just energy transition under
                authoritarianism. History has taught us that authoritarian
                leaders seek to capture universities in order to consolidate
                power. By standing up to Trump, universities can play a role in
                defending our right to a democratic, liveable future. Students
                have the power to ensure universities stand on the right side of
                history.
              </p>
              <p className="text-lg leading-relaxed text-slate-900/70 sm:text-xl">
                While several CCN members maintained pressure on their
                universities to cut ties with Big Oil and center climate
                justice, others were called to channel their efforts toward
                defending their campuses against authoritarian capture. The CCN
                team supported students on both fronts. The leaders we&apos;ve
                developed and the relational infrastructure we&apos;ve built
                over the past three years proved foundational to the victories
                we celebrated in 2025. The further investments we made in
                developing student leaders this year will prove foundational to
                the achievements of our movement in 2026 and beyond.
              </p>
              <p className="text-lg leading-relaxed text-slate-900/70 sm:text-xl">
                The stakes of developing a skilled, connected, and winning
                student climate movement cannot be exaggerated. The student
                climate movement has the potential to play a decisive role in
                the fight for a democratic, just, and livable, future. This
                potential is not guaranteed. At CCN, we remain steadfast in our
                commitment to realizing the full potential of student power.
              </p>
              <div className="flex items-center justify-center gap-4 pt-6">
                <Image
                  src="/images/impact-report/jake-lowe.jpg"
                  alt="Jake Lowe"
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-base font-semibold text-slate-900">
                    Jake Lowe
                  </p>
                  <p className="text-sm text-slate-900/55">
                    Executive Director
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#fafaf7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold leading-[1.05] text-slate-900 sm:text-4xl [text-wrap:balance]">
                Building power in the student climate movement
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-slate-900/70 sm:text-2xl">
                {missionStatement}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f7f2] py-24 sm:py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(79,114,202,0.08),transparent_33%),radial-gradient(circle_at_90%_80%,rgba(96,55,157,0.08),transparent_36%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold leading-[1.05] text-slate-900 sm:text-4xl [text-wrap:balance]">
                We reached more students
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-900/70 sm:text-xl">
                We met students where they were at, from road trip trainings to
                Zoom calls between classes.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={60}>
            <div className="mx-auto mt-16 max-w-4xl text-center">
              <p className="font-display text-[clamp(3.75rem,11.5vw,8.75rem)] leading-[0.86] text-brand-primary">
                <AnimatedCounter
                  value={primaryStat.value}
                  suffix={primaryStat.suffix}
                />
              </p>
              <p className="mt-5 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl [text-wrap:balance]">
                {primaryStat.label}
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-900/70 sm:text-lg">
                {primaryStat.detail}
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-x-14 gap-y-12 sm:grid-cols-2">
            {secondaryStats.slice(0, 2).map((stat, index) => (
              <StatCard key={stat.label} stat={stat} delay={index * 75} />
            ))}
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
            {secondaryStats.slice(2).map((stat, index) => (
              <StatCard key={stat.label} stat={stat} delay={index * 75 + 150} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold leading-[1.05] text-slate-900 sm:text-4xl [text-wrap:balance]">
                We kicked Big Oil off campus and resisted authoritarianism
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-900/70 sm:text-xl">
                Equipped with CCN&apos;s coaching, resources, and network,
                member organizations delivered big wins against the fossil fuel
                industry &amp; attacks on higher education.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-12 max-w-3xl space-y-10">
            {wins.map((win, index) => (
              <ScrollReveal
                key={win.label}
                variant="fade-up"
                delay={index * 75}
              >
                <div>
                  <p className="eyebrow text-center text-xs font-semibold text-brand-secondary">
                    {win.label}
                  </p>
                  <div className="mx-auto mt-4 flex max-w-2xl items-start gap-4">
                    <Image
                      src={win.logo}
                      alt={win.logoAlt}
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 object-contain"
                    />
                    <div>
                      <p className="text-base font-semibold leading-snug text-slate-900 sm:text-lg">
                        {win.text}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-900/55">
                        {win.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf7] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold leading-[1.05] text-slate-900 sm:text-4xl [text-wrap:balance]">
                We pushed universities to reject Trump&apos;s demands
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={50}>
            <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-slate-900/70 sm:text-xl">
              In October, the Trump administration sent a &ldquo;Loyalty Oath
              Compact&rdquo; to nine US universities, offering special treatment
              in exchange for allegiance to a partisan ideological agenda. It
              targeted marginalized students, threatened academic freedom, and
              would have prevented universities from adopting future policies to
              cut ties with Big Oil.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fade" delay={150}>
          <div className="mx-auto mt-12 max-w-5xl px-6">
            <Image
              src="/images/impact-report/unc-reject-compact.jpg"
              alt="Students at UNC Chapel Hill holding signs reading 'Stand for Students, Reject Trump's Compact'"
              width={1280}
              height={720}
              className="w-full rounded-xl object-cover sm:rounded-2xl"
            />
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal variant="fade-up" delay={200}>
            <div className="mx-auto mt-12 max-w-2xl space-y-5 text-center">
              <p className="text-base leading-relaxed text-slate-900/70 sm:text-lg">
                Less than 24 hours after the compact was announced, we were
                organizing with students on all nine campuses.
              </p>
              <p className="text-base leading-relaxed text-slate-900/70 sm:text-lg">
                Because of our efforts, not a single university accepted the
                compact. Seven of the original nine schools rejected it
                outright, and ten others proactively said they do not support
                the compact.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-brand-primary py-20 text-white sm:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold leading-[1.05] sm:text-4xl [text-wrap:balance]">
                We developed committed organizers through rigorous, tailored
                trainings
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70 sm:text-xl">
                Students shared that working with CCN equipped them with the
                resources, skills, and connections to win campaigns in the face
                of unprecedented challenges.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 max-w-3xl space-y-16">
            {studentQuotes.map((quote, index) => (
              <ScrollReveal
                key={quote.name}
                variant="fade-up"
                delay={index * 100}
              >
                <blockquote className="text-center">
                  <p className="text-lg italic leading-relaxed text-white/90 sm:text-xl">
                    &ldquo;{quote.quote}&rdquo;
                  </p>
                  <footer className="mt-6">
                    <p className="text-sm font-semibold text-brand-accent">
                      {quote.name}
                    </p>
                    <p className="mt-1 text-xs text-white/55">{quote.role}</p>
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold leading-[1.05] text-slate-900 sm:text-4xl [text-wrap:balance]">
                We built partnerships across the ecosystem
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 max-w-3xl space-y-10">
            {ecosystemPartnerships.map((partnership, index) => (
              <ScrollReveal
                key={partnership.name}
                variant="fade-up"
                delay={index * 75}
              >
                <div className="mx-auto flex max-w-2xl items-start gap-5">
                  <Image
                    src={partnership.logo}
                    alt={partnership.logoAlt}
                    width={80}
                    height={80}
                    className="h-20 w-20 shrink-0 object-contain"
                  />
                  <div>
                    <p className="text-base font-semibold leading-snug text-slate-900 sm:text-lg">
                      {partnership.name}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-900/55">
                      {partnership.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="fade-up" delay={200}>
            <div className="mx-auto mt-16 max-w-2xl space-y-5 text-center">
              <h3 className="text-2xl font-semibold leading-[1.05] text-slate-900 sm:text-3xl [text-wrap:balance]">
                Project Rise Up
              </h3>
              <p className="text-base leading-relaxed text-slate-900/70 sm:text-lg">
                CCN joined and organized with PRU, a coalition of labor and
                student-led organizations across the country, to fight back
                against rising authoritarianism on campus.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={250}>
            <div className="mt-12 text-center">
              <p className="eyebrow text-xs font-semibold text-brand-secondary">
                Project Rise Up partners
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {pruPartners.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-medium text-slate-900/75 transition hover:border-brand-primary/20 hover:text-brand-primary"
                  >
                    {partner.name}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-brand-primary py-20 text-white sm:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold leading-[1.05] sm:text-4xl [text-wrap:balance]">
                We doubled our staff &amp; expanded our paid student positions
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70 sm:text-xl">
                We added staff, trainers, and coaches while expanding the paid
                organizing backbone behind campus campaigns.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 text-center sm:grid-cols-4">
            {teamStats.map((stat, index) => (
              <ScrollReveal
                key={stat.label}
                variant="fade-up"
                delay={index * 75}
              >
                <p className="font-display text-5xl leading-none text-brand-accent sm:text-6xl">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="mt-2 text-sm text-white/55 [text-wrap:balance]">
                  {stat.label}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="fade" delay={100}>
            <div className="mt-12">
              <Image
                src="/images/impact-report/team-outdoor.jpg"
                alt="The CCN team posing outdoors with the Campus Climate Network banner"
                width={1280}
                height={960}
                className="w-full rounded-2xl object-cover sm:rounded-3xl"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 pt-20 sm:pb-32 sm:pt-24 lg:pb-40 lg:pt-32">
        <div className="mx-auto max-w-2xl px-6">
          <ScrollReveal variant="blossom">
            <div className="space-y-6 text-center">
              <Image
                src="/purple-logo.png"
                alt="Campus Climate Network"
                width={64}
                height={64}
                className="mx-auto opacity-40"
              />
              <h2 className="mt-4 text-3xl font-semibold leading-[1.05] text-slate-900 sm:text-4xl [text-wrap:balance]">
                Thank you
              </h2>
              <p className="text-base leading-relaxed text-slate-900/70 sm:text-lg">
                To every student organizer, coach, trainer, volunteer, and
                supporter who made 2025 possible.
              </p>
              <div className="pt-2">
                <DownloadReportLink
                  label="Download the Full Report"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-secondary"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
