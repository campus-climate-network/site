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
    title: 'Accountable Allies',
    subtitle: 'The Undue Influence of Fossil Fuel Money in Academia',
    image: '/reports/Aug 13 Screen Shot from Notion (2).png',
    organization: 'Campus Climate Network',
    year: '2024',
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
    title: 'A Year Just Like Any Other',
    subtitle: 'Another £1.6 Million to Oxford University from the Fossil Industry in 2020-21',
    image: '/reports/Aug 13 Screenshot from Notion.png',
    organization: 'Oxford Climate Justice Campaign',
    year: '2022',
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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reports.map((report) => (
              <Link
                key={report.title}
                href={report.link}
                className="group"
              >
                {/* Document card */}
                <div className="relative overflow-hidden rounded-sm bg-stone-900 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-500/10">
                    <div className="p-3">
                      <Image
                        src={report.image}
                        alt={report.title}
                        width={400}
                        height={500}
                        className="w-full rounded-sm"
                      />
                    </div>
                </div>
                
                {/* Text below */}
                <div className="mt-4">
                  <h3 className="font-instrument text-lg text-white group-hover:text-red-400 transition-colors">
                    {report.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone-400">
                    {report.organization}
                  </p>
                  <p className="text-sm text-stone-500">
                    {report.year}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
