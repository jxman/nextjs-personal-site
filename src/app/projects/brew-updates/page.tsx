import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Brew Updates - Homebrew Update Assistant for macOS',
  description:
    "John Xanthopoulos' locally run macOS tool that keeps Homebrew updated, backed up, health-checked and scanned for vulnerabilities, with a native SwiftUI app for viewing results and acting on them.",
  alternates: {
    canonical: '/projects/brew-updates',
  },
  openGraph: {
    title: 'Brew Updates - Homebrew Update Assistant for macOS',
    description:
      'A scheduled Bash script plus a native SwiftUI menu bar app that keeps Homebrew updated, backed up and scanned for vulnerabilities.',
    images: ['https://www.synepho.com/images/brew-updates/dashboard.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brew Updates - Homebrew Update Assistant for macOS',
    images: ['https://www.synepho.com/images/brew-updates/dashboard.png'],
  },
}

const screens = [
  {
    name: 'Dashboard',
    image: '/images/brew-updates/dashboard.png',
    text: 'Last run, schedule, outdated count, Grype and brew vulns counts side by side, open doctor issues, and system and app versions.',
  },
  {
    name: 'Installed',
    image: '/images/brew-updates/installed.png',
    text: 'Formulae and casks with their dependencies. Pin, exclude, upgrade selected, or uninstall with dependency warnings.',
  },
  {
    name: 'Runs',
    image: '/images/brew-updates/runs.png',
    text: "Every run's summary and log, plus live output with a Stop button for runs started from the app.",
  },
  {
    name: 'Security',
    image: '/images/brew-updates/security.png',
    text: 'Findings from Grype and brew vulns with a severity filter, a per-scanner trend chart, and on-demand Scan Now.',
  },
  {
    name: 'Doctor',
    image: '/images/brew-updates/doctor.png',
    text: 'Each brew doctor warning explained with copyable fixes, plus deprecated or disabled packages with suggested replacements.',
  },
  {
    name: 'Backups',
    image: '/images/brew-updates/backups.png',
    text: 'Compare a Brewfile backup with what is installed or the previous backup, and restore missing taps, formulae and casks.',
  },
]

const highlights = [
  'Unattended updates: a launchd LaunchAgent runs the script daily at 3 AM to update Homebrew, upgrade outdated formulae and casks (respecting pins and exclusions), and clean up.',
  'Safety net: a Brewfile backup is taken before every run, runs never overlap thanks to a run lock, and network calls retry with backoff.',
  'Health and security reports: every run saves a brew doctor report, a Grype vulnerability scan of the Cellar, a brew vulns (OSV.dev) scan, and a list of deprecated or disabled packages.',
  'Machine-readable results: each run writes a JSON summary and sends a macOS notification that links straight back to that run in the app.',
  'Housekeeping visibility: the app surfaces leftover packages nothing needs any more, packages Homebrew is retiring, and packages with security issues worth upgrading, replacing or removing.',
  'The app never upgrades packages itself. Update All, Dry Run and Upgrade Selected all launch the same deployed script, so every run gets the same backup, lock, logs and summary as a scheduled run.',
]

const techStack = [
  'Swift 6',
  'SwiftUI',
  'Swift Charts',
  'Bash',
  'Homebrew',
  'launchd',
  'Grype',
  'OSV.dev',
  'XcodeGen',
  'ShellCheck',
  'SwiftLint',
  'GitHub Actions',
]

export default function BrewUpdates() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Link href="/projects" className="btn btn-outline btn-sm sm:btn-md">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>
        </div>

        <AnimatedSection animation="fadeInUp">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              {/* Header */}
              <div className="flex flex-col items-center text-center mb-6">
                <Image
                  src="/images/brew-updates/logo.png"
                  alt="Brew Updates app icon: a beer mug with a green upgrade arrow"
                  width={96}
                  height={96}
                  unoptimized
                />
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 mb-3">
                  Brew Updates
                </h1>
                <p className="text-base sm:text-lg text-base-content/70 max-w-3xl">
                  A scheduled Bash script that keeps Homebrew updated, backed
                  up, health-checked and scanned for vulnerabilities, with a
                  native macOS app on top for viewing results and acting on
                  them. It runs entirely on your Mac, so instead of a live site
                  here is a tour of the app.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <div className="badge badge-outline">Desktop Application</div>
                  <div className="badge badge-outline">macOS 15+</div>
                  <div className="badge badge-success badge-outline">
                    Active
                  </div>
                </div>
              </div>

              {/* App tour */}
              <figure className="mb-10 flex flex-col">
                <Image
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  src="/images/brew-updates/app-tour.gif"
                  alt="Animated tour of the Brew Updates app: Dashboard, Installed, Runs, Security, Doctor and Backups"
                  width={1000}
                  height={584}
                  unoptimized
                />
                <figcaption className="text-sm text-base-content/60 text-center mt-3">
                  A quick tour cycling through every screen of the app
                </figcaption>
              </figure>

              {/* What it does */}
              <div className="space-y-6 mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-center">
                  What It Does
                </h2>
                <ul className="space-y-4 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screenshots */}
              <div className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
                  Screens
                </h2>
                <p className="text-sm text-base-content/60 text-center mb-6">
                  Click any screenshot to view it full size
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {screens.map((screen) => (
                    <figure
                      key={screen.name}
                      className="bg-base-200 rounded-2xl overflow-hidden shadow-lg flex flex-col items-stretch"
                    >
                      <a
                        href={screen.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Image
                          className="w-full h-auto hover:opacity-90 transition-opacity"
                          src={screen.image}
                          alt={`Brew Updates ${screen.name} screen`}
                          width={1600}
                          height={935}
                          unoptimized
                        />
                      </a>
                      <figcaption className="p-4">
                        <h3 className="font-semibold text-lg mb-1">
                          {screen.name}
                        </h3>
                        <p className="text-sm text-base-content/70">
                          {screen.text}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="text-center mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                  {techStack.map((tech) => (
                    <span key={tech} className="badge badge-ghost">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub */}
              <div className="flex justify-center">
                <a
                  href="https://github.com/jxman/homebrew-update-assistant"
                  className="btn btn-primary"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Source and Install Guide on GitHub
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  )
}
