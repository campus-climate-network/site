import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support student climate leadership with a donation to Campus Climate Network. Every dollar fuels organizing infrastructure, trainings, and rapid-response actions.',
  alternates: {
    canonical: '/donate',
  },
}

export default function DonatePage() {
  return (
    <div className="page-wrapper">
      <section className="bg-brand-secondary/10 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
            Donate
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
            Invest in student climate leadership
          </h1>
          <p className="text-base text-slate-700">
            Every dollar supports organizing infrastructure, training programs,
            and rapid-response actions led by students on the frontlines.
          </p>
        </div>
      </section>

      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense text-left">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Donate now
            </h2>
            <p className="text-base text-slate-600">
              Your contribution directly supports student climate organizers.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            <iframe
              src="https://hcb.hackclub.com/donations/start/campus-climate-network"
              title="Campus Climate Network Donation Form"
              name="donateFrame"
              frameBorder="0"
              allowFullScreen
              className="h-[1100px] w-full"
              style={{ border: 'none' }}
            />
          </div>
        </ScrollReveal>
      </section>

      <section className="page-container">
        <ScrollReveal variant="fade-up">
          <div className="stack stack-dense max-w-2xl text-left">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Questions about giving?
            </h2>
            <p className="text-base text-slate-600">
              Campus Climate Network is a fiscally sponsored project of{' '}
              <a
                href="https://hackfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-primary hover:underline"
              >
                The Hack Foundation
              </a>
              , a registered 501(c)(3) nonprofit (EIN 81-2908499) — all
              donations are tax-deductible to the extent allowed by law.
            </p>
            <p className="text-base text-slate-600">
              For small-dollar donations, use the form above. For larger gifts,
              foundation grants, or other ways to give, please reach out at{' '}
              <a
                href="mailto:info@campusclimatenetwork.org"
                className="font-medium text-brand-primary hover:underline"
              >
                info@campusclimatenetwork.org
              </a>{' '}
              — we&rsquo;d love to hear from you.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
