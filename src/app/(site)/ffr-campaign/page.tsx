import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'
import { FAQPageJsonLd } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Fossil Free Research Campaign',
  description:
    'Join the Fossil Free Research campaign to cut fossil fuel money out of university research. Expose conflicts of interest and protect academic integrity.',
}

const talkingPoints = [
  {
    title: 'Expose conflicts of interest',
    body: 'Uncover hidden contracts and gifts so polluters can no longer hijack academic credibility or steer research.',
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6Z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Protect academic integrity',
    body: 'Build ironclad firewall policies so departments cannot be used as PR arms for the very corporations fueling the crisis.',
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3 20 6v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6Z" />
        <path d="M9 11.5 11 14l4-4.5" />
      </svg>
    ),
  },
  {
    title: 'Win enforceable policies',
    body: 'Organize trustees, faculty, and students to pass binding fossil-free funding rules that outlast any single administrator.',
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Document/policy paper */}
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        {/* Checkmark inside - represents enforcement/approval */}
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
]

const ffrFaqs = [
  {
    question: 'What is Fossil Free Research?',
    answer:
      'Fossil Free Research is a campaign to end fossil fuel company funding of university research. Oil and gas companies like Shell, ExxonMobil, and BP have funded academic research for decades to gain credibility, influence climate policy, and greenwash their image. We organize students and faculty to expose these conflicts of interest and win binding policies that protect academic integrity.',
  },
  {
    question: 'Why does fossil fuel funding of research matter?',
    answer:
      'Fossil fuel companies use university research partnerships to gain legitimacy, shape public narratives about climate change, and influence energy policy. Industry-funded studies often downplay climate risks or promote false solutions. By cutting these financial ties, universities can produce independent research that serves the public interest, not corporate profits.',
  },
  {
    question: 'How much money do fossil fuel companies give to universities?',
    answer:
      'A 2023 report by Fossil Free Research and Data For Progress uncovered nearly $700 million in fossil fuel funding across 27 US universities from 2010-2020. Due to lack of transparency, this figure is likely a fraction of the true total. Many universities do not disclose their industry funding relationships.',
  },
  {
    question: 'What universities have adopted Fossil Free Research policies?',
    answer:
      'VU Amsterdam adopted the most comprehensive Fossil Free Research policy to date, committing to reject funding from any fossil fuel company not demonstrably committed to Paris Agreement goals. Cambridge University renamed its BP Institute following student pressure. Harvard professor Jody Freeman resigned from the ConocoPhillips board after students exposed conflicts of interest.',
  },
  {
    question: 'How can I start a Fossil Free Research campaign at my school?',
    answer:
      'Join Campus Climate Network by filling out our intake form. We provide research guides to investigate fossil fuel ties at your university, campaign toolkits, organizer training, and connections to students running similar campaigns. Our team will help you develop strategy and build your campaign.',
  },
]

export default function FFRCampaignPage() {
  return (
    <div className="page-wrapper">
      <FAQPageJsonLd faqs={ffrFaqs} />
      <section className="bg-brand-tertiary/10 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
            Fossil Free Research
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
            Cut fossil fuel money out of university research.
          </h1>
          <p className="text-base text-slate-700">
            For decades, fossil fuel companies have known their products would
            cause climate destruction—Shell’s own reports from the 1970s
            predicted “major climatic changes.” Even as record-breaking heat,
            abnormal storms, and mass displacement became reality, these
            companies doubled down on disinformation and deregulation to protect
            profits.
          </p>
        </div>
      </section>

      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Decades of deception
            </h2>
            <p className="text-base text-slate-600">
              The fossil fuel industry leverages the prestige and credibility of
              our elite institutions to make their biased reports believable. So
              while poisoning our planet, these companies also poisoned our
              schools. They took over our centers of learning and research and
              used them to their advantage, spreading their toxic influence all
              over our academic processes. They then used the reports they
              created to influence public policy and law, strategically pushing
              for ways to keep business as usual untouched. All while wreaking
              havoc on the planet.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Why Fossil Free Research matters
            </h2>
            <p className="text-base text-slate-600">
              Students and faculty want to make their universities sites of
              innovation and breeding grounds for real climate solutions. We
              want to create the future we want and deserve, not help destroy
              it. So we are kicking Big Oil out of schools.
            </p>
          </div>
        </ScrollReveal>
        <StaggerReveal
          staggerDelay={80}
          variant="blossom"
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {talkingPoints.map((point) => (
            <div
              key={point.title}
              className="stack stack-relaxed rounded-3xl border border-brand-secondary/20 bg-white p-6"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                {point.icon}
              </div>
              <div className="stack stack-dense">
                <h3 className="text-lg font-semibold text-brand-primary">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-600">{point.body}</p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </section>

      <section className="page-container">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-cozy text-left">
            <div className="stack stack-dense">
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                What we&apos;ve already exposed
              </h2>
              <p className="text-base text-slate-600">
                Fossil Free Research is the flagship campaign of Campus Climate
                Network. Already, we’ve uncovered millions of dollars in
                research funding at our universities and won Fossil Free
                Research policies among individual faculty members, academic
                departments, at centers and institutes, and university-wide.
                Your school could be next.
              </p>
            </div>
            <Link
              href="/ffr-archive"
              className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary w-fit"
            >
              View FFR reports
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
