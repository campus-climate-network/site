import { SITE_URL } from '@/lib/site'

const siteUrl = SITE_URL

type OrganizationJsonLdProps = {
  url?: string
}

export function OrganizationJsonLd({ url = siteUrl }: OrganizationJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${url}/#organization`,
    name: 'Campus Climate Network',
    url: url,
    logo: {
      '@type': 'ImageObject',
      url: `${url}/purple-logo.png`,
      width: 512,
      height: 512,
    },
    description:
      'Campus Climate Network organizes students to win fossil-free research and climate justice on campus.',
    foundingDate: '2022',
    sameAs: [
      'https://x.com/cclimatenetwork',
      'https://www.instagram.com/campusclimatenetwork/',
      'https://www.linkedin.com/company/campus-climate-network/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@campusclimatenetwork.org',
      contactType: 'General Inquiries',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

type WebSiteJsonLdProps = {
  url?: string
}

export function WebSiteJsonLd({ url = siteUrl }: WebSiteJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${url}/#website`,
    url: url,
    name: 'Campus Climate Network',
    description:
      'Campus Climate Network organizes students to win fossil-free research and climate justice on campus.',
    publisher: {
      '@id': `${url}/#organization`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

type ArticleJsonLdProps = {
  title: string
  description: string
  url: string
  imageUrl?: string
  datePublished?: string
  dateModified?: string
  authorName?: string
}

export function ArticleJsonLd({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
}: ArticleJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    ...(imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
      },
    }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(datePublished && !dateModified && { dateModified: datePublished }),
    author: authorName
      ? {
          '@type': 'Person',
          name: authorName,
        }
      : {
          '@id': `${siteUrl}/#organization`,
        },
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

type BreadcrumbItem = {
  name: string
  url: string
}

type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[]
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

type JobPostingJsonLdProps = {
  title: string
  description: string
  datePosted?: string
  location?: string
  applicationUrl?: string
}

export function JobPostingJsonLd({
  title,
  description,
  datePosted,
  location,
  applicationUrl,
}: JobPostingJsonLdProps) {
  const remote = !location || /remote/i.test(location)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title,
    description,
    ...(datePosted && { datePosted }),
    hiringOrganization: {
      '@id': `${siteUrl}/#organization`,
    },
    ...(remote
      ? {
          jobLocationType: 'TELECOMMUTE',
          applicantLocationRequirements: {
            '@type': 'Country',
            name: 'USA',
          },
        }
      : {
          jobLocation: {
            '@type': 'Place',
            address: location,
          },
        }),
    ...(applicationUrl && { directApply: true, url: applicationUrl }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

type FAQItem = {
  question: string
  answer: string
}

type FAQPageJsonLdProps = {
  faqs: FAQItem[]
}

export function FAQPageJsonLd({ faqs }: FAQPageJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
