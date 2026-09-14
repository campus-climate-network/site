import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    // The member onboarding form posts a logo through a server action, and
    // the default 1 MB body limit is too small. The form caps logos at 4 MB
    // (member-org.ts); Vercel's function payload ceiling is 4.5 MB.
    serverActions: { bodySizeLimit: '5mb' },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      // Former FFR pages, folded into /campaigns — keep old inbound links alive
      {
        source: '/ffr-campaign',
        destination: '/campaigns',
        permanent: true,
      },
      {
        source: '/ffr-archive',
        destination: '/campaigns',
        permanent: true,
      },
      // Former Student Wins page — its campaign-win content now lives on /campaigns
      {
        source: '/student-wins',
        destination: '/campaigns',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
