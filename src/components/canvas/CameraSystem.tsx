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

    // Smoothly interpolate camera position
    if (position) {
      const targetPos = Array.isArray(position) 
        ? new THREE.Vector3().fromArray(position)
        : (position as THREE.Vector3);
      if (camera.position.distanceTo(targetPos) > 0.05) {
        camera.position.lerp(targetPos, delta * 2);
      }
    }
    
    // Smoothly interpolate lookAt target
    if (target && controlsRef.current) {
      const targetVec = Array.isArray(target)
        ? new THREE.Vector3().fromArray(target)
        : (target as THREE.Vector3);
      if (controlsRef.current.target.distanceTo(targetVec) > 0.05) {
        controlsRef.current.target.lerp(targetVec, delta * 2);
      }
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
