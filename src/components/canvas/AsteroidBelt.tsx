"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export function AsteroidBelt() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 8000;
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * Math.PI * 2;
      const radius = 140 + Math.random() * 30; // Wider belt
      
      const x = Math.cos(t) * radius;
      // Normal distribution-like scatter for y (thicker at center, thinner at edges)
      const y = (Math.random() - 0.5) * (Math.random() * 15); 
      const z = Math.sin(t) * radius;
      
      // Much larger scale variation for realism
      const scale = 0.1 + Math.pow(Math.random(), 3) * 1.5;
      
      // Pre-calculate rotation axis and speed for performance
      const rotX = Math.random() * Math.PI;
      const rotY = Math.random() * Math.PI;
      const rotZ = Math.random() * Math.PI;
      const rotSpeedX = (Math.random() - 0.5) * 0.5;
      const rotSpeedY = (Math.random() - 0.5) * 0.5;
      const rotSpeedZ = (Math.random() - 0.5) * 0.5;
      
      temp.push({ x, y, z, scale, rotX, rotY, rotZ, rotSpeedX, rotSpeedY, rotSpeedZ });
    }
    return temp;
  }, [count]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.015; // Slow global orbit
      
      particles.forEach((particle, i) => {
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
