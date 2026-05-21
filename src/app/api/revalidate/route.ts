import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

// Sanity webhook -> on-demand revalidation.
// Must run on the Node.js runtime and never be statically cached.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type WebhookPayload = {
  _type?: string
  // Sent as an object when the full document is delivered, or as a string
  // when the webhook uses a `slug.current` projection.
  slug?: { current?: string } | string
}

type RevalidateTarget = { path: string; type?: 'page' | 'layout' }

// Map a changed Sanity document type to the public routes that render it.
// Path-first by design (per architecture decision): lowest-risk, since each
// content type maps cleanly to one or more routes.
function targetsForType(type: string, slug?: string): RevalidateTarget[] {
  switch (type) {
    case 'jobRole':
      return [{ path: '/hiring' }]
    case 'post':
      // Refresh the listing plus this post's page. Without a slug, fall back
      // to refreshing every post page.
      return slug
        ? [{ path: '/blog' }, { path: `/blog/${slug}` }]
        : [{ path: '/blog' }, { path: '/blog/[slug]', type: 'page' }]
    case 'author':
    case 'category':
      // These can be referenced by many posts, so refresh the listing and
      // every post page.
      return [{ path: '/blog' }, { path: '/blog/[slug]', type: 'page' }]
    case 'memberOrg':
      return [{ path: '/our-network' }]
    case 'movementWin':
      return [{ path: '/student-wins' }]
    default:
      return []
  }
}

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

    const slug =
      typeof body?.slug === 'string' ? body.slug : body?.slug?.current

    const targets = targetsForType(type, slug)
    if (targets.length === 0) {
      return NextResponse.json({
        revalidated: false,
        type,
        message: 'No route mapped for this document type',
      })
    }

    for (const target of targets) {
      revalidatePath(target.path, target.type)
    }

    return NextResponse.json({
      revalidated: true,
      type,
      paths: targets.map((t) => t.path),
      now: Date.now(),
    })
  } catch (err) {
    console.error('Revalidation webhook error:', err)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
