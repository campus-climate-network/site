import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  PortableText,
  type PortableTextReactComponents,
} from '@portabletext/react'

import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { POST_QUERY, POST_SLUGS_QUERY } from '@/sanity/lib/queries'
import type { PostDetail } from '@/sanity/lib/types'

type Params = { slug: string }

export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY)
  return slugs.map(({ slug }) => ({ slug }))
}

const portableTextComponents: PortableTextReactComponents = {
  types: {
    image: ({ value }) => {
      if (!value || typeof value !== 'object') {
        return null
      }

      const image = value as { alt?: string; asset?: { _ref?: string } }

      if (!image.asset?._ref) {
        return null
      }

      const src = urlFor(image).width(800).auto('format').url()

      return <img src={src} alt={image.alt ?? ''} className="my-6 w-full" />
    },
  },
}

export default async function PostPage({ params }: { params: Params }) {
  const post = await client.fetch<PostDetail | null>(POST_QUERY, {
    slug: params.slug,
  })

  if (!post) {
    notFound()
  }

  const authorImage = post.author?.image
    ? urlFor(post.author.image)
        .width(96)
        .height(96)
        .fit('crop')
        .auto('format')
        .url()
    : undefined

  return (
    <main className="container mx-auto grid gap-8 p-6 sm:p-12">
      <Link
        href="/resources/blog"
        className="text-sm text-blue-500 hover:underline"
      >
        &larr; Back to posts
      </Link>

      <article className="prose max-w-3xl">
        <header className="mb-8">
          <h1>{post.title}</h1>
          <p className="text-sm text-slate-500">
            {post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString()
              : 'Unpublished'}
          </p>

          <div className="mt-4 flex items-center gap-4">
            {authorImage && (
              <img
                src={authorImage}
                alt={post.author?.name ?? 'Author photo'}
                className="h-16 w-16 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-medium">
                {post.author?.name ?? 'Unknown author'}
              </p>
              {post.categories && post.categories.length > 0 && (
                <p className="text-sm text-slate-500">
                  {post.categories.map((category) => category.title).join(', ')}
                </p>
              )}
            </div>
          </div>
        </header>

        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).width(1200).auto('format').url()}
            alt={post.title}
            className="mb-8 w-full rounded"
          />
        )}

        <PortableText
          value={post.body as never}
          components={portableTextComponents}
        />
      </article>
    </main>
  )
}
