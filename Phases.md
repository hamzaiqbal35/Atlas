# Implementation Phases

## Phase 1: Foundation & Strict Design System
- Initialize Next.js, Tailwind v4, TypeScript.
- Set up CSS variables for OKLCH color system and flawless Light/Dark mode mapping.
- Configure primary typography (`Geist`/`Inter`) and lock in spacing scales.
- Ensure strict adherence to the neutral, premium aesthetic (Apple/Linear vibe).

## Phase 2: Knowledge Graph Architecture
- Define TypeScript interfaces for all 40 taxonomy domains (Universe to Space Technology).
- Create the static JSON/MDX relational database to act as the graph.
- Build the `useDataStore` (Zustand) to traverse nodes.

## Phase 3: The 3D Engine (The Canvas)
- Set up React Three Fiber and Drei.
- Implement highly optimized procedural planets, instanced asteroid belts, and particle systems.
- Build the camera interpolation system ensuring 60fps performance without giant textures.

## Phase 4: Scroll Storytelling & Motion
- Integrate Lenis for non-hijacked, native-feeling smooth scrolling.
- Map scroll position to the 3D camera path through the Solar System.
- Integrate Motion (Framer Motion) for UI elements, ensuring single, unified spring curves and avoiding continuous loops.

## Phase 5: The Command Center & Navigation
- Build the Cmd+K Universal Search palette to search across all 40 taxonomy nodes instantly.
- Implement floating UI cards that emerge gently.
- Build the Observatory dashboard overlay with strict, data-dense typographic layouts.

## Phase 6: Restraint, Polish, & Accessibility (The Cake)
- Audit all animations. Remove unnecessary glassmorphism, heavy blurs, neon gradients, and 3D tilts that distract from the data.
- Ensure accessibility standards (contrast, keyboard navigation).
- Finalize production performance auditing.
