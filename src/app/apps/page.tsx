import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import AnimatedSection from '@/components/AnimatedSection'
import AppCard from '@/components/AppCard'
import { getApps } from '@/lib/apps'

const description =
  'Free apps by John Xanthopoulos: Brew Updates for macOS, Cloud Status Hub, AWS Services Dashboard, Lawn.Smart and Tesla Drive Companion.'

export const metadata: Metadata = {
  title: 'Apps',
  description,
  alternates: {
    canonical: '/apps',
  },
  openGraph: {
    title: 'Apps by John Xanthopoulos',
    description,
    url: 'https://www.synepho.com/apps',
    images: ['https://www.synepho.com/social-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apps by John Xanthopoulos',
    description,
    images: ['https://www.synepho.com/social-image.png'],
  },
}

export default function Apps() {
  const apps = getApps()

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
          <h1 className="text-4xl font-bold text-base-content mb-4">Apps</h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Free apps I build and run, for cloud engineers, Mac users and
            weekend lawn enthusiasts. Pick one to see what it does and get
            started in a couple of minutes.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <AnimatedSection
              key={app.slug}
              animation="fadeInUp"
              delay={index * 100}
            >
              <AppCard app={app} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Layout>
  )
}
