# Deployment Guide

## Migration Complete ✅

The Gatsby to Next.js 15 migration is complete and ready for production deployment.

## Pre-Deployment Checklist

- [x] All 16 pages migrated and building successfully
- [x] Dark mode working with system preferences
- [x] All images and assets copied
- [x] Content files migrated (projects.json, about.md, resume.md)
- [x] Favicon and manifest configured
- [x] Google Analytics integrated (G-2HLT4VSZHW)
- [x] Sitemap generated automatically
- [x] robots.txt generated automatically
- [x] Open Graph and Twitter card metadata
- [x] Build optimized for static export
- [x] Zero TypeScript errors
- [x] Zero ESLint warnings

## Build Statistics

```
Total Pages: 16
Build Type: Static Export (SSG)
Bundle Size: 102 kB shared JS
All Routes: ○ (Static) prerendered
Sitemap: Automatic generation via next-sitemap
Google Analytics: Integrated with Next.js Script component
```

## Deployment to AWS S3 + CloudFront

### Prerequisites

1. AWS CLI configured with proper credentials
2. S3 bucket: `www.synepho.com`
3. CloudFront distribution ID: `E2UW9JLSX34HRT`

### Deployment Commands

```bash
# Full deployment (recommended)
npm run deploy:full

# This runs:
# 1. npm run build       - Builds Next.js app and generates sitemap
# 2. npm run deploy:prod - Syncs to S3 with proper cache headers
# 3. npm run invalidate  - Clears CloudFront cache
```

### Individual Commands

```bash
# Build only
npm run build

# Deploy to S3 only
npm run deploy:prod

# CloudFront cache invalidation only
npm run invalidate
```

## Post-Deployment Verification

### 1. Check Homepage
- Visit: https://www.synepho.com
- Verify dark mode toggles with system preferences
- Check all navigation links work

### 2. Verify All Pages
- [ ] Homepage (/)
- [ ] About (/about)
- [ ] Projects (/projects)
- [ ] Resume (/resume)
- [ ] Contact (/contact)
- [ ] Blog (/blog)

### 3. Verify Project Detail Pages
- [ ] AWS Health (/projects/aws-health)
- [ ] AWS Site (/projects/aws-site)
- [ ] AWS RSS (/projects/aws-rss)
- [ ] Lawn (/projects/lawn)

### 4. Verify Blog Posts
- [ ] AWS Services Dashboard (/blog/aws-services-dashboard-release)
- [ ] LawnSmart App (/blog/lawnsmartapp-release)
- [ ] AI Pair Programming (/blog/ai-pair-programming-journey)

### 5. SEO Verification
- [ ] Check sitemap: https://www.synepho.com/sitemap.xml
- [ ] Check robots.txt: https://www.synepho.com/robots.txt
- [ ] Verify favicon appears in browser tab
- [ ] Test social sharing (LinkedIn, Twitter, Facebook)
- [ ] Verify Google Analytics tracking (check Real-Time in GA4)

### 6. Performance Check
- [ ] Run Lighthouse audit (target: 90+ for all categories)
- [ ] Check First Contentful Paint < 1.5s
- [ ] Verify images loading properly
- [ ] Check mobile responsiveness

## Differences from Gatsby Version

### Improvements
- ✅ Faster build times with Next.js 15
- ✅ Better TypeScript support throughout
- ✅ Simplified routing with App Router
- ✅ Optimized Google Analytics with Script component
- ✅ Automatic sitemap generation with next-sitemap
- ✅ Better dark mode support with DaisyUI themes

### Identical Features
- ✅ All pages and content migrated
- ✅ Same styling (Tailwind CSS + DaisyUI)
- ✅ Same functionality (contact form, navigation, etc.)
- ✅ Same SEO metadata
- ✅ Same AWS deployment process
- ✅ Same Google Analytics tracking ID

## Troubleshooting

### Dark Mode Not Working
- Clear browser cache and reload
- Check system preferences are set to dark/light mode
- Verify DaisyUI themes are loaded (check browser console)

### Images Not Loading
- Check S3 bucket permissions
- Verify CloudFront cache invalidation completed
- Check browser Network tab for 404 errors

### Google Analytics Not Tracking
- Verify GA_MEASUREMENT_ID is correct: G-2HLT4VSZHW
- Check browser console for gtag errors
- Wait 24-48 hours for data to appear in GA4

### Sitemap 404 Error
- Ensure sitemap.xml is in the out/ folder before deployment
- Verify postbuild script runs: `npm run build` should run next-sitemap
- Check S3 bucket for sitemap.xml file

## Environment Variables

### Production
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-2HLT4VSZHW
SITE_URL=https://www.synepho.com
```

### Development
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-2HLT4VSZHW
SITE_URL=http://localhost:3000
```

## Rollback Plan

If issues are discovered after deployment:

1. **Immediate Rollback**
   ```bash
   # Re-deploy previous Gatsby version
   cd /Users/johxan/Documents/my-projects/gatsby/personal-site-new
   npm run deploy:full
   ```

2. **Investigate Issue**
   - Check browser console for errors
   - Review CloudWatch logs if using Lambda functions
   - Test locally with `npm run dev`

3. **Fix and Re-deploy**
   ```bash
   cd /Users/johxan/Documents/my-projects/nextjs/nextjs-personal-site
   # Fix issue
   npm run deploy:full
   ```

## Support

For issues or questions:
- Check MIGRATION_GUIDE.md for migration details
- Check COMPONENT_MAPPING.md for component conversions
- Check CLAUDE.md for development instructions
- Review Next.js 15 documentation: https://nextjs.org/docs

---

**Migration Completed:** November 3, 2025
**Status:** ✅ Ready for Production Deployment
**Build:** 16 pages, 0 errors, 0 warnings
**Next Steps:** Run `npm run deploy:full` when ready to deploy
