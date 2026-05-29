import type { StudentWin } from './wins-showcase'

// Campaign wins powering the interactive showcase on the Impact page.
//
// The wins below are REAL, drawn from CCN's 2025 Impact Report. Photos use
// representative movement images (campaign-specific photos welcome — drop a
// file in /public/impact/ and set imageUrl: '/impact/your-photo.jpg').
//
// To add a win: copy an entry below and edit the fields.
//   - The FIRST entry is shown as the large spotlight card; the rest fill the grid.
//   - `outcomes` become the checklist in the modal; `organizer*` powers the quote.
//   - `date` accepts a full date ('2025-10-15') or a bare year ('2025') when the
//     month isn't known — the latter renders as just the year.
//   - TODO: add real organizer quotes (organizerQuote / organizerName /
//     organizerRole) once we have them — left off here rather than invented.
export const studentWins: StudentWin[] = [
  {
    id: 'trump-compact',
    title: "Students help defeat Trump's university compact",
    org: 'CCN & the Project Rise Up coalition',
    date: '2025-10-15',
    campaign: 'Defending higher education',
    description:
      "In October 2025, the Trump administration sent a “Loyalty Oath Compact” to nine universities — offering special treatment in exchange for allegiance to a partisan agenda, and a clause that would have blocked schools from ever cutting ties with Big Oil. Less than 24 hours later, CCN organizers were mobilizing students on all nine campuses.",
    imageUrl: '/images/impact-report/unc-reject-compact.jpg',
    imageAlt:
      "Students at UNC Chapel Hill holding signs reading 'Stand for Students, Reject Trump's Compact'.",
    outcomes: [
      'Not a single university accepted the compact',
      '7 of the 9 targeted schools rejected it outright',
      '10 more universities proactively rejected it',
      'Students organizing on all 9 campuses within 24 hours',
    ],
  },
  {
    id: 'princeton-bp',
    title: 'Princeton ends its decade-long BP partnership',
    org: 'Sunrise Princeton',
    date: '2025',
    campaign: 'Cutting ties with Big Oil',
    description:
      'After sustained pressure from Sunrise Princeton, Princeton University ended a decade-long research partnership with BP — a major win in the campaign to push the fossil fuel industry off campus.',
    imageUrl: '/images/movement-hero-2.jpg',
    imageAlt: 'Student climate organizers marching together on campus.',
    outcomes: [
      'Decade-long BP research partnership ended',
      'Driven by sustained organizing from Sunrise Princeton',
    ],
  },
  {
    id: 'mit-careers',
    title: "MIT's careers fair goes fossil-free for the first time",
    org: 'MIT Divest',
    date: '2025',
    campaign: 'Fossil Free Careers',
    description:
      "For the first time ever, no fossil fuel companies appeared at MIT's careers fair — the result of organizing by MIT Divest to cut the industry's recruitment pipeline on campus.",
    imageUrl: '/images/movement-hero-1.jpg',
    imageAlt:
      'Campus Climate Network organizers leading a march through downtown streets.',
    outcomes: [
      'Zero fossil fuel companies at the MIT careers fair',
      "A first in the fair's history",
      'Won through organizing by MIT Divest',
    ],
  },
  {
    id: 'monash-ffr',
    title: 'Monash University passes a Fossil Free Research policy',
    org: 'Stop Woodside Monash',
    date: '2025',
    campaign: 'Fossil Free Research',
    description:
      'Monash University in Australia adopted a Fossil Free Research policy following pressure from Stop Woodside Monash — proof the student movement is winning well beyond US borders.',
    imageUrl: '/images/movement-hero-6.jpg',
    imageAlt: 'Students staging a demonstration with banners on campus.',
    outcomes: [
      'University-wide Fossil Free Research policy passed',
      'Won through pressure from Stop Woodside Monash',
      'Extends the movement internationally',
    ],
  },
]
