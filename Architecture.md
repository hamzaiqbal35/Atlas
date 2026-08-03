# Technical Architecture

## 1. Core Stack
- **Framework:** Next.js (App Router) for routing, layouts, and server-side optimization.
- **Language:** TypeScript for strict type safety across complex 3D objects and the vast knowledge graph.
- **Styling:** Tailwind CSS v4, utilizing CSS Variables mapped to the OKLCH color space for perfect light/dark mode parity.

## 2. Data Architecture: The Knowledge Graph
Instead of a flat data structure, the encyclopedia is modeled as a massive local Knowledge Graph encompassing 40 taxonomy domains.
Data can be served via static JSON or MDX, but structured relationally:

```text
Universe
│
├── Physics & Spacetime
├── Cosmology
├── Galaxies (Clusters, Superclusters)
├── Stars (Evolution, Types, Remnants)
├── Black Holes & High-Energy Objects
├── Planets (Exoplanets, Moons, Rings)
├── Small Bodies (Asteroids, Comets, TNOs)
├── Interstellar/Intergalactic Medium
├── Radiation & Phenomena
├── Space Weather & Catastrophic Events
├── Human Spaceflight & Missions
└── Space Technology & Astronomy Fields
```
This graph allows the UI to render relational links organically (e.g., viewing an Exoplanet will link to Habitability concepts and orbital mechanics).

## 3. Rendering & 3D
- **Engine:** Three.js via React Three Fiber (R3F).
- **Helpers:** Drei (camera controls, shaders, text 3D, environment lighting).
- **Optimization:** Heavy use of `InstancedMesh` (e.g., 40,000 stones for Saturn's rings), custom procedural shaders (to avoid large texture maps), and level of detail (LOD) handling. Performance must remain strictly at 60fps.

## 4. Animation & Motion
- **Scroll:** Lenis for smooth scrolling that respects native browser mechanics (NO scroll hijacking that fights the user).
- **Timelines:** GSAP + ScrollTrigger for complex camera pathing.
- **UI Transitions:** Motion (formerly Framer Motion) for elegant, physical easing curves. Strict limitation on the number of varying easing curves used across the app.

## 5. State Management
- **Global State:** Zustand.
  - `useCameraStore`: Manages 3D camera targets, transitions, and FOV.
  - `useUIStore`: Manages active overlays, search states, and themes.
  - `useDataStore`: Manages the active node in the Knowledge Graph and its relations.
