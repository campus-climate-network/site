import type { Metadata } from 'next'

import { ScrollReveal } from '@/components/scroll-reveal'
import { isAuthenticated } from './actions'
import { OrgProfileForm } from './org-profile-form'
import { PasswordForm } from './password-form'

export const metadata: Metadata = {
  title: 'Member onboarding',
  description:
    'Set up your organization’s profile on the Campus Climate Network map.',
  robots: { index: false, follow: false },
}

// One unlisted URL for every newly accepted group (welcome email, onboarding
// PDF), gated by the shared onboarding password. Not linked from the site.
export default async function OnboardingPage() {
  const authed = await isAuthenticated()

  return (
    <div className="page-wrapper">
      <section className="bg-brand-secondary/10 section-hero">
        <div className="page-container stack stack-tight text-left">
          <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
            Member onboarding
          </p>
          <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
            Welcome to the network
          </h1>
          <p className="max-w-3xl text-base text-slate-700">
            Share a few details about your group and we’ll add you to the member
            directory and the network map. It only takes a couple of minutes.
            Have your logo file handy.
          </p>
        </div>
      </section>

      <section className="page-container stack stack-relaxed">
        {authed ? (
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
              <OrgProfileForm />
            </div>
          </ScrollReveal>
        ) : (
          <>
            <ScrollReveal variant="fade-up">
              <div className="stack stack-snug">
                <h2 className="text-xl font-semibold text-slate-900">
                  Enter the onboarding password
                </h2>
                <p className="text-sm text-slate-500">
                  It’s in your welcome email from CCN. Contact a staff member if
                  you don’t have it.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={100}>
              <PasswordForm />
            </ScrollReveal>
          </>
        )}
      </section>
    </div>
  )
}
