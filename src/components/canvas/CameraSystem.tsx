"use client";

import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useCameraStore } from "@/store/useCameraStore";
import * as THREE from "three";

export function CameraSystem() {
  const { camera } = useThree();
  const controlsRef = useRef<any>(null);
  
  const position = useCameraStore((state) => state.position);
  const target = useCameraStore((state) => state.target);
  
  // Track if user is interacting
  const [isInteracting, setIsInteracting] = useState(false);

  useFrame((state, delta) => {
    if (isInteracting) return; // Let OrbitControls take over

    // Instantly track the GSAP proxy which is already smoothly interpolated
    if (position) {
      const targetPos = Array.isArray(position) 
        ? new THREE.Vector3().fromArray(position)
        : (position as THREE.Vector3);
      camera.position.copy(targetPos);
    }
    
    // Instantly track the GSAP target
    if (target && controlsRef.current) {
      const targetVec = Array.isArray(target)
        ? new THREE.Vector3().fromArray(target)
        : (target as THREE.Vector3);
      controlsRef.current.target.copy(targetVec);
      controlsRef.current.update();
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
      <OrbitControls 
        ref={controlsRef}
        enableDamping 
        dampingFactor={0.05} 
        enablePan={false}
        onStart={() => setIsInteracting(true)}
        onEnd={() => setIsInteracting(false)}
      />
    </>
  );
}
