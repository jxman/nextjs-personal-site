import Link from 'next/link'
import Layout from '@/components/Layout'

export default function NotFound() {
  const popularPages = [
    {
      name: 'Home',
      href: '/',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      description: 'Return to homepage',
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      description: 'View my portfolio',
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      description: 'Read latest articles',
    },
    {
      name: 'About',
      href: '/about',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      description: 'Learn about me',
    },
  ]

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full text-center">
          {/* 404 Error Display */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary mb-4 animate-pulse">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Oops! The page you&apos;re looking for seems to have wandered off
              into the cloud. Let&apos;s get you back on track.
            </p>
          </div>

          {/* Illustration/Icon */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <svg
                className="w-48 h-48 text-primary/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-base-content/30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Popular Pages */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-base-content mb-6">
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="card bg-base-200 hover:bg-base-300 transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <div className="card-body p-6 flex flex-col items-center text-center">
                    <div className="mb-3 text-primary">{page.icon}</div>
                    <h4 className="font-semibold text-base-content mb-1">
                      {page.name}
                    </h4>
                    <p className="text-sm text-base-content/60">
                      {page.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline btn-lg hover:scale-105 transition-transform duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Me
            </Link>
          </div>

          {/* Help Text */}
          <div className="mt-12 p-6 bg-base-200 rounded-lg">
            <p className="text-sm text-base-content/60">
              <strong>Still can&apos;t find what you&apos;re looking for?</strong>
              <br />
              Try searching from the home page or{' '}
              <Link href="/contact" className="text-primary hover:underline">
                contact me directly
              </Link>{' '}
              and I&apos;ll be happy to help!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
