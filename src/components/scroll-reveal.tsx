'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealVariant = 'blossom' | 'fade-up' | 'fade' | 'scale'

interface ScrollRevealProps {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function ScrollReveal({
  children,
  variant = 'blossom',
  delay = 0,
  duration = 600,
  threshold = 0.15,
  className = '',
  as: Component = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  const variantClass = `scroll-reveal-${variant}`

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${variantClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{
        '--reveal-delay': `${delay}ms`,
        '--reveal-duration': `${duration}ms`,
      } as React.CSSProperties}
    >
      {children}
    </Component>
  )
}

interface StaggerRevealProps {
  children: ReactNode
  staggerDelay?: number
  variant?: RevealVariant
  duration?: number
  threshold?: number
  className?: string
  childClassName?: string
}

export function StaggerReveal({
  children,
  staggerDelay = 100,
  variant = 'blossom',
  duration = 600,
  threshold = 0.1,
  className = '',
  childClassName = '',
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  const variantClass = `scroll-reveal-${variant}`

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={`${variantClass} ${isVisible ? 'is-visible' : ''} ${childClassName}`}
              style={{
                '--reveal-delay': `${index * staggerDelay}ms`,
                '--reveal-duration': `${duration}ms`,
              } as React.CSSProperties}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}


