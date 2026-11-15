# Atlas

Atlas is an interactive digital space encyclopedia and 3D cosmic knowledge experience. Designed to mirror how astronomers, astrophysicists, and planetary scientists structure our understanding of the universe, Atlas combines high-fidelity 3D simulation with a deep, structured scientific knowledge base spanning the subatomic to the cosmological scale.

## Overview

Unlike conventional static references or purely decorative space visualizations, Atlas models the cosmos as a multi-scale knowledge graph. Users can traverse through 40 scientific domains—from fundamental particles and spacetime curvature to stellar evolution, exoplanets, galactic superclusters, and human spaceflight missions—navigating smoothly between interactive WebGL simulations and rich, peer-reviewed scientific literature.

## Key Features

- **Interactive 3D Solar System & Orbitals**: Real-time rendering of planets, moons, and the Sun built with Three.js and React Three Fiber (R3F). Features custom shaders, dynamic lighting, atmospheric scattering layers, Saturnian ring geometry, and procedural surfaces.
- **High-Performance Instanced Asteroid Belt**: Dense asteroid field simulated with Three.js `InstancedMesh` for 60 FPS performance across desktop environments.
- **Cinematic Scroll Experience**: Smooth scroll-linked orbital camera pathing powered by Lenis and GSAP, flying users from the Sun out to the Kuiper Belt with integrated telemetry overlays and mini-map tracking.
- **40-Domain Scientific Taxonomy**: Comprehensive knowledge catalog categorizing the universe across 40 distinct domains, including Fundamental Physics, Quantum Mechanics, Cosmology, Galaxies, Black Holes, Spectroscopy, Astrobiology, and Space Technology.
- **Interactive Science Tools & MDX Articles**:
  - Mathematical typesetting support with KaTeX (`remark-math` and `rehype-katex`).
  - Interactive Periodic Table of Elements with comprehensive chemical, isotopic, and atomic data.
  - Interactive 3D Planet Models embedded directly within article documentation.
  - Live Peer-Reviewed Research Papers fetched dynamically from arXiv and CrossRef APIs.
- **OmniSearch Command Palette**: Raycast-style global search (`Cmd+K` / `Ctrl+K`) powered by `cmdk` for fast discovery across celestial bodies, encyclopedia articles, and taxonomy categories.
- **Telemetry & Celestial Data**: Dedicated detail pages (`/body/[id]`) integrating live orbital characteristics, physical metrics, and comparative data charts via the Le Systeme Solaire REST API.
- **Adaptive Visual Architecture**: Minimalist, technical aesthetic inspired by high-density scientific dashboards and modern developer tools, featuring custom fluid navigation and bento-grid categorization hubs.

## Tech Stack

### Core Framework & Language
- **Framework**: Next.js 16 (App Router with Turbopack)
- **Library**: React 19
- **Language**: TypeScript

### 3D Graphics & Simulation
- **Three.js**: Core 3D engine
- **React Three Fiber (@react-three/fiber)**: Declarative 3D scene graph
- **React Three Drei (@react-three/drei)**: Camera controls, shaders, and 3D environment helpers
- **OGL**: Lightweight WebGL utility library

### Styling & Animation
- **Styling**: Tailwind CSS with Tailwind Typography and Tailwind CSS Animate
- **Smooth Scroll**: Lenis
- **Transitions & Springs**: Motion (Framer Motion)
- **Timelines**: GSAP & ScrollTrigger
- **Icons**: Lucide React

### Content & Data Pipeline
- **Content Rendering**: next-mdx-remote
- **Scientific Math**: remark-math, rehype-katex
- **Metadata Parsing**: gray-matter, fast-xml-parser
- **State Management**: Zustand
- **Command Palette**: cmdk

## Project Structure

```text
Atlas/
├── content/                     # MDX scientific articles organized by taxonomy domain
│   ├── atoms-chemistry/
│   ├── cosmology/
│   ├── dwarf-planets/
│   ├── elementary-particles/
│   ├── fundamental-physics/
│   ├── galaxies/
│   ├── galaxy-groups/
│   ├── galaxy-structures/
│   ├── matter/
│   ├── moons/
│   ├── physics/
│   ├── planets/
│   ├── small-bodies/
│   ├── space-time/
│   ├── stars/
│   └── the-universe/
├── public/                      # Static textures, imagery, and assets
├── src/
│   ├── app/                     # Next.js App Router pages and API routes
│   │   ├── api/
│   │   │   ├── arxiv/           # CrossRef & arXiv research paper fetcher
│   │   │   └── search/          # Global search indexing endpoint
│   │   ├── body/[id]/           # Individual celestial body telemetry & detail view
│   │   ├── events/              # Astronomical phenomena and events
│   │   ├── explore/             # 40-domain knowledge hub and category directories
│   │   ├── galaxies/            # Deep-sky and galactic directory
│   │   ├── globals.css          # Global styles, variables, and typography
│   │   ├── layout.tsx           # Root layout with global navigation and 3D canvas
│   │   └── page.tsx             # Interactive solar system landing experience
│   ├── components/
│   │   ├── canvas/              # R3F celestial bodies, shaders, camera system, scene
│   │   ├── mdx/                 # Embedded MDX interactive components (3D models)
│   │   ├── ui/                  # Periodic table, magic bento, menus, cards, panels
│   │   ├── OmniSearch.tsx       # Cmd+K search dialog
│   │   ├── ResearchPapers.tsx   # Live scientific paper integration component
│   │   ├── ScrollManager.tsx    # Scroll synchronization engine
│   │   └── SmoothScroll.tsx     # Lenis smooth scrolling provider
│   ├── data/                    # Static catalogs, knowledge graph nodes, element data
│   ├── lib/                     # API clients, category registries, MDX loader utilities
│   └── store/                   # Zustand state stores (camera, UI, knowledge graph)
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18.18 or higher (Node.js 20+ recommended)
- npm, pnpm, or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/atlas.git
cd atlas
npm install
```

### Development Server

Start the development server with Turbopack enabled:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To generate an optimized production build:

```bash
npm run build
```

To run the production server locally:

```bash
npm run start
```

### Linting

Run ESLint to check for code quality and formatting issues:

```bash
npm run lint
```

## License

This project is licensed under the MIT License.
