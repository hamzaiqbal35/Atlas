"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./Earth";
import { Moon } from "./Moon";
import { Mars } from "./Mars";
import { Sun } from "./Sun";
import { AsteroidBelt } from "./AsteroidBelt";
import { Mercury } from "./Mercury";
import { Venus } from "./Venus";
import { Jupiter } from "./Jupiter";
import { Saturn } from "./Saturn";
import { Uranus } from "./Uranus";
import { Neptune } from "./Neptune";
import { Pluto } from "./Pluto";
import { Stars } from "./Stars";
import { CameraSystem } from "./CameraSystem";
import { useTheme } from "next-themes";

export function Scene() {
  const { theme } = useTheme();
  
  return (
    <div className="fixed inset-0 z-[-1] bg-background">
      <Canvas dpr={[1, 1.5]} gl={{ powerPreference: 'high-performance', antialias: true, alpha: false }}>
        <CameraSystem />
        
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} />
        
        <Stars theme={theme} />
        
        {/* Suspense is needed when using useTexture to load images */}
        <Suspense fallback={null}>
          <Sun />
          <Mercury />
          <Venus />
          <Earth />
          <Moon />
          <Mars />
          <AsteroidBelt />
          <Jupiter />
          <Saturn />
          <Uranus />
          <Neptune />
          <Pluto />
        </Suspense>
      </Canvas>
    </div>
  );
}
