# Plan: Dark-mode Synepho logo

**Status:** ✅ Implemented (August 5, 2026) — see `docs/ROADMAP.md` Completed Features.

## Context

This site (and `synepho.com`, which it deploys to) has no manual light/dark
toggle. The dark theme you see is daisyUI auto-applying based on the OS-level
`prefers-color-scheme: dark` preference — Tailwind's `darkMode` is unset in
`tailwind.config.ts`, which defaults to Tailwind's `'media'` strategy, so
`dark:` utility classes already work here without any extra setup.

The problem: `Navbar.tsx` and `Footer.tsx` both hardcode a single logo file —
`public/images/logo/synepho-logo.png` (the dark-gray-on-transparent version,
built for light backgrounds) — and render it unconditionally. In dark mode
it's the same gray logo rendered dim on a dark background instead of
something designed for it.

The `aws-services-site` project (a sibling site) recently added real
dark/light logo swapping and worked out a blue-on-dark variant with a clean
transparent background (the original export had a solid `#071323` background
baked in — the working copy at `aws-services-site/public/logo-dark.png` has
already had that background chroma-keyed out with edge feathering, so it's
safe to reuse directly). This plan ports that same blue dark-mode logo here,
using a pure CSS swap (no JS/state needed, since there's no theme toggle to
key off of — just `dark:` classes).

## Asset needed

Copy the transparent blue dark-mode logo from the AWS dashboard project into
this repo:

```bash
cp "/Users/johxan/Documents/my-projects/aws-services/aws-services-site/public/logo-dark.png" \
   "/Users/johxan/Documents/my-projects/personal-site/nextjs-personal-site/public/images/logo/synepho-logo-dark.png"
```

Source file is 1234×280px (~4.4:1 aspect ratio) with a transparent
background — no further processing needed. It doesn't need to match the
existing `synepho-logo.png`'s exact 480×102px framing; each `<Image>` should
use its own file's real intrinsic dimensions so Next.js doesn't stretch it
(see below).

## Code changes

**1. `src/components/Navbar.tsx`** (currently lines 51-60)

Replace the single `<Image>` with a light/dark pair, toggled via Tailwind's
`dark:` variant:

```tsx
{/* Synepho Logo */}
<Image
  src="/images/logo/synepho-logo.png"
  alt="Synepho"
  width={188}
  height={40}
  className="h-8 w-auto dark:hidden"
  unoptimized
  priority
/>
<Image
  src="/images/logo/synepho-logo-dark.png"
  alt="Synepho"
  width={188}
  height={40}
  className="h-8 w-auto hidden dark:block"
  unoptimized
  priority
/>
```

**2. `src/components/Footer.tsx`** (currently lines 244-252, the bottom-bar credit)

Same pattern, at the smaller footer size:

```tsx
<Image
  src="/images/logo/synepho-logo.png"
  alt="Synepho"
  width={94}
  height={20}
  className="h-4 w-auto dark:hidden"
  unoptimized
/>
<Image
  src="/images/logo/synepho-logo-dark.png"
  alt="Synepho"
  width={94}
  height={20}
  className="h-4 w-auto hidden dark:block"
  unoptimized
/>
```

Both `<Image>`s stay wrapped in the same existing `<Link>`/`<a>` element
that's already there in each file — only the image itself is being split
into a light/dark pair, nothing else about the surrounding markup changes.

No other files reference `synepho-logo.png` (confirmed via a repo-wide
search), so these two are the only call sites.

## Verification

- `npm run dev`, open the site, and toggle dark mode via **OS-level** appearance
  settings (System Settings → Appearance on macOS, or your browser/OS dark
  mode toggle) since there's no in-app toggle — confirm:
  - Header logo shows gray in light mode, blue in dark mode, no layout shift.
  - Footer logo does the same at its smaller size.
  - No flash of the wrong logo on initial dark-mode page load.
- Run lint/build (`npm run lint`, `npm run build`) and fix any issues.
- Spot-check on the deployed preview before it goes to production, since
  `synepho.com` is a live, public site.
