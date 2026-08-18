# Campus Climate Network — Design System

The single source of truth for the site's visual language: tokens, type scale, layout system, component patterns, motion, and copy conventions. `CLAUDE.md` / `AGENTS.md` cover tooling and architecture; this file covers how things should look.

All tokens and utility classes live in [`src/app/(site)/globals.css`](<src/app/(site)/globals.css>). Tailwind CSS v4 — there is no `tailwind.config.ts`; the theme is defined inline via `@theme inline`.

## Brand Foundations

### Colors

CSS custom properties, exposed to Tailwind as `bg-brand-*` / `text-brand-*` / `border-brand-*`:

| Token                   | Hex       | Role                                                                                                                                       |
| ----------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `--brand-primary`       | `#60379d` | Purple. Headings, primary buttons, key accents                                                                                             |
| `--brand-secondary`     | `#4f72ca` | Blue. Hover state for primary buttons, secondary accents, large text/graphics                                                              |
| `--brand-secondary-ink` | `#4563b0` | Darker blue for small text (eyebrows, timeline dates) — ≥4.5:1 on white and all tinted hero backgrounds; `#4f72ca` fails AA at small sizes |
| `--brand-tertiary`      | `#a474e1` | Light purple. Gradients, decorative accents                                                                                                |
| `--brand-accent`        | `#e8bf43` | Gold. High-emphasis CTAs, accents on dark backgrounds                                                                                      |
| `--brand-sky`           | `#73bcf0` | Sky blue. Occasional decorative use                                                                                                        |
| `--brand-cream`         | `#fff4eb` | Cream. Warm tinted backgrounds, text on dark gradients                                                                                     |

Text neutrals are Tailwind slate: `slate-900` (headings), `slate-700` (ledes/emphasis body), `slate-600` (body), `slate-500` (metadata/captions). On dark backgrounds use `white`, `white/90`, `white/70`.

Common section background tints: `bg-brand-secondary/10` (hero), `bg-brand-cream/40`–`/60`, `bg-[#fafaf7]`, `bg-slate-50`, `bg-slate-900` (dark), `bg-brand-primary` (dark), and brand gradients (`bg-linear-to-br from-brand-secondary via-brand-tertiary to-brand-primary`).

### Fonts

- **Poppins** — body (`--font-poppins` / `font-sans`); weights 300, 400, 500, 700
- **Bungee** — display (`--font-bungee` / `font-display`); weight 400
- All `<h1>` elements are globally styled in `globals.css`: `font-family: var(--font-bungee)`, `text-transform: uppercase`, `max-width: 48rem`. Never re-specify the display font on an H1; use `font-display` explicitly only for display numerals/stats.

## Type Scale

| Element                                       | Classes                                                                                    |
| --------------------------------------------- | ------------------------------------------------------------------------------------------ |
| H1 (hero)                                     | `text-3xl font-semibold text-brand-primary sm:text-4xl` (white/stone on dark heroes)       |
| H2 (section)                                  | `text-2xl font-semibold text-slate-900 sm:text-3xl` (omit color on dark backgrounds)       |
| H3 (sub-section)                              | `text-xl font-semibold sm:text-2xl`                                                        |
| H3 (compact card)                             | `text-lg font-semibold` (`text-slate-900`, or `text-brand-primary` for small accent cards) |
| Large media-card title                        | `text-xl font-semibold sm:text-2xl` (blog cards, campaign carousel)                        |
| Eyebrow (page/section)                        | `eyebrow text-xs sm:text-sm text-brand-secondary`                                          |
| Eyebrow (compact: inside cards, form legends) | `eyebrow text-xs text-brand-secondary`                                                     |
| Hero lede                                     | `text-base text-slate-700`                                                                 |
| Section intro / body                          | `text-base text-slate-600`                                                                 |
| Metadata / captions                           | `text-sm text-slate-500` (or `text-xs`)                                                    |
| Display stats                                 | `font-display text-4xl text-brand-primary sm:text-5xl`                                     |

Notes:

- `.eyebrow` only sets `text-transform: uppercase` — size/weight/color are always set at the call site, per the two tiers above. **No `font-semibold` on eyebrows** (footer eyebrows in `brand-accent` and the blog category chip are the standing exceptions).
- Keep writing eyebrows as `text-brand-secondary` — a global `.eyebrow.text-brand-secondary` rule in globals.css renders them in `--brand-secondary-ink` for AA contrast at small sizes. Eyebrows on dark sections (`text-white/70`, `text-brand-accent`, `text-stone-400`) are unaffected.
- Sanctioned H1 exceptions: home hero adds `lg:text-5xl` (no color — inherits white from the dark hero); blog post titles use `text-slate-900` instead of brand-primary (editorial-page exception).

## Copy Conventions

- **No trailing periods on headings** (H1/H2/H3). Question marks are fine ("Why sign on?").
- **Curly quotes/apostrophes** in copy: literal `’ “ ”` — never `&apos;`/`&rsquo;`/`&quot;` entities.
- **Em-dashes are spaced**: `word — word`. (Number/date ranges use a plain hyphen: `2010-2020`.)
- Headings are sentence case (proper nouns keep their capitals).

## Layout System

### Spacing tokens (mobile → sm → lg)

| Token                   | Values         | Used by                              |
| ----------------------- | -------------- | ------------------------------------ |
| `--spacing-section`     | 48 → 64 → 80px | `.section-hero`                      |
| `--spacing-section-sm`  | 40 → 48 → 64px | `.section-dark`                      |
| `--spacing-container`   | 16 → 24 → 24px | `.page-container` horizontal padding |
| `--spacing-page-bottom` | 48 → 64 → 80px | `.page-wrapper` bottom padding       |

### Page scaffold

Every page follows this skeleton (see [`our-network/page.tsx`](<src/app/(site)/our-network/page.tsx>), [`donate/page.tsx`](<src/app/(site)/donate/page.tsx>)):

```tsx
<div className="page-wrapper">
  {/* Hero: full-bleed tint, own vertical padding */}
  <section className="bg-brand-secondary/10 section-hero">
    <div className="page-container stack stack-tight">…</div>
  </section>
  {/* Untinted section: plain page-container child; wrapper gap provides rhythm */}
  <section className="page-container stack stack-relaxed">…</section>
  {/* Tinted/dark full-bleed section: keeps its own padding */}
  <section className="bg-slate-900 section-dark">
    <div className="page-container">…</div>
  </section>
</div>
```

- `.page-wrapper` — flex column with responsive gap (32 → 40 → 48px, exposed as `--page-gap`) + bottom padding; the gap is what spaces sibling sections
- `.page-container` — centered, `max-width: 72rem` (max-w-6xl), responsive horizontal padding
- Tinted **light** full-bleed sections use `.section-hero` padding; **dark** sections use `.section-dark` (slightly tighter)
- When two full-bleed tinted/dark sections are adjacent, the wrapper gap shows as a white band between them — add `.section-flush` to the second section to pull it flush (cancels `--page-gap` via negative margin; see `/impact` sections 02→03, `/our-network`). Prefer this per-seam opt-out over zeroing the whole wrapper's gap; `take-action` and `open-letter` predate it and zero the wrapper gap instead (`gap-0`) — fine there because every section manages its own padding, but don't copy that pattern to new pages
- A `.section-dark`/`.stacking-section` as the _last_ child of `.page-wrapper` automatically cancels the wrapper's bottom padding (negative margin rule in globals.css)

### Stack system

`.stack` = flex column. Gap modifiers:

| Modifier                | Gap  |
| ----------------------- | ---- |
| `stack-compact`         | 4px  |
| `stack-snug`            | 8px  |
| `stack-tight`           | 12px |
| `stack-dense`           | 16px |
| `stack-cozy`            | 20px |
| (default) / `stack-mid` | 24px |
| `stack-relaxed`         | 32px |
| `stack-loose`           | 40px |

`.stack-list-compact` (4px) and `.stack-list-snug` (8px) are standalone flex-column utilities for lists.

Typical pairings: hero content `stack stack-tight`; section header block (eyebrow + H2 + intro) `stack stack-tight max-w-3xl`; whole-section content `stack stack-relaxed` or `stack-loose`.

## Components & Patterns

### Buttons

All buttons/CTA links are pills: `rounded-full … text-sm font-semibold`, with `transition`.

| Variant                | Classes                                                                                  |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| Primary                | `bg-brand-primary text-white hover:bg-brand-secondary`                                   |
| Outline (light bg)     | `border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white` |
| Outline (dark bg)      | `border border-white/50 text-white hover:bg-white hover:text-brand-primary`              |
| Accent (high emphasis) | `bg-brand-accent text-slate-900 hover:bg-brand-accent/90` (add `shadow-lg` on heroes)    |

Two sizes only: **regular** `px-5 py-2` (inline/mid-page) and **large** `px-6 py-3` (hero + closing-CTA blocks, form submits). Optional trailing icon: `gap-1.5` + `<ArrowUpRight className="h-4 w-4" />`.

Text-only links: `text-sm font-semibold text-brand-primary transition hover:text-brand-secondary`, optionally with the arrow icon and `group-hover:gap-2.5` for a slide effect.

Callout links (program detail pages, [`programs/[slug]/page.tsx`](<src/app/(site)/programs/[slug]/page.tsx>)): a high-emphasis link presented as a tinted panel rather than a pill — `rounded-2xl bg-brand-accent/20 px-5 py-4 text-sm font-semibold text-slate-900 hover:bg-brand-accent/35`, text + `ArrowUpRight`. Optional badge variant docks circular event art beside the label (`p-4 pr-6`, 80–96px `rounded-full` image, `-rotate-3` straightening on hover). Use for multi-line signup/announcement links inside body copy, not as a general button substitute.

Standing exception: the open-letter "sign" CTA ([`open-letter/page.tsx`](<src/app/(site)/open-letter/page.tsx>)) is an intentionally oversized showpiece button.

### Cards

- Corner radius: `rounded-3xl` for feature/testimonial/CTA cards, `rounded-2xl` for media tiles and blog cards, `rounded-[2.5rem]` for the big gradient CTA panel on home. Square icon chips (carousel expand, modal close) use `rounded-xl`.
- Light card recipe: `rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm` (interactive: `transition hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0`)
- On dark sections: `rounded-3xl bg-white/5 p-8 ring-1 ring-white/10`
- Tinted stat panel: `rounded-3xl bg-brand-secondary/[0.07] px-6 py-10 sm:px-10`
- Testimonial/quote cards: `<figure>` + lucide `Quote` icon (`text-brand-secondary/40` light / `text-brand-accent/60` dark) + `<blockquote>` + `<figcaption>` with name (`text-sm font-semibold`) and role (`text-xs text-slate-500`)

### Forms

See [`take-action/join-form.tsx`](<src/app/(site)/take-action/join-form.tsx>):

- Field: `flex flex-col gap-1.5`; label: `text-sm font-semibold text-slate-900` (required mark: `text-brand-primary` asterisk)
- Input: `w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/20`
- Group legends use the compact eyebrow tier

### Heroes

- Standard: full-bleed tint (`bg-brand-secondary/10`, `bg-brand-primary/10`, `bg-brand-cream/60`, or `bg-gradient-to-b from-brand-secondary/10 to-transparent`) + `section-hero`, containing eyebrow → H1 → lede in `stack stack-tight max-w-3xl`
- Dark heroes (home, ffr-archive) invert text colors (cream/stone palettes) — sanctioned exceptions
- Two-column heroes place an image (`rounded-3xl`, often `shadow-xl ring-1 ring-brand-primary/10`) beside the text

## Motion

Everything respects `prefers-reduced-motion` — every animation in globals.css has a reduced-motion fallback. Keep it that way.

- **ScrollReveal / StaggerReveal** ([`scroll-reveal.tsx`](src/components/scroll-reveal.tsx)) — progressive enhancement: content is visible by default; JS adds `.will-animate` only when the element starts outside the viewport, then `.is-visible` triggers the transition. Variants: `blossom`, `fade-up`, `fade`, `scale`; stagger via `delay={i * 75}`. Standard easing: `cubic-bezier(0.22, 1, 0.36, 1)`, 600ms.
- **Timeline** (`.timeline-*`) — vertical scroll timeline with gradient track, pulsing dots, hover-shift cards (our-story)
- **gradient-drift** — slow background-position drift for gradient CTA panels
- **Logo marquee** (`.logo-marquee`) — seamless press-logo loop, pauses on hover/focus, static scrollable row under reduced motion
- **Member map pins** — staggered drop-in + pulse when scrolled into view
- **Header wordmark** — "Campus Climate Network" collapses to "CCN" on scroll (desktop nav only, ≥1080px)
- Per-page opt-out of the sticky header: set `data-scrollable-header` on a page wrapper (used by the impact report)

## Page-Specific Notes

### Blog listing (`/blog`)

Card anatomy: `rounded-2xl bg-white` with hover lift, 16:10 image (fallback: brand-gradient panel with 📰), category chip (`bg-brand-secondary/90 px-3 py-1.5 text-[10px] font-bold eyebrow text-white`, top-left), title as H2 `text-xl font-semibold leading-snug … group-hover:text-brand-primary sm:text-2xl`, excerpt `line-clamp-2 text-sm text-slate-600`, date `text-xs font-medium tracking-[0.15em] text-brand-secondary` (uppercased in JS).

### Blog post (`/blog/[slug]`)

Narrow article layout: `mx-auto max-w-3xl px-(--spacing-container) section-hero stack stack-relaxed` (not the standard page-container width). Header: title (H1, `text-slate-900 leading-tight` — sanctioned exception), then a byline block with a 64px round author photo, name (`font-semibold text-slate-900`), date/categories (`text-sm text-slate-500`), and optional author bio. `<hr className="border-slate-200" />` before the `rounded-2xl` main image. Body typography is applied via arbitrary-variant selectors on the PortableText wrapper (`[&_h2]:text-2xl … [&_blockquote]:border-brand-primary/30 …`) — keep body element styles in that one wrapper.

### Impact report (`/impact-reports/2025`) — intentionally different

The annual impact report is a standalone "micro-PDF" experience and is **exempt from the site-wide conventions in this document**. Do not standardize it. Its own language: oversized display headlines (H1 up to `text-8xl`, display numerals `text-5xl`–`text-7xl`), H2s at `text-3xl sm:text-4xl` with `leading-[1.05]` and `[text-wrap:balance]`, paper-like backgrounds (`#fafaf7`, `#f7f7f2`, radial-gradient washes), `AnimatedCounter` stats, and a scroll-away header via `data-scrollable-header`. Future annual reports may follow this pattern rather than the site system.

### Other exceptions

- **FFR archive** (`/ffr-archive`): dark stone theme (`text-stone-300/400` metadata, red hover accents) — intentional
- **Member portal**: content is Notion-rendered via react-notion-x (its own styles); only the page chrome (hero, password form) follows site conventions. One targeted override in globals.css removes react-notion-x's gallery divider.
- **404 / not-found** and Sanity Studio are out of scope.

## Checklist for New Pages

1. Wrap in `page-wrapper`; hero = tinted `section-hero`; untinted sections = plain `page-container` children; dark sections = `section-dark`
2. Eyebrow → H1 (no period) → lede, in `stack stack-tight max-w-3xl`
3. H2s at `text-2xl sm:text-3xl`; body at `text-base`
4. Buttons: pill, one of the four variants, regular or large size only
5. Wrap reveal content in `ScrollReveal`/`StaggerReveal`; verify with reduced motion enabled
6. Curly quotes, spaced em-dashes, sentence-case headings
