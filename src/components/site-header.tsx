'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import {
  navEntries,
  type NavEntry,
  type NavMenu,
  isNavMenu,
} from '@/data/navigation'

type TriggerRefsMap = Map<string, HTMLButtonElement | null>
type ItemRefsMap = Map<string, Array<HTMLAnchorElement | null>>

type MenuFocusOptions = {
  focusIndex?: number
}

type TransitionState = 'idle' | 'enter' | 'exit'
type TransitionDirection = 'left' | 'right' | 'none'

type TransitionMenu = {
  menu: NavMenu
  id: string
  state: TransitionState
  direction: TransitionDirection
}

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function DesktopMenuTrigger({
  menu,
  isActive,
  onOpen,
  onTriggerEnter,
  onTriggerLeave,
  onScheduleClose,
  onKeyDown,
  onSafeLeave,
  triggerRefs,
  panelId,
}: {
  menu: NavMenu
  isActive: boolean
  onOpen: (
    menu: NavMenu,
    trigger: HTMLButtonElement | null,
    options?: MenuFocusOptions,
  ) => void
  onTriggerEnter: () => void
  onTriggerLeave: (event: React.MouseEvent<HTMLButtonElement>) => void
  onScheduleClose: () => void
  onKeyDown: (
    event: React.KeyboardEvent<HTMLButtonElement>,
    menu: NavMenu,
    trigger: HTMLButtonElement | null,
  ) => void
  onSafeLeave: (event: React.MouseEvent<HTMLButtonElement>) => void
  triggerRefs: React.MutableRefObject<TriggerRefsMap>
  panelId: string
}) {
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const map = triggerRefs.current
    map.set(menu.label, triggerRef.current)
    return () => {
      map.delete(menu.label)
    }
  }, [menu.label, triggerRefs])

  return (
    <div className="relative">
      <button
        type="button"
        ref={triggerRef}
        id={`${panelId}-${menu.label}-trigger`}
        aria-expanded={isActive}
        aria-haspopup="true"
        aria-controls={panelId}
        onMouseEnter={() => {
          onTriggerEnter()
          onOpen(menu, triggerRef.current)
        }}
        onMouseLeave={(event) => {
          onTriggerLeave(event)
          onSafeLeave(event)
        }}
        onFocus={() => onOpen(menu, triggerRef.current)}
        onClick={() => {
          if (isActive) {
            onScheduleClose()
          } else {
            onOpen(menu, triggerRef.current)
          }
        }}
        onKeyDown={(event) => onKeyDown(event, menu, triggerRef.current)}
        className={classNames(
          'inline-flex items-center gap-1 px-3 py-2 text-[0.95rem] font-medium transition-colors',
          isActive
            ? 'text-brand-primary'
            : 'text-slate-700 hover:text-brand-primary',
        )}
      >
        {menu.label}
        <svg
          className={classNames(
            'h-3 w-3 transition-transform',
            isActive && 'rotate-180 text-brand-primary',
          )}
          viewBox="0 0 8 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1 1.5L4 4.5L7 1.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

function MegaPanelColumns({
  menu,
  state,
  assignRefs,
  direction,
  itemRefs,
  onItemKeyDown,
  onNavigate,
  onItemEnter,
}: {
  menu: NavMenu
  state: 'idle' | 'enter' | 'exit'
  assignRefs: boolean
  direction: 'left' | 'right' | 'none'
  itemRefs: React.MutableRefObject<ItemRefsMap>
  onItemKeyDown: (
    event: React.KeyboardEvent<HTMLAnchorElement>,
    menuLabel: string,
    index: number,
    total: number,
  ) => void
  onNavigate: () => void
  onItemEnter?: () => void
}) {
  const [phase, setPhase] = useState<'from' | 'to' | 'exit'>(() =>
    state === 'enter' ? 'from' : 'to',
  )

  useEffect(() => {
    let frame: number | null = null
    if (state === 'enter') {
      setPhase('from')
      frame = requestAnimationFrame(() => setPhase('to'))
    } else if (state === 'exit') {
      setPhase('to')
      frame = requestAnimationFrame(() => setPhase('exit'))
    } else {
      setPhase('to')
    }

    return () => {
      if (frame !== null) {
        cancelAnimationFrame(frame)
      }
    }
  }, [state])

  const columnCount = Math.max(menu.columns.length, 1)
  const totalItems = menu.columns.reduce(
    (count, column) => count + column.items.length,
    0,
  )

  useEffect(() => {
    const refs = itemRefs.current.get(menu.label) ?? []
    if (refs.length !== totalItems) {
      refs.length = totalItems
      itemRefs.current.set(menu.label, refs)
    }
  }, [assignRefs, itemRefs, menu.label, totalItems])

  let itemCursor = -1

  const transform = (() => {
    if (phase === 'from') {
      if (direction === 'right') return 'translate3d(1.5rem, 0, 0)'
      if (direction === 'left') return 'translate3d(-1.5rem, 0, 0)'
      return 'translate3d(0, 0, 0)'
    }
    if (phase === 'exit') {
      if (direction === 'right') return 'translate3d(-1.5rem, 0, 0)'
      if (direction === 'left') return 'translate3d(1.5rem, 0, 0)'
      return 'translate3d(0, 0, 0)'
    }
    return 'translate3d(0, 0, 0)'
  })()

  return (
    <div
      className={classNames(
        'grid w-full gap-5 transition-all duration-200 ease-out',
        phase === 'from' && 'opacity-0',
        phase === 'to' && 'opacity-100',
        phase === 'exit' && 'opacity-0',
        state === 'exit' && 'pointer-events-none absolute inset-0',
      )}
      style={{
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
        transform,
      }}
    >
      {menu.columns.map((column) => (
        <div key={`${menu.label}-${column.title}`} className="stack stack-snug">
          <p className="eyebrow text-xs font-semibold text-brand-secondary/90">
            {column.title}
          </p>
          <ul className="stack-list-compact">
            {column.items.map((item) => {
              itemCursor += 1
              const currentIndex = itemCursor
              return (
                <li key={item.href}>
                  <Link
                    ref={
                      assignRefs
                        ? (el) => {
                            const refs = itemRefs.current.get(menu.label)
                            if (refs) {
                              refs[currentIndex] = el
                            }
                          }
                        : undefined
                    }
                    role="menuitem"
                    href={item.href}
                    onClick={onNavigate}
                    onMouseEnter={onItemEnter}
                    onKeyDown={(event) =>
                      onItemKeyDown(event, menu.label, currentIndex, totalItems)
                    }
                    className="group flex items-start justify-between gap-3 rounded-xl p-3 transition hover:bg-brand-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-slate-900 group-hover:text-brand-primary">
                        {item.label}
                      </span>
                      {item.description ? (
                        <span className="mt-1 block text-xs text-slate-500 group-hover:text-brand-primary/70">
                          {item.description}
                        </span>
                      ) : null}
                    </span>
                    <svg
                      className="mt-1 h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-brand-primary"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 4L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}

function DesktopMegaPanel({
  panelId,
  menu,
  isOpen,
  onMouseEnter,
  onSafeLeave,
  onNavigate,
  itemRefs,
  onItemKeyDown,
  activeMenuLabel,
  onPanelRef,
  onPanelEnter,
  onItemEnter,
}: {
  panelId: string
  menu: NavMenu | null
  isOpen: boolean
  onMouseEnter: () => void
  onSafeLeave: (event: React.MouseEvent<HTMLDivElement>) => void
  onNavigate: () => void
  itemRefs: React.MutableRefObject<ItemRefsMap>
  onItemKeyDown: (
    event: React.KeyboardEvent<HTMLAnchorElement>,
    menuLabel: string,
    index: number,
    total: number,
  ) => void
  activeMenuLabel: string | null
  onPanelRef: (element: HTMLDivElement | null) => void
  onPanelEnter: () => void
  onItemEnter?: () => void
}) {
  const panelRef = useRef<HTMLDivElement>(null)

  const TRANSITION_MS = 200
  const [transitionMenus, setTransitionMenus] = useState<TransitionMenu[]>([])
  const previousMenuLabelRef = useRef<string | null>(null)

  const getDirection = useCallback((nextLabel: string): TransitionDirection => {
    const previousLabel = previousMenuLabelRef.current
    if (!previousLabel || previousLabel === nextLabel) {
      return 'none'
    }

    const orderedMenus = navEntries.filter((entry): entry is NavMenu =>
      isNavMenu(entry),
    )

    const previousIndex = orderedMenus.findIndex(
      (entry) => entry.label === previousLabel,
    )
    const nextIndex = orderedMenus.findIndex(
      (entry) => entry.label === nextLabel,
    )

    if (previousIndex === -1 || nextIndex === -1) {
      return 'none'
    }

    return nextIndex > previousIndex ? 'right' : 'left'
  }, [])

  useEffect(() => {
    if (!menu) {
      setTransitionMenus([])
      return
    }

    setTransitionMenus((prev) => {
      const direction = getDirection(menu.label)
      const existing = prev.find((entry) => entry.menu.label === menu.label)

      if (existing) {
        return prev.map((entry) =>
          entry.menu.label === menu.label
            ? {
                ...entry,
                state:
                  entry.state === 'exit'
                    ? ('enter' as TransitionState)
                    : entry.state,
                direction,
              }
            : entry,
        )
      }

      const exiting = prev.map((entry) => ({
        ...entry,
        state: 'exit' as TransitionState,
        direction,
      }))

      return [
        ...exiting,
        {
          menu,
          id: `${menu.label}-${Date.now()}`,
          state: 'enter' as TransitionState,
          direction,
        },
      ]
    })

    previousMenuLabelRef.current = menu.label
  }, [getDirection, menu])

  useEffect(() => {
    if (!transitionMenus.some((entry) => entry.state === 'exit')) return
    const timeout = setTimeout(() => {
      setTransitionMenus((prev) =>
        prev.filter((entry) => entry.state !== 'exit'),
      )
    }, TRANSITION_MS)

    return () => clearTimeout(timeout)
  }, [transitionMenus])

  useEffect(() => {
    if (!transitionMenus.some((entry) => entry.state === 'enter')) return
    const timeout = setTimeout(() => {
      setTransitionMenus((prev) =>
        prev.map((entry) =>
          entry.state === 'enter'
            ? { ...entry, state: 'idle' as TransitionState }
            : entry,
        ),
      )
    }, TRANSITION_MS)

    return () => clearTimeout(timeout)
  }, [transitionMenus])

  const activeLabel = menu?.label ?? ''

  useEffect(() => {
    const node = panelRef.current
    onPanelRef(node)
    return () => {
      onPanelRef(null)
    }
  }, [onPanelRef])

  return (
    <div
      ref={panelRef}
      id={panelId}
      role="menu"
      aria-hidden={!isOpen}
      className={classNames(
        'absolute top-full z-[60] mt-3 w-full transition-all duration-150 ease-out',
        isOpen
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-2 opacity-0',
      )}
      onMouseEnter={() => {
        onMouseEnter()
        onPanelEnter()
      }}
      onMouseLeave={onSafeLeave}
    >
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_80px_-60px_rgba(15,23,42,0.55)]">
        <div className="relative" data-active-menu={activeMenuLabel}>
          {transitionMenus.map((entry) => (
            <MegaPanelColumns
              key={entry.id}
              menu={entry.menu}
              state={entry.state}
              assignRefs={
                entry.menu.label === activeLabel && entry.state !== 'exit'
              }
              direction={entry.direction}
              itemRefs={itemRefs}
              onItemKeyDown={onItemKeyDown}
              onNavigate={onNavigate}
              onItemEnter={onItemEnter}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function DesktopNav({ entries }: { entries: NavEntry[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeMenu, setActiveMenu] = useState<NavMenu | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const closeTimer = useRef<NodeJS.Timeout | null>(null)
  const pendingFocusIndex = useRef<number | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const triggerRefs = useRef<TriggerRefsMap>(new Map())
  const itemRefs = useRef<ItemRefsMap>(new Map())
  const panelId = useId()

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isOpen && pendingFocusIndex.current !== null) {
      pendingFocusIndex.current = null
    }
  }, [isOpen])

  const focusItem = useCallback((menuLabel: string, index: number) => {
    const refs = itemRefs.current.get(menuLabel)
    if (!refs) return
    const target = refs[index]
    if (target) {
      target.focus()
    }
  }, [])

  const focusTrigger = useCallback((menuLabel: string) => {
    const trigger = triggerRefs.current.get(menuLabel)
    trigger?.focus()
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
    }
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
    setActiveMenu(null)
  }, [])

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
    }
    closeTimer.current = setTimeout(() => {
      closeMenu()
    }, 90)
  }, [closeMenu])

  const isEventTargetWithinNav = useCallback((target: EventTarget | null) => {
    if (!target) return false
    if (!(target instanceof Node)) return false

    const container = containerRef.current
    const panel = panelRef.current

    return (
      (!!container && container.contains(target)) ||
      (!!panel && panel.contains(target))
    )
  }, [])

  const handleSafePointerLeave = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (isEventTargetWithinNav(event.relatedTarget)) {
        cancelClose()
        return
      }

      scheduleClose()
    },
    [cancelClose, isEventTargetWithinNav, scheduleClose],
  )

  const handleItemEnter = useCallback(() => {
    cancelClose()
  }, [cancelClose])

  const setPanelElement = useCallback((element: HTMLDivElement | null) => {
    panelRef.current = element
  }, [])

  const handlePanelEnter = useCallback(() => {
    cancelClose()
  }, [cancelClose])

  const handleTriggerEnter = useCallback(() => {
    cancelClose()
  }, [cancelClose])

  const handleTriggerLeave = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isEventTargetWithinNav(event.relatedTarget)) {
        cancelClose()
      } else {
        scheduleClose()
      }
    },
    [cancelClose, isEventTargetWithinNav, scheduleClose],
  )

  const openMenu = useCallback(
    (
      menu: NavMenu,
      trigger: HTMLButtonElement | null,
      options?: MenuFocusOptions,
    ) => {
      cancelClose()
      setActiveMenu(menu)
      setIsOpen(true)
      if (options?.focusIndex !== undefined) {
        pendingFocusIndex.current = options.focusIndex
      }
    },
    [cancelClose],
  )

  useEffect(() => {
    if (pendingFocusIndex.current !== null && activeMenu) {
      const index = pendingFocusIndex.current
      pendingFocusIndex.current = null
      requestAnimationFrame(() => {
        focusItem(activeMenu.label, index)
      })
    }
  }, [activeMenu, focusItem])

  const handleTriggerKeyDown = useCallback(
    (
      event: React.KeyboardEvent<HTMLButtonElement>,
      menu: NavMenu,
      trigger: HTMLButtonElement | null,
    ) => {
      const totalItems = menu.columns.reduce(
        (count, column) => count + column.items.length,
        0,
      )

      if (event.key === 'Escape') {
        event.preventDefault()
        closeMenu()
        focusTrigger(menu.label)
        return
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        openMenu(menu, trigger, { focusIndex: 0 })
        return
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()
        openMenu(menu, trigger, { focusIndex: totalItems - 1 })
        return
      }

      if (event.key === 'Home') {
        event.preventDefault()
        openMenu(menu, trigger, { focusIndex: 0 })
        return
      }

      if (event.key === 'End') {
        event.preventDefault()
        openMenu(menu, trigger, { focusIndex: totalItems - 1 })
      }
    },
    [closeMenu, focusTrigger, openMenu],
  )

  const handleItemKeyDown = useCallback(
    (
      event: React.KeyboardEvent<HTMLAnchorElement>,
      menuLabel: string,
      index: number,
      total: number,
    ) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeMenu()
        focusTrigger(menuLabel)
        return
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        const next = (index + 1) % total
        focusItem(menuLabel, next)
        return
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()
        const prev = (index - 1 + total) % total
        focusItem(menuLabel, prev)
        return
      }

      if (event.key === 'Home') {
        event.preventDefault()
        focusItem(menuLabel, 0)
        return
      }

      if (event.key === 'End') {
        event.preventDefault()
        focusItem(menuLabel, total - 1)
      }
    },
    [closeMenu, focusItem, focusTrigger],
  )

  return (
    <div
      ref={containerRef}
      className="relative flex items-center gap-4"
      onMouseEnter={cancelClose}
      onMouseLeave={handleSafePointerLeave}
    >
      {entries.map((entry) => {
        if (isNavMenu(entry)) {
          return (
            <DesktopMenuTrigger
              key={entry.label}
              menu={entry}
              isActive={isOpen && activeMenu?.label === entry.label}
              onOpen={openMenu}
              onScheduleClose={() => {
                cancelClose()
                scheduleClose()
              }}
              onTriggerEnter={handleTriggerEnter}
              onTriggerLeave={handleTriggerLeave}
              onKeyDown={handleTriggerKeyDown}
              onSafeLeave={handleSafePointerLeave}
              triggerRefs={triggerRefs}
              panelId={panelId}
            />
          )
        }

        return (
          <Link
            key={entry.label}
            href={entry.href}
            className="px-3 py-2 text-[0.95rem] font-medium text-slate-700 transition-colors hover:text-brand-primary"
          >
            {entry.label}
          </Link>
        )
      })}
      <DesktopMegaPanel
        panelId={panelId}
        menu={activeMenu}
        isOpen={isOpen && !!activeMenu}
        onMouseEnter={cancelClose}
        onSafeLeave={handleSafePointerLeave}
        onNavigate={closeMenu}
        itemRefs={itemRefs}
        onItemKeyDown={handleItemKeyDown}
        activeMenuLabel={activeMenu?.label ?? null}
        onPanelRef={setPanelElement}
        onPanelEnter={handlePanelEnter}
        onItemEnter={handleItemEnter}
      />
    </div>
  )
}

function MobileNav({
  entries,
  open,
  onClose,
}: {
  entries: NavEntry[]
  open: boolean
  onClose: () => void
}) {
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set())

  useEffect(() => {
    if (!open) {
      setExpandedMenus(new Set())
    }
  }, [open])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = originalOverflow
    }
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [open])

  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) => {
      const next = new Set(prev)
      if (next.has(label)) {
        next.delete(label)
      } else {
        next.add(label)
      }
      return next
    })
  }

  return (
    <div
      aria-hidden={!open}
      className={classNames(
        'fixed inset-0 z-[70] flex flex-col bg-white transition-opacity duration-400 ease-out lg:hidden',
        open
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0',
      )}
    >
      {/* Header */}
      <div className="page-container flex items-center justify-between gap-4 py-3">
        <Link href="/" onClick={onClose} className="flex items-center gap-4">
          <div className="relative h-11 w-11 overflow-hidden rounded-full shadow-[0_4px_12px_-4px_rgba(96,55,157,0.25)]">
            <Image
              src="/purple-logo.png"
              alt="Campus Climate Network logo"
              fill
              sizes="44px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="-mr-2 rounded-full p-2 text-slate-400 transition hover:text-slate-600 focus-visible:outline-none"
          aria-label="Close navigation"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6L18 18M6 18L18 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Navigation content */}
      <nav className="page-container flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {entries.map((entry, index) => {
            if (isNavMenu(entry)) {
              const isExpanded = expandedMenus.has(entry.label)
              const menuItems = entry.columns.flatMap((col) => col.items)

              return (
                <li
                  key={entry.label}
                  style={{
                    animationDelay: open ? `${index * 60}ms` : '0ms',
                  }}
                  className={classNames(open && 'animate-fade-in-up')}
                >
                  <button
                    type="button"
                    onClick={() => toggleMenu(entry.label)}
                    aria-expanded={isExpanded}
                    className="flex w-full items-center justify-between gap-4 py-2 text-left text-[1.75rem] font-semibold text-slate-900 transition hover:text-brand-primary"
                  >
                    {entry.label}
                    <svg
                      className={classNames(
                        'h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300',
                        isExpanded && 'rotate-180',
                      )}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={classNames(
                      'grid transition-all duration-300 ease-out',
                      isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-1 pb-2 pl-4 pt-1">
                        {menuItems.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className="block py-2 transition hover:text-brand-primary"
                            >
                              <span className="block text-lg font-medium text-slate-700">
                                {item.label}
                              </span>
                              {item.description && (
                                <span className="mt-0.5 block text-sm text-slate-500">
                                  {item.description}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              )
            }

            return (
              <li
                key={entry.label}
                style={{
                  animationDelay: open ? `${index * 60}ms` : '0ms',
                }}
                className={classNames(open && 'animate-fade-in-up')}
              >
                <Link
                  href={entry.href}
                  onClick={onClose}
                  className="block py-2 text-[1.75rem] font-semibold text-slate-900 transition hover:text-brand-primary"
                >
                  {entry.label}
                </Link>
              </li>
            )
          })}
          <li
            style={{
              animationDelay: open ? `${entries.length * 60}ms` : '0ms',
            }}
            className={classNames(open && 'animate-fade-in-up')}
          >
            <Link
              href="/take-action"
              onClick={onClose}
              className="block py-2 text-[1.75rem] font-semibold text-brand-primary transition hover:text-brand-secondary"
            >
              Get involved
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Use hysteresis to prevent rapid toggling at the threshold
      // This avoids the "shaking" effect from layout changes affecting scroll position
      const scrollY = window.scrollY
      setScrolled((prev) => {
        if (prev) {
          // Already scrolled: only un-scroll if we go back above threshold
          return scrollY > 4
        } else {
          // Not scrolled: only become scrolled if we pass higher threshold
          return scrollY > 20
        }
      })
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <header
        className={classNames(
          'sticky top-0 z-50 border-b border-slate-200/40 py-3 lg:py-5 transition-all duration-200',
          scrolled
            ? 'bg-white/80 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.35)] backdrop-blur supports-[backdrop-filter]:bg-white/70'
            : 'bg-white/95 backdrop-blur',
        )}
      >
        <div className="page-container flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-4">
            <div className="relative h-11 w-11 overflow-hidden rounded-full shadow-[0_4px_12px_-4px_rgba(96,55,157,0.25)]">
              <Image
                src="/purple-logo.png"
                alt="Campus Climate Network logo"
                fill
                priority
                sizes="44px"
                className="object-contain"
              />
            </div>
            <div className="hidden text-brand-primary sm:block">
              <p className="font-display text-xs uppercase leading-tight tracking-[0.4em]">
                Campus
              </p>
              <p className="font-display text-xs uppercase leading-tight tracking-[0.4em]">
                Climate
              </p>
              <p className="font-display text-xs uppercase leading-tight tracking-[0.4em]">
                Network
              </p>
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="-mr-2 rounded-full p-2 text-slate-500 transition hover:text-brand-primary focus-visible:outline-none lg:hidden"
            aria-label="Open navigation"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5.5H17M3 10H17M3 14.5H17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <nav className="hidden items-center gap-4 lg:flex">
            <DesktopNav entries={navEntries} />
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/take-action"
              className="inline-flex items-center rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_40px_-20px_rgba(96,55,157,0.8)] transition hover:bg-brand-secondary"
            >
              Get involved
            </Link>
          </div>
        </div>
      </header>
      {mounted
        ? createPortal(
            <MobileNav
              entries={navEntries}
              open={mobileOpen}
              onClose={() => setMobileOpen(false)}
            />,
            document.body,
          )
        : null}
    </>
  )
}
