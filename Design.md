# Design System & Aesthetics

## 1. Core Philosophy: UX is the Cake, Animation is the Icing
- **Information Architecture:** Must be flawless before any animation is applied.
- **Typography & Spacing:** Generous whitespace, consistent systems, and extreme clarity.
- **Restraint:** Do not add effects just because they are trendy. State management, responsiveness, and performance are the priorities.

## 2. Inspiration & Vibe
- **Think:** Apple, Stripe, Linear, Vercel, React Bits, Raycast, Notion, Figma.
- **Do Not Think:** Crypto landing pages, AI startup templates, Themeforest demos.
- **Vibe:** Classy, beautiful, professional, practical, and highly polished.

## 3. The "Dos" (Approved Principles)
- ✅ **Neutral colors:** Rely heavily on whites, blacks, and subtle grays for UI. Let the 3D content and specific astronomical data provide the color accents.
- ✅ **Beautiful typography:** Use `Geist` (or `Inter`) for extreme clarity, modern feel, and beautiful numeric rendering (crucial for data/dashboards).
- ✅ **Premium feeling:** High-quality shadows (light mode), precise borders, and elegant layout structures.
- ✅ **Dark and light mode:** Flawless dual themes defined using CSS variables in OKLCH.
- ✅ **Interactive:** Highly responsive to user input, but in a predictable way.
- ✅ **Subtle animations:** Use customized spring curves for easing. Motion should feel physical and gentle.
- ✅ **Professional:** Data-focused, legible, and authoritative.

## 4. The "Don'ts" (Anti-Patterns)
- ❌ **Neon gradients:** Avoid at all costs.
- ❌ **Purple everywhere:** Do not default to "space equals purple neon".
- ❌ **Glassmorphism on every card:** Use strictly for main navigation or command palettes where depth is functionally required. NOT on every card.
- ❌ **Everything floating aimlessly:** Elements must have a grounded purpose.
- ❌ **Animations every 2 seconds:** Avoid continuous infinite animations that distract the user.
- ❌ **Custom cursor on mobile:** Never use. Desktop custom cursors must be minimal and purposeful.
- ❌ **3D tilt on every card:** Limit to specific hero elements or highly interactive data cards (max 5-10 degrees).
- ❌ **Heavy blur everywhere:** Degrades performance and legibility.
- ❌ **15 different easing curves:** Standardize your motion system.
- ❌ **Oversized glowing buttons:** Keep UI elements constrained and elegant.
- ❌ **Random particle explosions:** Avoid unoptimized, purely decorative effects that clutter the view.
- ❌ **Scroll hijacking that fights the user:** Use Lenis for native-feeling smooth scroll.
- ❌ **Giant hero videos that hurt performance:** Rely on optimized 3D scenes or high-quality static assets.

## 5. Color Palette (OKLCH)
Colors are defined using CSS variables in OKLCH for smooth interpolation and perfect light/dark mode mirroring.

- **Dark Mode (Default):**
  - Background: Deep void black.
  - Surface (Cards): Extremely subtle off-black with 1px border.
  - Text: Pristine white, muted grays for secondary info.
  - Accents: Desaturated, elegant colors derived from physical bodies (e.g., muted rust for Mars).
- **Light Mode:**
  - Background: Crisp, stark white.
  - Surface: Very light gray/white with soft, high-quality drop shadows.
  - Text: Deep charcoal/black.
