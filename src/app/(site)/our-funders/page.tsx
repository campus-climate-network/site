const funders = [
  {
    name: 'Climate Emergency Fund',
    description:
      'Supporting rapid-response organizing and training for student-led climate justice campaigns.',
  },
  {
    name: 'Meliore Foundation',
    description:
      'Investing in movement infrastructure, strategic communications, and global collaboration.',
  },
  {
    name: 'Sierra Club Foundation',
    description:
      'Backing campus and community-based projects that accelerate a just transition.',
  },
  {
    name: 'Heising-Simons Foundation',
    description:
      'Funding research and organizing that holds institutions accountable to science-based climate goals.',
  },
]

export default function OurFundersPage() {
  return (
    <div className="stack stack-giant pb-20">
      <section className="bg-brand-cream/60">
        <div className="mx-auto w-full max-w-6xl stack stack-tight px-6 py-20 text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
            Our Funders
          </p>
          <h1 className="text-4xl font-semibold text-brand-primary">
            Resourcing student power for climate justice.
          </h1>
          <p className="text-base text-slate-700">
            We partner with foundations and individual donors who believe in
            youth-led solutions. Their support enables Campus Climate Network to
            invest in organizers, host trainings, and provide the infrastructure
            our coalition needs to win.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl stack stack-relaxed px-6">
        <div className="stack stack-dense text-left">
          <h2 className="text-3xl font-semibold text-slate-900">
            Featured Institutional Supporters
          </h2>
          <p className="text-base text-slate-600">
            A snapshot of the partners who have resourced our work to date.
            We’re building a diversified funding base to sustain the long-haul
            fight for climate justice.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {funders.map((funder) => (
            <div
              key={funder.name}
              className="stack stack-dense rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-brand-primary">
                {funder.name}
              </h3>
              <p className="text-sm text-slate-600">{funder.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto w-full max-w-6xl stack px-6 text-left text-white">
          <div className="stack stack-snug">
            <h2 className="text-3xl font-semibold">
              How funding moves through CCN
            </h2>
            <p className="text-sm text-slate-200">
              Every contribution strengthens frontline organizing and long-term
              leadership development.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Student Fellowships',
                body: 'Stipends, fellowships, and project grants that allow organizers to focus on campaigns without sacrificing financial stability.',
              },
              {
                title: 'Trainings & Gatherings',
                body: 'Regional College Climate Gatherings, onboarding cohorts, and targeted skill-building sessions for member organizations.',
              },
              {
                title: 'Campaign Partnerships',
                body: 'Rapid-response mini-grants, communications support, and national coordination for strategic campus actions.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="stack stack-dense rounded-3xl bg-white/10 p-6"
              >
                <h3 className="text-lg font-semibold text-brand-accent">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-100">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl stack stack-tight px-6 text-left">
        <h2 className="text-3xl font-semibold text-slate-900">
          Partner with us
        </h2>
        <p className="text-base text-slate-600">
          We welcome conversations with aligned funders who want to resource
          student leadership, climate justice, and fossil-free futures. Reach
          out to discuss sponsorships, multi-year support, or in-kind
          contributions.
        </p>
        <div className="flex gap-4">
          <a
            className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
            href="mailto:info@campusclimatenetwork.org"
          >
            Email our development team
          </a>
          <a
            className="inline-flex items-center rounded-full border border-brand-primary px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
            href="/donate"
          >
            Give online
          </a>
        </div>
      </section>
    </div>
  )
}
