'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import Link from 'next/link'
import Map, {
  Marker,
  Popup,
  NavigationControl,
  type MapRef,
} from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

export interface MemberOrg {
  _id: string
  name: string
  university: string
  address: string
  location?: string
  coordinates?: {
    lat: number
    lng: number
  }
  website?: string
  instagram?: string
  description?: string
  region?: string
  logoUrl?: string
}

interface MemberMapProps {
  members: MemberOrg[]
  compact?: boolean
}

// Geocoding cache persists across renders
const geocodeCache: Record<string, { lat: number; lng: number } | null> = {}

async function geocodeAddress(
  address: string,
): Promise<{ lat: number; lng: number } | null> {
  if (geocodeCache[address] !== undefined) {
    return geocodeCache[address]
  }

  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${MAPBOX_TOKEN}&limit=1`,
    )
    const data = await response.json()

    if (data.features && data.features.length > 0) {
      const [lng, lat] = data.features[0].center
      const coords = { lat, lng }
      geocodeCache[address] = coords
      return coords
    }
  } catch (error) {
    console.error('Geocoding error for:', address, error)
  }

  geocodeCache[address] = null
  return null
}

// Get initial zoom based on screen width (mobile needs more zoomed out view)
function getInitialZoom(): number {
  if (typeof window === 'undefined') return 3.5
  return window.innerWidth < 768 ? 2.2 : 3.5
}

export default function MemberMap({
  members: initialMembers,
  compact = false,
}: MemberMapProps) {
  const mapRef = useRef<MapRef>(null)
  const [members, setMembers] =
    useState<(MemberOrg & { resolvedCoords?: { lat: number; lng: number } })[]>(
      initialMembers,
    )
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState({ current: 0, total: 0 })
  const [selectedMember, setSelectedMember] = useState<MemberOrg | null>(null)
  const [popupInfo, setPopupInfo] = useState<MemberOrg | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [initialZoom] = useState(getInitialZoom)

  // Geocode members that don&apos;t have coordinates
  useEffect(() => {
    async function geocodeMissingCoords() {
      const needsGeocoding = initialMembers.filter((m) => !m.coordinates)

      if (needsGeocoding.length === 0) {
        setMembers(initialMembers)
        return
      }

      setLoading(true)
      setProgress({ current: 0, total: needsGeocoding.length })

      const updatedMembers: (MemberOrg & {
        resolvedCoords?: { lat: number; lng: number }
      })[] = [...initialMembers]
      const batchSize = 10
      const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms))

      let geocoded = 0
      for (let i = 0; i < needsGeocoding.length; i += batchSize) {
        const batch = needsGeocoding.slice(i, i + batchSize)
        await Promise.all(
          batch.map(async (member) => {
            const coords = await geocodeAddress(member.address)
            const idx = updatedMembers.findIndex((m) => m._id === member._id)
            if (idx !== -1 && coords) {
              updatedMembers[idx] = {
                ...updatedMembers[idx],
                resolvedCoords: coords,
              }
            }
            geocoded++
            setProgress({ current: geocoded, total: needsGeocoding.length })
          }),
        )
        setMembers([...updatedMembers])
        if (i + batchSize < needsGeocoding.length) {
          await delay(200)
        }
      }

      setLoading(false)
    }

    geocodeMissingCoords()
  }, [initialMembers])

  const getCoords = (
    member: MemberOrg & { resolvedCoords?: { lat: number; lng: number } },
  ) => {
    return member.coordinates || member.resolvedCoords
  }

  const flyToMember = useCallback(
    (member: MemberOrg & { resolvedCoords?: { lat: number; lng: number } }) => {
      const coords = getCoords(member)
      if (coords && mapRef.current) {
        mapRef.current.flyTo({
          center: [coords.lng, coords.lat],
          zoom: 12,
          duration: 1500,
        })
        setPopupInfo(member)
        setSelectedMember(member)
      }
    },
    [],
  )

  const fitAllMarkers = useCallback(() => {
    if (!mapRef.current) return
    const validMembers = members.filter((m) => getCoords(m))
    if (validMembers.length === 0) return

    const bounds = validMembers.reduce(
      (acc, member) => {
        const coords = getCoords(member)!
        return {
          minLng: Math.min(acc.minLng, coords.lng),
          maxLng: Math.max(acc.maxLng, coords.lng),
          minLat: Math.min(acc.minLat, coords.lat),
          maxLat: Math.max(acc.maxLat, coords.lat),
        }
      },
      { minLng: 180, maxLng: -180, minLat: 90, maxLat: -90 },
    )

    mapRef.current.fitBounds(
      [
        [bounds.minLng, bounds.minLat],
        [bounds.maxLng, bounds.maxLat],
      ],
      { padding: 60, duration: 1000 },
    )
    setPopupInfo(null)
  }, [members])

  const mappedMembers = members.filter((m) => getCoords(m))
  const filteredMembers = members.filter(
    (m) =>
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (m.location?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false),
  )

  if (!MAPBOX_TOKEN) {
    return (
      <div className="flex h-[600px] items-center justify-center bg-slate-100 p-8">
        <div className="max-w-md text-center">
          <h3 className="text-lg font-semibold text-slate-900">
            Mapbox Token Required
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Add your Mapbox access token to{' '}
            <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">
              NEXT_PUBLIC_MAPBOX_TOKEN
            </code>{' '}
            in your environment variables.
          </p>
        </div>
      </div>
    )
  }

  // Show empty state if no members from Sanity yet
  if (initialMembers.length === 0) {
    return (
      <div className="flex h-[600px] items-center justify-center bg-slate-50 p-8">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary/10">
            <svg
              className="h-8 w-8 text-brand-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-900">
            No Member Organizations Yet
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Add member organizations in Sanity Studio to see them on the map.
          </p>
          <Link
            href="/studio/structure/memberOrg"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-secondary"
          >
            Open Sanity Studio
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-white/90 backdrop-blur-sm">
          <div className="text-center">
            <div className="relative mx-auto h-16 w-16">
              <div className="absolute inset-0 rounded-full border-4 border-brand-primary/20" />
              <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-brand-primary" />
            </div>
            <p className="mt-4 text-sm font-medium text-slate-700">
              Geocoding addresses...
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {progress.current} of {progress.total}
            </p>
            <div className="mx-auto mt-3 h-1.5 w-48 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-300"
                style={{
                  width: `${progress.total ? (progress.current / progress.total) * 100 : 0}%`,
                }}
              />
            </div>
          </div>
        </div>
      )}

      <div
        className={`flex flex-col lg:flex-row ${compact ? 'h-auto lg:h-[500px]' : 'h-auto lg:h-[700px]'}`}
      >
        {/* Map */}
        <div
          className={`relative min-w-0 lg:flex-1 lg:h-full ${compact ? 'h-[250px] sm:h-[320px]' : 'h-[300px] sm:h-[400px]'}`}
        >
          <Map
            ref={mapRef}
            initialViewState={{
              latitude: 39.8283,
              longitude: -98.5795,
              zoom: initialZoom,
            }}
            style={{ width: '100%', height: '100%' }}
            mapStyle="mapbox://styles/mapbox/light-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
            onClick={() => setPopupInfo(null)}
          >
            <NavigationControl position="top-right" />

            {mappedMembers.map((member) => {
              const coords = getCoords(member)!
              const isSelected = selectedMember?._id === member._id
              return (
                <Marker
                  key={member._id}
                  latitude={coords.lat}
                  longitude={coords.lng}
                  anchor="bottom"
                  onClick={(e) => {
                    e.originalEvent.stopPropagation()
                    setPopupInfo(member)
                    setSelectedMember(member)
                  }}
                >
                  <div
                    className={`cursor-pointer transition-all duration-200 ${
                      isSelected ? 'z-10 scale-125' : 'hover:scale-110'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className={`h-8 w-8 drop-shadow-lg transition-colors ${
                        isSelected ? 'fill-brand-accent' : 'fill-brand-primary'
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Marker>
              )
            })}

            {popupInfo && getCoords(popupInfo) && (
              <Popup
                latitude={getCoords(popupInfo)!.lat}
                longitude={getCoords(popupInfo)!.lng}
                anchor="top"
                onClose={() => setPopupInfo(null)}
                closeButton={true}
                closeOnClick={false}
                offset={[0, -8]}
              >
                <div className="min-w-[220px] max-w-[280px]">
                  <h3 className="font-semibold leading-tight text-brand-primary">
                    {popupInfo.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {popupInfo.university}
                  </p>
                  {popupInfo.location && (
                    <p className="mt-1 text-xs text-slate-500">
                      📍 {popupInfo.location}
                    </p>
                  )}
                  {popupInfo.description && (
                    <p className="mt-2 text-xs text-slate-600 line-clamp-2">
                      {popupInfo.description}
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {popupInfo.website && (
                      <a
                        href={popupInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-primary transition hover:bg-brand-primary/20"
                      >
                        Website
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    {popupInfo.instagram && (
                      <a
                        href={popupInfo.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-600 transition hover:bg-pink-200"
                      >
                        Instagram
                      </a>
                    )}
                  </div>
                </div>
              </Popup>
            )}
          </Map>

          {/* Map controls overlay */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            <button
              onClick={fitAllMarkers}
              className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-lg transition hover:bg-slate-50"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
              View all
            </button>
          </div>

          {/* Stats badge */}
          <div className="absolute left-4 top-4 rounded-lg bg-white/95 px-3 py-2 shadow-lg backdrop-blur">
            <p className="text-xs font-medium text-slate-900">
              <span className="text-lg font-bold text-brand-primary">
                {mappedMembers.length}
              </span>{' '}
              member groups
            </p>
          </div>
        </div>

        {/* Sidebar - hidden in compact mode */}
        {!compact && (
          <div className="flex max-h-[500px] w-full shrink-0 flex-col border-t border-slate-200 bg-white sm:max-h-[550px] lg:max-h-none lg:w-80 lg:border-l lg:border-t-0">
            {/* Search header */}
            <div className="border-b border-slate-200 p-4">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search organizations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm placeholder:text-slate-400 focus:border-brand-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-primary"
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                {filteredMembers.length} of {members.length} shown
              </p>
            </div>

            {/* Member list */}
            <div className="flex-1 overflow-y-auto">
              {filteredMembers.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-sm text-slate-500">
                    No organizations found
                  </p>
                </div>
              ) : (
                filteredMembers.map((member) => {
                  const isSelected = selectedMember?._id === member._id
                  const hasCoords = !!getCoords(member)
                  return (
                    <button
                      key={member._id}
                      onClick={() => hasCoords && flyToMember(member)}
                      disabled={!hasCoords}
                      className={`group w-full border-b border-slate-100 p-3 text-left transition ${
                        isSelected
                          ? 'border-l-2 border-l-brand-primary bg-brand-primary/5'
                          : hasCoords
                            ? 'hover:bg-slate-50'
                            : 'cursor-not-allowed opacity-60'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <p
                            className={`truncate text-sm font-medium ${
                              isSelected
                                ? 'text-brand-primary'
                                : 'text-slate-900'
                            }`}
                          >
                            {member.name}
                          </p>
                          <p className="truncate text-xs text-slate-500">
                            {member.university}
                          </p>
                        </div>
                        {hasCoords && (
                          <svg
                            className={`h-4 w-4 shrink-0 transition ${
                              isSelected
                                ? 'text-brand-primary'
                                : 'text-slate-300 group-hover:text-slate-400'
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        )}
                      </div>
                      {!hasCoords && (
                        <span className="mt-1 inline-block rounded bg-amber-50 px-1.5 py-0.5 text-[10px] text-amber-600">
                          Location pending
                        </span>
                      )}
                    </button>
                  )
                })
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
