import type { StudentWin } from '../impact/wins-showcase'

// Campaign wins powering the carousel on the /campaigns page.
//
// Unlike the Impact page, these cards are NOT modals — each card is an
// external link to press coverage of the win (`link`, opens in a new tab).
// Reuses the StudentWin shape and WinImage so cards look consistent with
// the rest of the site.
//
// Photos in /public/images/campaigns are the hero/lead images from each
// card's linked article. Entries without an image render the gradient
// placeholder.
export const campaigns: StudentWin[] = [
  {
    id: 'claremont-decarbonization',
    title: 'Campus decarbonization at the Claremont Colleges',
    link: 'https://tsl.news/last-month-the-claremont-colleges-opted-into-100-percent-renewable-electricity-heres-how-student-pressure-made-it-happen/',
    imageUrl: '/images/campaigns/claremont-campaign-art.jpg',
    imageAlt:
      "Collage of hand-drawn Claremont Off Fossil Fuels campaign art, including a flyer reading 'We won!'",
  },
  {
    id: 'ucsd-climate-courses',
    title: 'Mandatory climate courses at UC San Diego',
    link: 'https://abcnews.com/US/education-climate-change-now-required-uc-san-diego/story?id=114824937',
    imageUrl: '/images/campaigns/ucsd-campus-sign.jpg',
    imageAlt: 'The UC San Diego sign at the entrance to campus.',
  },
  {
    id: 'uf-green-new-deal',
    title: 'A Green New Deal for campus at the University of Florida',
    link: 'https://www.thenation.com/article/activism/university-of-florida-green-new-deal/',
    imageUrl: '/images/campaigns/uf-gnd-rally.jpg',
    imageAlt:
      "Students at the University of Florida holding signs reading 'Strike for Climate' and 'We Deserve a Future'.",
  },
  {
    id: 'trump-compact',
    title:
      "Defeating Trump's loyalty oath compact on campuses across the country",
    link: 'https://wagingnonviolence.org/2025/12/student-resistance-to-authoritarianism/',
    imageUrl: '/images/campaigns/brown-reject-compact-banner.jpg',
    imageAlt:
      "Students at Brown University's gates holding a banner reading 'Brown Rise Up — Reject the Compact'.",
  },
  {
    id: 'utoronto-dissociation',
    title:
      'Fossil fuel dissociation at the University of Toronto School of the Environment',
    link: 'https://www.theguardian.com/us-news/2024/oct/20/university-toronto-financially-dissociate-fossil-fuels',
    imageUrl: '/images/campaigns/utoronto-campus.jpg',
    imageAlt: 'Students walking through the University of Toronto campus.',
  },
  {
    id: 'nyu-divestment',
    title: 'Fossil fuel divestment at New York University',
    link: 'https://www.rollingstone.com/culture/culture-commentary/nyu-divest-fossil-fuels-students-1234826380/',
    imageUrl: '/images/campaigns/nyu-divest-rally.jpg',
    imageAlt:
      "A student protester holding a cardboard sign reading 'No More Climate Chaos — Divest NYU'.",
  },
  {
    id: 'jody-freeman-conocophillips',
    title: 'Jody Freeman resigns from the ConocoPhillips board',
    link: 'https://www.thecrimson.com/article/2023/8/6/freeman-steps-down-conocophillips/',
    imageUrl: '/images/campaigns/harvard-law-school.jpg',
    imageAlt: "The columned facade of Harvard Law School's Langdell Hall.",
  },
  {
    id: 'cambridge-fossil-free-research',
    title: 'Fossil Free Research at Cambridge University',
    link: 'https://www.cam.ac.uk/notices/grace-on-fossil-fuel-industry-ties',
    // TODO: add a campaign photo (imageUrl / imageAlt). The linked Cambridge
    // notice is text-only, so there is no article image to pull from.
  },
]
