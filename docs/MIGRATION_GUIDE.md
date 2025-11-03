# Gatsby to Next.js Migration Guide

## Project Information

**Source:** `/Users/johxan/Documents/my-projects/gatsby/personal-site-new`
**Target:** `/Users/johxan/Documents/my-projects/nextjs-personal-site`
**Migration Start Date:** November 2, 2025
**Current Site:** https://synepho.com
**Framework:** Next.js 15 with App Router

---

## Migration Overview

This document outlines the complete migration plan from Gatsby 5 to Next.js 15. The migration maintains all existing features while improving performance, build times, and developer experience.

### Key Changes

- **Build System:** Gatsby GraphQL → Next.js App Router with file-based data
- **Image Optimization:** gatsby-plugin-image → next/image
- **Routing:** Gatsby pages → Next.js App Router (app directory)
- **Data Fetching:** GraphQL queries → Server Components with direct imports
- **Styling:** Tailwind CSS + DaisyUI (unchanged)
- **Deployment:** AWS S3 + CloudFront (unchanged)

---

## Current Project Structure (Gatsby)

```
gatsby/personal-site-new/
├── src/
│   ├── components/
│   │   ├── AnimatedSection.js     # Intersection observer animations
│   │   ├── ClientOnly.js          # SSR-safe rendering
│   │   ├── Footer.js              # Site footer
│   │   ├── Layout.js              # Main layout wrapper
│   │   ├── Navbar.js              # Navigation with JX logo
│   │   ├── ScrollToTop.js         # Scroll to top button
│   │   └── Seo.js                 # SEO meta tags
│   ├── pages/
│   │   ├── index.js               # Homepage
│   │   ├── aboutme.js             # About page
│   │   ├── projects.js            # Projects showcase
│   │   ├── awshealth.js           # AWS Health project detail
│   │   ├── awssite.js             # AWS Multi-region site detail
│   │   ├── awsrss.js              # AWS RSS checker detail
│   │   ├── resume.js              # Resume page
│   │   ├── contact.js             # Contact form
│   │   ├── lawn.js                # Lawn project showcase
│   │   └── blog/                  # Blog posts
│   ├── content/
│   │   └── projects.json          # Projects data
│   ├── markdown-pages/
│   │   ├── about.md
│   │   └── resume.md
│   ├── images/                    # Gatsby-optimized images
│   └── styles/                    # Global CSS
├── static/                        # Static assets
│   ├── favicon.svg
│   ├── social-image.png
│   └── manifest.json
└── gatsby-config.js
```

---

## Target Project Structure (Next.js)

```
nextjs-personal-site/
├── src/
│   ├── app/                       # App Router pages
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Homepage
│   │   ├── about/page.tsx         # About page
│   │   ├── projects/              # Projects section
│   │   │   ├── page.tsx           # Projects index
│   │   │   ├── aws-health/page.tsx
│   │   │   ├── aws-site/page.tsx
│   │   │   ├── aws-rss/page.tsx
│   │   │   └── lawn/page.tsx
│   │   ├── resume/page.tsx        # Resume page
│   │   ├── contact/page.tsx       # Contact form
│   │   └── blog/                  # Blog posts
│   ├── components/                # React components
│   │   ├── AnimatedSection.tsx
│   │   ├── ClientOnly.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   └── ScrollToTop.tsx
│   ├── content/                   # Static content
│   │   ├── projects.json
│   │   ├── about.md
│   │   └── resume.md
│   ├── lib/                       # Utilities
│   │   ├── markdown.ts            # Markdown parsing
│   │   └── analytics.ts           # Google Analytics
│   ├── types/                     # TypeScript types
│   │   └── index.ts
│   └── styles/                    # Additional styles if needed
├── public/                        # Static assets
│   ├── images/                    # Images (unoptimized)
│   ├── favicon.svg
│   ├── social-image.png
│   └── manifest.json
├── next.config.js                 # Next.js configuration
├── tailwind.config.ts             # Tailwind + DaisyUI config
└── tsconfig.json                  # TypeScript config
```

---

## Migration Phases

### Phase 1: Setup ✅ COMPLETE
- [x] Create Next.js project structure
- [x] Install dependencies (Next.js 15, React 18, TypeScript)
- [x] Configure Tailwind CSS + DaisyUI
- [x] Set up ESLint and Prettier
- [x] Configure for static export (S3 compatibility)
- [x] Create migration documentation

### Phase 2: Component Migration (Estimated: 4-6 hours)
- [ ] Migrate Layout.tsx (App Router layout)
- [ ] Migrate Navbar.tsx (convert Link components)
- [ ] Migrate Footer.tsx (minimal changes)
- [ ] Migrate AnimatedSection.tsx (use client directive)
- [ ] Migrate ScrollToTop.tsx (use client directive)
- [ ] Migrate ClientOnly.tsx (adjust for Next.js)
- [ ] Remove Seo.js (use Next.js metadata API)

### Phase 3: Page Migration (Estimated: 6-8 hours)
- [ ] Homepage (index.js → app/page.tsx)
- [ ] About page (aboutme.js → app/about/page.tsx)
- [ ] Projects index (projects.js → app/projects/page.tsx)
- [ ] Project detail pages:
  - [ ] AWS Health (awshealth.js → app/projects/aws-health/page.tsx)
  - [ ] AWS Site (awssite.js → app/projects/aws-site/page.tsx)
  - [ ] AWS RSS (awsrss.js → app/projects/aws-rss/page.tsx)
  - [ ] Lawn project (lawn.js → app/projects/lawn/page.tsx)
- [ ] Resume page (resume.js → app/resume/page.tsx)
- [ ] Contact page (contact.js → app/contact/page.tsx)
- [ ] Blog pages (blog/ → app/blog/)

### Phase 4: Content & Data (Estimated: 3-4 hours)
- [ ] Copy projects.json to src/content/
- [ ] Copy markdown files to src/content/
- [ ] Copy images to public/images/
- [ ] Copy static assets (favicon, social-image, etc.)
- [ ] Create markdown parsing utility (lib/markdown.ts)
- [ ] Convert GraphQL queries to direct imports

### Phase 5: SEO & Metadata (Estimated: 2-3 hours)
- [ ] Configure root layout metadata
- [ ] Add page-specific metadata
- [ ] Generate sitemap.xml (using next-sitemap)
- [ ] Generate robots.txt
- [ ] Verify Open Graph tags
- [ ] Verify Twitter Card tags
- [ ] Test social media sharing

### Phase 6: Features & Functionality (Estimated: 3-4 hours)
- [ ] Implement Google Analytics (gtag.js)
- [ ] Test contact form functionality
- [ ] Verify all internal links
- [ ] Test animations and interactions
- [ ] Verify responsive design
- [ ] Test browser compatibility

### Phase 7: Build & Deploy (Estimated: 2-3 hours)
- [ ] Run production build (`next build`)
- [ ] Verify static export works
- [ ] Test locally with `npx serve out`
- [ ] Deploy to S3 (test environment first)
- [ ] Invalidate CloudFront cache
- [ ] Verify live site functionality
- [ ] Update DNS if needed

### Phase 8: Testing & Optimization (Estimated: 3-4 hours)
- [ ] Lighthouse performance audit
- [ ] SEO audit
- [ ] Accessibility audit (WCAG compliance)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Fix any issues discovered

---

## Key Technical Migrations

### 1. Image Optimization

**Gatsby (before):**
```jsx
import { StaticImage } from "gatsby-plugin-image"

<StaticImage
  src="../images/profile.jpg"
  alt="Profile"
  width={300}
  height={300}
/>
```

**Next.js (after):**
```tsx
import Image from 'next/image'
import profileImage from '@/public/images/profile.jpg'

<Image
  src={profileImage}
  alt="Profile"
  width={300}
  height={300}
  priority // For above-the-fold images
/>
```

### 2. Internal Links

**Gatsby (before):**
```jsx
import { Link } from "gatsby"

<Link to="/about">About</Link>
```

**Next.js (after):**
```tsx
import Link from 'next/link'

<Link href="/about">About</Link>
```

### 3. SEO Metadata

**Gatsby (before):**
```jsx
import { Helmet } from "react-helmet"

<Helmet>
  <title>Page Title</title>
  <meta name="description" content="Description" />
</Helmet>
```

**Next.js (after):**
```tsx
// In app/page-name/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Description',
  openGraph: {
    title: 'Page Title',
    description: 'Description',
  },
}
```

### 4. Data Fetching

**Gatsby (before):**
```jsx
import { graphql, useStaticQuery } from "gatsby"

const data = useStaticQuery(graphql`
  query {
    allProjectsJson {
      nodes {
        id
        name
        description
      }
    }
  }
`)
```

**Next.js (after):**
```tsx
// In Server Component (default in App Router)
import projectsData from '@/content/projects.json'

// Use directly
const projects = projectsData
```

### 5. Client-Side Components

**Gatsby (before):**
```jsx
// Automatically handles both server and client
import React, { useState } from 'react'

export default function Component() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

**Next.js (after):**
```tsx
'use client' // Add this directive at the top

import { useState } from 'react'

export default function Component() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### 6. Environment Variables

**Gatsby (before):**
```bash
GATSBY_SITE_URL=https://synepho.com
GATSBY_GOOGLE_ANALYTICS_ID=G-2HLT4VSZHW
```

**Next.js (after):**
```bash
NEXT_PUBLIC_SITE_URL=https://synepho.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-2HLT4VSZHW
```

---

## Component Migration Checklist

### High Priority Components (Must migrate first)
- [ ] **Layout.tsx** - Main layout wrapper (affects all pages)
- [ ] **Navbar.tsx** - Navigation (used on every page)
- [ ] **Footer.tsx** - Footer (used on every page)

### Medium Priority Components (Core functionality)
- [ ] **AnimatedSection.tsx** - Animations (used throughout site)
- [ ] **ScrollToTop.tsx** - UX feature (nice to have)
- [ ] **ClientOnly.tsx** - May not be needed in Next.js

### Low Priority (Can migrate last)
- [ ] Seo.js - Replace with Next.js metadata API (don't migrate directly)

---

## Page Migration Priority

### Phase 1 (Core Pages)
1. Homepage (`/`) - Most important
2. About (`/about`) - High traffic
3. Projects index (`/projects`) - Portfolio showcase

### Phase 2 (Project Detail Pages)
4. AWS Health project
5. AWS Multi-region site
6. AWS RSS checker
7. Lawn project

### Phase 3 (Supporting Pages)
8. Resume (`/resume`)
9. Contact (`/contact`)
10. Blog posts (`/blog/*`)

---

## Dependencies to Install

```bash
# Core dependencies (already in package.json)
npm install next react react-dom

# UI & Styling (already in package.json)
npm install tailwindcss postcss autoprefixer daisyui
npm install @tailwindcss/typography react-icons

# TypeScript support (already in package.json)
npm install -D typescript @types/react @types/node @types/react-dom

# Additional utilities (install during migration)
npm install gray-matter         # Markdown frontmatter parsing
npm install next-mdx-remote      # MDX support if needed
npm install next-sitemap         # Automatic sitemap generation

# Code quality (already in package.json)
npm install -D eslint eslint-config-next prettier
```

---

## Environment Configuration

### Development (.env.local)
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-2HLT4VSZHW
NODE_ENV=development
```

### Production (.env.production)
```bash
NEXT_PUBLIC_SITE_URL=https://www.synepho.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-2HLT4VSZHW
AWS_REGION=us-east-1
AWS_S3_BUCKET=www.synepho.com
CLOUDFRONT_DISTRIBUTION_ID=E2UW9JLSX34HRT
```

---

## Build & Deployment

### Local Development
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server locally
```

### Static Export (for S3)
```bash
npm run build        # Builds to .next/ and exports to out/
```

### Deploy to S3
```bash
# Using existing deployment scripts (updated for Next.js)
npm run deploy:prod  # Deploy to S3 with optimized caching
npm run invalidate   # Invalidate CloudFront cache
npm run deploy:full  # Build + deploy + invalidate
```

---

## Testing Checklist

### Functionality Testing
- [ ] All pages load correctly
- [ ] Navigation works (internal links)
- [ ] External links open in new tabs
- [ ] Contact form submits
- [ ] Animations trigger on scroll
- [ ] Scroll to top button works
- [ ] Mobile menu opens/closes

### SEO Testing
- [ ] All pages have proper meta tags
- [ ] Open Graph images display correctly
- [ ] Twitter Cards work
- [ ] sitemap.xml generates correctly
- [ ] robots.txt is accessible
- [ ] Structured data validates (schema.org)

### Performance Testing
- [ ] Lighthouse score >90 (Performance)
- [ ] Lighthouse score >95 (SEO)
- [ ] Lighthouse score >90 (Accessibility)
- [ ] Images lazy load properly
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.0s

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (macOS)
- [ ] Safari (iOS)
- [ ] Edge (latest)

### Device Testing
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (iPad)
- [ ] Mobile (iPhone 14)
- [ ] Mobile (Android)

---

## Rollback Plan

If issues arise during migration:

1. **Keep Gatsby site running** - Don't delete the Gatsby project
2. **Test in staging** - Deploy to a test S3 bucket first
3. **DNS flexibility** - Can quickly revert DNS to old CloudFront distribution
4. **Backup strategy** - Keep old S3 bucket contents for 30 days

### Quick Rollback Commands
```bash
# Redeploy Gatsby site if needed
cd /Users/johxan/Documents/my-projects/gatsby/personal-site-new
npm run build
npm run deploy:prod
npm run invalidate
```

---

## Success Criteria

The migration is complete when:

- [ ] All pages render correctly
- [ ] All functionality works (forms, navigation, animations)
- [ ] SEO scores match or exceed Gatsby site
- [ ] Performance scores match or exceed Gatsby site
- [ ] No broken links or missing images
- [ ] Deployment to S3 works smoothly
- [ ] CloudFront caching behaves correctly
- [ ] Google Analytics tracking works

---

## Timeline Estimate

**Total Estimated Time: 26-35 hours**

- **Phase 1:** Setup - ✅ Complete
- **Phase 2:** Component Migration - 4-6 hours
- **Phase 3:** Page Migration - 6-8 hours
- **Phase 4:** Content & Data - 3-4 hours
- **Phase 5:** SEO & Metadata - 2-3 hours
- **Phase 6:** Features - 3-4 hours
- **Phase 7:** Build & Deploy - 2-3 hours
- **Phase 8:** Testing - 3-4 hours

**Realistic Timeline:**
- **With Claude Code:** 3-4 days (Claude handles 75-80% of work)
- **Solo Development:** 5-7 days
- **Part-time (evenings/weekends):** 2-3 weeks

---

## Notes for Claude Code

When working on this migration:

1. **Always reference source files** from `/Users/johxan/Documents/my-projects/gatsby/personal-site-new`
2. **Follow TypeScript conventions** - Use proper types for all components
3. **Use 'use client' directive** only when necessary (useState, useEffect, event handlers)
4. **Maintain existing styling** - Keep Tailwind classes and DaisyUI components
5. **Test after each major change** - Run `npm run build` to verify
6. **Update this document** as migration progresses

---

## Resources

- **Next.js Documentation:** https://nextjs.org/docs
- **App Router Guide:** https://nextjs.org/docs/app
- **Migration Guide:** https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration
- **next/image:** https://nextjs.org/docs/app/api-reference/components/image
- **Metadata API:** https://nextjs.org/docs/app/building-your-application/optimizing/metadata

---

**Last Updated:** November 2, 2025
**Document Version:** 1.0
**Status:** Setup Complete - Ready for Component Migration
