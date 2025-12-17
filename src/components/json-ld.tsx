const siteUrl = 'https://campusclimatenetwork.org'

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
      // Add social media URLs when available
      // 'https://twitter.com/...',
      // 'https://instagram.com/...',
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

type WebPageJsonLdProps = {
  title: string
  description: string
  url: string
}

export function WebPageJsonLd({ title, description, url }: WebPageJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    about: {
      '@id': `${siteUrl}/#organization`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

