import type { StudentWin } from './wins-showcase'

// Campaign wins powering the interactive showcase on the Impact page.
//
// The wins below are REAL, drawn from CCN's 2025 Impact Report.
//
// To add a win: copy an entry below and edit the fields.
//   - All cards render at equal size in the grid.
//   - `outcomes` become the checklist in the modal; `organizer*` powers the quote.
//   - `date` accepts a full date ('2025-10-15') or a bare year ('2025') when the
//     month isn't known — the latter renders as just the year.
//
// ⚠️ PENDING ASSETS (reached out, waiting to hear back):
//   - Claremont: campaign photo. Drop a file in /public/impact/ and set imageUrl.
//   - Compact: organizer quotes from Brown Rise Up + Sunrise UNC.
//   - UCSD: campaign photo + organizer quote from UCSD Green New Deal.
//   - All three: link to the blog post / article (set `link`).
// Left off here rather than invented — fill in once we have them.
export const studentWins: StudentWin[] = [
  {
    id: 'claremont-decarbonization',
    title: 'Campus decarbonization at the Claremont Colleges',
    org: 'Claremont Off Fossil Fuels Campaign',
    date: '2025',
    campaign: 'Campus decarbonization',
    description:
      'As a result of student pressure, The Claremont Colleges Services unanimously voted to switch the Colleges from sourcing fossil fuels from the investor-owned electricity monopoly Southern California Edison to the Clean Power Alliance’s 100 percent renewable electricity.',
    // TODO: add campaign photo once received (imageUrl / imageAlt).
    outcomes: [
      'Claremont Colleges Services voted unanimously to make the switch',
      'Dropped Southern California Edison for the Clean Power Alliance',
      '100 percent renewable electricity across the Colleges',
    ],
    organizerQuote:
      "CCN was absolutely essential to the success of the Claremont Off Fossil Fuels Campaign. We wouldn't have gotten to where we did without their help.",
    organizerRole: '5C’s Environmental Justice student organizer',
    // TODO: add link to blog post.
  },
  {
    id: 'trump-compact',
    title: "Rejecting and pre-empting Trump's campus compact",
    org: 'CCN & the Project Rise Up coalition',
    date: '2025-10-15',
    campaign: 'Defending higher education',
    description:
      'In October 2025, the Trump administration sent a “Loyalty Oath Compact” to nine US universities, offering special treatment in exchange for allegiance to a partisan ideological agenda. Because of our efforts, not a single university accepted the compact. Seven of the original nine schools rejected it outright, and ten others proactively said they do not support the compact. CCN members at the University of Kansas and UNC Chapel Hill won their campaigns calling on administrators to pre-emptively reject the compact.',
    imageUrl: '/images/impact-report/brown-reject-compact.jpg',
    imageAlt:
      "Students at Brown University holding a 'Brown Rise Up — Reject the Compact' banner outside the campus gates.",
    outcomes: [
      'Not a single university accepted the compact',
      '7 of the 9 targeted schools rejected it outright',
      '10 more universities proactively said they do not support it',
      'University of Kansas and UNC Chapel Hill won pre-emptive rejections',
    ],
    // TODO: add organizer quotes from Brown Rise Up + Sunrise UNC.
    // TODO: add link to article.
  },
  {
    id: 'ucsd-climate-curriculum',
    title: 'Mandatory climate curriculum at UC San Diego',
    org: 'UCSD Green New Deal',
    date: '2025',
    campaign: 'Climate education',
    description:
      'In order to graduate from the University of California San Diego, all undergraduate students are now required to take a course on climate change.',
    // TODO: add campaign photo once received (imageUrl / imageAlt).
    outcomes: [
      'All undergraduates must now take a climate change course to graduate',
      'Won through organizing by UCSD Green New Deal',
    ],
    // TODO: add organizer quote from UCSD Green New Deal.
    // TODO: add link to article.
  },
]
