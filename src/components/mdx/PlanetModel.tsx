"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef, Suspense, useEffect } from "react";
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
    saturn: "/saturn_texture.jpg",
    uranus: "/uranus_texture.png",
    neptune: "/neptune_texture.png",
    pluto: "/pluto_texture.png",
    luna: "/moon_texture.png"
  };

  const textureUrl = textureMap[body.toLowerCase()] || "/earth_texture.png";
  const bodySpecs: Record<string, { speed: number, tilt: number }> = {
    sun: { speed: 0.05, tilt: 0.12 },
    mercury: { speed: 0.05, tilt: 0.001 },
    venus: { speed: 0.05, tilt: 3.095 }, // 177.3 deg tilt causes retrograde rotation
    earth: { speed: 0.1, tilt: 0.409 },
    mars: { speed: 0.1, tilt: 0.439 },
    jupiter: { speed: 0.25, tilt: 0.054 },
    saturn: { speed: 0.22, tilt: 0.466 },
    uranus: { speed: 0.15, tilt: 1.706 }, // 97.8 deg tilt causes retrograde on its side
    neptune: { speed: 0.15, tilt: 0.494 },
    pluto: { speed: 0.05, tilt: 2.138 }, // 122.5 deg tilt causes retrograde
    luna: { speed: 0.05, tilt: 0.026 }
  };

  const specs = bodySpecs[body.toLowerCase()] || { speed: 0.05, tilt: 0 };
  const colorMap = useTexture(textureUrl);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * specs.speed;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[specs.tilt, 0, 0]}>
      <sphereGeometry args={[radius, 64, 64]} />
      {body === 'sun' ? (
        <meshBasicMaterial map={colorMap} />
      ) : (
        <meshStandardMaterial map={colorMap} metalness={0.1} roughness={0.8} />
      )}
      {body === 'saturn' && <SaturnRings radius={radius} />}
    </mesh>
  );
}

function SaturnRings({ radius = 2 }: { radius?: number }) {
  const ringMap = useTexture("/saturn_ring_texture.png");
  const geometryRef = useRef<THREE.RingGeometry>(null);
  const innerRadius = radius * 1.2;
  const outerRadius = radius * 2.2;

  // Rewrite UVs to map a 1D strip texture radially
  
  useEffect(() => {
    if (geometryRef.current) {
      const pos = geometryRef.current.attributes.position;
      const uvs = geometryRef.current.attributes.uv;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const r = Math.sqrt(x * x + y * y);
        
        // Map radius to u (x axis of texture)
        // SolarSystemScope texture has inner ring at left (x=0) and outer at right (x=1)
        const u = (r - innerRadius) / (outerRadius - innerRadius);
        uvs.setXY(i, u, 0.5);
      }
      uvs.needsUpdate = true;
    }
  }, [innerRadius, outerRadius]);
  
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry ref={geometryRef} args={[innerRadius, outerRadius, 128]} />
      <meshStandardMaterial 
        map={ringMap}
        color={0xffffff}
        emissive={0x222222}
        transparent={true} 
        side={THREE.DoubleSide}
        opacity={1}
        roughness={0.6}
        metalness={0.1}
        depthWrite={false}
      />
    </mesh>
  );
}

export function PlanetModel({ body, className = "" }: { body: string; className?: string }) {
  return (
    <div className={`w-full h-[400px] bg-background/50 border border-border/50 rounded-2xl overflow-hidden my-8 ${className}`}>
      <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }}>
        <ambientLight intensity={body === 'sun' ? 2 : 0.4} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <PlanetSphere body={body} />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
