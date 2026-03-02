import type { Metadata } from 'next'
import Link from 'next/link'
import { NotionAPI } from 'notion-client'
import type { ExtendedRecordMap } from 'notion-types'
import { isAuthenticated, logout } from '../actions'
import { PasswordForm } from '../password-form'
import { NotionPage } from '../notion-page'
import { redirect } from 'next/navigation'
import { ScrollReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Member Portal',
  description: 'CCN member portal — resources and updates for network members.',
  robots: { index: false, follow: false },
}

const ROOT_PAGE_ID = '1dfeb502799a806ea31bdb5e280394c6'

const notion = new NotionAPI({ apiBaseUrl: 'https://www.notion.so/api/v3' })

async function fetchNotionPage(
  pageId: string,
): Promise<ExtendedRecordMap | null> {
  try {
    return await notion.getPage(pageId)
  } catch (e) {
    console.error('Failed to fetch Notion page:', pageId, e)
    return null
  }
}

export default async function MemberPortalPage({
  params,
}: {
  params: Promise<{ pageId?: string[] }>
}) {
  const { pageId } = await params
  const authed = await isAuthenticated()

  const notionPageId = pageId?.[0] || ROOT_PAGE_ID
  const recordMap = authed ? await fetchNotionPage(notionPageId) : null

  return (
    <div className="page-wrapper">
      <section className="bg-brand-primary/10 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="eyebrow text-xs sm:text-sm text-brand-primary">
            Members only
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
            CCN Member Portal
          </h1>
          <p className="text-base text-slate-700">
            Resources, updates, and tools for Campus Climate Network members.
          </p>
        </div>
      </section>

      {authed && recordMap ? (
        <>
          <section className="page-container">
            <NotionPage recordMap={recordMap} pageId={notionPageId} />
          </section>
          <section className="page-container">
            <form
              action={async () => {
                'use server'
                await logout()
                redirect('/member-portal')
              }}
            >
              <button
                type="submit"
                className="text-sm text-slate-400 underline underline-offset-2 transition-colors hover:text-slate-600"
              >
                Log out
              </button>
            </form>
          </section>
        </>
      ) : authed && !recordMap ? (
        <section className="page-container stack stack-relaxed">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 stack stack-snug">
            <h2 className="text-lg font-semibold text-red-800">
              Unable to load this page
            </h2>
            <p className="text-sm text-red-600">
              The Notion page could not be fetched. It may not exist or Notion
              may be temporarily unavailable.
            </p>
            <Link
              href="/member-portal"
              className="text-sm font-medium text-brand-primary hover:underline"
            >
              Back to portal home
            </Link>
          </div>
        </section>
      ) : (
        <section className="page-container stack stack-relaxed">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-snug">
              <h2 className="text-xl font-semibold text-slate-900">
                Enter your password to access the portal.
              </h2>
              <p className="text-sm text-slate-500">
                Contact your CCN coordinator if you don&apos;t have the
                password.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <PasswordForm />
          </ScrollReveal>
        </section>
      )}
    </div>
  )
}
