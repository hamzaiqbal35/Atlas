# Atlas 🌌

Atlas is an interactive 3D space exploration application that lets you navigate through our solar system. Explore detailed planetary data, observe realistic celestial bodies rendered in 3D, and learn about the universe in a highly immersive, cinematic web environment.

## ✨ Features

- **Interactive 3D Solar System**: Navigate between planets, stars, and celestial bodies using React Three Fiber.
- **Realistic Rendering**: Advanced shaders, dynamic lighting, atmospheric scattering, and procedural textures for planets, including a fully realized Sun, Earth with clouds, and rings for Saturn and Uranus.
- **Dynamic Thematic Encyclopedia**: Each celestial body has its own dedicated detail page featuring customized, immersive color palettes based on the planet's actual colors (e.g., fiery reds for Mars, deep space blue for Neptune).
- **Cinematic Starfield**: A highly optimized, twinkling 3D star background providing an immersive deep-space feel.
- **Asteroid Belt**: A realistic, dense asteroid belt built with highly optimized `InstancedMesh` rendering for maximum performance.
- **Moons & Satellites**: Dedicated encyclopedia sections detailing the natural satellites of each planet.
- **Modern UI/UX**: Sleek glassy interfaces, smooth page transitions, and gooey-effect navigation menus built with Framer Motion and Tailwind CSS.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14] (App Router)
- **Language**: TypeScript
- **3D Rendering**: [Three.js] & [React Three Fiber] (@react-three/fiber, @react-three/drei)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the interactive universe!

## 🪐 Project Structure

- `src/components/canvas/`: Contains all the 3D components, planets, stars, and the main React Three Fiber scene.
- `src/components/ui/`: Reusable UI components like the navigation bar, info panels, and interactive charts.
- `src/app/`: Next.js App Router pages and layouts.
- `src/data/`: Static data files containing encyclopedia information for all planets and moons.

## 📝 License

This project is open-source and available under the MIT License.
