import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { POST_SLUGS_QUERY } from '@/sanity/lib/queries'

const baseUrl = 'https://campusclimatenetwork.org'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    '',
    '/our-network',
    '/our-story',
    '/our-approach',
    '/our-funders',
    '/ffr-campaign',
    '/ffr-toolkit',
    '/ffr-archive',
    '/network-campaigns',
    '/open-letter',
    '/take-action',
    '/donate',
    '/contact-us',
    '/hiring',
    '/resources',
    '/resources/blog',
    '/resources/library',
  ]

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))

  // Fetch blog post slugs
  let blogEntries: MetadataRoute.Sitemap = []
  try {
    const posts = await client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY)
    blogEntries = posts.map(({ slug }) => ({
      url: `${baseUrl}/resources/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {
    // If Sanity fetch fails, continue without blog entries
  }

  return [...staticEntries, ...blogEntries]
}
