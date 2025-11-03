import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact John Xanthopoulos - IT Executive & Cloud Architect',
  description:
    'Get in touch with John Xanthopoulos for technology leadership consulting, cloud architecture discussions, and professional collaboration opportunities. Connect via LinkedIn or email.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
