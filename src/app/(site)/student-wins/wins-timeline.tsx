'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface MovementWin {
  _id: string
  title: string
  date: string
  description?: string
  category?: string
  link?: string
  memberOrg: {
    _id: string
    name: string
    logoUrl?: string
  }
}

interface WinsTimelineProps {
  wins: MovementWin[]
  categoryLabels: Record<string, string>
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}

export function WinsTimeline({ wins, categoryLabels }: WinsTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(wins.length).fill(false),
  )
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const container = containerRef.current
    const progressBar = progressRef.current
    if (!container || !progressBar) return

    const updateProgress = () => {
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const containerTop = rect.top
      const containerHeight = rect.height

      const start = windowHeight * 0.6
      const end = -containerHeight + windowHeight * 0.4

      let progress: number
      if (containerTop > start) {
        progress = 0
      } else if (containerTop < end) {
        progress = 100
      } else {
        const scrolled = start - containerTop
        const total = start - end
        progress = Math.min(100, Math.max(0, (scrolled / total) * 100))
      }

      progressBar.style.height = `${progress}%`
    }

    const handleScroll = () => {
      requestAnimationFrame(updateProgress)
    }

    const observers: IntersectionObserver[] = []
    itemRefs.current.forEach((item, index) => {
      if (!item) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
            observer.unobserve(item)
          }
        },
        { threshold: 0.2, rootMargin: '0px 0px -100px 0px' },
      )
      observer.observe(item)
      observers.push(observer)
    })

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateProgress()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observers.forEach((obs) => obs.disconnect())
    }
  }, [wins.length])

  return (
    <div ref={containerRef} className="timeline-container">
      <div className="timeline-track">
        <div className="timeline-track-bg" />
        <div ref={progressRef} className="timeline-track-progress" />
      </div>

      <div className="timeline-items">
        {wins.map((win, index) => (
          <div
            key={win._id}
            ref={(el) => {
              itemRefs.current[index] = el
            }}
            className={`timeline-item ${visibleItems[index] ? 'is-visible' : ''}`}
            style={{ '--item-delay': `${index * 50}ms` } as React.CSSProperties}
          >
            <div className="timeline-dot">
              <div className="timeline-dot-inner" />
              <div className="timeline-dot-pulse" />
            </div>

            <div className="timeline-content !p-4 sm:!p-5">
              <div className="flex items-start gap-4">
                {/* Logo */}
                {win.memberOrg.logoUrl ? (
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-white shadow-sm">
                    <Image
                      src={win.memberOrg.logoUrl}
                      alt={`${win.memberOrg.name} logo`}
                      fill
                      className="object-contain p-1"
                      sizes="48px"
                    />
                  </div>
                ) : (
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 shadow-sm">
                    <span className="text-lg font-bold text-brand-primary">
                      {win.memberOrg.name.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-medium text-slate-500">
                      {formatDate(win.date)}
                    </span>
                    {win.category && (
                      <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-2 py-0.5 text-[10px] font-medium text-brand-primary">
                        {categoryLabels[win.category] || win.category}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                    <span className="text-brand-primary">
                      {win.memberOrg.name}
                    </span>{' '}
                    {win.title.replace(win.memberOrg.name, '').trim()}
                  </h3>
                  {win.link && (
                    <a
                      href={win.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-1 text-xs font-medium text-brand-secondary hover:underline"
                    >
                      Read more →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
