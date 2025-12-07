# GitHub Dependabot Setup Guide

**Project:** Next.js Personal Portfolio Website
**Date:** December 6, 2025
**Status:** ✅ Configuration committed, ready for activation

---

## Overview

This guide walks you through enabling GitHub Dependabot for automated security alerts and dependency updates.

## What is GitHub Dependabot?

Dependabot is GitHub's built-in tool that:

- **Scans dependencies** for known security vulnerabilities
- **Creates pull requests** automatically to update vulnerable packages
- **Groups related updates** to reduce PR noise
- **Respects version constraints** (e.g., pinned versions)
- **Runs scheduled checks** (weekly, daily, or monthly)

## Current Configuration

### Files Committed

✅ **`.github/dependabot.yml`** - Main configuration file

- Weekly updates on Mondays at 9 AM ET
- Grouped updates by ecosystem (Next.js, React, Tailwind, etc.)
- Ignores major/minor Next.js updates (respects pinning)
- Security updates get individual PRs immediately

✅ **`.github/workflows/security-audit.yml`** - GitHub Actions workflow

- Weekly security audits on Mondays
- Runs on PRs that modify dependencies
- Verifies builds after updates
- Generates vulnerability reports

---

## Activation Steps

### Step 1: Enable Dependabot in Repository Settings

**GitHub Repository:** https://github.com/jxman/nextjs-personal-site

#### Option A: Enable Dependabot Alerts (Manual)

1. Navigate to your repository on GitHub
2. Click **Settings** (top navigation)
3. Click **Code security and analysis** (left sidebar)
4. Find the **Dependabot alerts** section
5. Click **Enable** button

#### Option B: Enable via GitHub CLI

```bash
# Enable Dependabot security updates
gh api repos/jxman/nextjs-personal-site/automated-security-fixes \
  -X PUT \
  -H "Accept: application/vnd.github+json"

# Enable Dependabot alerts
gh api repos/jxman/nextjs-personal-site/vulnerability-alerts \
  -X PUT \
  -H "Accept: application/vnd.github+json"
```

### Step 2: Enable Dependabot Security Updates

1. In **Settings** > **Code security and analysis**
2. Find **Dependabot security updates** section
3. Click **Enable** button

**What this does:**

- Automatically creates PRs for security vulnerabilities
- Uses your `.github/dependabot.yml` configuration
- Respects version pinning and ignore rules

### Step 3: Enable Dependabot Version Updates (Optional)

1. In **Settings** > **Code security and analysis**
2. Find **Dependabot version updates** section
3. Click **Enable** button

**What this does:**

- Creates PRs for non-security updates (weekly on Mondays)
- Groups related packages together
- Follows your configuration rules

**Note:** Version updates are optional. Security updates are recommended.

### Step 4: Verify Configuration

After enabling Dependabot, verify it recognized your configuration:

1. Go to **Insights** > **Dependency graph**
2. Click **Dependabot** tab
3. You should see:
   - ✅ "Configuration file found"
   - ✅ Last check timestamp
   - ✅ Update schedule (weekly)

### Step 5: Test with Manual Trigger (Optional)

```bash
# Trigger Dependabot check manually (if repository is public)
gh api repos/jxman/nextjs-personal-site/dependabot/updates \
  -X POST \
  -H "Accept: application/vnd.github+json"
```

---

## Expected Behavior

### Security Alerts

**When a vulnerability is detected:**

1. GitHub creates a Dependabot alert
2. Alert appears in **Security** > **Dependabot alerts** tab
3. Dependabot automatically creates a PR to fix it
4. PR includes:
   - Vulnerability details (CVE, CVSS score)
   - Release notes from the fix
   - Compatibility score
   - Changelog

**Your action:**

1. Review the PR
2. Check GitHub Actions workflow results (build verification)
3. Merge if all checks pass
4. Deploy to production

### Weekly Version Updates

**Every Monday at 9 AM ET:**

1. Dependabot checks for available updates
2. Groups related packages (Next.js ecosystem, React, etc.)
3. Creates PRs for each group
4. Respects ignore rules (no Next.js major/minor updates)

**Example PR titles:**

- `chore(deps): Bump the react group with 3 updates`
- `chore(deps): Bump the dev-tools group with 2 updates`
- `chore(deps-dev): Bump typescript from 5.6.3 to 5.7.2`

### Pull Request Labels

Dependabot PRs are automatically tagged:

- `dependencies` - All dependency updates
- `automated` - Created by automation
- `ci` - GitHub Actions workflow updates (if applicable)

---

## Managing Dependabot PRs

### Auto-Merge (Optional)

For low-risk updates, you can enable auto-merge:

```bash
# Enable auto-merge for a specific PR
gh pr merge PR_NUMBER --auto --squash
```

**Recommended for:**

- Patch version updates (`1.2.3` → `1.2.4`)
- Development dependencies
- TypeScript type definitions

**NOT recommended for:**

- Major version updates
- Next.js updates
- Core dependencies (React, etc.)

### Reviewing PRs

**Checklist before merging:**

- [ ] GitHub Actions security audit passed
- [ ] Build verification successful
- [ ] No breaking changes in changelog
- [ ] Compatibility score is green
- [ ] No major version jumps (unless intentional)

### Dismissing Alerts

If a vulnerability doesn't affect your deployment:

1. Go to **Security** > **Dependabot alerts**
2. Click on the alert
3. Click **Dismiss alert** dropdown
4. Select reason:
   - "Vulnerable code is not used" (for static export)
   - "No bandwidth to fix this" (low priority)
   - "Risk is tolerable to this project"
5. Add comment explaining why (required for audit trail)

**Example:**

```
Dismissing GHSA-xxxx-yyyy-zzzz:
- Vulnerability affects server-side rendering
- This project uses static export (output: 'export')
- No server runtime exists in production
- Risk: None
```

---

## Troubleshooting

### Issue: Dependabot not creating PRs

**Solution:**

1. Check **Settings** > **Code security and analysis**
2. Verify all three Dependabot features are enabled:
   - ✅ Dependabot alerts
   - ✅ Dependabot security updates
   - ✅ Dependabot version updates
3. Check **Insights** > **Dependency graph** > **Dependabot**
4. Verify configuration file syntax (no YAML errors)

### Issue: Too many PRs being created

**Solution:**
Adjust `.github/dependabot.yml`:

```yaml
# Reduce PR limit
open-pull-requests-limit: 5 # Default is 10

# Increase update frequency
schedule:
  interval: 'monthly' # Instead of weekly
```

### Issue: Dependabot ignoring pinned Next.js version

**Expected behavior:** This is correct! The configuration includes:

```yaml
ignore:
  - dependency-name: 'next'
    update-types: ['version-update:semver-major', 'version-update:semver-minor']
```

Dependabot will **ONLY** create PRs for:

- Patch updates (`15.0.5` → `15.0.6`)
- Security vulnerabilities (critical/high priority)

### Issue: GitHub Actions workflow failing

**Check:**

1. Workflow file syntax (`.github/workflows/security-audit.yml`)
2. Node.js version compatibility
3. npm registry connectivity
4. Action logs in **Actions** tab

**Debug:**

```bash
# Test workflow locally (requires act)
brew install act
act -j audit
```

---

## Security Best Practices

### 1. Review All PRs Before Merging

**Never auto-merge:**

- ❌ Major version updates (breaking changes likely)
- ❌ Next.js updates (we control this manually)
- ❌ React updates (core dependency)
- ❌ PRs with failing checks

**Safe to auto-merge (after review):**

- ✅ Type definition updates (`@types/*`)
- ✅ Development tool patch updates
- ✅ Build tool updates (Prettier, ESLint)

### 2. Monitor Security Alerts Weekly

**Schedule:**

- **Every Monday:** Check **Security** > **Dependabot alerts**
- **Every commit:** Review Dependabot PRs created
- **Before deployment:** Run `npm audit` locally

### 3. Keep Dependencies Up-to-Date

**Strategy:**

- **Security updates:** Apply within 24-48 hours
- **Patch updates:** Apply weekly (grouped)
- **Minor updates:** Review monthly, apply quarterly
- **Major updates:** Plan carefully, test thoroughly

### 4. Document Dismissed Alerts

**Required information:**

- Why the alert was dismissed
- Risk assessment (why it doesn't affect your deployment)
- Date dismissed and by whom
- When to re-evaluate (if applicable)

---

## Monitoring & Reporting

### GitHub Security Tab

**Location:** Repository > **Security** tab

**Features:**

- **Overview:** Security posture summary
- **Dependabot alerts:** Active vulnerabilities
- **Security advisories:** Published CVEs
- **Dependency graph:** Visual dependency tree

### Weekly Audit Reports

**Location:** Repository > **Actions** tab

**Features:**

- Security audit workflow runs
- Vulnerability counts (Critical, High, Moderate, Low)
- Build verification results
- Downloadable JSON reports (30-day retention)

### Email Notifications

**Configure in GitHub Settings:**

1. **Settings** (personal, not repo)
2. **Notifications**
3. **Dependabot alerts**
4. Choose notification method:
   - Email
   - Web notifications
   - Mobile push

---

## Advanced Configuration

### Custom Update Schedule

```yaml
# .github/dependabot.yml
schedule:
  interval: 'daily' # Options: daily, weekly, monthly
  day: 'friday' # For weekly: monday, tuesday, etc.
  time: '14:00' # 24-hour format
  timezone: 'America/Los_Angeles'
```

### Reviewer Auto-Assignment

```yaml
# Auto-assign PRs to specific users
reviewers:
  - 'jxman'
# Auto-assign to team (requires organization)
# reviewers:
#   - "frontend-team"
```

### Custom Commit Messages

```yaml
commit-message:
  prefix: 'build(deps)' # Conventional Commits style
  include: 'scope' # Include package scope in message
```

### Separate PR for Each Dependency

```yaml
# Remove groups configuration to get individual PRs
# (Not recommended - creates PR noise)
```

---

## Next Steps

### Immediate (Today)

1. ✅ Configuration files committed (DONE)
2. ⏳ **Enable Dependabot in GitHub Settings** (YOU DO THIS)
3. ⏳ **Verify configuration detected** (Check Insights tab)

### Short-term (This Week)

1. Monitor for first Dependabot PRs
2. Review and merge security updates
3. Test GitHub Actions workflow
4. Verify email notifications working

### Long-term (Monthly)

1. Review Dependabot alert history
2. Audit dismissed alerts (re-evaluate if needed)
3. Check for new Next.js security releases
4. Update security documentation

---

## Resources

### Documentation

- [GitHub Dependabot Docs](https://docs.github.com/en/code-security/dependabot)
- [Dependabot Configuration Options](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security/getting-started/securing-your-repository)

### Tools

- [Dependabot Preview](https://github.com/dependabot/dependabot-core) - Preview what PRs would be created
- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) - Interactive dependency updates
- [Snyk](https://snyk.io/) - Additional security scanning (optional)

### Project-Specific

- **Security Strategy:** `docs/SECURITY.md`
- **Latest Audit:** `docs/SECURITY_AUDIT_2025-12-06.md`
- **Dependabot Config:** `.github/dependabot.yml`
- **Security Workflow:** `.github/workflows/security-audit.yml`

---

## Summary

### ✅ What's Been Done

- [x] Created Dependabot configuration file
- [x] Created GitHub Actions security audit workflow
- [x] Documented security monitoring strategy
- [x] Completed security audit for CVE-2025-55182
- [x] Upgraded Next.js to 15.0.5 and pinned version
- [x] Committed all configuration files to repository

### ⏳ What You Need to Do

- [ ] **Enable Dependabot in GitHub Settings** (5 minutes)
  - Go to Settings > Code security and analysis
  - Enable: Dependabot alerts, Security updates, Version updates
- [ ] **Verify configuration** (2 minutes)
  - Check Insights > Dependency graph > Dependabot
  - Confirm "Configuration file found"
- [ ] **Configure notifications** (3 minutes)
  - Personal Settings > Notifications
  - Enable Dependabot alert emails

### 🎯 Expected Results

**Within 24 hours:**

- Dependabot scans your dependencies
- Creates PRs for any existing vulnerabilities
- First security audit workflow runs

**Every Monday at 9 AM ET:**

- Dependabot checks for updates
- Creates grouped PRs for available updates
- Respects your ignore rules (pinned Next.js)

**On every PR with dependency changes:**

- GitHub Actions runs security audit
- Verifies production build compiles
- Reports vulnerability counts

---

**Setup completed:** December 6, 2025
**Next review:** December 9, 2025 (first weekly run)
**Documentation:** Complete and up-to-date
