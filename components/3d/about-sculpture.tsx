"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/**
 * Bespoke 3D Studio Philosophy & Engineering Craft Monolith for About Page Showcase
 * Symbolizes the triad of Engineering, Product Thinking, and Deterministic AI Capabilities.
 */
function PhilosophyMonolith({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const monolithRef = useRef<THREE.Mesh>(null);
  const prismRef = useRef<THREE.Mesh>(null);
  const crystalRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const block1Ref = useRef<THREE.Mesh>(null);
  const block2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Harmonic subtle floating breathing motion
    groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.9) * 0.08;

    // Slow organic rotation of the AI Crystal Apex
    if (crystalRef.current) {
      crystalRef.current.rotation.y += delta * 0.45;
      crystalRef.current.rotation.z += delta * 0.25;
    }

    // Gentle orbital rotation of the Gyro Compass Ring
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.2;
      ringRef.current.rotation.x += delta * 0.1;
    }

    // Subtle counter-oscillation of the Product Thinking Prism
    if (prismRef.current) {
      prismRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.6) * 0.15;
    }

    // Micro modular block pulses
    const t = state.clock.getElapsedTime();
    if (block1Ref.current) {
      block1Ref.current.position.y = 0.85 + Math.sin(t * 1.5) * 0.06;
    }
    if (block2Ref.current) {
      block2Ref.current.position.y = -0.3 + Math.cos(t * 1.3) * 0.06;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 01. Base Architectural Stepped Plinth (Warm Sand Ceramic) */}
      <mesh position={[0, -1.35, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.28, 2.5]} />
        <meshStandardMaterial color="#E9E3D6" roughness={0.82} metalness={0.06} />
        <Edges scale={1} threshold={15} color="#171717" />
      </mesh>

      {/* Stepped Sub-Plinth */}
      <mesh position={[0, -1.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.9, 0.22, 1.9]} />
        <meshStandardMaterial color="#DDD4C2" roughness={0.75} metalness={0.08} />
        <Edges scale={1} threshold={15} color="#171717" />
      </mesh>

      {/* 02. Engineering Pillar: Deep Basalt Charcoal Obelisk / Column */}
      <mesh ref={monolithRef} position={[-0.32, -0.15, 0.1]} castShadow receiveShadow>
        <boxGeometry args={[0.95, 1.7, 0.95]} />
        <meshStandardMaterial color="#1A1918" roughness={0.35} metalness={0.25} />
        <Edges scale={1} threshold={15} color="#D8D1C5" />
      </mesh>

      {/* 03. Product Thinking Prism: Interlocking Burnt-Orange Block */}
      <mesh ref={prismRef} position={[0.48, 0.12, -0.18]} castShadow receiveShadow>
        <boxGeometry args={[0.85, 1.25, 0.85]} />
        <meshStandardMaterial color="#E85D35" roughness={0.28} metalness={0.18} />
        <Edges scale={1} threshold={15} color="#FFFFFF" />
      </mesh>

      {/* 04. AI Capabilities Crystal: Apex Octahedron suspended above */}
      <mesh ref={crystalRef} position={[0.1, 1.3, 0]} castShadow receiveShadow>
        <octahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial color="#2B2824" roughness={0.2} metalness={0.65} />
        <Edges scale={1} threshold={10} color="#E85D35" />
      </mesh>

      {/* 05. Structural Bronze Connector Rods (Engineering Pylons) */}
      <mesh position={[-0.45, 0.8, -0.45]} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 1.2, 16]} />
        <meshStandardMaterial color="#B8824A" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[0.65, 0.85, 0.45]} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 1.1, 16]} />
        <meshStandardMaterial color="#B8824A" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* 06. Floating Gyro Precision Ring (Swiss Editorial Accent) */}
      <mesh ref={ringRef} position={[0, 0.4, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.55, 0.022, 16, 64]} />
        <meshStandardMaterial color="#171717" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* 07. Modular Blocks Motif (Brand Symbol In 3D) */}
      <mesh ref={block1Ref} position={[-0.95, 0.85, 0.4]} castShadow>
        <boxGeometry args={[0.26, 0.26, 0.26]} />
        <meshStandardMaterial color="#E85D35" roughness={0.3} />
        <Edges scale={1} threshold={15} color="#FFFFFF" />
      </mesh>

      <mesh ref={block2Ref} position={[1.05, -0.3, 0.5]} castShadow>
        <boxGeometry args={[0.24, 0.24, 0.24]} />
        <meshStandardMaterial color="#1A1918" roughness={0.4} />
        <Edges scale={1} threshold={15} color="#E9E3D6" />
      </mesh>
    </group>
  );
}

/**
 * High-craft 2D Architectural Fallback for Reduced-Motion or WebGL-unsupported environments
 */
function StaticPhilosophyFallback() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-sand-50/60 select-none">
      <div className="relative w-64 h-64 border border-sand-200/80 bg-white/70 backdrop-blur-sm p-6 shadow-sm flex flex-col justify-between">
        {/* Architectural Crosshairs */}
        <div className="absolute top-2 left-2 text-[9px] font-mono text-charcoal-40">⌜ MONOLITH_05 ⌝</div>
        <div className="absolute bottom-2 right-2 text-[9px] font-mono text-burnt">● VERIFIED CRAFT</div>

        {/* 2D Isometric Architectural Diagram Representation */}
        <div className="relative flex-1 flex items-center justify-center">
          <div className="w-24 h-36 bg-charcoal relative border border-charcoal-80 shadow-md">
            <div className="absolute -top-3 -right-4 w-16 h-24 bg-burnt border border-white/50 opacity-95" />
            <div className="absolute -top-8 left-4 w-12 h-12 rotate-45 bg-charcoal-90 border border-burnt" />
            <div className="absolute inset-0 flex items-center justify-center font-mono text-[9px] text-sand-100 uppercase tracking-widest rotate-90">
              PHILOSOPHY
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-sand-200/60 flex items-center justify-between font-mono text-[10px] text-charcoal-50">
          <span>STRUCT: TRIAD CORE</span>
          <span className="text-burnt font-semibold">100% SENIOR</span>
        </div>
      </div>
    </div>
  );
}

export function AboutSculpture() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[420px] sm:h-[500px] lg:h-[560px] flex items-center justify-center bg-sand-50/50 border border-border/50">
        <div className="flex items-center gap-2 font-mono text-[11px] text-charcoal-50 tracking-widest uppercase">
          <span className="h-2 w-2 rounded-full bg-burnt animate-ping" />
          <span>INITIALIZING SPATIAL SCENE...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[420px] sm:h-[500px] lg:h-[560px] relative overflow-hidden select-none">
      {/* Precision Editorial Crop Marks */}
      <span className="absolute top-2 left-2 text-[9px] font-mono text-charcoal-40 select-none z-10">
        ⌜ PHILOSOPHY CORE // 05 ⌝
      </span>
      <span className="absolute top-2 right-2 text-[9px] font-mono text-charcoal-40 select-none z-10">
        [3D INTERACTIVE]
      </span>
      <span className="absolute bottom-2 left-2 text-[9px] font-mono text-charcoal-40 select-none z-10">
        EST. 2026 // DELTA
      </span>
      <span className="absolute bottom-2 right-2 text-[9px] font-mono text-burnt font-semibold select-none z-10 flex items-center gap-1">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-burnt animate-ping" />
        LIVE MODEL
      </span>

      {/* R3F Canvas */}
      <Canvas
        camera={{ position: [0, 0.4, 4.8], fov: 42 }}
        shadows
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
        style={{ touchAction: "none" }}
      >
        <OrbitControls
          makeDefault
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.8}
          enableDamping={true}
          dampingFactor={0.06}
          rotateSpeed={0.9}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
        />

        <ambientLight intensity={1.1} color="#F4F0E8" />
        <directionalLight
          position={[6, 8, 6]}
          intensity={2.0}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
          color="#FFFDF9"
        />
        <directionalLight position={[-6, -4, -4]} intensity={1.4} color="#E85D35" />
        <directionalLight position={[0, -5, 2]} intensity={0.4} color="#77736B" />

        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
          <PhilosophyMonolith isMobile={isMobile} />
        </Float>
      </Canvas>

      {/* Viewport Micro-HUD Overlay with Touch Guidance */}
      <div className="absolute bottom-4 right-4 pointer-events-none font-mono text-[10px] text-charcoal-50 bg-sand/80 px-2.5 py-1 border border-border/80 backdrop-blur-sm flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-burnt animate-pulse" />
        <span>TOUCH / DRAG TO ROTATE • 60 FPS</span>
      </div>
    </div>
  );
}
