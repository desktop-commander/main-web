# Desktop Commander Careers Page - Project Plan

## Project Overview
Create a careers page for Desktop Commander, a pre-seed startup developing MCP (Model Context Protocol) that connects file systems to LLMs. The page will showcase available positions and company culture while maintaining the existing site's aesthetic.

## Business Context
- **Company**: Desktop Commander (MCP for file system to LLM connection)
- **Stage**: Pre-seed startup
- **Hiring**: Limited positions initially, targeting engineers primarily
- **Work Setup**: Hybrid
- **Application Process**: External form (no backend needed)

## Project Requirements

### Functional Requirements
1. **Job Listings Management**
   - JSON-based job storage for easy updates
   - No backend/database required
   - Simple CRUD via file editing
   - Support for multiple job types

2. **Job Display**
   - Clean, scannable job listings
   - Detailed job descriptions
   - Clear application CTAs
   - Mobile-responsive design

3. **Navigation Integration**
   - Add "Careers" to main navigation
   - Update footer with careers link
   - Maintain existing site routing structure

### Non-Functional Requirements
- Match existing site aesthetic and branding
- Mobile-first responsive design
- Fast loading and smooth UX
- SEO-friendly structure
- Analytics tracking integration

## Page Structure & Components

### 1. Page Layout
```
Header (Existing Navigation + Careers link)
├── Hero Section
├── Company Culture Section
├── Job Listings Section
├── Benefits & Perks Section
├── Application Process Section
└── Footer (Updated with Careers link)
```

### 2. Component Breakdown

#### Hero Section
- **Purpose**: Strong first impression, company mission
- **Content**: 
  - Headline: "Join the Future of AI-Powered Development"
  - Subheading: Brief company description
  - Background: Consistent with site theme
  - CTA: "View Open Positions" (scroll to jobs)

#### Company Culture Section
- **Purpose**: Attract talent with company values
- **Content**:
  - Mission statement
  - Core values (3-4 key points)
  - Work environment highlights
  - Team photos/illustrations (if available)

#### Job Listings Section
- **Purpose**: Display available positions
- **Features**:
  - Job cards with: Title, Department, Location, Type
  - Expandable detailed descriptions
  - "Apply Now" CTAs
  - Empty state for no open positions

#### Benefits & Perks Section
- **Purpose**: Highlight what makes working there attractive
- **Content**:
  - Hybrid work setup
  - Competitive compensation
  - Learning & development
  - Startup equity/growth opportunity

#### Application Process Section
- **Purpose**: Set expectations for candidates
- **Content**:
  - Simple 3-step process
  - What to expect timeline-wise
  - Contact information

## Technical Implementation Plan

### 1. Data Structure (jobs.json)
```json
{
  "jobs": [
    {
      "id": "ai-engineer-001",
      "title": "AI Engineer",
      "department": "Engineering",
      "location": "Hybrid",
      "type": "Full-time",
      "description": "...",
      "requirements": [...],
      "niceToHave": [...],
      "applyUrl": "https://external-form-url.com",
      "isActive": true,
      "postedDate": "2025-09-18"
    }
  ]
}
```

### 2. File Structure (Based on Current Project Structure)
```
src/
├── pages/
│   └── Careers.tsx (new)
├── components/
│   ├── CareersHero.tsx (new)
│   ├── CompanyCulture.tsx (new)
│   ├── JobListings.tsx (new)
│   ├── CareersPerks.tsx (new)
│   ├── ApplicationProcess.tsx (new)
│   ├── Navigation.tsx (update - add careers link)
│   ├── Footer.tsx (update - add careers link)
│   └── ui/ (existing shadcn components)
├── lib/
│   ├── careers.ts (new - job data utilities)
│   ├── analytics/ (existing)
│   └── utils.ts (existing)
├── hooks/
│   ├── useAnalytics.ts (existing - for tracking)
│   └── useCareers.ts (new - job data management)
├── utils/
│   └── assets.ts (existing)
└── data/
    └── jobs.json (new - job listings data)
```

**Following Your Current Patterns:**
- Flat component structure (no nested folders for careers components)
- Separate utilities in `lib/` directory
- Custom hooks in `hooks/` directory
- Static data in `data/` directory (new)
- Components follow PascalCase naming like existing files

### 3. Required Updates
- **App.tsx**: Add careers route
- **Navigation.tsx**: Add "Careers" menu item
- **Footer.tsx**: Add careers link
- **TypeScript types**: Job interface definitions

## Content Requirements

### Initial Job Posting - AI Engineer
- **Title**: AI Engineer
- **Department**: Engineering
- **Location**: Hybrid
- **Type**: Full-time
- **Description**: Role working on MCP integration, LLM connectivity
- **Requirements**: AI/ML background, Python/TypeScript, etc.
- **Apply URL**: [To be provided]

### Company Messaging
- **Mission**: Brief statement about Desktop Commander's vision
- **Values**: Innovation, collaboration, technical excellence
- **Benefits**: Startup equity, learning opportunities, hybrid flexibility

## User Experience Flow

### Primary User Journey
1. **Discovery**: User navigates to Careers from menu/footer
2. **Engagement**: Hero section captures attention
3. **Exploration**: Browse company culture and values
4. **Evaluation**: Review available positions
5. **Action**: Click "Apply Now" → External application form

### Mobile Experience
- Simplified navigation
- Stackable job cards
- Touch-friendly CTAs
- Fast loading on mobile networks

## Development Phases

### Phase 1: Foundation (Day 1)
- Create basic page structure
- Add routing and navigation links
- Set up component architecture
- Create jobs.json structure

### Phase 2: Core Components (Day 2)
- Build main page sections
- Implement job listings functionality
- Style components to match site theme
- Add responsive design

### Phase 3: Content & Polish (Day 3)
- Add real content and copy
- Implement job management system
- Add animations and micro-interactions
- SEO optimization

### Phase 4: Integration & Testing (Day 4)
- Analytics integration
- Cross-browser testing
- Mobile responsiveness verification
- Performance optimization

## Success Metrics
- Page load time < 2s
- Mobile-responsive on all devices
- Clear conversion path to applications
- Easy job management workflow
- Consistent brand experience

## Maintenance Plan
- **Job Updates**: Edit jobs.json file directly
- **Content Updates**: Modify component files
- **Analytics**: Track page views and application clicks
- **Regular Reviews**: Update company messaging as needed

## Open Questions for Clarification
1. Specific external application form URL
2. Company logo/branding assets for careers page
3. Team photos or illustrations preference
4. Specific benefits and perks to highlight
5. Company mission statement and values copy
6. Preferred color scheme adjustments (if any)

## Next Steps
1. Approve this plan and requirements
2. Clarify open questions above
3. Begin Phase 1 development
4. Provide content and copy for sections
5. Test and iterate based on feedback