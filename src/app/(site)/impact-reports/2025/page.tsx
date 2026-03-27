import type { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/scroll-reveal'
import { AnimatedCounter } from './animated-counter'
import { ScrollableHeader } from './scrollable-header'

export const metadata: Metadata = {
  title: '2025 Impact Report',
  description:
    'Campus Climate Network 2025 Impact Report - key highlights from a year of student power, movement growth, and major wins on campus.',
  robots: { index: false, follow: false },
}

// TODO: Verify filename matches the final uploaded PDF in public/impact-reports/
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
    detail: 'In our year-long program, including financial support for fellows.',
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

const sruPartners = [
  { name: 'Ohio Student Association', href: 'https://ohiostudentassociation.org' },
  { name: 'Higher Ed Labor United', href: 'https://higheredlaborunited.org' },
  { name: 'Sunrise Movement', href: 'https://www.sunrisemovement.org' },
  { name: 'American Association of University Professors', href: 'https://www.aaup.org' },
  { name: 'United States Student Association', href: 'https://usstudentassociation.org' },
  { name: 'Youth Action Fund', href: 'https://youthactionfund.org' },
]

type DownloadReportLinkProps = {
  className: string
  label: string
}

function DownloadReportLink({
  className,
  label,
}: DownloadReportLinkProps) {
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
        <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-slate-900/60">
          {stat.detail}
        </p>
      </div>
    </ScrollReveal>
  )
}

export default function ImpactReport2025() {
  return (
    <div className="text-pretty">
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
            <p className="eyebrow text-xs text-brand-secondary/80 sm:text-sm">
              2025 Impact Report
            </p>
            <h1 className="mx-auto mt-6 flex max-w-[14rem] flex-col items-center text-5xl leading-[0.9] sm:max-w-[21rem] sm:text-7xl lg:max-w-[25rem] lg:text-8xl">
              <span className="block">The stakes</span>
              <span className="block">went up.</span>
              <span className="block">Students</span>
              <span className="block">rose up.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-900/60 sm:text-xl [text-wrap:balance]">
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
            <p className="eyebrow text-xs text-brand-secondary/75">
              Note from the Executive Director
            </p>
            <div className="mt-10 space-y-6">
              <p className="text-xl leading-relaxed text-slate-900 sm:text-2xl [text-wrap:balance]">
                The year 2025 proved even more challenging for the student
                movement than in years prior. International and undocumented
                students were kidnapped, hundreds of millions of dollars in
                research funding were cancelled, and widespread measures were
                taken to restrict academic freedom. These actions are
                consistent with those of other authoritarian leaders seeking to
                consolidate power. This, the targeting of the higher education
                system, is a predictable strategy used by authoritarian leaders
                across the world.
              </p>
              <p className="text-base leading-relaxed text-slate-900/70 sm:text-lg">
                As a student climate movement, we were forced to confront the
                intersections between climate justice, democracy, and higher
                education. There is no just energy transition under
                authoritarianism. Universities have real power to either protect
                democracy or contribute to democratic backsliding based on how
                they choose to engage with authoritarian leaders. Students have
                the power to ensure universities stand on the right side of
                history. While several of our members successfully maintained
                pressure on their universities to cut ties with Big Oil and
                center climate justice (especially through decarbonization
                campaigns), many others felt a responsibility to channel their
                organizing efforts toward the broader fight to resist
                authoritarianism on campus. CCN&apos;s programming supported
                students on both fronts. The leaders we&apos;ve developed, and
                the relational infrastructure we&apos;ve built, over the past
                three years proved foundational to many of the victories we
                celebrated in 2025. The investments we made in supporting over
                1,000 student organizers in 2025 will be foundational to the
                achievements of our movement in 2026 and beyond.
              </p>
              <p className="text-base leading-relaxed text-slate-900/70 sm:text-lg">
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
                  <p className="text-sm text-slate-900/40">Executive Director</p>
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
              <p className="eyebrow text-xs text-brand-secondary/75">Our mission</p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.05] text-slate-900 sm:text-4xl [text-wrap:balance]">
                Building power in the student climate movement
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-slate-900/75 sm:text-2xl">
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
              <p className="eyebrow text-xs text-brand-secondary/75">
                2025 at a glance
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.05] text-slate-900 sm:text-4xl [text-wrap:balance]">
                We reached more students
              </h2>
              <p className="mt-4 text-lg text-slate-900/60">
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
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-900/60">
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
              <StatCard
                key={stat.label}
                stat={stat}
                delay={index * 75 + 150}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-xs text-brand-secondary/75">
                Campaign wins
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.05] text-slate-900 sm:text-4xl [text-wrap:balance]">
                CCN is pushing the fossil fuel industry off campus
              </h2>
              <p className="mt-4 text-lg text-slate-900/60">
                Equipped with CCN&apos;s coaching, resources, and network, member
                organizations delivered big wins against the fossil fuel
                industry.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-12 max-w-3xl space-y-10">
            {wins.map((win, index) => (
              <ScrollReveal key={win.label} variant="fade-up" delay={index * 75}>
                <div>
                  <p className="eyebrow text-center text-xs font-semibold text-brand-primary">
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
                      <p className="mt-2 text-sm leading-relaxed text-slate-900/60">
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

      <section className="bg-brand-primary py-20 text-white sm:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-xs text-white/60">Student impact</p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.05] sm:text-4xl [text-wrap:balance]">
                We developed committed organizers through rigorous, tailored
                trainings
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
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
                  <p className="text-lg italic leading-relaxed text-white/90 sm:text-xl lg:text-2xl">
                    &ldquo;{quote.quote}&rdquo;
                  </p>
                  <footer className="mt-6">
                    <p className="text-sm font-semibold text-brand-accent">
                      {quote.name}
                    </p>
                    <p className="mt-1 text-xs text-white/45">{quote.role}</p>
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-xs text-brand-secondary/75">Spotlight</p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.05] text-slate-900 sm:text-4xl [text-wrap:balance]">
                9 schools targeted. 0 acceptances.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={50}>
            <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-slate-900/70 sm:text-xl">
              Less than 24 hours after the compact was announced, we were
              organizing with students on all nine campuses. Because of our
              efforts, not a single university accepted the compact.
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
                The Compact for Academic Excellence in Higher Education invited
                universities to receive preferential funding in exchange for
                limiting international students, excluding trans students, and
                attacking academic freedom.
              </p>
              <p className="text-base leading-relaxed text-slate-900/70 sm:text-lg">
                Seven of the original nine schools rejected it outright, and 10
                others proactively said they did not support it. CCN and our
                partners organized students to demand rejection and won.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#fafaf7] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-xs text-brand-secondary/75">Coalition</p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.05] text-slate-900 sm:text-4xl [text-wrap:balance]">
                We built lasting infrastructure by partnering with students
                &amp; workers
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={100}>
            <div className="mx-auto mt-16 max-w-2xl space-y-5 text-center">
              <p className="text-base leading-relaxed text-slate-900/70 sm:text-lg">
                In the fall, we joined Students Rise Up, a coalition of labor
                and student-led organizations across the country fighting back
                against attacks on higher education.
              </p>
              <p className="text-base leading-relaxed text-slate-900/70 sm:text-lg">
                On November 7th, the coalition launched with a coordinated day
                of action across more than 100 universities, with thousands of
                students participating. The action helped win immediate results,
                including UNC&apos;s rejection of the compact and Marc Rowan&apos;s
                dismissal from Wharton&apos;s Board of Advisors.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200}>
            <div className="mt-12 text-center">
              <p className="eyebrow text-xs text-brand-secondary/75">
                Students Rise Up partners
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {sruPartners.map((partner) => (
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
              <p className="eyebrow text-xs text-white/60">Our team</p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.05] sm:text-4xl [text-wrap:balance]">
                We doubled our staff &amp; expanded our paid student positions
              </h2>
              <p className="mt-4 text-lg text-white/60">
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
              <p className="text-base leading-relaxed text-slate-900/60 sm:text-lg">
                To every student organizer, coach, trainer, volunteer, and
                supporter who made 2025 possible: thank you. For the fuller
                story, download the report.
              </p>
              <div className="pt-2">
                <DownloadReportLink
                  label="Download the Full Report"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-secondary"
                />
              </div>
              <p className="pt-4 text-xs text-slate-900/30">
                Campus Climate Network &middot; 2025 Impact Report
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
