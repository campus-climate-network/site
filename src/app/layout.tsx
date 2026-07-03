import type { Metadata, Viewport } from 'next'
import { Bungee, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/json-ld'
import { SITE_URL } from '@/lib/site'
import './(site)/globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const bungee = Bungee({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bungee',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#60379d',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Campus Climate Network',
    template: '%s | Campus Climate Network',
  },
  description:
    'Campus Climate Network organizes students to win fossil-free research and climate justice on campus.',
  keywords: [
    'climate justice',
    'fossil fuel divestment',
    'student organizing',
    'fossil free research',
    'campus climate',
    'climate activism',
  ],
  icons: {
    icon: { url: '/favicon.png', type: 'image/png', sizes: '64x64' },
    apple: { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Campus Climate Network',
    images: [
      {
        url: '/photoprotest.jpg',
        width: 1200,
        height: 630,
        alt: 'Campus Climate Network organizers rallying for climate justice.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cclimatenetwork',
    images: ['/photoprotest.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body
        className={`${poppins.variable} ${bungee.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
