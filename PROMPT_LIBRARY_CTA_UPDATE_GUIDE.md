# Prompt Library CTA & Layout Update Guide

This guide describes how to update the prompt library pages to match the new user experience we've designed. The goal is to make it easier for users to understand what each prompt does, how Desktop Commander helps, and how to get started.

## Overview of Changes

### What We're Updating
1. **Prompt Detail Pages** - New layout with better descriptions and inline CTA
2. **Prompt Cards** - Cleaner design with time estimates and target roles
3. **CTA Flow** - "Run in Desktop Commander" button with inline download section

### What We're NOT Updating
- **Prompt text itself** - The actual prompt content should stay exactly as is
- **Prompt metadata** - IDs, slugs, categories, etc. remain unchanged

---

## 1. Prompt Detail Page Layout

### New Structure (Top to Bottom)

```
┌─────────────────────────────────────────────────────────────┐
│ ← Back to Library                                           │
├─────────────────────────────────────────────────────────────┤
│ [Icon] Prompt Title                                         │
│ [Verified badge] [Session type badge] [Category badges]     │
├─────────────────────────────────────────────────────────────┤
│ WHAT THIS PROMPT DOES                                       │
│ - Description paragraph                                     │
│ - How it works (4 steps)                                    │
│ - Why Desktop Commander? (subtle callout)                   │
├─────────────────────────────────────────────────────────────┤
│ BEST FOR                                                    │
│ [Role badges]                                               │
├─────────────────────────────────────────────────────────────┤
│ THE PROMPT                                                  │
│ [Prompt text box]                              [Copy text]  │
├─────────────────────────────────────────────────────────────┤
│ ⚡ Ready to run this prompt?                                │
│ Copy and paste into Desktop Commander                       │
│                                    [Run in Desktop Commander]│
├─────────────────────────────────────────────────────────────┤
│ Created by [author]                              [Share]    │
└─────────────────────────────────────────────────────────────┘
```

### Section Details

#### Header
- Back button to library
- Prompt icon + title (large)
- Badges row: Verified (if applicable), Session type, Categories

#### What This Prompt Does
This section needs to be written/expanded for each prompt. Include:

**1. Description Paragraph**
- What the prompt accomplishes
- Mention it's automatic/AI-powered
- Keep it concise (2-3 sentences)

**2. How It Works (4 Steps)**
Write 4 simple steps specific to each prompt:
```
1. Run this prompt in Desktop Commander
2. [What AI does first - e.g., "AI scans your Downloads folder"]
3. [What AI does next - e.g., "Creates organized subfolders and moves files"]
4. [Final result - e.g., "Opens the folder and shows you a summary"]
```

**3. Why Desktop Commander? (Callout)**
One line explaining why DC is needed. Use this template and customize:
```
Why Desktop Commander? Unlike regular AI chatbots, Desktop Commander can actually 
[specific capability for this prompt] — turning this prompt into real action in seconds.
```

Examples:
- "...can actually access your files and execute tasks on your computer"
- "...can actually read your codebase and make changes to files"
- "...can actually run commands and set up your development environment"

#### Best For
Display the existing `targetRoles` as badges. No changes needed to data.

#### The Prompt
- Display the prompt text in a code/mono box
- Small "Copy text" button in corner
- **DO NOT modify the prompt text itself**

#### Run in Desktop Commander CTA
This is the main action area. Shows:
- Zap icon + "Ready to run this prompt?"
- Subtitle: "Copy and paste into Desktop Commander"
- Primary button: "Run in Desktop Commander"

**Button Behavior:**
- If user has DC installed (cookie): Copies prompt to clipboard, shows "Copied! Paste in DC"
- If user doesn't have DC: Expands download section below (see section 3)

---

## 2. Prompt Card Updates

### New Card Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [Icon] Prompt Title                              [New badge]│
├─────────────────────────────────────────────────────────────┤
│ Description text (2-3 lines max)                            │
├─────────────────────────────────────────────────────────────┤
│ ⏱ < 1 min   ⚡ Instant              [Engagement meter]     │
│ 👥 Vibe Coders, Content makers +3                           │
│                                              View prompt → │
└─────────────────────────────────────────────────────────────┘
```

### Card Elements

1. **Icon + Title** - From existing data
2. **New Badge** - Shows if `dateAdded` is within 14 days
3. **Description** - From existing data, limit to 3 lines
4. **Time Estimate**:
   - "Instant output" → "< 1 min"
   - "Step-by-step flow" → "2-5 min"
5. **Session Type Display**:
   - "Instant output" → "Instant" with Zap icon (green)
   - "Step-by-step flow" → "Guided" (blue)
6. **Engagement Meter** - Existing component
7. **Target Roles** - Show first 2, then "+N" for rest
8. **Hover State** - Shows "View prompt →"

---

## 3. Download Section (Inline CTA)

When user clicks "Run in Desktop Commander" without DC installed, show this section:

```
┌─────────────────────────────────────────────────────────────┐
│           Get Desktop Commander to run this prompt          │
│                                                             │
│   Desktop Commander gives AI direct access to your files    │
│   and system, letting you automate tasks like this in       │
│   seconds.                                                  │
│                                                             │
│   [Download for Mac (Apple Silicon)]  [Mac (Intel)]        │
│                                                             │
│   🖥 Windows coming soon — join waitlist →                  │
│                                                             │
│   I already have Desktop Commander installed                │
│   ─────────────────────────────────────────────            │
│   Using your own AI client? Get Desktop Commander MCP →     │
│                                                             │
│                    ▲ Hide download options                  │
└─────────────────────────────────────────────────────────────┘
```

### Download URLs
- macOS Apple Silicon: `https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-arm64.dmg`
- macOS Intel: `https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-x64.dmg`
- Windows: Link to `/product/early-access` waitlist

### MCP Link
Text: "Using your own AI client? Get Desktop Commander MCP"
Link: `/mcp`

---

## 4. Content Writing Guidelines

### For Each Prompt, Write:

#### Description Paragraph
- Start with what it does, not how
- Mention automation/AI doing the work
- Be specific about the outcome
- Keep to 2-3 sentences

**Good example:**
> This prompt automatically organizes your messy Downloads folder into clean subfolders by file type — documents, images, videos, archives, and more. No manual sorting required.

**Bad example:**
> Organise messy downloads folder into relevant subfolders.

#### How It Works Steps
- Step 1 is always: "Run this prompt in Desktop Commander"
- Steps 2-3: What AI does (be specific to the prompt)
- Step 4: The result/outcome user sees
- Use active voice
- Keep each step to one line

#### Why Desktop Commander Callout
- Explain the specific capability DC provides for THIS prompt
- Contrast with "regular AI chatbots" 
- End with "turning this prompt into real action"

---

## 5. Files to Update

### Components to Modify

1. **`/src/components/library/PromptDetailPage.tsx`**
   - Update layout structure
   - Add "What this prompt does" section with steps
   - Add "Why Desktop Commander?" callout
   - Replace UsePromptWizard with RunInDCButton
   - Reorder: Description → Prompt → CTA

2. **`/src/components/library/PromptCard.tsx`**
   - Add time estimate display
   - Update session type styling
   - Add target roles row
   - Update hover state

3. **`/src/components/library/UsePromptWizard.tsx`**
   - Replace with new `RunInDCButton` component
   - Or significantly simplify the wizard

4. **Create: `/src/components/library/RunInDCButton.tsx`**
   - New component for inline CTA
   - Handles copy, download section expansion
   - Cookie-based install detection

### Data Updates

**`/src/data/library/useCases.json`**
- Add new fields to each prompt:
  - `extendedDescription`: string - The full description paragraph
  - `howItWorks`: string[] - Array of 4 step descriptions
  - `whyDC`: string - The "Why Desktop Commander?" text

**Example:**
```json
{
  "id": "8",
  "title": "Organise my Downloads folder",
  "description": "Organise messy downloads folder into relevant subfolders.",
  "extendedDescription": "This prompt automatically organizes your messy Downloads folder into clean subfolders by file type — documents, images, videos, archives, and more. No manual sorting required.",
  "howItWorks": [
    "Run this prompt in Desktop Commander",
    "AI scans your Downloads folder and identifies all file types",
    "Creates organized subfolders and moves files automatically",
    "Opens the folder and shows you a summary of what was organized"
  ],
  "whyDC": "Unlike regular AI chatbots, Desktop Commander can actually access your files and execute tasks on your computer — turning this prompt into real action in seconds.",
  "prompt": "Analyze my Downloads folder and organize all files into subfolders by type...",
  ...
}
```

---

## 6. Analytics Events

Track these events for the new CTA flow:

| Event Name | When | Properties |
|------------|------|------------|
| `prompt_library_run_clicked` | User clicks "Run in Desktop Commander" | `prompt_title`, `has_dc_installed` |
| `prompt_library_prompt_copied` | Prompt copied to clipboard | `prompt_title`, `copy_method` (run_button / copy_text) |
| `prompt_library_download_section_shown` | Download section expands | `prompt_title` |
| `prompt_library_download_clicked` | User clicks download button | `prompt_title`, `platform` (macos-m / macos-intel) |
| `prompt_library_marked_installed` | User clicks "I already have DC" | `prompt_title` |
| `prompt_library_mcp_link_clicked` | User clicks MCP link | `prompt_title` |
| `prompt_library_download_section_hidden` | User collapses download section | `prompt_title` |

---

## 7. Implementation Order

### Phase 1: Components
1. Create `RunInDCButton.tsx` component
2. Update `PromptCard.tsx` with new layout
3. Update `PromptDetailPage.tsx` with new structure

### Phase 2: Data
1. Add new fields to `useCases.json` schema
2. Write extended content for each prompt (one by one)
3. Test each prompt page after content update

### Phase 3: Cleanup
1. Remove or deprecate `UsePromptWizard.tsx` if fully replaced
2. Update any other pages that reference old components
3. Update tests if applicable

---

## 8. Reference Implementation

See the test page and components in `/src/components/library/v2/`:
- `PromptDetailTestPage.tsx` - Full page layout example
- `PromptCardV2.tsx` - Updated card component
- `GetDesktopCommanderSection.tsx` - RunInDCButton component

Test page available at: `/library/cta-test`

---

## 9. Checklist for Each Prompt

When updating a prompt's content:

- [ ] Write `extendedDescription` (2-3 sentences, mentions AI automation)
- [ ] Write 4 `howItWorks` steps specific to this prompt
- [ ] Write `whyDC` callout mentioning specific DC capability
- [ ] Verify `targetRoles` are accurate
- [ ] Verify `sessionType` is correct (affects time estimate)
- [ ] Test the prompt detail page renders correctly
- [ ] Test "Run in Desktop Commander" button works
- [ ] Test download section expands for new users
- [ ] DO NOT modify the `prompt` field

---

## Questions?

---

## 10. Progress Tracking

### Phase 1: Components ✅ COMPLETE
- [x] Created `RunInDCButton.tsx` component
- [x] Updated `PromptDetailPage.tsx` with new structure
- [x] Added extended fields to `useCases.ts` TypeScript interface

### Phase 2: Data ✅ COMPLETE

#### All Prompts Now Have Extended Content (73 total)
| ID | Title | Status |
|----|-------|--------|
| 2 | Build A Feature from Scratch | ✅ Done |
| 3 | Analyze My Data File | ✅ Done |
| 4 | Set Up Local Development Environment | ✅ Done |
| 5 | Clean Up Unused Code | ✅ Done |
| 6 | Explain React Component Architecture | ✅ Done |
| 8 | Organise my Downloads folder | ✅ Done |
| 9 | Build Personal Finance Tracker | ✅ Done |
| 11 | Automate Competitor Research | ✅ Done |
| 14 | Analyze Error Handling Strategy | ✅ Done |
| 15 | Implement GitHub Issue | ✅ Done |
| 16 | Set Up New Project Structure | ✅ Done |
| 17 | Create Knowledge Base Folder | ✅ Done |
| 20 | Visualize Microservices Communication | ✅ Done |
| 21 | Create Team Onboarding Documentation | ✅ Done |
| 22 | Optimize Docker Setup | ✅ Done |
| 23 | Document System Architecture | ✅ Done |
| 25 | Generate Dev Onboarding Guide | ✅ Done |
| 26 | Assess Scalability Challenges | ✅ Done |
| 28 | Document Dependencies and Tools | ✅ Done |
| 29 | Plan Migration Strategy | ✅ Done |
| 30 | Create Git History Presentation | ✅ Done |
| 31 | Build GitHub Issues Dashboard | ✅ Done |
| 33 | Find Error Patterns in Logs | ✅ Done |
| 34 | Compare Config Files to Baseline | ✅ Done |
| 35 | Update My CV/Resume | ✅ Done |
| 36 | Remove Background from Profile Picture | ✅ Done |
| 37 | Merge Two PDFs | ✅ Done |
| 38 | Convert HEIC to PNG | ✅ Done |
| 39 | Convert EDOC to DOC | ✅ Done |
| 40 | Create folder with images | ✅ Done |
| 41 | Batch Convert and Rename Images | ✅ Done |
| 42 | Organize PDF Invoices by Date | ✅ Done |
| 43 | Extract Data from PDFs | ✅ Done |
| 44 | Rename Bank Statements by Account | ✅ Done |
| 45 | Find Large Receipts by Vendor | ✅ Done |
| 46 | Consolidate Data Files into One | ✅ Done |
| 47 | Remove Duplicate Contacts from Spreadsheet | ✅ Done |
| 48 | Find All TODO Comments | ✅ Done |
| 49 | Generate Tests for Missing Coverage | ✅ Done |
| 52 | Get my IP address | ✅ Done |
| 53 | Set Up Cloud Infrastructure | ✅ Done |
| 55 | Set Up WordPress Environment | ✅ Done |
| 56 | Document API endpoints | ✅ Done |
| 57 | Assess Technical Debt | ✅ Done |
| 58 | Assess Project's Security | ✅ Done |
| 59 | Explain Codebase or Repository | ✅ Done |
| 60 | Create Project Documentation | ✅ Done |
| 61 | Find Invoices and Move Them to Folder | ✅ Done |
| 62 | Visualize Project Architecture | ✅ Done |
| 63 | Generate Architecture Diagram | ✅ Done |
| 64 | Document REST API Endpoints | ✅ Done |
| 65 | Document GraphQL Schema | ✅ Done |
| 66 | Visualize Database Schema | ✅ Done |
| 67 | Create Database Schema Diagram | ✅ Done |
| 68 | Explain Docker Configuration | ✅ Done |
| 69 | Visualize Terraform Architecture | ✅ Done |
| 70 | Document Ansible Configuration | ✅ Done |
| 71 | Explain CI/CD Pipeline | ✅ Done |
| 72 | Debug Remote Server Errors | ✅ Done |
| 73 | Optimize Database Schema | ✅ Done |
| 74 | Set Up MySQL Database | ✅ Done |
| 75 | Set Up PostgreSQL Database | ✅ Done |
| 76 | Set Up MongoDB Database | ✅ Done |
| 77 | Set Up Redis Server | ✅ Done |
| 78 | Generate Docker Configuration | ✅ Done |
| 79 | Set Up GitHub Actions CI/CD | ✅ Done |
| 80 | Audit Authentication Security | ✅ Done |
| 81 | Analyze Test Coverage Gaps | ✅ Done |
| 82 | Build and Deploy Landing Page | ✅ Done |
| 83 | Set up Google Analytics and analyze traffic | ✅ Done |
| 84 | Manage Wordpress site in natural language | ✅ Done |
| 85 | Setting up Posthog Analytics with custom events | ✅ Done |
| 86 | Organize My Desktop Files | ✅ Done |

**Total: 73 prompts - ALL COMPLETE**

### Phase 3: Cleanup - NOT STARTED
- [ ] Remove or deprecate `UsePromptWizard.tsx`
- [ ] Update PromptCard.tsx with v2 design
- [ ] Full testing across all prompts

Refer to the test implementation at `/library/cta-test` or the v2 components for working examples.
