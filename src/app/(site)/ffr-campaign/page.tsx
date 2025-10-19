const talkingPoints = [
  {
    title: 'Expose conflicts of interest',
    body: 'Fossil fuel funding distorts research agendas and gives polluters a seat at the table when universities should be acting for the public good.',
  },
  {
    title: 'Protect academic integrity',
    body: 'Universities must safeguard scientific credibility by rejecting funding that comes with strings attached or reputational whitewashing.',
  },
  {
    title: 'Invest in climate justice',
    body: 'Redirect resources toward community-led solutions, just transition research, and partnerships with frontline movements.',
  },
]

const actions = [
  'Coordinate Fossil Free Research teach-ins and town halls',
  'Meet with trustees and research leadership to demand transparency',
  'Launch petitions and faculty letters supporting fossil-free funding policies',
  'Escalate with creative actions when universities fail to act',
]

export default function FFRCampaignPage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="bg-brand-tertiary/10">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-20 text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
            Fossil Free Research
          </p>
          <h1 className="text-4xl font-semibold text-brand-primary">
            Cut fossil fuel money out of university research.
          </h1>
          <p className="text-base text-slate-700">
            The Fossil Free Research campaign demands that universities reject
            funding from fossil fuel companies and their front groups. Students,
            faculty, and alumni are organizing for policies that protect
            research integrity and advance climate justice.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6">
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-semibold text-slate-900">
            Why Fossil Free Research matters
          </h2>
          <p className="text-base text-slate-600">
            Universities have a responsibility to pursue science in the public
            interest. Taking money from companies whose profits rely on
            extraction and misinformation undermines that mission.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {talkingPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-brand-primary">
                {point.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{point.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-6 text-left text-white">
          <div>
            <h2 className="text-3xl font-semibold">How we organize</h2>
            <p className="mt-2 text-sm text-slate-200">
              Students are escalating from research audits to mass
              mobilizations.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate-100 md:grid-cols-2">
            {actions.map((action) => (
              <div key={action} className="rounded-3xl bg-white/10 p-5">
                {action}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-6 px-6 text-left">
        <h2 className="text-2xl font-semibold text-slate-900">
          Plug into the campaign
        </h2>
        <p className="text-base text-slate-600">
          Whether you are starting a Fossil Free Research chapter or scaling an
          existing campaign, CCN can help with strategy, resources, and media
          amplification.
        </p>
        <div className="flex gap-4">
          <a
            className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
            href="/take-action"
          >
            Join a cohort call
          </a>
          <a
            className="inline-flex items-center rounded-full border border-brand-primary px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
            href="/open-letter"
          >
            Read the open letter
          </a>
        </div>
      </section>
    </div>
  )
}
