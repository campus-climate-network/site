const positions = [
  {
    title: 'Campaign Organizer (US)',
    body: 'Support campus groups with coaching, trainings, and rapid-response coordination across the United States.',
    status: 'Hiring soon – sign up for updates',
  },
  {
    title: 'Communications Fellow',
    body: 'Help tell the story of the student climate movement through press outreach, social media, and storytelling support for campaigns.',
    status: 'Applications reopen this summer',
  },
  {
    title: 'Regional Gathering Coordinator',
    body: 'Plan College Climate Gatherings that bring together organizers for strategy, skill-building, and community care.',
    status: 'Currently filled – check back later',
  },
]

export default function HiringPage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="bg-brand-secondary/10">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-20 text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
            We’re Hiring
          </p>
          <h1 className="text-4xl font-semibold text-brand-primary">
            Work with Campus Climate Network.
          </h1>
          <p className="text-base text-slate-700">
            Help students win climate justice on campuses around the world.
            We’re a distributed team of organizers, educators, and strategists
            building infrastructure for the youth climate movement.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6">
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-semibold text-slate-900">
            Open and upcoming roles
          </h2>
          <p className="text-base text-slate-600">
            We’ll post detailed job descriptions soon. In the meantime, here’s
            what we expect to hire for.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {positions.map((position) => (
            <div
              key={position.title}
              className="rounded-3xl border border-brand-primary/20 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-brand-primary">
                {position.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{position.body}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-secondary/80">
                {position.status}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6 text-left text-white">
          <h2 className="text-2xl font-semibold">Stay in the loop</h2>
          <p className="text-sm text-slate-200">
            Sign up for hiring alerts and we’ll email you when applications
            open.
          </p>
          <a
            className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
            href="mailto:info@campusclimatenetwork.org?subject=Join%20the%20CCN%20hiring%20list"
          >
            Join the hiring email list
          </a>
        </div>
      </section>
    </div>
  )
}
