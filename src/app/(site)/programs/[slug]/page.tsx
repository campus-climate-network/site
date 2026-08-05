import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'
import { PostCard } from '@/components/post-card'
import { BreadcrumbJsonLd } from '@/components/json-ld'
import { SITE_URL } from '@/lib/site'
import { client } from '@/sanity/lib/client'
import { POSTS_BY_SLUGS_QUERY } from '@/sanity/lib/queries'
import type { PostListItem } from '@/sanity/lib/types'
import { programs, type ProgramLink } from '../programs-data'
import { ProgramsClosingCta } from '../closing-cta'

export const dynamicParams = false

// Related-reading posts come from Sanity; refresh hourly like /hiring.
export const revalidate = 3600

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }))
}

// Meta description = the copy's first sentence. A boundary is .!? followed
// by whitespace and a capital/quote (or end of text), so lowercase
// abbreviations ("e.g. web scraping") don't truncate mid-sentence.
function firstSentence(text: string | undefined) {
  if (!text) return undefined
  const match = text.match(/^[\s\S]*?[.!?](?=\s+["“A-Z]|\s*$)/)
  return match?.[0] ?? text
}

export async function generateMetadata(
  props: PageProps<'/programs/[slug]'>,
): Promise<Metadata> {
  const { slug } = await props.params
  const program = programs.find((entry) => entry.slug === slug)
  if (!program) return { title: 'Program Not Found' }

  return {
    title: program.name,
    description: firstSentence(program.paragraphs[0]),
    alternates: {
      canonical: `/programs/${slug}`,
    },
  }
}

function ProgramLinkItem({ link }: { link: ProgramLink }) {
  // '#' entries are placeholders awaiting real URLs (see programs-data.ts).
  // http(s) hrefs open in a new tab automatically once they're filled in.
  const isExternal = /^https?:\/\//.test(link.href)
  const className = link.highlight
    ? 'inline-flex w-fit items-start gap-2 rounded-2xl bg-brand-accent/20 px-5 py-4 text-sm font-semibold text-slate-900 transition hover:bg-brand-accent/35'
    : 'inline-flex w-fit items-start gap-1.5 text-sm font-semibold text-brand-primary transition hover:text-brand-secondary'
  const content = (
    <>
      <span>{link.label}</span>
      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />
      {isExternal && <span className="sr-only">(opens in new tab)</span>}
    </>
  )

  if (link.href.startsWith('/')) {
    return (
      <Link href={link.href} className={className}>
        {content}
      </Link>
    )
  }
  return (
    <a
      href={link.href}
      className={className}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {content}
    </a>
  )
}

export default async function ProgramPage(
  props: PageProps<'/programs/[slug]'>,
) {
  const { slug } = await props.params
  const program = programs.find((entry) => entry.slug === slug)
  if (!program) notFound()

  const images = program.images ?? []

  const blogSection = program.blogSection
  let relatedPosts: PostListItem[] = []
  if (blogSection) {
    const posts = await client.fetch<PostListItem[]>(POSTS_BY_SLUGS_QUERY, {
      slugs: blogSection.slugs,
    })
    // GROQ `in` doesn't preserve order — restore the data file's ordering.
    relatedPosts = [...posts].sort(
      (a, b) =>
        blogSection.slugs.indexOf(a.slug) - blogSection.slugs.indexOf(b.slug),
    )
    // Surface slug drift (renamed in Studio) loudly in build/server logs.
    // Not a throw: a scheduled post is a legitimate temporary miss.
    if (relatedPosts.length !== blogSection.slugs.length) {
      const found = new Set(relatedPosts.map((post) => post.slug))
      const missing = blogSection.slugs.filter((s) => !found.has(s))
      console.error(
        `[programs/${slug}] blogSection slugs not found in Sanity (renamed, unpublished, or scheduled): ${missing.join(', ')}`,
      )
    }
  }

  return (
    <div className="page-wrapper">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Our programs', url: `${SITE_URL}/programs` },
          { name: program.name, url: `${SITE_URL}/programs/${program.slug}` },
        ]}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-secondary/10 to-transparent section-hero">
        <div className="page-container">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-tight max-w-3xl text-left">
              <Link
                href="/programs"
                className="eyebrow inline-flex w-fit items-center gap-1.5 text-xs sm:text-sm text-brand-secondary transition hover:text-brand-primary"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Our programs
              </Link>
              <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
                {program.name}
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="page-container stack stack-loose">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-tight max-w-3xl">
            {program.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base text-slate-600">
                {paragraph}
              </p>
            ))}
            {program.links && (
              <div className="flex flex-col gap-3 pt-1">
                {program.links.map((link) => (
                  <ProgramLinkItem key={link.label} link={link} />
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>

        {images.length === 1 && (
          <ScrollReveal variant="fade-up">
            <div className="relative aspect-[4/3] max-w-2xl overflow-hidden rounded-3xl shadow-xl ring-1 ring-brand-primary/10">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 42rem"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        )}
        {images.length > 1 && (
          <StaggerReveal
            variant="fade-up"
            className={`grid gap-3 sm:gap-4 ${
              images.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'
            }`}
          >
            {images.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    images.length === 2
                      ? '(max-width: 640px) 100vw, 50vw'
                      : '(max-width: 640px) 100vw, 33vw'
                  }
                  className="object-cover"
                />
              </div>
            ))}
          </StaggerReveal>
        )}
      </section>

      {/* Related reading */}
      {blogSection && relatedPosts.length > 0 && (
        <section className="bg-[#fafaf7] section-hero">
          <div className="page-container stack stack-relaxed">
            <ScrollReveal variant="fade-up">
              <h2 className="max-w-3xl text-2xl font-semibold text-slate-900 sm:text-3xl">
                {blogSection.heading}
              </h2>
            </ScrollReveal>
            <StaggerReveal
              staggerDelay={100}
              variant="blossom"
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {relatedPosts.map((post) => (
                <PostCard key={post._id} post={post} headingLevel="h3" />
              ))}
            </StaggerReveal>
          </div>
        </section>
      )}

      <ProgramsClosingCta />
    </div>
  )
}
