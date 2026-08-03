"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Shared Noise function for shaders
const noiseShader = `
  // Simple 3D noise function
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
  
  float snoise(vec3 v){ 
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

    i = mod(i, 289.0 ); 
    vec4 p = permute( permute( permute( 
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    float n_ = 1.0/7.0; // N=7
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                  dot(p2,x2), dot(p3,x3) ) );
  }

  // Fractal Brownian Motion
  float fbm(vec3 x) {
    float v = 0.0;
    float a = 0.5;
    vec3 shift = vec3(100.0);
    for (int i = 0; i < 5; ++i) {
      v += a * snoise(x);
      x = x * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }
`;

// Sun Vertex Shader
const vertexShader = `
  uniform float time;
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  ${noiseShader}

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    
    // Very subtle high-frequency displacement for a slightly fuzzy surface
    float displacement = snoise(position * 5.0 + time) * 0.03;
    vec3 newPosition = position + normal * displacement;
    
    vPosition = newPosition;
    
    vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
    vViewPosition = -mvPosition.xyz;
    
    gl_Position = projectionMatrix * mvPosition;
  }
`;

// Sun Fragment Shader
const fragmentShader = `
  uniform float time;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  ${noiseShader}

  void main() {
    // Animate noise over time
    float t = time * 0.15;
    
    // Use the 3D position to generate the noise texture
    vec3 p = vPosition * 0.8;
    
    // Complex boiling noise by distorting the FBM input
    vec3 q = vec3(fbm(p + vec3(t, 0.0, 0.0)),
                  fbm(p + vec3(0.0, t, 0.0)),
                  fbm(p + vec3(0.0, 0.0, t)));
                  
    vec3 r = vec3(fbm(p + 1.0 * q + vec3(t, -t, 0.0)),
                  fbm(p + 1.0 * q + vec3(-t, t, 0.0)),
                  fbm(p + 1.0 * q + vec3(0.0, 0.0, t)));
                  
    float n = fbm(p + 2.0 * r);
    
    // Normalize n roughly to 0-1
    n = (n + 1.0) * 0.5;
    n = clamp(n, 0.0, 1.0);

    // Color gradient setup for realistic sun
    vec3 colorDarkest = vec3(0.3, 0.0, 0.0); // Very dark red (sunspots)
    vec3 colorDark = vec3(0.8, 0.2, 0.0);    // Dark orange
    vec3 colorMid = vec3(1.0, 0.5, 0.0);     // Bright orange
    vec3 colorLight = vec3(1.0, 0.9, 0.4);   // Bright yellow/white
    
    vec3 surfaceColor;
    
    // Map noise to color gradient
    if (n < 0.3) {
      surfaceColor = mix(colorDarkest, colorDark, n / 0.3);
    } else if (n < 0.6) {
      surfaceColor = mix(colorDark, colorMid, (n - 0.3) / 0.3);
    } else {
      surfaceColor = mix(colorMid, colorLight, (n - 0.6) / 0.4);
    }
    
    // Add glowing hot spots
    float hotSpot = smoothstep(0.7, 1.0, n);
    surfaceColor += colorLight * hotSpot * 0.8;

    // Limb darkening (edges look darker)
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = dot(vNormal, viewDir);
    fresnel = clamp(fresnel, 0.0, 1.0);
    
    // Mix the surface color with a darker, redder color at the edges
    surfaceColor = mix(colorDarkest * 0.4, surfaceColor, pow(fresnel, 0.7));

    gl_FragColor = vec4(surfaceColor, 1.0);
  }
`;

// Corona Vertex Shader
const coronaVertexShader = `
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

// Corona Fragment Shader
const coronaFragmentShader = `
  uniform float time;
  
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  ${noiseShader}

  void main() {
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = dot(vNormal, viewDir);
    fresnel = clamp(fresnel, 0.0, 1.0);
    
    // The corona is most visible at the edges (low fresnel)
    // We create a glowing halo effect
    float halo = pow(1.0 - fresnel, 3.0);
    
    // Add noise to the corona for flares
    vec3 p = vPosition * 0.4;
    float t = time * 0.15;
    float noise = fbm(p + vec3(t));
    noise = (noise + 1.0) * 0.5;
    
    // Create spikey flares
    float flares = pow(noise, 3.0) * 2.5;
    
    // Combine halo and flares
    float intensity = halo * 0.4 + flares * halo;
    
    // Fade out completely at the very edge to avoid hard geometry cutoffs
    intensity *= smoothstep(0.0, 0.2, fresnel);
    
    // Also fade out in the center so the core sun shines through clearly
    intensity *= smoothstep(0.3, 1.0, 1.0 - fresnel);
    
    vec3 coronaColor = vec3(1.0, 0.5, 0.1); // Orange-yellow glow
    
    gl_FragColor = vec4(coronaColor * intensity, intensity);
  }
`;

export function Sun() {
  const meshRef = useRef<THREE.Mesh>(null);
  const coronaRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(() => ({
    time: { value: 0 },
  }), []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.02;
      uniforms.time.value += delta;
    }
    if (coronaRef.current) {
      coronaRef.current.rotation.y -= delta * 0.015;
      coronaRef.current.rotation.z += delta * 0.005;
    }
  });

  const handleClick = (e: any) => {
    e.stopPropagation();
    window.location.href = "/body/sun";
  };

  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = 'auto';
  };

  return (
    <group position={[0, 0, 0]}>
      {/* Main Sun Body */}
      <mesh 
        ref={meshRef} 
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[5, 128, 128]} />
        <shaderMaterial 
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </mesh>
      
      {/* Outer Glow / Corona Effect */}
      <mesh ref={coronaRef}>
        <sphereGeometry args={[6.8, 64, 64]} />
        <shaderMaterial 
          vertexShader={coronaVertexShader}
          fragmentShader={coronaFragmentShader}
          uniforms={uniforms}
          transparent={true}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      
      <pointLight intensity={5} distance={300} decay={1.5} color="#FFF5D6" />
    </group>
  );
}
