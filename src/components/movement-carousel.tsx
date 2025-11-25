'use client'

import Image from 'next/image'
import { useState } from 'react'

type Highlight = {
  title: string
  description: string
  image: string
  alt: string
}

type MovementCarouselProps = {
  highlights: Highlight[]
}

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function MovementCarousel({ highlights }: MovementCarouselProps) {
  const [current, setCurrent] = useState(0)
  const count = highlights.length

  const goTo = (index: number) => {
    setCurrent((index + count) % count)
  }

  const next = () => goTo(current + 1)
  const previous = () => goTo(current - 1)

  const activeHighlight = highlights[current]

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.45)]">
      <div className="relative aspect-[3/2] w-full">
        <Image
          key={activeHighlight.image}
          src={activeHighlight.image}
          alt={activeHighlight.alt}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="h-full w-full object-cover"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent" />
        <div className="absolute inset-x-6 bottom-6 stack stack-snug text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">
            Student wins
          </p>
          <h3 className="text-2xl font-semibold leading-tight">
            {activeHighlight.title}
          </h3>
          <p className="text-sm text-white/80 md:max-w-2xl">
            {activeHighlight.description}
          </p>
        </div>
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3">
          <button
            type="button"
            onClick={previous}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-sm transition hover:bg-white"
            aria-label="Previous highlight"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="M12.5 5L7.5 10L12.5 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-sm transition hover:bg-white"
            aria-label="Next highlight"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 px-6 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-brand-secondary/80">
            Highlights
          </p>
          <p className="text-sm text-slate-600">
            {current + 1} of {count}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {highlights.map((highlight, index) => (
            <button
              key={highlight.image}
              type="button"
              onClick={() => goTo(index)}
              className={classNames(
                'h-2.5 w-2.5 rounded-full transition',
                current === index
                  ? 'bg-brand-primary'
                  : 'bg-slate-200 hover:bg-slate-300'
              )}
              aria-label={`View highlight ${index + 1}: ${highlight.title}`}
              aria-current={current === index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
