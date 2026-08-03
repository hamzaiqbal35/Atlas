"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Galaxy() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = 10000;
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const cols = new Float32Array(particleCount * 3);
    
    const colorInside = new THREE.Color("#ff6030");
    const colorOutside = new THREE.Color("#1b3984");
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      const radius = Math.random() * 20;
      const branchAngle = (i % 3) * ((Math.PI * 2) / 3); // 3 spiral arms
      const spinAngle = radius * 0.5;
      
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 2;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 2;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 2;
      
      pos[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      pos[i3 + 1] = randomY;
      pos[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
      
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / 20);
      
      cols[i3] = mixedColor.r;
      cols[i3 + 1] = mixedColor.g;
      cols[i3 + 2] = mixedColor.b;
    }
    
    return [pos, cols];
  }, [particleCount]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.05;
    }
  });

  return (
    <group position={[0, -100, -200]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexColors={true}
          transparent={true}
          opacity={0.8}
        />
      </points>
    </group>
  );
}
