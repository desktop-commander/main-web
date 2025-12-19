# CTA Buttons Update Guide

This document lists all CTA (Call-to-Action) button locations across the Desktop Commander website. Use this when updating CTAs site-wide (e.g., changing from "Join Waitlist" to "Download").

## Quick Reference

### Shared Components (affect multiple pages)

| Component | Location | Used By |
|-----------|----------|---------|
| `NavigationLandingPage.tsx` | `/src/components/NavigationLandingPage.tsx` | All use-case landing pages |
| `DownloadButtons.tsx` | `/src/components/shared/DownloadButtons.tsx` | Reusable download buttons component |
| `WaitlistSection.tsx` | `/src/components/use-cases/WaitlistSection.tsx` | File Management page |
| `FinalCTASection.tsx` | `/src/components/use-cases/FinalCTASection.tsx` | File Management page |
| `HowItWorksSimple.tsx` | `/src/components/use-cases/HowItWorksSimple.tsx` | Shared "How It Works" section |

### Use-Case Landing Pages

Each landing page typically has 3 CTA locations:
1. **Hero Section** - Main CTA at top of page
2. **How It Works / Get Started Section** - Step 1 usually has download buttons
3. **Final CTA Section** - Bottom of page conversion section

---

## File Management (`/use-cases/file-management/`)

| Section | File Path |
|---------|-----------|
| Hero | `/src/components/use-cases/FileManagementHero.tsx` |
| How It Works | `/src/components/use-cases/WaitlistSection.tsx` |
| Final CTA | `/src/components/use-cases/FinalCTASection.tsx` |

---

## Analyze Data (`/use-cases/analyze-data/`)

| Section | File Path |
|---------|-----------|
| Hero | `/src/components/use-cases/analyze-data/ADHeroSection.tsx` |
| How It Works | Uses shared `WaitlistSection.tsx` or page-specific |
| Final CTA | `/src/components/use-cases/analyze-data/ADFinalCTASection.tsx` |

---

## Build Prototype (`/use-cases/build-prototype/`)

| Section | File Path |
|---------|-----------|
| Hero | `/src/components/use-cases/build-prototype/BPHeroSection.tsx` |
| How It Works | Uses shared `WaitlistSection.tsx` or page-specific |
| Final CTA | `/src/components/use-cases/build-prototype/BPFinalCTASection.tsx` |

---

## Connect Apps (`/use-cases/connect-apps/`)

| Section | File Path |
|---------|-----------|
| Hero | `/src/components/use-cases/connect-apps/CAHeroSection.tsx` |
| How It Works | `/src/components/use-cases/connect-apps/CAHowItWorksSection.tsx` |
| Final CTA | `/src/components/use-cases/connect-apps/CAFinalCTASection.tsx` |

---

## Knowledge Management (`/use-cases/knowledge-management/`)

| Section | File Path |
|---------|-----------|
| Hero | `/src/components/use-cases/knowledge-management/KnowledgeManagementHero.tsx` |
| Solution Section | `/src/components/use-cases/knowledge-management/KMSolutionSection.tsx` |
| Final CTA | `/src/components/use-cases/knowledge-management/KMFinalCTASection.tsx` |

---

## Native AI (`/use-cases/native-ai/`)

| Section | File Path |
|---------|-----------|
| Hero | `/src/components/use-cases/native-ai/NativeAIHeroSection.tsx` |
| Final CTA | `/src/components/use-cases/native-ai/NativeAIFinalCTASection.tsx` |

---

## Navigation Components

| Component | File Path | Description |
|-----------|-----------|-------------|
| Landing Page Nav | `/src/components/NavigationLandingPage.tsx` | Desktop & mobile CTA buttons |
| Main Site Nav | `/src/components/Navigation.tsx` | Main website navigation |

---

## Current CTA Pattern (as of Dec 2024)

### Hero Sections
Single "Download App" button that scrolls to `#get-started`:
```tsx
<Button size="lg" asChild className="group">
  <a href="#get-started">
    <Download className="w-5 h-5" />
    Download App
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </a>
</Button>
```

### Download Sections (How It Works, Final CTA)
Three platform buttons using `DownloadButtons` component:
```tsx
import DownloadButtons from "@/components/shared/DownloadButtons";

// In component:
<DownloadButtons location="section_name" />
// or with variant:
<DownloadButtons variant="hero" location="section_name" />
```

### Final CTA Sections
Include "Download Desktop Commander" label above buttons:
```tsx
{/* Download Label */}
<div className="flex items-center justify-center gap-2 mb-4">
  <Download className="w-5 h-5 text-primary" />
  <span className="text-lg font-semibold">Download Desktop Commander</span>
</div>

{/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
  <DownloadButtons variant="hero" location="final_cta_section" />
</div>
```

---

## Download URLs

Current download URLs (defined in `DownloadButtons.tsx`):

```
macOS M Chip: https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-arm64.dmg
macOS Intel: https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-x64.dmg
Windows: https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-win-x64.exe
```

---

## Search Commands

Find all CTA-related code:

```bash
# Find all "Join the Waitlist" text
grep -r "Join the Waitlist\|Join Waitlist" src/components/

# Find all early-access links
grep -r "early-access" src/components/

# Find all DownloadButtons usage
grep -r "DownloadButtons" src/components/

# Find all #get-started links
grep -r "#get-started" src/components/
```

---

## Checklist for CTA Updates

When updating CTAs across the site:

- [ ] `NavigationLandingPage.tsx` - Desktop CTA button
- [ ] `NavigationLandingPage.tsx` - Mobile CTA button
- [ ] `FileManagementHero.tsx`
- [ ] `ADHeroSection.tsx`
- [ ] `BPHeroSection.tsx`
- [ ] `CAHeroSection.tsx`
- [ ] `KnowledgeManagementHero.tsx`
- [ ] `NativeAIHeroSection.tsx`
- [ ] `WaitlistSection.tsx`
- [ ] `CAHowItWorksSection.tsx`
- [ ] `KMSolutionSection.tsx`
- [ ] `HowItWorksSimple.tsx`
- [ ] `FinalCTASection.tsx`
- [ ] `ADFinalCTASection.tsx`
- [ ] `BPFinalCTASection.tsx`
- [ ] `CAFinalCTASection.tsx`
- [ ] `KMFinalCTASection.tsx`
- [ ] `NativeAIFinalCTASection.tsx`
- [ ] `DownloadButtons.tsx` (if changing download URLs)

After updates:
- [ ] Run `npm run build` to verify no errors
- [ ] Test all 6 use-case pages locally
- [ ] Verify navigation button works on all pages
