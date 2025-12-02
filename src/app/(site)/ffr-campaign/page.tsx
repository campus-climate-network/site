import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Fossil Free Research Campaign',
  description:
    'Join the Fossil Free Research campaign to cut fossil fuel money out of university research. Expose conflicts of interest and protect academic integrity.',
}

const talkingPoints = [
  {
    title: 'Expose conflicts of interest',
    body: 'Audit every contract and gift so fossil fuel front groups can no longer hide behind academic logos or dictate research agendas.',
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
    title: 'Invest in climate justice',
    body: 'Redirect endowment-scale resources toward community-led solutions, transition research, and frontline partnerships.',
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
        {/* Seedling growing - represents investment in green future */}
        <path d="M12 22V12" />
        <path d="M12 12c0-3 2.5-5 6-5-1 4-3 5-6 5Z" />
        <path d="M12 15c0-2.5-2-4-5-4 .8 3.2 2.5 4 5 4Z" />
        {/* Hands cupping/supporting */}
        <path d="M7 22c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5" />
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

export default function FFRCampaignPage() {
  return (
    <div className="page-wrapper">
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
              Polluters needed the prestige of elite institutions to sanitize
              their biased research, so they poured money into centers,
              departments, and labs—poisoning the very places meant to advance
              human knowledge. They leveraged that borrowed credibility to shape
              public policy and law, keeping business-as-usual intact while the
              planet burned.
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
              We are not letting Big Oil get away with capturing our campuses.
              Students and faculty are turning universities into sites of
              innovation and real climate solutions—not pipelines for corporate
              PR and extraction. We are kicking fossil fuel money out of schools
              for good.
            </p>
          </div>
        </ScrollReveal>
        <StaggerReveal
          staggerDelay={80}
          variant="blossom"
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4"
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
                Network. We have already uncovered millions of dollars in hidden
                fossil funding, winning Fossil Free Research policies from
                individual faculty members to entire departments, centers, and
                universities. Your school could be next.
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
