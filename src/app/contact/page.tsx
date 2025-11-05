import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact John Xanthopoulos',
  description:
    'Get in touch with John Xanthopoulos for technology consulting, speaking engagements, or professional collaboration opportunities.',
  alternates: {
    canonical: '/contact',
  },
}

export default function Contact() {
  return (
    <Layout>
      <ContactClient />
    </Layout>
  )
}
