# John Xanthopoulos Portfolio

> Personal portfolio and blog sharing insights on technology leadership, cloud architecture, and modern software development.

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![AWS](https://img.shields.io/badge/AWS-S3%20%2B%20CloudFront-orange?logo=amazon-aws)](https://aws.amazon.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Live Site:** [https://synepho.com](https://synepho.com)
**GitHub:** [https://github.com/jxman/nextjs-personal-site](https://github.com/jxman/nextjs-personal-site)

---

## 🎯 Purpose

This is my personal portfolio and blog where I share thoughts on:

- **Technology Leadership** - Managing teams and platforms at scale
- **Cloud Architecture** - AWS solutions and infrastructure patterns
- **Modern Development** - React, Next.js, TypeScript, and AI-assisted development
- **Portfolio Projects** - Showcasing real-world implementations

The site was migrated from Gatsby 5 to Next.js 15 in November 2025, and will continue to evolve as a platform for sharing knowledge and experiences from 20+ years in technology.

---

## 🏗️ Architecture

### Application Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         User's Browser                              │
│                    (React 18 + TypeScript)                          │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                     Next.js 15 App Router                           │
│                    (Server Components)                               │
├─────────────────────────────────────────────────────────────────────┤
│  Pages:                      Components:                            │
│  • Homepage (/)              • Navbar (Client)                      │
│  • About (/about)            • Footer                               │
│  • Projects (/projects)      • AnimatedSection (Client)             │
│  • Blog (/blog)              • ScrollToTop (Client)                 │
│  • Resume (/resume)          • Layout (Server)                      │
│  • Contact (/contact)        • GoogleAnalytics (Client)             │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      Static Site Generation                         │
│                      (next build + export)                          │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               ▼
                        16 HTML pages + assets
                        (optimized, pre-rendered)
```

### AWS Deployment Architecture

```
┌─────────────────┐
│   Web Browser   │
│  (End Users)    │
└────────┬────────┘
         │ HTTPS
         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    Amazon CloudFront CDN                            │
│                  (Global Edge Locations)                            │
│                                                                     │
│  • SSL/TLS Termination                                             │
│  • Cache optimization (1 year for assets, 0 for HTML)             │
│  • GZIP compression                                                │
│  • Custom error pages (404)                                        │
│  • Distribution ID: E2UW9JLSX34HRT                                │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                     Amazon S3 Bucket                                │
│                    (www.synepho.com)                                │
│                                                                     │
│  Static Files:                                                     │
│  ├── /index.html (homepage)                                        │
│  ├── /about/index.html                                             │
│  ├── /projects/index.html                                          │
│  ├── /blog/index.html                                              │
│  ├── /_next/ (JS bundles)                                          │
│  ├── /images/ (optimized assets)                                   │
│  ├── /sitemap.xml                                                  │
│  └── /robots.txt                                                   │
│                                                                     │
│  • Static website hosting                                          │
│  • Origin Access Control (OAC)                                     │
│  • Region: us-east-1                                               │
└─────────────────────────────────────────────────────────────────────┘
```

### Build & Deployment Pipeline

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Local Dev     │───▶│  Build Process  │───▶│  AWS S3 Sync    │
│ (npm run dev)   │    │ (npm run build) │    │ (deploy:prod)   │
└─────────────────┘    └─────────────────┘    └────────┬────────┘
                                                        │
                       ┌────────────────────────────────┘
                       ▼
              ┌─────────────────┐
              │   CloudFront    │
              │  Invalidation   │
              │   (/*  paths)   │
              └─────────────────┘
```

### Content Flow

```
Developer ────▶ Markdown/JSON ────▶ Next.js Build ────▶ Static HTML
                (src/content/)      (SSG at build)      (out/ folder)
                                           │
                                           ▼
                                    SEO Optimized:
                                    • Meta tags
                                    • Open Graph
                                    • Twitter cards
                                    • Sitemap
                                    • Robots.txt
```

---

## 🛠️ Tech Stack

### Frontend

- **Framework:** [Next.js 15.0.3](https://nextjs.org/) - React framework with App Router
- **Language:** [TypeScript 5.6.3](https://www.typescriptlang.org/) - Type-safe JavaScript
- **UI Library:** [React 18.3.1](https://react.dev/) - Component-based UI
- **Styling:** [Tailwind CSS 3.4.16](https://tailwindcss.com/) - Utility-first CSS
- **Components:** [DaisyUI 4.12.20](https://daisyui.com/) - Tailwind component library
- **Icons:** [React Icons 5.4.0](https://react-icons.github.io/react-icons/) - Icon library

### Content & Data

- **Markdown:** [marked 16.4.1](https://marked.js.org/) - Markdown parser
- **Frontmatter:** [gray-matter 4.0.3](https://github.com/jonschlinkert/gray-matter) - Parse YAML frontmatter
- **Content Format:** Markdown files + JSON data files

### SEO & Analytics

- **Sitemap:** [next-sitemap 4.2.3](https://github.com/iamvishnusankar/next-sitemap) - Automated sitemap with priority structure
- **Analytics:** Google Analytics (G-2HLT4VSZHW) - Site traffic tracking
- **Meta Tags:** Next.js Metadata API - Open Graph, Twitter Cards
- **Structured Data:** JSON-LD schemas (Person, WebSite, Organization)
- **Canonical URLs:** All pages include canonical tags to prevent duplicate content

### Development Tools

- **Linting:** [ESLint 8.57.1](https://eslint.org/) - Code quality checks
- **Formatting:** [Prettier 3.4.2](https://prettier.io/) - Code formatting
- **CSS Processing:** [PostCSS 8.4.49](https://postcss.org/) + [Autoprefixer 10.4.20](https://github.com/postcss/autoprefixer)

### Deployment & Infrastructure

- **Cloud Provider:** [AWS](https://aws.amazon.com/)
- **Hosting:** Amazon S3 (static website hosting)
- **CDN:** Amazon CloudFront (global content delivery)
- **SSL/TLS:** AWS Certificate Manager
- **Region:** us-east-1 (US East - N. Virginia)

---

## 📁 Project Structure

```
nextjs-personal-site/
├── src/                        # Source code
│   ├── app/                    # Next.js App Router (file-based routing)
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Homepage (/)
│   │   ├── about/page.tsx      # About page
│   │   ├── projects/           # Projects section
│   │   │   ├── page.tsx        # Projects listing
│   │   │   ├── aws-health/     # Project detail pages
│   │   │   ├── aws-rss/
│   │   │   ├── aws-site/
│   │   │   └── lawn/
│   │   ├── blog/               # Blog section
│   │   │   ├── page.tsx        # Blog listing
│   │   │   ├── [slug]/         # Dynamic blog routes
│   │   │   ├── ai-pair-programming-journey/
│   │   │   ├── aws-services-dashboard-release/
│   │   │   └── lawnsmartapp-release/
│   │   ├── resume/page.tsx     # Resume page
│   │   ├── contact/page.tsx    # Contact page
│   │   └── globals.css         # Global styles
│   ├── components/             # Reusable React components
│   │   ├── Layout.tsx          # Main layout wrapper
│   │   ├── Navbar.tsx          # Navigation (client component)
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── BlogCard.tsx        # Blog post card component
│   │   ├── ProjectCard.tsx     # Project card component
│   │   ├── StructuredData.tsx  # JSON-LD schema markup
│   │   ├── AnimatedSection.tsx # Intersection Observer animations
│   │   ├── ScrollToTop.tsx     # Scroll-to-top button
│   │   ├── GoogleAnalytics.tsx # GA4 integration
│   │   └── ClientOnly.tsx      # Client-side hydration wrapper
│   ├── content/                # Static content
│   │   ├── about.md            # About page content
│   │   ├── resume.md           # Resume content
│   │   ├── blog-posts.json     # Blog metadata (centralized)
│   │   └── projects-enhanced.json  # Projects data with tech stacks
│   ├── lib/                    # Utility functions
│   │   └── markdown.ts         # Markdown processing
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets (copied to /out)
│   ├── images/                 # Project images, screenshots
│   ├── favicon.svg             # Vector favicon
│   ├── favicon.ico             # Legacy favicon
│   ├── apple-touch-icon.png    # iOS home screen icon
│   ├── social-image.png        # Open Graph image (1200x630)
│   └── manifest.json           # PWA manifest
├── docs/                       # Documentation
│   ├── ROADMAP.md              # Project roadmap with completed/planned features
│   ├── MIGRATION_GUIDE.md      # Gatsby to Next.js migration guide
│   ├── MIGRATION_COMPLETE.md   # Migration completion summary
│   ├── COMPONENT_MAPPING.md    # Component conversion patterns
│   ├── DEPLOYMENT.md           # AWS deployment guide
│   ├── GATSBY_VS_NEXTJS_COMPARISON.md  # Framework comparison
│   ├── IMPROVEMENTS_SUMMARY.md # Performance improvements
│   ├── PROJECT_SUMMARY.md      # Project overview
│   └── QUICK_START.md          # Quick reference
├── .github/                    # GitHub configuration
│   └── workflows/              # GitHub Actions (future CI/CD)
├── CLAUDE.md                   # Claude Code AI instructions
├── README.md                   # This file
├── package.json                # Dependencies and scripts
├── next.config.js              # Next.js configuration (static export)
├── next-sitemap.config.js      # Sitemap generation config
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── .gitignore                  # Git ignore patterns
├── .eslintrc.json              # ESLint configuration
├── .prettierrc                 # Prettier configuration
└── .env.example                # Environment variables template
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher
- **AWS CLI**: Configured with credentials (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/jxman/nextjs-personal-site.git
cd nextjs-personal-site

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📝 Available Scripts

### Development

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build (creates /out folder)
npm run start        # Start production server locally
npm run lint         # Run ESLint checks
npm run format       # Format all files with Prettier
npm run format:check # Check if files are formatted correctly
```

### Code Quality & Pre-commit Hooks

This project uses **Husky** and **lint-staged** to automatically run code quality checks before each commit:

**What happens on `git commit`:**

1. ✅ **ESLint** runs on all staged `.ts`, `.tsx`, `.js`, `.jsx` files
2. ✅ **Prettier** formats all staged files automatically
3. ✅ **Auto-fix** issues when possible
4. ❌ **Prevents commit** if there are unfixable errors

**Configured checks:**

- JavaScript/TypeScript files: ESLint + Prettier
- JSON/Markdown/CSS files: Prettier

**To bypass hooks** (not recommended):

```bash
git commit --no-verify -m "message"
```

### Deployment (AWS S3 + CloudFront)

```bash
# Deploy to production
npm run deploy:prod      # Build + sync to S3 with cache optimization

# Invalidate CloudFront cache
npm run invalidate       # Clear CDN cache for immediate updates

# Complete deployment workflow
npm run deploy:full      # Build + Deploy + Invalidate (recommended)
```

**Deployment Details:**

- Static assets (JS, CSS, images): 1-year cache (`max-age=31536000`)
- HTML files: No cache (`max-age=0`) for instant updates
- CloudFront invalidation: All paths (`/*`)
- S3 bucket: `www.synepho.com`
- CloudFront distribution: `E2UW9JLSX34HRT`

---

## 🎨 Key Features

### Performance

- ⚡ **Static Site Generation (SSG)** - All pages pre-rendered at build time
- 🚀 **Optimized Bundles** - Code splitting and tree shaking (102 kB shared JS)
- 📦 **CDN Distribution** - Global edge caching via CloudFront
- 🖼️ **Image Optimization** - Responsive images with proper sizing
- 🎯 **Lighthouse Score** - 90+ performance, accessibility, SEO

### User Experience

- 🌓 **Dark Mode** - System preference detection with DaisyUI themes
- 📱 **Fully Responsive** - Mobile-first design with Tailwind breakpoints
- ♿ **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- ✨ **Smooth Animations** - Intersection Observer-based scroll animations
- 🔝 **Scroll to Top** - Convenient navigation for long pages

### SEO & Analytics

- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards on all pages
- 🗺️ **Smart Sitemap** - Priority-based structure (homepage: 1.0, key pages: 0.8, blog: 0.7)
- 🔗 **Canonical URLs** - All 16 pages include canonical tags to prevent duplicate content
- 🤖 **Robots.txt** - Search engine crawling instructions
- 📊 **Google Analytics** - GA4 integration with page view tracking
- 🎯 **Structured Data** - JSON-LD schemas (Person, WebSite, Organization) for rich search results

### Content Management

- 📝 **Markdown Support** - Blog posts written in Markdown
- 📄 **JSON Data** - Structured content for projects and resume
- 🏷️ **Frontmatter** - YAML metadata for blog posts
- 🔄 **Hot Reload** - Instant updates during development

---

## 🌐 Pages & Routes

| Route                                  | Description                                | Type   |
| -------------------------------------- | ------------------------------------------ | ------ |
| `/`                                    | Homepage with introduction and recent work | Static |
| `/about`                               | About me, experience, expertise            | Static |
| `/projects`                            | Portfolio projects showcase                | Static |
| `/projects/aws-health`                 | AWS Health Dashboard project details       | Static |
| `/projects/aws-rss`                    | AWS RSS Reader project details             | Static |
| `/projects/aws-site`                   | AWS Static Hosting project details         | Static |
| `/projects/lawn`                       | LawnSmart App project details              | Static |
| `/blog`                                | Blog listing page                          | Static |
| `/blog/aws-services-dashboard-release` | AWS Dashboard blog post                    | Static |
| `/blog/lawnsmartapp-release`           | LawnSmart App blog post                    | Static |
| `/blog/ai-pair-programming-journey`    | AI Development blog post                   | Static |
| `/resume`                              | Professional resume                        | Static |
| `/contact`                             | Contact form                               | Static |

**Total Pages:** 16 pre-rendered HTML pages

---

## 📚 Documentation

Comprehensive documentation is available in the [`docs/`](./docs) folder:

### For Developers

- **[QUICK_START.md](./docs/QUICK_START.md)** - Quick reference guide for common tasks
- **[DEPLOYMENT.md](./docs/DEPLOYMENT.md)** - AWS deployment setup and configuration
- **[CLAUDE.md](./CLAUDE.md)** - Instructions for AI-assisted development with Claude Code
- **[ROADMAP.md](./docs/ROADMAP.md)** - 📋 Project roadmap with completed features and future plans

### Migration Documentation

- **[MIGRATION_COMPLETE.md](./docs/MIGRATION_COMPLETE.md)** - ✅ Migration completion summary
- **[MIGRATION_GUIDE.md](./docs/MIGRATION_GUIDE.md)** - Detailed migration roadmap
- **[COMPONENT_MAPPING.md](./docs/COMPONENT_MAPPING.md)** - Component conversion patterns
- **[GATSBY_VS_NEXTJS_COMPARISON.md](./docs/GATSBY_VS_NEXTJS_COMPARISON.md)** - Framework comparison
- **[IMPROVEMENTS_SUMMARY.md](./docs/IMPROVEMENTS_SUMMARY.md)** - Performance improvements

### Project Overview

- **[PROJECT_SUMMARY.md](./docs/PROJECT_SUMMARY.md)** - Complete project documentation

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.synepho.com

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-2HLT4VSZHW

# AWS Configuration (for deployment)
AWS_REGION=us-east-1
AWS_S3_BUCKET=www.synepho.com
CLOUDFRONT_DISTRIBUTION_ID=E2UW9JLSX34HRT
```

### Next.js Configuration

Key settings in `next.config.js`:

```javascript
module.exports = {
  output: 'export', // Static site export for S3
  trailingSlash: true, // Better routing for S3
  images: { unoptimized: true }, // Required for static export
  env: {
    SITE_URL: 'https://www.synepho.com',
    GOOGLE_ANALYTICS_ID: 'G-2HLT4VSZHW',
  },
}
```

---

## 🚢 Deployment

### Prerequisites

- AWS CLI installed and configured
- S3 bucket created (`www.synepho.com`)
- CloudFront distribution set up
- Route53 domain configured

### Deployment Workflow

```bash
# 1. Build the site
npm run build

# 2. Deploy to S3 with cache optimization
npm run deploy:prod

# 3. Invalidate CloudFront cache
npm run invalidate

# Or run all steps together:
npm run deploy:full
```

### Cache Strategy

- **Static Assets** (JS, CSS, images): `Cache-Control: max-age=31536000` (1 year)
- **HTML Files**: `Cache-Control: max-age=0` (no cache, always fresh)
- **CloudFront Invalidation**: Clears all cached files (`/*`)

### Deployment Timing

- **Build Time**: ~30-60 seconds
- **S3 Sync**: ~1-2 minutes
- **CloudFront Propagation**: 5-15 minutes

---

## 🤝 Contributing

This is a personal portfolio project. While not actively seeking contributions, feel free to:

- Open issues for bugs or suggestions
- Fork the repository for your own portfolio
- Reference the migration docs for Gatsby → Next.js migrations

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

---

## 👤 Author

**John Xanthopoulos**
IT Executive & Developer | 20+ Years in Technology

- **Website:** [https://synepho.com](https://synepho.com)
- **GitHub:** [@jxman](https://github.com/jxman)
- **LinkedIn:** [linkedin.com/in/johnx](https://linkedin.com/in/johnx)
- **Twitter:** [@jxmam](https://twitter.com/jxmam)

**Expertise:**

- AWS Cloud Architecture
- React & Next.js Development
- Terraform Infrastructure as Code
- Technology Leadership & Team Management
- AI-Assisted Development Workflows

---

## 🎯 Project History

### November 2025 - Major Enhancements

**Initial Migration (Nov 2, 2025)**

- Migrated from Gatsby 5 to Next.js 15 App Router
- Modernized tech stack with TypeScript and modern React patterns
- Improved build performance and developer experience
- Enhanced SEO with Next.js Metadata API
- Maintained all existing content and functionality

**UI/UX Improvements (Nov 5, 2025)**

- ✅ Blog page enhancement with dynamic card grid layout
- ✅ Projects page grid with tech stack badges and status indicators
- ✅ Custom 404 error page with helpful navigation
- ✅ Mobile responsive improvements (hero image, resume buttons)
- ✅ Image optimization (reduced blog images by 1.1 MB)

**SEO Enhancements (Nov 5, 2025)**

- ✅ Enhanced sitemap with intelligent priority structure
- ✅ Canonical URLs on all 16 pages to prevent duplicate content
- ✅ Structured data (JSON-LD) with Person, WebSite, and Organization schemas
- ✅ Rich search results optimization for Google indexing

**Going Forward** - Platform for sharing knowledge

- Technology leadership insights
- Cloud architecture patterns
- Modern development practices
- Portfolio updates and project showcases
- See [ROADMAP.md](./docs/ROADMAP.md) for planned improvements

---

## 🙏 Acknowledgments

- **Next.js Team** - For an incredible React framework
- **Vercel** - For Next.js and deployment inspiration
- **Tailwind Labs** - For Tailwind CSS and DaisyUI
- **Claude (Anthropic)** - AI-assisted development with Claude Code
- **AWS** - Reliable cloud infrastructure

---

**Built with Next.js • Styled with Tailwind CSS • Deployed on AWS • Crafted with Claude Code**

_Last Updated: November 2025_
