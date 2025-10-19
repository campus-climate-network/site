const teamSections = [
  {
    title: 'Staff lead organizers',
    body: 'Our staff team coordinates national strategy, offers direct support to member organizations, and stewards the resources that make student leadership possible.',
  },
  {
    title: 'Student fellows & organizers',
    body: 'Dozens of student organizers receive stipends, fellowships, and mentorship to run high-impact campaigns on their campuses.',
  },
  {
    title: 'Advisors & alumni mentors',
    body: 'Former student organizers, movement strategists, and faculty allies provide guidance, training, and institutional memory.',
  },
]

export default function OurPeoplePage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="bg-brand-cream/60">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-20 text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
            Our People
          </p>
          <h1 className="text-4xl font-semibold text-brand-primary">
            Students, organizers, and mentors powering CCN.
          </h1>
          <p className="text-base text-slate-700">
            Campus Climate Network is led by students and supported by a small
            staff team. Meet the people behind the campaigns and community
            infrastructure we’re building together.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6">
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-semibold text-slate-900">Our team</h2>
          <p className="text-base text-slate-600">
            Detailed bios are coming soon. Until then, this gives you a sense of
            the structure supporting our network.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {teamSections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-brand-primary">
                {section.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6 text-left text-white">
          <h2 className="text-2xl font-semibold">
            Interested in joining the team?
          </h2>
          <p className="text-sm text-slate-200">
            We post staff and fellowship openings on our hiring page and share
            opportunities through our newsletter.
          </p>
          <div className="flex gap-4">
            <a
              className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
              href="/hiring"
            >
              See current openings
            </a>
            <a
              className="inline-flex items-center rounded-full border border-brand-primary px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
              href="mailto:info@campusclimatenetwork.org"
            >
              Email your resume
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
