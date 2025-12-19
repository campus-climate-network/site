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

// Minimal GROQ used by /blog page
export const POSTS_QUERY = `
*[_type == "post" && publishedAt < now()] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  "categories": categories[]->{
    _id,
    title,
    "slug": slug.current
  }
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
