import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import {
  FaArrowLeft,
  FaCheckCircle,
  FaDownload,
  FaExternalLinkAlt,
  FaGithub,
  FaTools,
  FaBookOpen,
} from 'react-icons/fa'
import Layout from '@/components/Layout'
import AnimatedSection from '@/components/AnimatedSection'
import AppIcon from '@/components/AppIcon'
import CopyCode from '@/components/CopyCode'
import { getApp, getApps, isExternal } from '@/lib/apps'
import type { App, AppLink } from '@/types/app'

const SITE_URL = 'https://www.synepho.com'

export const dynamicParams = false

export function generateStaticParams() {
  return getApps().map((app) => ({ slug: app.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/apps/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const app = getApp(slug)
  if (!app) return {}

  const title = `${app.name} - ${app.tagline}`
  const image = `${SITE_URL}${app.hero.src}`

  return {
    title: app.name,
    description: app.summary,
    alternates: {
      canonical: `/apps/${app.slug}`,
    },
    openGraph: {
      title,
      description: app.tagline,
      url: `${SITE_URL}/apps/${app.slug}`,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: app.tagline,
      images: [image],
    },
  }
}

function CtaLink({
  link,
  className,
  icon,
}: {
  link: AppLink
  className: string
  icon?: ReactNode
}) {
  const external = isExternal(link.href)
  return (
    <a
      href={link.href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon}
      {link.label}
    </a>
  )
}

function softwareSchema(app: App) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.summary,
    applicationCategory: app.schemaCategory,
    operatingSystem: app.operatingSystem,
    url: `${SITE_URL}/apps/${app.slug}`,
    image: `${SITE_URL}${app.hero.src}`,
    screenshot: `${SITE_URL}${app.hero.src}`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: 'John Xanthopoulos',
      url: SITE_URL,
    },
  }
}

export default async function AppPage({ params }: PageProps<'/apps/[slug]'>) {
  const { slug } = await params
  const app = getApp(slug)
  if (!app) notFound()

  const isDownload = app.primaryCta.label.toLowerCase().includes('download')
  const otherApps = getApps().filter((a) => a.slug !== app.slug)

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema(app)),
        }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/apps" className="btn btn-ghost btn-sm">
            <FaArrowLeft className="w-3 h-3" /> All apps
          </Link>
        </div>

        {/* Hero */}
        <AnimatedSection
          animation="fadeInUp"
          className="text-center mb-10 flex flex-col items-center"
        >
          <AppIcon name={app.name} icon={app.icon} size={96} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 mb-3">
            {app.name}
          </h1>
          <p className="text-lg sm:text-xl text-base-content/80 max-w-3xl font-medium">
            {app.tagline}
          </p>
          <p className="text-base text-base-content/70 max-w-3xl mt-4 leading-relaxed">
            {app.summary}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <CtaLink
              link={app.primaryCta}
              className="btn btn-primary"
              icon={
                isDownload ? (
                  <FaDownload className="w-4 h-4" />
                ) : (
                  <FaExternalLinkAlt className="w-4 h-4" />
                )
              }
            />
            {app.secondaryCta && (
              <CtaLink
                link={app.secondaryCta}
                className="btn btn-outline"
                icon={
                  app.secondaryCta.href.includes('github.com') ? (
                    <FaGithub className="w-4 h-4" />
                  ) : undefined
                }
              />
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-5">
            <span className="badge badge-success badge-outline">Free</span>
            {app.platforms.map((platform) => (
              <span key={platform} className="badge badge-outline">
                {platform}
              </span>
            ))}
            <span className="badge badge-outline">{app.category}</span>
          </div>
          {app.requirements && (
            <p className="text-sm text-base-content/60 mt-3">
              {app.requirements}
            </p>
          )}
        </AnimatedSection>

        {/* Hero image or tour */}
        <AnimatedSection animation="fadeInUp" className="mb-16">
          <figure>
            <Image
              className="w-full h-auto rounded-2xl shadow-2xl border border-base-200"
              src={(app.tour ?? app.hero).src}
              alt={(app.tour ?? app.hero).alt}
              width={(app.tour ?? app.hero).width}
              height={(app.tour ?? app.hero).height}
              priority
              unoptimized
            />
          </figure>
        </AnimatedSection>

        {/* Features */}
        <section className="mb-16" aria-labelledby="features-heading">
          <h2
            id="features-heading"
            className="text-2xl sm:text-3xl font-bold text-center mb-8"
          >
            What it does for you
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {app.features.map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                animation="fadeInUp"
                delay={index * 75}
              >
                <div className="card bg-base-100 border border-base-200 shadow-sm h-full">
                  <div className="card-body p-5">
                    <h3 className="font-semibold text-lg flex items-start gap-2">
                      <FaCheckCircle className="text-primary w-4 h-4 mt-1.5 flex-shrink-0" />
                      {feature.title}
                    </h3>
                    <p className="text-sm text-base-content/70 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Quick Start */}
        <section
          className="mb-16 bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-10"
          aria-labelledby="quick-start-heading"
        >
          <h2
            id="quick-start-heading"
            className="text-2xl sm:text-3xl font-bold text-center mb-2"
          >
            Quick Start
          </h2>
          <p className="text-center text-base-content/60 mb-8">
            Up and running in a couple of minutes
          </p>
          <ol className="max-w-3xl mx-auto space-y-6">
            {app.quickStart.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-content font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <div className="min-w-0 flex-grow pt-1">
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-base-content/70 leading-relaxed">
                    {step.text}
                  </p>
                  {step.code && <CopyCode code={step.code} />}
                </div>
              </li>
            ))}
          </ol>
          <div className="flex justify-center mt-10">
            <CtaLink
              link={app.primaryCta}
              className="btn btn-primary"
              icon={
                isDownload ? (
                  <FaDownload className="w-4 h-4" />
                ) : (
                  <FaExternalLinkAlt className="w-4 h-4" />
                )
              }
            />
          </div>
        </section>

        {/* Screens */}
        {app.screens && app.screens.length > 0 && (
          <section className="mb-16" aria-labelledby="screens-heading">
            <h2
              id="screens-heading"
              className="text-2xl sm:text-3xl font-bold text-center mb-2"
            >
              Screens
            </h2>
            <p className="text-sm text-base-content/60 text-center mb-8">
              Click any screenshot to view it full size
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {app.screens.map((screen) => (
                <figure
                  key={screen.name}
                  className="bg-base-200 rounded-2xl overflow-hidden shadow-lg flex flex-col"
                >
                  <a
                    href={screen.image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Image
                      className="w-full h-auto hover:opacity-90 transition-opacity"
                      src={screen.image.src}
                      alt={screen.image.alt}
                      width={screen.image.width}
                      height={screen.image.height}
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
          </section>
        )}

        {/* FAQ */}
        {app.faq && app.faq.length > 0 && (
          <section
            className="mb-16 max-w-3xl mx-auto"
            aria-labelledby="faq-heading"
          >
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-bold text-center mb-8"
            >
              Questions
            </h2>
            <div className="space-y-3">
              {app.faq.map((item) => (
                <details
                  key={item.question}
                  className="collapse collapse-arrow bg-base-100 border border-base-200"
                >
                  <summary className="collapse-title font-semibold">
                    {item.question}
                  </summary>
                  <div className="collapse-content text-base-content/70">
                    <p>{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Behind the app */}
        <section className="mb-16 text-center" aria-labelledby="behind-heading">
          <h2 id="behind-heading" className="text-2xl font-bold mb-4">
            Behind the app
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {app.techStack.map((tech) => (
              <span key={tech} className="badge badge-ghost">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {app.caseStudy && (
              <Link href={app.caseStudy} className="btn btn-outline btn-sm">
                <FaTools className="w-3 h-3" /> How I built it
              </Link>
            )}
            {app.relatedPost && (
              <Link
                href={app.relatedPost.href}
                className="btn btn-outline btn-sm"
              >
                <FaBookOpen className="w-3 h-3" /> {app.relatedPost.label}
              </Link>
            )}
            {app.github && (
              <a
                href={app.github}
                className="btn btn-outline btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-3 h-3" /> Source code
              </a>
            )}
          </div>
        </section>

        {/* More apps */}
        <section aria-labelledby="more-apps-heading">
          <h2
            id="more-apps-heading"
            className="text-xl font-semibold text-center mb-6"
          >
            More apps
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {otherApps.map((other) => (
              <Link
                key={other.slug}
                href={`/apps/${other.slug}`}
                className="flex items-center gap-3 bg-base-100 border border-base-200 rounded-xl px-4 py-3 shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
              >
                <AppIcon name={other.name} icon={other.icon} size={36} />
                <span className="font-medium">{other.name}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
