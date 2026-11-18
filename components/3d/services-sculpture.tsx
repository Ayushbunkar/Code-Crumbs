"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Bespoke 3D Capability Architecture Prism for Services & Practice Showcase
 * Represents the 5 core engineering disciplines (Product, AI, Web, Backend, Stewardship)
 * interconnected in geometric architectural harmony.
 */
function CapabilityPrism({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const corePolyRef = useRef<THREE.Mesh>(null);
  const accentPrismRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth mouse parallax interpolation
    const targetX = isMobile ? 0 : state.pointer.x * 0.42;
    const targetY = isMobile ? 0 : -state.pointer.y * 0.32;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetX + state.clock.getElapsedTime() * 0.075,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetY + 0.14,
      0.05
    );

    // Subtle harmonic floating motion
    groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.85) * 0.07;

    // Continuous rotation for inner faceted core
    if (corePolyRef.current) {
      corePolyRef.current.rotation.y += delta * 0.2;
      corePolyRef.current.rotation.z += delta * 0.12;
    }

    // Dynamic precession for accent burnt prism
    if (accentPrismRef.current) {
      accentPrismRef.current.rotation.x += delta * 0.3;
      accentPrismRef.current.rotation.y += delta * 0.25;
    }

    // Concentric orbital rings rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.14;
      ring1Ref.current.rotation.z += delta * 0.09;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.11;
      ring2Ref.current.rotation.x -= delta * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 01. Base Ceramic Foundation Plinth (Warm Sand) */}
      <mesh position={[0, -1.25, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.7, 0.35, 32]} />
        <meshStandardMaterial color="#E9E3D6" roughness={0.8} metalness={0.06} />
        <Edges scale={1} threshold={15} color="#171717" />
      </mesh>

      {/* 02. Central Faceted Monolith (Deep Basalt Charcoal Octahedron) */}
      <mesh
        ref={corePolyRef}
        position={[0, 0.05, 0]}
        castShadow
        receiveShadow
      >
        <octahedronGeometry args={[1.25, 0]} />
        <meshStandardMaterial color="#1A1918" roughness={0.55} metalness={0.3} />
        <Edges scale={1} threshold={10} color="#D8D1C5" />
      </mesh>

      {/* 03. High-Conviction Burnt-Orange Satellite Prism (AI & Product Spark) */}
      <mesh
        ref={accentPrismRef}
        position={[0.95, 0.85, 0.45]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshStandardMaterial color="#E85D35" roughness={0.25} metalness={0.2} />
        <Edges scale={1} threshold={15} color="#FFFFFF" />
      </mesh>

      {/* 04. Secondary Structural Plinth (Dark Oxide Crossbeam) */}
      <mesh position={[-0.7, -0.4, 0.6]} castShadow receiveShadow>
        <boxGeometry args={[1.1, 0.45, 0.9]} />
        <meshStandardMaterial color="#242321" roughness={0.65} metalness={0.2} />
        <Edges scale={1} threshold={15} color="#E85D35" />
      </mesh>

      {/* 05. Brushed Bronze Vertical Infrastructure Strut */}
      <mesh position={[-0.85, 0.4, -0.65]} castShadow receiveShadow>
        <cylinderGeometry args={[0.16, 0.16, 1.7, 24]} />
        <meshStandardMaterial color="#B8824A" roughness={0.3} metalness={0.8} />
        <Edges scale={1} threshold={15} color="#171717" />
      </mesh>

      {/* 06. Floating Concentric Gyro Delivery Rings */}
      <mesh ref={ring1Ref} position={[0, 0.05, 0]}>
        <torusGeometry args={[1.85, 0.022, 16, 80]} />
        <meshBasicMaterial color="#E85D35" opacity={0.7} transparent />
      </mesh>

      <mesh ref={ring2Ref} position={[0, 0.05, 0]}>
        <torusGeometry args={[2.15, 0.016, 16, 80]} />
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
        <div className="w-14 h-14 bg-burnt rotate-45" />
        <div className="absolute -top-2 -right-2 w-8 h-8 border border-charcoal bg-sand" />
      </div>
      <span className="text-xs font-mono uppercase text-burnt font-semibold tracking-wider">
        Practice Capabilities Active
      </span>
      <span className="text-[11px] font-mono text-charcoal-50 mt-1">
        28 Specialized Delivery Disciplines
      </span>
    </div>
  );
}

export function ServicesSculpture() {
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
        camera={{ position: [0, 0.4, 5.2], fov: 42 }}
        shadows
        dpr={isMobile ? [1, 1.2] : [1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.95} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.85}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />
        <directionalLight position={[-5, -2, -3]} intensity={0.5} color="#DDD4C2" />
        <pointLight position={[1, 2, 2]} intensity={0.9} color="#E85D35" />

        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
          <CapabilityPrism isMobile={isMobile} />
        </Float>
      </Canvas>
    </div>
  );
}
