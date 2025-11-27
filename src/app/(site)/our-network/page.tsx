import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Our Network',
  description:
    'Meet the student-led climate justice groups in the Campus Climate Network—a national coalition fighting for fossil-free futures on campuses across the country.',
}

const memberOrgs = [
  {
    name: 'Cambridge Climate Justice',
    logo: '/member-logos/cambridge-climate-justice.png',
  },
  {
    name: 'Climate Crisis Coalition',
    logo: '/member-logos/climate-crisis-coalition-logo.png',
  },
  {
    name: 'Climate Justice UBC',
    logo: '/member-logos/climate-justice-ubc.png',
  },
  {
    name: 'Colorado Climate Reinvestment Coalition',
    logo: '/member-logos/colorado-climate-reinvestment-coalition.jpeg',
  },
  { name: 'Cornell on Fire', logo: '/member-logos/cornell-on-fire.png' },
  {
    name: 'Divest Claremont Colleges',
    logo: '/member-logos/divest-claremont-colleges.jpeg',
  },
  { name: 'Divest Princeton', logo: '/member-logos/divest-princeton-logo.png' },
  { name: 'Divest CSU', logo: '/member-logos/divestcsu.png' },
  {
    name: 'Duke Climate Coalition',
    logo: '/member-logos/duke-climate-coalition.png',
  },
  {
    name: 'Fossil Free Divest Harvard',
    logo: '/member-logos/fossil-free-divest-harvard.png',
  },
  {
    name: 'Fossil Free Fordham',
    logo: '/member-logos/fossil-free-fordham-logo.png',
  },
  { name: 'Fossil Free Penn', logo: '/member-logos/fossil-free-penn.png' },
  {
    name: 'GND at UC San Diego',
    logo: '/member-logos/gnd-at-uc-san-diego.png',
  },
  {
    name: 'High School Divestment Coalition',
    logo: '/member-logos/high-school-divestment-coalition.png',
  },
  {
    name: 'Imperial Climate Action',
    logo: '/member-logos/imperial-climate-action.png',
  },
  { name: 'MIT Divest', logo: '/member-logos/mit-divest.png' },
  { name: 'SPAC', logo: '/member-logos/spac.jpg' },
  {
    name: 'Students for Environmental Concerns',
    logo: '/member-logos/students-for-environmental-concerns.png',
  },
  {
    name: 'Sunrise American University',
    logo: '/member-logos/sunrise-american-university.png',
  },
  { name: 'Sunrise Brown', logo: '/member-logos/sunrise-brown.png' },
  { name: 'Sunrise Columbia', logo: '/member-logos/sunrise-columbia.png' },
  {
    name: 'Sunrise Movement Gainesville',
    logo: '/member-logos/sunrise-movement-gainesville.jpg',
  },
  { name: 'Sunrise NYU', logo: '/member-logos/sunrise-nyu.png' },
  {
    name: 'The Coalition for a True Sustainability',
    logo: '/member-logos/the-coalition-for-a-true-sustainability.png',
  },
  { name: 'Trinity Divests', logo: '/member-logos/trinity-divests.png' },
  { name: 'UC Green New Deal', logo: '/member-logos/uc-green-new-deal.png' },
  {
    name: 'UCL Climate Action Society',
    logo: '/member-logos/ucl-climate-action-society.jpeg',
  },
  {
    name: 'Yale Student Environmental Coalition',
    logo: '/member-logos/yale-student-environmental-coalition.png',
  },
] as const

export default function OurNetworkPage() {
  return (
    <div className="page-wrapper">
      <section className="bg-brand-secondary/10 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
            Member Organizations
          </p>
          <h1 className="text-4xl font-semibold text-brand-primary">
            A national coalition of students fighting for fossil-free futures.
          </h1>
          <p className="text-base text-slate-700">
            Our network is made up of powerful, grassroots, student-led groups
            fighting for climate justice on campus. There are three simple
            criteria for becoming a member of the Campus Climate Network:
          </p>
          <ol className="stack-list-snug list-decimal pl-6 text-base text-slate-700">
            <li>
              Currently running or planning to run a campaign that involves
              cutting ties with the fossil fuel industry and its enablers.
            </li>
            <li>
              At least one member of the organization attends at least one
              coalition call per month.
            </li>
            <li>
              At least three active members on Slack, with at least two being
              underclassmen.
            </li>
          </ol>
          <p className="text-base text-slate-700">
            Does this sound like it could be your group?
          </p>
          <Link
            className="inline-flex items-center self-start rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
            href="/take-action"
          >
            Join Us
          </Link>
        </div>
      </section>

      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="text-3xl font-semibold text-slate-900">
              Who's in the network
            </h2>
            <p className="text-base text-slate-600">
              A sampling of organizations currently collaborating through
              CCN—get to know the student power behind their logos. We
              continually onboard new partners, so reach out if you want to join
              them.
            </p>
          </div>
        </ScrollReveal>
        <StaggerReveal
          staggerDelay={50}
          variant="blossom"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {memberOrgs.map((org) => (
            <div
              key={org.name}
              className="flex flex-col rounded-3xl border border-brand-primary/10 bg-white p-6 shadow-sm"
            >
              <div className="relative h-28 w-full">
                <Image
                  src={org.logo}
                  alt={`${org.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1280px) 240px, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 80vw"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                {org.name}
              </p>
            </div>
          ))}
        </StaggerReveal>
        <ScrollReveal variant="fade">
          <p className="text-sm text-slate-600">
            Want to appear here? Membership applications open on a rolling
            basis. Email{' '}
            <a
              className="text-brand-primary underline"
              href="mailto:info@campusclimatenetwork.org"
            >
              info@campusclimatenetwork.org
            </a>{' '}
            to learn more.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-slate-900 section-dark">
        <div className="page-container stack text-left text-white">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-dense">
              <h2 className="text-3xl font-semibold">Membership benefits</h2>
              <p className="text-sm text-slate-200">
                Tools and support to help campus organizers win faster.
              </p>
            </div>
          </ScrollReveal>
          <StaggerReveal
            staggerDelay={120}
            variant="blossom"
            className="grid gap-6 md:grid-cols-3"
          >
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
          </StaggerReveal>
        </div>
      </section>

      <section className="page-container stack stack-dense text-left">
        <ScrollReveal variant="fade-up">
          <h2 className="text-3xl font-semibold text-slate-900">
            Join the network
          </h2>
          <p className="mt-4 text-base text-slate-600">
            We welcome student-led climate justice groups ready to collaborate,
            share resources, and take collective action. Share your info and our
            onboarding team will reach out.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
              href="/take-action"
            >
              Apply for Membership
            </Link>
            <a
              className="inline-flex items-center rounded-full border border-brand-primary px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
              href="mailto:info@campusclimatenetwork.org"
            >
              Ask a Question
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
