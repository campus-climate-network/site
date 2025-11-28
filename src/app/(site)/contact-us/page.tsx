import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Campus Climate Network for collaborations, media requests, partnerships, or to learn more about our student climate organizing work.',
}

export default function ContactUsPage() {
  return (
    <div className="page-wrapper">
      <section className="bg-brand-cream/60 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-brand-secondary">
            Contact
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
            Let&apos;s connect.
          </h1>
          <p className="text-base text-slate-700">
            Reach out to collaborate, request resources, or learn more about
            Campus Climate Network. We’ll follow up as soon as we can.
          </p>
        </div>
      </section>

      <section className="page-container stack">
        <ScrollReveal variant="blossom">
          <div className="stack stack-dense rounded-3xl border border-brand-secondary/20 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-brand-primary sm:text-3xl">
              General inquiries
            </h2>
            <p className="text-sm text-slate-600">
              Email{' '}
              <a
                className="text-brand-primary underline"
                href="mailto:info@campusclimatenetwork.org"
              >
                info@campusclimatenetwork.org
              </a>{' '}
              for media requests, partnerships, or questions about the network.
            </p>
          </div>
        </ScrollReveal>
        <StaggerReveal
          staggerDelay={120}
          variant="blossom"
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="stack stack-dense rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-primary">
              Join the network
            </h3>
            <p className="text-sm text-slate-600">
              Want to plug in? Visit{' '}
              <Link
                className="text-brand-primary underline"
                href="/take-action"
              >
                Take Action
              </Link>{' '}
              or email us to receive the latest intake form.
            </p>
          </div>
          <div className="stack stack-dense rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-primary">
              Press & speaking
            </h3>
            <p className="text-sm text-slate-600">
              Contact us for interviews, campus visits, or to feature a student
              campaign.
            </p>
          </div>
        </StaggerReveal>
      </section>
    </div>
  )
}
