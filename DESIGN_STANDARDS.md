# Landwolf Robinhood — Design Standards

## Brand Identity

### Name
Landwolf (Robinhood Chain)

### Tagline
Half man, half wolf. All party.

### Character Tone
Rebellious, confident, playful, degenerate — a Matt Furie creation.

### Logo
Geometric wolf head SVG with green-to-amber gradient. Used inline in `SvgLogo.tsx` — no external images. Automatically scales via `size` prop.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--wolf-green` | `#4ade80` | Primary accent, CTAs, highlights |
| `--wolf-green-dark` | `#16a34a` | Hover states, gradient end |
| `--wolf-green-glow` | `rgba(74,222,128,0.25)` | Glow effects |
| `--wolf-amber` | `#f59e0b` | Secondary accent, tokenomics |
| `--bg-dark` | `#0a0a0a` | Page background |
| `--bg-card` | `#111111` | Card backgrounds |
| `--bg-card-hover` | `#1a1a1a` | Card hover state |
| `--text-primary` | `#ffffff` | Headings |
| `--text-secondary` | `#8a8a8a` | Body text |
| `--border` | `#1a1a1a` | Borders |
| `--wolf-purple` | `#a855f7` | Ambient orb accent |

### Typography

- **Primary Font**: `"Bebas Neue"` — headlines, hero titles, section headers
- **Body Font**: `"Inter"` — body copy, descriptions, UI text
- **Monospace Font**: `"JetBrains Mono"` — contract addresses, code snippets

### Font Hierarchy

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Hero Title | Bebas Neue | clamp(4.5rem, 14vw, 11rem) | 400 |
| Section Title | Bebas Neue | clamp(2.5rem, 6vw, 4.5rem) | 400 |
| Subheading | Inter | 1.25rem | 600 |
| Body | Inter | 1rem | 400 |
| Small/Label | Inter | 0.875rem | 500 |
| Contract Address | JetBrains Mono | 0.7rem | 400 |

### Spacing System
Base unit: 4px. Use multiples of 4 (4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128).

### Border Radius
- Buttons: `9999px` (fully rounded)
- Cards: `16px`
- Gallery items: `14px`
- Modal: `24px`

### Animation
- Transitions: `0.2s ease` for micro-interactions
- Button hover: `scale(1.05)` with glow
- Card hover: `translateY(-6px to -8px)` with top border gradient
- Scroll reveal: `translateY(30px)` to `translateY(0)` with `0.7s ease`
- Hero title glow: `drop-shadow` animation, 4s infinite alternate
- Background orbs: floating with 20s cycle
- Particle float: 4-12s duration per particle

---

## Section Layout Reference

### Hero
- Full-screen video background (`bg1.mp4`)
- SVG wolf logo (80px) centered above title
- H1 with animated drop-shadow glow
- Overlay gradient + particle effects
- CTA buttons → opens BuyModal
- Social links row
- Contract address pill (shows placeholder until launch)

### About
- Two-column (text left, image right)
- Description of Landwolf character + origins
- Uses `photo_6244586014496199191_y.jpg`
- Gradient text heading

### How to Buy
- 4 step cards with hover glow top-border
- Step numbers with box-shadow glow
- Steps: Wallet → Fund → Swap → HODL

### Phantom Buy (new section)
- Two-column: instructions + phone mockup
- Connect Phantom wallet via `window.phantom?.solana`
- Shows wallet address + "Buy" when connected
- Prompts install if Phantom not detected

### Tokenomics
- 4 stat cards with hover effects
- Gradient text values
- Contract address shows `TBD...TBD` placeholder
- "Will be announced at launch 🚀" message

### Gallery
- 9 images using all available assets
- 3-column masonry grid with hover zoom
- Lightbox on click with backdrop blur

### Community
- Centered CTA section
- Telegram / Twitter / Buy buttons
- Infinite scrolling ticker

### Footer
- Links, tools, community columns
- Contract address display
- Social icons

---

## Contract Address Management

All CA references use `src/lib/config.ts`:

```ts
export const CONFIG = {
  contractAddress: "TBD",       // ← Replace at launch
  contractDisplay: "TBD...TBD",  // Auto-formatted
  explorerUrl: "#",
  chainName: "Robinhood Chain",
  tokenSymbol: "$WOLF",
  // ...
}
```

**At launch**: Edit only `src/lib/config.ts` — set the real CA and explorer URL. Every page/component reads from this single source.

---

## Image Assets

| File | Dimensions | Usage |
|------|-----------|-------|
| `bg1.mp4` | — | Hero full-screen background video |
| `2.jpg` | 1280×720 | Gallery |
| `3.jpg` | 1055×1280 | Gallery |
| `photo_5093933579766533326_y.jpg` | 1024×1024 | Gallery |
| `photo_6244586014496199191_y.jpg` | 1206×1206 | About section, Hero poster, Gallery |
| `photo_6244586014496199194_y.jpg` | 1060×1280 | Gallery (tall) |
| `photo_6244586014496199196_y.jpg` | 1024×1024 | Gallery |
| `photo_6244586014496199203_y.jpg` | 928×1120 | Gallery |

---

## Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| 768px | Mobile |
| 1024px | Tablet |
| 1024px+ | Desktop |

On mobile: stack sections, reduce font sizes, hide decorative elements, collapse nav into hamburger.

---

## Components

| Component | File | Type |
|-----------|------|------|
| Nav | `src/components/Nav.tsx` | Client |
| Hero | `src/components/Hero.tsx` | Client |
| About | `src/components/About.tsx` | Server |
| HowToBuy | `src/components/HowToBuy.tsx` | Server |
| PhantomBuy | `src/components/PhantomBuy.tsx` | Client |
| Tokenomics | `src/components/Tokenomics.tsx` | Server |
| Gallery | `src/components/Gallery.tsx` | Client |
| Community | `src/components/Community.tsx` | Server |
| Footer | `src/components/Footer.tsx` | Server |
| BuyModal | `src/components/BuyModal.tsx` | Client |
| SvgLogo | `src/components/SvgLogo.tsx` | Server |
| AmbientOrbs | `src/components/AmbientOrbs.tsx` | Server |
| ScrollReveal | `src/components/ScrollReveal.tsx` | Client |
| ScrollProgress | `src/components/ScrollProgress.tsx` | Client |

---

## Robinhood Chain Specifics

- Network: Robinhood Chain (EVM-compatible)
- Explorer: set in `config.ts`
- Wallet: Phantom (Solana & EVM support)
- CA: set in `config.ts` at launch
