import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  PortableText,
  type PortableTextComponents,
} from '@portabletext/react'

import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { POST_QUERY, POST_SLUGS_QUERY } from '@/sanity/lib/queries'
import type { PostDetail } from '@/sanity/lib/types'

export const revalidate = 60

type SanityImageValue = {
  asset: {
    _ref: string
  }
}

const DEFAULT_BODY_IMAGE_DIMENSIONS = { width: 800, height: 600 }
const DEFAULT_MAIN_IMAGE_DIMENSIONS = { width: 1200, height: 675 }

function isSanityImage(value: unknown): value is SanityImageValue {
  return (
    typeof value === 'object' &&
    value !== null &&
    'asset' in value &&
    typeof (value as SanityImageValue).asset?._ref === 'string'
  )
}

function getSanityImageDimensions(
  ref?: string,
  targetWidth?: number,
  targetHeight?: number
) {
  if (!ref) {
    return null
  }

  const parts = ref.split('-')
  const dimensionPart = parts[2]
  if (!dimensionPart) {
    return null
  }

  const [originalWidthStr, originalHeightStr] = dimensionPart.split('x')
  const originalWidth = Number(originalWidthStr)
  const originalHeight = Number(originalHeightStr)

  if (
    !Number.isFinite(originalWidth) ||
    !Number.isFinite(originalHeight) ||
    originalWidth <= 0 ||
    originalHeight <= 0
  ) {
    return null
  }

  if (targetWidth && targetHeight) {
    return { width: targetWidth, height: targetHeight }
  }

  if (targetWidth) {
    return {
      width: targetWidth,
      height: Math.round((originalHeight / originalWidth) * targetWidth),
    }
  }

  if (targetHeight) {
    return {
      width: Math.round((originalWidth / originalHeight) * targetHeight),
      height: targetHeight,
    }
  }

  return { width: originalWidth, height: originalHeight }
}

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY)
  return slugs.map(({ slug }) => ({ slug }))
}

const portableTextComponents: PortableTextComponents = {
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

      const dimensions =
        getSanityImageDimensions(image.asset?._ref, 800) ??
        DEFAULT_BODY_IMAGE_DIMENSIONS

      return (
        <Image
          src={src}
          alt={image.alt ?? ''}
          width={dimensions.width}
          height={dimensions.height}
          sizes="(max-width: 768px) 100vw, 800px"
          className="my-6 h-auto w-full"
        />
      )
    },
  },
}

export default async function PostPage(
  props: PageProps<'/resources/blog/[slug]'>
) {
  const { slug } = await props.params

  const post = await client.fetch<PostDetail | null>(POST_QUERY, {
    slug,
  })

  if (!post) {
    notFound()
  }

  const authorImageSrc = post.author?.image
    ? urlFor(post.author.image)
        .width(96)
        .height(96)
        .fit('crop')
        .auto('format')
        .url()
    : undefined

  const mainImageSrc = post.mainImage
    ? urlFor(post.mainImage).width(1200).auto('format').url()
    : undefined

  const mainImageDimensions =
    (isSanityImage(post.mainImage) &&
      getSanityImageDimensions(post.mainImage.asset?._ref, 1200)) ||
    null

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
            {authorImageSrc && (
              <Image
                src={authorImageSrc}
                alt={post.author?.name ?? 'Author photo'}
                width={96}
                height={96}
                sizes="64px"
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

        {mainImageSrc && (
          <Image
            src={mainImageSrc}
            alt={post.title}
            width={
              (mainImageDimensions ?? DEFAULT_MAIN_IMAGE_DIMENSIONS).width
            }
            height={
              (mainImageDimensions ?? DEFAULT_MAIN_IMAGE_DIMENSIONS).height
            }
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="mb-8 w-full rounded"
            priority
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
