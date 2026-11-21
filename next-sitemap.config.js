/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.synepho.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml', '/tools', '/tools/'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // Custom priority and changefreq based on page importance
  transform: async (config, path) => {
    // Homepage - highest priority
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }

    // Key pages - high priority
    if (
      ['/about/', '/projects/', '/apps/', '/resume/', '/contact/'].includes(
        path
      )
    ) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }

    // Blog pages - medium-high priority
    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }
    }

    // App pages - medium-high priority
    if (path.startsWith('/apps/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }
    }

    // Project detail pages - medium priority
    if (path.startsWith('/projects/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      }
    }

    // Default for any other pages
    return {
      loc: path,
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date().toISOString(),
    }
  },
}
