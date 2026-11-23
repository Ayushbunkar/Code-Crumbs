"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/**
 * Bespoke 3D Production Lattice & Architectural Monolith for Our Work Showcase
 * Represents interlocking software systems, deployed production architectures, and modular engineering.
 */
function ProductionLattice({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const cubeRef = useRef<THREE.Mesh>(null);
  const secondaryCubeRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Subtle harmonic floating motion
    groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.9) * 0.06;

    // Rotation for accent components
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * 0.25;
      cubeRef.current.rotation.x += delta * 0.15;
    }

    if (secondaryCubeRef.current) {
      secondaryCubeRef.current.rotation.z += delta * 0.2;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.12;
      ringRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 01. Base Architectural Foundation Plinth (Warm Sand Ceramic) */}
      <mesh position={[0, -1.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.4, 0.35, 2.4]} />
        <meshStandardMaterial color="#E9E3D6" roughness={0.75} metalness={0.08} />
        <Edges scale={1} threshold={15} color="#171717" />
      </mesh>

      {/* 02. Primary Monolithic Structural Pillar (Deep Basalt Charcoal) */}
      <mesh position={[-0.4, -0.3, -0.3]} castShadow receiveShadow>
        <boxGeometry args={[1.4, 1.8, 1.4]} />
        <meshStandardMaterial color="#1A1918" roughness={0.6} metalness={0.25} />
        <Edges scale={1} threshold={15} color="#D8D1C5" />
      </mesh>

      {/* 03. Cantilevered Horizontal Platform (Dark Oxide Charcoal) */}
      <mesh position={[0.4, 0.4, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 0.25, 1.6]} />
        <meshStandardMaterial color="#242321" roughness={0.5} metalness={0.3} />
        <Edges scale={1} threshold={15} color="#E85D35" />
      </mesh>

      {/* 04. Signature Burnt-Orange Interactive Core Cube (Brand Signal) */}
      <mesh ref={cubeRef} position={[0.7, 1.0, 0.4]} castShadow receiveShadow>
        <boxGeometry args={[0.75, 0.75, 0.75]} />
        <meshStandardMaterial color="#E85D35" roughness={0.28} metalness={0.2} />
        <Edges scale={1} threshold={15} color="#FFFFFF" />
      </mesh>

      {/* 05. Floating Architectural Subsidiary Block (Sand Muted) */}
      <mesh
        ref={secondaryCubeRef}
        position={[-0.9, 0.8, -0.5]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="#DDD4C2" roughness={0.5} metalness={0.15} />
        <Edges scale={1} threshold={15} color="#171717" />
      </mesh>

      {/* 06. Brushed Bronze Architectural Connector Columns */}
      <mesh position={[0.8, -0.6, -0.6]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.15, 1.6, 24]} />
        <meshStandardMaterial color="#B8824A" roughness={0.3} metalness={0.8} />
        <Edges scale={1} threshold={15} color="#171717" />
      </mesh>
      <mesh position={[-0.9, -0.6, 0.8]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.15, 1.6, 24]} />
        <meshStandardMaterial color="#B8824A" roughness={0.3} metalness={0.8} />
        <Edges scale={1} threshold={15} color="#171717" />
      </mesh>

      {/* 07. Orbital Architectural Gyro Ring */}
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.9, 0.02, 16, 80]} />
        <meshBasicMaterial color="#E85D35" opacity={0.65} transparent />
      </mesh>
    </group>
  );
}

/**
 * 2D Fallback for Reduced-Motion or WebGL-unsupported environments
 */
function StaticFallback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-sand-50/50">
      <div className="w-28 h-28 border-2 border-charcoal/20 relative flex items-center justify-center mb-4">
        <div className="w-16 h-16 bg-burnt" />
        <div className="absolute -top-2 -right-2 w-8 h-8 border border-charcoal bg-sand" />
      </div>
      <span className="text-xs font-mono uppercase text-burnt font-semibold tracking-wider">
        System Topology Active
      </span>
      <span className="text-[11px] font-mono text-charcoal-50 mt-1">
        6 Deployed Enterprise Architectures
      </span>
    </div>
  );
}

export function PortfolioSculpture() {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", checkMobile);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[420px] sm:h-[500px] lg:h-[560px] flex items-center justify-center border border-border/40 bg-sand-50/50">
        <div className="text-center font-mono text-xs text-charcoal-50 animate-pulse">
          [Initializing R3F Spatial Scene...]
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[420px] sm:h-[500px] lg:h-[560px] relative overflow-hidden select-none">
      <Canvas
        camera={{ position: [0, 0.4, 5.2], fov: 42 }}
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
          <ProductionLattice isMobile={isMobile} />
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
