"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";
import { HeroSculpture } from "@/components/3d/hero-sculpture";
import { ArrowUpRight, Compass, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden border-b border-border bg-sand">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-40" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Typography & Magnetic CTAs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Top Status & Practice Indicator */}
            <TextReveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="burnt" withDot className="font-mono text-xs">
                  Creative Software & Technology Agency
                </Badge>
                <span className="hidden sm:inline-block text-xs font-mono text-charcoal-50">
                  [EST. 2024 • SWISS GRID ARCHITECTURE]
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
                Code&Crumbs designs and develops intelligent software, AI-powered products and digital experiences for ambitious businesses.
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

            {/* Engineering Protocol Micro-Strip */}
            <TextReveal delay={0.7}>
              <div className="pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs font-mono">
                <div>
                  <span className="text-charcoal-50 block uppercase text-[10px]">Framework</span>
                  <span className="text-charcoal font-semibold text-xs sm:text-sm">Next.js 15 App Router</span>
                </div>
                <div>
                  <span className="text-charcoal-50 block uppercase text-[10px]">3D Viewport</span>
                  <span className="text-charcoal font-semibold text-xs sm:text-sm">React Three Fiber</span>
                </div>
                <div>
                  <span className="text-charcoal-50 block uppercase text-[10px]">Availability</span>
                  <span className="text-burnt font-semibold text-xs sm:text-sm">Select Q3/Q4 Briefs</span>
                </div>
              </div>
            </TextReveal>
          </div>

          {/* Right Column: Interactive 3D Sculpture */}
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
                <span className="truncate">FIGURE 01: MODULAR COMPONENT MATRIX</span>
                <span className="text-burnt shrink-0">[TACTILE 3D]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
