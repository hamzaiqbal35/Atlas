"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";


export function Venus() {
  
  
  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'auto';
  };

  const meshRef = useRef<THREE.Mesh>(null);
  
  const colorMap = useTexture("/venus_texture.png");

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= delta * 0.005; // Retrograde rotation
    }
  });

  return (
    <mesh ref={meshRef} position={[60, 0, 0]} onClick={(e) => { e.stopPropagation(); window.location.href = "/body/venus"; }} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} castShadow receiveShadow>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial map={colorMap} metalness={0.0} roughness={0.7} />
    </mesh>
  );
}
