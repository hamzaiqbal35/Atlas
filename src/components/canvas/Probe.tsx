"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Probe() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.z += delta * 0.05;
      
      // Floating animation
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime) * 0.005;
    }
  });

  return (
    <group ref={groupRef} position={[90, 5, 5]} scale={0.5}>
      {/* Dish */}
      <mesh position={[0, 1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2, 0.1, 0.5, 32]} />
        <meshStandardMaterial color="#E0E0E0" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Main Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#B0B0B0" metalness={0.9} roughness={0.5} />
      </mesh>
      
      {/* Antenna */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 3, 8]} />
        <meshStandardMaterial color="#999999" metalness={1} roughness={0} />
      </mesh>
      
      {/* RTG Generator */}
      <mesh position={[2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 2, 16]} />
        <meshStandardMaterial color="#333333" metalness={0.5} roughness={0.8} />
      </mesh>
    </group>
  );
}
