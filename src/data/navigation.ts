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
        title: 'CCN Network',
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
            description: 'Campaigns run by the CCN Network.',
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
            description:
              'End fossil fuel industry influence over academic research.',
          },
          {
            label: 'Open Letter',
            href: '/open-letter',
            description:
              'Sign the call for universities to reject fossil fuel funding.',
          },
        ],
      },
      {
        title: 'Reports',
        items: [
          {
            label: 'FFR Reports',
            href: '/ffr-archive',
            description:
              'Research exposing fossil fuel ties to university programs.',
          },
        ],
      },
    ],
  },
  {
    label: 'Blog',
    href: '/resources/blog',
  },
  {
    label: 'Donate',
    href: '/donate',
  },
]

export function isNavMenu(entry: NavEntry): entry is NavMenu {
  return (entry as NavMenu).columns !== undefined
}
