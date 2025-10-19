export type PostListItem = {
  _id: string
  title: string
  slug: string
  publishedAt: string
}

export type PostDetail = PostListItem & {
  body: unknown
  mainImage?: unknown
  author?: {
    _id: string
    name?: string
    image?: unknown
  }
  categories?: {
    _id: string
    title?: string
    slug?: string
  }[]
}
