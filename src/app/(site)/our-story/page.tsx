import Image from 'next/image'

const timeline = [
  {
    title: 'A movement rooted in divestment',
    body: 'Student groups across the US and beyond have fought for fossil fuel divestment for more than a decade, winning billions divested and building lasting power on their campuses.',
  },
  {
    title: 'Fossil Free Research emerges',
    body: 'In 2022, students launched Fossil Free Research to expose fossil fuel funding of university research that greenwashes corporate power and creates conflicts of interest.',
  },
  {
    title: 'Campus Climate Network forms',
    body: 'In 2023, organizers came together to coordinate campaigns, share tools, and invest in long-term leadership. CCN now supports more than 80 member organizations worldwide.',
  },
]

const values = [
  {
    title: 'Movement Infrastructure',
    description:
      'We provide stipends, fellowships, and training that let student organizers dedicate real time to their campaigns and stay in the work after graduation.',
  },
  {
    title: 'Community Care',
    description:
      'We prioritize mutual support, political education, and accessible organizing spaces so our coalition thrives and resists burnout.',
  },
  {
    title: 'Collective Action',
    description:
      'We connect campus victories to global climate justice fights, coordinating national days of action and uplifting frontline demands.',
  },
]

export default function OurStoryPage() {
  return (
    <div className="stack stack-giant pb-20">
      <section className="bg-brand-primary/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center">
          <div className="flex-1 stack stack-cozy">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
              Our Story
            </p>
            <h1 className="text-4xl font-semibold text-brand-primary">
              Students have always changed what’s possible.
            </h1>
            <p className="text-base text-slate-700">
              Campus Climate Network was created by student organizers who saw a
              need for shared infrastructure, deeper political alignment, and a
              home for campaigns that expose fossil fuel influence. We’re
              building a future where universities act for climate justice
              because their students demanded nothing less.
            </p>
          </div>
          <div className="flex-1 overflow-hidden rounded-3xl shadow-xl ring-1 ring-brand-primary/10">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/65185cb4b4a109287b7263ef/6d66edcc-4d29-4edc-b358-50544c429351/large.png"
              alt="Campus organizers marching together"
              width={1280}
              height={853}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl stack stack-loose px-6">
        <div className="stack stack-dense text-left">
          <h2 className="text-3xl font-semibold text-slate-900">
            How we got here
          </h2>
          <p className="text-base text-slate-600">
            Our coalition stands on the shoulders of divestment campaigns,
            Fossil Free Research organizers, and countless campus coalitions
            demanding climate justice.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {timeline.map((moment) => (
            <div
              key={moment.title}
              className="stack stack-dense rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-brand-primary">
                {moment.title}
              </h3>
              <p className="text-sm text-slate-600">{moment.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto w-full max-w-6xl stack px-6 text-left text-white">
          <div className="stack stack-dense">
            <h2 className="text-3xl font-semibold">Our pillars</h2>
            <p className="text-sm text-slate-200">
              The student climate movement wins when we care for our people and
              fight together.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="stack stack-dense rounded-3xl bg-white/10 p-6"
              >
                <h3 className="text-lg font-semibold text-brand-accent">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="stack stack-cozy">
            <h2 className="text-3xl font-semibold text-slate-900">
              What’s next
            </h2>
            <p className="text-base text-slate-600">
              We’re expanding training programs, supporting regional gatherings,
              and launching new campaigns that tackle fossil fuel influence in
              research, procurement, and campus finances. We know none of this
              happens alone, and we are excited to build with you.
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              <a
                className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-white transition hover:bg-brand-secondary"
                href="/take-action"
              >
                Join the network
              </a>
              <a
                className="inline-flex items-center rounded-full border border-brand-primary px-5 py-2 text-brand-primary transition hover:bg-brand-primary hover:text-white"
                href="/donate"
              >
                Invest in students
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-brand-primary/10">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/65185cb4b4a109287b7263ef/916625be-5800-4164-a4f6-ed2493981542/signal-2022-05-17-12-34-44-220-2.jpg"
              alt="Students holding a banner during a campus action"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
