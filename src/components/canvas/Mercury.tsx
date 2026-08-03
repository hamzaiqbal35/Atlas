"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";


export function Mercury() {
  
  
  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'auto';
  };

  const meshRef = useRef<THREE.Mesh>(null);
  
  const colorMap = useTexture("/mercury_texture.png");

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[30, 0, 0]} onClick={(e) => { e.stopPropagation(); window.location.href = "/body/mercury"; }} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} castShadow receiveShadow>
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial map={colorMap} metalness={0.1} roughness={0.9} />
    </mesh>
  );
}
