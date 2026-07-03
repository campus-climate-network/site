'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { WinImage, type StudentWin } from '../impact/wins-showcase'

const CARD_GAP = 20 // matches the `gap-5` on the scroller

export function CampaignsCarousel({ campaigns }: { campaigns: StudentWin[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [updateArrows])

  const scrollByCards = useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const amount = card ? card.offsetWidth + CARD_GAP : el.clientWidth * 0.8
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    el.scrollBy({
      left: amount * direction,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }, [])

  if (campaigns.length === 0) return null

  return (
    <div>
      <div
        ref={scrollerRef}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {campaigns.map((win) => (
          <a
            key={win.id}
            data-card
            href={win.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-[26rem] w-[78vw] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:h-[30rem] sm:w-[20rem] lg:w-[21.5rem]"
          >
            <span className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-brand-primary shadow-sm ring-1 ring-slate-200/70 backdrop-blur transition group-hover:bg-brand-primary group-hover:text-white group-hover:ring-brand-primary motion-reduce:transition-none">
              <ArrowUpRight className="h-4 w-4" />
            </span>

            <div className="flex flex-col gap-2 p-6 sm:p-7">
              <h3 className="pr-10 text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">
                {win.title}
              </h3>
              <span className="sr-only">(opens in new tab)</span>
            </div>

            <div className="relative mt-auto w-full flex-1">
              <WinImage
                win={win}
                sizes="(max-width: 640px) 78vw, 21rem"
                className="transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-4 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => {
            if (!canPrev) return
            scrollByCards(-1)
          }}
          aria-disabled={!canPrev}
          aria-label="Previous campaigns"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary aria-disabled:cursor-not-allowed aria-disabled:opacity-30 aria-disabled:hover:border-slate-300 aria-disabled:hover:bg-transparent motion-reduce:transition-none"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => {
            if (!canNext) return
            scrollByCards(1)
          }}
          aria-disabled={!canNext}
          aria-label="Next campaigns"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary aria-disabled:cursor-not-allowed aria-disabled:opacity-30 aria-disabled:hover:border-slate-300 aria-disabled:hover:bg-transparent motion-reduce:transition-none"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
