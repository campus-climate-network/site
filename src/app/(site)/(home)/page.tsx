import Image from 'next/image'
import { MovementCarousel } from '@/components/movement-carousel'

const pressLogos = [
  {
    name: 'The Guardian',
    image: '/press-logos/guardian.png',
    width: 300,
    height: 99,
  },
  {
    name: 'The New York Times',
    image: '/press-logos/new-york-times.png',
    width: 300,
    height: 41,
  },
  {
    name: 'The Nation',
    image: '/press-logos/the-nation.png',
    width: 300,
    height: 90,
  },
  {
    name: 'The Boston Globe',
    image: '/press-logos/boston-globe.png',
    width: 300,
    height: 47,
  },
  {
    name: 'The Independent',
    image: '/press-logos/independent.png',
    width: 376,
    height: 30,
  },
  {
    name: 'Mother Jones',
    image: '/press-logos/mother-jones-2025.png',
    width: 1024,
    height: 209,
  },
]

const movementHighlights = [
  {
    title: 'NYC students flood the streets for climate justice',
    description:
      'Campus Climate Network organizers helped pack the 2023 march demanding the end of fossil fuel expansion.',
    image: '/images/movement-hero-1.jpg',
    alt: 'Campus Climate Network organizers leading a march through downtown streets.',
  },
  {
    title: 'University of Toronto occupies RBC campus branch',
    description:
      'Students with Climate Justice UofT staged a sit-in to force their university to cut ties with the fossil fuel financier.',
    image: '/images/movement-hero-2.jpg',
    alt: 'Students staging a sit-in with banners demanding fossil fuel divestment.',
  },
  {
    title: 'Brown Divest wins major victory',
    description:
      'Student organizers secured a commitment to phase out fossil fuel funding after years of sit-ins and coalition building.',
    image: '/photoprotest.jpg',
    alt: 'Student organizers gathered outside a university building calling for climate action.',
  },
  {
    title: 'Sunrise NYU pushes trustees to divest',
    description:
      'Hundreds marched through campus and delivered signatures that helped drive NYU’s divestment decision.',
    image: '/images/movement-hero-4.jpg',
    alt: 'Students marching with signs demanding divestment from fossil fuels.',
  },
  {
    title: 'Fossil Free Research rally at UN Climate Week',
    description:
      'Campus Climate Network leaders joined a coalition to call on universities to reject Big Oil funding at global climate talks.',
    image: '/images/movement-hero-5.jpg',
    alt: 'Members of Campus Climate Network smiling together at a climate justice rally.',
  },
]

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-secondary via-brand-tertiary to-brand-primary text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-cream/70">
              Campus Climate Network
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              The student climate movement is here.
            </h1>
            <p className="text-lg text-brand-cream/90">
              Students everywhere are organizing to end fossil fuel influence on
              campus. We equip you with the strategy, training, and community to
              win.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-yellow-300"
                href="/take-action"
              >
                Join Us
              </a>
              <a
                className="inline-flex items-center rounded-full border border-white/50 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
                href="/donate"
              >
                Donate
              </a>
            </div>
          </div>
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-brand-primary/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative grid gap-4 sm:grid-cols-2">
              {movementHighlights.slice(0, 4).map((photo, index) => (
                <div
                  key={photo.image}
                  className={
                    index === 0
                      ? 'row-span-2 overflow-hidden rounded-3xl border border-white/20'
                      : 'overflow-hidden rounded-3xl border border-white/15'
                  }
                >
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    width={index === 0 ? 620 : 280}
                    height={index === 0 ? 760 : 260}
                    className="h-full w-full object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/15 bg-white/5">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-6 px-6 py-6 text-sm uppercase tracking-[0.3em] text-brand-cream/70">
            {pressLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-20 w-40 items-center justify-center rounded-xl bg-brand-cream/70 px-4 py-3 shadow-sm"
              >
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src={logo.image}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-full max-w-full object-contain"
                    sizes="160px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
              Our Network
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Around the world, students just like you are kicking Big Oil off
              campus.
            </h2>
            <p className="text-lg text-slate-600">
              Our members share organizing playbooks, tactical trainings, and
              cross-campus solidarity so every institution can move faster
              toward fossil-free research.
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              <a
                className="inline-flex items-center rounded-full bg-brand-primary px-4 py-2 text-white transition hover:bg-brand-secondary"
                href="/our-network"
              >
                Member Organizations
              </a>
              <a
                className="inline-flex items-center rounded-full border border-brand-primary px-4 py-2 text-brand-primary transition hover:bg-brand-primary hover:text-white"
                href="/network-campaigns"
              >
                Campaigns
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-brand-secondary/30 overflow-hidden">
            <div className="relative h-[320px] sm:h-[420px] lg:h-[500px]">
              <iframe
                title="Campus Climate Network member map"
                src="https://www.google.com/maps/d/embed?mid=1jL5D_L1471XrlrzwzSC-d3mWE_KyEJU&ehbc=2E312F&nopro&ll=10.14543330073012,-107.3738707&z=2"
                className="absolute inset-x-0 -top-16 h-[calc(100%+4rem)] w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream/40 py-20">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6 text-left">
          <h2 className="text-3xl font-semibold text-slate-900">What We Do</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Train and empower organizers',
                body: 'We convene climate justice leaders, share campaign strategies, and support organizing skills so students can win transformative campaigns.',
              },
              {
                title: 'Coordinate national campaigns',
                body: 'We connect campus groups to take bold collective action that exposes fossil fuel influence and builds leverage with university leadership.',
              },
              {
                title: 'Build long-term infrastructure',
                body: 'We invest in students with stipends, fellowships, and toolkits—creating pathways for sustained leadership in the climate movement.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-brand-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-brand-primary/10 p-8 text-brand-primary">
            <h2 className="text-3xl font-semibold">Join the movement</h2>
            <p className="mt-3 text-sm text-brand-primary/80">
              Are you a university student, faculty, alumni, or community member
              ready to push your institution to cut ties with fossil fuels?
            </p>
            <a
              className="mt-6 inline-flex items-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
              href="/take-action"
            >
              Join Us
            </a>
          </div>
          <div className="rounded-3xl bg-brand-secondary/10 p-8 text-brand-secondary">
            <h2 className="text-3xl font-semibold">Support the work</h2>
            <p className="mt-3 text-sm text-brand-secondary/80">
              Donations fuel campus-wide organizing, leadership development, and
              rapid-response actions to hold universities accountable.
            </p>
            <a
              className="mt-6 inline-flex items-center rounded-full bg-brand-secondary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-primary"
              href="/donate"
            >
              Donate
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="space-y-6 text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary">
            We are the movement
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            Scenes from campuses taking bold climate action
          </h2>
          <MovementCarousel highlights={movementHighlights} />
        </div>
      </section>
    </div>
  )
}
