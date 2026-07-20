import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import AnimatedSection from '@/components/AnimatedSection'
import ToolCard from '@/components/ToolCard'
import projectsData from '@/content/projects-enhanced.json'
import cloudToolsData from '@/content/cloud-tools.json'

export const metadata: Metadata = {
  title: 'Cloud Tools',
  description:
    'A curated collection of cloud status dashboards and infrastructure tools, including apps I built and third-party tools I rely on.',
  alternates: {
    canonical: '/tools',
  },
}

interface OwnTool {
  id: number
  name: string
  tagline: string
  demo_link: string
  tool?: boolean
}

interface Tool {
  id: number
  name: string
  description: string
  url: string
  category: string
}

export default function Tools() {
  const myTools = (projectsData as OwnTool[]).filter((p) => p.tool)
  const thirdPartyTools: Tool[] = cloudToolsData

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
          <h1 className="text-4xl font-bold text-base-content mb-4">
            Cloud Tools
          </h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            A collection of cloud and infrastructure tools — starting with a
            couple I built myself, plus helpful third-party links I use and
            recommend.
          </p>
        </AnimatedSection>

        {/* Built by Me - highlighted */}
        {myTools.length > 0 && (
          <div className="mb-16 bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-base-content mb-6">
              Built by Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {myTools.map((tool, index) => (
                <AnimatedSection
                  key={tool.id}
                  animation="fadeInUp"
                  delay={index * 100}
                >
                  <ToolCard
                    name={tool.name}
                    description={tool.tagline}
                    url={tool.demo_link}
                    badge="Built by Me"
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}

        {/* Helpful Links - consolidated third-party tools */}
        {thirdPartyTools.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-base-content mb-6">
              Helpful Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {thirdPartyTools.map((tool, index) => (
                <AnimatedSection
                  key={tool.id}
                  animation="fadeInUp"
                  delay={index * 100}
                >
                  <ToolCard {...tool} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
