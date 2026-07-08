import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
