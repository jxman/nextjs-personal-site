# Component Migration Mapping

This document provides detailed migration instructions for each component from Gatsby to Next.js.

---

## Component Overview

| Gatsby Component | Next.js Component | Priority | Complexity | Estimated Time |
|------------------|-------------------|----------|------------|----------------|
| Layout.js | src/components/Layout.tsx | High | Medium | 30-45 min |
| Navbar.js | src/components/Navbar.tsx | High | Low | 20-30 min |
| Footer.js | src/components/Footer.tsx | High | Low | 15-20 min |
| AnimatedSection.js | src/components/AnimatedSection.tsx | Medium | Medium | 30-40 min |
| ScrollToTop.js | src/components/ScrollToTop.tsx | Medium | Low | 20-30 min |
| ClientOnly.js | src/components/ClientOnly.tsx | Low | Low | 15-20 min |
| Seo.js | ❌ Remove (use metadata API) | N/A | N/A | N/A |

---

## 1. Layout Component

### Source
`gatsby/personal-site-new/src/components/Layout.js`

### Target
`nextjs-personal-site/src/components/Layout.tsx`

### Migration Steps

1. **Convert to TypeScript**
   - Add proper prop types
   - Define `LayoutProps` interface

2. **Remove Gatsby-specific imports**
   - Remove `import { useStaticQuery, graphql } from "gatsby"`
   - Remove any GraphQL queries

3. **Update imports**
   - Change `gatsby` Link → `next/link`
   - Update component imports to TypeScript

4. **Add 'use client' if needed**
   - Only if Layout uses useState, useEffect, or event handlers

### Code Example

**Before (Gatsby):**
```jsx
import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
```

**After (Next.js):**
```tsx
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
```

### Notes
- Layout component may not be needed in Next.js App Router
- Consider using `app/layout.tsx` instead for root layout
- Keep Layout component only if needed for shared UI across pages

---

## 2. Navbar Component

### Source
`gatsby/personal-site-new/src/components/Navbar.js`

### Target
`nextjs-personal-site/src/components/Navbar.tsx`

### Migration Steps

1. **Convert Link components**
   ```jsx
   // Before
   import { Link } from "gatsby"
   <Link to="/about">About</Link>

   // After
   import Link from 'next/link'
   <Link href="/about">About</Link>
   ```

2. **Add 'use client' directive** (if using useState for mobile menu)
   ```tsx
   'use client'

   import { useState } from 'react'
   ```

3. **Update image imports** (if using logo image)
   ```tsx
   // If using static image
   import Image from 'next/image'
   import logo from '@/public/images/logo.svg'
   ```

4. **Add TypeScript types**
   ```tsx
   interface NavbarProps {
     // Add props if needed
   }
   ```

### Key Changes
- `Link to` → `Link href`
- Mobile menu state likely needs 'use client'
- Logo images use `next/image`

---

## 3. Footer Component

### Source
`gatsby/personal-site-new/src/components/Footer.js`

### Target
`nextjs-personal-site/src/components/Footer.tsx`

### Migration Steps

1. **Convert to TypeScript**
   - Likely no props, simple conversion

2. **Update Links**
   - Change any Gatsby Links to Next.js Links
   - External links remain as `<a>` tags

3. **Update social icons**
   - `react-icons` works the same in Next.js
   - No changes needed for icon imports

### Code Example

**Before (Gatsby):**
```jsx
import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/jxman" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        {/* More links */}
      </div>
    </footer>
  )
}
```

**After (Next.js):**
```tsx
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/jxman" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        {/* More links */}
      </div>
    </footer>
  )
}
```

### Notes
- Minimal changes needed
- Likely can stay as Server Component
- Social icons from `react-icons` work identically

---

## 4. AnimatedSection Component

### Source
`gatsby/personal-site-new/src/components/AnimatedSection.js`

### Target
`nextjs-personal-site/src/components/AnimatedSection.tsx`

### Migration Steps

1. **Add 'use client' directive** (REQUIRED)
   - Uses `useEffect` and `useRef` for Intersection Observer
   ```tsx
   'use client'

   import { useEffect, useRef, useState } from 'react'
   ```

2. **Convert to TypeScript**
   ```tsx
   interface AnimatedSectionProps {
     children: React.ReactNode
     className?: string
     delay?: number
   }
   ```

3. **Keep Intersection Observer logic**
   - No changes needed to the core logic
   - Works identically in Next.js

### Code Example

**Before (Gatsby):**
```jsx
import React, { useEffect, useRef, useState } from "react"

export default function AnimatedSection({ children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`${className} ${isVisible ? "animate-fade-in" : "opacity-0"}`}
    >
      {children}
    </div>
  )
}
```

**After (Next.js):**
```tsx
'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
}

export default function AnimatedSection({
  children,
  className = ''
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`${className} ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      {children}
    </div>
  )
}
```

### Notes
- **MUST use 'use client'** - uses hooks and browser API
- Add TypeScript type for ref: `useRef<HTMLDivElement>(null)`
- Logic remains identical

---

## 5. ScrollToTop Component

### Source
`gatsby/personal-site-new/src/components/ScrollToTop.js`

### Target
`nextjs-personal-site/src/components/ScrollToTop.tsx`

### Migration Steps

1. **Add 'use client' directive** (REQUIRED)
   - Uses `useState`, `useEffect`, and click handlers
   ```tsx
   'use client'
   ```

2. **Convert to TypeScript**
   - Add interface if props exist
   - Type the button ref if using one

3. **Keep scroll logic**
   - `window.scrollTo()` works the same
   - Event listeners work identically

### Key Changes
- Add `'use client'`
- Convert to TypeScript
- Logic remains the same

---

## 6. ClientOnly Component

### Source
`gatsby/personal-site-new/src/components/ClientOnly.js`

### Target
`nextjs-personal-site/src/components/ClientOnly.tsx`

### Migration Steps

1. **Consider if still needed**
   - Next.js App Router has better SSR handling
   - May not need this component

2. **If keeping, add 'use client'**
   ```tsx
   'use client'

   import { useEffect, useState } from 'react'
   ```

3. **Update implementation for Next.js**
   ```tsx
   'use client'

   import { useEffect, useState } from 'react'

   interface ClientOnlyProps {
     children: React.ReactNode
   }

   export default function ClientOnly({ children }: ClientOnlyProps) {
     const [hasMounted, setHasMounted] = useState(false)

     useEffect(() => {
       setHasMounted(true)
     }, [])

     if (!hasMounted) return null

     return <>{children}</>
   }
   ```

### Notes
- May not be needed in Next.js
- App Router handles SSR better than Gatsby
- Keep only if specific hydration issues occur

---

## 7. SEO Component (Do NOT Migrate)

### Source
`gatsby/personal-site-new/src/components/Seo.js`

### Target
❌ **Do not migrate** - Use Next.js Metadata API instead

### Replacement Strategy

Instead of a component, use Next.js metadata in each page:

**In each page file:**
```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  keywords: 'keyword1, keyword2, keyword3',
  authors: [{ name: 'John Xanthopoulos' }],
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    url: 'https://www.synepho.com/page',
    siteName: 'John Xanthopoulos Portfolio',
    images: [
      {
        url: 'https://www.synepho.com/social-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title',
    description: 'Page description',
    images: ['https://www.synepho.com/social-image.png'],
    creator: '@jxmam',
  },
}

export default function Page() {
  // Page content
}
```

### Benefits of Metadata API
- Type-safe with TypeScript
- No extra component needed
- Better performance (no runtime overhead)
- Server-side rendering built-in

---

## Migration Order

Migrate components in this order:

1. **Footer.tsx** (15-20 min) - Simplest, no dependencies
2. **Navbar.tsx** (20-30 min) - Independent, needed for layout
3. **Layout.tsx** (30-45 min) - Depends on Navbar and Footer
4. **AnimatedSection.tsx** (30-40 min) - Used in pages
5. **ScrollToTop.tsx** (20-30 min) - Independent feature
6. **ClientOnly.tsx** (15-20 min) - May not be needed

**Total Component Migration Time: ~2.5-3.5 hours**

---

## Common Patterns

### Pattern 1: Client Component Detection

**Add 'use client' if component:**
- Uses `useState`, `useEffect`, `useRef`
- Has event handlers (onClick, onChange, etc.)
- Uses browser APIs (window, document, IntersectionObserver)
- Uses third-party libraries that need browser context

**Keep as Server Component if:**
- Only renders JSX
- No state or effects
- No interactivity
- Can be pre-rendered

### Pattern 2: TypeScript Conversion

```tsx
// Props interface
interface ComponentProps {
  title: string
  description?: string
  children: React.ReactNode
}

// Component with typed props
export default function Component({
  title,
  description,
  children
}: ComponentProps) {
  // Component logic
}
```

### Pattern 3: Image Handling

```tsx
// Static images (imported)
import Image from 'next/image'
import heroImage from '@/public/images/hero.jpg'

<Image src={heroImage} alt="Hero" width={800} height={600} />

// Dynamic images (path string)
<Image
  src="/images/dynamic.jpg"
  alt="Dynamic"
  width={400}
  height={300}
  unoptimized // If needed for S3 static export
/>
```

---

## Testing Checklist (Per Component)

After migrating each component:

- [ ] TypeScript compiles without errors
- [ ] Component renders correctly in dev mode
- [ ] No console errors or warnings
- [ ] Styling looks correct
- [ ] Interactive features work (if applicable)
- [ ] SSR/hydration works without errors
- [ ] Component builds successfully

---

## Common Issues & Solutions

### Issue 1: "useState is not defined"
**Solution:** Add `'use client'` directive at top of file

### Issue 2: Hydration mismatch
**Solution:** Use `ClientOnly` component or check for `typeof window !== 'undefined'`

### Issue 3: Image optimization errors
**Solution:** Add `unoptimized: true` to next.config.js for S3 static export

### Issue 4: Link href warnings
**Solution:** Ensure all `<Link>` components use `href` prop, not `to`

---

**Last Updated:** November 2, 2025
**Status:** Ready for component migration
