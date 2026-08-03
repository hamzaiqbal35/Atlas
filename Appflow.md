# Application Flow & User Journey

## 1. The Entry (The Macro Cosmos)
- **Initial State:** Huge black background (or crisp white in light mode), soft lighting, very subtle moving stars.
- **Action:** User scrolls down or types into the Command Palette (Cmd+K).
- **Reaction:** The scroll acts as an interactive documentary timeline, but the universe is vast. The user can start at the Solar System, but can immediately zoom out to the Cosmic Web or zoom in to Fundamental Particles.

## 2. Interactive Knowledge Graph Traversal
- **State:** The user stops scrolling and interacts with the 3D canvas or reads an info panel.
- **Action:** User clicks on a linked entity (e.g., while reading about 'Saturn', they click a link to 'Orbital Resonance').
- **Reaction:** 
  - Smooth camera flight (GSAP/Three.js) interpolates the view to the abstract or physical representation of that concept.
  - Context-aware floating UI gently emerges with the new data.
  - The traversal feels like flying through a network of nodes, moving seamlessly from physical bodies (Planets) to theoretical concepts (Astrophysics).

## 3. The Observatory (Dashboard Mode)
- **State:** User toggles the "Observatory" view from the floating navigation.
- **Action:** The 3D view blurs softly into the background.
- **Reaction:** A premium, dense-but-clean dashboard overlay appears. Typography is stark, legible, and data-focused. Contains modules for live space weather, mission telemetry, and astronomical events.

## 4. Universal Search (The Command Center)
- **Navigation:** Mini-map always accessible in the corner to show current scale/location.
- **Search:** Cmd/Ctrl+K opens a sleek command palette (Raycast style). Because the taxonomy spans 40 categories (from Quarks to Superclusters), the search is the primary way power users will navigate.
- **Categorization:** Search results are instantly grouped by taxonomy (e.g., `Stars`, `Missions`, `Physics`).

## 5. Micro-Interactions & Restraint
- Hover states apply subtle parallax on UI cards.
- Transitions between macro scales (Galaxies) and micro scales (Atoms) are handled through elegant scaling animations without jarring cuts.
- Adherence to the Design System: no endless looping animations during reading phases to maintain focus.
