# Gnomix Website Design Guidelines

## Design Approach
**Reference-Based: Gaming/Tech Aesthetic** - Inspired by norisk.gg's sleek, modern gaming client design adapted for a Linux distribution. This approach combines dark, immersive visuals with clean information architecture suitable for tech-savvy users seeking a no-nonsense Ubuntu alternative.

**Core Principles:**
- Dark, tech-forward aesthetic with vibrant accent overlays
- Glassmorphism and subtle gradient effects
- Bold, confident typography reflecting the "no bullshit" brand voice
- Clean information hierarchy with gaming-inspired visual flair

## Typography

**Font Families:**
- Primary: Inter (via Google Fonts) - clean, modern sans-serif for body and UI
- Accent: Space Grotesk (via Google Fonts) - bold, tech-forward for headlines

**Hierarchy:**
- Hero Headline: text-6xl/text-7xl, font-bold, Space Grotesk
- Section Headers: text-4xl/text-5xl, font-bold, Space Grotesk
- Subheadings: text-2xl/text-3xl, font-semibold, Inter
- Body: text-base/text-lg, font-normal, Inter
- Captions: text-sm, font-medium, Inter

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 8, 12, 16, 20, 24 (e.g., p-4, gap-8, py-20)

**Container Strategy:**
- Full-width sections with inner max-w-7xl containers
- Content sections: max-w-6xl for feature grids
- Text content: max-w-3xl for readability

**Vertical Rhythm:**
- Section padding: py-16 (mobile), py-24/py-32 (desktop)
- Component spacing: gap-8 to gap-16 within sections

## Component Library

### Navigation
- Sticky header with glassmorphism background blur
- Logo left, navigation links center, Download CTA button right
- Mobile: hamburger menu with full-screen overlay

### Hero Section
- Full viewport height (min-h-screen) with gradient background overlay
- Centered content with large headline, subtitle, dual CTAs
- Animated particle/grid background effect (subtle, non-distracting)
- Hero image: Abstract tech/GNOME-themed visual or distro screenshot

### Feature Cards (Grid Layout)
- 4-column grid (lg:grid-cols-4, md:grid-cols-2, grid-cols-1)
- Cards with icon, title, description
- Glassmorphism card backgrounds with subtle borders
- Icons: Heroicons via CDN for consistency

### Screenshot Showcase
- Large centered screenshots with glassmorphism frames
- Alternating left/right text layout for multiple screenshots
- Showcasing Stock GNOME interface, clean desktop

### Download Section
- Prominent download button with ISO size/version info
- System requirements in 2-column layout
- Alternative download links (GitHub, SourceForge)
- Trust indicators: Beta status badge, last updated date

### FAQ Accordion
- Single-column layout with expandable items
- Clean dividers between questions
- Icons for expand/collapse states

### Footer
- 3-column layout: About/Credits, Links, Community
- Credits section featuring @chichbo prominently
- Social/GitHub/SourceForge links
- Copyright and project info

## Images

**Hero Section:**
- Large background image: Abstract GNOME logo treatment or purple/blue tech gradient artwork
- Overlay: Dark gradient (bottom-to-top) for text readability

**Feature Visuals:**
- Desktop environment screenshots showing Stock GNOME interface
- Screenshot 1: Clean desktop with GNOME activities overview
- Screenshot 2: Application overview showing stock GNOME apps
- Screenshot 3: Terminal/system settings highlighting Canonical-free nature

**Placement:**
- Hero: Full-width background with overlay
- Screenshots: Centered in dedicated showcase sections, max-w-5xl with shadow effects

## Page Structure

1. **Hero Section** - Bold introduction with "Gnomix: Ubuntu Without The Bullshit" headline, dual CTAs (Download, Learn More)
2. **Introduction/About** - Brief 2-column layout explaining what Gnomix is, why it exists
3. **Key Features Grid** - 4 features: Stock GNOME, Canonical-Free, No Ubuntu Themes, Active Development
4. **Screenshots Showcase** - 2-3 alternating sections showing GNOME interface beauty
5. **Download Section** - Prominent download area with system requirements and links
6. **Why Gnomix?** - Comparison highlights in card format (what's removed/added vs Ubuntu)
7. **FAQ Section** - Common questions about installation, features, support
8. **Community/Support** - GitHub, SourceForge links, contribution info
9. **Footer** - Credits (@chichbo), links, legal

**Multi-Column Usage:**
- Features: 4 columns (desktop), stack on mobile
- Download info: 2 columns (requirements vs. download options)
- Footer: 3 columns for organized information

**Animations:**
- Subtle fade-in on scroll for sections
- Hero particle/grid animation (minimal, ambient)
- Smooth hover states on cards and buttons
- NO excessive scroll-triggered animations

**Button Treatment:**
- Primary CTA: Large, bold with gradient background
- Secondary: Outlined with glassmorphism
- On hero image: Backdrop blur (backdrop-blur-md) with semi-transparent background