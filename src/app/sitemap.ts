import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { POST_SLUGS_WITH_DATES_QUERY } from '@/sanity/lib/queries'
import { SITE_URL } from '@/lib/site'
import { programs } from '@/app/(site)/programs/programs-data'

const baseUrl = SITE_URL

type PostWithDates = {
  slug: string
  publishedAt: string
  _updatedAt: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // High priority pages (main navigation)
  const highPriorityPages = [
    '', // Home
    '/take-action',
    '/donate',
    '/our-network',
  ]

  // Standard priority pages
  const standardPages = [
    '/our-story',
    '/our-approach',
    '/impact',
    '/programs',
    ...programs.map((program) => `/programs/${program.slug}`),
    '/campaigns',
    '/open-letter',
    '/blog',
    '/contact-us',
    '/hiring',
  ]

  // Static pages omit lastModified since we don't have accurate dates
  const staticEntries: MetadataRoute.Sitemap = [
    // Home page
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // High priority pages
    ...highPriorityPages.slice(1).map((path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    // Standard pages
    ...standardPages.map((path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Annual report — content is fixed once published
    {
      url: `${baseUrl}/impact-reports/2025`,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    },
  ]

  // Fetch blog post slugs with dates
  let blogEntries: MetadataRoute.Sitemap = []
  try {
    const posts = await client.fetch<PostWithDates[]>(
      POST_SLUGS_WITH_DATES_QUERY,
      {},
      // Tagged so publishing a post refreshes the sitemap too, not just the
      // blog pages.
      { cache: 'force-cache', next: { tags: ['post'] } },
    )
    blogEntries = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt || post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
    // The blog listing changes whenever its newest post does
    const newest = blogEntries
      .map((entry) => entry.lastModified)
      .filter((date): date is Date => date instanceof Date)
      .sort((a, b) => b.getTime() - a.getTime())[0]
    if (newest) {
      const blogIndex = staticEntries.find(
        (entry) => entry.url === `${baseUrl}/blog`,
      )
      if (blogIndex) blogIndex.lastModified = newest
    }
  } catch {
    // If Sanity fetch fails, continue without blog entries
  }

  return [...staticEntries, ...blogEntries]
}
