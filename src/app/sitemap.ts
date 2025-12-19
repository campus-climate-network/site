import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { POST_SLUGS_QUERY } from '@/sanity/lib/queries'

const baseUrl = 'https://campusclimatenetwork.org'

// Campaign slugs for dynamic routes (hidden until Student Wins content is ready)
// const campaignSlugs = [
//   'fossil-free-research',
//   'campus-decarbonization',
//   'green-new-deal',
//   'fossil-free-careers',
//   'fossil-fuel-divestment',
// ]

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
    '/our-funders',
    '/ffr-archive',
    '/network-campaigns',
    // '/student-wins', // Hidden until content is ready
    '/open-letter',
    '/blog',
    '/contact-us',
    '/hiring',
  ]

  const staticEntries: MetadataRoute.Sitemap = [
    // Home page
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // High priority pages
    ...highPriorityPages.slice(1).map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    // Standard pages
    ...standardPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Campaign detail pages (hidden until Student Wins content is ready)
    // ...campaignSlugs.map((slug) => ({
    //   url: `${baseUrl}/network-campaigns/${slug}`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.7,
    // })),
  ]

  // Fetch blog post slugs
  let blogEntries: MetadataRoute.Sitemap = []
  try {
    const posts = await client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY)
    blogEntries = posts.map(({ slug }) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {
    // If Sanity fetch fails, continue without blog entries
  }

  return [...staticEntries, ...blogEntries]
}
