import type { Metadata } from 'next'
import { Bungee, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/json-ld'
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

const siteUrl = 'https://campusclimatenetwork.org'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Campus Climate Network',
    title: 'Campus Climate Network',
    description:
      'Campus Climate Network organizes students to win fossil-free research and climate justice on campus.',
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
    title: 'Campus Climate Network',
    description:
      'Students organizing for fossil-free research and climate justice.',
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
