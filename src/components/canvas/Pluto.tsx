"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";


export function Pluto() {
  
  
  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'auto';
  };

  const meshRef = useRef<THREE.Mesh>(null);
  
  const colorMap = useTexture("/pluto_texture.png");

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * -0.01; // Retrograde, exaggerated for visibility
    }
  });

  return (
    <group position={[340, 0, 0]}>
      <mesh ref={meshRef} onClick={(e) => { e.stopPropagation(); window.location.href = "/body/pluto"; }} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} castShadow receiveShadow>
        <sphereGeometry args={[1.0, 64, 64]} />
        <meshStandardMaterial map={colorMap} metalness={0.1} roughness={0.8} />
      </mesh>
      
      {/* Charon */}
      <mesh position={[2, 0.5, -1]} onClick={(e) => { e.stopPropagation(); window.location.href = "/body/charon"; }} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} castShadow receiveShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#8a8a8a" />
      </mesh>
    </group>
  );
}
