# Security Update - August 5, 2026

**Project:** Next.js Personal Portfolio Website
**Update Type:** Snyk-Identified Vulnerability Remediation
**Date:** August 5, 2026

---

## Executive Summary

✅ **PARTIAL REMEDIATION APPLIED**

A Snyk SCA scan identified 7 vulnerabilities (3 high, 4 medium). Fixed 5 of 7 via
dependency overrides, without requiring a Next.js major version upgrade. The remaining
2 are only fixed upstream in Next.js 16.x and are deferred pending a dedicated major
version upgrade.

---

## Actions Taken

### 1. Dependency Overrides Added

**Package:** `nanoid` (transitive via `next` → `postcss`)

- **Previous Version:** 3.3.16
- **New Version:** 3.3.17
- **Issue:** Infinite loop (CVE-2026-67213, high, CWE-835)
- **Fix:** Added `"nanoid": "^3.3.17"` to `package.json` overrides

**Package:** `sharp` (transitive via `next`)

- **Previous Version:** 0.34.5
- **New Version:** 0.35.3
- **Issues Fixed:**
  - Heap-based Buffer Overflow (CVE-2026-35591, high, CWE-122)
  - Integer Overflow (CVE-2026-33327, high, CWE-680)
  - Integer Overflow (CVE-2026-33328, medium, CWE-190)
  - Out-of-bounds Read (CVE-2026-35590, medium, CWE-125)
- **Fix:** Added `"sharp": "^0.35.0"` to `package.json` overrides

**Files Modified:**

- `package.json` - Added `nanoid` and `sharp` to `overrides`
- `package-lock.json` - Updated dependency resolutions

### 2. Deferred: Next.js 15 → 16 Major Upgrade

Two remaining issues affect `next@15.5.22` directly and are only fixed in Next.js 16.x:

| Issue                                                | Severity | CVE            | Fixed In |
| ---------------------------------------------------- | -------- | -------------- | -------- |
| Allocation of Resources Without Limits or Throttling | High     | CVE-2025-59472 | 16.1.5   |
| Allocation of Resources Without Limits or Throttling | Medium   | CVE-2026-27980 | 16.1.7   |

A major version bump carries breaking-change risk (routing, config, static export
behavior) and was intentionally **not** performed as part of this pass. Tracked as a
follow-up in [ROADMAP.md](./ROADMAP.md).

---

## Testing & Verification

### Build Verification

```bash
npm install
npm run build
```

**Status:** ✅ Build successful, static export generated, sitemap generated

### Snyk Re-scan

**Before:** 7 issues (3 high, 4 medium)
**After:** 2 issues (1 high, 1 medium) — both require Next.js 16.x, deferred

---

## Security Posture

### Current Status

- ✅ **nanoid:** 3.3.17 (patched)
- ✅ **sharp:** 0.35.3 (patched)
- ⚠️ **next:** 15.5.22 (2 known issues, fix requires major version upgrade to 16.x)

---

## Next Steps

1. ✅ Overrides applied and verified via build
2. ✅ Documentation updated
3. ⏭️ Commit and push changes to repository
4. ⏭️ Plan dedicated Next.js 16 upgrade (breaking-change review + migration codemods)

---

## Related Updates

**Previous Security Update:** [SECURITY_UPDATE_2025-12-18.md](./SECURITY_UPDATE_2025-12-18.md)

---

**Updated By:** Snyk MCP scan + manual override remediation
**Verified By:** `npm run build` and Snyk re-scan
**Report Created:** August 5, 2026
