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
    label: 'About us',
    columns: [
      {
        title: 'Inside CCN',
        items: [
          {
            label: 'Our approach',
            href: '/our-approach',
            description:
              'Strategy and support model for winning campus campaigns.',
          },
          {
            label: 'Our story',
            href: '/our-story',
            description:
              'Where the network began and where we are heading next.',
          },
          // Hidden until content is ready
          // {
          //   label: 'Our funders',
          //   href: '/our-funders',
          //   description: 'Partners investing in climate justice organizing.',
          // },
        ],
      },
      {
        title: 'Work with us',
        items: [
          {
            label: 'Careers',
            href: '/hiring',
            description:
              'Open roles for organizers, communicators, and builders.',
          },
          {
            label: 'Contact us',
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
            label: 'Member organizations',
            href: '/our-network',
            description:
              'Explore the groups pushing universities to cut fossil ties.',
          },
          {
            label: 'Network campaigns',
            href: '/network-campaigns',
            description: 'Campaigns run by the CCN Network.',
          },
        ],
      },
      // Hidden until content is ready
      // {
      //   title: 'Movement',
      //   items: [
      //     {
      //       label: 'Student wins',
      //       href: '/student-wins',
      //       description: 'Victories won by students in the climate movement.',
      //     },
      //   ],
      // },
    ],
  },
  {
    label: 'Fossil Free Research',
    columns: [
      {
        title: 'FFR overview',
        items: [
          {
            label: 'Campaign overview',
            href: '/ffr-campaign',
            description:
              'End fossil fuel industry influence over academic research.',
          },
          {
            label: 'Open letter',
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
            label: 'FFR reports',
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
    href: '/blog',
  },
  {
    label: 'Donate',
    href: '/donate',
  },
]

export function isNavMenu(entry: NavEntry): entry is NavMenu {
  return (entry as NavMenu).columns !== undefined
}
