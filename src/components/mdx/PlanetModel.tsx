"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function PlanetSphere({ body, radius = 2 }: { body: string; radius?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Use a generic texture mapping
  const textureMap: Record<string, string> = {
    sun: "/sun_texture.png",
    mercury: "/mercury_texture.png",
    venus: "/venus_texture.png",
    earth: "/earth_texture.png",
    mars: "/mars_texture.png",
    jupiter: "/jupiter_texture.png",
    saturn: "/saturn_texture.png",
    uranus: "/uranus_texture.png",
    neptune: "/neptune_texture.png",
    pluto: "/pluto_texture.png"
  };

  const textureUrl = textureMap[body.toLowerCase()] || "/earth_texture.png";
  const colorMap = useTexture(textureUrl);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[radius, 64, 64]} />
      {body === 'sun' ? (
        <meshBasicMaterial map={colorMap} />
      ) : (
        <meshStandardMaterial map={colorMap} metalness={0.1} roughness={0.8} />
      )}
    </mesh>
  );
}

export function PlanetModel({ body, className = "" }: { body: string; className?: string }) {
  return (
    <div className={`w-full h-[400px] bg-background/50 border border-border/50 rounded-2xl overflow-hidden my-8 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={body === 'sun' ? 2 : 0.4} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <PlanetSphere body={body} />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
