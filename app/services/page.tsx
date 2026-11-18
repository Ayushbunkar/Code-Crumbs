"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionIndexBadge, ModularBlocks } from "@/components/ui/modular-blocks";
import { ServicesSculpture } from "@/components/3d/services-sculpture";
import { fullServicesCatalog, ServiceDetail } from "@/data/services";
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  LifeBuoy,
  ChevronRight,
  Terminal,
} from "lucide-react";

/**
 * Service Schematic Visual Component
 * Renders technical architectural visuals tailored to each service type
 */
function ServiceVisual({ service }: { service: ServiceDetail }) {
  if (service.visualType === "node-pipeline") {
    return (
      <div className="p-6 bg-charcoal text-white border border-charcoal-200 relative overflow-hidden space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
          <span className="text-burnt uppercase flex items-center gap-1.5">
            <Cpu className="h-3.5 w-3.5" />
            <span>Node Execution Graph</span>
          </span>
          <span className="text-muted-foreground">[STREAMING]</span>
        </div>
        <div className="space-y-3 font-mono text-xs">
          <div className="p-2.5 bg-charcoal-950 border border-white/10 flex items-center justify-between">
            <span className="text-white/80">01 / Ingestion & Embedding</span>
            <span className="text-emerald-400">200 OK</span>
          </div>
          <div className="h-4 w-[1px] bg-burnt mx-auto" />
          <div className="p-2.5 bg-charcoal-950 border border-burnt/50 text-burnt flex items-center justify-between">
            <span>02 / Consensus Verification</span>
            <span className="animate-pulse">Active Node</span>
          </div>
          <div className="h-4 w-[1px] bg-burnt mx-auto" />
          <div className="p-2.5 bg-charcoal-950 border border-white/10 flex items-center justify-between">
            <span className="text-white/80">03 / Schema Validated Output</span>
            <span className="text-white/40">Zod Strict</span>
          </div>
        </div>
        <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-charcoal-50 border-t border-white/10">
          <span>Latency: P99 &lt;40ms</span>
          <span>Zero Hallucination Guard</span>
        </div>
      </div>
    );
  }

  if (service.visualType === "infra-topology") {
    return (
      <div className="p-6 bg-charcoal text-white border border-charcoal-200 relative overflow-hidden space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
          <span className="text-burnt uppercase flex items-center gap-1.5">
            <Database className="h-3.5 w-3.5" />
            <span>Global Edge Infrastructure</span>
          </span>
          <span className="text-emerald-400 font-semibold">[99.99% SLA]</span>
        </div>
        <div className="grid grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-3 bg-charcoal-950 border border-white/10 space-y-1">
            <span className="text-white/40 text-[10px] uppercase block">Edge Router</span>
            <span className="text-white font-medium">Cloudflare Anycast</span>
          </div>
          <div className="p-3 bg-charcoal-950 border border-white/10 space-y-1">
            <span className="text-white/40 text-[10px] uppercase block">Serverless Core</span>
            <span className="text-white font-medium">Next.js Edge Runtime</span>
          </div>
          <div className="p-3 bg-charcoal-950 border border-white/10 space-y-1">
            <span className="text-white/40 text-[10px] uppercase block">Cache Layer</span>
            <span className="text-white font-medium">Redis Cluster</span>
          </div>
          <div className="p-3 bg-charcoal-950 border border-white/10 space-y-1">
            <span className="text-white/40 text-[10px] uppercase block">Database Pool</span>
            <span className="text-white font-medium">PostgreSQL ACID</span>
          </div>
        </div>
        <div className="p-2.5 bg-sand-200/10 border border-border/20 text-[11px] font-mono text-charcoal-50 flex items-center justify-between">
          <span>Failover Redundancy:</span>
          <span className="text-burnt">Automated Multi-Region</span>
        </div>
      </div>
    );
  }

  if (service.visualType === "support-matrix") {
    return (
      <div className="p-6 bg-surface border border-border space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-mono">
          <span className="text-burnt uppercase flex items-center gap-1.5 font-semibold">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Service Level Architecture</span>
          </span>
          <Badge variant="burnt" className="text-[10px]">Active Retainer</Badge>
        </div>
        <div className="space-y-2 text-xs font-mono">
          <div className="p-2 bg-sand-50 border border-border flex items-center justify-between">
            <span className="text-charcoal">Framework Security Patches</span>
            <span className="text-emerald-600 font-semibold">&lt;24h Turnaround</span>
          </div>
          <div className="p-2 bg-sand-50 border border-border flex items-center justify-between">
            <span className="text-charcoal">Continuous Monitoring Interval</span>
            <span className="text-charcoal font-semibold">60s Probes</span>
          </div>
          <div className="p-2 bg-sand-50 border border-border flex items-center justify-between">
            <span className="text-charcoal">Direct Principal Access</span>
            <span className="text-burnt font-semibold">Included</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border text-center font-mono">
          {service.metrics.map((m) => (
            <div key={m.label} className="p-2 bg-sand-100/60 border border-border">
              <span className="text-xs font-bold text-charcoal block">{m.value}</span>
              <span className="text-[9px] uppercase text-charcoal-50 block truncate">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default: UI & Architecture Blueprint
  return (
    <div className="p-6 bg-sand-50 border border-border space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-mono">
        <span className="text-burnt uppercase flex items-center gap-1.5 font-semibold">
          <Layers className="h-3.5 w-3.5" />
          <span>Architecture Schematic</span>
        </span>
        <span className="text-charcoal-50">[MODULAR SYSTEM]</span>
      </div>

      <div className="p-4 bg-surface border border-border/80 space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between text-charcoal-50 border-b border-border/40 pb-2">
          <span>LAYER 01: Presentation UI</span>
          <span className="text-charcoal font-semibold">Next.js 15 App Router</span>
        </div>
        <div className="flex items-center justify-between text-charcoal-50 border-b border-border/40 pb-2">
          <span>LAYER 02: Design Tokens</span>
          <span className="text-charcoal font-semibold">Tailwind + Radix Primitives</span>
        </div>
        <div className="flex items-center justify-between text-charcoal-50">
          <span>LAYER 03: Data Contracts</span>
          <span className="text-charcoal font-semibold">TypeScript Strict + Zod</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center font-mono">
        {service.metrics.map((m) => (
          <div key={m.label} className="p-2 bg-surface border border-border">
            <span className="text-sm font-serif font-semibold text-charcoal block">{m.value}</span>
            <span className="text-[9px] uppercase text-charcoal-50 block truncate">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? fullServicesCatalog
      : fullServicesCatalog.filter((c) => c.slug === activeCategory);

  return (
    <div className="w-full">
      {/* Editorial Header with Asymmetric 3D Capability Prism */}
      <Section spacing="hero" withGrid divider="bottom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography, Lead & Coordinates */}
          <div className="lg:col-span-7 space-y-6">
            <SectionIndexBadge number="01" label="Complete Practice Index & Specifications" />
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal tracking-tight leading-[1.06]">
              Disciplines engineered for <span className="italic font-normal text-burnt">uncompromised</span> impact.
            </h1>
            <p className="editorial-lead text-charcoal-50 max-w-2xl text-base sm:text-lg leading-relaxed">
              From zero-to-one product development and autonomous AI agents to bespoke web flagships, resilient cloud backends, and ongoing technical advisory.
            </p>

            {/* Architectural Telemetry Strip */}
            <div className="pt-6 border-t border-border grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div>
                <span className="text-charcoal-50 block uppercase text-[10px] tracking-wider mb-1">
                  01 / Practice Scope
                </span>
                <span className="text-charcoal font-semibold text-xs sm:text-sm">
                  5 Engineering Categories
                </span>
              </div>
              <div>
                <span className="text-charcoal-50 block uppercase text-[10px] tracking-wider mb-1">
                  02 / Delivery Catalog
                </span>
                <span className="text-charcoal font-semibold text-xs sm:text-sm">
                  28 Verified Services
                </span>
              </div>
              <div>
                <span className="text-charcoal-50 block uppercase text-[10px] tracking-wider mb-1">
                  03 / Execution
                </span>
                <span className="text-burnt font-semibold text-xs sm:text-sm">
                  Partner-Led Architecture
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Framed 3D Capability Sculpture */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-border bg-surface p-2 sm:p-4 shadow-card">
              {/* Corner Architectural Crop Marks */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-charcoal pointer-events-none" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-charcoal pointer-events-none" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-charcoal pointer-events-none" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-charcoal pointer-events-none" />

              {/* R3F 3D Canvas */}
              <ServicesSculpture />

              <div className="p-3 border-t border-border/70 bg-sand-50/70 flex items-center justify-between text-[11px] font-mono text-charcoal-50">
                <div className="flex items-center gap-2">
                  <ModularBlocks size="xs" variant="indicator" activeBlock={3} />
                  <span className="truncate">FIG 03: CAPABILITY ARCHITECTURE PRISM</span>
                </div>
                <span className="text-burnt shrink-0 font-medium">[TACTILE 3D]</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sticky Category Jump Navigation */}
      <div className="sticky top-20 z-40 bg-sand/95 backdrop-blur-md border-b border-border py-4">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 text-xs font-mono uppercase transition-all ${
                activeCategory === "all"
                  ? "bg-charcoal text-white font-semibold"
                  : "bg-surface border border-border text-charcoal-50 hover:text-charcoal"
              }`}
            >
              All Disciplines (28 Services)
            </button>

            {fullServicesCatalog.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-3 py-1.5 text-xs font-mono uppercase transition-all ${
                  activeCategory === cat.slug
                    ? "bg-charcoal text-white font-semibold"
                    : "bg-surface border border-border text-charcoal-50 hover:text-charcoal"
                }`}
              >
                {cat.code}. {cat.name} ({cat.services.length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Comprehensive Services Detailed Layouts */}
      <Section spacing="lg" theme="sand">
        <div className="space-y-24">
          {filteredCategories.map((category) => (
            <div key={category.slug} id={category.slug} className="space-y-12">
              {/* Category Header */}
              <div className="border-b-2 border-charcoal pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase text-burnt tracking-widest block font-semibold mb-1">
                    Category {category.code}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
                    {category.name}
                  </h2>
                </div>
                <p className="text-sm font-mono text-charcoal-50 max-w-md">
                  {category.tagline}
                </p>
              </div>

              {/* Detailed Service Cards */}
              <div className="space-y-12">
                {category.services.map((service, index) => (
                  <div
                    key={service.id}
                    id={service.id}
                    className="border border-border bg-surface p-8 sm:p-12 shadow-card transition-all hover:border-charcoal/40"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                      {/* Left Column: Scope, Problem, Use Cases & CTA */}
                      <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs uppercase tracking-widest text-burnt font-semibold">
                            Discipline {category.code} • 0{index + 1}
                          </span>
                          <span className="text-charcoal-50">•</span>
                          <Badge variant="outline" className="text-[10px] font-mono">
                            {service.category}
                          </Badge>
                        </div>

                        <div>
                          <h3 className="text-2xl sm:text-3xl font-serif text-charcoal tracking-tight">
                            {service.name}
                          </h3>
                          <p className="text-sm text-charcoal font-medium mt-1">
                            {service.lead}
                          </p>
                        </div>

                        <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Business Problem Solved Callout */}
                        <div className="p-4 bg-sand-50 border-l-2 border-burnt border-y border-r border-border/80 space-y-1.5">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-burnt font-semibold flex items-center gap-1.5">
                            <AlertCircle className="h-3.5 w-3.5" />
                            <span>Business Problem Solved</span>
                          </span>
                          <p className="text-xs text-charcoal/80 leading-relaxed">
                            {service.problemSolved}
                          </p>
                        </div>

                        {/* Suitable Use Cases */}
                        <div className="space-y-2">
                          <span className="text-xs font-mono uppercase tracking-wider text-charcoal block font-semibold">
                            Suitable Business Use Cases
                          </span>
                          <ul className="space-y-1.5">
                            {service.useCases.map((uc) => (
                              <li key={uc} className="flex items-start gap-2 text-xs text-charcoal-50">
                                <span className="text-burnt font-mono mt-0.5">•</span>
                                <span>{uc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technology Stack Pills */}
                        <div className="space-y-2 pt-2">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-50 block">
                            Production Technologies
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {service.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-[11px] font-mono bg-sand-100 border border-border px-2.5 py-1 text-charcoal"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Direct CTA: Preselects this exact service on /contact */}
                        <div className="pt-6 border-t border-border">
                          <Link
                            href={`/contact?service=${encodeURIComponent(
                              service.name
                            )}&category=${encodeURIComponent(service.category)}`}
                          >
                            <Button
                              variant="primary"
                              size="lg"
                              className="font-mono text-xs uppercase tracking-wider gap-2 shadow-subtle"
                            >
                              <span>Select {service.name} & Build Project</span>
                              <ArrowUpRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>

                      {/* Right Column: Architectural Visual & What Gets Delivered */}
                      <div className="lg:col-span-5 space-y-6">
                        {/* Architectural Visual */}
                        <ServiceVisual service={service} />

                        {/* What Gets Delivered Checklist */}
                        <div className="p-6 bg-sand-50/60 border border-border space-y-3">
                          <span className="text-xs font-mono uppercase tracking-wider text-charcoal block font-semibold">
                            What Gets Delivered
                          </span>
                          <ul className="space-y-2">
                            {service.deliverables.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-xs text-charcoal/80"
                              >
                                <CheckCircle2 className="h-4 w-4 text-burnt shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom Custom Enterprise Architecture Banner */}
          <div className="p-8 sm:p-14 border border-border bg-charcoal text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono uppercase text-burnt tracking-widest block font-semibold">
                Multi-Discipline Deployments
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-white">
                Require a bespoke cross-discipline engagement?
              </h3>
              <p className="text-sm text-charcoal-50 leading-relaxed">
                Many client partners combine Web Flagships, Custom AI Pipelines, and Database Architecture into a single unified engineering sprint.
              </p>
            </div>
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="uppercase tracking-wider text-xs font-semibold gap-2 whitespace-nowrap py-4 px-8"
              >
                <span>BUILD YOUR PROJECT</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
