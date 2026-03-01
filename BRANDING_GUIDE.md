# AirportFits — Complete Branding Language Guide

> **Purpose:** This document captures every branding decision, pattern, and convention used in the AirportFits project. It is structured so that an AI assistant (Claude Opus 4.6) can ingest it and faithfully reproduce the same brand identity in a new product, different category, or entirely separate codebase. Every section is self-contained and exhaustive.

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Voice & Tone](#2-voice--tone)
3. [Taglines, Slogans & Key Phrases](#3-taglines-slogans--key-phrases)
4. [Copywriting Patterns](#4-copywriting-patterns)
5. [Naming Conventions](#5-naming-conventions)
6. [Color System](#6-color-system)
7. [Typography System](#7-typography-system)
8. [Visual Design Language](#8-visual-design-language)
9. [UI Component Patterns](#9-ui-component-patterns)
10. [Interaction & Motion Language](#10-interaction--motion-language)
11. [Photography & Imagery](#11-photography--imagery)
12. [Brand Values & Personality](#12-brand-values--personality)
13. [Audience & Positioning](#13-audience--positioning)
14. [Prompt Template for New Products](#14-prompt-template-for-new-products)

---

## 1. Brand Identity

### Brand Name
- **Full Name:** AirportFits
- **Casing:** PascalCase with no space — "AirportFits" (never "Airport Fits", "airportfits", or "AIRPORTFITS")
- **Logo Treatment:** The word "Airport" is rendered in the primary text color (cream/dark depending on theme), and "Fits" is rendered in the brand's gold accent color
- **HTML Logo Pattern:** `Airport<span>Fits</span>` — where the `<span>` receives the gold accent color

### Brand Category
- Premium / accessible-luxury fashion e-commerce
- Travel-lifestyle athleisure

### Origin Story
- Conceived at Dubai International Airport (the world's busiest international hub)
- Founded on the frustration of choosing between looking good and being comfortable while traveling
- 18-month material sourcing process for the signature 320 GSM cotton
- "Designed in Dubai" is the origin badge

### Seasonal Format
- Collections are labelled by season and year: `SS 2025`, `AW 2025`, etc.
- Eyebrow text pattern: `AirportFits — SS 2025`

---

## 2. Voice & Tone

### Overall Voice
- **Confident but not arrogant.** The brand speaks with quiet authority — it knows it's premium but never shouts about it.
- **Concise and editorial.** Sentences are short to mid-length. Paragraphs are tight. No fluff.
- **Aspirational yet accessible.** The language evokes luxury travel and sophistication but remains warm and inviting, never exclusionary.
- **Modern-classic.** Copy reads like a high-end fashion editorial but with a contemporary, conversational undercurrent.

### Tone Characteristics
| Characteristic | Level | Example |
|---|---|---|
| Formality | Medium-high | "Engineered for the journey" (not "made for trips") |
| Warmth | Medium | "Your ultimate travel companion" |
| Exclusivity | Medium | "First class inbox" (not "VIP members only") |
| Technical authority | Medium-low | "320 GSM premium cotton" — states specs plainly, doesn't over-explain |
| Playfulness | Low | Subtle wordplay with aviation terms only |
| Urgency | Very low | No "LIMITED TIME!" or "HURRY!" — ever |

### What the brand IS
- Refined, intentional, understated
- Premium but approachable
- Travel-inspired without being kitschy
- Confident in material quality

### What the brand IS NOT
- Loud, hypebeast, or streetwear-aggressive
- Discount-driven or urgency-based
- Overly technical or spec-heavy
- Generic athleisure with no personality

---

## 3. Taglines, Slogans & Key Phrases

### Primary Tagline
> **"Land in Style"**

Used in: hero section, meta tags, mobile menu footer, marquee, page titles. This is the brand's north-star phrase. It is a double entendre — "land" as in arriving at a destination (airplane landing) and "land" as in achieving something ("land the job"). It should appear on every major brand surface.

### Supporting Taglines (in order of prominence)
| Tagline | Usage Context |
|---|---|
| "Comfort, elevated." | Hero subtitle — product-level descriptor |
| "Designed for the journey." | OG/meta description — brand essence |
| "Born in the terminal, built for the journey." | Brand story section — origin statement |
| "Born to Fly." | About page hero — aspirational/emotional |
| "First class inbox." | Newsletter section — email signup |
| "The journey is the destination. You should look like you know it." | Brand quote — philosophy |
| "Premium cotton travel wear designed for airport comfort and style." | Footer/meta description — functional summary |

### Recurring Micro-Phrases
These short phrases are used in labels, badges, and UI elements:
- "The Collection" — shop page heading / featured section label
- "Featured Pieces" — home page product grid heading
- "Find Your Fit" — category grid heading
- "Our Story" — about section label
- "Shop the Collection" — primary CTA text
- "Your Bag" — cart page heading (never "Cart" or "Basket")
- "Add to Bag" — add-to-cart button text
- "View Bag" — secondary cart CTA
- "Designed in Dubai" — origin badge on images
- "Secure Checkout · SSL Encrypted" — trust signals
- "Continue Shopping" — back-to-shop CTA (always with ← arrow)

### Marquee Strip Content Pattern
The scrolling marquee follows this exact formula:
```
Premium Cotton · 320 GSM · Land in Style · Free Shipping Over $200 · [Product Line Names] · [repeat]
```
Key rules:
- Separated by ` · ` (spaced middle dot)
- All uppercase via CSS (`text-transform: uppercase`)
- Very small font (0.62rem), heavy letter-spacing (0.25em)
- Gold background, dark text

---

## 4. Copywriting Patterns

### Product Description Formula
```
The AirportFits [product-type] is your ultimate travel companion. Crafted from our signature
320 GSM premium cotton, each [product-type] delivers the perfect balance of luxury and ease —
whether you're [travel activity 1] or [travel activity 2].
```
Pattern: **Claim → Material proof → Usage scenario**

### Product Name Display Formula
```
[Design Name] Hoodie & Jogger Set
```
Examples: "Terminal Hoodie & Jogger Set", "First Class Hoodie & Jogger Set"

### Product Card Subtitle Formula
```
[Color Name] · [Fit Description]
```
Example: "Dusty Pink · Relaxed Oversized Fit"

### Brand Story Paragraph Structure
1. **Hook** — Start with a bold brand name or "We" statement
2. **Problem** — Identify the frustration the brand solves
3. **Journey** — Describe the sourcing/creation process
4. **Emotional payoff** — End with how the customer feels

Example from the About page:
> "AirportFits was conceived in the terminal of Dubai International Airport — the world's busiest international hub. Our founder, tired of choosing between looking good and being comfortable, decided the choice shouldn't have to be made."

### Em-Dash Usage
The brand uses em dashes (`—`) extensively for:
- Asides: "From the terminal lounge to your destination, you arrive looking like you meant it."
- Product specs: "320 GSM — substantial, structured feel"
- Navigation cues: "Continue to Shipping →"
- Price separators in copy: "$8 · 5–8 business days"

### Value Proposition Numbering Pattern
Brand values are numbered with zero-padded numbers: `01`, `02`, `03`, `04`
Each value block follows the structure:
```
[Number] — 01
[Title]  — "Crafted with Intent" (3-4 words, title case)
[Description] — 1-2 sentences, practical not flowery
```

### Notification/Toast Message Pattern
```
"Added to bag — [Design] · [Color] · [Size]"
"Please select a size"
"Your bag is empty"
```
Pattern: Action confirmation uses `—` separator, followed by `·` delimited details.

### Newsletter Copy
- Heading: "First class inbox"
- Body: "Join our list for early access to new drops, exclusive offers, and style inspiration for the modern traveller."
- Note: Uses British spelling of "traveller" (double-l)

### Spelling Convention
- **British English** is used: "traveller" (not "traveler"), "colour" (appears in product descriptions)
- This reflects the Dubai/international positioning

---

## 5. Naming Conventions

### Product Line Names (Thematic System)
All product lines are named after **airport/aviation experiences**, progressing from terminal to destination:

| Line Name | Gender | Fit Description | Price Point | Metaphor |
|---|---|---|---|---|
| **Terminal** | Men's | Relaxed Oversized Fit | $129 | The starting point — grounded, spacious |
| **Runway** | Men's | Slim Modern Fit | $139 | Sleek, forward-moving |
| **Departure** | Women's | Cropped Hoodie + High-Waist Jogger | $129 | Setting off — fresh, active |
| **First Class** | Women's | Oversized Luxury Fit | $139 | Ultimate luxury, arrived |

**Naming rules for new product lines:**
- Must be a single word or two-word aviation/travel term
- Must evoke a feeling or stage of travel, not a technical term
- Must work as both a noun and an adjective ("the Terminal set", "your First Class fit")
- Potential future names following this pattern: *Lounge*, *Boarding*, *Altitude*, *Layover*, *Transit*, *Concourse*, *Jetway*, *Arrival*, *Customs*, *Passport*, *Horizon*

### Color Names
Colors have evocative, fabric-industry names — not plain colors:

| Color Name | Hex (Swatch) | Key |
|---|---|---|
| Jet Black | `#1A1A1A` | `black` |
| Heather Grey | `#9CA3AF` | `grey` |
| Navy Blue | `#1E3A5F` | `navy` |
| Dusty Pink | `#D4A0A0` | `pink` |

**Color naming rules:**
- Two words: [Adjective] + [Base Color]
- The adjective should feel tactile or atmospheric: "Jet", "Heather", "Dusty"
- Potential future names: *Stone Beige*, *Midnight Olive*, *Cloud White*, *Slate Charcoal*, *Rust Terracotta*

### Size System
`XS`, `S`, `M`, `L`, `XL`, `XXL` — standard, uppercase, no periods.

### Order Number Format
```
AF-[YYMMDD]-[8-char-UUID-uppercase]
```
Example: `AF-250301-A4B2C1D8`

### Email Addresses (Domain Pattern)
- `support@airportfits.com` — general support
- `returns@airportfits.com` — returns
- `press@airportfits.com` — press inquiries
- `wholesale@airportfits.com` — wholesale
- `careers@airportfits.com` — careers
- `privacy@airportfits.com` — privacy
- `legal@airportfits.com` — legal

Pattern: `[department]@airportfits.com`

---

## 6. Color System

### Design Philosophy
The brand uses a **dark-first** design with an optional light theme. The dark theme is the default and the identity-defining mode. Gold is the single accent color — it carries all emphasis.

### Dark Theme (Primary / Default)
```css
--bg:            #0A0A0A    /* Near-black background */
--bg-card:       #111111    /* Card surfaces */
--bg-card-hover: #161616    /* Card hover state */
--bg-overlay:    rgba(10,10,10,0.92)  /* Header overlay */
--bg-elevated:   #0D0D0D    /* Elevated sections (story, quote) */
--bg-footer:     #050505    /* Footer — darkest surface */
--border:        rgba(255,255,255,0.07)   /* Subtle borders */
--border-light:  rgba(255,255,255,0.12)   /* Emphasized borders */
--cream:         #F5F0EB    /* Primary text — warm off-white */
--cream-dim:     #C8C0B5    /* Secondary text */
--muted:         #7A7570    /* Tertiary text, labels */
--gold:          #C9A96E    /* Primary accent — ALL emphasis */
--gold-light:    #E2C99A    /* Gold hover/highlight */
--gold-dark:     #A07C42    /* Gold subdued/scrollbar */
--error:         #E05858    /* Error states */
--success:       #5EBA8A    /* Success states */
```

### Light Theme (Secondary)
```css
--bg:            #F8F6F3    /* Warm paper-white */
--bg-card:       #FFFFFF    /* Pure white cards */
--bg-card-hover: #F0EDE8    /* Warm hover */
--bg-elevated:   #F0EDE8    /* Elevated sections */
--bg-footer:     #E8E4DE    /* Footer */
--cream:         #1A1612    /* Primary text — near-black, warm */
--cream-dim:     #4A4540    /* Secondary text */
--muted:         #8A857F    /* Tertiary text */
--gold:          #A07C42    /* Gold darkened for light bg */
--gold-light:    #8B6930    /* Hover gold — darker on light */
--gold-dark:     #7A5C2E    /* Deep gold */
```

### Color Usage Rules
| Element | Color Variable | Why |
|---|---|---|
| Headings, prices (large) | `--cream` | Maximum readability |
| Body text, descriptions | `--cream-dim` | Comfortable reading without harshness |
| Labels, metadata, captions | `--muted` | Quiet, de-emphasized |
| CTAs, accent, links, badge | `--gold` | Single point of emphasis |
| Italic words in headings | `--gold-light` | Subtle lift from surrounding text |
| Buttons primary bg | `--gold` → `--gold-light` on hover | Warm, inviting action |
| Borders & dividers | `--border` (7% white) | Nearly invisible structure |
| Error states | `--error` | Clear but not alarming |
| Success/confirmation | `--success` | Confident, understated green |

### The Gold Rule
**Gold (`#C9A96E`) is the only accent color.** There are no blues, greens, or reds used decoratively. The entire brand identity revolves around the contrast between warm neutrals (cream/black) and a single gold tone. When adapting this brand to a new product:
- Choose ONE accent color and use it everywhere gold appears
- Never introduce a second accent
- The accent appears on: CTAs, badges, swatches, price displays, links, icons (✦), line dividers, marquee backgrounds, scrollbar thumbs, radio accents, and italic headings

### Decorative Symbol
The brand uses `✦` (four-pointed star) as a decorative bullet/marker in gold. Always rendered in `var(--gold)` at approximately 1.5rem.

---

## 7. Typography System

### Font Stack
| Role | Font Family | Fallbacks | Weights Used |
|---|---|---|---|
| **Serif** (display/headings) | Cormorant Garamond | Georgia, serif | 300, 400, 500, 600, 700 + italics (300i, 400i, 500i) |
| **Sans-serif** (body/UI) | Outfit | Helvetica Neue, sans-serif | 200, 300, 400, 500, 600 |

### Font Loading
- Google Fonts with `preconnect` to `fonts.googleapis.com` and `fonts.gstatic.com`
- `display=swap` for font-display

### Type Scale
| Class | Size | Weight | Tracking | Use Case |
|---|---|---|---|---|
| `.display-xl` | `clamp(3.5rem, 10vw, 9rem)` | 300 | -0.03em | Hero numbers, brand-defining moments |
| `.display-lg` | `clamp(2.5rem, 6vw, 5.5rem)` | 300 | -0.02em | Page hero titles |
| `.display-md` | `clamp(1.8rem, 4vw, 3.2rem)` | 400 | -0.01em | Section headings |
| `.display-sm` | `clamp(1.4rem, 2.5vw, 2rem)` | 400 | — | Sub-section headings |
| `.label-xs` | 0.625rem | 500 | 0.2em | Tiny labels |
| `.label-sm` | 0.7rem | 500 | 0.18em | Section eyebrows, metadata |
| `.label-md` | 0.8rem | 500 | 0.15em | Medium labels |
| Body text | 0.85-0.95rem | 300 | 0.04em | Paragraphs |
| UI elements | 0.68-0.72rem | 500-600 | 0.12-0.22em | Buttons, nav, filters |

### Typography Rules
1. **All headings** use the serif font (Cormorant Garamond) with weight 300 or 400
2. **All labels and UI text** use the sans-serif font (Outfit) and are UPPERCASE with generous letter-spacing
3. **Italic serif** (`<em>`) is used in headings to highlight a single key word, always colored in `--gold-light`. Examples: "Land in *Style*", "Born in the *terminal*", "Born to *Fly*"
4. **Body text** is sans-serif, weight 300, line-height 1.6–2.0
5. **Prices** use serif font, weight 300-400, colored in `--gold`
6. **Product names** use serif font, weight 400, size ~1rem
7. **Navigation and buttons** are sans-serif, weight 500-600, 0.68-0.76rem, uppercase, tracking 0.12-0.22em

### Title Construction Pattern
Hero titles use line breaks (`<br>`) to create a stacked, editorial layout:
```html
<h1>Land in<br><em>Style</em></h1>
<h1>Born to<br><em>Fly</em></h1>
```
Pattern: [Two words] + line break + [italic single word in gold]

---

## 8. Visual Design Language

### Layout Philosophy
- **Maximum content width:** 1320px (`--max-w: 1320px`)
- **Gutters:** Fluid — `clamp(16px, 4vw, 48px)`
- **Grid system:** CSS Grid, not flexbox for page layouts. 1px gap with border-colored backgrounds to create "hairline" grid separators
- **Section padding:** Fluid — `clamp(60px, 8vh, 100px)` to `clamp(80px, 12vh, 140px)`

### Border & Divider Language
- Borders are nearly invisible: `rgba(255,255,255,0.07)` in dark mode
- **Gold line divider:** 40px wide, 1px tall, solid gold. Used as a decorative separator between eyebrow labels and headings. CSS class: `.gold-line`
- **Product dividers:** Full-width 1px lines in `--border` color between product detail sections
- Section separators use `border-top: 1px solid var(--border)` — never thick or colored borders

### Card Design
- No border-radius on cards (squared-off, editorial)
- Background: `--bg-card` → `--bg-card-hover` on hover
- Product images: `aspect-ratio: 3/4` (portrait orientation)
- Image backgrounds: `--img-card-bg` (#161616 dark, #F0EDE8 light)
- Images are dimmed: `filter: brightness(0.5)` in dark mode, `brightness(0.6)` in light — this creates a moodier, editorial look

### Badge Design
- Small rectangular badges (no border-radius)
- Gold background, dark text
- Font: 0.58-0.65rem, weight 600, uppercase, letter-spacing 0.18-0.2em
- Positioned: `top: 12px; left: 12px` (product cards) or `bottom: 24px; left: 24px` (story image)
- Text: "Men", "Women", or "Designed in Dubai"

### Scrollbar
- 4px wide
- Track: `--bg`
- Thumb: `--gold-dark` with 2px border-radius

### Spacing Conventions
- Use `clamp()` for all vertical spacing
- Margin between eyebrow label and heading: 0.75rem
- Margin between heading and body text: 1.5rem
- Section padding: always using vh-based clamp
- Component internal padding: 14-32px

---

## 9. UI Component Patterns

### Buttons — Three Tiers
| Tier | Class | Background | Border | Text Color | Use |
|---|---|---|---|---|---|
| **Primary** | `.btn-primary` | Gold | Gold | Dark bg | Main CTAs ("Shop the Collection", "Add to Bag") |
| **Secondary** | `.btn-secondary` | Transparent | White 12% | Cream | Supporting actions ("View Bag", "← Back") |
| **Ghost** | `.btn-ghost` | Transparent | Gold | Gold (fills gold on hover) | Tertiary ("View All", "Read Our Story") |

Button text: Always uppercase, 0.64-0.76rem, weight 600, letter-spacing 0.2em.
Sizes: `.btn-sm` (9px 20px), default (14px 32px), `.btn-lg` (18px 48px).
CTA arrows: "→" appended to forward-moving CTAs, "←" prepended to back CTAs.

### Add to Bag Button
Special standalone button class `.btn-atb`:
- Full-width, 17px vertical padding
- Gold background, dark text
- 0.72rem, weight 600, letter-spacing 0.22em, uppercase
- Active state: `transform: scale(0.99)` — micro-shrink feedback

### Navigation
- Fixed header, height 72px desktop / 60px mobile
- Scrolled state: frosted glass (`backdrop-filter: blur(20px)`) + `--bg-overlay` background
- Logo: serif, 1.5rem, weight 500, tracking 0.08em
- Nav links: sans-serif, 0.72rem, weight 500, uppercase, tracking 0.15em
- Active/hover: gold underline (1px) animates in from left (`transform: scaleX(0)` → `scaleX(1)`)
- "Bag" (not "Cart") with gold circular badge showing count

### Mobile Menu
- Full-screen overlay, slide down from top
- Links: serif, 2.5rem, weight 300
- Tagline at bottom: "Land in Style" — sans-serif, 0.7rem, uppercase, tracking 0.2em, muted color

### Forms
- Inputs: transparent background, 1px border, 12-14px padding
- Focus: border turns gold
- Labels: 0.62rem, uppercase, tracking 0.15em, muted color
- Validation: red border + small error message below
- Select dropdowns: custom gold chevron arrow SVG

### Toast Notifications
- Bottom-right positioning
- Dark card background with frosted glass
- 3px gold left border
- Gold icon (✓ for success, ⚠ for warning)
- Slide in from right, auto-dismiss after ~3s

### Accordion
- Used for product details: "Description", "Materials & Care", "Shipping & Returns"
- Plus/minus icon: two CSS pseudo-elements forming a cross, minus rotates away on open
- Header: 0.72rem, uppercase, tracking 0.15em
- Body: 0.85rem, line-height 1.8, cream-dim color

### Modal (Size Guide)
- Full-screen overlay with `rgba(0,0,0,0.85)` + `backdrop-filter: blur(8px)`
- Modal: card background, 1px border, max-width 720px, slides up 20px on open
- Tab navigation: gold underline for active tab
- Table: full-width, clean, minimal borders

### Section Eyebrow Pattern
Almost every section uses this pattern:
```html
<p class="label-sm" style="color:var(--gold);">Label Text</p>
<h2 class="display-md">Section Heading</h2>
```
The gold uppercase label sits above the serif heading with ~0.75rem margin.

---

## 10. Interaction & Motion Language

### Transition Defaults
```css
--ease-out:     cubic-bezier(0.16, 1, 0.3, 1);   /* Springy ease-out for entrances */
--ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1);     /* Smooth ease-in-out for toggles */
--transition:   0.3s var(--ease-in-out);            /* Default transition shorthand */
```

### Animation Types
| Animation | Duration | Easing | Use |
|---|---|---|---|
| **Page fade-in** | 0.5s | ease-out | Page route transitions |
| **Scroll reveal (fade-up)** | 0.7s | ease-out | Section content appearing |
| **Hero zoom** | 12s | ease-out | Background image Ken Burns |
| **Marquee scroll** | 20s | linear | Infinite text marquee |
| **Scroll pulse** | 2s | ease-in-out | Scroll hint indicator |
| **Shimmer (skeleton)** | 1.5s | infinite | Loading placeholder |
| **Toast in/out** | 0.4s in, 0.4s out after 2.8s | ease-out | Notification toast |
| **Zoom in** | 0.6s | ease-out | Order confirmation icon |
| **Shake** | 0.4s | ease | Validation error (size selector) |

### Scroll Reveal System
- Elements with class `fade-up` start with `opacity: 0; transform: translateY(30px)`
- IntersectionObserver triggers `.visible` class at 12% threshold, -40px root margin
- Staggered delays: `.delay-1` (0.1s) through `.delay-5` (0.5s)

### Hover Behaviors
- **Product images:** `transform: scale(1.05)` over 0.7s
- **Story image:** `transform: scale(1.03)` over 0.8s
- **Category images:** `transform: scale(1.04)` over 0.7s
- **Nav links:** gold underline scales in from left
- **Buttons:** background color shift, no transform
- **Theme toggle icon:** `rotate(30deg)` on hover

### Theme Transition
All elements (except hero/about images) transition `background-color, color, border-color, box-shadow` over 0.35s on theme change.

---

## 11. Photography & Imagery

### Image Approach
- **Product photography:** Flat-lay or model-worn sets against neutral backgrounds
- **Hero/brand photography:** Airport terminal environments, travel scenes
- **All images are dimmed** via CSS `filter: brightness()` — 0.5 in dark theme, 0.6 in light theme — creating a moody, editorial look where the UI text sits on top cleanly

### Image Aspect Ratios
| Context | Ratio |
|---|---|
| Product cards | 3:4 (portrait) |
| Hero banner | Full viewport height (100vh) |
| Story/about image | 3:4 (portrait) |
| About hero | 65vh height |
| Category grid | 4:3 (landscape) |
| Cart thumbnails | 3:4 |
| Gallery thumbnails | 1:1 (48×48px) |

### Asset Naming Convention
```
hero-[subject].png
product-[color]-set.png
favicon.jpg
```
Examples: `hero-airport.png`, `product-black-set.png`, `product-pink-set.png`

---

## 12. Brand Values & Personality

### Core Values (as stated on the About page)

1. **Crafted with Intent** — "Every seam, every stitch is placed with purpose."
2. **Designed for Movement** — "Four fit profiles to suit every body type."
3. **Consistent Colour** — "Hoodie and jogger cut from the same fabric batch."
4. **Built to Last** — "Reinforced seams, heavy-duty drawcords, and premium hardware."

### Material Identity
The brand's material identity is a core differentiator:
- **320 GSM premium cotton** — this number appears everywhere as a proof point
- **100% cotton** — not blended
- **Pre-shrunk** — maintains shape
- **Brushed fleece inner lining** — comfort detail
- **Colour-fast** — won't fade
- **Cut from the same fabric batch** — hoodie and jogger match perfectly

### Brand Archetypes
- **The Explorer** — travel, journey, discovery
- **The Ruler** — premium, refined, first-class
- **The Creator** — intentional design, craft

### Key Emotional Triggers
- The frustration of looking bad while traveling
- The confidence of arriving looking put-together
- The comfort of premium fabric during long journeys
- The aspiration of "first class" lifestyle accessibility

---

## 13. Audience & Positioning

### Target Audience
As stated in the About page:
- **Globe-trotters** — frequent international travelers
- **Digital nomads** — location-independent professionals
- **Weekend warriors** — casual travelers who care about appearance
- "Anyone who believes the journey is as important as the destination"

### Price Positioning
- **$129–$139** per two-piece set — accessible luxury (not cheap, not prohibitive)
- **Free shipping** threshold: $200 (encourages 2-set purchases)
- Standard shipping: $8, Express: $15
- 30-day free returns on unworn items

### Geographic Positioning
- Designed in Dubai (stated in footer, origin badge, about page)
- Ships worldwide (UAE, US, UK, Canada, Australia, Germany, France, Japan, Singapore, Ghana, Nigeria, South Africa, Kenya, Saudi Arabia, Qatar)
- British English spelling (international positioning)

### Competitive Frame
The brand positions between:
- **Above:** Generic athleisure (Nike, Adidas basics)
- **Below:** High fashion houses (Loewe, Fear of God Essentials)
- **Alongside:** Premium direct-to-consumer fashion (Pangaia, Represent, Aimé Leon Dore)

### Social Channels
- Instagram (primary)
- TikTok (secondary)
- Twitter (tertiary)

---

## 14. Prompt Template for New Products

Use the following prompt template when asking Claude to create a new product with the same branding:

```
You are building a [product type] e-commerce site for the brand AirportFits.

BRAND IDENTITY:
- Brand name uses PascalCase with no space. Logo splits into two parts: "Airport" (primary text color) + "Fits" (gold accent)
- Primary tagline: "Land in Style"
- Voice: Confident, editorial, modern-classic. Concise sentences. Never urgent or shouty.
- British English spelling (traveller, colour)

COLOR SYSTEM:
- Dark-first design. Single accent color: gold (#C9A96E)
- Background: near-black (#0A0A0A), Text: warm cream (#F5F0EB), Accent: gold (#C9A96E)
- No second accent color. Gold carries ALL emphasis.
- Light theme available: warm paper-white (#F8F6F3), near-black text (#1A1612), darker gold (#A07C42)

TYPOGRAPHY:
- Serif for headings: Cormorant Garamond (weight 300-400, negative tracking)
- Sans-serif for body/UI: Outfit (weight 200-600, generous tracking on uppercase elements)
- All labels/buttons/nav: uppercase, 0.68-0.72rem, letter-spacing 0.12-0.22em
- Italic serif words in headings highlighted in gold-light

UI PATTERNS:
- Three-tier buttons: Primary (gold bg), Secondary (transparent + border), Ghost (gold outline)
- Product images: 3:4 aspect ratio, dimmed with filter:brightness(0.5)
- Section eyebrow pattern: gold uppercase label above serif heading
- Gold line divider (40px × 1px) as decorative separator
- ✦ symbol for decorative bullets
- Toast notifications with gold left border
- Cards: no border-radius, squared-off editorial look

NAMING:
- Product lines named after aviation/travel terms: Terminal, Runway, Departure, First Class
- Colors: two-word names with tactile/atmospheric adjective: Jet Black, Heather Grey, Navy Blue, Dusty Pink
- "Bag" not "Cart". "Shop the Collection" not "Browse Products".

MOTION:
- Scroll-triggered fade-up reveals (0.7s, ease-out, staggered delays)
- Hero Ken Burns zoom (12s)
- Springy ease-out: cubic-bezier(0.16, 1, 0.3, 1)
- Subtle image scale on hover (1.03-1.05)

COPY STYLE:
- Em dashes for asides and separators
- Middle dots (·) for inline separators
- Arrows in CTAs: → forward, ← back
- Stats presented as large serif numbers with small uppercase labels below
- "Designed in Dubai" origin badge
```

---

## Appendix: Quick Reference — Brand Language Glossary

| Term Used | Instead Of | Context |
|---|---|---|
| Bag | Cart, Basket | Shopping bag |
| The Collection | Products, Catalog | Shop page |
| Pieces | Items, Products | Featured section |
| Sets | Outfits, Kits | Product category |
| Drop | Launch, Release | New collection |
| Land in Style | — | Primary tagline |
| Modern traveller | Customer, User | Audience reference |
| Engineered | Made, Designed | Product creation |
| Signature | Standard, Regular | Material reference |
| Journey | Trip, Travel | Brand metaphor |

---

*This document was generated from a full analysis of the AirportFits codebase: [index.html](index.html), [style.css](style.css), [app.js](app.js), and [cgi-bin/api.py](cgi-bin/api.py). Last updated: March 2026.*
