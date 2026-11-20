# Atlas

Interactive 3D solar system simulation and multi-scale scientific knowledge base.

[Live Demo](https://atlas-rho-tan.vercel.app/) &middot; [Architecture](#architecture--tech-stack) &middot; [Getting Started](#getting-started)

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r185-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-gray?style=flat-square)](LICENSE)

---

## Overview

Atlas is a WebGL-based planetary exploration application and structured scientific encyclopedia. Built with Next.js 16, React Three Fiber, and Three.js, it bridges real-time graphics simulation with academic literature across 40 scientific domains.

Users can navigate an interactive, mathematically mapped solar system, inspect real-time telemetry for planetary bodies, explore an embedded periodic table of elements, and read technical MDX articles featuring embedded 3D models and live academic papers from arXiv and CrossRef.

---

## Core Capabilities

### Real-Time 3D Simulation
* **Solar Corona & Prominences**: Multi-octave simplex noise vertex and fragment shaders simulating convective plasma turbulence and limb darkening.
* **Atmospheric Storm Bands**: Custom GLSL UV-displacement shaders modeling differential rotational speeds across Jupiter's cloud belts.
* **Planetary Ring Mapping**: Custom UV projection mapping to render Saturn's rings with accurate transparency and radial geometry.
* **Instanced Asteroid Belt**: 8,000 procedural rock bodies simulated in a single draw call via `THREE.InstancedMesh` to maintain a steady 60 FPS on desktop browsers.

### Camera Pathing & Telemetry
* **Scroll-Linked Flythrough**: Orbital camera rig driven by Lenis smooth scrolling and GSAP timelines, translating scroll position into celestial flybys from the Sun to the outer planets.
* **Spatial Telemetry**: Live readout overlays displaying distance, orbital velocity, and position coordinates synchronized to the viewport.

### Scientific Taxonomy & Knowledge Base
* **40 Disciplinary Domains**: Comprehensive curriculum covering particle physics, quantum mechanics, general relativity, stellar evolution, and deep-space cosmology.
* **Telemetry Dashboards (`/body/[id]`)**: Detailed physical and orbital telemetry (semimajor axis, eccentricity, bulk density, surface gravity, escape velocity, and axial tilt) integrated with the *Le Système Solaire* API.
* **Live Scholarly Research**: Automatic indexing of peer-reviewed preprints and research papers via the CrossRef and arXiv REST APIs.
* **LaTeX Mathematics**: Precise rendering of formulas and derivations via KaTeX (`remark-math` and `rehype-katex`).
* **Interactive Periodic Table**: Full 118-element periodic grid with categorization by block, electron shell configurations, and elemental properties.

### Navigation & Discovery
* **Command Palette**: Raycast-style global search (`Cmd+K` / `Ctrl+K`) powered by `cmdk` for indexing planets, taxonomy domains, and research topics.

---

## Architecture & Tech Stack

| Layer | Technology | Usage |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Server components, routing, and Turbopack bundler |
| **UI Library** | React 19 | Concurrency and component lifecycle |
| **Language** | TypeScript 5 | Strict static typing and interface definitions |
| **Graphics** | Three.js & React Three Fiber | WebGL scene management and rendering loop |
| **3D Ecosystem** | `@react-three/drei` & OGL | Camera helpers, texture pipelines, and WebGL primitives |
| **Styling** | Tailwind CSS | Utility-first styling with typography and animation plugins |
| **Motion & Scroll** | GSAP & Lenis | Timeline orchestration and smooth scroll normalization |
| **Content** | `next-mdx-remote` & `gray-matter` | Dynamic MDX parsing and frontmatter extraction |
| **Typesetting** | KaTeX & `remark-math` | High-performance LaTeX formula rendering |
| **State** | Zustand | Global stores for active celestial targets and UI states |
| **Search** | `cmdk` | Accessible keyboard-driven command palette |

---

## Project Structure

```text
Atlas/
├── content/                     # MDX articles categorized by scientific domain
│   ├── atoms-chemistry/
│   ├── cosmology/
│   ├── dwarf-planets/
│   ├── elementary-particles/
│   ├── fundamental-physics/
│   ├── galaxies/
│   ├── moons/
│   ├── planets/
│   ├── space-time/
│   └── stars/
├── public/                      # Static textures, heightmaps, and planetary assets
├── src/
│   ├── app/                     # Next.js App Router endpoints and pages
│   │   ├── api/                 # Search and arXiv/CrossRef proxy endpoints
│   │   ├── body/[id]/           # Individual celestial body telemetry views
│   │   ├── events/              # Astronomical phenomena schedule
│   │   ├── explore/             # 40-domain knowledge index and article reader
│   │   ├── galaxies/            # Deep-sky catalog
│   │   └── page.tsx             # Interactive 3D solar system homepage
│   ├── components/
│   │   ├── canvas/              # Three.js celestial components, shaders, and camera
│   │   ├── mdx/                 # Embedded MDX components (e.g. 3D planet visualizer)
│   │   ├── ui/                  # Periodic table, menus, navigation, bento grids
│   │   ├── OmniSearch.tsx       # Global search modal
│   │   └── ResearchPapers.tsx   # Dynamic scholarly paper integration
│   ├── data/                    # Static catalogs and periodic table dataset
│   ├── lib/                     # API helpers, MDX loaders, and theme utilities
│   └── store/                   # Zustand state stores
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js 18.18 or higher (Node.js 20+ recommended)
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hamzaiqbal35/Atlas.git
   cd Atlas
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local dev server with Next.js Turbopack |
| `npm run build` | Compiles the production build and runs TypeScript verification |
| `npm run start` | Serves the production build locally |
| `npm run lint` | Runs ESLint across all source files |

---

## License

This project is licensed under the [MIT License](LICENSE).
