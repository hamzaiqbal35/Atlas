"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";


export function Neptune() {
  
  
  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'auto';
  };

  const meshRef = useRef<THREE.Mesh>(null);
  
  const colorMap = useTexture("/neptune_texture.png");

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.075; // 16.1 hours
    }
  });

  return (
    <mesh ref={meshRef} position={[310, 0, 0]} onClick={(e) => { e.stopPropagation(); window.location.href = "/body/neptune"; }} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} castShadow receiveShadow>
      <sphereGeometry args={[2.4, 64, 64]} />
      <meshStandardMaterial map={colorMap} metalness={0.0} roughness={0.7} />
    </mesh>
  );
}
