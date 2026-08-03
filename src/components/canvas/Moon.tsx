"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";


export function Moon() {
  
  
  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'auto';
  };

  const meshRef = useRef<THREE.Mesh>(null);
  
  // Use a high-quality local image for Moon texture
  const colorMap = useTexture("/moon_texture.png");

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={[96, 0, 0]} onClick={(e) => { e.stopPropagation(); window.location.href = "/body/moon"; }} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} castShadow receiveShadow>
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial map={colorMap} metalness={0.1} roughness={0.8} />
    </mesh>
  );
}
