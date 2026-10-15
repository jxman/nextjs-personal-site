import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import Layout from '@/components/Layout'
import { getMarkdownContent } from '@/lib/markdown'

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn about John Xanthopoulos - IT Executive and developer with expertise in cloud architecture, software development, and technology leadership.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutMe() {
  const { html } = getMarkdownContent('about.md')

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Profile Card */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 flex flex-col items-center text-center">
              <Image
                src="/images/me.jpeg"
                alt="Portrait photo of John Xanthopoulos"
                className="w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-xl"
                width={192}
                height={192}
                unoptimized
              />
              <h2 className="mt-4 text-xl font-bold text-base-content">
                John Xanthopoulos
              </h2>
              <p className="text-sm text-base-content/70">
                Technology Leader &amp; Developer
              </p>
              <p className="mt-1 flex items-center gap-1 text-sm text-base-content/60">
                <FaMapMarkerAlt aria-hidden="true" />
                Boston, MA
              </p>
              <div className="mt-4 flex gap-2">
                <a
                  href="https://www.linkedin.com/in/johnx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-square btn-ghost"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/jxman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-square btn-ghost"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <Link
                  href="/resume"
                  className="btn btn-sm btn-square btn-ghost"
                  aria-label="Resume"
                >
                  <FaFileAlt className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Content Section */}
          <div className="lg:col-span-3">
            <article
              className="prose prose-lg max-w-none prose-headings:text-base-content prose-h1:text-4xl prose-h1:mb-4 prose-h2:text-2xl prose-h2:mt-10 prose-p:text-base-content/70 prose-li:text-base-content/70 prose-strong:text-base-content prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* Call to Action */}
            <div className="mt-12 pt-8 border-t border-base-300">
              <p className="text-lg font-semibold text-base-content">
                Let&apos;s connect
              </p>
              <p className="mt-1 text-base-content/70">
                Always happy to talk cloud, leadership, or side projects.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  <FaEnvelope aria-hidden="true" />
                  Get in Touch
                </Link>
                <a
                  href="https://www.linkedin.com/in/johnx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <FaLinkedin aria-hidden="true" />
                  LinkedIn
                </a>
                <Link href="/projects" className="btn btn-ghost">
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
