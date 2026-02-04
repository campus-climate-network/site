export type PostListItem = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  publishedAt: string
  mainImage?: unknown
  categories?: {
    _id: string
    title?: string
    slug?: string
  }[]
}

export type PostDetail = PostListItem & {
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
