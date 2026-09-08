import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { toPlainText } from '@portabletext/react'
import { BreadcrumbJsonLd, JobPostingJsonLd } from '@/components/json-ld'
import { PortableTextBody } from '@/components/portable-text-body'
import { formatPostDate } from '@/components/post-card'
import { SITE_URL } from '@/lib/site'
import { client } from '@/sanity/lib/client'
import {
  employmentTypeLabel,
  employmentTypeSchema,
  endOfDayEastern,
  formatJobLocation,
  isRoleOpen,
  resolveLocationType,
  todayInEastern,
} from '@/sanity/lib/job-role'
import { JOB_ROLE_QUERY, JOB_ROLE_SLUGS_QUERY } from '@/sanity/lib/queries'
import type { JobRoleDetail } from '@/sanity/lib/types'
import { ApplyLink } from '../apply-link'
import { OrganizationOverview } from '../organization-overview'

export const revalidate = 3600

// Open roles are prebuilt. Anything else — a role published after the last
// build, or a closed one someone still has the link to — renders on demand
// (dynamicParams stays on) and is cached under the jobRole tag.
export async function generateStaticParams() {
  const roles = await client.fetch<{ slug: string }[]>(JOB_ROLE_SLUGS_QUERY, {
    today: todayInEastern(),
  })
  return roles.map(({ slug }) => ({ slug }))
}

async function getRole(slug: string) {
  return client.fetch<JobRoleDetail | null>(
    JOB_ROLE_QUERY,
    { slug },
    { next: { revalidate: 3600, tags: ['jobRole'] } },
  )
}

const describe = (role: JobRoleDetail) =>
  role.description || `${role.title} at Campus Climate Network`

export async function generateMetadata(
  props: PageProps<'/hiring/[slug]'>,
): Promise<Metadata> {
  const { slug } = await props.params
  const role = await getRole(slug)
  if (!role) return { title: 'Role Not Found' }

  const description = describe(role)
  return {
    title: role.title,
    description,
    alternates: { canonical: `/hiring/${slug}` },
    openGraph: { title: role.title, description, url: `/hiring/${slug}` },
    // Closed roles stay reachable from shared links but leave the index.
    ...(isRoleOpen(role) ? {} : { robots: { index: false, follow: true } }),
  }
}

function ClosedNotice() {
  return (
    <div className="stack stack-compact rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600">
      <p className="font-semibold text-slate-900">
        This role is no longer accepting applications.
      </p>
      <p>
        <Link
          href="/hiring"
          className="font-semibold text-brand-primary transition hover:text-brand-secondary"
        >
          See our open roles
        </Link>
      </p>
    </div>
  )
}

function Fact({ label, value }: { label: string; value?: string | null }) {
  if (!value?.trim()) return null
  return (
    <div className="stack stack-compact">
      <dt className="eyebrow text-xs text-brand-secondary">{label}</dt>
      <dd className="text-base font-medium text-slate-900">{value}</dd>
    </div>
  )
}

export default async function JobRolePage(props: PageProps<'/hiring/[slug]'>) {
  const { slug } = await props.params
  const role = await getRole(slug)
  if (!role) notFound()

  const open = isRoleOpen(role)
  const applyHref = open ? role.applicationUrl : null
  const applyBy = formatPostDate(role.applicationDeadline)
  const body =
    Array.isArray(role.body) && role.body.length > 0 ? role.body : null
  const roleUrl = `${SITE_URL}/hiring/${slug}`
  const locationType = resolveLocationType(role.locationType)

  return (
    <div className="page-wrapper">
      {open && (
        <JobPostingJsonLd
          title={role.title}
          description={body ? toPlainText(body) : describe(role)}
          url={roleUrl}
          datePosted={role.postedAt}
          validThrough={
            role.applicationDeadline
              ? endOfDayEastern(role.applicationDeadline)
              : undefined
          }
          employmentType={
            employmentTypeSchema(role.employmentType) ?? undefined
          }
          locationType={locationType}
          location={role.location ?? undefined}
        />
      )}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Careers', url: `${SITE_URL}/hiring` },
          { name: role.title, url: roleUrl },
        ]}
      />
      <div className="mx-auto max-w-3xl px-(--spacing-container) section-hero stack stack-relaxed">
        <Link
          href="/hiring"
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary transition hover:text-brand-secondary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All open roles
        </Link>

        <article className="stack stack-relaxed">
          <header className="stack stack-mid">
            <div className="stack stack-tight">
              <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                {role.title}
              </h1>
              {role.description && (
                <p className="text-base text-slate-700">{role.description}</p>
              )}
            </div>
            {!open && <ClosedNotice />}
          </header>

          <div className="stack stack-mid">
            <dl className="grid gap-x-6 gap-y-5 rounded-3xl bg-brand-secondary/[0.07] px-6 py-6 sm:grid-cols-3 sm:px-8">
              <Fact label="Pay" value={role.compensation} />
              <Fact
                label="Location"
                value={formatJobLocation(locationType, role.location)}
              />
              <Fact
                label="Type"
                value={employmentTypeLabel(role.employmentType)}
              />
              <Fact label="Posted" value={formatPostDate(role.postedAt)} />
              <Fact
                label="Apply by"
                value={applyBy ?? (open ? 'Open until filled' : null)}
              />
            </dl>
            {applyHref && <ApplyLink href={applyHref} />}
          </div>

          {body && <PortableTextBody value={body} />}

          <OrganizationOverview />

          {applyHref && (
            <div className="flex flex-col gap-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="stack stack-compact">
                <h2 className="text-xl font-semibold text-slate-900">
                  Ready to apply?
                </h2>
                <p className="text-sm text-slate-600">
                  {applyBy
                    ? `Applications close ${applyBy}.`
                    : 'This role is open until filled.'}
                </p>
              </div>
              <ApplyLink href={applyHref} />
            </div>
          )}
        </article>
      </div>
    </div>
  )
}
