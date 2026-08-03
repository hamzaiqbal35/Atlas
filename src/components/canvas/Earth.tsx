"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";


export function Earth() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  
  // Use a high-quality local image for Earth texture
  const colorMap = useTexture("/earth_texture.png");

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'auto';
  };

  return (
    <mesh 
      ref={meshRef} 
      position={[90, 0, 0]}
      onClick={(e) => { e.stopPropagation(); window.location.href = "/body/earth"; }}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      castShadow
      receiveShadow
    >
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={colorMap} metalness={0.1} roughness={0.8} />
      
      {/* Cloud layer approximation */}
      <mesh>
        <sphereGeometry args={[2.02, 64, 64]} />
        <meshStandardMaterial transparent opacity={0.4} color="#ffffff" />
      </mesh>
    </mesh>
  );
}
