export default function WorkWithCCNPage() {
  return (
    <div className="stack stack-giant pb-20">
      <section className="bg-brand-primary/10">
        <div className="mx-auto w-full max-w-6xl stack stack-tight px-6 py-20 text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
            Work with CCN
          </p>
          <h1 className="text-4xl font-semibold text-brand-primary">
            Collaborate with Campus Climate Network.
          </h1>
          <p className="text-base text-slate-700">
            From faculty partnerships to donor collaborations, we’re building a
            broad ecosystem that supports student climate leadership. Explore
            how to plug in.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl stack stack-relaxed px-6">
        <div className="stack stack-dense text-left">
          <h2 className="text-3xl font-semibold text-slate-900">
            Ways to work with us
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="stack stack-dense rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-primary">
              Faculty & researchers
            </h3>
            <p className="text-sm text-slate-600">
              Partner on Fossil Free Research campaigns, co-author letters, and
              mentor student organizers demanding academic integrity.
            </p>
          </div>
          <div className="stack stack-dense rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-primary">
              Donors & foundations
            </h3>
            <p className="text-sm text-slate-600">
              Resource student-led organizing with flexible funding, fellowship
              sponsorships, or in-kind support for trainings and gatherings.
            </p>
          </div>
          <div className="stack stack-dense rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-primary">
              Movement partners
            </h3>
            <p className="text-sm text-slate-600">
              Coordinate joint days of action, share research, and build
              cross-generational power for climate justice.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto w-full max-w-6xl stack stack-tight px-6 text-left text-white">
          <h2 className="text-3xl font-semibold">Get in touch</h2>
          <p className="text-sm text-slate-200">
            We tailor partnerships to your goals and our movement’s needs. Reach
            out and we’ll set up a time to talk.
          </p>
          <a
            className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
            href="mailto:info@campusclimatenetwork.org"
          >
            Email info@campusclimatenetwork.org
          </a>
        </div>
      </section>
    </div>
  )
}
