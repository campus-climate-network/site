import type { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/scroll-reveal'
import { AnimatedCounter } from './animated-counter'
import { ScrollableHeader } from './scrollable-header'

export const metadata: Metadata = {
  title: '2025 Annual Report',
  description:
    'Campus Climate Network 2025 Annual Report — a year of growth, resilience, and student power in the fight for climate justice.',
  robots: { index: false, follow: false },
}

const studentQuotes = [
  {
    quote:
      'Having the support and guidance of incredible organizers has been both helpful and inspiring. It\u2019s empowering to know that there\u2019s a community of people who genuinely want to see you grow and succeed.',
    name: 'Devin Morgan',
    role: 'student at the University of Richmond and 2025 CCN Organizing Fellow',
  },
  {
    quote:
      'CCN is a fantastic organization, and they have really impacted my college organizing experience.',
    name: 'Sarah Reuben-Hallock',
    role: 'student at the University of Kansas and 2025 CCN Organizing Fellow',
  },
  {
    quote:
      'it\u2019s been great to be in community with people that are also navigating such a rough political moment on campuses.',
    name: 'Amy Okonkwo',
    role: 'student at the University of North Carolina Chapel Hill, and CCN Planning Committee Elected Representative',
  },
]

const wins = [
  {
    label: 'BP off campus',
    text: 'Princeton ended a decade-long partnership with BP',
    detail: 'following pressure from Sunrise Princeton',
    logo: '/images/impact-report/princeton-seal.png',
    logoAlt: 'Princeton University seal',
  },
  {
    label: 'Fossil free careers',
    text: 'The MIT careers fair did not include any fossil fuel companies',
    detail: 'for the first time ever due to organizing from MIT Divest',
    logo: '/images/impact-report/mit-logo.png',
    logoAlt: 'MIT logo',
  },
  {
    label: 'Fossil free research',
    text: 'Monash University in Australia passed a Fossil Free Research policy',
    detail: 'following pressure from Stop Woodside Monash',
    logo: '/images/impact-report/monash.jpg',
    logoAlt: 'Monash University seal',
  },
  {
    label: 'Compact defeated',
    text: 'No university complied with the Trump compact, 7 out of 9 schools explicitly rejected it',
    schools: [
      'MIT',
      'Brown',
      'UPenn',
      'USC',
      'University of Virginia',
      'Dartmouth',
      'University of Arizona',
    ],
  },
]

const stats = {
  studentsTrained: 1300,
  newMembers: 22,
  coachingSessions: 289,
  trainings: 88,
  fellows: 24,
} as const

const sruPartners = [
  'Sunrise Movement',
  'Ohio Student Association',
  'Youth Action Fund Florida',
  'United States Student Association',
  'American Association of University Professors (AAUP)',
  'National Education Association (NEA)',
  'Higher Ed Labor United (HELU)',
]

export default function AnnualReport2025() {
  return (
    <div className="text-pretty">
      <ScrollableHeader />

      {/* ── Sticky sub-bar ── */}
      <div className="sticky top-0 z-40 border-b border-black/5 bg-white">
        <div className="page-container flex items-center justify-between py-2.5">
          <span className="text-sm font-semibold text-slate-900">
            2025 Impact Report
          </span>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-secondary"
          >
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
            Download the Report
          </a>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-10 sm:pb-12 lg:pb-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal variant="fade-up">
            <p className="eyebrow text-xs sm:text-sm text-slate-900/40">
              2025 Impact Report
            </p>
            <h1 className="mt-6 mx-auto max-w-none! text-5xl sm:text-7xl lg:text-8xl leading-[0.9]">
              The stakes went up. Students rose up.
            </h1>
            <p className="mt-8 mx-auto max-w-2xl text-lg sm:text-xl leading-relaxed text-slate-900/60">
              In a year of rising repression, CCN students organized at over 150
              campuses, defeated Trump&apos;s loyalty oath, and pushed the
              fossil fuel industry further off campus than ever before.
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

      {/* ── Note from Executive Director ── */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <ScrollReveal variant="fade-up">
            <p className="eyebrow text-xs text-slate-900/30">
              Note from the Executive Director
            </p>
            <div className="mt-10 space-y-6">
              <p className="text-xl sm:text-2xl leading-relaxed text-slate-900">
                Student organizing in the United States has been under attack
                for years. In 2025, the repression &mdash; and the stakes
                &mdash; went up.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-slate-900/70">
                We responded in two ways. Deep investment in student organizers
                on the ground. And a strategic pivot to fight not only for
                climate demands, but against authoritarianism on campus more
                broadly.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-slate-900/70">
                2025 was a year of risk-taking and learning. In 2026, we&apos;ll
                use those lessons to sharpen our strategy and keep being the hub
                student organizers rely on to win.
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
                  <p className="text-sm text-slate-900/40">
                    Executive Director
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Year in Review ── */}
      <section className="py-20 sm:py-24 lg:py-32 bg-[#fafaf7]">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <p className="eyebrow text-xs text-slate-900/30">
                2025 at a glance
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900">
                Our progress by the numbers
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-16 space-y-12 text-center">
            <ScrollReveal variant="fade-up">
              <p className="font-display text-7xl sm:text-8xl lg:text-9xl leading-none text-slate-900">
                <AnimatedCounter value={stats.studentsTrained} suffix="+" />
              </p>
              <p className="mt-3 text-sm text-slate-900/50">students trained</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8">
              <ScrollReveal variant="fade-up" delay={100}>
                <p className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none text-slate-900">
                  <AnimatedCounter value={stats.newMembers} />
                </p>
                <p className="mt-3 text-sm text-slate-900/50">
                  new CCN member organizations
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={200}>
                <p className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none text-slate-900">
                  <AnimatedCounter value={stats.coachingSessions} />
                </p>
                <p className="mt-3 text-sm text-slate-900/50">
                  one-on-one coaching sessions
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Campaign Wins ── */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <p className="eyebrow text-xs text-slate-900/30">Campaign wins</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900">
                CCN is pushing the fossil fuel industry off campus
              </h2>
              <p className="mt-4 text-lg text-slate-900/60">
                Equipped with CCN&apos;s coaching, resources, and network,
                students across the country delivered big wins against the
                fossil fuel industry.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {wins.map((win, i) => (
              <ScrollReveal key={win.label} variant="fade-up" delay={i * 75}>
                <div className="rounded-2xl bg-[#fafaf7] p-6 h-full">
                  <p className="eyebrow text-xs text-brand-primary font-semibold">
                    {win.label}
                  </p>
                  <div className="mt-4 flex items-start gap-4">
                    {win.logo && (
                      <Image
                        src={win.logo}
                        alt={win.logoAlt ?? ''}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain shrink-0"
                      />
                    )}
                    <div>
                      <p className="text-base sm:text-lg font-semibold leading-snug text-slate-900">
                        {win.text}
                      </p>
                      {win.detail && (
                        <p className="mt-1 text-sm text-slate-900/60">
                          {win.detail}
                        </p>
                      )}
                    </div>
                  </div>
                  {win.schools && (
                    <ul className="mt-4 space-y-0.5">
                      {win.schools.map((school) => (
                        <li
                          key={school}
                          className="text-sm text-brand-secondary font-medium"
                        >
                          {school}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Takeaway: Reaching More Students ── */}
      <section className="py-20 sm:py-24 lg:py-32 bg-[#fafaf7]">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <p className="eyebrow text-xs text-slate-900/30">
                Training &amp; development
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900">
                We reached more students than ever before
              </h2>
              <p className="mt-4 text-lg text-slate-900/60">
                Meeting students where they&apos;re at &mdash; from road trip
                tours to Zoom calls between classes.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up">
            <div className="mt-16 mx-auto max-w-2xl text-center space-y-4">
              <p className="text-xl sm:text-2xl leading-relaxed text-slate-900">
                <span className="font-display text-3xl sm:text-4xl text-brand-primary">
                  <AnimatedCounter value={stats.studentsTrained} suffix="+" />
                </span>{' '}
                students trained across{' '}
                <span className="font-display text-3xl sm:text-4xl text-brand-primary">
                  <AnimatedCounter value={stats.trainings} />
                </span>{' '}
                cohort-based trainings.
              </p>
              <p className="text-xl sm:text-2xl leading-relaxed text-slate-900">
                <span className="font-display text-3xl sm:text-4xl text-brand-primary">
                  <AnimatedCounter value={stats.coachingSessions} />
                </span>{' '}
                one-on-one coaching sessions.{' '}
                <span className="font-display text-3xl sm:text-4xl text-brand-primary">
                  <AnimatedCounter value={stats.fellows} />
                </span>{' '}
                organizing fellows.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Key Takeaway: Impact + Student Quotes ── */}
      <section className="py-20 sm:py-24 lg:py-32 bg-brand-primary text-white">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <p className="eyebrow text-xs text-white/30">Student impact</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
                Students are feeling the difference
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 mx-auto max-w-2xl space-y-16">
            {studentQuotes.map((q, i) => (
              <ScrollReveal key={q.name} variant="fade-up" delay={i * 100}>
                <blockquote className="text-center">
                  <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/90 italic">
                    &ldquo;{q.quote}&rdquo;
                  </p>
                  <footer className="mt-6">
                    <p className="text-sm font-semibold text-brand-accent">
                      {q.name}
                    </p>
                    <p className="text-xs text-white/40 mt-1">{q.role}</p>
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Spotlight: Compact Response ── */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <p className="eyebrow text-xs text-slate-900/30">Spotlight</p>
              <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-slate-900">
                9 schools targeted.
                <br />0 acceptances.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={50}>
            <p className="mt-10 mx-auto max-w-2xl text-center text-lg sm:text-xl leading-relaxed text-slate-900/70">
              Within 24 hours of Trump&apos;s &ldquo;Loyalty Oath
              Compact,&rdquo; we had student leaders from all 9 targeted schools
              on a call. Within weeks, 7 schools had rejected it outright
              &mdash; and the other two remained silent.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fade" delay={150}>
          <div className="mt-12 mx-auto max-w-5xl px-6">
            <Image
              src="/images/impact-report/unc-reject-compact.jpg"
              alt="Students at UNC Chapel Hill holding signs reading 'Stand for Students, Reject Trump's Compact'"
              width={1280}
              height={720}
              className="w-full rounded-xl sm:rounded-2xl object-cover"
            />
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal variant="fade-up" delay={200}>
            <div className="mt-12 mx-auto max-w-2xl text-center space-y-5">
              <p className="text-base sm:text-lg leading-relaxed text-slate-900/70">
                Trump&apos;s &ldquo;Compact for Academic Excellence&rdquo;
                invited nine universities to receive preferential funding in
                exchange for limiting international students, excluding trans
                students, and attacking academic freedom.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-slate-900/70">
                There is no just energy transition under authoritarianism. CCN
                and our partners organized students at all nine schools to
                demand rejection &mdash; and won.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Key Takeaway: Coalition Work ── */}
      <section className="py-20 sm:py-24 lg:py-32 bg-[#fafaf7]">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <p className="eyebrow text-xs text-slate-900/30">Coalition</p>
              <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-slate-900">
                Building power beyond climate
              </h2>
              <p className="mt-4 text-lg text-slate-900/60">
                We joined forces with labor and student organizations to build
                lasting infrastructure against authoritarianism on campus.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={100}>
            <div className="mt-16 mx-auto max-w-2xl text-center space-y-5">
              <p className="text-base sm:text-lg leading-relaxed text-slate-900/70">
                This fall, we helped launch Students Rise Up (SRU) &mdash; a
                coalition of labor and student-led organizations fighting back
                against attacks on higher education.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-slate-900/70">
                On November 7th, the coalition&apos;s first coordinated day of
                action mobilized students across 100+ campuses. Immediate
                results: UNC rejected the compact. Marc Rowan &mdash; key author
                of the loyalty oath &mdash; was dismissed from Wharton&apos;s
                Board of Advisors.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200}>
            <div className="mt-12 text-center">
              <p className="eyebrow text-xs text-slate-900/30">
                Students Rise Up partners
              </p>
              <div className="mt-6 flex flex-col items-center gap-2.5">
                {sruPartners.map((partner) => (
                  <span
                    key={partner}
                    className="text-base font-medium text-slate-900/70"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Our Team ── */}
      <section className="py-20 sm:py-24 lg:py-32 bg-brand-primary text-white">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <p className="eyebrow text-xs text-white/30">Our team</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
                We doubled our team
              </h2>
              <p className="mt-4 text-lg text-white/60">
                More staff. More trainers. More coaches. All to meet the moment.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-2 gap-y-12 gap-x-8 sm:grid-cols-4 text-center">
            <ScrollReveal variant="fade-up">
              <p className="font-display text-5xl sm:text-6xl leading-none text-brand-accent">
                <AnimatedCounter value={4} />
              </p>
              <p className="mt-2 text-sm text-white/50">new staff members</p>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={75}>
              <p className="font-display text-5xl sm:text-6xl leading-none text-brand-accent">
                <AnimatedCounter value={7} />
              </p>
              <p className="mt-2 text-sm text-white/50">new trainers</p>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={150}>
              <p className="font-display text-5xl sm:text-6xl leading-none text-brand-accent">
                <AnimatedCounter value={10} />
              </p>
              <p className="mt-2 text-sm text-white/50">new coaches</p>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={225}>
              <p className="font-display text-5xl sm:text-6xl leading-none text-brand-accent">
                <AnimatedCounter value={30} suffix="+" />
              </p>
              <p className="mt-2 text-sm text-white/50">
                people on the CCN team
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fade-up" delay={100}>
            <p className="mt-16 mx-auto max-w-2xl text-center text-base sm:text-lg leading-relaxed text-white/70">
              Beyond our 7-person staff, the CCN team includes 30+ volunteer
              coordinators, trainers, coaches, and committee members who lead
              different areas of our work. Many of our newest team members got
              their start as campus organizers and developed their skills
              through CCN.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={150}>
            <div className="mt-12">
              <Image
                src="/images/impact-report/team-outdoor.jpg"
                alt="The CCN team posing outdoors with the Campus Climate Network banner"
                width={1280}
                height={960}
                className="w-full rounded-2xl sm:rounded-3xl object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Thank You ── */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-24 sm:pb-32 lg:pb-40">
        <div className="mx-auto max-w-2xl px-6">
          <ScrollReveal variant="blossom">
            <div className="text-center space-y-6">
              <Image
                src="/purple-logo.png"
                alt="Campus Climate Network"
                width={64}
                height={64}
                className="mx-auto opacity-40"
              />
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
                Thank you
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-900/60">
                To every student organizer, coach, trainer, volunteer, and
                supporter who made 2025 possible &mdash; thank you. In 2026,
                we&apos;ll sharpen our strategy, deepen our reach, and keep
                building the student power that this moment demands.
              </p>
              <p className="text-xs text-slate-900/30 pt-4">
                Campus Climate Network &middot; 2025 Impact Report
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
