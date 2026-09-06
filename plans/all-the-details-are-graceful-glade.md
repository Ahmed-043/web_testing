# The Maram — Brand Website Implementation Plan

## Context

Building a full personal authority brand website for Maram Abuznada ("The Maram") — an architect-turned-creative-strategist. The brief is exhaustively specified in two attached markdown files and supported by SVG brand assets. The site is a single-page scroll with four sections (Home, About, Projects, Contact) governed by a "structurally reductive" design system: split-canvas Evergreen/Snow Drift, Nohemi typeface, geometric star motif, no decorative elements. The existing App.tsx is a blank canvas.

---

## Design Decisions

**Stance committed:** Structural Authority — archival reverence meets architectural precision. Every element earns its place or is removed.

**Palette (brand-mandated, no deviation):**
- Evergreen: `#01503A`
- Snow Drift: `#F9F9F9`
- Black: `#000000`

**Typeface:** Nohemi from Fontshare CDN (not Google Fonts — use `@import url('https://api.fontshare.com/v2/css?f[]=nohemi@300,400,500,600,700&display=swap')`)

**SVG assets:** Both `BrandMark.svg` and `Wordmark.svg` have hardcoded `fill="#F9F9F9"` — they're designed for dark (Evergreen) backgrounds. Will inline them in JSX with `fill="currentColor"` and set `color` on parent so they can be recolored (Snow Drift on Evergreen, or Evergreen on Snow Drift where needed).

**Layout paradigm:** CSS Grid for page structure, asymmetric compositions, split-canvas 50/50 or 60/40.

---

## File Changes

### 1. `src/index.css`

Add at the very top (before all other CSS):
```css
@import url('https://api.fontshare.com/v2/css?f[]=nohemi@300,400,500,600,700&display=swap');
@import 'tailwindcss';
```

Add Tailwind v4 theme tokens and global typography:
```css
@theme {
  --color-evergreen: #01503A;
  --color-snow: #F9F9F9;
  --font-nohemi: 'Nohemi', sans-serif;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: 'Nohemi', sans-serif;
  background: #F9F9F9;
  color: #000000;
}
```

### 2. `src/App.tsx`

Complete rewrite of `App.tsx` with all sections inline (no sub-files needed at this scope). Structure:

```
<div> (root)
  <Nav />          — fixed top navigation
  <Home />         — full-viewport split hero
  <About />        — narrative + triad
  <Projects />     — case study grid
  <Contact />      — gateway + footer
</div>
```

---

## Section Specifications

### Nav
- Fixed top, z-50, full-width
- Background: Evergreen (`#01503A`)
- Left: Wordmark SVG (scripted logo, ~160px wide, Snow Drift colored)
- Right: Nav links — HOME · ABOUT · PROJECTS · CONTACT — separated by a small ✦ star, all-caps, tracked, small Nohemi weight
- Smooth scroll `href="#section"` anchors
- On mobile (<768px): collapse to hamburger menu showing just the Wordmark

### Home (`id="home"`)
- Full viewport height (100vh)
- **Split canvas: left 50% Evergreen, right 50% Snow Drift**
- Left (Evergreen): BrandMark SVG centered, large (~280px), Snow Drift colored. Subtle "THE MARAM" text label at bottom
- Right (Snow Drift): 
  - Top: "CREATIVE STRATEGIST" — all-caps, tracked 0.3em, small weight, Black
  - H1: "THE CLARITY\nBEHIND THE VISION" — Nohemi, tight tracking (-0.05em), 72–96px, Black, line-height tight
  - Sub: "Space, Strategy, and Human Experience." — regular weight, 18–20px, muted
  - Hairline divider
  - One-line positioning statement, light weight
  - Subtle scroll indicator at bottom right
- On mobile: stack vertically (Evergreen top with BrandMark, Snow Drift bottom with copy)

### About (`id="about"`)
- Background: Snow Drift
- **Asymmetric grid: left narrow column (35%) Evergreen, right wide column (65%) Snow Drift**
- Left column (Evergreen):
  - Vertical text label "ABOUT" rotated 90°, tracked, Snow Drift color
  - Wordmark SVG centered in column, Snow Drift colored, ~200px
  - Evergreen extends full height of section
- Right column:
  - Section number "01" small mono-style label
  - H2: "ARCHITECT. STRATEGIST. MENTOR." tight spacing
  - 3–4 paragraphs of formal copy about Maram's dual expertise — architecture training + strategic instinct, operating at the intersection of physical space, business logic, and human experience
  - Below: three pillars in a horizontal rule-separated list:
    - "ARCHITECTURE" / spatial intelligence
    - "STRATEGY" / business logic
    - "MENTORSHIP" / creative leadership
- On mobile: left column becomes a top Evergreen band, right fills below

### Projects (`id="projects"`)
- Background: Snow Drift
- Top: Section header row spanning full width — "02" label left, "PROJECTS" H2 right with hairline rule between
- 3 case study blocks in a 3-column grid, each block:
  - Full-height left border in Evergreen (2px)
  - Project number (01, 02, 03) — small, tracked
  - Title — H3, tight spacing
  - Discipline tags — all-caps, small, Evergreen color
  - Outcome statement — 1–2 sentences formal copy
  - On hover: left border fills to Evergreen background panel
- Case study content (realistic, brand-appropriate):
  1. "THE MERIDIAN TOWER" — Architectural programming + brand strategy for a mixed-use development; outcome: 40% faster leasing through repositioned identity
  2. "FOUNDERS CLARITY PROGRAM" — Executive mentorship for 12 founder cohort; outcome: 8 pivots to product-market fit within 90 days
  3. "EAST CREATIVE DISTRICT" — Spatial strategy + cultural activation for municipality; outcome: urban activation framework adopted as city standard
- On mobile: stack single column

### Contact (`id="contact"`)
- **Split canvas: left 60% Snow Drift, right 40% Evergreen**
- Left (Snow Drift):
  - Section number "03" + H2: "THE GATEWAY TO COMMITMENT" — tight spacing
  - Hairline rule
  - Contact details in Nohemi:
    - hello@themaram.com
    - +1 (555) 213-7846
    - 1420 Meridian Ave, Suite 500, Los Angeles, CA 90025
  - Small "CLARITY BEFORE COMMITMENT" tracked sub-label
- Right (Evergreen):
  - BrandMark SVG centered, large, Snow Drift colored — final visual anchor
- Footer (full-width, Evergreen background):
  - Left: "2026© THE MARAM"
  - Right: "CLARITY · INTEGRITY · DISCIPLINE"
  - All-caps, small, tracked, Snow Drift colored

---

## Typography Rules (applied throughout)

| Usage | Weight | Size | Tracking | Case |
|---|---|---|---|---|
| H1 | 600–700 | 72–96px | -0.05em | UPPERCASE |
| H2 | 500–600 | 40–56px | -0.03em | UPPERCASE |
| H3 | 500 | 24–32px | -0.02em | Mixed |
| "CREATIVE STRATEGIST" label | 300 | 12–14px | 0.3em | ALL-CAPS |
| Section numbers | 300 | 12px | 0.2em | — |
| Body copy | 300–400 | 16–18px | 0 | Sentence |
| Nav links | 400 | 12–14px | 0.15em | ALL-CAPS |

---

## BrandMark & Wordmark — Inline SVG Strategy

Both SVG files will be embedded inline in JSX (copy paths directly). Change `fill="#F9F9F9"` → `fill="currentColor"` on each `<path>`. Control color via Tailwind `text-[#F9F9F9]` on Evergreen backgrounds, or `text-[#01503A]` if ever placed on Snow Drift.

The Wordmark SVG is complex (~25 paths) — paste inline as a component `<WordmarkSVG />`. Same for `<BrandMarkSVG />`.

---

## Unique Design Differentiators (Anti-Template)

The design must feel hand-crafted, not assembled from a UI kit. Key differentiating choices:

1. **No cards with rounded corners** — all structural containers use razor-sharp 0-radius edges
2. **Oversized typographic anchors** — section numbers "01" "02" "03" printed huge and ghosted behind content (architectural drafting reference)
3. **The split-canvas is NOT a simple two-column flex** — it's a CSS clip-path / positioned composition where the Evergreen panel can bleed past the centerline
4. **Hairlines everywhere** — thin 1px rules used structurally, like construction drawings
5. **Vertical type in About** — rotated "ABOUT" column label references architectural section drawings
6. **No hero CTA button** — the brand earns trust before asking for action; the scroll itself is the invitation

---

## Animation System — Meaningful & Interactive

All animations must reinforce brand meaning, not decorate. Library: **Framer Motion** (install as dependency: `framer-motion`).

### Entrance Animations (Scroll-Triggered via `useInView`)

| Element | Animation | Brand Meaning |
|---|---|---|
| Hero left panel (Evergreen) | Slides in from left, clips to 50% | Structure arriving first |
| Hero right panel (Snow Drift) | Fades + slides up after left panel | Vision emerging after structure |
| H1 words | Staggered word-by-word reveal from below a clip-mask | Clarity unfolding deliberately |
| "CREATIVE STRATEGIST" label | Letter-by-letter tracking expansion (from 0 to 0.3em) | The discipline revealing itself |
| BrandMark on hero | Scale from 0.6→1 + rotate 45°→0 — the star "centers" itself | Centered mind finding its axis |
| Section headings | Wipe reveal from left behind a sliding Evergreen mask | Structure preceding content |
| Project blocks | Sequential stagger bottom-up as section enters view | Building the case study by case |
| About pillars (Architecture / Strategy / Mentorship) | Staggered fade-in left-to-right | The disciplines radiating from center |

### Interactive Hover Animations

| Element | Animation | Brand Meaning |
|---|---|---|
| Nav links | Thin Evergreen underline grows left→right on hover | Architectural alignment |
| Star separator ✦ in nav | Slow spin (360° over 3s) on page load, pauses, spins again on nav hover | The star as pivot point |
| Project block | Left border (2px Evergreen) floods to become a full Evergreen background panel; text flips Snow Drift | Structure enclosing the concept |
| BrandMark (hero) | On hover, the four arms of the star animate individually — each "reaches" to a different corner | Expanding into disciplines |
| Contact email / phone / address | Hairline underline slides in from right; subtle Evergreen text color shift | Signaling commitment |

### Page-Level Ambient Animations (Visually Appealing)

1. **Scroll progress bar** — 1px Evergreen vertical line on the far left edge of viewport, height fills from 0→100% as user scrolls; references an architectural elevation gauge
2. **Cursor companion** — A tiny ✦ star (6px, Evergreen) follows the cursor with a ~200ms lag and slight scale pulse; disappears on Evergreen sections (camouflage), reappears on Snow Drift
3. **Logo Animation GIF** — Use `src/imports/Logo_Animation.gif` as the hero's center element on initial load; once animation completes, crossfade to the static BrandMark SVG
4. **Ghost grid on Evergreen panels** — Extremely subtle 1px grid lines at ~80px intervals, 4% opacity, on all Evergreen background sections; references architectural drawing sheets
5. **Section number parallax** — The large ghost section numbers ("01", "02", "03") move at 0.3x scroll speed relative to their section, creating a layered depth effect
6. **Page load sequence** — On first load: black screen → Wordmark fades in centered → holds 800ms → splits left (Wordmark moves to nav position) and right (content fades in). Feels like an architectural reveal.

### Implementation Notes

- Install: `framer-motion` (v11+)
- Use `motion.div`, `useInView`, `useScroll`, `useTransform` from framer-motion
- `useScroll` + `useTransform` for the parallax section numbers and scroll progress bar
- Custom `useCursorPosition` hook for the cursor companion star
- `AnimatePresence` for the initial page-load sequence
- All animations respect `prefers-reduced-motion` — wrap in a check and skip transforms if true

---

## Responsive Breakpoints

- **≥1024px**: Full split-canvas layouts, 3-column project grid
- **768–1023px**: Reduced typography scale, 2-column projects
- **<768px**: All split canvases stack vertically (Evergreen top, Snow Drift bottom), single column projects, nav collapses

---

## Verification

1. Confirm Nohemi loads (check DevTools network tab for Fontshare request)
2. Verify split-canvas sections render at correct proportions
3. Confirm "CREATIVE STRATEGIST" is all-caps, tracked, and present on the hero
4. Confirm BrandMark appears on both Home (hero left) and Contact (right column) as final anchor
5. Confirm all contact data is present and styled in Nohemi
6. Confirm "2026©" copyright appears in footer
7. Test smooth scroll nav links
8. Check responsive layout at mobile width
