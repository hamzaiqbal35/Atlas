"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";


export function Mars() {
  
  
  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'auto';
  };

  const meshRef = useRef<THREE.Mesh>(null);
  
  // Use generated Mars texture
  const colorMap = useTexture("/mars_texture.png");

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.048; // 24.6 hours
    }
  });

  return (
    <group position={[120, 0, 0]}>
      <mesh ref={meshRef} onClick={(e) => { e.stopPropagation(); window.location.href = "/body/mars"; }} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} castShadow receiveShadow>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial map={colorMap} metalness={0.1} roughness={0.8} />
      </mesh>
      
      {/* Phobos */}
      <mesh position={[2, 0.5, 0]} onClick={(e) => { e.stopPropagation(); window.location.href = "/body/phobos"; }} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} castShadow receiveShadow>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial color="#888888" />
      </mesh>

      {/* Deimos */}
      <mesh position={[-3, -0.5, 1]} onClick={(e) => { e.stopPropagation(); window.location.href = "/body/deimos"; }} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} castShadow receiveShadow>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshStandardMaterial color="#aaaaaa" />
      </mesh>
    </group>
  );
}
