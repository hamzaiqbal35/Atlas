"use client";

import { Stars as DreiStars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function Stars({ theme }: { theme?: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x -= delta / 300;
      groupRef.current.rotation.y -= delta / 400;
    }
  });

  if (theme === 'light') return null;
  
  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      <DreiStars 
        radius={600} 
        depth={200} 
        count={15000} 
        factor={3} 
        saturation={0} 
        fade 
        speed={0.5} 
      />
    </group>
  );
}
