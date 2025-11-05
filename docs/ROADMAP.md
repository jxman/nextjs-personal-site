# Portfolio Site Roadmap

This document outlines planned improvements and enhancements for the Next.js portfolio website.

**Last Updated:** November 5, 2025
**Status:** Active Development

---

## Current Status

✅ **Completed:**
- Mobile responsive hero image layout
- Resume page mobile button optimization
- Global horizontal scroll prevention
- Next.js 15 migration complete

---

## High Priority Improvements

### 1. Blog Page Enhancement ⏳ IN PROGRESS
**Status:** Active
**Estimated Effort:** Medium
**Priority:** High

**Current State:**
- Basic blog index page exists
- Individual blog post pages working
- Minimal metadata display

**Planned Improvements:**
- [ ] Blog post cards with thumbnails and excerpts
- [ ] Categories/tags filtering system
- [ ] Search functionality
- [ ] Reading time estimates
- [ ] Prominent publication dates
- [ ] Author information display
- [ ] Related posts section
- [ ] Social sharing buttons

**Technical Approach:**
- Create reusable BlogCard component
- Add blog metadata to frontmatter
- Implement client-side filtering
- Use reading-time npm package

---

### 2. Projects Page Grid Layout
**Status:** Planned
**Estimated Effort:** Medium
**Priority:** High

**Planned Features:**
- [ ] Thumbnail images for each project
- [ ] Tech stack badges (AWS, React, TypeScript, etc.)
- [ ] Live demo links and GitHub repo links
- [ ] Status indicators (Active, Archived, In Development)
- [ ] Filter by technology or category
- [ ] Responsive grid layout (1/2/3 columns)
- [ ] Hover effects and animations

**Technical Approach:**
- Create ProjectCard component
- Add project metadata JSON/YAML
- Implement filter state management
- Use next/image for optimized thumbnails

---

### 3. Custom 404 Page
**Status:** Planned
**Estimated Effort:** Small
**Priority:** High

**Planned Features:**
- [ ] Friendly error message
- [ ] Navigation back to home
- [ ] Popular pages suggestions
- [ ] Search functionality
- [ ] Consistent with site design

**Technical Approach:**
- Create `src/app/not-found.tsx`
- Use Layout component for consistency
- Add navigation links
- Include fun/professional messaging

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

### ✅ Mobile Responsive Improvements (Completed: Nov 5, 2025)
- Hero image responsive layout
- Resume page button layout optimization
- Global horizontal scroll prevention
- Icon-only buttons on mobile

---

## Decision Log

### November 5, 2025
- **Decision:** Start with Blog Page Enhancement as first priority
- **Rationale:** Existing blog content needs better discoverability and visual presentation
- **Next Steps:** Implement blog card components and metadata display

---

## Notes

- All improvements should maintain existing accessibility standards
- Performance budget: Keep First Load JS under 120kB
- Mobile-first approach for all new features
- Follow existing code style and conventions
- Update this roadmap as features are completed
