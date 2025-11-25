import type { Metadata } from 'next'
import Link from 'next/link'

import type { PostListItem } from '@/sanity/lib/types'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Dispatches from student organizers, campaign wins, and movement insights powering fossil-free futures on campus.',
}
import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

export const revalidate = 60
const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' })

const formatDate = (input?: string | null) => {
  if (!input) return null
  const date = new Date(input)
  if (Number.isNaN(date.getTime())) return null
  return dateFormatter.format(date)
}

export default async function Page() {
  const posts = await client.fetch<PostListItem[]>(POSTS_QUERY)
  const hasPosts = posts.length > 0

  return (
    <main className="page-wrapper">
      <section className="bg-brand-primary/10 section-hero">
        <div className="page-container text-brand-primary">
          <div className="stack stack-tight max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-secondary">
              Latest Stories
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-brand-primary sm:text-5xl">
              Campus Climate Network Journal
            </h1>
            <p className="text-base text-brand-primary/80">
              Dispatches from organizers, campaign wins, and movement insights
              powering fossil-free futures on campus.
            </p>
          </div>
        </div>
      </section>

      <section className="page-container stack stack-relaxed text-left">
        <header className="stack stack-compact">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
            From the Network
          </p>
          <p className="text-base text-slate-600">
            Explore the latest updates, reflections, and resources from student
            climate organizers everywhere.
          </p>
        </header>

        {hasPosts ? (
          <div className="grid gap-8 sm:grid-cols-2">
            {posts.map((post) => {
              const publishedOn = formatDate(post.publishedAt)

              return (
                <article
                  key={post._id}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-primary/60 hover:shadow-lg"
                >
                  <Link
                    className="flex h-full flex-col justify-between gap-6"
                    href={`/resources/blog/${post.slug}`}
                  >
                    <div className="stack stack-dense">
                      {publishedOn && (
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-secondary">
                          {publishedOn}
                        </span>
                      )}
                      <h2 className="text-3xl font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-primary">
                        {post.title}
                      </h2>
                    </div>
                    <span className="inline-flex items-center text-sm font-semibold text-brand-primary transition group-hover:gap-2">
                      Read article
                      <span
                        aria-hidden
                        className="ml-1 transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-brand-secondary/30 bg-white/70 p-12 text-center">
            <p className="text-lg font-medium text-brand-primary">
              No stories yet. Check back soon.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              We’re gathering reflections from organizers across the movement.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
