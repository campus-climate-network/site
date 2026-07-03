import type { StudentWin } from '../impact/wins-showcase'

// Campaign wins powering the carousel on the /campaigns page.
//
// Unlike the Impact page, these cards are NOT modals — each card is an
// external link to press coverage of the win (`link`, opens in a new tab).
// Reuses the StudentWin shape and WinImage so cards look consistent with
// the rest of the site.
//
// Photos currently reuse representative movement images from /public/images;
// drop a campaign-specific file in /public/images and set `imageUrl` when the
// real photos arrive. Entries without an image render the gradient
// placeholder.
export const campaigns: StudentWin[] = [
  {
    id: 'claremont-decarbonization',
    title: 'Campus decarbonization at the Claremont Colleges',
    link: 'https://tsl.news/last-month-the-claremont-colleges-opted-into-100-percent-renewable-electricity-heres-how-student-pressure-made-it-happen/',
    imageUrl: '/images/movement-hero-1.jpg',
    imageAlt:
      'Campus Climate Network organizers leading a march through downtown streets.',
  },
  {
    id: 'ucsd-climate-courses',
    title: 'Mandatory climate courses at UC San Diego',
    link: 'https://abcnews.com/US/education-climate-change-now-required-uc-san-diego/story?id=114824937',
    imageUrl: '/images/movement-hero-4.jpg',
    imageAlt: 'Students marching with signs at a campus climate demonstration.',
  },
  {
    id: 'uf-green-new-deal',
    title: 'A Green New Deal for campus at the University of Florida',
    link: 'https://www.thenation.com/article/activism/university-of-florida-green-new-deal/',
    imageUrl: '/images/movement-hero-6.jpg',
    imageAlt: 'Students staging a demonstration with banners on campus.',
  },
  {
    id: 'trump-compact',
    title:
      "Defeating Trump's loyalty oath compact on campuses across the country",
    link: 'https://wagingnonviolence.org/2025/12/student-resistance-to-authoritarianism/',
    imageUrl: '/images/impact-report/unc-reject-compact.jpg',
    imageAlt:
      "Students at UNC Chapel Hill holding signs reading 'Stand for Students, Reject Trump's Compact'.",
  },
  {
    id: 'utoronto-dissociation',
    title:
      'Fossil fuel dissociation at the University of Toronto School of the Environment',
    link: 'https://www.theguardian.com/us-news/2024/oct/20/university-toronto-financially-dissociate-fossil-fuels',
    imageUrl: '/images/movement-hero-2.jpg',
    imageAlt: 'Student climate organizers marching together on campus.',
  },
  {
    id: 'nyu-divestment',
    title: 'Fossil fuel divestment at New York University',
    link: 'https://www.rollingstone.com/culture/culture-commentary/nyu-divest-fossil-fuels-students-1234826380/',
    imageUrl: '/images/students-rally.jpg',
    imageAlt: 'Students rallying together at a campus climate demonstration.',
  },
  {
    id: 'jody-freeman-conocophillips',
    title: 'Jody Freeman resigns from the ConocoPhillips board',
    link: 'https://www.thecrimson.com/article/2023/8/6/freeman-steps-down-conocophillips/',
    // TODO: add a campaign photo (imageUrl / imageAlt).
  },
  {
    id: 'cambridge-fossil-free-research',
    title: 'Fossil Free Research at Cambridge University',
    link: 'https://www.cam.ac.uk/notices/grace-on-fossil-fuel-industry-ties',
    // TODO: add a campaign photo (imageUrl / imageAlt).
  },
]
