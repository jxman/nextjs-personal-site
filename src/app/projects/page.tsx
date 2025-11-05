import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import AnimatedSection from '@/components/AnimatedSection'
import ProjectCard from '@/components/ProjectCard'
import projectsData from '@/content/projects-enhanced.json'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my portfolio of web development projects featuring AWS, React, Terraform, and modern cloud architecture solutions.',
  alternates: {
    canonical: '/projects',
  },
}

interface Project {
  id: number
  name: string
  image: string
  text: string
  description: string
  demo_link: string
  github_link: string
  status: string
  featured: boolean
  tech_stack: string[]
  category: string
}

export default function Projects() {
  const projects: Project[] = projectsData

  // Separate featured and regular projects
  const featuredProjects = projects.filter((p) => p.featured)
  const regularProjects = projects.filter((p) => !p.featured)

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
          <h1 className="text-4xl font-bold text-base-content mb-4">
            My Projects
          </h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            A collection of personal and professional projects showcasing my
            experience with modern web technologies, cloud architecture, and
            full-stack development.
          </p>
        </AnimatedSection>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-base-content mb-6">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.map((project, index) => (
                <AnimatedSection
                  key={project.id}
                  animation="fadeInUp"
                  delay={index * 100}
                >
                  <ProjectCard {...project} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        {regularProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-base-content mb-6">
              {featuredProjects.length > 0 ? 'More Projects' : 'All Projects'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project, index) => (
                <AnimatedSection
                  key={project.id}
                  animation="fadeInUp"
                  delay={index * 100}
                >
                  <ProjectCard {...project} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-base-content/60 text-lg">
              No projects found. Check back soon!
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}
