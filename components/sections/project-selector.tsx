"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Calculator, CheckCircle2 } from "lucide-react";

export function ProjectSelector() {
  const [selectedType, setSelectedType] = useState<number>(0);
  const [has3D, setHas3D] = useState<boolean>(true);

  const projectTypes = [
    {
      title: "Brand Flagship & Marketing HQ",
      baseDuration: "4 - 6 Weeks",
      features: ["Next.js App Router", "Tailwind Design System", "Editorial CMS", "SEO Perfection"],
    },
    {
      title: "Interactive WebGL 3D Showcase",
      baseDuration: "6 - 8 Weeks",
      features: ["React Three Fiber", "Custom GLSL Shaders", "Mobile Tiering", "Camera Orchestration"],
    },
    {
      title: "Data-Dense SaaS Application",
      baseDuration: "8 - 12 Weeks",
      features: ["Role-Based Access", "TanStack Virtual Tables", "Real-Time Sockets", "Full TypeScript"],
    },
  ];

  const current = projectTypes[selectedType];

  return (
    <Section spacing="lg" theme="sand" divider="bottom">
      <div className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase text-burnt tracking-widest block font-semibold">
            08 / Project Scoping
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
            Interactive Project Scope Estimator
          </h2>
          <p className="editorial-lead text-charcoal-50 text-base sm:text-lg">
            Configure your technical scope to estimate typical sprint timelines and core architectural deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-charcoal-50 block font-semibold">
                Step 1: Choose Primary Project Archetype
              </span>
              <div className="space-y-3">
                {projectTypes.map((type, idx) => (
                  <button
                    key={type.title}
                    type="button"
                    onClick={() => setSelectedType(idx)}
                    className={`w-full p-4 border text-left transition-all flex items-center justify-between ${
                      selectedType === idx
                        ? "border-burnt bg-surface shadow-subtle text-charcoal"
                        : "border-border bg-sand-50/60 hover:bg-surface text-charcoal-50"
                    }`}
                  >
                    <div>
                      <span className="text-sm font-semibold font-serif block">
                        {type.title}
                      </span>
                      <span className="text-xs font-mono text-charcoal-50">
                        Typical Timeline: {type.baseDuration}
                      </span>
                    </div>
                    {selectedType === idx && (
                      <CheckCircle2 className="h-5 w-5 text-burnt shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <span className="text-xs font-mono uppercase text-charcoal-50 block font-semibold mb-3">
                Step 2: Interactive 3D / WebGL Add-on
              </span>
              <button
                type="button"
                onClick={() => setHas3D(!has3D)}
                className={`w-full p-4 border text-left transition-all flex items-center justify-between ${
                  has3D
                    ? "border-burnt bg-surface shadow-subtle text-charcoal"
                    : "border-border bg-sand-50/60 hover:bg-surface text-charcoal-50"
                }`}
              >
                <div>
                  <span className="text-sm font-semibold block">
                    Include Real-Time 3D Product Canvas (R3F)
                  </span>
                  <span className="text-xs font-mono text-charcoal-50">
                    Adds spatial orbital object & hardware-detected mobile shaders
                  </span>
                </div>
                <div className={`h-5 w-5 border flex items-center justify-center ${has3D ? "border-burnt bg-burnt text-white" : "border-border"}`}>
                  {has3D && <CheckCircle2 className="h-4 w-4" />}
                </div>
              </button>
            </div>
          </div>

          {/* Estimate Summary Panel */}
          <div className="lg:col-span-5">
            <Card variant="paper" className="p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-xs font-mono uppercase text-charcoal-50">
                  Estimated Timeline
                </span>
                <Badge variant="burnt" className="text-xs font-mono">
                  {has3D && selectedType !== 1 ? "6 - 10 Weeks" : current.baseDuration}
                </Badge>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-burnt block mb-1">
                  Selected Blueprint
                </span>
                <h3 className="text-xl font-serif text-charcoal">{current.title}</h3>
                <p className="text-xs text-charcoal-50 mt-1">
                  Engineered with Next.js 15, TypeScript strict mode, and full IP handover.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-border">
                <span className="text-[11px] uppercase font-mono tracking-wider text-charcoal-50 block font-semibold">
                  Included Architectural Modules
                </span>
                <ul className="space-y-1.5">
                  {current.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-charcoal/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-burnt shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                  {has3D && (
                    <li className="flex items-center gap-2 text-xs text-charcoal/80 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-burnt shrink-0" />
                      <span>React Three Fiber Canvas Architecture</span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <Link href="/contact" className="block w-full">
                  <Button variant="primary" size="lg" className="w-full uppercase tracking-wider text-xs font-semibold gap-2">
                    <span>BUILD YOUR PROJECT</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
