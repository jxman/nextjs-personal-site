import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lawn Care & Landscaping Project - Personal Transformation Gallery',
  description:
    "View John Xanthopoulos' lawn care and landscaping transformation project. Browse before and after photos showcasing dedication to excellence in all endeavors.",
}

export default function LawnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
