# Development Rules & Constraints

## 1. The Prime Directive
- **UX is the Cake, Animation is the Icing:** Information architecture, typography, spacing, accessibility, state management, responsiveness, and performance take precedence over flashy effects.

## 2. The Approved Aesthetics (✅)
- **Neutral Colors:** Rely on whites, blacks, and grays for UI. Let the data and 3D scenes provide color.
- **Beautiful Typography:** Use clear, modern fonts (Geist/Inter).
- **Premium Feeling:** High-quality shadows, precise borders.
- **Flawless Themes:** Equal attention to Dark and Light mode.
- **Subtle Animations:** Easing curves should be consistent and gentle.
- **Professionalism:** Think Apple, Stripe, Linear, Vercel, Notion, Figma.

## 3. The Anti-Patterns (❌)
- **No Neon Gradients or Purple Everywhere.** Do not default to "space equals purple neon".
- **No Overused Glassmorphism.** Use strictly for main navigation bars or command palettes. NOT on every card.
- **No Floating Slop.** Elements must have a grounded purpose.
- **No Continuous Infinite Animations.** Stop animations that loop every 2 seconds.
- **No Mobile Custom Cursors.**
- **No 3D Tilt on Everything.** Keep card tilts extremely rare and subtle.
- **No Heavy Blur Filters.** They degrade performance.
- **No Easing Soup.** Standardize on one or two physical spring curves. Do not use 15 different easing functions.
- **No Oversized Glowing Buttons.**
- **No Random Particle Explosions.** Avoid unoptimized, purely decorative VFX.
- **No Scroll Hijacking.** Use Lenis to respect native scrolling behavior.
- **No Giant Hero Videos.** Rely on optimized WebGL.

## 4. Technical Standards
- **Modern Stack:** Use Next.js App Router, Tailwind v4, and OKLCH colors.
- **Performance:** Ensure 60fps. Optimize all React Three Fiber scenes with InstancedMeshes and procedural shaders where possible.
- **The Portfolio Rule:** Every commit should represent "Industry and Production Standard." If it looks like a cheap crypto landing page, rewrite it.
