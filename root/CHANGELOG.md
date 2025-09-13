# Changelog

All notable changes to the Desktop Commander website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.0] - 2025-09-13

### 🧹 Independence & Cleanup
- **Removed all Lovable dependencies** for complete project independence
- **Migrated assets** from `lovable-uploads/` to descriptive filenames
- **Cleaned configuration** removed `lovable-tagger` from build pipeline
- **Updated documentation** removed all Lovable workflow references
- **Fixed routing** for local development and deployment flexibility

### 🎨 User Experience Improvements
- **Repositioned Prompt Library** section to appear right after "Trusted By" for better user flow
- **Enhanced asset organization** with meaningful filenames instead of UUIDs
- **Improved SEO meta tags** with custom domain references
- **Fixed local development** removed routing conflicts

### 📁 Asset Management
- **Renamed core assets** with descriptive names:
  - `claude-desktop-logo.png` (was `ed3b3a05-2313-48cb-9eb3-3edb097375a8.png`)
  - `cursor-logo.png` (was `c6b2cb6a-d36a-457f-ae75-b9371e1807a1.png`) 
  - `client-logo-1.png`, `client-logo-2.png`, `client-logo-3.png`
  - `blog-1.png`, `blog-2.png`, `blog-3.png`, `blog-4.png`
- **Removed orphaned images** cleaned up unused assets
- **Improved maintainability** assets now self-documenting

### 🔧 Technical Changes
- **Package cleanup** removed `lovable-tagger` from devDependencies
- **Build optimization** simplified Vite configuration 
- **Routing fixes** removed production-specific basename for local dev
- **Meta tag updates** social sharing now uses custom domain assets
- **Documentation overhaul** README focused on independent development workflow

### 💡 Better Information Architecture
**New section flow:**
1. Hero → Use Cases → Trusted By → **Prompt Library** → Installation → Blog → Community → FAQ

**Why this works better:**
- Users see social proof first (Trusted By + Testimonials)
- Immediately follow with actionable examples (Prompt Library) 
- Then learn how to get started (Installation)
- Creates natural progression: "See proof → Try examples → Install → Learn more"

### 🚀 Development Workflow
- **Full independence** no external platform dependencies
- **Clean git history** with descriptive commit messages
- **Standard npm workflow** `npm install` → `npm run dev` → deploy anywhere
- **Flexible deployment** works with any static hosting provider
- **Hot reload** preserved for efficient development

## [1.2.0] - 2025-09-13

### Added
- 🎨 Single row testimonial layout for cleaner, more focused design
- ⚡ Faster testimonial animations (50s vs 80s) for better engagement
- 📐 Proper rotation padding to prevent card border clipping
- 🖥️ One-viewport layout optimization for entire testimonials section

### Changed
- 🗑️ Removed heart emoji reactions from testimonial cards for cleaner aesthetic
- 📏 Consolidated two-row testimonials into single flowing row
- 🌊 Testimonials now scroll truly edge-to-edge across full viewport width
- 📱 Optimized card dimensions (320px width, 224px height) for better text fit
- ⬆️ Moved CTA section below testimonials for improved content flow
- 📊 Reduced vertical spacing throughout section for compact, viewport-friendly layout

### Fixed
- 🔧 Fixed testimonials disappearing into container borders instead of screen edges
- 🎭 Prevented rotated card borders from being clipped with proper padding
- 📱 Eliminated horizontal scrolling issues with optimized spacing
- 🎯 Improved testimonial text readability with larger card dimensions

### Technical Improvements
- 🏗️ Moved testimonials outside constrained container for true full-width effect
- 📐 Reduced section padding from 96px to 64px (py-24 → py-16)
- 🔄 Optimized animation performance with 37.5% speed increase
- 🎨 Enhanced spacing hierarchy for better visual balance

## [1.1.0] - 2025-09-12

### Added
- ✨ Authentic community testimonials from real Desktop Commander users
- 🎨 Dynamic date generation for testimonials spanning April-September 2025
- 📱 Fixed-height testimonial cards with scrolling for better layout consistency
- 🎯 Smart date distribution algorithm using hash-based seeding

### Changed
- 🔄 Replaced 22 sample testimonials with 11 real community testimonials
- 📝 Condensed overly long testimonials while preserving original meaning
- 🎨 Improved testimonial card layout with consistent height (240px)
- 📅 Each testimonial now shows unique dates instead of identical timestamps

### Removed
- 🗑️ Removed unnecessary smiley face emoji from testimonial cards
- 🧹 Cleaned up redundant UI elements for cleaner design

### Fixed
- 🐛 Fixed testimonial cards breaking layout with long text content
- 🎨 Improved overflow handling with custom scrollbars
- 📱 Better responsive design for testimonial cards
- 🔧 Enhanced hash distribution for more even date spread

### Technical Details
- Implemented flexbox layout with `flex-col` and `flex-1` for content area
- Added custom scrollbar styling with `scrollbar-thin` utilities  
- Used bit-shifting operations for better random number distribution
- Testimonial dates consistently generated using author name as seed

## [1.0.0] - 2025-09-01

### Added
- 🚀 Initial website launch
- 📋 Hero section with call-to-action
- 🏆 Trust indicators and statistics
- 📚 Features and use cases sections
- 🛠️ Installation instructions
- 💬 Community links and resources
- ❓ FAQ section
- 📱 Responsive design for all screen sizes

---

## How to Update This Changelog

When making changes to the website:

1. **Add new entries** under `[Unreleased]` section
2. **Use conventional commit format**: feat, fix, docs, style, refactor, test, chore
3. **Include emojis** for better visual scanning
4. **Move to versioned section** when releasing
5. **Link to issues/PRs** when applicable

### Categories
- `Added` for new features
- `Changed` for changes in existing functionality  
- `Deprecated` for soon-to-be removed features
- `Removed` for now removed features
- `Fixed` for any bug fixes
- `Security` for vulnerability fixes
