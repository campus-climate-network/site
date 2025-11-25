const campaignHighlights = [
  {
    title: 'Fossil Free Research',
    description:
      'Students push universities to cut fossil fuel funding from research labs and centers, exposing conflicts of interest and demanding transparency.',
  },
  {
    title: 'Invest in Real Climate Solutions',
    description:
      'Organizers win commitments to fund community-centered climate solutions, frontline partnerships, and regenerative campus operations.',
  },
  {
    title: 'End Fossil Fuel Sponsorships',
    description:
      'Campaigns to remove fossil fuel sponsorships from athletics, cultural programs, and career offices so campuses no longer normalize extraction.',
  },
  {
    title: 'Divest & Reinvest',
    description:
      'Coordinated divestment efforts across regions continue to move billions out of coal, oil, and gas, and into climate justice initiatives.',
  },
]

export default function NetworkCampaignsPage() {
  return (
    <div className="stack stack-giant pb-20">
      <section className="bg-brand-primary/10">
        <div className="mx-auto w-full max-w-6xl stack stack-tight px-6 py-20 text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
            Campaigns
          </p>
          <h1 className="text-4xl font-semibold text-brand-primary">
            Coordinated campus campaigns for fossil-free futures.
          </h1>
          <p className="text-base text-slate-700">
            Our member organizations run powerful local campaigns and come
            together for national moments that spotlight fossil fuel influence.
            Here’s a snapshot of the work underway.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl stack stack-relaxed px-6">
        <div className="stack stack-dense text-left">
          <h2 className="text-3xl font-semibold text-slate-900">
            Current priorities
          </h2>
          <p className="text-base text-slate-600">
            Each campus adapts these pillars to their local context, sharing
            playbooks, messaging, and wins through CCN.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {campaignHighlights.map((campaign) => (
            <div
              key={campaign.title}
              className="stack stack-dense rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-brand-primary">
                {campaign.title}
              </h3>
              <p className="text-sm text-slate-600">{campaign.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-6xl stack px-6 text-left text-white">
          <div className="stack stack-dense">
            <h2 className="text-3xl font-semibold">
              What we offer campaign teams
            </h2>
            <p className="text-sm text-slate-200">
              Infrastructure that helps student organizers move fast and stay
              connected.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Strategy Labs',
                body: 'Monthly campaign labs and peer coaching to refine demands, escalation plans, and power maps.',
              },
              {
                title: 'Messaging & Media',
                body: 'Shared talking points, media trainings, and amplification through CCN’s communications channels.',
              },
              {
                title: 'Rapid-Response Support',
                body: 'Mini-grants and mobilization infrastructure for actions, digital storms, and high-impact escalations.',
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
          Share your campaign
        </h2>
        <p className="text-base text-slate-600">
          We uplift stories from across the network and coordinate national
          actions. Submit your campaign or reach out for support.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
            href="/take-action"
          >
            Join coordination calls
          </a>
          <a
            className="inline-flex items-center rounded-full border border-brand-primary px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
            href="mailto:info@campusclimatenetwork.org"
          >
            Submit an update
          </a>
        </div>
      </section>
    </div>
  )
}
