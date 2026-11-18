"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Bespoke 3D Intake & Signal Relay Node for Contact Page Showcase
 * Symbolizes direct technical engagement, partner reception, and bidirectional project communication.
 */
function IntakeBeacon({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const beaconCoreRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const middleRingRef = useRef<THREE.Mesh>(null);
  const signalPylon1Ref = useRef<THREE.Mesh>(null);
  const signalPylon2Ref = useRef<THREE.Mesh>(null);
  const pulseNodeRef = useRef<THREE.Mesh>(null);
  const blockRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth mouse parallax damping
    const targetX = isMobile ? 0 : state.pointer.x * 0.44;
    const targetY = isMobile ? 0 : -state.pointer.y * 0.32;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetX + state.clock.getElapsedTime() * 0.08,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetY + 0.1,
      0.05
    );

    // Harmonic hovering respiration
    groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.92) * 0.08;

    // Fast multi-axis beacon core rotation (Active technical reception)
    if (beaconCoreRef.current) {
      beaconCoreRef.current.rotation.y += delta * 0.35;
      beaconCoreRef.current.rotation.x += delta * 0.15;
    }

    // Outer & inner orbital transmission rings
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.22;
      outerRingRef.current.rotation.x += delta * 0.12;
    }
    if (middleRingRef.current) {
      middleRingRef.current.rotation.y -= delta * 0.3;
      middleRingRef.current.rotation.z -= delta * 0.18;
    }

    // Orbiting intake pulse node
    const time = state.clock.getElapsedTime();
    if (pulseNodeRef.current) {
      pulseNodeRef.current.position.x = Math.cos(time * 1.3) * 1.35;
      pulseNodeRef.current.position.z = Math.sin(time * 1.3) * 1.35;
      pulseNodeRef.current.position.y = Math.sin(time * 2.2) * 0.35 + 0.2;
    }

    // Orbiting modular brand block
    if (blockRef.current) {
      blockRef.current.position.x = Math.cos(time * 1.1 + Math.PI) * 1.45;
      blockRef.current.position.z = Math.sin(time * 1.1 + Math.PI) * 1.45;
      blockRef.current.position.y = Math.cos(time * 1.6) * 0.3 - 0.2;
      blockRef.current.rotation.y += delta * 0.7;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 01. Base Architectural Reception Pedestal (Warm Sand Ceramic) */}
      <mesh position={[0, -1.35, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.7, 1.9, 0.3, 32]} />
        <meshStandardMaterial color="#E9E3D6" roughness={0.78} metalness={0.06} />
        <Edges scale={1} threshold={15} color="#171717" />
      </mesh>

      {/* Stepped Inner Collar */}
      <mesh position={[0, -1.15, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.2, 1.3, 0.2, 32]} />
        <meshStandardMaterial color="#DDD4C2" roughness={0.7} metalness={0.08} />
        <Edges scale={1} threshold={15} color="#171717" />
      </mesh>

      {/* 02. Central Signal Core: Deep Basalt Charcoal Dodecahedron */}
      <mesh ref={beaconCoreRef} position={[0, 0, 0]} castShadow receiveShadow>
        <dodecahedronGeometry args={[0.85, 0]} />
        <meshStandardMaterial color="#1A1918" roughness={0.4} metalness={0.35} />
        <Edges scale={1} threshold={10} color="#D8D1C5" />
      </mesh>

      {/* 03. Transmission Ring Alpha (Burnt-Orange Precision Orbit) */}
      <mesh ref={outerRingRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.5, 0.024, 16, 64]} />
        <meshStandardMaterial color="#E85D35" roughness={0.25} metalness={0.4} />
      </mesh>

      {/* 04. Transmission Ring Beta (Bronze Communication Pylon Ring) */}
      <mesh ref={middleRingRef} position={[0, 0.15, 0]} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.25, 0.02, 16, 64]} />
        <meshStandardMaterial color="#B8824A" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* 05. Structural Reception Pylons */}
      <mesh ref={signalPylon1Ref} position={[-0.6, -0.2, -0.6]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 1.4, 16]} />
        <meshStandardMaterial color="#B8824A" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh ref={signalPylon2Ref} position={[0.6, -0.2, 0.6]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 1.4, 16]} />
        <meshStandardMaterial color="#B8824A" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* 06. Orbiting Intake Pulse Node (Brand Burnt Orange Cube) */}
      <mesh ref={pulseNodeRef} castShadow receiveShadow>
        <boxGeometry args={[0.38, 0.38, 0.38]} />
        <meshStandardMaterial color="#E85D35" roughness={0.25} metalness={0.2} />
        <Edges scale={1} threshold={15} color="#FFFFFF" />
      </mesh>

      {/* 07. Orbiting Modular Brand Block (Basalt Charcoal) */}
      <mesh ref={blockRef} castShadow receiveShadow>
        <boxGeometry args={[0.34, 0.34, 0.34]} />
        <meshStandardMaterial color="#1A1918" roughness={0.45} metalness={0.3} />
        <Edges scale={1} threshold={15} color="#E9E3D6" />
      </mesh>
    </group>
  );
}

/**
 * Accessible 2D Architectural Diagram Fallback
 */
function StaticContactFallback() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-sand-50/60 select-none">
      <div className="relative w-64 h-64 border border-sand-200/80 bg-white/70 backdrop-blur-sm p-6 shadow-sm flex flex-col justify-between">
        <div className="absolute top-2 left-2 text-[9px] font-mono text-charcoal-40">⌜ RELAY_NODE_06 ⌝</div>
        <div className="absolute bottom-2 right-2 text-[9px] font-mono text-burnt">● ACTIVE INTAKE</div>

        <div className="relative flex-1 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full border border-dashed border-burnt/60 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-charcoal-40 flex items-center justify-center">
              <div className="w-10 h-10 bg-charcoal rotate-45 border border-sand-100 flex items-center justify-center">
                <div className="w-3 h-3 bg-burnt rounded-full animate-ping" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-sand-200/60 flex items-center justify-between font-mono text-[10px] text-charcoal-50">
          <span>CHANNEL: DIRECT PARTNER</span>
          <span className="text-burnt font-semibold">&lt; 12H SLA</span>
        </div>
      </div>
    </div>
  );
}

export function ContactSculpture() {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    motionQuery.addEventListener("change", handleMotionChange);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!mounted) {
    return <div className="w-full h-[400px] lg:h-[480px] bg-sand-100/30 animate-pulse rounded-none" />;
  }

  if (prefersReducedMotion) {
    return (
      <div className="w-full h-[400px] lg:h-[480px]">
        <StaticContactFallback />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[420px] lg:h-[490px] bg-sand-50/50 border border-sand-200/80 overflow-hidden group">
      {/* Precision Editorial Crop Marks */}
      <span className="absolute top-2 left-2 text-[9px] font-mono text-charcoal-40 select-none z-10">
        ⌜ INTAKE RELAY // 06 ⌝
      </span>
      <span className="absolute top-2 right-2 text-[9px] font-mono text-charcoal-40 select-none z-10">
        [3D INTERACTIVE]
      </span>
      <span className="absolute bottom-2 left-2 text-[9px] font-mono text-charcoal-40 select-none z-10">
        LATENCY: &lt; 12H
      </span>
      <span className="absolute bottom-2 right-2 text-[9px] font-mono text-burnt font-semibold select-none z-10 flex items-center gap-1">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-burnt animate-ping" />
        DISPATCH OPEN
      </span>

      {/* R3F Canvas */}
      <Canvas
        camera={{ position: [0, 0.4, 4.3], fov: 42 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.94} />
        <directionalLight
          position={[5, 7, 5]}
          intensity={1.4}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-5, 3, -2]} intensity={0.5} color="#FFF2E2" />
        <pointLight position={[0, -2, 2]} intensity={0.3} color="#E85D35" />

        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
          <IntakeBeacon isMobile={isMobile} />
        </Float>
      </Canvas>

      {/* Subtle bottom caption */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none text-center">
        <p className="font-mono text-[10px] tracking-widest text-charcoal-40 uppercase bg-sand-50/80 px-3 py-0.5 border border-sand-200/50 backdrop-blur-xs">
          FIG 06: TECHNICAL INTAKE &amp; RELAY NODE · [TACTILE 3D]
        </p>
      </div>
    </div>
  );
}
