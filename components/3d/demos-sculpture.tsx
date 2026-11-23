"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/**
 * Bespoke 3D Runtime Execution Matrix for Live Demos Showcase
 * Represents real-time interactive pipelines, state machines, and active telemetry.
 */
function RuntimeEngine({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringXRef = useRef<THREE.Mesh>(null);
  const ringYRef = useRef<THREE.Mesh>(null);
  const satellite1Ref = useRef<THREE.Mesh>(null);
  const satellite2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Harmonic breathing motion
    groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.95) * 0.07;

    // Fast multi-axis core rotation representing active CPU execution
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.35;
      coreRef.current.rotation.y += delta * 0.25;
    }

    // Dynamic gimbal rings
    if (ringXRef.current) {
      ringXRef.current.rotation.x += delta * 0.18;
      ringXRef.current.rotation.z += delta * 0.12;
    }
    if (ringYRef.current) {
      ringYRef.current.rotation.y += delta * 0.22;
      ringYRef.current.rotation.z -= delta * 0.15;
    }

    // Satellites orbiting around the core
    const time = state.clock.getElapsedTime();
    if (satellite1Ref.current) {
      satellite1Ref.current.position.x = Math.cos(time * 1.2) * 1.4;
      satellite1Ref.current.position.z = Math.sin(time * 1.2) * 1.4;
      satellite1Ref.current.position.y = Math.sin(time * 1.8) * 0.5 + 0.3;
      satellite1Ref.current.rotation.y += delta * 0.8;
    }

    if (satellite2Ref.current) {
      satellite2Ref.current.position.x = Math.cos(time * 1.2 + Math.PI) * 1.5;
      satellite2Ref.current.position.z = Math.sin(time * 1.2 + Math.PI) * 1.5;
      satellite2Ref.current.position.y = Math.cos(time * 1.5) * 0.4 - 0.2;
      satellite2Ref.current.rotation.x += delta * 0.7;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 01. Base Architectural Foundation Plinth (Warm Sand Ceramic) */}
      <mesh position={[0, -1.3, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.6, 1.8, 0.35, 32]} />
        <meshStandardMaterial color="#E9E3D6" roughness={0.78} metalness={0.06} />
        <Edges scale={1} threshold={15} color="#171717" />
      </mesh>

      {/* 02. Central Faceted Icosahedron Core (Deep Basalt Charcoal) */}
      <mesh ref={coreRef} position={[0, 0, 0]} castShadow receiveShadow>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial color="#1A1918" roughness={0.45} metalness={0.35} />
        <Edges scale={1} threshold={10} color="#D8D1C5" />
      </mesh>

      {/* 03. Orbiting Data Node Satellite 1 (Brand Burnt-Orange Cube) */}
      <mesh ref={satellite1Ref} castShadow receiveShadow>
        <boxGeometry args={[0.42, 0.42, 0.42]} />
        <meshStandardMaterial color="#E85D35" roughness={0.25} metalness={0.2} />
        <Edges scale={1} threshold={15} color="#FFFFFF" />
      </mesh>

      {/* 04. Orbiting Data Node Satellite 2 (Sand Accent Cube) */}
      <mesh ref={satellite2Ref} castShadow receiveShadow>
        <boxGeometry args={[0.38, 0.38, 0.38]} />
        <meshStandardMaterial color="#DDD4C2" roughness={0.5} metalness={0.15} />
        <Edges scale={1} threshold={15} color="#171717" />
      </mesh>

      {/* 05. Brushed Bronze Vertical Infrastructure Pylon */}
      <mesh position={[-0.8, -0.6, -0.6]} castShadow receiveShadow>
        <cylinderGeometry args={[0.14, 0.14, 1.6, 24]} />
        <meshStandardMaterial color="#B8824A" roughness={0.3} metalness={0.8} />
        <Edges scale={1} threshold={15} color="#171717" />
      </mesh>

      {/* 06. Floating Telemetry Gyroscope Rings */}
      <mesh ref={ringXRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.7, 0.02, 16, 80]} />
        <meshBasicMaterial color="#E85D35" opacity={0.65} transparent />
      </mesh>

      <mesh ref={ringYRef} position={[0, 0, 0]}>
        <torusGeometry args={[2.0, 0.016, 16, 80]} />
        <meshBasicMaterial color="#171717" opacity={0.4} transparent />
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
        <div className="w-14 h-14 bg-burnt rounded-full animate-ping opacity-20" />
        <div className="w-12 h-12 bg-charcoal flex items-center justify-center text-burnt font-mono text-xs font-bold">
          LIVE
        </div>
      </div>
      <span className="text-xs font-mono uppercase text-burnt font-semibold tracking-wider">
        Runtime Simulation Engine
      </span>
      <span className="text-[11px] font-mono text-charcoal-50 mt-1">
        3 Interactive Functional Mini-Applications
      </span>
    </div>
  );
}

export function DemosSculpture() {
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
      <div className="w-full h-[360px] sm:h-[440px] flex items-center justify-center bg-surface border border-border">
        <div className="h-6 w-6 border-2 border-burnt border-t-transparent animate-spin rounded-full" />
      </div>
    );
  }

  if (prefersReducedMotion) {
    return (
      <div className="w-full h-[360px] sm:h-[440px]">
        <StaticFallback />
      </div>
    );
  }

  return (
    <div className="w-full h-[360px] sm:h-[440px] relative overflow-hidden select-none">
      <Canvas
        camera={{ position: [0, 0.3, 5.0], fov: 42 }}
        shadows
        dpr={isMobile ? [1, 1.2] : [1, 1.5]}
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

        <ambientLight intensity={0.95} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.9}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />
        <directionalLight position={[-5, -2, -3]} intensity={0.5} color="#DDD4C2" />
        <pointLight position={[1, 2, 2]} intensity={0.9} color="#E85D35" />

        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
          <RuntimeEngine isMobile={isMobile} />
        </Float>
      </Canvas>
    </div>
  );
}
