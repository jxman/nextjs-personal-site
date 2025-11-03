/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export to S3
  },
  trailingSlash: true,

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://www.synepho.com',
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID || 'G-2HLT4VSZHW',
  },
}

module.exports = nextConfig
