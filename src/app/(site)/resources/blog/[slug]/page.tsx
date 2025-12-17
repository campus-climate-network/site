import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { PortableText, type PortableTextComponents } from '@portabletext/react'

import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { POST_QUERY, POST_SLUGS_QUERY } from '@/sanity/lib/queries'
import type { PostDetail } from '@/sanity/lib/types'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/json-ld'

const siteUrl = 'https://campusclimatenetwork.org'

export const revalidate = 60

export async function generateMetadata(
  props: PageProps<'/resources/blog/[slug]'>,
): Promise<Metadata> {
  const { slug } = await props.params
  const post = await client.fetch<PostDetail | null>(POST_QUERY, { slug })

  if (!post) {
    return { title: 'Post Not Found' }
  }

  const ogImage = post.mainImage
    ? urlFor(post.mainImage)
        .width(1200)
        .height(630)
        .fit('crop')
        .auto('format')
        .url()
    : undefined

  const description = `Read ${post.title} on the Campus Climate Network blog.`

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  }
}

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
  targetHeight?: number,
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
  props: PageProps<'/resources/blog/[slug]'>,
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

  const postUrl = `${siteUrl}/resources/blog/${slug}`
  const ogImageUrl = post.mainImage
    ? urlFor(post.mainImage)
        .width(1200)
        .height(630)
        .fit('crop')
        .auto('format')
        .url()
    : undefined

  return (
    <div className="page-wrapper">
      <ArticleJsonLd
        title={post.title}
        description={`Read ${post.title} on the Campus Climate Network blog.`}
        url={postUrl}
        imageUrl={ogImageUrl}
        datePublished={post.publishedAt}
        authorName={post.author?.name}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Resources', url: `${siteUrl}/resources` },
          { name: 'Blog', url: `${siteUrl}/resources/blog` },
          { name: post.title, url: postUrl },
        ]}
      />
      <div className="mx-auto max-w-3xl px-[var(--spacing-container)] section-hero stack stack-relaxed">
        <Link
          href="/resources/blog"
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary transition hover:text-brand-secondary"
        >
          <span aria-hidden="true">←</span> Back to posts
        </Link>

        <article className="stack stack-relaxed">
          <header className="stack stack-mid">
            <div className="stack stack-snug">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-secondary">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                      dateStyle: 'long',
                    })
                  : 'Unpublished'}
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                {post.title}
              </h1>
            </div>

            <div className="flex items-center gap-4">
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
                <p className="font-semibold text-slate-900">
                  {post.author?.name ?? 'Unknown author'}
                </p>
                {post.categories && post.categories.length > 0 && (
                  <p className="text-sm text-slate-500">
                    {post.categories
                      .map((category) => category.title)
                      .join(', ')}
                  </p>
                )}
              </div>
            </div>
          </header>

          <hr className="border-slate-200" />

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
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full rounded-2xl"
              priority
            />
          )}

          <div className="stack stack-mid text-base leading-relaxed text-slate-700 [&_h2]:mt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h3]:mt-2 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-900 [&_a]:text-brand-primary [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-brand-primary/30 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-slate-600 [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6">
            <PortableText
              value={post.body as never}
              components={portableTextComponents}
            />
          </div>
        </article>
      </div>
    </div>
  )
}
