'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { NotionRenderer } from 'react-notion-x'
import type { ExtendedRecordMap } from 'notion-types'
import { getPageBreadcrumbs, getPageTitle } from 'notion-utils'
import { Collection } from 'react-notion-x/build/third-party/collection'
import 'react-notion-x/src/styles.css'

const ROOT_PAGE_ID = '1dfeb502799a806ea31bdb5e280394c6'

function mapImageUrl(
  url: string,
  block: { id: string; parent_table?: string },
) {
  if (!url) return ''
  if (url.startsWith('data:')) return url

  if (url.startsWith('https://images.unsplash.com')) return url

  if (url.startsWith('notion://'))
    return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

  if (url.startsWith('/images')) {
    url = `https://www.notion.so${url}`
  }

  const proxyUrl = new URL(
    `https://www.notion.so${url.startsWith('/image') ? url : `/image/${encodeURIComponent(url)}`}`,
  )

  let table =
    block.parent_table === 'space' ? 'block' : block.parent_table || 'block'
  if (table === 'collection' || table === 'team') table = 'block'

  proxyUrl.searchParams.set('table', table)
  proxyUrl.searchParams.set('id', block.id)
  proxyUrl.searchParams.set('cache', 'v2')

  return proxyUrl.toString()
}

function createMapPageUrl(recordMap: ExtendedRecordMap) {
  return (pageId: string) => {
    if (recordMap.block[pageId]) {
      return `/member-portal/${pageId}`
    }
    return `https://notion.so/${pageId}`
  }
}

function isEmoji(str: string) {
  return /^\p{Emoji}/u.test(str) && !str.startsWith('/') && !str.includes(':')
}

type BreadcrumbItem = {
  pageId: string
  title: string
  icon?: string
  active: boolean
}

function Breadcrumbs({
  recordMap,
  pageId,
}: {
  recordMap: ExtendedRecordMap
  pageId: string
}) {
  if (pageId === ROOT_PAGE_ID) return null

  const notionCrumbs = getPageBreadcrumbs(recordMap, pageId) as
    | BreadcrumbItem[]
    | null

  const hasPortalRoot = notionCrumbs?.some(
    (item) => item.pageId === ROOT_PAGE_ID,
  )

  const items: BreadcrumbItem[] = []

  if (!hasPortalRoot) {
    items.push({
      pageId: ROOT_PAGE_ID,
      title: 'Member Portal',
      active: false,
    })
  }

  if (notionCrumbs?.length) {
    items.push(...notionCrumbs)
  } else {
    const title = getPageTitle(recordMap)
    if (title) {
      items.push({ pageId, title, active: true })
    }
  }

  if (items.length <= 1) return null

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex flex-wrap items-center gap-1 rounded-xl bg-slate-50 px-4 py-2.5 text-sm ring-1 ring-slate-200/60"
    >
      {items.map((item, i) => (
        <span key={item.pageId} className="flex items-center gap-1">
          {i > 0 && (
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300" />
          )}
          {item.icon && isEmoji(item.icon) && (
            <span className="text-base">{item.icon}</span>
          )}
          {item.active ? (
            <span className="font-medium text-slate-800">{item.title}</span>
          ) : (
            <Link
              href={
                item.pageId === ROOT_PAGE_ID
                  ? '/member-portal'
                  : createMapPageUrl(recordMap)(item.pageId)
              }
              className="text-slate-500 transition-colors hover:text-brand-primary"
            >
              {item.title}
            </Link>
          )}
        </span>
      ))}
    </nav>
  )
}

export function NotionPage({
  recordMap,
  pageId,
}: {
  recordMap: ExtendedRecordMap
  pageId: string
}) {
  const mapPageUrl = createMapPageUrl(recordMap)

  return (
    <>
      <Breadcrumbs recordMap={recordMap} pageId={pageId} />
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
        disableHeader
        mapPageUrl={mapPageUrl}
        mapImageUrl={mapImageUrl}
        components={{ Collection }}
      />
    </>
  )
}
