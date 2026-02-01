import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className="page-wrapper">
      <section className="section-hero bg-linear-to-br from-brand-secondary via-brand-tertiary to-brand-primary text-white">
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
    </div>
  )
}
