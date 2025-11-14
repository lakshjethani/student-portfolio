import type { Metadata } from 'next'
import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import ThemeProviders from '@/providers/ThemeProvider'
import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ScrollProgress'
import { SITE_CONFIG, SITE_OWNER } from '@/lib/data/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

const computedMetadataBase = (() => {
  try {
    return new URL(SITE_CONFIG.url)
  } catch {
    return undefined
  }
})()

export const metadata: Metadata = {
  metadataBase: computedMetadataBase,
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.title}`,
  },
  description: SITE_CONFIG.description,
  keywords: ['portfolio', 'developer', 'student', 'web development', 'Next.js', 'React'],
  authors: [{ name: SITE_OWNER.name }],
  creator: SITE_OWNER.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-body antialiased`}
      >
        <ThemeProviders>
          <Navbar />
          <ScrollProgress />
          <main className="relative">{children}</main>
        </ThemeProviders>
      </body>
    </html>
  )
}
