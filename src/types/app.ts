export interface AppLink {
  label: string
  href: string
}

export interface AppImage {
  src: string
  /** Dark-mode capture, shown when the site is in light mode */
  srcDark?: string
  /** Size of `srcDark` when it differs from `width`/`height` */
  darkWidth?: number
  darkHeight?: number
  alt: string
  width: number
  height: number
}

export interface AppFeature {
  title: string
  text: string
}

export interface AppQuickStartStep {
  title: string
  text: string
  /** Optional command or URL shown in a copyable code block */
  code?: string
}

export interface AppFaq {
  question: string
  answer: string
}

export interface AppScreen {
  name: string
  text: string
  image: AppImage
}

export interface App {
  slug: string
  name: string
  /** One-line pitch used on cards and in the hero */
  tagline: string
  /** Short paragraph under the hero heading */
  summary: string
  /** App icon path; falls back to a generic icon when omitted */
  icon?: string
  platforms: string[]
  category: string
  /** schema.org applicationCategory, e.g. DeveloperApplication */
  schemaCategory: string
  /** schema.org operatingSystem, e.g. "macOS 15+" or "Web browser" */
  operatingSystem: string
  requirements?: string
  primaryCta: AppLink
  secondaryCta?: AppLink
  hero: AppImage
  /** 1200x630 image for link previews (og:image, twitter:image); falls back to the hero */
  ogImage?: string
  tour?: AppImage
  features: AppFeature[]
  quickStart: AppQuickStartStep[]
  screens?: AppScreen[]
  faq?: AppFaq[]
  /** Internal link to the "how I built it" project page */
  caseStudy?: string
  /** Blog post about the app, if there is one */
  relatedPost?: AppLink
  github?: string
  techStack: string[]
}
