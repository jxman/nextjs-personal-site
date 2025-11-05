# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

This is a **Next.js 15 portfolio website** that was **successfully migrated from Gatsby 5** in November 2025.

- **Current Project:** `/Users/johxan/Documents/my-projects/nextjs/nextjs-personal-site` (this directory)
- **Source Project:** `/Users/johxan/Documents/my-projects/gatsby/personal-site-new` (archived)
- **Live Site:** https://synepho.com
- **Deployment:** AWS S3 + CloudFront (static export)
- **Migration Status:** ✅ Complete - See [ROADMAP.md](./docs/ROADMAP.md) for ongoing improvements

## Essential Commands

### Development
```bash
npm run dev              # Start dev server at http://localhost:3000
npm run build            # Production build (creates /out folder for static export)
npm run start            # Start production server locally
npm run lint             # Run ESLint checks
```

### Code Quality
```bash
npm run format           # Format all files with Prettier
npm run format:check     # Check if files are formatted correctly
```

### Deployment (AWS S3)
```bash
npm run deploy:prod      # Deploy to S3 with cache optimization
npm run invalidate       # Invalidate CloudFront cache (uses CLOUDFRONT_DISTRIBUTION_ID env var)
npm run deploy:full      # Complete deployment: build + deploy + invalidate
```

## Architecture Overview

### Next.js 15 App Router Configuration

**Critical Configuration (next.config.js):**
- `output: 'export'` - Enables static export for S3 deployment
- `images: { unoptimized: true }` - Required for S3 static hosting
- `trailingSlash: true` - Better routing for S3
- Environment variables defined in config (SITE_URL, GOOGLE_ANALYTICS_ID)

### Project Structure

```
src/
├── app/                      # Next.js App Router (file-based routing)
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Homepage (/)
│   ├── about/page.tsx        # /about
│   ├── projects/             # /projects/*
│   │   ├── page.tsx          # Projects index
│   │   ├── aws-health/page.tsx
│   │   ├── aws-site/page.tsx
│   │   ├── aws-rss/page.tsx
│   │   └── lawn/page.tsx
│   ├── resume/page.tsx       # /resume
│   ├── contact/page.tsx      # /contact
│   └── blog/[slug]/page.tsx  # Dynamic blog routes
├── components/               # Shared React components
│   ├── BlogCard.tsx          # Blog post card (reusable)
│   ├── ProjectCard.tsx       # Project card (reusable)
│   ├── StructuredData.tsx    # JSON-LD schema markup
│   ├── Layout.tsx            # Main layout wrapper
│   ├── Navbar.tsx            # Navigation
│   └── Footer.tsx            # Footer
├── content/                  # Static content (JSON, Markdown)
│   ├── blog-posts.json       # Centralized blog metadata
│   ├── projects-enhanced.json # Projects with tech stacks
│   ├── about.md              # About page content
│   └── resume.md             # Resume content
├── lib/                      # Utility functions
└── types/                    # TypeScript type definitions

public/
├── images/                   # Static images (unoptimized for S3)
│   └── blog/                 # Blog post thumbnails (optimized)
├── favicon.svg
├── social-image.png
└── manifest.json
```

### TypeScript Path Alias
- `@/*` maps to `./src/*` (configured in tsconfig.json)
- Use `import X from '@/components/X'` instead of relative paths

## Component Development Standards

**When creating or modifying components:**

1. **Reusable Components:**
   - Extract repeated UI patterns into components (e.g., BlogCard, ProjectCard)
   - Use TypeScript interfaces for props
   - Support both server and client rendering where appropriate
   - Example: `BlogCard.tsx`, `ProjectCard.tsx`

2. **Content Management:**
   - Centralize content in JSON files (e.g., `blog-posts.json`, `projects-enhanced.json`)
   - Use consistent data structures with proper TypeScript types
   - Keep content separate from presentation logic

3. **SEO Best Practices:**
   - Add canonical URLs to all page metadata
   - Include structured data (JSON-LD) for rich search results
   - Use proper Open Graph and Twitter Card meta tags
   - Optimize images (1200x630 for social sharing)

4. **Testing:**
   ```bash
   npm run build   # Verify compilation
   npm run lint    # Check code quality
   ```

## Client vs Server Components

**Default:** All components in App Router are Server Components.

**Add `'use client'` directive ONLY when using:**
- React hooks: `useState`, `useEffect`, `useRef`, `useContext`
- Browser APIs: `window`, `document`, `localStorage`, `IntersectionObserver`
- Event handlers: `onClick`, `onChange`, `onSubmit`, etc.
- Third-party libraries that require browser context

**Common client components in this project:**
- Navigation with mobile menu toggle
- Animated sections with IntersectionObserver
- Scroll-to-top button
- Contact form with state management

## Key Technical Patterns

### SEO Metadata (Next.js 15)
```tsx
// In any page.tsx file
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    images: ['https://www.synepho.com/social-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Title',
    images: ['https://www.synepho.com/social-image.png'],
  },
}
```

### Images for S3 Deployment
```tsx
import Image from 'next/image'

// Always include unoptimized prop for S3 static export
<Image
  src="/images/example.jpg"
  alt="Description"
  width={800}
  height={600}
  unoptimized  // Required for static export
/>
```

### Internal Links
```tsx
import Link from 'next/link'

<Link href="/about">About</Link>
```

### Environment Variables
- Variables in `next.config.js` env object are available via `process.env.SITE_URL`
- For client-side access, prefix with `NEXT_PUBLIC_`
- CloudFront distribution ID: Use `CLOUDFRONT_DISTRIBUTION_ID` env var or default `E2UW9JLSX34HRT`

## Styling

**Stack:** Tailwind CSS + DaisyUI + React Icons

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Use Tailwind utility classes directly in components
- DaisyUI components available (btn, card, navbar, footer, etc.)
- Icons: `import { FaIcon } from 'react-icons/fa'`

## Testing After Changes

**Always test before asking user to verify:**

```bash
# 1. Check TypeScript compilation
npm run build

# 2. Verify no errors in output
# 3. Check dev server if needed
npm run dev

# 4. Verify linting passes
npm run lint
```

## Common Pitfalls

1. **Hydration Errors**
   - Ensure server and client render the same content
   - Use `'use client'` when component needs browser APIs
   - Avoid using `window` or `document` in Server Components

2. **Image Paths**
   - Use `/images/...` for public folder (not `./images`)
   - Always add `unoptimized` prop for S3 deployment
   - Width and height are required props

3. **Static Export Limitations**
   - No Server-Side Rendering (SSR) or API routes
   - No dynamic routes without `generateStaticParams`
   - No `next/image` optimization (must use `unoptimized: true`)

4. **Migration-Specific**
   - Don't copy `node_modules` from Gatsby project
   - Remove all Gatsby-specific packages and imports
   - Replace `Helmet` with Next.js metadata exports
   - Convert GraphQL queries to direct data imports

## Documentation References

Before starting work, reference these files:
- **[ROADMAP.md](./docs/ROADMAP.md)** - Project roadmap with completed and planned features
- **[README.md](./README.md)** - Project overview and current status
- **[DEPLOYMENT.md](./docs/DEPLOYMENT.md)** - AWS deployment guide
- **[MIGRATION_COMPLETE.md](./docs/MIGRATION_COMPLETE.md)** - Migration completion summary

## Recent Enhancements (November 2025)

**✅ Completed:**
- Blog page with dynamic card grid layout and optimized images
- Projects page with tech stack badges and status indicators
- Custom 404 error page with navigation
- Mobile responsive improvements (hero image, resume buttons)
- Comprehensive SEO enhancements (sitemap priorities, canonical URLs, structured data)

**📋 Next Steps:**
- See [ROADMAP.md](./docs/ROADMAP.md) for planned medium and low priority items
- Contact form functionality integration
- Performance optimization (image formats, caching)
- Accessibility improvements (WCAG AA compliance)

## Success Criteria

A feature/component is complete when:
- TypeScript compiles without errors (`npm run build` succeeds)
- ESLint passes with no errors (`npm run lint`)
- No console errors or warnings in browser
- Responsive design works on mobile, tablet, and desktop
- SEO metadata is properly configured (canonical URLs, Open Graph)
- All interactive features work correctly
- Documentation updated (README.md, ROADMAP.md if applicable)

---

**Last Updated:** November 5, 2025
**Next.js Version:** 15.0.3
**React Version:** 18.3.1
**Migration Status:** ✅ Complete - Ongoing Enhancement Phase
