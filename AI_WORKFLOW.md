# AI Workflow Instructions

## Quick Reference Files
- **CTA_BUTTONS_GUIDE.md** - All CTA button locations for site-wide updates
- **LOCAL_DEVELOPMENT_SETUP.md** - Development environment setup

## Repository Overview
This repository contains the Desktop Commander website - a static site built from React/Vite source code and hosted on GitHub Pages from the `docs/` folder.

## Important: This repo contains BOTH source AND built files
- Source code: `root/` and `prompt-library/` directories
- Built static files: `docs/` directory (committed to git for GitHub Pages)
- The `docs/` folder must be rebuilt and committed whenever source changes are made

## Workflow Rules

### 1. Always Start with a New Branch
```bash
# Fetch latest changes
git fetch origin
git checkout main
git pull origin main

# Create new feature branch from remote main
git checkout -b feature/your-feature-name
```

### 2. Static Build Management
This repo requires special handling because it hosts static files on GitHub Pages:

- **CRITICAL**: After making source code changes, you MUST rebuild and commit static files
- Use the provided npm script: `npm run commit-static`
- This script:
  - Removes old build files from git tracking
  - Rebuilds the static site
  - Commits new build files with message "Static website changes"

```bash
# After making source code changes:
npm run commit-static
```

### 3. Preview Locally
For testing your changes:

```bash
# Development preview (hot reload, not compiled)
cd root && npm run dev
# Runs on http://localhost:8082

# Production preview (see actual built version)  
npm run serve:static
# Runs on http://localhost:3000
```

### 4. Large Features: Use Pull Requests
For significant changes that need review:

```bash
# Install GitHub CLI if not already installed
# brew install gh (macOS) or equivalent

# Create PR from your feature branch
gh pr create --title "Your feature title" --body "Description of changes"

# Or push and create PR via GitHub web interface
git push origin feature/your-feature-name
```

### 5. Small Changes: Direct to Main
For minor updates, bug fixes, or content changes:

```bash
# Make your changes
# Run commit-static to rebuild
npm run commit-static

# Push to main (will auto-deploy via GitHub Pages)
git push origin main
```

## Complete Example Workflow

### Small Change Example:
```bash
git checkout main
git pull origin main
git checkout -b fix/update-hero-text

# Make changes to source files
# ... edit files ...

# Rebuild and commit static files
npm run commit-static

# Commit your source changes
git add .
git commit -m "Update hero text"

# Merge to main and push
git checkout main
git merge fix/update-hero-text
git push origin main

# Delete feature branch
git branch -d fix/update-hero-text
```

### Large Feature Example:
```bash
git checkout main
git pull origin main
git checkout -b feature/new-pricing-section

# Make changes
# ... edit files ...

# Rebuild and commit static files
npm run commit-static

# Commit source changes
git add .
git commit -m "Add new pricing section"

# Push feature branch and create PR
git push origin feature/new-pricing-section
gh pr create --title "Add pricing section" --body "New pricing page with comparison table"

# Wait for review and merge via GitHub
```

## Key Points to Remember
1. **Always branch from remote main**
2. **Always run `npm run commit-static` after source changes**
3. **Preview locally before committing**
4. **Use PRs for large features, direct merge for small changes**
5. **GitHub Pages auto-deploys from main branch `docs/` folder**

## File Structure
```
main-web/
├── root/                    # Main React app source
├── prompt-library/          # Documentation source  
├── docs/                    # Built static files (committed to git)
├── package.json             # Contains commit-static script
└── AI_WORKFLOW.md          # This file
```


## AI Assistant Deployment Protocol

**This section is for AI assistants helping non-developers deploy changes.**

### Core Principle
**NEVER push to remote without explicit user confirmation.** The user must approve the final push step.

### Deployment Workflow

#### Phase 1: Pre-Deployment Check
Before doing anything, check the current state:

```bash
cd /Users/fiberta/work/main-web
git status
git fetch origin
git status  # Check again to see if behind remote
```

**What to look for:**
- Are we on the `main` branch?
- Are there uncommitted changes?
- Is local main behind remote main?
- Are there untracked files that should be committed?

**Actions based on findings:**

1. **If on wrong branch:** Switch to main
   ```bash
   git checkout main
   ```

2. **If behind remote main:** Sync first
   ```bash
   git pull origin main
   ```
   If pull fails due to conflicts, STOP and ask user how to proceed.

3. **If uncommitted changes exist:** Proceed to Phase 2

#### Phase 2: Commit Changes
When there are uncommitted changes:

1. **Review what changed:**
   ```bash
   git diff
   git status
   ```
   
2. **Show user what will be committed** and get their confirmation

3. **Stage source code changes:**
   ```bash
   git add .
   ```
   Note: Don't add .DS_Store or other OS files. The .gitignore should handle this.

4. **Create meaningful commit message:**
   - Ask user to describe what changed
   - Format: "Action: description" (e.g., "Update: hero section copy")
   - If user unsure, suggest based on git diff output

5. **Commit source changes:**
   ```bash
   git commit -m "User's commit message"
   ```

6. **CRITICAL: Rebuild and commit static files:**
   ```bash
   npm run commit-static
   ```
   This automatically commits the rebuilt docs/ folder.

7. **Verify commits succeeded:**
   ```bash
   git log -2 --oneline
   git status  # Should show "nothing to commit, working tree clean"
   ```

#### Phase 3: Pre-Push Validation
Before pushing, ensure everything is ready:

1. **Offer to preview locally:**
   Ask: "Would you like to preview the changes locally before pushing?"
   
   If yes:
   ```bash
   npm run serve:static
   ```
   Tell user: "Preview running at http://localhost:3000"
   Wait for user to confirm it looks good.

2. **Check for build errors:**
   If `npm run commit-static` showed errors, DO NOT proceed with push.
   Show errors to user and help fix them first.

3. **Final safety check:**
   ```bash
   git log origin/main..main --oneline
   ```
   Show user what commits will be pushed.

#### Phase 4: Push (Requires User Approval)
**NEVER do this automatically. Always ask first.**

Ask user: "Ready to deploy? This will push X commits to production and update the live website."

If user confirms:
```bash
git push origin main
```

After successful push:
- Confirm: "✓ Deployed successfully!"
- Remind: "Changes will be live at https://desktopcommander.com in 1-2 minutes (GitHub Pages build time)"

### Common Issues and Solutions

#### Issue: Merge Conflicts
If `git pull` fails with conflicts:
1. Show conflict files: `git status`
2. Explain situation to user
3. Options:
   - Help resolve conflicts manually
   - Stash changes and re-apply: `git stash` then `git pull` then `git stash pop`
   - Ask if user wants to discard local changes (rare)

#### Issue: Build Fails
If `npm run commit-static` fails:
1. Show the error message
2. Check common issues:
   - Missing dependencies: Run `cd root && npm install`
   - Syntax errors in source files
   - Port conflicts (kill process on port 8082)
3. Fix the issue before proceeding
4. Run `npm run commit-static` again

#### Issue: Working Tree Not Clean
If there are still uncommitted changes after commit:
1. Run `git status` to see what's left
2. These might be:
   - .DS_Store (should be ignored, can be safe to ignore)
   - New untracked files (ask user if they should be committed)
   - Modified files that weren't staged (ask user if they should be committed)

#### Issue: Already Up to Date but User Expects Changes
If push says "Everything up-to-date":
- User's changes were already committed and pushed previously
- Run `git log -3 --oneline` to show recent commits
- Confirm with user if those commits contain their expected changes

### Emergency Rollback
If something goes wrong after push:

1. **Find last good commit:**
   ```bash
   git log --oneline
   ```

2. **Revert to previous state:**
   ```bash
   git revert HEAD --no-edit  # Reverts last commit
   # OR
   git reset --hard <commit-hash>  # DANGEROUS: only if not pushed yet
   ```

3. **Push the fix:**
   ```bash
   git push origin main --force  # Only if absolutely necessary
   ```

**Important:** Only use `--force` if user understands consequences.

### Workflow Checklist (AI Assistant Quick Reference)

Use this checklist for every deployment:

- [ ] Check git status and branch
- [ ] Sync with remote (git fetch + pull if needed)
- [ ] Review and show uncommitted changes to user
- [ ] Get user confirmation on what to commit
- [ ] Commit source changes with meaningful message
- [ ] Run `npm run commit-static`
- [ ] Verify working tree is clean
- [ ] Offer local preview option
- [ ] Show what will be pushed (git log comparison)
- [ ] **ASK USER FOR EXPLICIT APPROVAL TO PUSH**
- [ ] Push to origin main
- [ ] Confirm deployment success

### Key Safety Rules for AI Assistants

1. **NEVER push without asking** - This is the #1 rule
2. **Always show what will happen** before executing commands
3. **Verify static build succeeds** before pushing
4. **Handle errors gracefully** - Don't push if build fails
5. **Keep user informed** at each step
6. **Offer preview** before deploying
7. **Document what was done** in commit messages

### Example Interaction Flow

```
User: "I'm ready to deploy my changes"

AI: "Let me check the current state..."
[Runs git status, git fetch]

AI: "I see you have changes to:
- root/src/components/Hero.tsx
- root/src/styles/main.css

Would you like me to commit and deploy these? Please describe what you changed."

User: "Updated the hero section text and colors"

AI: "Great! I'll:
1. Commit your source changes
2. Rebuild the static site
3. Ask you to confirm before pushing to production

Committing with message: 'Update: hero section text and colors'..."
[Runs git add, git commit, npm run commit-static]

AI: "✓ Changes committed successfully
✓ Static site rebuilt

Would you like to preview locally before deploying? (recommended)"

User: "No, let's deploy"

AI: "Ready to push 2 commits to production:
- Update: hero section text and colors
- Static website changes

This will update the live website. Proceed? (yes/no)"

User: "yes"

AI: "Deploying..."
[Runs git push origin main]

AI: "✓ Deployed successfully! Changes will be live at https://desktopcommander.com in 1-2 minutes."
```
