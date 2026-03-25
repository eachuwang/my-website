# Personal Website Design — Interstellar Theme

## Overview

A single-page scrolling resume website with deep space aesthetics, inspired by Interstellar. The experience feels like navigating through the cosmos — mysterious, immersive, and elegant.

**User**: Job-seeking developer
**Goal**: Showcase resume in a memorable, visually striking way

---

## Visual Style

### Color Palette
- **Background**: Deep blue gradient (`#0d1b2a` → `#1b263b` → `#0d1b2a`)
- **Primary Text**: Cold white-blue (`#e0f4ff`)
- **Accent**: Neon blue (`#4cc9f0`)
- **Secondary Text**: Muted blue (`#778da9`)
- **Hover Glow**: `rgba(76, 201, 240, 0.4)`

### Typography
- **Primary Font**: Geist Sans (existing)
- **Monospace Accent**: Geist Mono for technical elements (section labels, timestamps)
- Font weights: 300 (light) for headings, 400 for body text

### Atmosphere
- Star field background with CSS-animated twinkling stars
- Generous whitespace to convey cosmic void
- Subtle depth through parallax mouse movement on star field

---

## Page Structure

### Navigation Bar (Fixed)
- Left: Name / Logo
- Right: About / Education / Experience / Projects / Skills / Contact (anchor links)
- Background: transparent → slightly opaque on scroll
- Hover: text glow + subtle lift

### Hero Section (Full viewport)
- Full-screen deep blue gradient with animated star field
- Center: Name, title, one-line tagline
- Bottom: Animated down-arrow indicating scroll
- Star field parallax responds to mouse movement

### Content Sections (6 modules, vertical scroll)

1. **About** — Personal intro paragraph, generous whitespace
2. **Education** — Timeline format, left-aligned nodes. Each entry: Degree, Institution, Year, optional description
3. **Experience** — Timeline format, same visual pattern as Education. Each entry: Role, Company, Year Range, optional bullet points
4. **Projects** — Card grid (2 columns on desktop, 1 on mobile). Each card: Title, one-line description, tech tags, optional link icons (GitHub/Live Demo)
5. **Skills** — Tag cloud layout. Each skill displayed as a pill/tag with category grouping (Frontend, Backend, Tools, etc.)
6. **Contact** — Email + social links (GitHub, LinkedIn) displayed as icon links

---

## Animations

### Star Field
- 100+ randomly positioned star dots (CSS `box-shadow` or pseudo-elements)
- Twinkling: `opacity` oscillation between 0.3–1.0, duration 2–5s, staggered
- Mouse-move parallax: max displacement 20px (subtle depth, not nauseating)

### Scroll-triggered Reveals
- Each section fades + translates up on viewport entry (Intersection Observer)
- `opacity: 0 → 1`, `translateY: 40px → 0`, `600ms ease-out`
- Timeline nodes: sequential light-up animation
- Project cards: staggered entry with 100ms delay between cards

### Hover Interactions
- Navigation links: glow + translateY(-2px)
- Project cards: lift (translateY -4px) + blue glow border
- Contact links: underline draw animation

### Feeling
Non-linear, layered, minimal. Like traveling through different star systems as you scroll. Not flashy — sophisticated and mysterious.

---

## Technical Approach

- **Framework**: Next.js 16.2.1 (existing)
- **Styling**: Tailwind CSS v4 + custom CSS animations
- **Animation**: Native CSS for star field and hover effects; Framer Motion for scroll-triggered section reveals and staggered card animations
- **Fonts**: Geist + Geist_Mono (existing)
- **Scroll Detection**: Intersection Observer API

### Responsive Breakpoints
- Desktop (≥1024px): 2-column project grid, horizontal nav
- Tablet (768–1023px): 2-column project grid, horizontal nav (compact)
- Mobile (<768px): 1-column layout, hamburger menu for nav

### Animation Distribution
| Effect | Implementation |
|--------|----------------|
| Star twinkling | Native CSS `@keyframes` |
| Star parallax | Native CSS + vanilla JS |
| Scroll-triggered reveals | Framer Motion `whileInView` |
| Card stagger | Framer Motion `staggerChildren` |
| Nav/button hovers | Tailwind + custom CSS |

---

## Modules (Resume Content)

Six standard resume sections:
1. About (personal summary)
2. Education
3. Experience
4. Projects
5. Skills
6. Contact

All content is placeholder — actual content to be provided by user before implementation.
