"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AsteroidRing({ 
  innerRadius, 
  outerRadius, 
  count, 
  color, 
  speed,
  stoneSize = 0.05
}: { 
  innerRadius: number, 
  outerRadius: number, 
  count: number, 
  color: string, 
  speed: number,
  stoneSize?: number
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    if (!meshRef.current) return;
    
    for (let i = 0; i < count; i++) {
      const r = innerRadius + Math.random() * (outerRadius - innerRadius);
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 0.15; // thin disk thickness
      
      dummy.position.set(
        Math.cos(theta) * r,
        y,
        Math.sin(theta) * r
      );
      
      dummy.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      const scale = Math.random() * stoneSize + (stoneSize * 0.3);
      dummy.scale.setScalar(scale);
      
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [count, innerRadius, outerRadius, stoneSize]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= delta * speed;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined as any, undefined as any, count]} castShadow receiveShadow frustumCulled={false}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} roughness={0.9} metalness={0.1} />
    </instancedMesh>
  );
}

export function Saturn() {
  const planetRef = useRef<THREE.Mesh>(null);
  const moonRef = useRef<THREE.Mesh>(null);
  
  const [textures, setTextures] = useState<{ planet: THREE.Texture } | null>(null);

  useEffect(() => {
    // Generate Procedural Saturn Texture (Bands)
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 2;
    pCanvas.height = 512;
    const pCtx = pCanvas.getContext('2d');
    if (pCtx) {
      const grad = pCtx.createLinearGradient(0, 0, 0, 512);
      grad.addColorStop(0.00, '#b09e7c');
      grad.addColorStop(0.10, '#c7ba98');
      grad.addColorStop(0.25, '#d3c4a3');
      grad.addColorStop(0.35, '#bfa881');
      grad.addColorStop(0.40, '#d1c0a0');
      grad.addColorStop(0.45, '#c5b08b');
      grad.addColorStop(0.50, '#d9cca8');
      grad.addColorStop(0.55, '#c4ae87');
      grad.addColorStop(0.60, '#d6c7a5');
      grad.addColorStop(0.75, '#bca27d');
      grad.addColorStop(0.90, '#d2c2a0');
      grad.addColorStop(1.00, '#9e8d6f');
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 2, 512);
    }
    const planetTex = new THREE.CanvasTexture(pCanvas);
    planetTex.colorSpace = THREE.SRGBColorSpace;

    setTextures({ planet: planetTex });

    return () => {
      planetTex.dispose();
    };
  }, []);
  
  useFrame((state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.112; // 10.7 hours
    }
    if (moonRef.current) {
      const t = state.clock.getElapsedTime();
      moonRef.current.position.x = Math.sin(t * 0.3) * 14;
      moonRef.current.position.z = Math.cos(t * 0.3) * 14;
      moonRef.current.rotation.y += delta * 0.1;
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

  if (!textures) return null;

  return (
    <group position={[230, 0, 0]} rotation={[0.4, 0, 0]}>
      {/* Planet */}
      <mesh 
        ref={planetRef}
        castShadow
        receiveShadow
        onClick={(e) => { e.stopPropagation(); window.location.href = "/body/saturn"; }}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[3.8, 64, 64]} />
        <meshStandardMaterial 
          map={textures.planet} 
          metalness={0.0} 
          roughness={1.0} 
        />
      </mesh>

      {/* Rings made of stones */}
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <AsteroidRing innerRadius={4.5} outerRadius={5.8} count={8000} color="#bfa881" speed={0.15} stoneSize={0.03} />
        <AsteroidRing innerRadius={5.8} outerRadius={8.2} count={22000} color="#d9cca8" speed={0.12} stoneSize={0.04} />
        {/* Cassini Division Gap between 8.2 and 8.6 */}
        <AsteroidRing innerRadius={8.6} outerRadius={10.5} count={15000} color="#c7ba98" speed={0.08} stoneSize={0.035} />
      </group>
      
      {/* Moon - Titan */}
      <group rotation={[0, 0.1, 0]}>
        <mesh 
          ref={moonRef} 
          position={[14, 0, 0]}
          castShadow
          receiveShadow
          onClick={(e) => { e.stopPropagation(); window.location.href = "/body/titan"; }}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#cba76c" metalness={0.0} roughness={0.9} />
        </mesh>
      </group>
    </group>
  );
}
