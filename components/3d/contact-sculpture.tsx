"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float, OrbitControls } from "@react-three/drei";
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
          <IntakeBeacon isMobile={isMobile} />
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
