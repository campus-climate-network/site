import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { POST_SLUGS_WITH_DATES_QUERY } from '@/sanity/lib/queries'

const baseUrl = 'https://campusclimatenetwork.org'

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
    '/ffr-campaign',
  ]

  // Standard priority pages
  const standardPages = [
    '/our-story',
    '/our-approach',
    '/ffr-archive',
    // '/impact', // Hidden until content is ready
    '/open-letter',
    '/blog',
    '/contact-us',
    '/hiring',
    '/impact-reports/2025',
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
  ]

  // Fetch blog post slugs with dates
  let blogEntries: MetadataRoute.Sitemap = []
  try {
    const posts = await client.fetch<PostWithDates[]>(
      POST_SLUGS_WITH_DATES_QUERY,
    )
    blogEntries = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt || post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {
    // If Sanity fetch fails, continue without blog entries
  }

  return [...staticEntries, ...blogEntries]
}
