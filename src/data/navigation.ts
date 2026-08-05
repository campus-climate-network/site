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
    label: 'Impact',
    href: '/impact',
  },
  {
    label: 'Programs',
    href: '/programs',
  },
  {
    label: 'About',
    columns: [
      {
        title: 'Inside CCN',
        items: [
          {
            label: 'About us',
            href: '/our-approach',
            description: 'Learn how we build student power.',
          },
          {
            label: 'Our story',
            href: '/our-story',
            description:
              'Where the network began and where we are heading next.',
          },
          {
            label: 'Hiring',
            href: '/hiring',
            description: 'View open roles at CCN.',
          },
          {
            label: 'Contact',
            href: '/contact-us',
            description: 'Reach the CCN team for partnerships or press.',
          },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    columns: [
      {
        title: 'Explore CCN',
        items: [
          {
            label: 'Blog',
            href: '/blog',
            description: 'Updates, analysis, and stories from the movement.',
          },
          {
            label: 'Member organizations',
            href: '/our-network',
            description:
              'Explore the groups pushing universities to cut fossil ties.',
          },
          {
            label: 'Member Portal',
            href: '/member-portal',
            description: 'Resources and tools for CCN member organizations.',
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
