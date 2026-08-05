// Core CCN programs shown on the /programs page, plus the academic-year
// programming table. Copy was written by the CCN team (August 2026) and is
// reproduced here with grammar/typo fixes only — do not rewrite it.
//
// Photos live in /public/images/programs (processed from team originals).
// Programs without images render as single-column text sections.
//
// TODO(dylan): four links below are '#' placeholders awaiting real URLs:
//   1. Midwest Student Power Gathering signup (student-power-gatherings)
//   2. Campus training application (campus-training-tour)
//   3. Fossil Free Research Guide (research)
//   4. Student-made research reports (research)

export type ProgramLink = {
  label: string
  href: string
  /** Renders target="_blank" once the href is a real external URL. */
  external?: boolean
  /** High-emphasis accent treatment (used for the Midwest signup CTA). */
  highlight?: boolean
}

export type ProgramImage = {
  src: string
  alt: string
}

export type Program = {
  id: string
  name: string
  paragraphs: string[]
  links?: ProgramLink[]
  images?: ProgramImage[]
}

export const programs: Program[] = [
  {
    id: 'student-power-gatherings',
    name: 'Student Power Gatherings',
    paragraphs: [
      'CCN is committed to bringing together student organizers on a regional scale to build their organizing skills and deepen their connections to peers across the region. Our Student Power Gathering (formerly College Climate Gathering) is a unique model based on deep connections where, for a weekend, students stay on a college campus, sleep in solidarity housing with local students, and are assigned to a training cohort. Local student organizers lead these events, which bring together up to 100 students from each region.',
    ],
    links: [
      {
        label:
          'Read more about the first College Climate Gathering that brought together Northeastern college organizers at Brown University in 2023',
        href: '/blog/reflections-on-the-fall-2023-college-climate-gathering',
      },
      {
        label:
          'Read more about the West Coast College Climate Gathering at UC Berkeley in 2024',
        href: '/blog/reflecting-on-the-2024-west-coast-college-climate-gathering',
      },
      {
        label:
          'Read more about the Southern College Climate Gathering at UNC Chapel Hill in 2025',
        href: '/blog/the-southern-college-climate-gathering',
      },
      {
        label:
          'Sign up for the Midwest Student Power Gathering, taking place this September at the University of Kansas!',
        href: '#',
        external: true,
        highlight: true,
      },
    ],
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
    id: 'organizing-fellowship',
    name: 'CCN Organizing Fellowship',
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
    id: 'campus-training-tour',
    name: 'Campus Training Tour',
    paragraphs: [
      'CCN is known for transformative and experiential in-person trainings. Our core curriculum covers fundamental organizing skills such as power and self-interest, basebuilding, and burnout prevention. The content of each training is tailored to the specific needs of your campus campaign. Our experienced trainer team can visit your campus for a one-, two-, or three-day training for you and your fellow organizers to improve your organizing skills and run a winning campaign.',
    ],
    links: [
      {
        label:
          'Learn more about our training program and how to apply for a training on your campus here',
        href: '#',
        external: true,
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
    id: 'student-power-hours',
    name: 'Student Power Hours',
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
    id: 'coaching-for-power',
    name: 'Coaching for Power',
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
    id: 'trainer-development',
    name: 'New Trainer Development',
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
    id: 'research',
    name: 'Research on University Ties to Big Oil',
    paragraphs: [
      'We provide students with training on key research methods (including web scraping, archival research, public records requests, and more) to reveal their campus’s ties to Big Oil through a semester-long cohort program. CCN members have uncovered hundreds of millions of dollars in fossil fuel ties to universities in addition to numerous non-financial ties through this program. Our findings have been cited by journalists, in peer-reviewed journals, and by the US Congress.',
    ],
    links: [
      {
        label: 'View the Fossil Free Research Guide here',
        href: '#',
        external: true,
      },
      {
        label: 'View student-made research reports here',
        href: '#',
        external: true,
      },
    ],
  },
  {
    id: 'skills-to-win',
    name: 'Skills to Win: Student Edition',
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
    program: 'In-Person Campus Training Tour',
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
    program: 'Skills to Win Student Edition',
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
    program: 'Trainer Development',
    timeline: 'Year-round',
    description:
      'Each year, senior leaders from CCN member groups are proposed to become CCN trainers. New trainers undergo a year-long trainer development process including an in-person training for trainers (led by Training For Change), an in-person trainer intensive (led by CCN), and shadowing an existing CCN trainer on a campus visit.',
  },
  {
    program: 'Research',
    timeline: 'Spring 2026, Spring 2027',
    description:
      'In collaboration with the University of Miami Climate Accountability Lab, led by Geoffrey Supran, students from CCN member groups participate in collaborative research projects on the fossil fuel industry’s influence over the higher education system.',
  },
]
