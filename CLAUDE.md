# CLAUDE.md — Campus Climate Network

## Quick Reference

- **Site**: https://campusclimatenetwork.org
- **Stack**: Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + Sanity CMS + Mapbox GL
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
│   │   ├── network-campaigns/     # Campaign listing + [campaign] detail (redirects for now)
│   │   ├── student-wins/          # Movement wins timeline (from Sanity)
│   │   ├── take-action/           # Action Network intake form embed
│   │   ├── donate/                # HCB donation iframe
│   │   ├── open-letter/           # Open letter + signatories
│   │   ├── contact-us/            # Contact page
│   │   ├── hiring/                # Careers page
│   │   ├── piggy-bank/            # Small grants program
│   │   └── our-funders/           # Currently redirects to / (hidden)
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
    │   └── movementWinType.ts    # Movement win (timeline)
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
- Blog pages use `revalidate = 60` (ISR every 60 seconds)
- GROQ queries centralized in `src/sanity/lib/queries.ts`
- Member orgs fetched server-side, geocoded client-side via Mapbox API

### Hidden/WIP Pages
- `/our-funders` — redirects to `/` (content not ready)
- `/network-campaigns/[campaign]` — redirects to `/network-campaigns` (detail pages hidden)
- `/student-wins` — exists but navigation link is commented out
- Campaign slugs in sitemap are commented out

## Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=  # optional, defaults to 2025-10-19
NEXT_PUBLIC_MAPBOX_TOKEN=
```

## Important Notes

- The site is **open source**: https://github.com/campus-climate-network/campus-climate-network
- Donations go through **HCB** (Hack Club Bank) iframe embed
- Take action form uses **Action Network** (external script embed)
- Images served from `cdn.sanity.io` and `images.squarespace-cdn.com` (allowed in next.config.ts)
- `styled-components` is a dependency (required by Sanity Studio) but not used in site code
- Respect `prefers-reduced-motion` — all scroll animations have reduced-motion fallbacks
