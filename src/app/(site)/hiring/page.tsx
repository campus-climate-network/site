import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'
import { formatPostDate } from '@/components/post-card'
import { client } from '@/sanity/lib/client'
import {
  employmentTypeLabel,
  formatJobLocation,
  todayInEastern,
} from '@/sanity/lib/job-role'
import { JOB_ROLES_QUERY } from '@/sanity/lib/queries'
import type { JobRoleListItem } from '@/sanity/lib/types'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Campus Climate Network. View open positions for organizers, fellows, and coordinators helping students win climate justice on campuses nationwide.',
  alternates: {
    canonical: '/hiring',
  },
}

async function getJobRoles(): Promise<JobRoleListItem[]> {
  return client.fetch(
    JOB_ROLES_QUERY,
    { today: todayInEastern() },
    { next: { revalidate: 3600, tags: ['jobRole'] } },
  )
}

function JobRoleCard({ role }: { role: JobRoleListItem }) {
  const facts = [
    employmentTypeLabel(role.employmentType),
    formatJobLocation(role.locationType, role.location),
    role.compensation,
  ].filter((fact): fact is string => Boolean(fact?.trim()))
  const applyBy = formatPostDate(role.applicationDeadline)

  return (
    <article className="group relative flex flex-col gap-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="stack stack-tight">
        <h3 className="text-lg font-semibold text-slate-900">
          {/* Stretched link: the title is the accessible link and its
              ::after box makes the whole card the click target. */}
          <Link
            href={`/hiring/${role.slug}`}
            className="transition-colors after:absolute after:inset-0 after:rounded-3xl group-hover:text-brand-primary"
          >
            {role.title}
          </Link>
        </h3>
        {facts.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {facts.map((fact) => (
              <li
                key={fact}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {fact}
              </li>
            ))}
          </ul>
        )}
        {role.description && (
          <p className="line-clamp-3 text-base text-slate-600">
            {role.description}
          </p>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-500">
          {applyBy ? `Apply by ${applyBy}` : 'Open until filled'}
        </p>
        <span
          aria-hidden="true"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition group-hover:gap-2.5 group-hover:text-brand-secondary"
        >
          View role <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  )
}

export default async function HiringPage() {
  const roles = await getJobRoles()

  return (
    <div className="page-wrapper">
      <section className="bg-brand-secondary/10 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
            Careers
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
            Work at Campus Climate Network
          </h1>
          <p className="text-base text-slate-700">
            Help students win climate justice on campuses around the world.
            We’re a distributed team of organizers, educators, and strategists
            building infrastructure for the youth climate movement.
          </p>
        </div>
      </section>

      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Open roles
            </h2>
            {roles.length > 0 ? (
              <p className="text-base text-slate-600">
                We’re hiring! Select a role to read the full posting and apply.
              </p>
            ) : (
              <p className="text-base text-slate-600">
                We don’t have any open positions right now. Check back soon —
                we’ll update this page when new roles become available.
              </p>
            )}
          </div>
        </ScrollReveal>

        {roles.length > 0 && (
          <StaggerReveal
            variant="fade-up"
            staggerDelay={100}
            className="grid gap-4"
          >
            {roles.map((role) => (
              <JobRoleCard key={role._id} role={role} />
            ))}
          </StaggerReveal>
        )}
      </section>
    </div>
  )
}
