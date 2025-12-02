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

export function Timeline({ items }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(items.length).fill(false)
  )
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const containerTop = rect.top
      const containerHeight = rect.height

      // Calculate progress based on how much of the timeline is visible
      const start = windowHeight * 0.6 // Start when container is 60% from top
      const end = -containerHeight + windowHeight * 0.4 // End when container is mostly past

      if (containerTop > start) {
        setProgress(0)
      } else if (containerTop < end) {
        setProgress(100)
      } else {
        const scrolled = start - containerTop
        const total = start - end
        setProgress(Math.min(100, Math.max(0, (scrolled / total) * 100)))
      }
    }

    // Intersection observer for individual items
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
        { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
      )
      observer.observe(item)
      observers.push(observer)
    })

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

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
        <div
          className="timeline-track-progress"
          style={{ height: `${progress}%` }}
        />
      </div>

      {/* Timeline items */}
      <div className="timeline-items">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el
            }}
            className={`timeline-item ${visibleItems[index] ? 'is-visible' : ''}`}
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




