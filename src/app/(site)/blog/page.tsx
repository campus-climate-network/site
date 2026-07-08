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
  alternates: {
    canonical: '/blog',
  },
}
import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

export const revalidate = 60

const formatDate = (input?: string | null) => {
  if (!input) return null
  const date = new Date(input)
  if (Number.isNaN(date.getTime())) return null
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

const Byline = ({
  authorName,
  publishedOn,
}: {
  authorName?: string
  publishedOn: string | null
}) => {
  if (!authorName && !publishedOn) return null
  return (
    <p className="mt-4 text-sm text-slate-500">
      {authorName && `By ${authorName}`}
      {authorName && publishedOn && ' · '}
      {publishedOn}
    </p>
  )
}

export default async function Page() {
  const posts = await client.fetch<PostListItem[]>(POSTS_QUERY)
  const [featuredPost, ...morePosts] = posts
  const hasPosts = posts.length > 0

  const featuredImageUrl = featuredPost?.mainImage
    ? urlFor(featuredPost.mainImage)
        .width(1200)
        .height(750)
        .fit('crop')
        .auto('format')
        .url()
    : null
  const featuredPublishedOn = formatDate(featuredPost?.publishedAt)
  const featuredCategory = featuredPost?.categories?.[0]

  return (
    <div className="page-wrapper">
      <section className="bg-brand-primary/10 section-hero">
        <div className="page-container text-brand-primary">
          <div className="stack stack-tight max-w-3xl">
            <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
              Latest stories
            </p>
            <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
              The latest from CCN
            </h1>
            <p className="text-base text-slate-700">
              Dispatches from organizers and movement leaders.
            </p>
          </div>
        </div>
      </section>

      <section className="page-container stack stack-relaxed text-left">
        {hasPosts ? (
          <>
            <ScrollReveal variant="blossom">
              <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
                <Link
                  className="grid md:grid-cols-5"
                  href={`/blog/${featuredPost.slug}`}
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 md:col-span-3 md:aspect-auto md:min-h-80">
                    {featuredImageUrl ? (
                      <Image
                        src={featuredImageUrl}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                        priority
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-brand-primary/10 to-brand-secondary/10">
                        <span className="text-4xl text-brand-primary/30">
                          📰
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8 md:col-span-2">
                    <p className="eyebrow text-xs text-brand-secondary">
                      Latest
                      {featuredCategory?.title &&
                        ` · ${featuredCategory.title}`}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-primary sm:text-3xl">
                      {featuredPost.title}
                    </h2>
                    {featuredPost.excerpt && (
                      <p className="mt-3 line-clamp-3 text-sm text-slate-600 sm:text-base">
                        {featuredPost.excerpt}
                      </p>
                    )}
                    <Byline
                      authorName={featuredPost.authorName}
                      publishedOn={featuredPublishedOn}
                    />
                  </div>
                </Link>
              </article>
            </ScrollReveal>

            {morePosts.length > 0 && (
              <StaggerReveal
                staggerDelay={100}
                variant="blossom"
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {morePosts.map((post) => {
                  const publishedOn = formatDate(post.publishedAt)
                  const imageUrl = post.mainImage
                    ? urlFor(post.mainImage)
                        .width(800)
                        .height(500)
                        .fit('crop')
                        .auto('format')
                        .url()
                    : null
                  const category = post.categories?.[0]

                  return (
                    <article
                      key={post._id}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <Link
                        className="flex h-full flex-col"
                        href={`/blog/${post.slug}`}
                      >
                        {/* Hero Image */}
                        <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                          {imageUrl ? (
                            <Image
                              src={imageUrl}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-brand-primary/10 to-brand-secondary/10">
                              <span className="text-4xl text-brand-primary/30">
                                📰
                              </span>
                            </div>
                          )}
                          {/* Category Badge */}
                          {category?.title && (
                            <div className="absolute left-0 top-4">
                              <span className="bg-brand-secondary/90 px-3 py-1.5 text-[10px] font-bold eyebrow text-white">
                                {category.title}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex flex-1 flex-col justify-between p-6">
                          <div className="stack stack-dense">
                            <h2 className="text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-primary sm:text-xl">
                              {post.title}
                            </h2>
                            {post.excerpt && (
                              <p className="line-clamp-2 text-sm text-slate-600">
                                {post.excerpt}
                              </p>
                            )}
                          </div>
                          <Byline
                            authorName={post.authorName}
                            publishedOn={publishedOn}
                          />
                        </div>
                      </Link>
                    </article>
                  )
                })}
              </StaggerReveal>
            )}
          </>
        ) : (
          <ScrollReveal variant="blossom">
            <div className="rounded-3xl border border-dashed border-brand-secondary/30 bg-white/70 p-12 text-center">
              <p className="text-lg font-medium text-brand-primary">
                No stories yet. Check back soon.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                We’re gathering reflections from organizers across the movement.
              </p>
            </div>
          </ScrollReveal>
        )}
      </section>

      <section className="page-container">
        <ScrollReveal variant="fade-up">
          <div className="gradient-drift relative isolate overflow-hidden rounded-[2.5rem] bg-linear-to-br from-brand-secondary via-brand-tertiary to-brand-primary px-6 py-16 text-center text-white sm:px-12 sm:py-20">
            <div className="mx-auto stack stack-snug max-w-2xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Be part of what’s next
              </h2>
              <p className="mx-auto max-w-xl text-base text-white sm:text-lg">
                Whether you want to organize on your campus or donate to the
                fight, there is a place for you in the movement.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link
                  className="inline-flex items-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-brand-accent/90"
                  href="/take-action"
                >
                  Join us
                </Link>
                <Link
                  className="inline-flex items-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
                  href="/donate"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
