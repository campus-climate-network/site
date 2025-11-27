import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: "We're Hiring",
  description:
    'Join Campus Climate Network. View open positions for organizers, fellows, and coordinators helping students win climate justice on campuses nationwide.',
}

export default function HiringPage() {
  return (
    <div className="page-wrapper">
      <section className="bg-brand-secondary/10 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
            We're Hiring
          </p>
          <h1 className="text-4xl font-semibold text-brand-primary">
            Work with Campus Climate Network.
          </h1>
          <p className="text-base text-slate-700">
            Help students win climate justice on campuses around the world.
            We're a distributed team of organizers, educators, and strategists
            building infrastructure for the youth climate movement.
          </p>
        </div>
      </section>

      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="text-3xl font-semibold text-slate-900">
              Open roles
            </h2>
            <p className="text-base text-slate-600">
              We don't have any open positions right now. Check back soon—we'll
              update this page when new roles become available.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
