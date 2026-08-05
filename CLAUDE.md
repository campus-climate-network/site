# Campus Climate Network — Agent Instructions

## Quick Reference

- **Site**: https://campusclimatenetwork.org
- **Stack**: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + Sanity CMS + Mapbox GL + Notion (member portal)
- **Package manager**: bun
- **Deployment**: Vercel
- **Design system**: [design.md](design.md) — read it before building or changing any UI

## Commands

```sh
bun dev          # Start dev server (Turbopack)
bun run build    # Production build
bun run lint     # ESLint
bun run format   # Prettier (write mode)
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout (fonts, metadata, analytics, JSON-LD)
│   ├── not-found.tsx              # Global 404 page
│   ├── robots.ts                  # Robots.txt generation
│   ├── sitemap.ts                 # Dynamic sitemap (static pages + Sanity blog posts)
│   ├── api/
│   │   └── revalidate/route.ts    # Sanity webhook → on-demand revalidatePath (signature-validated)
│   ├── (site)/                    # Public site route group
│   │   ├── layout.tsx             # Site shell (SiteHeader + main + SiteFooter)
│   │   ├── globals.css            # All global styles, CSS custom properties, utilities
│   │   ├── (home)/page.tsx        # Homepage
│   │   ├── blog/                  # Blog listing + [slug] detail pages
│   │   ├── our-network/           # Member organizations + interactive map
│   │   ├── our-story/             # Timeline of CCN history
│   │   ├── our-approach/          # Mission, stacking scroll sections
│   │   ├── campaigns/             # Campaigns overview + carousel (local campaigns-data.ts; absorbed the former /ffr-campaign and /ffr-archive pages)
│   │   ├── impact/                # Impact page (wins in local wins-data.ts)
│   │   ├── programs/              # Programs landing (card grid + academic-year table; local programs-data.ts)
│   │   │   ├── [slug]/page.tsx    # Per-program detail pages (static params from programs-data.ts; related posts via POSTS_BY_SLUGS_QUERY)
│   │   │   └── closing-cta.tsx    # Programs CTA copy, rendered via the shared ClosingCta component
│   │   ├── take-action/           # Custom join form → Action Network API (actions.ts + join-form.tsx)
│   │   ├── donate/                # HCB donation iframe
│   │   ├── open-letter/           # Open letter + signatories
│   │   ├── contact-us/            # Contact page
│   │   ├── hiring/                # Careers page (open roles from Sanity jobRole docs)
│   │   ├── impact-reports/2025/   # 2025 impact report (animated counters, scroll header)
│   │   └── member-portal/         # Password-gated, Notion-backed member portal (noindex)
│   │       ├── [[...pageId]]/page.tsx  # Renders Notion pages via react-notion-x
│   │       ├── actions.ts         # Server actions: HMAC-cookie auth (MEMBER_PORTAL_PASSWORD)
│   │       ├── password-form.tsx  # Password gate UI
│   │       └── notion-page.tsx    # NotionRenderer wrapper
│   └── studio/[[...tool]]/        # Sanity Studio at /studio
├── components/
│   ├── site-header.tsx            # Sticky header with desktop mega-menu + mobile nav
│   ├── site-footer.tsx            # Footer (auto-generated from navigation.ts)
│   ├── scroll-reveal.tsx          # ScrollReveal + StaggerReveal (IntersectionObserver)
│   ├── hero-carousel.tsx          # Hero image carousel (mobile static / desktop interactive)
│   ├── movement-carousel.tsx      # Movement highlights carousel
│   ├── member-map.tsx             # Mapbox GL map (client-side, geocoding)
│   ├── member-map-wrapper.tsx     # Dynamic import wrapper (SSR disabled)
│   ├── timeline.tsx               # Generic vertical scroll timeline
│   ├── json-ld.tsx                # Structured data components (Organization, Article, JobPosting, FAQ, etc.)
│   ├── post-card.tsx              # Shared blog-post card + byline/date helpers (used by /blog and /programs/[slug])
│   ├── closing-cta.tsx            # Shared gradient closing-CTA panel (props: heading/body/CTAs)
│   ├── faq-section.tsx            # Visible FAQ accordion + FAQPage JSON-LD from the same data
│   └── fancy/blocks/stacking-cards.tsx  # Scroll-triggered stacking card sections (motion)
├── data/
│   └── navigation.ts             # Navigation entries (shared by header + footer)
├── lib/
│   ├── site.ts                   # SITE_URL — canonical www origin for all absolute URLs
│   └── utils.ts                  # cn() utility (clsx + tailwind-merge)
└── sanity/
    ├── env.ts                    # Sanity project ID, dataset, API version from env vars
    ├── lib/
    │   ├── client.ts             # Sanity client (CDN disabled for ISR freshness)
    │   ├── queries.ts            # All GROQ queries
    │   ├── types.ts              # TypeScript types for Sanity data
    │   └── image.ts              # urlFor() image URL builder
    ├── schemaTypes/
    │   ├── index.ts              # Schema registry
    │   ├── postType.ts           # Blog post
    │   ├── authorType.ts         # Author
    │   ├── categoryType.ts       # Category
    │   ├── blockContentType.ts   # Rich text (Portable Text)
    │   ├── memberOrgType.ts      # Member organization (map + listing)
    │   ├── movementWinType.ts    # Movement win (timeline)
    │   └── jobRoleType.ts        # Job role / open position (powers /hiring)
    └── structure.ts              # Sanity Studio desk structure
```

## Code Conventions

### Formatting

- **No semicolons**, single quotes (Prettier config)
- Strict TypeScript (`strict: true`)
- ESLint: `next/core-web-vitals` + `next/typescript`

### Path Aliases

- `@/*` maps to `./src/*`
- `@/sanity.config` maps to `./sanity.config.ts`

### Styling

- **Tailwind CSS v4** with `@tailwindcss/postcss` — no `tailwind.config.ts` file; theme is defined inline in `globals.css` via `@theme inline`
- shadcn/ui configured (new-york style, lucide icons) but no UI components currently installed — `cn()` utility in `src/lib/utils.ts`
- Fancy components registry: `@fancy` → `https://fancycomponents.dev/r/{name}.json`
- **All design conventions live in [design.md](design.md)** — brand colors, fonts, type scale, layout/spacing utilities (`page-wrapper`, `section-*`, `stack`), buttons, cards, motion, copy rules, and page-specific exceptions (including the intentionally distinct impact report)

### Components

- Server Components by default; `'use client'` only where needed (interactivity, hooks)
- `MemberMap` loaded via `dynamic()` with `ssr: false` (Mapbox needs browser APIs)
- `ScrollReveal` / `StaggerReveal` — progressive enhancement; content visible by default, animations added only when JS detects element is outside viewport
- Navigation data centralized in `src/data/navigation.ts` — header and footer both derive from it
- JSON-LD structured data components in `src/components/json-ld.tsx`

### Data Fetching

- Sanity client with `useCdn: false` for fresh ISR data
- Blog pages use `revalidate = 60` (ISR every 60 seconds); `/hiring` and `/programs/[slug]` use `revalidate = 3600` (1h); `/our-network` and `/impact` have no time-based `revalidate` (fully static, refreshed only via the webhook below or redeploy)
- GROQ queries centralized in `src/sanity/lib/queries.ts`
- Member orgs fetched server-side, geocoded client-side via Mapbox API

#### On-demand revalidation (Sanity webhook)

- `POST /api/revalidate` (`src/app/api/revalidate/route.ts`) refreshes pages the moment content is published/unpublished/deleted in Sanity. Time-based ISR above is the fallback.
- Signature is validated with `parseBody` from `next-sanity/webhook` using `SANITY_REVALIDATE_SECRET` (server-only). Unsigned/invalid requests → 401.
- Maps `_type` → `revalidatePath`: `jobRole` → `/hiring`; `post` → `/blog` + `/blog/{slug}` + any `/programs/{slug}` page whose `blogSection.slugs` (in `programs-data.ts`) reference the post; `author`/`category` → `/blog` + all post pages (`/blog/[slug]`) + all program pages with a `blogSection`; `memberOrg` → `/our-network`; `movementWin` → `/impact`.
- Sanity webhook config: URL `https://www.campusclimatenetwork.org/api/revalidate` (use `www.` — the apex 307-redirects), POST, projection `{ "_type": _type, "slug": slug.current }`, Drafts/Versions disabled, secret = `SANITY_REVALIDATE_SECRET`.

### Hidden/WIP Pages

- `/member-portal` — password-gated (HMAC cookie); `noindex` and excluded from sitemap
- `/impact` — complete and live; the section-03 partner quote and the UCSD win (commented out in `impact/wins-data.ts`) are intentionally unused, not pending — don't treat them as gaps

### SEO & Sitemap Notes

- Canonical host is `https://www.campusclimatenetwork.org` — the apex 307-redirects to `www`. All absolute URLs (metadataBase, sitemap, robots, JSON-LD) derive from the shared `SITE_URL` constant in `src/lib/site.ts`; never hardcode the origin
- Every public page sets `alternates.canonical`; the root layout deliberately omits og/twitter `title`/`description`/`url` so each page's own metadata flows into social cards
- `/member-portal` and `/studio` — EXCLUDED from sitemap and noindexed. Do not robots-disallow `/member-portal`: crawlers must be able to fetch it to see the noindex
- FAQ content: `src/components/faq-section.tsx` renders the visible FAQ accordion and its `FAQPage` JSON-LD from the same data — never emit FAQ JSON-LD without matching visible content (structured-data spam signal)
- `public/llms.txt` — AI-crawler site summary; update its links when pages are added or renamed

## Environment Variables

Required in `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=  # optional, defaults to 2025-10-19
NEXT_PUBLIC_MAPBOX_TOKEN=
MEMBER_PORTAL_PASSWORD=          # server-side; gates /member-portal access
SANITY_REVALIDATE_SECRET=        # server-side; shared secret for the Sanity → /api/revalidate webhook
ACTION_NETWORK_API_KEY=          # server-side; OSDI-API-Token for the /take-action join form
ACTION_NETWORK_FORM_ID=          # server-side; Action Network form UUID the join form submits to
ACTION_NETWORK_TAGS=             # optional; comma-separated tag names applied to signups — tags must already exist in Action Network (unknown tags are silently ignored)
ACTION_NETWORK_SOURCE=           # optional; source code for the form's sources chart (defaults to ccn-website)
ACTION_NETWORK_AUTORESPONSE=     # optional; set to false to skip the form's autoresponse email (defaults to true)
```

## Important Notes

- The site is **open source**: https://github.com/campus-climate-network/campus-climate-network
- Donations go through **HCB** (Hack Club Bank) iframe embed
- Take action form is a custom-designed form that submits to the **Action Network API** (Record Submission Helper) via a server action (`take-action/actions.ts`); the API key stays server-side. Custom field names must match the Action Network form's fields exactly (e.g. `School 1`, `Campaign Interest_Divestment`)
- Images served from `cdn.sanity.io` and `images.squarespace-cdn.com` (allowed in next.config.ts)
- `styled-components` is a dependency (required by Sanity Studio) but not used in site code
- Member portal content lives in **Notion**; fetched via `notion-client` and rendered with `react-notion-x` (`notion-types`/`notion-utils` for traversal). Access is gated by a server-side HMAC cookie keyed off `MEMBER_PORTAL_PASSWORD` (see `member-portal/actions.ts`)
