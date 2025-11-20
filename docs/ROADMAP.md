# Portfolio Site Roadmap

This document outlines planned improvements and enhancements for the Next.js portfolio website.

**Last Updated:** November 19, 2025
**Status:** Active Development - Environment & Security Updates 🔒

---

## Current Status

✅ **Recently Completed (November 19, 2025):**
- ✅ Fixed js-yaml security vulnerability (CVE-2025-64718)
- ✅ Implemented Next.js environment variable best practices
- ✅ Environment-specific analytics configuration (.env.development, .env.production)
- ✅ Fixed NODE_ENV conflict in build process
- ✅ Fixed button visibility issue in blog post CTAs
- ✅ Build error resolution and optimization

✅ **Previously Completed (November 5, 2025):**
- ✅ Blog page enhancement with dynamic card grid
- ✅ Projects page grid layout with tech badges
- ✅ Custom 404 error page
- ✅ All 3 blog post thumbnails optimized
- ✅ Mobile responsive hero image layout
- ✅ Resume page mobile button optimization
- ✅ Global horizontal scroll prevention
- ✅ Next.js 15 migration complete

---

## High Priority Improvements

### 1. Blog Page Enhancement ✅ COMPLETED
**Status:** ✅ Completed (November 5, 2025)
**Actual Effort:** Medium
**Priority:** High

**What Was Built:**
- ✅ Reusable BlogCard component with card-based design
- ✅ Centralized blog-posts.json for content management
- ✅ Featured post section with large card
- ✅ Responsive grid layout (1/2/3 columns)
- ✅ Categories and tags display with badges
- ✅ Reading time estimates
- ✅ Publication dates with formatted display
- ✅ Blog post thumbnails (all 3 optimized):
  - aws-dashboard.png (1200x630, 910 KB)
  - ai-pair-programming.png (1200x630, 185 KB)
  - lawnsmartapp.png (1200x630, 425 KB)
- ✅ Hover effects and animations
- ✅ Mobile-first responsive design
- ✅ Line-clamp for consistent card heights

**Future Enhancements (Lower Priority):**
- [ ] Categories/tags filtering system (client-side)
- [ ] Search functionality across blog posts
- [ ] Related posts section on individual blog pages
- [ ] Social sharing buttons

**Files Created:**
- `src/components/BlogCard.tsx`
- `src/content/blog-posts.json`
- `public/images/blog/` (3 optimized images)

---

### 2. Projects Page Grid Layout ✅ COMPLETED
**Status:** ✅ Completed (November 5, 2025)
**Actual Effort:** Medium
**Priority:** High

**What Was Built:**
- ✅ Reusable ProjectCard component
- ✅ Enhanced projects-enhanced.json with metadata
- ✅ Tech stack badges (shows top 4 + overflow count)
- ✅ Status indicators with animations:
  - Active (green badge with pulsing dot)
  - In Development (warning badge)
  - Archived (ghost badge)
- ✅ Category labels (Cloud Infrastructure, Web Application, etc.)
- ✅ Featured project badge system
- ✅ Live demo and GitHub links
- ✅ Responsive grid layout (1/2/3 columns)
- ✅ Featured projects section (2-column grid)
- ✅ Hover effects with image zoom
- ✅ Mobile-optimized button labels (icon-only on mobile)

**Future Enhancements (Lower Priority):**
- [ ] Filter by technology or category (interactive)
- [ ] Project search functionality
- [ ] View toggle (grid vs list)

**Files Created:**
- `src/components/ProjectCard.tsx`
- `src/content/projects-enhanced.json`

---

### 3. Custom 404 Page ✅ COMPLETED
**Status:** ✅ Completed (November 5, 2025)
**Actual Effort:** Small
**Priority:** High

**What Was Built:**
- ✅ Friendly error message with tech/cloud theme
- ✅ Large animated "404" display with pulsing effect
- ✅ Sad face icon illustration
- ✅ Popular pages grid (Home, Projects, Blog, About)
- ✅ Each page card with icon, name, and description
- ✅ Hover effects and scale animations
- ✅ Responsive grid layout (1/2/4 columns)
- ✅ Primary CTAs (Back to Home, Contact Me)
- ✅ Help text section with contact link
- ✅ Consistent DaisyUI styling

**Files Created:**
- `src/app/not-found.tsx`

---

### 4. Loading States & Animations
**Status:** Planned
**Estimated Effort:** Small
**Priority:** Medium

**Planned Features:**
- [ ] Skeleton loaders for content-heavy pages
- [ ] Smooth page transitions
- [ ] Loading indicators for async operations
- [ ] Suspense boundaries for React components

---

## Medium Priority Improvements

### 5. Contact Form Functionality
**Status:** Planned
**Estimated Effort:** Medium
**Priority:** Medium

**Current State:**
- Contact form UI exists
- No backend integration

**Planned Improvements:**
- [ ] Email integration (AWS SES or SendGrid)
- [ ] Form validation (client and server)
- [ ] Success/error messaging
- [ ] CAPTCHA/spam protection
- [ ] Rate limiting
- [ ] Auto-response email

**Technical Approach:**
- Create API route for form submission
- Integrate with AWS SES
- Add React Hook Form for validation
- Implement reCAPTCHA v3

---

### 6. SEO Enhancements
**Status:** Planned
**Estimated Effort:** Large
**Priority:** Medium

**Planned Features:**
- [ ] Structured data (JSON-LD) for personal/professional schema
- [ ] Breadcrumb navigation
- [ ] Canonical URLs for all pages
- [ ] RSS feed for blog
- [ ] Optimize all images with alt text
- [ ] Meta description optimization
- [ ] Open Graph image optimization
- [ ] XML sitemap enhancement

**Technical Approach:**
- Use next-seo for structured data
- Create RSS feed generation script
- Audit all meta tags
- Implement schema.org markup

---

### 7. Performance Optimization
**Status:** Planned
**Estimated Effort:** Medium
**Priority:** Medium

**Planned Improvements:**
- [ ] Image optimization (WebP conversion)
- [ ] Proper caching headers for S3/CloudFront
- [ ] JavaScript bundle size analysis
- [ ] Code splitting optimization
- [ ] Font loading optimization
- [ ] Lighthouse score optimization (target: 95+)

**Technical Approach:**
- Use next/image optimization
- Configure CloudFront caching rules
- Run webpack-bundle-analyzer
- Implement dynamic imports

---

### 8. Accessibility Improvements
**Status:** Planned
**Estimated Effort:** Medium
**Priority:** Medium

**Planned Features:**
- [ ] Skip navigation link
- [ ] Focus states for all interactive elements
- [ ] WCAG AA color contrast compliance
- [ ] ARIA labels where needed
- [ ] Screen reader testing
- [ ] Keyboard navigation optimization
- [ ] Semantic HTML improvements

**Technical Approach:**
- Use axe DevTools for auditing
- Add focus-visible styles
- Test with NVDA/JAWS screen readers
- Implement focus trap for modals

---

## Nice to Have Features

### 9. Dark/Light Mode Toggle
**Status:** Planned
**Estimated Effort:** Small
**Priority:** Low

**Planned Features:**
- [ ] Theme switcher component
- [ ] Persistent theme preference (localStorage)
- [ ] Smooth theme transitions
- [ ] System preference detection
- [ ] Theme toggle in navbar

**Technical Approach:**
- Use DaisyUI theme system
- Create ThemeToggle component
- Store preference in localStorage
- Add prefers-color-scheme media query

---

### 10. Analytics Dashboard Integration
**Status:** Planned
**Estimated Effort:** Medium
**Priority:** Low

**Current State:**
- Google Analytics integrated

**Planned Features:**
- [ ] Popular posts section on homepage
- [ ] View counts on blog posts
- [ ] Project page visit tracking
- [ ] Analytics dashboard page (admin)

**Technical Approach:**
- Use Google Analytics API
- Create analytics service layer
- Cache analytics data
- Display trending content

---

### 11. Newsletter Subscription
**Status:** Planned
**Estimated Effort:** Medium
**Priority:** Low

**Planned Features:**
- [ ] Email signup form
- [ ] Integration with email service (Mailchimp/ConvertKit)
- [ ] GDPR compliance
- [ ] Embedded in blog posts or footer
- [ ] Welcome email automation
- [ ] Unsubscribe functionality

**Technical Approach:**
- Choose email service provider
- Create subscription API route
- Add consent checkbox
- Design subscription form component

---

### 12. Resume Auto-Update System
**Status:** Planned
**Estimated Effort:** Large
**Priority:** Low

**Planned Features:**
- [ ] Generate PDF programmatically from markdown
- [ ] Resume version history
- [ ] Multiple resume versions (technical vs executive)
- [ ] Download tracking
- [ ] Auto-update notification

**Technical Approach:**
- Use Puppeteer or headless Chrome
- Create PDF generation API route
- Version control resume markdown
- Store PDFs in S3

---

### 13. Testimonials/Recommendations Section
**Status:** Planned
**Estimated Effort:** Medium
**Priority:** Low

**Planned Features:**
- [ ] LinkedIn recommendations import
- [ ] Client testimonials display
- [ ] Colleague endorsements
- [ ] Filterable by role/project
- [ ] Carousel/grid layout

**Technical Approach:**
- Create testimonials JSON data
- Build Testimonial component
- Add filtering logic
- Consider LinkedIn API integration

---

### 14. Interactive Career Timeline
**Status:** Planned
**Estimated Effort:** Large
**Priority:** Low

**Planned Features:**
- [ ] Visual career timeline
- [ ] Key positions and dates
- [ ] Major projects/achievements
- [ ] Technologies learned/adopted
- [ ] Awards and certifications
- [ ] Interactive hover/click effects

**Technical Approach:**
- Create timeline data structure
- Build Timeline component
- Use CSS animations
- Consider using a timeline library

---

## Quick Wins (Easy to Implement)

### 15. Social Media Links
**Status:** Planned
**Estimated Effort:** XS
**Priority:** Medium

**Planned Features:**
- [ ] Add LinkedIn link to footer/header
- [ ] Add GitHub profile link
- [ ] Add Twitter/X profile
- [ ] Add Stack Overflow profile
- [ ] Add Dev.to or Medium profile
- [ ] Social icons with hover effects

---

### 16. Favicon Improvements
**Status:** Planned
**Estimated Effort:** XS
**Priority:** Low

**Planned Features:**
- [ ] Generate all PWA icon sizes
- [ ] Apple touch icons
- [ ] Windows tile images
- [ ] Favicon for all browsers
- [ ] manifest.json optimization

**Technical Approach:**
- Use favicon generator tool
- Add all sizes to public folder
- Update manifest.json
- Test on all platforms

---

### 17. Print Stylesheet Refinement
**Status:** Planned
**Estimated Effort:** Small
**Priority:** Low

**Planned Features:**
- [ ] Blog posts optimized for printing
- [ ] Remove navigation/footers in print
- [ ] Add URL references for links
- [ ] Optimize page breaks
- [ ] Print-friendly color scheme

---

### 18. Code Syntax Highlighting
**Status:** Planned
**Estimated Effort:** Small
**Priority:** Medium

**Planned Features:**
- [ ] Syntax highlighting for code blocks
- [ ] Copy code button
- [ ] Line numbers
- [ ] Language labels
- [ ] Theme-aware highlighting

**Technical Approach:**
- Use Prism.js or Shiki
- Add to markdown processor
- Create code block component
- Style for both light/dark themes

---

## Technical Debt & Maintenance

### 19. TypeScript Strictness
**Status:** Planned
**Estimated Effort:** Medium
**Priority:** Low

**Planned Improvements:**
- [ ] Enable stricter TypeScript config
- [ ] Add type definitions for all components
- [ ] Fix implicit `any` types
- [ ] Add JSDoc comments
- [ ] Type guard implementation

---

### 20. Testing Infrastructure
**Status:** Planned
**Estimated Effort:** Large
**Priority:** Low

**Planned Features:**
- [ ] Unit tests with Jest
- [ ] Component tests with React Testing Library
- [ ] E2E tests with Playwright
- [ ] Visual regression testing
- [ ] CI/CD integration

**Technical Approach:**
- Set up Jest configuration
- Write test utilities
- Create test coverage goals
- Add pre-commit hooks

---

### 21. CI/CD Pipeline Enhancement
**Status:** Planned
**Estimated Effort:** Medium
**Priority:** Low

**Planned Features:**
- [ ] Automated Lighthouse checks on PR
- [ ] Accessibility testing in pipeline
- [ ] Bundle size monitoring
- [ ] Preview deployments for branches
- [ ] Automated dependency updates

**Technical Approach:**
- Use GitHub Actions
- Integrate Lighthouse CI
- Add bundle analyzer to CI
- Set up preview environments

---

### 22. Documentation
**Status:** Planned
**Estimated Effort:** Medium
**Priority:** Low

**Planned Features:**
- [ ] Component library/style guide
- [ ] Content management guide
- [ ] Deployment documentation
- [ ] Architecture decision records (ADRs)
- [ ] Contributing guidelines

---

## Completed Features

### ✅ Blog Page Enhancement (Completed: Nov 5, 2025)

**Components Created:**

- `src/components/BlogCard.tsx` - Reusable blog post card component
- `src/content/blog-posts.json` - Centralized blog metadata

**Images Optimized:**

- `aws-dashboard.png` (1200x630, 910 KB)
- `ai-pair-programming.png` (1200x630, 185 KB - optimized from 1.1 MB)
- `lawnsmartapp.png` (1200x630, 425 KB - optimized from 2.1 MB)

**Features:**

- Dynamic card grid layout (1/2/3 columns)
- Featured post section
- Tech stack badges
- Reading time estimates
- Publication dates with formatting
- Category labels
- Hover effects and animations

---

### ✅ Projects Page Grid Layout (Completed: Nov 5, 2025)

**Components Created:**

- `src/components/ProjectCard.tsx` - Reusable project card component
- `src/content/projects-enhanced.json` - Enhanced project metadata

**Features:**

- Responsive grid (1/2/3 columns)
- Featured projects section (2 columns)
- Tech stack badges (top 4 + overflow count)
- Status indicators (Active/In Development/Archived)
- Category labels
- Image hover zoom effects
- Mobile-optimized buttons (icon-only)

---

### ✅ Custom 404 Error Page (Completed: Nov 5, 2025)

**Files Created:**

- `src/app/not-found.tsx` - Custom 404 page

**Features:**

- Animated 404 display
- Friendly error messaging
- Popular pages grid (4 cards)
- Navigation CTAs
- Help section with contact link
- Responsive design (1/2/4 columns)

---

### ✅ Mobile Responsive Improvements (Completed: Nov 5, 2025)

**Files Modified:**

- `src/app/layout.tsx` - Added overflow-x-hidden
- `src/app/page.tsx` - Responsive hero image
- `src/app/resume/ResumeClient.tsx` - Mobile button optimization

**Features:**

- Hero image responsive layout
- Resume page button layout optimization
- Global horizontal scroll prevention
- Icon-only buttons on mobile

---

## Decision Log

### November 5, 2025 (Evening)

- **Major Milestone:** Completed all 3 high priority roadmap items in one session!
- **Blog Page:** Enhanced with dynamic cards, featured posts, and optimized images
- **Projects Page:** Upgraded to modern grid with tech badges and status indicators
- **404 Page:** Created custom error page with helpful navigation
- **Image Optimization:** Reduced total blog image size by 1.1 MB (2.6 MB → 1.5 MB)
- **Next Priority:** Medium priority items or deployment testing

### November 5, 2025 (Morning)

- **Decision:** Start with Blog Page Enhancement as first priority
- **Rationale:** Existing blog content needs better discoverability and visual presentation
- **Result:** Successfully completed with full image optimization

---

## Session Summary (November 5, 2025)

**Productivity Metrics:**

- ✅ 3 High Priority Items Completed
- ✅ 11 New Files Created
- ✅ 5 Files Modified
- ✅ 7 Git Commits
- ✅ 3 Blog Images Optimized
- ✅ 100% Build Success Rate
- ✅ 0 Linting Errors

**Total Impact:**

- Blog page: Transformed from basic list to modern card grid
- Projects page: Upgraded from vertical list to responsive grid
- 404 page: Created from scratch with helpful navigation
- Mobile UX: Significantly improved across all pages
- Performance: Optimized images saved 1.1 MB
- Architecture: Scalable component-based design

---

## Notes

- All improvements maintain existing accessibility standards
- Performance budget: Keep First Load JS under 120kB ✅ (Currently 102 kB)
- Mobile-first approach for all new features ✅ Implemented
- Follow existing code style and conventions ✅ Maintained
- Update this roadmap as features are completed ✅ Updated
