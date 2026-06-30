import type { StudentWin } from '../impact/wins-showcase'

// Campaigns powering the showcase on the /campaigns page.
//
// Reuses the StudentWin shape and the WinsShowcase component from /impact so the
// cards + modal look identical across the site.
//
// STATUS: scaffolded from the content brief — several fields are still TODO
// (real photos, article links, descriptions, and quotes are pending) and are
// flagged inline. Photos currently reuse representative movement images from
// /public/images; drop a campaign-specific file in /public/images and set
// `imageUrl` when the real photos arrive.
//
//   - The FIRST entry is the large spotlight card; the rest fill the grid.
//   - `outcomes` become the checklist in the modal; `organizer*` powers the quote.
//   - `date` is optional and omitted below — add one ('2025' or '2025-05-01')
//     if/when known and it'll render in the modal.
export const campaigns: StudentWin[] = [
  {
    id: 'claremont-decarbonization',
    title: 'Campus decarbonization at the Claremont Colleges',
    org: '5 Cs Environmental Justice Collective',
    campaign: 'Campus decarbonization',
    description:
      'Leaders of all five Claremont Colleges voted unanimously to switch the Colleges from sourcing electricity from the investor-owned monopoly Southern California Edison to the Clean Power Alliance’s 100 percent renewable electricity.',
    imageUrl: '/images/movement-hero-1.jpg',
    imageAlt:
      'Campus Climate Network organizers leading a march through downtown streets.',
    // TODO: add the real article link.
    // link: '',
    organizerQuote:
      "CCN was absolutely essential to the success of the Claremont Off Fossil Fuels Campaign. We wouldn't have gotten to where we did without their help.",
    organizerName: 'Milo Slevin',
    organizerRole: '2025 CCN Organizing Fellow · Pomona College, Class of 2028',
  },
  {
    id: 'ucsd-climate-courses',
    title: 'Mandatory climate courses at UC San Diego',
    org: 'Green New Deal UCSD',
    campaign: 'Climate education',
    description:
      'All undergraduate students at UCSD are required to take a course on climate change in order to graduate.',
    imageUrl: '/images/movement-hero-4.jpg',
    imageAlt: 'Students marching with signs at a campus climate demonstration.',
    // TODO: add article link and an organizer quote when available.
  },
  {
    id: 'uf-green-new-deal',
    title: 'A Green New Deal for campus at the University of Florida',
    org: 'Sunrise Movement Gainesville',
    campaign: 'Green New Deal for campus',
    imageUrl: '/images/movement-hero-6.jpg',
    imageAlt: 'Students staging a demonstration with banners on campus.',
    // TODO: add description, article link, and an organizer quote.
  },
  {
    id: 'trump-compact',
    title: "Defeating Trump's loyalty oath compact on campuses",
    org: 'CCN member groups across the country',
    campaign: 'Defending higher education',
    imageUrl: '/images/impact-report/unc-reject-compact.jpg',
    imageAlt:
      "Students at UNC Chapel Hill holding signs reading 'Stand for Students, Reject Trump's Compact'.",
    // TODO: confirm participating schools (UNC, Brown, others?), and add a
    // description, article link, featured person, and quote.
  },
  {
    id: 'utoronto-dissociation',
    title:
      'Fossil fuel dissociation at the University of Toronto School of the Environment',
    org: 'Climate Justice University of Toronto',
    campaign: 'Fossil fuel dissociation',
    imageUrl: '/images/movement-hero-2.jpg',
    imageAlt: 'Student climate organizers marching together on campus.',
    // TODO: add description and article link; quote pending (Erin?).
  },
  {
    id: 'nyu-divestment',
    title: 'Fossil fuel divestment at New York University',
    org: 'Sunrise NYU',
    campaign: 'Fossil fuel divestment',
    imageUrl: '/images/students-rally.jpg',
    imageAlt: 'Students rallying together at a campus climate demonstration.',
    // TODO: add description and article link; quote pending (Alicia / Sammi / Dylan?).
  },
]
