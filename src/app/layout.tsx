import type { Metadata } from 'next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

export const metadata: Metadata = {
  title: 'John Xanthopoulos - IT Executive & Developer',
  description:
    'IT Executive by day, developer on weekends. Sharing insights on software development, cloud architecture, and technology leadership. AWS, React, Terraform, and more.',
  keywords:
    'John Xanthopoulos, IT Executive, Software Developer, AWS, React, Terraform, Cloud Architecture, Technology Leadership',
  authors: [{ name: 'John Xanthopoulos' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '144x144', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'John Xanthopoulos - IT Executive & Developer',
    description:
      'IT Executive by day, developer on weekends. AWS, React, Terraform expert.',
    url: 'https://www.synepho.com',
    siteName: 'John Xanthopoulos Portfolio',
    images: [
      {
        url: 'https://www.synepho.com/social-image.png',
        width: 1200,
        height: 630,
        alt: 'John Xanthopoulos Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Xanthopoulos - IT Executive & Developer',
    description:
      'IT Executive by day, developer on weekends. AWS, React, Terraform expert.',
    images: ['https://www.synepho.com/social-image.png'],
    creator: '@jxmam',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
