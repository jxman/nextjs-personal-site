import type { Metadata } from 'next'
import Link from 'next/link'

// /tools was renamed to /apps. S3 static hosting has no server-side
// redirects, so this page sends visitors on with a meta refresh (React 19
// hoists the <meta> into <head>) and keeps a plain link as a fallback.
export const metadata: Metadata = {
  title: 'Apps',
  alternates: {
    canonical: '/apps',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function Tools() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/apps/" />
      <main className="min-h-screen flex items-center justify-center p-8">
        <p>
          This page has moved to{' '}
          <Link href="/apps" className="link link-primary">
            Apps
          </Link>
          .
        </p>
      </main>
    </>
  )
}
