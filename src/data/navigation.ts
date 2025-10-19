export type NavLink = {
  label: string
  href: string
  description?: string
}

export type NavColumn = {
  title: string
  items: NavLink[]
}

export type NavMenu = {
  label: string
  columns: NavColumn[]
}

export type NavPage = {
  label: string
  href: string
}

export type NavEntry = NavMenu | NavPage

export const navEntries: NavEntry[] = [
  {
    label: 'About Us',
    columns: [
      {
        title: 'Inside CCN',
        items: [
          {
            label: 'Our Approach',
            href: '/our-approach',
            description:
              'Strategy and support model for winning campus campaigns.',
          },
          {
            label: 'Our Story',
            href: '/our-story',
            description:
              'Where the network began and where we are heading next.',
          },
          {
            label: 'Our People',
            href: '/our-people',
            description:
              'Staff, fellows, and mentors powering student leadership.',
          },
          {
            label: 'Our Funders',
            href: '/our-funders',
            description: 'Partners investing in climate justice organizing.',
          },
        ],
      },
      {
        title: 'Work with us',
        items: [
          {
            label: 'We’re Hiring',
            href: '/hiring',
            description:
              'Open roles for organizers, communicators, and builders.',
          },
          {
            label: 'Contact Us',
            href: '/contact-us',
            description: 'Reach the CCN team for partnerships or press.',
          },
        ],
      },
    ],
  },
  {
    label: 'Network',
    columns: [
      {
        title: 'Campaigns',
        items: [
          {
            label: 'Member Organizations',
            href: '/our-network',
            description:
              'Explore the groups pushing universities to cut fossil ties.',
          },
          {
            label: 'Network Campaigns',
            href: '/network-campaigns',
            description:
              'Dive into coordinated divestment and reinvestment efforts.',
          },
        ],
      },
      {
        title: 'Collaborate',
        items: [
          {
            label: 'Work with CCN',
            href: '/work',
            description:
              'Partner on trainings, research collaborations, or events.',
          },
        ],
      },
    ],
  },
  {
    label: 'Fossil Free Research',
    columns: [
      {
        title: 'Cut ties with fossil fuels',
        items: [
          {
            label: 'FFR Campaign',
            href: '/ffr-campaign',
            description:
              'Organizing playbook to remove fossil funding from campuses.',
          },
          {
            label: 'Open Letter',
            href: '/open-letter',
            description: 'Add your name to demand fossil free research now.',
          },
        ],
      },
      {
        title: 'Learn more',
        items: [
          {
            label: 'Research Archive',
            href: '/ffr-archive',
            description:
              'Reports exposing fossil interests in academic research.',
          },
          {
            label: 'Campus Toolkit',
            href: '/ffr-toolkit',
            description: 'Step-by-step guidance to launch FFR on your campus.',
          },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    columns: [
      {
        title: 'Explore',
        items: [
          {
            label: 'Resource Library',
            href: '/resources/library',
            description: 'Toolkits and guides for student campaigners.',
          },
          {
            label: 'Blog',
            href: '/resources/blog',
            description: 'News, wins, and stories from across the network.',
          },
        ],
      },
    ],
  },
]

export function isNavMenu(entry: NavEntry): entry is NavMenu {
  return (entry as NavMenu).columns !== undefined
}
