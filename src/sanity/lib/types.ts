import type { PortableTextBlock } from '@portabletext/react'

export type PostListItem = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  publishedAt: string
  mainImage?: unknown
  authorName?: string
  categories?: {
    _id: string
    title?: string
    slug?: string
  }[]
}

export type PostDetail = PostListItem & {
  _updatedAt?: string
  body: unknown
  mainImage?: unknown
  author?: {
    _id: string
    name?: string
    image?: unknown
    bio?: unknown
  }
  categories?: {
    _id: string
    title?: string
    slug?: string
  }[]
}

// Careers (jobRole documents). Sanity projections return null for unset
// fields, hence the `| null`s. Listed roles always have a slug (the open
// filter requires one); the detail query is by slug, so it's present there too.
export type JobRoleListItem = {
  _id: string
  title: string
  slug: string
  description?: string | null
  compensation?: string | null
  employmentType?: string | null
  locationType?: string | null
  location?: string | null
  applicationUrl?: string | null
  postedAt: string
  applicationDeadline?: string | null
  startDate?: string | null
}

export type JobRoleDetail = JobRoleListItem & {
  _updatedAt?: string
  body?: PortableTextBlock[] | null
  isOpen?: boolean | null
}
