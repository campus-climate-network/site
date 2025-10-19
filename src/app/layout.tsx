import type { Metadata } from 'next'
import { Bungee, Poppins } from 'next/font/google'
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
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${bungee.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  )
}
