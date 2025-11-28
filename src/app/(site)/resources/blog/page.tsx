import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import type { PostListItem } from '@/sanity/lib/types'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'
import { urlFor } from '@/sanity/lib/image'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Dispatches from student organizers, campaign wins, and movement insights powering fossil-free futures on campus.',
}
import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

export const revalidate = 60

const formatDate = (input?: string | null) => {
  if (!input) return null
  const date = new Date(input)
  if (Number.isNaN(date.getTime())) return null
  return date
    .toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
    .toUpperCase()
}

export default async function Page() {
  const posts = await client.fetch<PostListItem[]>(POSTS_QUERY)
  const hasPosts = posts.length > 0

  return (
    <div className="page-wrapper">
      <section className="bg-brand-primary/10 section-hero">
        <div className="page-container text-brand-primary">
          <div className="stack stack-tight max-w-3xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-brand-secondary">
              Latest Stories
            </p>
            <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
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
        {hasPosts ? (
          <StaggerReveal
            staggerDelay={100}
            variant="blossom"
            className="grid gap-8 sm:grid-cols-2"
          >
            {posts.map((post) => {
              const publishedOn = formatDate(post.publishedAt)
              const imageUrl = post.mainImage
                ? urlFor(post.mainImage).width(800).height(500).fit('crop').auto('format').url()
                : null
              const category = post.categories?.[0]

              return (
                <article
                  key={post._id}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Link
                    className="flex h-full flex-col"
                    href={`/resources/blog/${post.slug}`}
                  >
                    {/* Hero Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10">
                          <span className="text-4xl text-brand-primary/30">📰</span>
                        </div>
                      )}
                      {/* Category Badge */}
                      {category?.title && (
                        <div className="absolute left-0 top-4">
                          <span className="bg-brand-secondary/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                            {category.title}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div className="stack stack-dense">
                        <h2 className="text-xl font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-primary sm:text-2xl">
                          {post.title}
                        </h2>
                      </div>
                      {publishedOn && (
                        <p className="mt-4 text-xs font-medium tracking-[0.15em] text-brand-secondary">
                          {publishedOn}
                        </p>
                      )}
                    </div>
                  </Link>
                </article>
              )
            })}
          </StaggerReveal>
        ) : (
          <ScrollReveal variant="blossom">
            <div className="rounded-3xl border border-dashed border-brand-secondary/30 bg-white/70 p-12 text-center">
              <p className="text-lg font-medium text-brand-primary">
                No stories yet. Check back soon.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                We&apos;re gathering reflections from organizers across the
                movement.
              </p>
            </div>
          </ScrollReveal>
        )}
      </section>
    </div>
  )
}
