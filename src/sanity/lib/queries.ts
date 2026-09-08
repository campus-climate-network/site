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
// like every other post query. Newest first, regardless of slug order.
export const POSTS_BY_SLUGS_QUERY = `
*[_type == "post" && publishedAt < now() && slug.current in $slugs] | order(publishedAt desc)${POST_LIST_PROJECTION}`

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

// Careers. A role is open while its toggle is on and today hasn't passed its
// optional deadline. `$today` is YYYY-MM-DD (todayInEastern() in job-role.ts),
// passed as a param rather than using now() so the deadline day is compared
// as a plain date and stays open through the end of that day. A slug is part
// of being open: the listing, sitemap, and static params all link to
// /hiring/[slug], so a slugless document is never surfaced.
const JOB_ROLE_OPEN_FILTER = `isOpen == true && defined(slug.current) && (!defined(applicationDeadline) || applicationDeadline >= $today)`

// Open roles for the /hiring listing
export const JOB_ROLES_QUERY = `
*[_type == "jobRole" && ${JOB_ROLE_OPEN_FILTER}] | order(postedAt desc){
  _id,
  title,
  "slug": slug.current,
  description,
  compensation,
  employmentType,
  locationType,
  location,
  applicationUrl,
  postedAt,
  applicationDeadline
}
`

// Open roles — static params and sitemap entries for /hiring/[slug]
export const JOB_ROLE_SLUGS_QUERY = `
*[_type == "jobRole" && ${JOB_ROLE_OPEN_FILTER}]{
  "slug": slug.current,
  _updatedAt
}
`

// One role for /hiring/[slug]. Deliberately not filtered on open state: a
// closed role still renders (with a closed notice instead of Apply) so
// shared links keep working.
export const JOB_ROLE_QUERY = `
*[_type == "jobRole" && slug.current == $slug][0]{
  _id,
  _updatedAt,
  title,
  "slug": slug.current,
  description,
  body,
  compensation,
  employmentType,
  locationType,
  location,
  applicationUrl,
  postedAt,
  applicationDeadline,
  isOpen
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
