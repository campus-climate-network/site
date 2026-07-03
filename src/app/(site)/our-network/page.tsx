import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { MemberMapWrapper } from '@/components/member-map-wrapper'
import { MEMBER_ORGS_QUERY } from '@/sanity/lib/queries'
import type { MemberOrg as MapMemberOrg } from '@/components/member-map'

export const metadata: Metadata = {
  title: 'Our Network',
  description:
    'Meet the student-led climate justice groups in the Campus Climate Network — a national coalition fighting for fossil-free futures on campuses across the country.',
  alternates: {
    canonical: '/our-network',
  },
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
              A national coalition of students fighting for fossil-free futures
            </h1>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
            <MemberMapWrapper members={mapMembers} />
          </div>
          <div className="stack stack-tight">
            <p className="text-base text-slate-700">
              The majority of CCN member groups are climate and environmental
              justice organizations. However, any campus-based student group
              that meets CCN’s membership criteria is welcome to join the
              network.
            </p>
            <p className="text-base text-slate-700">
              CCN member groups are required to:
            </p>
            <ol className="stack-list-snug list-decimal pl-6 text-base text-slate-700">
              <li>Participate in a CCN 101 training</li>
              <li>Run a campaign with the goal to shift power</li>
              <li>
                Demonstrate eagerness to advance their campaign with support
                from CCN
              </li>
              <li>
                Participate in at least one network-wide program per semester
              </li>
              <li>
                Appoint three leaders of the organization to serve as CCN
                liaisons
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

      <section className="bg-slate-50 section-hero -mt-8 sm:-mt-10 lg:-mt-12">
        <div className="page-container stack stack-relaxed text-left">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-dense">
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Who’s in the network
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
                      <span
                        aria-hidden="true"
                        className="text-2xl font-bold text-brand-primary/30"
                      >
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
                Join us
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
