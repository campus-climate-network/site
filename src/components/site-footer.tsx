import Link from 'next/link'

import { navEntries, isNavMenu } from '@/data/navigation'

type FooterColumn = {
  title: string
  links: Array<{ label: string; href: string }>
}

const footerColumns: FooterColumn[] = [
  ...navEntries.filter(isNavMenu).map((entry) => ({
    title: entry.label,
    links: entry.columns.flatMap((column) =>
      column.items.map((item) => ({
        label: item.label,
        href: item.href,
      }))
    ),
  })),
  {
    title: 'Get involved',
    links: [
      { label: 'Take action', href: '/take-action' },
      { label: 'Blog', href: '/resources/blog' },
      { label: 'Donate', href: '/donate' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="page-container section-dark grid gap-10 md:gap-12 lg:grid-cols-[2fr_3fr]">
        <div className="order-2 stack stack-tight lg:order-1">
          <div>
            <p className="eyebrow text-[10px] font-semibold tracking-[0.5em] text-brand-accent sm:text-xs sm:tracking-[0.65em]">
              Campus Climate Network
            </p>
            <p className="mt-3 max-w-xs text-sm text-slate-300">
              We provide students with the skills, resources, and connections
              they need to run winning campaigns on campus.
            </p>
          </div>
          <p className="max-w-xs text-xs text-slate-400">
            Campus Climate Network is a fiscally sponsored project of{' '}
            <a
              className="underline transition hover:text-slate-300"
              href="https://hackfoundation.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Hack Foundation
            </a>
            .
          </p>

          <p className="text-xs text-slate-400">
            © Campus Climate Network {new Date().getFullYear()}
          </p>
          <p className="text-xs text-slate-400">
            Site by{' '}
            <a
              className="underline transition hover:text-slate-300"
              href="https://www.dylanwahbe.com"
            >
              Dylan Wahbe.
            </a>
          </p>
        </div>
        <div className="order-1 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:order-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="eyebrow text-[10px] font-semibold tracking-[0.25em] text-brand-accent sm:text-xs sm:tracking-[0.35em]">
                {column.title}
              </h3>
              <ul className="stack-list-compact mt-3 text-sm text-slate-300 sm:mt-4">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="transition hover:text-white"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
