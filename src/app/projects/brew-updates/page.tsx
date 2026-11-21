import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight, FaGithub } from 'react-icons/fa'
import Layout from '@/components/Layout'
import AnimatedSection from '@/components/AnimatedSection'

const description =
  'How I built Brew Updates: a Bash engine, a launchd schedule and a Swift 6 menu bar app that share one file-based contract, plus notarized distribution, Sparkle updates and a Homebrew cask.'

export const metadata: Metadata = {
  title: 'Brew Updates Case Study - How I Built It',
  description,
  alternates: {
    canonical: '/projects/brew-updates',
  },
  openGraph: {
    title: 'Brew Updates Case Study - How I Built It',
    description,
    url: 'https://www.synepho.com/projects/brew-updates',
    images: ['https://www.synepho.com/images/brew-updates/dashboard.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brew Updates Case Study - How I Built It',
    description,
    images: ['https://www.synepho.com/images/brew-updates/dashboard.png'],
  },
}

const triggers = [
  { name: 'LaunchAgent', detail: 'Your schedule, via launchd' },
  { name: 'Brew Updates app', detail: 'Update All, Dry Run, Upgrade' },
  { name: 'Terminal', detail: 'Run by hand' },
]

const localState = [
  { name: '~/.brew_logs', detail: 'Logs, reports, *.summary.json, run lock' },
  { name: '~/.brew_backups', detail: 'Brewfile before every run' },
  { name: '~/.brew_update_config', detail: 'Settings + LaunchAgent plist' },
]

const externalTools = [
  { name: 'Homebrew', detail: 'brew CLI + GitHub' },
  { name: 'Grype', detail: 'Cellar vulnerability scan' },
  { name: 'brew vulns', detail: 'OSV.dev lookups' },
]

const pipeline = [
  'Acquire the run lock (exit 5 if another run holds it)',
  'Load and validate config and environment variables',
  'Pre-flight: brew, git, at least 1 GB free disk, network',
  'Brewfile backup, rotated to the configured count',
  'brew update, retried with exponential backoff',
  'Find outdated packages, dropping pinned, excluded and self-updating casks',
  'brew vulns on the outdated formulae (advisory only)',
  'Upgrade formulae, then casks',
  'brew doctor report and deprecated/disabled check',
  'Grype scan, then brew vulns scan',
  'brew cleanup + autoremove, prune old logs',
  'Notification, then the EXIT trap writes *.summary.json and releases the lock',
]

const decisions = [
  {
    title: 'One engine, two triggers',
    text: 'The Bash script is the only thing that upgrades packages. The launchd schedule and the app both just launch it, so a run started from the app gets exactly the same backup, lock, logs and summary as a 3 AM scheduled run. There is no second code path to drift out of sync.',
  },
  {
    title: 'Files as the contract',
    text: "The script writes its results to ~/.brew_logs and the app reads them. No daemon, no database, no IPC: the app can be closed, crash or be replaced by an update and scheduled runs don't care. It also makes every run inspectable with a text editor.",
  },
  {
    title: 'Fail safe, not silent',
    text: 'Commands run as arrays with no eval, and every config value and package name is checked against a regex. An atomic mkdir run lock prevents overlapping runs, and an EXIT trap writes a summary even on errors or Ctrl-C. The script never calls sudo itself.',
  },
  {
    title: 'Two scanners on purpose',
    text: 'Grype scans the files in the Cellar; brew vulns looks formulae up in OSV.dev. They catch different things and disagree in useful ways, so the app shows them side by side with a trend chart rather than merging them into one number.',
  },
  {
    title: 'Bash 3.2, deliberately',
    text: "launchd runs macOS's built-in /bin/bash, which is 3.2. The script avoids associative arrays and mapfile so the scheduled run never depends on a newer shell from Homebrew, the very thing it is upgrading.",
  },
  {
    title: 'Graceful degradation',
    text: "A failed doctor run, scan or notification is logged but doesn't stop the run. Missing optional tools (Grype, jq) are reported as unavailable rather than failing, and each kind of failure has its own exit code.",
  },
]

const distribution = [
  {
    title: 'Signed and notarized',
    text: 'Developer ID signing with the hardened runtime and an Apple-notarized DMG, so the only prompt a user sees is the standard one-time "downloaded from the internet" check.',
  },
  {
    title: 'Self-updating with Sparkle',
    text: 'The app checks an appcast on GitHub Releases once a day. An update installs only if its EdDSA signature matches the key built into the app and it is signed by the same Developer ID team. Each app version carries its own script, installed at launch.',
  },
  {
    title: 'Homebrew cask',
    text: 'A cask in my own tap (jxman/homebrew-tap) offers a one-line install. It is marked auto_updates, so brew upgrade leaves updates to Sparkle instead of fighting it.',
  },
  {
    title: 'First-launch setup',
    text: 'On first launch the app installs the script into Application Support and registers the LaunchAgent, replacing what used to be a manual setup.sh step.',
  },
]

const quality = [
  'ShellCheck on the script',
  'SwiftLint --strict on the app',
  'Swift Testing unit tests for models and services',
  'pre-commit with ggshield secret scanning and Conventional Commits',
  'GitHub Actions on macos-latest',
  'XcodeGen project.yml as the source of truth (no checked-in .xcodeproj)',
]

const stack = [
  ['Script', 'Bash (macOS /bin/bash 3.2 compatible)'],
  ['Scheduling', 'launchd LaunchAgent'],
  ['Security scanning', 'Grype + brew vulns (OSV.dev), jq'],
  ['App', 'Swift 6, SwiftUI, Swift Charts, macOS 15+'],
  ['App project', 'XcodeGen'],
  ['App updates', 'Sparkle 2, EdDSA-signed appcast on GitHub Releases'],
  [
    'Distribution',
    'Developer ID, hardened runtime, notarized DMG, Homebrew cask',
  ],
  ['Quality', 'ShellCheck, SwiftLint, pre-commit, ggshield, GitHub Actions'],
]

const constraints = [
  'Apple silicon only for the app; the script itself runs on Intel too.',
  'Casks that update themselves are skipped, so the app shows their own version instead.',
  'Scanner false positives happen: Grype misreads some Homebrew version strings (anchore/grype#3865), handled with targeted ignore rules.',
  'No bottle provenance check by default: brew verify downloads the bottle and needs the GitHub CLI, so it stays a manual step.',
]

function DiagramColumn({
  title,
  items,
}: {
  title: string
  items: { name: string; detail: string }[]
}) {
  return (
    <div className="bg-base-200 rounded-xl p-4">
      <h4 className="text-xs uppercase tracking-wider text-base-content/60 font-semibold mb-3">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.name}
            className="bg-base-100 rounded-lg px-3 py-2 border border-base-300"
          >
            <div className="font-mono text-sm font-semibold">{item.name}</div>
            <div className="text-xs text-base-content/60">{item.detail}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function BrewUpdatesCaseStudy() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/projects" className="btn btn-ghost btn-sm">
            <FaArrowLeft className="w-3 h-3" /> Back to Projects
          </Link>
        </div>

        {/* Header */}
        <AnimatedSection
          animation="fadeInUp"
          className="text-center mb-12 flex flex-col items-center"
        >
          <Image
            src="/images/brew-updates/logo.png"
            alt="Brew Updates app icon"
            width={80}
            height={80}
            unoptimized
          />
          <p className="text-sm uppercase tracking-wider text-primary font-semibold mt-4">
            Case Study
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-1 mb-4">
            Building Brew Updates
          </h1>
          <p className="text-lg text-base-content/70 max-w-3xl">
            I wanted Homebrew to look after itself: update on a schedule, back
            up first, check its own health and tell me about vulnerabilities,
            without me remembering to run anything. It started as a Bash script
            and grew into a signed, self-updating Mac app. Here&apos;s how the
            pieces fit together and the decisions behind them.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link href="/apps/brew-updates" className="btn btn-primary">
              See the app <FaArrowRight className="w-3 h-3" />
            </Link>
            <a
              href="https://github.com/jxman/brew-updates"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-4 h-4" /> Source on GitHub
            </a>
          </div>
        </AnimatedSection>

        {/* Architecture */}
        <section className="mb-16" aria-labelledby="architecture-heading">
          <h2 id="architecture-heading" className="text-2xl font-bold mb-3">
            Architecture
          </h2>
          <p className="text-base-content/70 mb-6 leading-relaxed">
            The script is the engine. The LaunchAgent and the app are its
            triggers, and a folder of files in your home directory is the
            contract between them: the script writes run files, the app reads
            them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.2fr_auto_1fr] gap-3 items-center">
            <DiagramColumn title="Triggers" items={triggers} />
            <FaArrowRight className="hidden md:block mx-auto text-base-content/40" />
            <div className="bg-primary/10 border-2 border-primary/40 rounded-xl p-5 text-center">
              <h4 className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                Engine
              </h4>
              <div className="font-mono font-bold">brew-updates.sh</div>
              <p className="text-xs text-base-content/70 mt-2">
                update · upgrade · backup · doctor · deprecations · Grype + brew
                vulns · cleanup
              </p>
            </div>
            <FaArrowRight className="hidden md:block mx-auto text-base-content/40" />
            <div className="space-y-3">
              <DiagramColumn title="Writes local state" items={localState} />
              <DiagramColumn
                title="Calls external tools"
                items={externalTools}
              />
            </div>
          </div>
          <p className="text-sm text-base-content/60 mt-4">
            The app reads runs and edits config from the same files, and makes
            only the direct brew changes you ask for (pin, uninstall, restore).
          </p>
        </section>

        {/* Pipeline */}
        <section className="mb-16" aria-labelledby="pipeline-heading">
          <h2 id="pipeline-heading" className="text-2xl font-bold mb-3">
            What a run does
          </h2>
          <p className="text-base-content/70 mb-6 leading-relaxed">
            Every run, scheduled or not, goes through the same pipeline. The
            EXIT trap runs on errors and interrupts too, so every run that got
            the lock leaves a summary and releases the lock.
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {pipeline.map((step, index) => (
              <li key={step} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-base-200 text-sm font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-sm pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Decisions */}
        <section className="mb-16" aria-labelledby="decisions-heading">
          <h2 id="decisions-heading" className="text-2xl font-bold mb-6">
            Key design decisions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {decisions.map((decision) => (
              <div
                key={decision.title}
                className="card bg-base-100 border border-base-200 shadow-sm"
              >
                <div className="card-body p-5">
                  <h3 className="font-semibold text-lg">{decision.title}</h3>
                  <p className="text-sm text-base-content/70 leading-relaxed">
                    {decision.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Runs screenshot */}
        <figure className="mb-16">
          <Image
            className="w-full h-auto rounded-2xl shadow-xl border border-base-200"
            src="/images/brew-updates/runs.png"
            alt="Brew Updates Runs screen listing each run's summary and log"
            width={1600}
            height={923}
            unoptimized
          />
          <figcaption className="text-sm text-base-content/60 text-center mt-3">
            The Runs screen is a view over the script&apos;s summary and log
            files
          </figcaption>
        </figure>

        {/* Distribution */}
        <section className="mb-16" aria-labelledby="distribution-heading">
          <h2 id="distribution-heading" className="text-2xl font-bold mb-3">
            From script to shipped Mac app
          </h2>
          <p className="text-base-content/70 mb-6 leading-relaxed">
            Turning a personal script into something anyone can install meant
            handling Apple&apos;s signing requirements and keeping installs up
            to date without an App Store.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {distribution.map((item) => (
              <div key={item.title} className="bg-base-200 rounded-xl p-5">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quality + stack */}
        <section
          className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10"
          aria-label="Quality and tech stack"
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">Quality gates</h2>
            <ul className="space-y-2">
              {quality.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-primary mt-0.5">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Tech stack</h2>
            <div className="overflow-x-auto">
              <table className="table table-sm">
                <tbody>
                  {stack.map(([layer, tech]) => (
                    <tr key={layer}>
                      <th className="font-semibold whitespace-nowrap align-top">
                        {layer}
                      </th>
                      <td className="text-base-content/70">{tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Constraints */}
        <section className="mb-16" aria-labelledby="constraints-heading">
          <h2 id="constraints-heading" className="text-2xl font-bold mb-4">
            Known constraints
          </h2>
          <ul className="space-y-2">
            {constraints.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span className="text-base-content/40 mt-0.5">•</span>
                <span className="text-sm text-base-content/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Try Brew Updates</h2>
          <p className="text-base-content/70 mb-5">
            Free for Apple silicon Macs running macOS 15 or later.
          </p>
          <Link href="/apps/brew-updates" className="btn btn-primary">
            Features and Quick Start <FaArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </Layout>
  )
}
