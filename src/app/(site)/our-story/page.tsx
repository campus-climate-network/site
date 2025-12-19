import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Timeline } from '@/components/timeline'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Learn how Campus Climate Network emerged from the student divestment movement to become a coalition of 80+ organizations fighting for climate justice on campus.',
}

const timelineEvents = [
  {
    date: 'March 2022',
    title: 'The Fossil Free Research movement is born',
    description:
      'Fossil Free Research launches with the release of our open letter, which has been signed by 1,000 academics from around the world—including IPCC authors and Nobel Prize winners—calling for an end to fossil fuel funding for climate and energy research.',
  },
  {
    date: 'May 2022',
    title: 'Our first coordinated action',
    description:
      'Student organizers from Oxford, Cambridge, and George Washington University stage the first coordinated action for Fossil Free Research. Following the action, organizers with Cambridge Climate Justice win their demand to rename the BP Institute at Cambridge.',
  },
  {
    date: 'March 2023',
    title: 'Data For Progress report launch',
    description:
      'Fossil Free Research, in collaboration with Data For Progress, released a first-of-its-kind report uncovering nearly $700 million in fossil fuel money across 27 US universities from 2010-2020. Due to a lack of transparency across institutions of higher education, this figure—while alarming—is likely a mere fraction of the true total.',
  },
  {
    date: 'March 2023',
    title: 'A historic Fossil Free Research win',
    description:
      'VU Amsterdam announces the most comprehensive Fossil Free Research policy to date by committing to reject funding from any fossil fuel company whose business model is not demonstrably committed to the goals of the Paris Agreement in the short term. FFR works with students from VU Amsterdam to amplify the role of activism in reaching this decision and what it means for our movement.',
  },
  {
    date: 'August 2023',
    title: 'An academic and oil company board member resigns',
    description:
      "Harvard environmental law professor Jody Freeman resigns from the ConocoPhillips Board. Momentum toward this decision was sparked by a Freedom of Information Act request (submitted by one of our coalition members) revealing that Freeman lobbied the Securities and Exchange Commission on behalf of Conoco, but only disclosed her ties to Harvard. Ensuring campus activism from CCN member group Fossil Fuel Divest Harvard, in collaboration with allied climate groups, soon resulted in Freeman's resignation from the Conoco board.",
  },
  {
    date: 'September 2023',
    title: 'Panel event and climate march',
    description:
      'At New York Climate week, one of the first opportunities for student climate activists to convene in person since the pandemic, Fossil Free Research coordinates a panel event on the state of campus organizing attended by over 60 student organizers from the US and Canada. The next day, members of the coalition march for climate justice alongside 75,000 others in New York City.',
  },
  {
    date: 'October 2023',
    title: 'FFR becomes Campus Climate Network',
    description:
      'Fossil Free Research becomes the Campus Climate Network in an effort to build power among all campus campaigns demanding that their universities cut ties with the fossil fuel industry and its enablers.',
  },
]

export default function OurStoryPage() {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="bg-brand-primary/10 section-hero">
        <div className="page-container stack stack-tight max-w-3xl">
          <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
            Our story
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
            How we got here.
          </h1>
          <p className="text-base text-slate-700">
            From a grassroots open letter to a coalition of 80+ campus
            organizations, here&apos;s the journey of our movement.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="page-container">
        <div className="max-w-4xl mx-auto">
          <Timeline items={timelineEvents} />
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-slate-900 section-dark">
        <div className="page-container">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-cozy text-white max-w-2xl">
              <div className="stack stack-dense">
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Read more about CCN
                </h2>
                <p className="text-sm text-slate-200">
                  Explore our blog for updates, reflections, and insights from
                  our movement.
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center rounded-full bg-brand-accent px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-brand-accent/90 w-fit"
              >
                Visit our blog
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-container">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-cozy max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Join the movement
            </h2>
            <p className="text-base text-slate-600">
              Whether you&apos;re a student, academic, or supporter,
              there&apos;s a place for you in the Campus Climate Network.
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              <Link
                className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-white transition hover:bg-brand-secondary"
                href="/take-action"
              >
                Take action
              </Link>
              <Link
                className="inline-flex items-center rounded-full border border-brand-primary px-5 py-2 text-brand-primary transition hover:bg-brand-primary hover:text-white"
                href="/donate"
              >
                Donate
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
