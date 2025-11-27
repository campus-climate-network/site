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
            label: 'Our Funders',
            href: '/our-funders',
            description: 'Partners investing in climate justice organizing.',
          },
        ],
      },
      {
        title: 'Work With Us',
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
    ],
  },
  {
    label: 'Fossil Free Research',
    columns: [
      {
        title: 'Overview',
        items: [
          {
            label: 'FFR Campaign',
            href: '/ffr-campaign',
          },
          {
            label: 'Open Letter',
            href: '/open-letter',
          },
        ],
      },
      {
        title: 'Learn More',
        items: [
          {
            label: 'FFR Reports',
            href: '/ffr-archive',
          },
          {
            label: 'Campus Toolkit',
            href: '/ffr-toolkit',
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
  {
    label: 'Donate',
    href: '/donate',
  },
]

export function isNavMenu(entry: NavEntry): entry is NavMenu {
  return (entry as NavMenu).columns !== undefined
}
