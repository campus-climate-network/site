export default function ContactUsPage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="bg-brand-cream/60">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-20 text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
            Contact
          </p>
          <h1 className="text-4xl font-semibold text-brand-primary">
            Let’s connect.
          </h1>
          <p className="text-base text-slate-700">
            Reach out to collaborate, request resources, or learn more about
            Campus Climate Network. We’ll follow up as soon as we can.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-6">
        <div className="rounded-3xl border border-brand-secondary/20 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-brand-primary">
            General inquiries
          </h2>
          <p className="mt-3 text-sm text-slate-600">
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
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-primary">
              Join the network
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Want to plug in? Visit{' '}
              <a className="text-brand-primary underline" href="/take-action">
                /take-action
              </a>{' '}
              or email us to receive the latest intake form.
            </p>
          </div>
          <div className="rounded-3xl border border-brand-secondary/20 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-primary">
              Press & speaking
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Contact us for interviews, campus visits, or to feature a student
              campaign.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6 text-left text-white">
          <h2 className="text-2xl font-semibold">Stay in the loop</h2>
          <p className="text-sm text-slate-200">
            Newsletter signups and text alerts are coming soon. Email us now and
            we’ll make sure you receive the first announcement.
          </p>
        </div>
      </section>
    </div>
  )
}
