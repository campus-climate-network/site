const featuredOrgs = [
  'Climate Justice University of Toronto',
  'Climate Justice UBC',
  'Fossil Free Stanford',
  'Institutional Climate Action (UW)',
  'Students for Environmental Concerns (Illinois)',
  'Duke Climate Coalition',
  'Sunrise Brown',
  'Fossil Free Dartmouth',
  'Yale Endowment Justice Coalition',
  'Sunrise Columbia',
  'Sunrise UMass',
  'Students Fighting Climate Change',
]

export default function OurNetworkPage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="bg-brand-secondary/10">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-20 text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
            Member Organizations
          </p>
          <h1 className="text-4xl font-semibold text-brand-primary">
            A global coalition of students fighting for fossil-free futures.
          </h1>
          <p className="text-base text-slate-700">
            Campus Climate Network is home to more than 80 student-led groups
            across North America, Europe, Africa, and Oceania. From divestment
            to Fossil Free Research to climate justice campaigns, our members
            share tactics, resources, and solidarity.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6">
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-semibold text-slate-900">
            Who’s in the network
          </h2>
          <p className="text-base text-slate-600">
            A sampling of organizations currently collaborating through CCN. We
            continually onboard new partners—get in touch to join.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredOrgs.map((org) => (
            <div
              key={org}
              className="rounded-3xl border border-brand-primary/20 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-brand-primary">{org}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-600">
          Want to appear here? Membership applications open on a rolling basis.
          Email{' '}
          <a
            className="text-brand-primary underline"
            href="mailto:info@campusclimatenetwork.org"
          >
            info@campusclimatenetwork.org
          </a>{' '}
          to learn more.
        </p>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-6 text-left text-white">
          <div>
            <h2 className="text-3xl font-semibold">Membership benefits</h2>
            <p className="mt-2 text-sm text-slate-200">
              Tools and support to help campus organizers win faster.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Organizing Playbooks',
                body: 'Campaign templates, research briefs, and rapid-response messaging that students can adapt for their campuses.',
              },
              {
                title: 'Training & Gatherings',
                body: 'College Climate Gatherings, monthly skillshares, and mentorship that connect organizers across regions.',
              },
              {
                title: 'Mini-grants & Partnerships',
                body: 'Funding, communications support, and national amplification to scale bold campus campaigns.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl bg-white/10 p-6">
                <h3 className="text-lg font-semibold text-brand-accent">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-100">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-6 px-6 text-left">
        <h2 className="text-2xl font-semibold text-slate-900">
          Join the network
        </h2>
        <p className="text-base text-slate-600">
          We welcome student-led climate justice groups ready to collaborate,
          share resources, and take collective action. Share your info and our
          onboarding team will reach out.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
            href="/take-action"
          >
            Apply for membership
          </a>
          <a
            className="inline-flex items-center rounded-full border border-brand-primary px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
            href="mailto:info@campusclimatenetwork.org"
          >
            Ask a question
          </a>
        </div>
      </section>
    </div>
  )
}
