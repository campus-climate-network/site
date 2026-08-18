// src/sanity/lib/queries.ts

// Member organizations for map
export const MEMBER_ORGS_QUERY = `
*[_type == "memberOrg" && isActive == true] | order(name asc){
  _id,
  name,
  university,
  address,
  location,
  coordinates,
  website,
  instagram,
  description,
  region,
  "logoUrl": logo.asset->url
}
`

// Cache tags for on-demand revalidation: each client.fetch tags the Sanity
// document types its query renders, and /api/revalidate invalidates the
// changed document's _type. Post queries dereference author + categories,
// so they carry all three tags.
export const POST_TAGS: string[] = ['post', 'author', 'category']

// Shared list projection for the post queries that feed PostListItem and
// PostCard — keeps both queries below returning identical card data.
const POST_LIST_PROJECTION = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  "authorName": author->name,
  "categories": categories[]->{
    _id,
    title,
    "slug": slug.current
  }
}`

// Minimal GROQ used by /blog page
export const POSTS_QUERY = `
*[_type == "post" && publishedAt < now()] | order(publishedAt desc)${POST_LIST_PROJECTION}
`

// The POSTS_QUERY projection for a specific set of slugs (e.g. a program
// page's related-reading section), filtering unpublished/scheduled posts
// like every other post query. GROQ's `in` does not preserve order —
// callers sort by their slug array.
export const POSTS_BY_SLUGS_QUERY = `
*[_type == "post" && publishedAt < now() && slug.current in $slugs]${POST_LIST_PROJECTION}`

export const POST_SLUGS_QUERY = `
*[_type == "post" && defined(slug.current) && publishedAt < now()]{
  "slug": slug.current
}
`

// Post slugs with dates for sitemap
export const POST_SLUGS_WITH_DATES_QUERY = `
*[_type == "post" && defined(slug.current) && publishedAt < now()]{
  "slug": slug.current,
  publishedAt,
  _updatedAt
}
`

export const POST_QUERY = `
*[_type == "post" && slug.current == $slug && publishedAt < now()][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  _updatedAt,
  body,
  mainImage,
  "author": author->{
    _id,
    name,
    image,
    bio
  },
  "categories": categories[]->{
    _id,
    title,
    "slug": slug.current
  }
}
`

// Job roles for careers page
export const JOB_ROLES_QUERY = `
*[_type == "jobRole" && isOpen == true] | order(postedAt desc){
  _id,
  title,
  department,
  location,
  description,
  applicationUrl,
  postedAt
}
`

// Movement wins for student wins page
export const MOVEMENT_WINS_QUERY = `
*[_type == "movementWin"] | order(date desc){
  _id,
  title,
  date,
  description,
  campaign,
  link,
  "memberOrg": memberOrg->{
    _id,
    name,
    "logoUrl": logo.asset->url
  }
}
`

// Movement wins filtered by campaign slug
export const MOVEMENT_WINS_BY_CAMPAIGN_QUERY = `
*[_type == "movementWin" && campaign == $campaign] | order(date desc){
  _id,
  title,
  date,
  description,
  campaign,
  link,
  "memberOrg": memberOrg->{
    _id,
    name,
    "logoUrl": logo.asset->url
  }
}
`
