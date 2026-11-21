import appsData from '@/content/apps.json'
import type { App } from '@/types/app'

const apps = appsData as App[]

export function getApps(): App[] {
  return apps
}

export function getApp(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug)
}

export function isExternal(href: string): boolean {
  return href.startsWith('http')
}
