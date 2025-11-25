import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FFR Reports',
  description:
    'Reports exposing fossil fuel influence in academic research from campaigns across the network.',
}

const reports = [
  {
    title: 'A Year Just Like Any Other',
    subtitle: 'Another £1.6 Million to Oxford University from the Fossil Industry in 2020-21',
    image: '/reports/Aug 13 Screenshot from Notion.png',
    organization: 'Oxford Climate Justice Campaign',
    year: '2022',
    link: '#',
  },
  {
    title: 'Bound to Big Oil',
    subtitle: 'The University of Toronto and Its Ties to the Fossil Fuel Industry',
    image: '/reports/Aug 13 Screen Shot from Notion.png',
    organization: 'University of Toronto Divestment Campaign',
    year: '2023',
    link: '#',
  },
  {
    title: 'Money, People, Reputation',
    subtitle: "Oxford's Ties with the Fossil Fuel Industry",
    image: '/reports/Aug 13 Screen Shot from Notion (1).png',
    organization: 'Oxford Climate Justice Campaign',
    year: '2021',
    link: '#',
  },
  {
    title: 'Accountable Allies',
    subtitle: 'The Undue Influence of Fossil Fuel Money in Academia',
    image: '/reports/Aug 13 Screen Shot from Notion (2).png',
    organization: 'Campus Climate Network',
    year: '2024',
    link: '#',
  },
]

export default function FfrReportsPage() {
  return (
    <main className="min-h-screen bg-stone-950">
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="font-instrument text-4xl leading-tight text-white md:text-6xl">
            FFR Reports
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone-300">
            Research and investigative reports from campaigns across the network exposing fossil fuel 
            influence in academic institutions.
          </p>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {reports.map((report) => (
              <Link
                key={report.title}
                href={report.link}
                className="group relative overflow-hidden rounded-2xl bg-stone-900 transition-all hover:bg-stone-800"
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={report.image}
                    alt={report.title}
                    width={600}
                    height={750}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-sm font-medium text-red-400">
                    {report.organization} · {report.year}
                  </p>
                  <h3 className="mt-2 font-instrument text-2xl text-white">
                    {report.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone-300">
                    {report.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-800 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-instrument text-2xl text-white md:text-3xl">
            Have a report to share?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-400">
            We're building an archive of research exposing fossil fuel ties in academia. 
            Send us your campaign's reports to be featured.
          </p>
          <a
            href="mailto:info@campusclimatenetwork.org"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-medium text-white transition-colors hover:bg-red-700"
          >
            Submit a report
          </a>
        </div>
      </section>
    </main>
  )
}
