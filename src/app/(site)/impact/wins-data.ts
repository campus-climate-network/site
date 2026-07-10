import type { StudentWin } from './wins-showcase'

// Campaign wins powering the interactive showcase on the Impact page.
//
// The wins below are REAL, drawn from CCN's 2025 Impact Report.
//
// To add a win: copy an entry below and edit the fields.
//   - All cards render at equal size in the grid.
//   - `outcomes` become the checklist in the modal; `quotes` powers the
//     testimonial blocks (a win can have more than one).
//   - `date` is supported ('2025-10-15' or bare '2025') but intentionally
//     omitted — we don't show dates on the cards.
//
// The modal only renders quote blocks when `quotes` is set, so missing
// quotes simply don't appear. (A UCSD win sits commented out at the bottom —
// intentionally unused for now, not pending anything.)
export const studentWins: StudentWin[] = [
  {
    id: 'claremont-decarbonization',
    title: 'Campus decarbonization at the Claremont Colleges',
    campaign: 'Campus decarbonization',
    description:
      'As a result of student pressure, The Claremont Colleges Services unanimously voted to switch the Colleges from sourcing fossil fuels from the investor-owned electricity monopoly Southern California Edison to the Clean Power Alliance’s 100 percent renewable electricity.',
    imageUrl: '/images/campaigns/claremont-campaign-art.jpg',
    imageAlt:
      "Collage of hand-drawn Claremont Off Fossil Fuels campaign art, including a flyer reading 'We won!'",
    outcomes: [
      'Claremont Colleges Services voted unanimously to make the switch',
      'Dropped Southern California Edison for the Clean Power Alliance',
      '100 percent renewable electricity across the Colleges',
    ],
    quotes: [
      {
        quote:
          "CCN was absolutely essential to the success of the Claremont Off Fossil Fuels Campaign. We wouldn't have gotten to where we did without their help.",
        role: '5C’s Environmental Justice student organizer',
      },
    ],
    link: '/blog/winning-renewable-energy-at-the-claremont-colleges',
  },
  {
    id: 'trump-compact',
    title: "Rejecting and pre-empting Trump's campus compact",
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
      'CCN member organizations at University of Kansas and UNC Chapel Hill won pre-emptive rejections',
    ],
    quotes: [
      {
        quote:
          'CCN’s support in the compact fight was invaluable. Because of our existing relationships with other CCN organizers and the Network’s connective infrastructure, we were able to almost immediately get into contact with all 8 of the other affected schools and coordinate our campaign strategies. We were able to effectively share resources and stand against the Trump administration as a united force, all because of CCN.',
        role: 'Brown Rise Up student organizer',
      },
      {
        quote:
          'I still think about the tears of triumph and shouts of success that flooded our team when we heard that our Chancellor had rejected the compact, just hours after our direct action. We hadn’t just held the line, but we had meaningfully shifted what it meant to organize in coalition at UNC and there was this invigorating energy all across campus to show for it. Organizing works; and CCN catalyzed UNC’s contribution to it.',
        role: 'UNC student organizer',
      },
    ],
    link: 'https://wagingnonviolence.org/2025/12/student-resistance-to-authoritarianism/',
  },
  // Intentionally unused for now — restore (with a campaign photo via
  // imageUrl / imageAlt) only if we decide to feature it.
  // {
  //   id: 'ucsd-climate-curriculum',
  //   title: 'Mandatory climate curriculum at UC San Diego',
  //   campaign: 'Climate education',
  //   description:
  //     'In order to graduate from the University of California San Diego, all undergraduate students are now required to take a course on climate change.',
  //   outcomes: [
  //     'All undergraduates must now take a climate change course to graduate',
  //     'Won through organizing by UCSD Green New Deal',
  //   ],
  //   link: 'https://www.theguardian.com/environment/2024/oct/15/california-university-ucsd-climate-change-course-requirement',
  // },
]
