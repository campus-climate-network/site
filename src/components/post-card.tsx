import Link from 'next/link'
import Image from 'next/image'

import type { PostListItem } from '@/sanity/lib/types'
import { urlFor } from '@/sanity/lib/image'

// Shared blog-post card, extracted from the /blog listing so other pages
// (e.g. /programs/[slug] related-reading sections) render identical cards.

export const formatPostDate = (input?: string | null) => {
  if (!input) return null
  const date = new Date(input)
  if (Number.isNaN(date.getTime())) return null
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export const PostByline = ({
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

export function PostCard({
  post,
  headingLevel: Heading = 'h2',
}: {
  post: PostListItem
  /** Match the surrounding document outline — 'h3' when cards sit under an h2. */
  headingLevel?: 'h2' | 'h3'
}) {
  const publishedOn = formatPostDate(post.publishedAt)
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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <Link className="flex h-full flex-col" href={`/blog/${post.slug}`}>
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
              <span className="text-4xl text-brand-primary/30">📰</span>
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
            <Heading className="text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-primary sm:text-xl">
              {post.title}
            </Heading>
            {post.excerpt && (
              <p className="line-clamp-2 text-sm text-slate-600">
                {post.excerpt}
              </p>
            )}
          </div>
          <PostByline authorName={post.authorName} publishedOn={publishedOn} />
        </div>
      </Link>
    </article>
  )
}
