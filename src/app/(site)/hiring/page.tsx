import type { Metadata } from 'next'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'
import { client } from '@/sanity/lib/client'
import { JOB_ROLES_QUERY } from '@/sanity/lib/queries'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Campus Climate Network. View open positions for organizers, fellows, and coordinators helping students win climate justice on campuses nationwide.',
}

interface JobRole {
  _id: string
  title: string
  department: string | null
  location: string | null
  description: string | null
  applicationUrl: string | null
  postedAt: string
}

async function getJobRoles(): Promise<JobRole[]> {
  return client.fetch(JOB_ROLES_QUERY)
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
            Work with Campus Climate Network.
          </h1>
          <p className="text-base text-slate-700">
            Help students win climate justice on campuses around the world.
            We&apos;re a distributed team of organizers, educators, and
            strategists building infrastructure for the youth climate movement.
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
                We&apos;re hiring! Check out our open positions below.
              </p>
            ) : (
              <p className="text-base text-slate-600">
                We don&apos;t have any open positions right now. Check back
                soon—we&apos;ll update this page when new roles become
                available.
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
              <div
                key={role._id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="stack stack-compact">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {role.title}
                    </h3>
                    {(role.department || role.location) && (
                      <p className="text-sm text-slate-500">
                        {[role.department, role.location]
                          .filter(Boolean)
                          .join(' · ')}
                      </p>
                    )}
                    {role.description && (
                      <p className="mt-1 text-base text-slate-600">
                        {role.description}
                      </p>
                    )}
                  </div>
                  {role.applicationUrl && (
                    <a
                      href={role.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-secondary"
                    >
                      Apply
                    </a>
                  )}
                </div>
              </div>
            ))}
          </StaggerReveal>
        )}
      </section>
    </div>
  )
}
