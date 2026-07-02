'use client'

import Link from 'next/link'
import { useCallback, useRef, type ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const CONFETTI_COLORS = ['#e8bf43', '#73bcf0', '#a474e1', '#fff4eb', '#4f72ca']
const CONFETTI_PIECES = 18

/**
 * Next Link that fires a small confetti burst from its center on hover/click.
 * Pieces are plain spans animated by the `.confetti-piece` CSS in globals.css,
 * so there is no animation work at all until the user interacts.
 */
export function ConfettiLink({
  className,
  children,
  onMouseEnter,
  onClick,
  ...props
}: ComponentProps<typeof Link>) {
  const hostRef = useRef<HTMLSpanElement>(null)
  const lastBurstRef = useRef(0)

  const burst = useCallback(() => {
    const host = hostRef.current
    if (!host) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const now = Date.now()
    if (now - lastBurstRef.current < 700) return
    lastBurstRef.current = now

    for (let i = 0; i < CONFETTI_PIECES; i++) {
      const piece = document.createElement('span')
      piece.className = 'confetti-piece'
      const angle = (i / CONFETTI_PIECES) * Math.PI * 2 + Math.random() * 0.6
      const distance = 44 + Math.random() * 72
      piece.style.setProperty('--confetti-x', `${Math.cos(angle) * distance}px`)
      piece.style.setProperty(
        '--confetti-y',
        `${Math.sin(angle) * distance * 0.8 - 24}px`,
      )
      piece.style.setProperty('--confetti-r', `${Math.random() * 540 - 270}deg`)
      piece.style.backgroundColor = CONFETTI_COLORS[i % CONFETTI_COLORS.length]
      piece.style.animationDelay = `${Math.random() * 90}ms`
      if (i % 3 === 0) piece.style.borderRadius = '9999px'
      piece.addEventListener('animationend', () => piece.remove())
      host.appendChild(piece)
    }
  }, [])

  return (
    <Link
      {...props}
      className={cn('relative', className)}
      onMouseEnter={(event) => {
        burst()
        onMouseEnter?.(event)
      }}
      onClick={(event) => {
        burst()
        onClick?.(event)
      }}
    >
      {children}
      <span
        ref={hostRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      />
    </Link>
  )
}
