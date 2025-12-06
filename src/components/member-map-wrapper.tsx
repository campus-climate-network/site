'use client'

import dynamic from 'next/dynamic'
import type { MemberOrg } from './member-map'

interface MemberMapWrapperProps {
  members: MemberOrg[]
  compact?: boolean
}

const MemberMap = dynamic(() => import('@/components/member-map'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] items-center justify-center bg-slate-100">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-brand-primary border-t-transparent" />
        <p className="mt-3 text-sm text-slate-600">Loading map...</p>
      </div>
    </div>
  ),
})

export function MemberMapWrapper({
  members,
  compact = false,
}: MemberMapWrapperProps) {
  return <MemberMap members={members} compact={compact} />
}
