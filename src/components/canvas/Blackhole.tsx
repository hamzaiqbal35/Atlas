"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Blackhole() {
  const diskRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (diskRef.current) {
      diskRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <group position={[-100, 0, -100]}>
      {/* Event Horizon */}
      <mesh>
        <sphereGeometry args={[4, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      
      {/* Accretion Disk */}
      <mesh ref={diskRef} rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[7, 1.5, 16, 100]} />
        <meshStandardMaterial 
          color="#ffaa00" 
          emissive="#ffaa00"
          emissiveIntensity={2}
          transparent={true} 
          opacity={0.8}
        />
      </mesh>
      
      {/* Outer Halo */}
      <mesh rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[9, 2, 16, 100]} />
        <meshStandardMaterial 
          color="#ff5500" 
          emissive="#ff5500"
          emissiveIntensity={1}
          transparent={true} 
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}
