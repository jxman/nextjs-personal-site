import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import ResumeClient from './ResumeClient'
import { getMarkdownContent } from '@/lib/markdown'

export const metadata: Metadata = {
  title: 'John Xanthopoulos Resume - IT Executive & Cloud Solutions Architect',
  description:
    'View and download the professional resume of John Xanthopoulos, IT Executive with 20+ years experience in cloud architecture, team leadership, and enterprise technology solutions.',
}

export default function Resume() {
  const { html } = getMarkdownContent('resume.md')

  return (
    <Layout>
      <ResumeClient html={html} />
    </Layout>
  )
}
