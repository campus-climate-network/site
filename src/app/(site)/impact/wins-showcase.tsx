'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { ArrowUpRight, Check, Maximize2, Quote, X } from 'lucide-react'

export interface StudentWin {
  id: string
  title: string
  org?: string
  date?: string
  campaign?: string
  description?: string
  link?: string
  outcomes?: string[]
  organizerQuote?: string
  organizerName?: string
  organizerRole?: string
  imageUrl?: string
  imageAlt?: string
}

interface WinsShowcaseProps {
  wins: StudentWin[]
}

function formatDate(dateString: string): string {
  // Allow a bare year (e.g. '2025') when only the year is known.
  if (/^\d{4}$/.test(dateString)) return dateString
  // Anchor to local midnight: bare 'YYYY-MM-DD' parses as UTC midnight, which
  // rolls day-1 dates back a month for viewers west of UTC.
  return new Date(`${dateString}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}

export function WinImage({
  win,
  className,
  sizes,
}: {
  win: StudentWin
  className?: string
  sizes: string
}) {
  if (!win.imageUrl) {
    // Mirror the `fill` positioning of the Image branch so the gradient
    // panel fills its `relative` parent instead of collapsing to content.
    return (
      <div
        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-secondary/20 via-brand-tertiary/10 to-brand-accent/20 ${className ?? ''}`}
      >
        <span
          aria-hidden="true"
          className="font-display text-4xl text-brand-primary/40"
        >
          {(win.org || win.title).charAt(0)}
        </span>
      </div>
    )
  }

  return (
    <Image
      src={win.imageUrl}
      alt={win.imageAlt || ''}
      fill
      sizes={sizes}
      className={`object-cover ${className ?? ''}`}
    />
  )
}

function WinCard({
  win,
  featured = false,
  onOpen,
}: {
  win: StudentWin
  featured?: boolean
  onOpen: () => void
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      className={`group relative flex w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-brand-secondary/[0.07] via-white to-brand-tertiary/[0.07] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        featured ? 'flex-col md:min-h-[24rem] md:flex-row' : 'flex-col'
      }`}
    >
      <span className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-brand-primary shadow-sm ring-1 ring-slate-200/70 backdrop-blur transition group-hover:bg-brand-primary group-hover:text-white group-hover:ring-brand-primary motion-reduce:transition-none">
        <Maximize2 className="h-4 w-4" />
      </span>

      <div
        className={`flex flex-col gap-2 p-6 sm:p-7 ${
          featured ? 'md:w-1/2 md:justify-center md:p-9' : ''
        }`}
      >
        {(win.campaign || win.date) && (
          <p className="pr-10 text-xs font-medium text-slate-500">
            {[win.campaign, win.date && formatDate(win.date)]
              .filter(Boolean)
              .join(' · ')}
          </p>
        )}
        <h3
          className={`pr-10 font-semibold leading-snug text-slate-900 ${
            featured ? 'text-2xl sm:text-3xl' : 'text-xl'
          }`}
        >
          {win.title}
        </h3>
      </div>

      <div
        className={`relative ${
          featured
            ? 'aspect-[16/10] md:aspect-auto md:w-1/2'
            : 'min-h-56 flex-1'
        }`}
      >
        <WinImage
          win={win}
          sizes={
            featured
              ? '(max-width: 768px) 100vw, 50vw'
              : '(max-width: 768px) 100vw, 33vw'
          }
          className="transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
    </button>
  )
}

export function WinModal({
  win,
  onClose,
}: {
  win: StudentWin
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = overflow
      previouslyFocused?.focus()
    }
  }, [onClose])

  const titleId = `win-title-${win.id}`

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-slate-900/40 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
        className="relative my-6 w-full max-w-4xl rounded-3xl bg-white p-6 shadow-2xl duration-300 animate-in fade-in zoom-in-95 sm:my-10 sm:p-10 motion-reduce:animate-none"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid gap-8 pr-10 md:grid-cols-2 md:pr-12">
          <div>
            {win.date && (
              <span className="text-xs font-medium text-slate-500">
                {formatDate(win.date)}
              </span>
            )}
            <h2
              id={titleId}
              className="mt-4 text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl"
            >
              {win.title}
            </h2>
            {win.org && (
              <p className="mt-2 text-sm font-medium text-slate-500">
                {win.org}
              </p>
            )}
            {win.description && (
              <p className="mt-4 text-base text-slate-700">{win.description}</p>
            )}

            {win.link && (
              <div className="mt-6">
                <a
                  href={win.link}
                  {...(win.link.startsWith('/')
                    ? {}
                    : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-secondary"
                >
                  {win.link.startsWith('/')
                    ? 'Read the story'
                    : 'Read the coverage'}
                  <ArrowUpRight className="h-4 w-4" />
                  {!win.link.startsWith('/') && (
                    <span className="sr-only">(opens in new tab)</span>
                  )}
                </a>
              </div>
            )}
          </div>

          {win.outcomes && win.outcomes.length > 0 && (
            <ul className="space-y-3 md:pt-10">
              {win.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-slate-700">{outcome}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {win.organizerQuote && (
          <figure className="mt-8 rounded-2xl bg-brand-secondary/[0.07] p-6 sm:p-8">
            <Quote className="h-7 w-7 text-brand-secondary/50" />
            <blockquote className="mt-3 text-lg font-medium leading-relaxed text-slate-800">
              {win.organizerQuote}
            </blockquote>
            {(win.organizerName || win.organizerRole) && (
              <figcaption className="mt-4 text-sm text-slate-500">
                {win.organizerName && (
                  <span className="font-semibold text-slate-700">
                    {win.organizerName}
                  </span>
                )}
                {win.organizerName && win.organizerRole && ' — '}
                {win.organizerRole}
              </figcaption>
            )}
          </figure>
        )}

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <WinImage win={win} sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </div>
    </div>,
    document.body,
  )
}

export function WinsShowcase({ wins }: WinsShowcaseProps) {
  const [activeId, setActiveId] = useState<string | null>(null)

  const close = useCallback(() => setActiveId(null), [])

  if (wins.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center">
        <p className="text-slate-600">
          Wins are on the way. Check back soon as our network keeps pushing
          campuses to act.
        </p>
      </div>
    )
  }

  const activeWin = wins.find((win) => win.id === activeId)

  return (
    <div className="stack stack-relaxed">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {wins.map((win) => (
          <WinCard key={win.id} win={win} onOpen={() => setActiveId(win.id)} />
        ))}
      </div>

      {activeWin && <WinModal win={activeWin} onClose={close} />}
    </div>
  )
}
