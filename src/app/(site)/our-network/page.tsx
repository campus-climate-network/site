import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { MemberMapWrapper } from '@/components/member-map-wrapper'
import { MEMBER_ORGS_QUERY } from '@/sanity/lib/queries'
import type { MemberOrg as MapMemberOrg } from '@/components/member-map'

export const metadata: Metadata = {
  title: 'Our Network',
  description:
    'Meet the student-led climate justice groups in the Campus Climate Network—a national coalition fighting for fossil-free futures on campuses across the country.',
}

interface MemberOrg {
  _id: string
  name: string
  logo?: {
    asset: {
      _ref: string
    }
  }
}

async function getMembers(): Promise<MemberOrg[]> {
  return client.fetch(`
    *[_type == "memberOrg" && isActive == true] | order(name asc){
      _id,
      name,
      logo
    }
  `)
}

async function getMembersForMap(): Promise<MapMemberOrg[]> {
  return client.fetch(MEMBER_ORGS_QUERY)
}

export default async function OurNetworkPage() {
  const [memberOrgs, mapMembers] = await Promise.all([
    getMembers(),
    getMembersForMap(),
  ])

  return (
    <div className="page-wrapper">
      <section className="bg-brand-secondary/10 section-hero">
        <div className="page-container stack stack-relaxed text-left">
          <div className="stack stack-tight">
            <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
              Member organizations
            </p>
            <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
              A national coalition of students fighting for fossil-free futures.
            </h1>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
            <MemberMapWrapper members={mapMembers} />
          </div>
          <div className="stack stack-tight">
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
              Join us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 section-dark -mt-8 sm:-mt-10 lg:-mt-12">
        <div className="page-container stack text-left text-white">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-dense">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Membership benefits
              </h2>
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
                title: 'Organizing playbooks',
                body: 'Campaign templates, research briefs, and rapid-response messaging that students can adapt for their campuses.',
              },
              {
                title: 'Training & gatherings',
                body: 'College Climate Gatherings, monthly skillshares, and mentorship that connect organizers across regions.',
              },
              {
                title: 'Mini-grants & partnerships',
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

      <section className="bg-slate-50 section-hero -mt-8 sm:-mt-10 lg:-mt-12">
        <div className="page-container stack stack-relaxed text-left">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-dense">
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Who&apos;s in the network
              </h2>
              <p className="text-base text-slate-600">
                Meet the student groups powering campus climate action.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {memberOrgs.map((org) => (
              <div
                key={org._id}
                className="flex flex-col rounded-3xl border border-brand-primary/10 bg-white p-6"
              >
                <div className="relative h-28 w-full">
                  {org.logo ? (
                    <Image
                      src={urlFor(org.logo).width(400).url()}
                      alt={`${org.name} logo`}
                      fill
                      className="object-contain"
                      sizes="(min-width: 1280px) 240px, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 80vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-brand-primary/5">
                      <span className="text-2xl font-bold text-brand-primary/30">
                        {org.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <p className="mt-4 text-sm font-semibold text-slate-900">
                  {org.name}
                </p>
              </div>
            ))}
          </div>
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
        </div>
      </section>

      <section className="page-container text-left pb-16 sm:pb-20 lg:pb-24 -mb-12 sm:-mb-16 lg:-mb-20">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-cozy">
            <div className="stack stack-dense">
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Join the network
              </h2>
              <p className="text-base text-slate-600">
                We welcome student-led climate justice groups ready to
                collaborate, share resources, and take collective action. Share
                your info and our onboarding team will reach out.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
                href="/take-action"
              >
                Apply for membership
              </Link>
              <a
                className="inline-flex items-center rounded-full border border-brand-primary px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
                href="mailto:info@campusclimatenetwork.org"
              >
                Ask a question
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
