"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";


export function Uranus() {
  
  
  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'auto';
  };

  const meshRef = useRef<THREE.Mesh>(null);
  
  const colorMap = useTexture("/uranus_texture.png");

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Uranus rotates on its side, retrograde
      meshRef.current.rotation.y += delta * -0.15; 
    }
  });

  return (
    <group position={[270, 0, 0]}>
      {/* Tilt Uranus on its axis by ~98 degrees */}
      <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]} onClick={(e) => { e.stopPropagation(); window.location.href = "/body/uranus"; }} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} castShadow receiveShadow>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial map={colorMap} metalness={0.0} roughness={0.7} />
      </mesh>
    </group>
  );
}
