import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ScrollReveal, StaggerReveal } from '@/components/scroll-reveal'
import {
  programs,
  coreProgramRows,
  type Program,
  type ProgramLink,
} from './programs-data'

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Explore CCN’s core programs: Student Power Gatherings, the Organizing Fellowship, campus trainings, coaching, Student Power Hours, and research on university ties to Big Oil.',
  alternates: {
    canonical: '/programs',
  },
}

function ProgramLinkItem({ link }: { link: ProgramLink }) {
  // '#' entries are placeholders awaiting real URLs (see programs-data.ts);
  // they skip target="_blank" until the destination exists.
  const isPlaceholder = link.href === '#'
  const externalProps =
    link.external && !isPlaceholder
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}
  const className = link.highlight
    ? 'inline-flex w-fit items-start gap-2 rounded-2xl bg-brand-accent/20 px-5 py-4 text-sm font-semibold text-slate-900 transition hover:bg-brand-accent/35'
    : 'inline-flex w-fit items-start gap-1.5 text-sm font-semibold text-brand-primary transition hover:text-brand-secondary'
  const content = (
    <>
      <span>{link.label}</span>
      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />
      {link.external && !isPlaceholder && (
        <span className="sr-only">(opens in new tab)</span>
      )}
    </>
  )

  if (link.href.startsWith('/')) {
    return (
      <Link href={link.href} className={className}>
        {content}
      </Link>
    )
  }
  return (
    <a href={link.href} className={className} {...externalProps}>
      {content}
    </a>
  )
}

function ProgramImages({ images }: { images: NonNullable<Program['images']> }) {
  if (images.length === 1) return null // rendered by the two-column layout
  return (
    <StaggerReveal
      variant="fade-up"
      className={`grid gap-3 sm:gap-4 ${
        images.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'
      }`}
    >
      {images.map((image) => (
        <div
          key={image.src}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={
              images.length === 2
                ? '(max-width: 640px) 100vw, 50vw'
                : '(max-width: 640px) 100vw, 33vw'
            }
            className="object-cover"
          />
        </div>
      ))}
    </StaggerReveal>
  )
}

function ProgramSection({ program, index }: { program: Program; index: number }) {
  const dark = program.id === 'skills-to-win'
  const tinted = !dark && index % 2 === 1
  const singleImage =
    program.images?.length === 1 ? program.images[0] : undefined

  const header = (
    <ScrollReveal variant="fade-up">
      <div className="stack stack-tight max-w-3xl">
        <h2
          className={`text-2xl font-semibold sm:text-3xl ${dark ? '' : 'text-slate-900'}`}
        >
          {program.name}
        </h2>
        {program.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 32)}
            className={`text-base ${dark ? 'text-white/70' : 'text-slate-600'}`}
          >
            {paragraph}
          </p>
        ))}
        {program.links && (
          <div className="flex flex-col gap-3 pt-1">
            {program.links.map((link) => (
              <ProgramLinkItem key={link.label} link={link} />
            ))}
          </div>
        )}
      </div>
    </ScrollReveal>
  )

  const body = singleImage ? (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
      <div className={index % 4 === 1 ? 'lg:order-2' : ''}>{header}</div>
      <ScrollReveal
        variant="fade-up"
        className={index % 4 === 1 ? 'lg:order-1' : ''}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-brand-primary/10">
          <Image
            src={singleImage.src}
            alt={singleImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </ScrollReveal>
    </div>
  ) : (
    <>
      {header}
      {program.images && <ProgramImages images={program.images} />}
    </>
  )

  if (dark) {
    return (
      <section className="bg-brand-primary text-white section-dark">
        <div className="page-container stack stack-loose">{body}</div>
      </section>
    )
  }
  if (tinted) {
    return (
      <section className="bg-[#fafaf7] section-hero">
        <div className="page-container stack stack-loose">{body}</div>
      </section>
    )
  }
  return <section className="page-container stack stack-loose">{body}</section>
}

export default function ProgramsPage() {
  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-secondary/10 to-transparent section-hero">
        <div className="page-container">
          <ScrollReveal variant="fade-up">
            <div className="stack stack-tight max-w-3xl text-left">
              <h1 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
                Our programs
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {programs.map((program, index) => (
        <ProgramSection key={program.id} program={program} index={index} />
      ))}

      {/* Core programming table */}
      <section className="page-container stack stack-relaxed">
        <ScrollReveal variant="fade-up">
          <h2 className="max-w-3xl text-2xl font-semibold text-slate-900 sm:text-3xl">
            Core CCN programming for the 2026-2027 academic year
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="fade-up">
          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm">
            <div className="overflow-x-auto">
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
      </section>

      {/* Closing CTA */}
      <section className="page-container">
        <ScrollReveal variant="fade-up">
          <div className="gradient-drift relative isolate overflow-hidden rounded-[2.5rem] bg-linear-to-br from-brand-secondary via-brand-tertiary to-brand-primary px-6 py-16 text-center text-white sm:px-12 sm:py-20">
            <div className="mx-auto stack stack-snug max-w-2xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                There’s a program for you
              </h2>
              <p className="mx-auto max-w-xl text-base text-white sm:text-lg">
                Whether you’re new to organizing or leading a campaign, CCN’s
                programs will help you build the skills to win.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link
                  className="inline-flex items-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-brand-accent/90"
                  href="/take-action?source=programs"
                >
                  Get involved
                </Link>
                <Link
                  className="inline-flex items-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
                  href="/donate"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
