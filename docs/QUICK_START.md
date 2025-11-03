# Quick Start Guide - Next.js Migration

## For the Next Claude Code Session

When you open a new Claude Code session in the `nextjs-personal-site` folder, start here:

---

## 📋 Current Status

✅ **Phase 1: Setup - COMPLETE**
- Next.js 15 project initialized
- TypeScript configured
- Tailwind CSS + DaisyUI installed
- Project structure created
- Documentation written

⏳ **Next Phase: Component Migration**

---

## 🚀 First Steps

### 1. Verify Setup
```bash
# Check that you're in the right directory
pwd
# Should output: /Users/johxan/Documents/my-projects/nextjs-personal-site

# Install dependencies (if not already done)
npm install

# Test that everything works
npm run dev
```

### 2. Read Migration Documents
Before starting migration, read:
1. **CLAUDE.md** - Instructions for Claude Code (you!)
2. **MIGRATION_GUIDE.md** - Complete migration plan
3. **COMPONENT_MAPPING.md** - Component conversion guide

---

## 🎯 Recommended Starting Point

### Start with Component Migration

**Migration Order:**
1. ✅ Footer component (simplest, ~15 min)
2. ✅ Navbar component (~20 min)
3. ✅ Layout component (~30 min)
4. ✅ AnimatedSection component (~30 min)
5. ✅ ScrollToTop component (~20 min)
6. ✅ ClientOnly component (~15 min)

**Total Time: ~2.5-3.5 hours for all components**

---

## 📂 Key File Locations

### Source Files (Gatsby - READ ONLY)
```
/Users/johxan/Documents/my-projects/gatsby/personal-site-new/src/
├── components/        # Read components from here
├── pages/            # Read pages from here
├── content/          # Read content from here
└── images/           # Copy images from here
```

### Target Files (Next.js - WRITE HERE)
```
/Users/johxan/Documents/my-projects/nextjs-personal-site/src/
├── components/       # Write migrated components here
├── app/             # Write migrated pages here
├── content/         # Copy content here
└── (public/images/) # Copy images here
```

---

## 🔄 Migration Workflow

For each component:

```bash
# 1. Read source component
Read: /Users/johxan/Documents/my-projects/gatsby/personal-site-new/src/components/Footer.js

# 2. Convert to TypeScript + Next.js
# Apply these changes:
# - Convert to .tsx
# - Add TypeScript types
# - Update imports (Link, Image)
# - Add 'use client' if needed
# - Keep Tailwind classes identical

# 3. Write to target location
Write: /Users/johxan/Documents/my-projects/nextjs-personal-site/src/components/Footer.tsx

# 4. Test compilation
npm run build

# 5. Update progress in README.md
# Change [ ] to [x] for completed component
```

---

## 📝 First Command to Run

Suggest starting with:

```
"Read the Footer.js component from the Gatsby project and migrate it
to Footer.tsx in the Next.js project following the component mapping guide."
```

---

## 🎯 Success Criteria

Component migration is done when:
- [x] All 6 components migrated to TypeScript
- [x] All components compile without errors
- [x] `npm run build` succeeds
- [x] No console warnings
- [x] Progress updated in README.md

---

## 📚 Important Documents

| Document | Purpose |
|----------|---------|
| **CLAUDE.md** | Instructions for you (Claude Code) |
| **MIGRATION_GUIDE.md** | Complete migration roadmap |
| **COMPONENT_MAPPING.md** | Component conversion patterns |
| **README.md** | Project overview and progress tracking |
| **QUICK_START.md** | This file - quick reference |

---

## 🔧 Essential Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Test production build
npm run lint             # Check for errors

# Code Quality
npm run format           # Format code with Prettier
npm run format:check     # Check formatting

# Testing
npm run build && npm run start  # Test production locally
```

---

## ⚠️ Important Reminders

1. **Always read from Gatsby source first**
   - Don't create components from scratch
   - Preserve all existing functionality

2. **Test after each component**
   - Run `npm run build` after each migration
   - Fix errors before moving to next component

3. **Update documentation**
   - Mark completed tasks in README.md
   - Note any issues or deviations

4. **Client vs Server Components**
   - Only add `'use client'` when absolutely needed
   - See COMPONENT_MAPPING.md for guidance

---

## 🎬 Suggested First Prompt

When you're ready to start, user should say:

```
"I'm ready to start the migration. Let's begin with migrating the Footer
component from the Gatsby project to Next.js, following the component
mapping guide."
```

---

## 📊 Progress Tracking

Update README.md after each component:

```markdown
### ⏳ Phase 2: Component Migration (In Progress)
- [x] Footer component          ← Mark complete
- [ ] Navbar component          ← Next task
- [ ] Layout component
- [ ] AnimatedSection component
- [ ] ScrollToTop component
- [ ] ClientOnly component
```

---

## 🆘 If Something Goes Wrong

1. **Check error messages carefully**
2. **Verify file paths are correct**
3. **Ensure 'use client' is added where needed**
4. **Check TypeScript types are correct**
5. **Reference COMPONENT_MAPPING.md for patterns**

---

**Good luck with the migration!** 🚀

You're well-prepared with:
- ✅ Complete project structure
- ✅ All configuration files
- ✅ Comprehensive documentation
- ✅ Clear migration plan

**Estimated Time to Complete:**
- Components: 2.5-3.5 hours
- Pages: 6-8 hours
- Content: 3-4 hours
- SEO/Testing: 4-6 hours
- **Total: ~3-4 days with Claude Code**

---

**Project:** Next.js Migration for John Xanthopoulos Portfolio
**Source:** Gatsby 5 → **Target:** Next.js 15
**Status:** Ready to begin component migration
**Date:** November 2, 2025
