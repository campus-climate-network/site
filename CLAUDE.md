# CLAUDE.md — Campus Climate Network

## Quick Reference

- **Site**: https://campusclimatenetwork.org
- **Stack**: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + Sanity CMS + Mapbox GL + Notion (member portal)
- **Package manager**: bun
- **Deployment**: Vercel

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
│   │   ├── ffr-campaign/          # Fossil Free Research campaign page
│   │   ├── ffr-archive/           # FFR research reports
│   │   ├── impact/                # Impact page (local placeholder data; was student-wins)
│   │   ├── take-action/           # Action Network intake form embed
│   │   ├── donate/                # HCB donation iframe
│   │   ├── open-letter/           # Open letter + signatories
│   │   ├── contact-us/            # Contact page
│   │   ├── hiring/                # Careers page (open roles from Sanity jobRole docs)
│   │   ├── impact-reports/2025/   # 2025 impact report (animated counters, scroll header)
│   │   ├── member-portal/         # Password-gated, Notion-backed member portal (noindex)
│   │   │   ├── [[...pageId]]/page.tsx  # Renders Notion pages via react-notion-x
│   │   │   ├── actions.ts         # Server actions: HMAC-cookie auth (MEMBER_PORTAL_PASSWORD)
│   │   │   ├── password-form.tsx  # Password gate UI
│   │   │   └── notion-page.tsx    # NotionRenderer wrapper
│   │   └── resources/blog/[slug]/ # Empty placeholder dir — no page yet (WIP)
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
│   ├── action-network-form.tsx    # Action Network form embed
│   ├── json-ld.tsx                # Structured data components (Organization, Article, FAQ, etc.)
│   └── fancy/blocks/stacking-cards.tsx  # Scroll-triggered stacking card sections (motion)
├── data/
│   └── navigation.ts             # Navigation entries (shared by header + footer)
├── lib/
│   └── utils.ts                  # cn() utility (clsx + tailwind-merge)
└── sanity/
    ├── env.ts                    # Sanity project ID, dataset, API version from env vars
    ├── lib/
    │   ├── client.ts             # Sanity client (CDN disabled for ISR freshness)
    │   ├── queries.ts            # All GROQ queries
    │   ├── types.ts              # TypeScript types for Sanity data
    │   ├── image.ts              # urlFor() image URL builder
    │   └── live.ts               # sanityFetch / SanityLive (not actively used)
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
- Brand colors defined as CSS custom properties: `--brand-primary` (#60379d), `--brand-secondary` (#4f72ca), `--brand-tertiary` (#a474e1), `--brand-accent` (#e8bf43), `--brand-sky` (#73bcf0), `--brand-cream` (#fff4eb)
- Use Tailwind classes like `bg-brand-primary`, `text-brand-accent`, etc.
- shadcn/ui configured (new-york style, lucide icons) but no UI components currently installed — `cn()` utility in `src/lib/utils.ts`
- Fancy components registry: `@fancy` → `https://fancycomponents.dev/r/{name}.json`
- Custom CSS utility classes (defined in globals.css, NOT Tailwind):
  - `.page-wrapper` — flex column with responsive gap + bottom padding
  - `.page-container` — centered max-w-6xl with responsive horizontal padding
  - `.section-hero`, `.section-dark`, `.section-accent` — section vertical padding
  - `.stack` with modifiers: `.stack-compact` (4px) through `.stack-giant` (64px)
  - `.stack-list-compact`, `.stack-list-snug` — tighter list spacing
  - `.eyebrow` — uppercase tracking-widest label text
- Scroll reveal animations: CSS-driven with `.scroll-reveal-{variant}`, `.will-animate`, `.is-visible` classes
- Timeline styles: `.timeline-container`, `.timeline-track`, `.timeline-item`, etc.

### Fonts

- **Poppins** (body, `--font-poppins` / `font-sans`) — weights: 300, 400, 500, 700
- **Bungee** (display/headings, `--font-bungee` / `font-display`) — weight: 400
- All `<h1>` elements globally styled with `font-family: var(--font-bungee)`, `text-transform: uppercase`, `max-width: 48rem`

### Components

- Server Components by default; `'use client'` only where needed (interactivity, hooks)
- `MemberMap` loaded via `dynamic()` with `ssr: false` (Mapbox needs browser APIs)
- `ScrollReveal` / `StaggerReveal` — progressive enhancement; content visible by default, animations added only when JS detects element is outside viewport
- Navigation data centralized in `src/data/navigation.ts` — header and footer both derive from it
- JSON-LD structured data components in `src/components/json-ld.tsx`

### Data Fetching

- Sanity client with `useCdn: false` for fresh ISR data
- Blog pages use `revalidate = 60` (ISR every 60 seconds); `/hiring` uses `revalidate = 3600` (1h); `/our-network` and `/impact` have no time-based `revalidate` (fully static, refreshed only via the webhook below or redeploy)
- GROQ queries centralized in `src/sanity/lib/queries.ts`
- Member orgs fetched server-side, geocoded client-side via Mapbox API

#### On-demand revalidation (Sanity webhook)

- `POST /api/revalidate` (`src/app/api/revalidate/route.ts`) refreshes pages the moment content is published/unpublished/deleted in Sanity. Time-based ISR above is the fallback.
- Signature is validated with `parseBody` from `next-sanity/webhook` using `SANITY_REVALIDATE_SECRET` (server-only). Unsigned/invalid requests → 401.
- Maps `_type` → `revalidatePath`: `jobRole` → `/hiring`; `post` → `/blog` + `/blog/{slug}`; `author`/`category` → `/blog` + all post pages (`/blog/[slug]`); `memberOrg` → `/our-network`; `movementWin` → `/impact`.
- Sanity webhook config: URL `https://www.campusclimatenetwork.org/api/revalidate` (use `www.` — the apex 307-redirects), POST, projection `{ "_type": _type, "slug": slug.current }`, Drafts/Versions disabled, secret = `SANITY_REVALIDATE_SECRET`.

### Hidden/WIP Pages

- `/impact` — exists but navigation link is commented out; add to sitemap once published
- `/member-portal` — password-gated (HMAC cookie); `noindex` and excluded from sitemap
- `/resources/blog/[slug]` — empty placeholder directory, no page implemented yet

### Sitemap Notes

- `/member-portal` — should be EXCLUDED from sitemap (not a public-facing page)
- `/impact` — add to sitemap once the page is published

## Environment Variables

Required in `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=  # optional, defaults to 2025-10-19
NEXT_PUBLIC_MAPBOX_TOKEN=
MEMBER_PORTAL_PASSWORD=          # server-side; gates /member-portal access
SANITY_REVALIDATE_SECRET=        # server-side; shared secret for the Sanity → /api/revalidate webhook
```

## Important Notes

- The site is **open source**: https://github.com/campus-climate-network/campus-climate-network
- Donations go through **HCB** (Hack Club Bank) iframe embed
- Take action form uses **Action Network** (external script embed)
- Images served from `cdn.sanity.io` and `images.squarespace-cdn.com` (allowed in next.config.ts)
- `styled-components` is a dependency (required by Sanity Studio) but not used in site code
- Member portal content lives in **Notion**; fetched via `notion-client` and rendered with `react-notion-x` (`notion-types`/`notion-utils` for traversal). Access is gated by a server-side HMAC cookie keyed off `MEMBER_PORTAL_PASSWORD` (see `member-portal/actions.ts`)
- Respect `prefers-reduced-motion` — all scroll animations have reduced-motion fallbacks
