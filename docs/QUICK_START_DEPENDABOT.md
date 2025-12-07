# Quick Start: Enable Dependabot (5 Minutes)

**Project:** nextjs-personal-site
**Date:** December 6, 2025

---

## ⚡ Fast Setup (GitHub Web Interface)

### Step 1: Go to Repository Settings (1 minute)

```
https://github.com/jxman/nextjs-personal-site/settings/security_analysis
```

Or navigate manually:

1. Go to https://github.com/jxman/nextjs-personal-site
2. Click **Settings** tab
3. Click **Code security and analysis** (left sidebar)

### Step 2: Enable Three Features (3 minutes)

Click **Enable** button for each:

1. ✅ **Dependabot alerts**
   - Get notified about vulnerabilities
   - Free for all repositories

2. ✅ **Dependabot security updates**
   - Auto-create PRs to fix vulnerabilities
   - Uses your `.github/dependabot.yml` config

3. ✅ **Dependabot version updates**
   - Auto-create PRs for dependency updates
   - Runs weekly on Mondays at 9 AM ET

### Step 3: Verify Configuration (1 minute)

1. Go to **Insights** tab
2. Click **Dependency graph** (left sidebar)
3. Click **Dependabot** tab
4. Confirm you see:
   - ✅ "Configuration file found"
   - ✅ Update schedule: Weekly

---

## 🚀 Alternative: GitHub CLI (30 seconds)

```bash
# Enable Dependabot alerts
gh api repos/jxman/nextjs-personal-site/vulnerability-alerts \
  -X PUT \
  -H "Accept: application/vnd.github+json"

# Enable Dependabot security updates
gh api repos/jxman/nextjs-personal-site/automated-security-fixes \
  -X PUT \
  -H "Accept: application/vnd.github+json"
```

---

## ✅ What Happens Next?

### Within 24 Hours

- Dependabot scans all dependencies
- Creates PRs for any existing vulnerabilities
- First security audit workflow runs

### Every Monday at 9 AM ET

- Checks for dependency updates
- Creates grouped PRs (Next.js, React, Tailwind, etc.)
- Respects pinned Next.js version (no major/minor updates)

### On Every Dependency PR

- GitHub Actions runs security audit
- Verifies production build
- Reports vulnerability counts

---

## 📊 Where to Find Things

**Security Alerts:**

```
https://github.com/jxman/nextjs-personal-site/security/dependabot
```

**Dependabot PRs:**

```
https://github.com/jxman/nextjs-personal-site/pulls?q=is:pr+author:app/dependabot
```

**Workflow Runs:**

```
https://github.com/jxman/nextjs-personal-site/actions/workflows/security-audit.yml
```

**Dependency Graph:**

```
https://github.com/jxman/nextjs-personal-site/network/dependencies
```

---

## 🔧 Configuration Already Done

- ✅ `.github/dependabot.yml` - Dependabot config
- ✅ `.github/workflows/security-audit.yml` - Security workflow
- ✅ `docs/SECURITY.md` - Security strategy
- ✅ Next.js pinned to `15.0.5` - Version control

---

## 📖 Full Documentation

See `docs/DEPENDABOT_SETUP.md` for:

- Detailed configuration explanation
- Troubleshooting guide
- Advanced customization options
- Security best practices

---

**That's it! You're done in 5 minutes.**

Once enabled, Dependabot will automatically:

- Monitor for vulnerabilities
- Create PRs to fix issues
- Group updates by ecosystem
- Respect your version constraints

No further action needed unless you want to customize settings.
