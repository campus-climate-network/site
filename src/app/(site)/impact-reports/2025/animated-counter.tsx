'use client'

import { useEffect, useRef, useState } from 'react'

type AnimatedCounterProps = {
  value: number
  suffix?: string
  durationMs?: number
}

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3)
}

export function AnimatedCounter({
  value,
  suffix = '',
  durationMs = 1200,
}: AnimatedCounterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const frameRef = useRef<number | null>(null)
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    const stopAnimation = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }

    const startAnimation = () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      if (prefersReducedMotion || durationMs <= 0) {
        setDisplayValue(value)
        return
      }

      setDisplayValue(0)
      const startedAt = performance.now()

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / durationMs, 1)
        const easedProgress = easeOutCubic(progress)
        setDisplayValue(Math.round(value * easedProgress))

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick)
        } else {
          frameRef.current = null
        }
      }

      frameRef.current = requestAnimationFrame(tick)
    }

    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting)
        if (!isVisible) return

        observer.disconnect()
        startAnimation()
      },
      { threshold: 0.4 },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      stopAnimation()
    }
  }, [durationMs, value])

  return (
    <span ref={elementRef}>
      {displayValue}
      {suffix}
    </span>
  )
}
