'use client'

import { useEffect, useRef, useState } from 'react'

interface TimelineItem {
  date: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

// Progressive enhancement (mirrors ScrollReveal): items render visible by
// default; JS adds 'will-animate' (which hides) only to items confirmed to be
// outside the viewport, then flips them to 'visible' on intersection.
type ItemState = 'idle' | 'will-animate' | 'visible'

export function Timeline({ items }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [itemStates, setItemStates] = useState<ItemState[]>(
    new Array(items.length).fill('idle'),
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

      // Calculate progress based on how much of the timeline is visible
      const start = windowHeight * 0.6 // Start when container is 60% from top
      const end = -containerHeight + windowHeight * 0.4 // End when container is mostly past

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

      // Direct DOM manipulation for smooth animation
      progressBar.style.height = `${progress}%`
    }

    const handleScroll = () => {
      requestAnimationFrame(updateProgress)
    }

    const setItemState = (index: number, state: ItemState) => {
      setItemStates((prev) => {
        if (prev[index] === state) return prev
        const next = [...prev]
        next[index] = state
        return next
      })
    }

    // Intersection observer for individual items
    const observers: IntersectionObserver[] = []
    itemRefs.current.forEach((item, index) => {
      if (!item) return

      const rect = item.getBoundingClientRect()
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
      if (isInViewport) {
        // Already in viewport - show immediately, no animation needed
        setItemState(index, 'visible')
        return
      }

      // Not in viewport - hide and set up the reveal animation
      setItemState(index, 'will-animate')

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setItemState(index, 'visible')
            observer.unobserve(item)
          }
        },
        { threshold: 0.2, rootMargin: '0px 0px -100px 0px' },
      )
      observer.observe(item)
      observers.push(observer)
    })

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateProgress() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observers.forEach((obs) => obs.disconnect())
    }
  }, [items.length])

  return (
    <div ref={containerRef} className="timeline-container">
      {/* The vertical line */}
      <div className="timeline-track">
        <div className="timeline-track-bg" />
        <div ref={progressRef} className="timeline-track-progress" />
      </div>

      {/* Timeline items */}
      <div className="timeline-items">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el
            }}
            className={`timeline-item ${
              itemStates[index] === 'will-animate'
                ? 'will-animate'
                : itemStates[index] === 'visible'
                  ? 'is-visible'
                  : ''
            }`}
            style={{ '--item-delay': `${index * 50}ms` } as React.CSSProperties}
          >
            {/* Connector dot */}
            <div className="timeline-dot">
              <div className="timeline-dot-inner" />
              <div className="timeline-dot-pulse" />
            </div>

            {/* Content card */}
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
