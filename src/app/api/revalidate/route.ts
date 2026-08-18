import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

// Sanity webhook -> on-demand revalidation.
// Must run on the Node.js runtime and never be statically cached.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type WebhookPayload = {
  _type?: string
}

// Tag-based by design: every Sanity client.fetch passes `next: { tags }`
// naming the document types its query renders, so invalidating the changed
// document's _type refreshes exactly the pages that consume it. A new page
// that renders Sanity content opts in at its own fetch site — there is no
// per-page registry to keep in sync here.
const KNOWN_TYPES = new Set([
  'post',
  'author',
  'category',
  'jobRole',
  'memberOrg',
  'movementWin',
])

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET
    if (!secret) {
      console.error('SANITY_REVALIDATE_SECRET is not set')
      return new NextResponse('Server misconfigured', { status: 500 })
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      secret,
    )

    if (!isValidSignature) {
      return new NextResponse('Invalid signature', { status: 401 })
    }

    const type = body?._type
    if (!type) {
      return new NextResponse('Bad request: missing _type', { status: 400 })
    }

    if (!KNOWN_TYPES.has(type)) {
      return NextResponse.json({
        revalidated: false,
        type,
        message: 'No cache tag for this document type',
      })
    }

    // 'max' = the standard stale-and-regenerate profile (Next 16 requires an
    // explicit cacheLife profile as the second argument).
    revalidateTag(type, 'max')

    return NextResponse.json({
      revalidated: true,
      type,
      tags: [type],
      now: Date.now(),
    })
  } catch (err) {
    console.error('Revalidation webhook error:', err)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
