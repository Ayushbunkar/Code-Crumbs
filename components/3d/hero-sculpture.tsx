"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Architectural Composition of Modular Geometric Blocks
 * Represents decoupled software architecture, design tokens, and mechanical precision.
 */
function ArchitecturalStructure({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const accentBlockRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth mouse parallax interpolation
    const targetX = isMobile ? 0 : state.pointer.x * 0.45;
    const targetY = isMobile ? 0 : -state.pointer.y * 0.35;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetX + state.clock.getElapsedTime() * 0.08,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetY + 0.15,
      0.05
    );

    // Subtle breathing displacement
    groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.08;

    // Slow orbital rotation for technical frame ring
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.15;
    }

    // Subtle pulse on burnt accent block
    if (accentBlockRef.current) {
      accentBlockRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 01. Central Monolithic Core Block (Deep Basalt Charcoal) */}
      <mesh position={[0, -0.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 2.2, 1.2]} />
        <meshStandardMaterial
          color="#1A1918"
          roughness={0.65}
          metalness={0.2}
          wireframe={false}
        />
        <Edges scale={1} threshold={15} color="#D8D1C5" />
      </mesh>

      {/* 02. Off-Center Foundation Plinth (Warm Sand Plaster) */}
      <mesh position={[-0.8, -1.2, 0.4]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 0.5, 1.8]} />
        <meshStandardMaterial color="#E8E2D5" roughness={0.85} metalness={0.05} />
        <Edges scale={1} threshold={15} color="#171717" />
      </mesh>

      {/* 03. High-Conviction Burnt-Orange Focus Prism (Brand Accent) */}
      <mesh
        ref={accentBlockRef}
        position={[0.9, 0.7, 0.6]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.9, 0.9, 0.9]} />
        <meshStandardMaterial
          color="#E85D35"
          roughness={0.3}
          metalness={0.15}
        />
        <Edges scale={1} threshold={15} color="#FFFFFF" />
      </mesh>

      {/* 04. Technical Connector Column (Brushed Bronze / Brass) */}
      <mesh position={[0.7, -0.4, -0.7]} castShadow receiveShadow>
        <cylinderGeometry args={[0.3, 0.3, 1.8, 24]} />
        <meshStandardMaterial color="#B8824A" roughness={0.3} metalness={0.8} />
        <Edges scale={1} threshold={15} color="#D8D1C5" />
      </mesh>

      {/* 05. Cantilevered Structural Slat (Charcoal Horizontal Crossbeam) */}
      <mesh position={[-0.4, 0.9, -0.2]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 0.25, 0.8]} />
        <meshStandardMaterial color="#242321" roughness={0.5} metalness={0.3} />
        <Edges scale={1} threshold={15} color="#E85D35" />
      </mesh>

      {/* 06. Floating Mechanical Alignment Ring */}
      <mesh
        ref={ringRef}
        position={[0, 0.2, 0]}
        rotation={[Math.PI / 3, Math.PI / 6, 0]}
      >
        <torusGeometry args={[2.0, 0.025, 16, 64]} />
        <meshStandardMaterial
          color="#D8D1C5"
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>

      {/* 07. Floating Micro Component Node (Satellite) */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.6}>
        <mesh position={[-1.4, 0.5, 0.9]} castShadow>
          <octahedronGeometry args={[0.32]} />
          <meshStandardMaterial
            color="#E85D35"
            roughness={0.25}
            metalness={0.2}
          />
          <Edges scale={1} threshold={15} color="#171717" />
        </mesh>
      </Float>
    </group>
  );
}

export function HeroSculpture() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) {
    // Elegant fallback during SSR hydration
    return (
      <div className="w-full h-[400px] sm:h-[500px] lg:h-[580px] flex items-center justify-center border border-border/40 bg-sand-50/50">
        <div className="text-center font-mono text-xs text-charcoal-50 animate-pulse">
          [Initializing R3F Spatial Scene...]
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[580px] relative select-none">
      {/* Canvas Viewport */}
      <Canvas
        shadows
        dpr={isMobile ? 1 : [1, 1.5]}
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        {/* Controlled Architectural Lighting Setup */}
        <ambientLight intensity={1.2} color="#F4F0E8" />
        <directionalLight
          position={[6, 8, 6]}
          intensity={2.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
          color="#FFFDF9"
        />
        {/* Subtle Burnt-Orange Silhouette Rim Light */}
        <directionalLight
          position={[-6, -4, -4]}
          intensity={1.5}
          color="#E85D35"
        />
        {/* Soft Ground Contact Shadow */}
        <directionalLight
          position={[0, -5, 2]}
          intensity={0.4}
          color="#77736B"
        />

        {/* 3D Composition */}
        <ArchitecturalStructure isMobile={isMobile} />
      </Canvas>

      {/* Viewport Micro-HUD Overlay */}
      <div className="absolute bottom-4 right-4 pointer-events-none font-mono text-[10px] text-charcoal-50 bg-sand/80 px-2.5 py-1 border border-border/80 backdrop-blur-sm flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-burnt animate-pulse" />
        <span>R3F SPATIAL MATRIX • 60 FPS</span>
      </div>
    </div>
  );
}
