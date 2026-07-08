'use client'

import Image from 'next/image'
import { useState } from 'react'

type HeroPhoto = {
  image: string
  alt: string
}

type HeroCarouselProps = {
  photos: HeroPhoto[]
}

export function HeroCarousel({ photos }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0)
  const count = photos.length

  const goTo = (index: number) => {
    setCurrent((index + count) % count)
  }

  const next = () => goTo(current + 1)
  const previous = () => goTo(current - 1)

  const activePhoto = photos[current]

  const firstPhoto = photos[0]

  return (
    <>
      {/* Mobile: Single static image */}
      <div className="md:hidden">
        <div className="overflow-hidden rounded-3xl border border-white/20">
          <div className="relative aspect-4/3">
            <Image
              src={firstPhoto.image}
              alt={firstPhoto.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Desktop: Full carousel */}
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label="Photo highlights"
        className="relative hidden md:block"
      >
        <div className="overflow-hidden rounded-3xl border border-white/20">
          <div className="relative aspect-4/3">
            <Image
              key={activePhoto.image}
              src={activePhoto.image}
              alt={activePhoto.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4">
          <button
            type="button"
            onClick={previous}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:bg-white"
            aria-label="Previous photo"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="M12.5 5L7.5 10L12.5 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="flex items-center gap-1">
            {photos.map((photo, index) => (
              <button
                key={photo.image}
                type="button"
                onClick={() => goTo(index)}
                className="group flex h-6 w-6 items-center justify-center"
                aria-label={`View photo ${index + 1}`}
                aria-current={current === index}
              >
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 rounded-full ring-1 ring-black/25 transition ${
                    current === index
                      ? 'bg-white'
                      : 'bg-white/50 group-hover:bg-white/70'
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:bg-white"
            aria-label="Next photo"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <p aria-live="polite" className="sr-only">
          Slide {current + 1} of {count}
        </p>
      </div>
    </>
  )
}
