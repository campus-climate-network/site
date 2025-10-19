// src/sanity/lib/queries.ts
// Minimal GROQ used by /resources/blog page
export const POSTS_QUERY = `
*[_type == "post" && publishedAt < now()] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  publishedAt
}
`

export const POST_SLUGS_QUERY = `
*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
}
`

export const POST_QUERY = `
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  body,
  mainImage,
  "author": author->{
    _id,
    name,
    image
  },
  "categories": categories[]->{
    _id,
    title,
    "slug": slug.current
  }
}
`
