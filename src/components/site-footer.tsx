import Link from 'next/link'

import {
  navEntries,
  type NavEntry,
  type NavColumn,
  type NavLink,
  isNavMenu,
} from '@/data/navigation'

type FooterColumn = {
  title: string
  links: Array<{ label: string; href: string }>
}

function extractFooterColumns(entry: NavEntry): FooterColumn[] {
  if (!isNavMenu(entry)) {
    return [
      { title: entry.label, links: [{ label: entry.label, href: entry.href }] },
    ]
  }

  return entry.columns.map((column: NavColumn) => ({
    title: column.title,
    links: column.items.map((item: NavLink) => ({
      label: item.label,
      href: item.href,
    })),
  }))
}

const footerColumns = navEntries.flatMap(extractFooterColumns)

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[2fr_3fr]">
        <div className="stack stack-tight">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.65em] text-brand-accent">
              Campus Climate Network
            </p>
            <p className="mt-3 max-w-xs text-sm text-slate-300">
              Organizing students to win fossil-free research and climate
              justice on campuses nationwide.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            <a
              className="transition hover:text-white"
              href="mailto:info@campusclimatenetwork.org"
            >
              info@campusclimatenetwork.org
            </a>
            <p className="text-sm text-slate-400">
              © Campus Climate Network 2025
            </p>
          </div>
          <div className="text-sm text-slate-300">
            Site built by{' '}
            <a
              className=" transition hover:text-white"
              href="https://www.dylanwahbe.com"
            >
              Dylan Wahbe
            </a>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-accent">
                {column.title}
              </h3>
              <ul className="stack-list-compact mt-4 text-sm text-slate-300">
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
