import type { Metadata } from 'next'
import { Geist, Geist_Mono, Noto_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/components/i18n-provider'
import './globals.css'

import GlassmorphismNavbar from '@/components/glassmorphism-navbar'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif',
})

export const metadata: Metadata = {
  title: 'LUXUS | Luxury Development & Construction',
  description:
    'LUXUS is a premier luxury development and construction company delivering landmark residences and architectural masterpieces worldwide. Precision engineering, Italian craftsmanship, and timeless design.',
  keywords: [
    'luxury development',
    'luxury construction',
    'premium real estate',
    'luxury residences',
    'architectural design',
    'high-end construction',
    'Italian craftsmanship',
    'luxury living',
    'landmark buildings',
    'premium development',
  ],
  authors: [{ name: 'LUXUS' }],
  creator: 'LUXUS',
  publisher: 'LUXUS',
  metadataBase: new URL('https://luxus.com'),
  openGraph: {
    title: 'LUXUS | Luxury Development & Construction',
    description:
      'LUXUS delivers landmark luxury residences and architectural masterpieces worldwide — where precision engineering meets timeless Italian craftsmanship.',
    url: 'https://luxus.com',
    siteName: 'LUXUS',
    images: [
      {
        url: '/icon no bg.png',
        width: 1200,
        height: 630,
        alt: 'LUXUS — Luxury Development & Construction',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUXUS | Luxury Development & Construction',
    description:
      'Premier luxury development and construction — delivering landmark residences and architectural masterpieces worldwide.',
    images: ['/icon no bg.png'],
    creator: '@luxusstone',
  },
  icons: {
    icon: [
      { url: '/icon no bg.png', type: 'image/png' },
    ],
    apple: '/icon no bg.png',
    shortcut: '/icon no bg.png',
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
  category: 'luxury materials',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} font-sans antialiased`}>
        <GlassmorphismNavbar />
        <I18nProvider>{children}</I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
