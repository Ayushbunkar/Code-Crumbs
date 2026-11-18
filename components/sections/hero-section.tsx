"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";
import { HeroSculpture } from "@/components/3d/hero-sculpture";
import { ModularBlocks, SectionIndexBadge } from "@/components/ui/modular-blocks";
import { ArrowUpRight, Compass, Terminal, Layers } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden border-b border-border bg-sand">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-30" />

      {/* Subtle Top Metadata Bar */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 mb-8 sm:mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border/80 text-[11px] font-mono text-charcoal-50">
          <div className="flex items-center gap-3">
            <ModularBlocks size="xs" variant="brand" />
            <span className="text-charcoal font-medium uppercase tracking-wider">
              Code&amp;Crumbs • Digital Product &amp; Engineering Studio
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Compass className="h-3 w-3 text-burnt" />
              <span>LOC: 28°36&apos;N 77°12&apos;E • UTC+05:30</span>
            </span>
            <span>•</span>
            <span className="text-charcoal font-semibold">Q3/Q4 INTAKE OPEN</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Oversized Editorial Typography & Magnetic CTAs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status & Practice Indicator with Modular Block Glyph */}
            <TextReveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-3">
                <SectionIndexBadge number="00" label="Creative Software & Engineering Studio" />
                <span className="hidden sm:inline-block text-[11px] font-mono text-charcoal-50 border-l border-border pl-3">
                  Swiss Grid Layout • Strict Decoupling
                </span>
              </div>
            </TextReveal>

            {/* Required Hero Heading */}
            <TextReveal delay={0.25}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-serif text-charcoal tracking-tight leading-[1.04]">
                We build what moves your business{" "}
                <span className="italic font-normal text-burnt">forward.</span>
              </h1>
            </TextReveal>

            {/* Required Supporting Text */}
            <TextReveal delay={0.4}>
              <p className="editorial-lead max-w-xl text-charcoal-50 text-lg sm:text-xl leading-relaxed">
                Code&amp;Crumbs designs and develops intelligent software, AI-powered products and digital experiences for ambitious businesses.
              </p>
            </TextReveal>

            {/* Magnetic CTA Buttons */}
            <TextReveal delay={0.55}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <MagneticButton strength={0.3}>
                  <Link href="/contact">
                    <Button
                      variant="primary"
                      size="lg"
                      className="font-medium tracking-wider uppercase text-xs gap-2 py-4 px-8 shadow-card"
                    >
                      <span>Build Your Project</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </MagneticButton>

                <MagneticButton strength={0.2}>
                  <Link href="/work">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="font-mono text-xs uppercase gap-2 py-4 px-7 border-border hover:border-charcoal/40"
                    >
                      <span>Explore Our Work</span>
                      <ArrowUpRight className="h-4 w-4 text-charcoal-50" />
                    </Button>
                  </Link>
                </MagneticButton>
              </div>
            </TextReveal>

            {/* Service Capabilities Coordinates Strip */}
            <TextReveal delay={0.7}>
              <div className="pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs font-mono">
                <div>
                  <span className="text-charcoal-50 block uppercase text-[10px] tracking-wider mb-1">
                    01 / Architecture
                  </span>
                  <span className="text-charcoal font-semibold text-xs sm:text-sm">
                    Next.js 15 • Micro-Services
                  </span>
                </div>
                <div>
                  <span className="text-charcoal-50 block uppercase text-[10px] tracking-wider mb-1">
                    02 / Applied AI
                  </span>
                  <span className="text-charcoal font-semibold text-xs sm:text-sm">
                    Autonomous Agent Swarms
                  </span>
                </div>
                <div>
                  <span className="text-charcoal-50 block uppercase text-[10px] tracking-wider mb-1">
                    03 / Operational ERP
                  </span>
                  <span className="text-burnt font-semibold text-xs sm:text-sm">
                    Sub-Second Ledger Sync
                  </span>
                </div>
              </div>
            </TextReveal>
          </div>

          {/* Right Column: Custom 3D Modular Sculpture with Architectural Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-border bg-surface p-2 sm:p-4 shadow-card">
              {/* Corner Architectural Crop Marks */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-charcoal pointer-events-none" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-charcoal pointer-events-none" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-charcoal pointer-events-none" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-charcoal pointer-events-none" />

              {/* R3F 3D Canvas */}
              <HeroSculpture />

              <div className="p-3 border-t border-border/70 bg-sand-50/70 flex items-center justify-between text-[11px] font-mono text-charcoal-50">
                <div className="flex items-center gap-2">
                  <ModularBlocks size="xs" variant="indicator" activeBlock={2} />
                  <span className="truncate">FIG 01: MODULAR COMPONENT MATRIX</span>
                </div>
                <span className="text-burnt shrink-0 font-medium">[TACTILE 3D]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
