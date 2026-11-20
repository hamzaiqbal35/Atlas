"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function seededRandom(seed: number) {
  let s = seed;
  return function() {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function generateParticles(count: number) {
  const random = seededRandom(42);
  const temp = [];
  for (let i = 0; i < count; i++) {
    const t = random() * Math.PI * 2;
    const radius = 140 + random() * 30; // Wider belt
    
    const x = Math.cos(t) * radius;
    // Normal distribution-like scatter for y (thicker at center, thinner at edges)
    const y = (random() - 0.5) * (random() * 15); 
    const z = Math.sin(t) * radius;
    
    // Much larger scale variation for realism
    const scale = 0.1 + Math.pow(random(), 3) * 1.5;
    
    // Pre-calculate rotation axis and speed for performance
    const rotX = random() * Math.PI;
    const rotY = random() * Math.PI;
    const rotZ = random() * Math.PI;
    const rotSpeedX = (random() - 0.5) * 0.5;
    const rotSpeedY = (random() - 0.5) * 0.5;
    const rotSpeedZ = (random() - 0.5) * 0.5;
    
    temp.push({ x, y, z, scale, rotX, rotY, rotZ, rotSpeedX, rotSpeedY, rotSpeedZ });
  }
  return temp;
}

export function AsteroidBelt() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const count = 8000;
  const particlesRef = useRef(generateParticles(count));

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.015; // Slow global orbit
      
      particlesRef.current.forEach((particle, i) => {
        dummy.position.set(particle.x, particle.y, particle.z);
        dummy.scale.setScalar(particle.scale);
        
        // Update rotations using pre-calculated speeds
        particle.rotX += delta * particle.rotSpeedX;
        particle.rotY += delta * particle.rotSpeedY;
        particle.rotZ += delta * particle.rotSpeedZ;
        
        dummy.rotation.set(particle.rotX, particle.rotY, particle.rotZ);
        
        dummy.updateMatrix();
        meshRef.current!.setMatrixAt(i, dummy.matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  const colorMap = useTexture("/moon_texture.png");

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} position={[0, 0, 0]} castShadow receiveShadow>
      {/* Detail=0 gives a nice jagged, rocky asteroid shape */}
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        map={colorMap} 
        color="#a0a0a0" 
        roughness={0.9} 
        metalness={0.2}
      />
    </instancedMesh>
  );
}
