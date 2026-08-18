import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'
import { programs, coreProgramRows } from './programs-data'
import { ProgramsClosingCta } from './closing-cta'

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'CCN’s core programs: Student Power Gatherings, the Organizing Fellowship, campus trainings, coaching, and research uncovering university ties to Big Oil.',
  alternates: {
    canonical: '/programs',
  },
}

export default function ProgramsPage() {
  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-secondary/10 to-transparent section-hero">
        <div className="page-container">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-tight max-w-3xl text-left">
              <p className="eyebrow text-xs sm:text-sm text-brand-secondary">
                Our work
              </p>
              <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
                Our programs
              </h1>
              <p className="text-base text-slate-700">
                View CCN’s core programming that stewards the next generation of
                climate leaders.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Program cards */}
      <section className="page-container stack stack-loose">
        <StaggerReveal
          variant="fade-up"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {programs.map((program, index) => {
            const cardImage = program.images?.[0] ?? program.cardImage
            return (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="group flex h-full flex-col gap-4 overflow-hidden rounded-2xl bg-white pb-5 shadow-sm ring-1 ring-slate-900/10 transition hover:shadow-md hover:ring-slate-900/20"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                  {cardImage ? (
                    <Image
                      src={cardImage.src}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="h-full w-full bg-linear-to-br from-brand-primary/10 to-brand-secondary/10" />
                  )}
                </div>
                <div className="grid flex-1 grid-cols-[1fr_auto] items-start gap-x-3 px-5">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold leading-tight text-slate-900">
                      {program.shortName}
                    </h2>
                    <p className="text-sm text-slate-600">{program.name}</p>
                  </div>
                  <ArrowUpRight className="mt-0.5 h-4 w-4 text-brand-primary transition group-hover:text-brand-secondary" />
                </div>
              </Link>
            )
          })}
        </StaggerReveal>
      </section>

      {/* Core programming table */}
      <section className="bg-[#fafaf7] section-hero">
        <div className="page-container stack stack-relaxed">
          <ScrollReveal variant="fade-up">
            <h2
              id="core-programming-heading"
              className="max-w-3xl text-2xl font-semibold text-slate-900 sm:text-3xl"
            >
              Core CCN programming for the 2026-2027 academic year
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up">
            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm">
              {/* Focusable so keyboard users can scroll the wide table. The
                  ring is inset because the rounded wrapper clips anything
                  drawn outside this element's box. */}
              <div
                className="overflow-x-auto rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-primary"
                tabIndex={0}
                role="region"
                aria-labelledby="core-programming-heading"
              >
                <table className="w-full min-w-[48rem] border-collapse text-left">
                  <caption className="sr-only">
                    Core CCN programming for the 2026-2027 academic year
                  </caption>
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/60">
                      <th
                        scope="col"
                        className="eyebrow px-6 py-4 text-xs font-normal text-brand-secondary"
                      >
                        Program
                      </th>
                      <th
                        scope="col"
                        className="eyebrow px-6 py-4 text-xs font-normal text-brand-secondary"
                      >
                        Timeline
                      </th>
                      <th
                        scope="col"
                        className="eyebrow px-6 py-4 text-xs font-normal text-brand-secondary"
                      >
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {coreProgramRows.map((row) => (
                      <tr
                        key={row.program}
                        className="border-b border-slate-200 align-top last:border-b-0"
                      >
                        <th
                          scope="row"
                          className="min-w-44 px-6 py-5 text-left text-sm font-semibold text-slate-900"
                        >
                          {row.program}
                        </th>
                        <td className="whitespace-nowrap px-6 py-5 text-sm text-slate-600">
                          {row.timeline}
                        </td>
                        <td className="px-6 py-5 text-sm leading-relaxed text-slate-600">
                          {row.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ProgramsClosingCta />
    </div>
  )
}
