const donationOptions = [
  {
    title: 'Monthly sustaining gift',
    body: 'Provide reliable support for fellowships, trainings, and staff time dedicated to campus coordination.',
  },
  {
    title: 'One-time contribution',
    body: 'Fuel rapid-response actions, campaign escalations, and new campus onboarding efforts.',
  },
  {
    title: 'Movement partnerships',
    body: 'Foundations and major donors can underwrite gatherings, stipends, and special projects across the network.',
  },
]

export default function DonatePage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="bg-brand-secondary/10">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-20 text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
            Donate
          </p>
          <h1 className="text-4xl font-semibold text-brand-primary">
            Invest in student climate leadership.
          </h1>
          <p className="text-base text-slate-700">
            Every dollar supports organizing infrastructure, training programs,
            and rapid-response actions led by students on the frontlines of
            campus climate fights.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6">
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-semibold text-slate-900">
            Ways to give
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {donationOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-3xl border border-brand-primary/20 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-brand-primary">
                {option.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{option.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-6 text-left text-white">
          <h2 className="text-2xl font-semibold">Online giving coming soon</h2>
          <p className="text-sm text-slate-200">
            We’re setting up donation infrastructure on the new site. For now,
            contribute through our fiscal sponsor or reach out directly for wire
            instructions.
          </p>
          <div className="flex gap-4">
            <a
              className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
              href="mailto:info@campusclimatenetwork.org"
            >
              Email for giving options
            </a>
            <a
              className="inline-flex items-center rounded-full border border-brand-primary px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
              href="/take-action"
            >
              Support student organizers
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
