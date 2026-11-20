"use client";

import { useRef, useMemo } from "react";
import { useFrame, ThreeEvent } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";


// Custom shader to slightly distort/animate the Jupiter texture to simulate storm bands
const jupiterVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const jupiterFragmentShader = `
  uniform sampler2D colorMap;
  uniform float time;
  varying vec2 vUv;

  void main() {
    // Shift UVs horizontally based on Y axis to simulate band speeds
    float bandSpeed = sin(vUv.y * 20.0) * 0.05;
    vec2 distortedUv = vUv;
    distortedUv.x += time * bandSpeed * 0.1;
    
    vec4 texColor = texture2D(colorMap, distortedUv);
    
    // Simple spherical lighting approximation
    gl_FragColor = texColor;
  }
`;

export function Jupiter() {
  const meshRef = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  const rawTexture = useTexture("/jupiter_texture.png");
  const colorMap = useMemo(() => {
    const texture = rawTexture.clone();
    texture.wrapS = THREE.RepeatWrapping;
    texture.needsUpdate = true;
    return texture;
  }, [rawTexture]);

  const uniforms = useMemo(() => ({
    time: { value: 0 },
    colorMap: { value: colorMap }
  }), [colorMap]);

  useFrame((state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.121; // 9.9 hours
    }
    if (materialRef.current) {
      materialRef.current.uniforms.time.value += delta;
    }
    if (meshRef.current) {
      // Rotate the whole group slowly to move the moons
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    document.body.style.cursor = 'auto';
  };

  const createMoonHandler = (id: string) => (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    window.location.href = `/body/${id}`;
  };

  return (
    <group ref={meshRef} position={[190, 0, 0]}>
      {/* Planet */}
      <mesh 
        ref={planetRef}
        castShadow
        receiveShadow
        onClick={(e) => { e.stopPropagation(); window.location.href = "/body/jupiter"; }}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[4.5, 64, 64]} />
        <shaderMaterial 
          ref={materialRef}
          vertexShader={jupiterVertexShader}
          fragmentShader={jupiterFragmentShader}
          uniforms={uniforms}
        />
      </mesh>

      {/* Moons */}
      <mesh position={[7, 0, 0]} castShadow receiveShadow onClick={createMoonHandler("io")} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#f0d571" />
      </mesh>
      <mesh position={[-9, 0.5, 2]} castShadow receiveShadow onClick={createMoonHandler("europa")} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
        <sphereGeometry args={[0.13, 32, 32]} />
        <meshStandardMaterial color="#d4d4d4" />
      </mesh>
      <mesh position={[12, -0.5, -3]} castShadow receiveShadow onClick={createMoonHandler("ganymede")} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#b5a996" />
      </mesh>
      <mesh position={[-15, 0, 4]} castShadow receiveShadow onClick={createMoonHandler("callisto")} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#6a6a69" />
      </mesh>
    </group>
  );
}
