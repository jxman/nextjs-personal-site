import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'

const TITLE = 'Using AI to Defend Against AI Threats: Building Brew Updates'
const DESCRIPTION =
  'AI is accelerating threats, so I used AI to build a defense: Brew Updates, my first Mac app, which keeps Homebrew updated, backed up and scanned for vulnerabilities.'
const IMAGE = 'https://www.synepho.com/images/blog/brew-updates.png'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/blog/brew-updates-release',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    images: [IMAGE],
  },
}

export default function BrewUpdatesReleasePost() {
  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/blog" className="btn btn-ghost btn-sm">
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="badge badge-primary">Security</div>
            <div className="badge badge-secondary">macOS</div>
            <div className="badge badge-accent">Homebrew</div>
            <div className="badge badge-ghost">AI Development</div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-base-content mb-6 leading-tight">
            Using AI to Defend Against AI Threats: Building Brew Updates
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-base-content/70 mb-8">
            <div className="flex items-center gap-4">
              <span>November 23, 2026</span>
              <span className="hidden sm:inline">•</span>
              <span>6 min read</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none
          prose-headings:text-base-content
          prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4
          prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-base-content/80 prose-p:leading-relaxed prose-p:mb-4
          prose-li:text-base-content/80 prose-li:leading-relaxed
          prose-strong:text-base-content prose-strong:font-semibold
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-code:text-accent prose-code:bg-base-200 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-base-200 prose-pre:rounded-lg
          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic
          prose-table:text-sm prose-th:text-base-content prose-td:text-base-content/80"
        >
          <p className="text-xl text-base-content/70 italic mb-8">
            Almost every day there&apos;s a new story about an organization
            dealing with a data breach or an outage. The question isn&apos;t
            whether the threats are growing. It&apos;s what you do about the
            systems you control.
          </p>

          <p>
            A large part of the increase is driven by how quickly AI is
            advancing: attackers are finding and exploiting weaknesses faster
            than ever. So what are you supposed to do about it? My answer is to
            use the same technology on the defensive side. Use AI to build your
            own security tooling, and use it to protect your own systems.
          </p>

          <p>
            That&apos;s the story behind my first macOS application,{' '}
            <a
              href="https://www.synepho.com/apps/brew-updates/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Brew Updates</strong>
            </a>
            , which I&apos;m releasing today.
          </p>

          <h2>Why a Mac, and Why Homebrew</h2>

          <p>
            Years ago I switched to the Mac. I was drawn to the combination of
            the Unix command line, the performance, and the polish of the macOS
            interface. It&apos;s a rare mix: a real terminal and a desktop that
            gets out of the way.
          </p>

          <p>
            As a Mac user and developer, I adopted{' '}
            <a href="https://brew.sh" target="_blank" rel="noopener noreferrer">
              Homebrew
            </a>{' '}
            as my default package manager for every command-line and development
            tool on my local machines. Its robust command line makes installing
            and updating software simple, and it&apos;s one of the best ways for
            any Mac developer to build and manage a local development
            environment.
          </p>

          <p>
            Alongside Homebrew, I wrote a set of shell scripts to manage what I
            had installed and to apply updates as they became available. They
            worked well for a long time.
          </p>

          <h2>The Wake-Up Call</h2>

          <p>
            Recently I&apos;d become more and more concerned about the command
            line tools I&apos;d collected over the years of testing and
            evaluating things. Then came the{' '}
            <a
              href="https://support.apple.com/en-us/149555"
              target="_blank"
              rel="noopener noreferrer"
            >
              eMudhra certificate incident
            </a>
            , and I knew I had to step up my security posture for those tools.
          </p>

          <p>
            Apple and others shipped updates quickly, but Apple&apos;s blocks
            cover Safari, Mail and apps that use its frameworks. Command-line
            tools that read the system certificate file were still exposed.{' '}
            <code>brew doctor</code> flagged it and printed Apple&apos;s
            mitigation. Because Brew Updates runs <code>brew doctor</code> on
            every scheduled run and keeps the result in its Doctor screen, I saw
            the warning there, ran the suggested commands, and the next run came
            back clean.
          </p>

          <p>
            The same can&apos;t be said for the third-party tools in my Cellar.
            They carry their own dependencies, which no operating system update
            touches. A patched operating system doesn&apos;t mean a patched
            toolbox.
          </p>

          <h2>From Shell Scripts to an App</h2>

          <p>
            I wanted to make better use of the data my scripts were already
            collecting, and add software scans across everything installed in my
            Homebrew Cellar. The result is Brew Updates: a native UI wrapped
            around my existing Homebrew command-line functions, with a built-in
            scheduler and{' '}
            <a
              href="https://github.com/anchore/grype"
              target="_blank"
              rel="noopener noreferrer"
            >
              Grype
            </a>{' '}
            vulnerability scanning. The source is on{' '}
            <a
              href="https://github.com/jxman/brew-updates"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>

          <div className="not-prose my-8">
            <Image
              src="/images/brew-updates/dashboard.png"
              alt="Brew Updates dashboard showing the last run, schedule, available updates, security findings and doctor status"
              width={1600}
              height={923}
              className="rounded-lg border border-base-300 shadow-md"
              unoptimized
            />
          </div>

          <p>With it, you get:</p>

          <ul>
            <li>
              <strong>Unattended updates</strong> on a schedule you choose, with
              pinned and excluded packages left alone
            </li>
            <li>
              <strong>A backup before every run</strong>, so you can compare
              against what&apos;s installed and restore what went missing
            </li>
            <li>
              <strong>Vulnerability scanning</strong> of what&apos;s installed,
              with a trend over time
            </li>
            <li>
              <strong>A health check</strong> from <code>brew doctor</code>,
              with plain-language advice
            </li>
          </ul>

          <p>
            The point is visibility. Once you can see everything you&apos;ve
            deployed with Homebrew, you can make informed decisions: remove the
            old, unsupported application, or the one you tested once and
            haven&apos;t touched since.
          </p>

          <h2>What the Scan Found</h2>

          <p>
            On my own machine, I found two applications that had been
            discontinued. Removing them took my findings from 482 down to 67
            overnight, and critical findings from 49 to 3. A few upgrades later
            I was at zero criticals. Two tools I wasn&apos;t using, doing
            nothing but adding risk.
          </p>

          <p>
            New advisories keep arriving, so the count creeps back up over time.
            That&apos;s exactly why the scan runs on a schedule.
          </p>

          <div className="not-prose my-8">
            <Image
              src="/images/brew-updates/security.png"
              alt="Brew Updates Security screen showing zero critical findings, a severity summary, a findings trend chart and a table of vulnerabilities by Homebrew package"
              width={1600}
              height={923}
              className="rounded-lg border border-base-300 shadow-md"
              unoptimized
            />
            <p className="text-sm text-base-content/60 mt-2 text-center">
              The Security screen: findings by severity, a trend over time, and
              the Homebrew package behind each one.
            </p>
          </div>

          <h2>What I Learned Along the Way</h2>

          <p>
            Most of my development work is in web development and cloud
            architecture, so building a native Mac app with SwiftUI was a great
            opportunity to learn something completely new. It&apos;s a different
            language, a different toolchain, and a different way of thinking
            about an application.
          </p>

          <p>
            I learned how a SwiftUI application is structured, how the Apple
            Developer program works, and what it takes to publish an app
            that&apos;s signed with a Developer ID and notarized by Apple, so it
            opens on any Mac without a warning. Claude Code was a big part of
            that, from the Swift code to the release tooling.
          </p>

          <p>
            I don&apos;t expect everyone to go build their own apps with AI. But
            I do encourage everyone to have the conversation: ask an AI how you
            could improve the security of your own system, and how to better
            protect yourself from the next vulnerability or hack.
          </p>

          <h2>What&apos;s Next</h2>

          <p>
            Now that I have my Apple Developer ID, I&apos;m thinking about an
            iOS game. It would be a good distraction from the end-of-year and
            holiday rush. I recently heard about{' '}
            <a
              href="https://krillion.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Krillion
            </a>{' '}
            from my college-age niece, a daily game that, as I understand it,
            was built by a single young developer and plays to a huge audience.
            Who knows, maybe I can create the next one in my free time.
          </p>

          <div className="bg-primary/5 border-l-4 border-primary p-6 mt-8 rounded-r-lg flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <a
              href="https://www.synepho.com/apps/brew-updates/"
              target="_blank"
              rel="noopener noreferrer"
              className="not-prose shrink-0"
            >
              <Image
                src="/images/brew-updates/logo.png"
                alt="Brew Updates app icon: a beer mug with a green upload arrow"
                width={96}
                height={96}
                className="rounded-2xl shadow-md"
                unoptimized
              />
            </a>
            <p className="italic text-base-content/70 mb-0">
              <strong>Brew Updates</strong> is free for Apple silicon Macs
              running macOS 15 or later. Get it from the{' '}
              <a
                href="https://www.synepho.com/apps/brew-updates/"
                target="_blank"
                rel="noopener noreferrer"
              >
                product page
              </a>{' '}
              or the{' '}
              <a
                href="https://github.com/jxman/brew-updates/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
              >
                latest release
              </a>
              , or install it with Homebrew:{' '}
              <code>brew install --cask jxman/tap/brew-updates</code>. The
              source is on{' '}
              <a
                href="https://github.com/jxman/brew-updates"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 className="font-semibold text-base-content mb-2">
                About the Author
              </h4>
              <p className="text-base-content/70">
                John Xanthopoulos is a cloud architect and web application
                developer. He writes about technology, systems design, and
                multi-cloud operations at{' '}
                <Link href="/" className="text-primary hover:underline">
                  synepho.com
                </Link>
                .
              </p>
            </div>

            <div className="flex gap-2">
              <Link href="/about" className="btn btn-outline btn-sm">
                About Me
              </Link>
              <Link href="/contact" className="btn btn-primary btn-sm">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </Layout>
  )
}
