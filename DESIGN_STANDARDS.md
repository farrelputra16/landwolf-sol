# Landwolf Robinhood — Design Standards

## Brand Identity

### Name
Landwolf (Robinhood Chain)

### Tagline
Half man, half wolf. All party.

### Character Tone
Rebellious, confident, playful, degenerate — a Matt Furie creation.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--wolf-green` | `#4ade80` | Primary accent, CTAs, highlights |
| `--wolf-green-dark` | `#16a34a` | Hover states, secondary accents |
| `--wolf-amber` | `#f59e0b` | Secondary accent, tokenomics highlights |
| `--bg-dark` | `#0a0a0a` | Page background |
| `--bg-card` | `#1a1a1a` | Card/section backgrounds |
| `--bg-card-hover` | `#242424` | Card hover state |
| `--text-primary` | `#ffffff` | Headings, primary text |
| `--text-secondary` | `#a3a3a3` | Body text, muted elements |
| `--border` | `#2a2a2a` | Borders, dividers |
| `--wolf-red` | `#ef4444` | Wolf eyes, danger/alert |
| `--wolf-purple` | `#a855f7` | Accent variant |

### Typography

- **Primary Font**: `"Bebas Neue"` — headlines, hero titles, section headers
- **Body Font**: `"Inter"` — body copy, descriptions, UI text
- **Monospace Font**: `"JetBrains Mono"` — contract addresses, code snippets

### Font Hierarchy

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Hero Title | Bebas Neue | clamp(3rem, 8vw, 8rem) | 400 |
| Section Title | Bebas Neue | clamp(2rem, 5vw, 4rem) | 400 |
| Subheading | Inter | 1.25rem | 600 |
| Body | Inter | 1rem | 400 |
| Small/Label | Inter | 0.875rem | 500 |
| Contract Address | JetBrains Mono | 0.8rem | 400 |

### Spacing System
Base unit: 4px. Use multiples of 4 (4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128).

### Border Radius
- Buttons: `9999px` (fully rounded)
- Cards: `16px`
- Inputs: `12px`

### Animation
- Transitions: `0.2s ease` for micro-interactions
- Hover scale: `1.02` for buttons, `1.05` for cards
- Scroll reveal: `translateY(30px)` to `translateY(0)` with `0.6s ease`
- Parallax speed: 0.5 (half the scroll speed) for decorative layers

---

## Section Layout Reference

### Hero
- Full-screen video background (`bg1.mp4`)
- Overlay gradient: `rgba(0,0,0,0.6)` at center, fading to `rgba(0,0,0,0.8)` at edges
- Centered content: logo/title, tagline, CTA buttons
- Social links row below CTAs
- Contract address pill at bottom

### About
- Two-column layout (text left, image right)
- Description of Landwolf character + origins (Matt Furie's Boy's Club)
- Decorative elements (leaves, paw prints)

### How to Buy
- Step cards (4 steps max) in a grid
- Steps: Install Wallet → Fund with RH → Buy on Swap → HODL
- Exchange listing logos strip
- CTA to swap tool

### Tokenomics
- Stats grid: Total Supply, Taxes, LP, Contract
- Visual: chart or illustration

### Gallery
- Masonry/collage grid of character images
- Lightbox on click

### Community / Join
- Telegram, Twitter links
- Newsletter or scroll ticker
- "Buy Now" CTA

### Footer
- Links, socials, contract address
- Copyright + credits

---

## Image Asset Mapping

| Asset | Usage |
|-------|-------|
| `img/bg1.mp4` | Hero full-screen background video |
| `img/2.jpg` | About section / character showcase |
| `img/3.jpg` | Gallery / hero decorative element |

---

## Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| 768px | Tablet |
| 480px | Mobile |
| 1024px+ | Desktop |

On mobile: stack sections vertically, reduce font sizes by 20%, hide decorative elements.

---

## Robinhood Chain Specifics

- Network: Robinhood Chain (EVM-compatible)
- Explorer: https://explorer.robinhood.com
- DEX: RH swap integration
- CA: deploy-specific address
