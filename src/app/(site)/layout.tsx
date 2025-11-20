import type { Metadata } from 'next'
import { Bungee, Poppins } from 'next/font/google'
import './globals.css'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
// import { useDraftOverlay } from '@/sanity.config'

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

export const metadata: Metadata = {
  title: 'Campus Climate Network',
  description:
    'Campus Climate Network organizes students to win fossil-free research and climate justice on campus.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const { isEnabled } = draftMode()

  return (
    <html
      lang="en"
      // data-sanity-drafts={useDraftOverlay && isEnabled ? 'true' : 'false'}
    >
      <body
        className={`${poppins.variable} ${bungee.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
