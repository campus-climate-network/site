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
      <div className="relative aspect-[4/5] w-full sm:aspect-[3/2]">
        <Image
          key={activeHighlight.image}
          src={activeHighlight.image}
          alt={activeHighlight.alt}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="h-full w-full object-cover"
          priority={current === 0}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent sm:from-slate-900/90 sm:via-slate-900/50 sm:to-slate-900/10" />
        <div className="absolute inset-x-4 bottom-14 stack stack-snug text-white sm:inset-x-6 sm:bottom-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/90 sm:text-xs">
            Student wins
          </p>
          <h3 className="text-base font-semibold leading-tight sm:text-xl md:text-2xl drop-shadow-md">
            {activeHighlight.title}
          </h3>
          <p className="text-xs text-white/95 line-clamp-2 sm:line-clamp-none sm:text-sm md:max-w-2xl">
            {activeHighlight.description}
          </p>
        </div>
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-between px-3 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2 sm:px-3">
          <button
            type="button"
            onClick={previous}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:bg-white sm:h-10 sm:w-10 sm:bg-white/80 sm:shadow-sm"
            aria-label="Previous highlight"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4 sm:h-5 sm:w-5"
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
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:bg-white sm:h-10 sm:w-10 sm:bg-white/80 sm:shadow-sm"
            aria-label="Next highlight"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4 sm:h-5 sm:w-5"
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
