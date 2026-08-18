// Core CCN programs: the /programs landing page renders one card per program
// (shortName + first photo), each linking to its /programs/[slug] detail
// page, plus the academic-year programming table. Copy was written by the
// CCN team (August 2026) and is reproduced here with grammar/typo fixes
// only — do not rewrite it.
//
// Photos live in /public/images/programs (processed from team originals).
// Programs without images get a gradient placeholder card.
//
// TODO(dylan): the trainings "apply for a training" link points at the
// contact mailto until the real training-application URL exists.

export type ProgramLink = {
  label: string
  // External links (http/https) automatically open in a new tab; '#'
  // placeholders and internal/mailto links don't.
  href: string
  /** High-emphasis accent treatment (used for the Midwest signup CTA). */
  highlight?: boolean
  /**
   * Badge/sticker art docked beside a highlight link's label (event logos,
   * not photos). Rendered clipped to a circle, so square art with a plain
   * background works as-is.
   */
  image?: ProgramImage
}

export type ProgramImage = {
  src: string
  alt: string
}

export type Program = {
  /** URL segment for the detail page: /programs/<slug> */
  slug: string
  /** Short label shown on the landing-page card. */
  shortName: string
  /** Full official program name — the detail page H1. */
  name: string
  /** Meta description for the detail page. Keep under ~160 characters. */
  description: string
  paragraphs: string[]
  links?: ProgramLink[]
  images?: ProgramImage[]
  /**
   * Card-only art for programs with no photos of their own — generic site
   * imagery, deliberately NOT shown on the detail page. Cards prefer
   * images[0] when it exists.
   */
  cardImage?: ProgramImage
  /**
   * Optional related-reading section on the detail page: renders the named
   * blog posts as PostCards under the heading, in the order given.
   */
  blogSection?: {
    heading: string
    slugs: string[]
  }
}

export const programs: Program[] = [
  {
    slug: 'gatherings',
    shortName: 'Gatherings',
    name: 'Student Power Gatherings',
    description:
      'Regional weekend gatherings where up to 100 student organizers build skills, stay in solidarity housing, and deepen connections across their region.',
    paragraphs: [
      'CCN is committed to bringing together student organizers on a regional scale to build their organizing skills and deepen their connections to peers across the region. Our Student Power Gathering (formerly College Climate Gathering) is a unique model based on deep connections where, for a weekend, students stay on a college campus, sleep in solidarity housing with local students, and are assigned to a training cohort. Local student organizers lead these events, which bring together up to 100 students from each region.',
    ],
    links: [
      {
        label:
          'Sign up for the Midwest Student Power Gathering, taking place this September at the University of Kansas!',
        href: 'https://airtable.com/appqiOulPWqUSA0dX/pag0rbBdAnYPHnUJG/form',
        highlight: true,
        image: {
          src: '/images/programs/spg-midwest-2026-badge.png',
          // Decorative: the label already names the event, so screen readers
          // shouldn't hear it twice.
          alt: '',
        },
      },
    ],
    blogSection: {
      heading: 'Read more about SPGs here',
      slugs: [
        'reflections-on-the-fall-2023-college-climate-gathering',
        'reflecting-on-the-2024-west-coast-college-climate-gathering',
        'the-southern-college-climate-gathering',
      ],
    },
    images: [
      {
        src: '/images/programs/southern-gathering-banner-painting.jpg',
        alt: 'Students painting a College Climate Gathering banner at the Southern College Climate Gathering at UNC Chapel Hill.',
      },
      {
        src: '/images/programs/west-coast-gathering-speakout.jpg',
        alt: 'A speaker addressing seated students in front of a Campus Climate Network banner at the West Coast College Climate Gathering.',
      },
      {
        src: '/images/programs/college-climate-gathering-plenary.jpg',
        alt: 'A packed lecture hall of students at a College Climate Gathering plenary session.',
      },
    ],
  },
  {
    slug: 'fellowship',
    shortName: 'Fellowship',
    name: 'CCN Organizing Fellowship',
    description:
      'Each fall, 20+ student organizers receive an in-person retreat, personalized coaching, cohort calls, and a stipend to launch and expand their campus campaigns.',
    paragraphs: [
      'Each fall, a cohort of more than 20 student organizers in CCN receives specialized support to launch and expand their campus campaigns. As Organizing Fellows, students attend a 3-day in-person retreat with student organizers from across the country. Then, they receive personalized coaching, cohort calls, and a stipend to support their campus organizing. CCN fellows have gone on to run winning campaigns, confront attacks on higher education, and build up the capacity of their student organizations.',
    ],
    images: [
      {
        src: '/images/programs/fellowship-retreat-park.jpg',
        alt: 'The CCN Organizing Fellowship cohort posing together outdoors at the in-person retreat.',
      },
      {
        src: '/images/programs/fellowship-retreat-group.jpg',
        alt: 'Organizing Fellows holding the Campus Climate Network banner at the fellowship retreat.',
      },
    ],
  },
  {
    slug: 'trainings',
    shortName: 'In-person trainings',
    name: 'Campus Training Tour',
    description:
      'CCN’s trainer team visits your campus for one- to three-day experiential trainings tailored to your campaign, from basebuilding to burnout prevention.',
    paragraphs: [
      'CCN is known for transformative and experiential in-person trainings. Our core curriculum covers fundamental organizing skills such as power and self-interest, basebuilding, and burnout prevention. The content of each training is tailored to the specific needs of your campus campaign. Our experienced trainer team can visit your campus for a one-, two-, or three-day training for you and your fellow organizers to improve your organizing skills and run a winning campaign.',
    ],
    links: [
      {
        label:
          'Learn more about our training program and how to apply for a training on your campus here',
        href: 'mailto:info@campusclimatenetwork.org',
      },
    ],
    images: [
      {
        src: '/images/programs/training-weekend-conversation.jpg',
        alt: 'Two students talking during a paired exercise at a CCN campus training.',
      },
      {
        src: '/images/programs/training-weekend-whiteboard.jpg',
        alt: 'A CCN trainer leading a session at a whiteboard during a campus training.',
      },
    ],
  },
  {
    slug: 'power-hours',
    shortName: 'Online connection',
    name: 'Student Power Hours',
    description:
      'A dedicated online space where student leaders from across the country share organizing challenges and support each other using troika consulting.',
    cardImage: {
      src: '/images/programs/gathering-closing-group.jpg',
      alt: '',
    },
    paragraphs: [
      'Coaching and training are not the only way to grow. Students possess the wisdom and capacity to support the growth of their peers. Student Power Hours are a dedicated online space to connect with, learn from, and lend support to fellow student leaders across the country. Students are randomly divided into groups of three. Using a technique known as “troika consulting,” the call consists of three rounds of problem solving. Each student has the opportunity to present a challenge they are facing and receive feedback from their peers.',
    ],
    links: [
      {
        label:
          'Reach out to info@campusclimatenetwork.org to get registered for the next Student Power Hour',
        href: 'mailto:info@campusclimatenetwork.org',
      },
    ],
  },
  {
    slug: 'coaching',
    shortName: 'Coaching',
    name: 'Coaching for Power',
    description:
      'Power Coaches — recent alumni steeped in the CCN curriculum — support student organizers through bi-weekly calls for one to two semesters.',
    paragraphs: [
      'We connect student organizers seeking guidance to our team of Power Coaches, recent alumni who have been steeped in the CCN curriculum, have years of experience, and are ready to support younger organizers to succeed on campus. The program runs for 1-2 semesters and is focused on bi-weekly calls to help student organizers work through issues and reach their full potential.',
    ],
    images: [
      {
        src: '/images/programs/organizing-workshop-circle.jpg',
        alt: 'Student organizers seated in a circle writing during a CCN workshop.',
      },
    ],
  },
  {
    slug: 'trainer-development',
    shortName: 'Trainer development',
    name: 'New Trainer Development',
    description:
      'A year-long process where senior student leaders become CCN trainers through a Training for Trainers, an in-person intensive, and shadowing campus visits.',
    paragraphs: [
      'Each year, a new cohort of current and recently graduated student leaders participates in a year-long process to become CCN trainers. All CCN trainers attend a Training for Trainers (led by our partners Training For Change), participate in an in-person CCN trainer intensive (focused on applying training pedagogy to CCN’s curriculum), and shadow an experienced CCN trainer during a campus visit. There are currently 18 members of the CCN training team.',
    ],
    images: [
      {
        src: '/images/programs/trainer-intensive-group.jpg',
        alt: 'The CCN trainer cohort holding the Campus Climate Network banner at the in-person trainer intensive.',
      },
    ],
  },
  {
    slug: 'research',
    shortName: 'Research',
    name: 'Uncovering University Ties to Big Oil',
    description:
      'A semester-long cohort program training students in web scraping, archival research, and public records requests to reveal their campus’s ties to Big Oil.',
    cardImage: {
      src: '/images/campaigns/cambridge-ffr-banner.jpg',
      alt: '',
    },
    paragraphs: [
      'We provide students with training on key research methods (including web scraping, archival research, public records requests, and more) to reveal their campus’s ties to Big Oil through a semester-long cohort program. CCN members have uncovered hundreds of millions of dollars in fossil fuel ties to universities in addition to numerous non-financial ties through this program. Our findings have been cited by journalists, in peer-reviewed journals, and by the US Congress.',
    ],
    links: [
      {
        label: 'View the Fossil Free Research Guide here',
        href: 'https://docs.google.com/document/d/14GxlV9Msc8ILmi85DyQwjo76C_Y4xsjyL2IGopwIpik/edit?tab=t.0',
      },
      {
        label: 'View student-made research reports here',
        href: 'https://drive.google.com/drive/folders/1juvoJM3a5rFrV37o8b6QZmhv1ZtRIOQu',
      },
    ],
  },
  {
    slug: 'skills-to-win',
    shortName: 'Courses',
    name: 'Skills to Win: Student Edition',
    description:
      'Jane McAlevey’s structure-based organizing course, adapted with the UC Berkeley Labor Center for the specific needs of student organizers.',
    cardImage: {
      src: '/images/future-is-now-speaker.jpg',
      alt: '',
    },
    paragraphs: [
      'Skills to Win is an online organizing course on structure-based organizing designed by Jane McAlevey, run by the UC Berkeley Labor Center. The original course is primarily intended for union organizers. CCN partnered with the UCB Labor Center to adapt the content of the original training to the specific needs of student organizers. The inaugural run of this training took place in August 2026. Stay tuned for updates on future iterations of this exciting new program!',
    ],
  },
]

export type CoreProgramRow = {
  program: string
  timeline: string
  description: string
}

export const coreProgramRows: CoreProgramRow[] = [
  {
    program: 'Midwest Student Power Gathering',
    timeline: 'Fall 2026',
    description:
      'This gathering will convene 80-100 student organizers from across the Midwest for a weekend focused on building core organizing skills and deepening relationships among attendees.',
  },
  {
    program: 'CCN Organizing Fellowship',
    timeline: 'Fall 2026',
    description:
      'Rising student leaders from seven CCN member groups (three students per group) will convene for an in-person retreat in August 2026 followed by dedicated coaching and in-person campus visits during the fall semester.',
  },
  {
    program: 'Campus Training Tour',
    timeline: 'Year-round',
    description:
      'Members of the CCN trainer team will travel to at least 10 CCN member campuses to provide weekend-long training tailored to the specific needs of the group.',
  },
  {
    program: 'Coaching for Power',
    timeline: 'Year-round',
    description:
      'A 6-person CCN coaching team (mainly composed of former student organizers) will receive training on core coaching skills before being paired with 1-2 CCN member groups to provide regular coaching support over the course of the school year.',
  },
  {
    program: 'Skills to Win: Student Edition',
    timeline: 'August 2026',
    description:
      'In collaboration with the Skills to Win team (based out of the UC Berkeley Labor Center) and partner organizations in the US student movement, CCN is adapting the renowned structure-based organizing curriculum of Skills to Win (developed by Jane McAlevey) to the particular needs of student organizers.',
  },
  {
    program: 'Student Power Hours',
    timeline: 'Year-round',
    description:
      'These virtual calls are designed to strengthen cross-campus connectivity between organizers and to tap into the collective wisdom of the student movement. Students from across the country are randomly split into groups of three. Each student takes a turn sharing a particular organizing challenge they are facing. The other two students provide feedback and support.',
  },
  {
    program: 'New Trainer Development',
    timeline: 'Year-round',
    description:
      'Each year, senior leaders from CCN member groups are proposed to become CCN trainers. New trainers undergo a year-long trainer development process including an in-person training for trainers (led by Training For Change), an in-person trainer intensive (led by CCN), and shadowing an existing CCN trainer on a campus visit.',
  },
  {
    program: 'Research',
    timeline: 'Spring 2027',
    description:
      'In collaboration with the University of Miami Climate Accountability Lab, led by Geoffrey Supran, students from CCN member groups participate in collaborative research projects on the fossil fuel industry’s influence over the higher education system.',
  },
]
