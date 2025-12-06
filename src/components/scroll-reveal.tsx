'use client'

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ElementType,
} from 'react'

type RevealVariant = 'blossom' | 'fade-up' | 'fade' | 'scale'

interface ScrollRevealProps {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  as?: ElementType
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
  const ref = useRef<HTMLDivElement>(null)
  // Start as null - we don't know if we need to animate yet
  const [animationState, setAnimationState] = useState<
    'idle' | 'will-animate' | 'visible'
  >('idle')

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0

    if (isInViewport) {
      // Already in viewport - just show it immediately, no animation needed
      setAnimationState('visible')
      return
    }

    // Not in viewport - set up animation
    setAnimationState('will-animate')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationState('visible')
          observer.unobserve(element)
        }
      },
      { threshold: Math.min(threshold, 0.1), rootMargin: '50px 0px 0px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  const variantClass = `scroll-reveal-${variant}`
  const stateClasses =
    animationState === 'will-animate'
      ? 'will-animate'
      : animationState === 'visible'
        ? 'is-visible'
        : ''

  return (
    <Component
      ref={ref as React.Ref<unknown>}
      className={`${variantClass} ${stateClasses} ${className}`}
      style={
        {
          '--reveal-delay': `${delay}ms`,
          '--reveal-duration': `${duration}ms`,
        } as React.CSSProperties
      }
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
  const [animationState, setAnimationState] = useState<
    'idle' | 'will-animate' | 'visible'
  >('idle')

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0

    if (isInViewport) {
      setAnimationState('visible')
      return
    }

    setAnimationState('will-animate')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationState('visible')
          observer.unobserve(element)
        }
      },
      { threshold: Math.min(threshold, 0.1), rootMargin: '50px 0px 0px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  const variantClass = `scroll-reveal-${variant}`
  const stateClasses =
    animationState === 'will-animate'
      ? 'will-animate'
      : animationState === 'visible'
        ? 'is-visible'
        : ''

  // Convert children to array safely using React.Children
  const childArray = Array.isArray(children)
    ? children
    : children != null
      ? [children]
      : []

  return (
    <div ref={ref} className={className}>
      {childArray.map((child, index) => (
        <div
          key={index}
          className={`${variantClass} ${stateClasses} ${childClassName}`}
          style={
            {
              '--reveal-delay': `${index * staggerDelay}ms`,
              '--reveal-duration': `${duration}ms`,
            } as React.CSSProperties
          }
        >
          {child}
        </div>
      ))}
    </div>
  )
}
