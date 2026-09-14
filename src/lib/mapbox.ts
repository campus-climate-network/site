// Mapbox forward geocoding, shared by the member map (browser, public token)
// and the onboarding action (server, MAPBOX_GEOCODING_TOKEN). Resolves to
// null when the address can't be placed; never throws.

export type Coordinates = { lat: number; lng: number }

export async function geocodeAddress(
  address: string,
  token: string,
  init?: RequestInit,
): Promise<Coordinates | null> {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${token}&limit=1`,
      init,
    )
    if (!response.ok) {
      console.warn('Geocoding failed for:', address, response.status)
      return null
    }
    const data = (await response.json()) as {
      features?: { center?: [number, number] }[]
    }
    const center = data.features?.[0]?.center
    if (!center) return null
    const [lng, lat] = center
    return { lat, lng }
  } catch (error) {
    console.error('Geocoding error for:', address, error)
    return null
  }
}
