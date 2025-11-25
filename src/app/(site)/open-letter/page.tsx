const supporters = [
  'Students',
  'Faculty & researchers',
  'Alumni & donors',
  'Climate justice organizations',
]

export default function OpenLetterPage() {
  return (
    <div className="stack stack-giant pb-20">
      <section className="bg-brand-primary/10">
        <div className="mx-auto w-full max-w-6xl stack stack-tight px-6 py-20 text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
            Open Letter
          </p>
          <h1 className="text-4xl font-semibold text-brand-primary">
            End fossil fuel influence on campus research.
          </h1>
          <p className="text-base text-slate-700">
            Our open letter calls on universities to adopt Fossil Free Research
            policies, sever contracts with fossil fuel companies, and invest in
            community-led climate solutions. Add your name to stand with
            students demanding accountability.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl stack px-6">
        <div className="stack stack-dense text-left">
          <h2 className="text-3xl font-semibold text-slate-900">
            Why sign on?
          </h2>
          <p className="text-base text-slate-600">
            The more voices we have, the harder it is for universities to ignore
            the call for climate justice.
          </p>
        </div>
        <ul className="grid gap-4 text-sm text-slate-600 md:grid-cols-2">
          <li className="rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm">
            Demand transparency about all fossil fuel funding relationships.
          </li>
          <li className="rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm">
            Protect academic integrity and shield research from oil and gas
            interference.
          </li>
          <li className="rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm">
            Support a just transition by redirecting resources to solutions
            rooted in community needs.
          </li>
          <li className="rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm">
            Stand with frontline communities experiencing the violent impacts of
            extraction.
          </li>
        </ul>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto w-full max-w-6xl stack px-6 text-left text-white">
          <div className="stack stack-dense">
            <h2 className="text-3xl font-semibold">Who has signed so far</h2>
            <p className="text-sm text-slate-200">
              Thousands of supporters have endorsed the letter, representing
              campuses and movements around the world.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate-100 md:grid-cols-4">
            {supporters.map((group) => (
              <div
                key={group}
                className="rounded-3xl bg-white/10 p-4 font-semibold text-brand-accent"
              >
                {group}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl stack stack-tight px-6 text-left">
        <h2 className="text-3xl font-semibold text-slate-900">Add your name</h2>
        <p className="text-base text-slate-600">
          We’re finalizing the new signatory form. In the meantime, contact us
          and we’ll keep you updated about the next release of signatures.
        </p>
        <div className="flex gap-4">
          <a
            className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
            href="mailto:info@campusclimatenetwork.org"
          >
            Pledge your support
          </a>
          <a
            className="inline-flex items-center rounded-full border border-brand-primary px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
            href="/ffr-campaign"
          >
            Learn about FFR
          </a>
        </div>
      </section>
    </div>
  )
}
