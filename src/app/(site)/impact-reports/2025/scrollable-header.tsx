'use client'

import { useEffect } from 'react'

export function ScrollableHeader() {
  useEffect(() => {
    document.documentElement.setAttribute('data-scrollable-header', '')
    return () => {
      document.documentElement.removeAttribute('data-scrollable-header')
    }
  }, [])
  return null
}
