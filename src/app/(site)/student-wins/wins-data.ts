import type { StudentWin } from './wins-showcase'

// ⚠️ PLACEHOLDER CONTENT: the photos, descriptions, stats, quotes, and names
// below are filler to demonstrate the card + modal layout. Replace with real
// details before publishing.
//
// To add a win: copy an entry below and edit the fields.
//   - The FIRST entry is shown as the large spotlight card; the rest fill the grid.
//   - For a photo: drop the file in /public/student-wins/ and set
//     imageUrl: '/student-wins/your-photo.jpg'. Leave it out to show a placeholder.
//   - `outcomes` become the checklist in the modal; `organizer*` powers the quote.
export const studentWins: StudentWin[] = [
  {
    id: 'nyu-divestment',
    title: 'Sunrise NYU wins divestment',
    org: 'Sunrise NYU',
    date: '2024-05-01',
    campaign: 'Fossil Fuel Divestment',
    description:
      'After three years of sustained organizing — rallies, teach-ins, and a relentless pressure campaign — NYU committed to fully divesting its endowment from fossil fuels. Sunrise NYU built a coalition of students, faculty, and alumni that the administration could no longer ignore.',
    imageUrl: '/images/movement-hero-4.jpg',
    imageAlt:
      'Students marching with signs demanding divestment from fossil fuels.',
    outcomes: [
      '$5B endowment committed to fossil fuel divestment',
      '1,200+ students mobilized across campus',
      '3 years of sustained organizing',
      '40+ faculty signed on in support',
    ],
    organizerQuote:
      'We refused to take no for an answer. This win belongs to every student who showed up, made noise, and never backed down.',
    organizerName: 'Jordan Rivera',
    organizerRole: 'Lead organizer, Sunrise NYU',
    link: 'https://campusclimatenetwork.org',
  },
  {
    id: 'uf-green-new-deal',
    title: 'U of Florida wins a Green New Deal',
    org: 'UF Climate Coalition',
    date: '2023-11-01',
    campaign: 'Green New Deal',
    description:
      'Students pushed the administration to adopt a campus-wide Green New Deal with binding climate targets, a just-transition plan for campus workers, and a dedicated sustainability fund — one of the most ambitious campus climate commitments in the South.',
    imageUrl: '/images/movement-hero-1.jpg',
    imageAlt:
      'Campus Climate Network organizers leading a march through downtown streets.',
    outcomes: [
      'Binding campus-wide climate targets adopted',
      'Carbon neutrality pledged by 2035',
      '$2M sustainability fund established',
      '800+ petition signatures delivered',
    ],
    organizerQuote:
      'They told us a Green New Deal was impossible here. We proved that organized students can move even the most stubborn institutions.',
    organizerName: 'Maya Chen',
    organizerRole: 'Co-founder, UF Climate Coalition',
  },
  {
    id: 'cornell-research',
    title: 'Cornell ends fossil fuel research ties',
    org: 'Fossil Free Cornell',
    date: '2023-04-01',
    campaign: 'Fossil Free Research',
    description:
      'After a year-long campaign exposing conflicts of interest, organizers won a commitment to wind down fossil-fuel-funded research partnerships and adopt new transparency rules for industry funding across the university.',
    imageUrl: '/images/movement-hero-2.jpg',
    imageAlt:
      'Students staging a sit-in with banners demanding fossil fuel divestment.',
    outcomes: [
      'Fossil-fuel-funded research partnerships to be phased out',
      'New transparency rules for industry funding',
      '12-month campaign from launch to win',
      'Backed by 25+ faculty researchers',
    ],
    organizerQuote:
      'Our research should serve the public, not polluters. This is what it looks like when students defend academic integrity.',
    organizerName: 'Sam Okafor',
    organizerRole: 'Organizer, Fossil Free Cornell',
  },
  {
    id: 'princeton-dissociation',
    title: 'Princeton dissociates from fossil fuel companies',
    org: 'Divest Princeton',
    date: '2024-03-01',
    campaign: 'Fossil Fuel Divestment',
    description:
      'After a multi-year campaign, Princeton agreed to dissociate from dozens of fossil fuel companies and dump its direct holdings — setting a landmark precedent for divestment campaigns nationwide.',
    imageUrl: '/images/students-rally.jpg',
    imageAlt: 'Students rallying together at a campus climate demonstration.',
    outcomes: [
      '90+ fossil fuel companies dropped',
      '$1B+ in holdings affected',
      '4-year campaign from petition to policy',
      'Adopted as a model by peer institutions',
    ],
    organizerQuote:
      'Dissociation puts our values on the record. Princeton can no longer profit from the companies driving the climate crisis.',
    organizerName: 'Alex Morgan',
    organizerRole: 'Organizer, Divest Princeton',
  },
]
