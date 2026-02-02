import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Page Not Found | Campus Climate Network',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-brand-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main id="main-content" className="flex-1 flex">
          <section className="flex-1 flex items-center py-16 bg-linear-to-br from-brand-secondary via-brand-tertiary to-brand-primary text-white">
            <div className="page-container stack items-center text-center">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl">404</h1>
              <p className="text-lg text-brand-cream/90 sm:text-xl">
                The page you&apos;re looking for doesn&apos;t exist.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-yellow-300"
                >
                  Return home
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center rounded-full border border-white/50 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
