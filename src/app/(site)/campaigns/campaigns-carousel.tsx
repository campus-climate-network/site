'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { WinImage, WinModal, type StudentWin } from '../impact/wins-showcase'

const CARD_GAP = 20 // matches the `gap-5` on the scroller

export function CampaignsCarousel({ campaigns }: { campaigns: StudentWin[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [activeId, setActiveId] = useState<string | null>(null)
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
    el.scrollBy({ left: amount * direction, behavior: 'smooth' })
  }, [])

  const close = useCallback(() => setActiveId(null), [])
  const activeWin = campaigns.find((campaign) => campaign.id === activeId)

  if (campaigns.length === 0) return null

  return (
    <div>
      <div
        ref={scrollerRef}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {campaigns.map((win) => (
          <button
            key={win.id}
            data-card
            type="button"
            onClick={() => setActiveId(win.id)}
            aria-haspopup="dialog"
            className="group relative flex h-[26rem] w-[78vw] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:h-[30rem] sm:w-[20rem] lg:w-[21.5rem]"
          >
            <div className="flex flex-col gap-2 p-6 sm:p-7">
              {win.campaign && (
                <span className="eyebrow text-[11px] font-semibold text-brand-secondary">
                  {win.campaign}
                </span>
              )}
              <h3 className="text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">
                {win.title}
              </h3>
              <span className="text-sm text-slate-500">{win.org}</span>
            </div>

            <div className="relative mt-auto w-full flex-1">
              <WinImage
                win={win}
                sizes="(max-width: 640px) 78vw, 21rem"
                className="transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          disabled={!canPrev}
          aria-label="Previous campaigns"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent motion-reduce:transition-none"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCards(1)}
          disabled={!canNext}
          aria-label="Next campaigns"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent motion-reduce:transition-none"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {activeWin && <WinModal win={activeWin} onClose={close} />}
    </div>
  )
}
