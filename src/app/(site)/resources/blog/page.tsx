import Link from 'next/link'

import type { PostListItem } from '@/sanity/lib/types'
import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

const options = { next: { revalidate: 60 } }
const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' })

const formatDate = (input?: string | null) => {
  if (!input) return null
  const date = new Date(input)
  if (Number.isNaN(date.getTime())) return null
  return dateFormatter.format(date)
}

export default async function Page() {
  const posts = await client.fetch<PostListItem[]>(POSTS_QUERY, {}, options)
  const hasPosts = posts.length > 0

  return (
    <main className="space-y-20 pb-20">
      <section className="bg-brand-primary/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 text-brand-primary lg:px-8">
          <div className="max-w-3xl space-y-6">
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

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6 text-left lg:px-8">
        <header className="space-y-2">
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
                    <div className="space-y-4">
                      {publishedOn && (
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-secondary">
                          {publishedOn}
                        </span>
                      )}
                      <h2 className="text-2xl font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-primary">
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
