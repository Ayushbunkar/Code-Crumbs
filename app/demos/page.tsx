import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionIndexBadge, ModularBlocks } from "@/components/ui/modular-blocks";
import { DemosSculpture } from "@/components/3d/demos-sculpture";
import { demosData } from "@/data/demos";
import { ArrowUpRight, Play, Terminal, Cpu, Database, Sparkles, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Live Working Demos & Technical Prototypes | Code&Crumbs",
  description:
    "Interactive, functioning software demonstrations built by Code&Crumbs: SaaS Telemetry Dashboard, AI Workflow Automation, and ERP Operations Matrix.",
};

export default function DemosPage() {
  const iconMap: Record<string, React.ElementType> = {
    "saas-dashboard": Database,
    "ai-automation": Cpu,
    "erp-workflow": Terminal,
  };

  return (
    <div className="w-full">
      {/* Editorial Header with Asymmetric 3D Runtime Engine */}
      <Section spacing="hero" withGrid divider="bottom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography, Lead & Telemetry */}
          <div className="lg:col-span-7 space-y-6">
            <SectionIndexBadge number="03" label="Interactive Working Prototypes & Simulations" />
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal tracking-tight leading-[1.08]">
              Functional proof of <span className="italic font-normal text-burnt">craft</span> &amp; architecture.
            </h1>
            <p className="editorial-lead text-charcoal-50 max-w-2xl text-base sm:text-lg leading-relaxed">
              We don&apos;t just show static mockups. Explore real interactive mini-applications engineered to demonstrate real-world UI responsiveness, data density, and state management.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="text-xs font-mono bg-burnt/10 text-burnt border border-burnt/30 px-3 py-1 font-semibold flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-burnt animate-pulse" />
                Deterministic Simulations &bull; Real Interaction State
              </span>
            </div>

            {/* Architectural Telemetry Strip */}
            <div className="pt-6 border-t border-border grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div>
                <span className="text-charcoal-50 block uppercase text-[10px] tracking-wider mb-1">
                  01 / SaaS Console
                </span>
                <span className="text-charcoal font-semibold text-xs sm:text-sm">
                  Live MRR &amp; Customer CRUD
                </span>
              </div>
              <div>
                <span className="text-charcoal-50 block uppercase text-[10px] tracking-wider mb-1">
                  02 / AI Automation
                </span>
                <span className="text-charcoal font-semibold text-xs sm:text-sm">
                  5-Node Graph Pipeline
                </span>
              </div>
              <div>
                <span className="text-charcoal-50 block uppercase text-[10px] tracking-wider mb-1">
                  03 / ERP Matrix
                </span>
                <span className="text-burnt font-semibold text-xs sm:text-sm">
                  Inventory State Machine
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Framed 3D Runtime Sculpture */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-border bg-surface p-2 sm:p-4 shadow-card">
              {/* Corner Architectural Crop Marks */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-charcoal pointer-events-none" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-charcoal pointer-events-none" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-charcoal pointer-events-none" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-charcoal pointer-events-none" />

              {/* R3F 3D Canvas */}
              <DemosSculpture />

              <div className="p-3 border-t border-border/70 bg-sand-50/70 flex items-center justify-between text-[11px] font-mono text-charcoal-50">
                <div className="flex items-center gap-2">
                  <ModularBlocks size="xs" variant="indicator" activeBlock={3} />
                  <span className="truncate">FIG 04: RUNTIME EXECUTION MATRIX</span>
                </div>
                <span className="text-burnt shrink-0 font-medium">[TACTILE 3D]</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Demos Grid */}
      <Section spacing="lg" theme="sand" divider="bottom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demosData.map((demo) => {
            const Icon = iconMap[demo.id] || Terminal;
            return (
              <Card key={demo.id} variant="paper" className="flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-border">
                    <div className="p-2 bg-sand-100 border border-border text-charcoal">
                      <Icon className="h-5 w-5 text-burnt" />
                    </div>
                    <Badge variant="outline" className="text-[11px] font-mono">
                      {demo.category}
                    </Badge>
                  </div>

                  <CardHeader className="pt-6">
                    <CardTitle className="text-2xl text-charcoal group-hover:text-burnt transition-colors">
                      {demo.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-charcoal-50 pt-1">
                      {demo.tagline}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-xs text-charcoal/80 leading-relaxed font-sans">
                      {demo.description}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-[11px] uppercase font-mono tracking-wider text-charcoal block font-semibold">
                        Demonstrated Capabilities
                      </span>
                      <ul className="space-y-1">
                        {demo.features.map((f) => (
                          <li key={f} className="text-xs text-charcoal-50 flex items-center gap-2 font-mono">
                            <span className="h-1 w-1 bg-burnt rounded-full shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="pt-6 border-t border-border">
                  <Link href={`/demos/${demo.slug}`} className="w-full">
                    <Button variant="primary" className="w-full justify-between gap-2 text-xs font-mono uppercase">
                      <span>Launch Interactive Demo</span>
                      <Play className="h-3.5 w-3.5 fill-current" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Mandatory Discuss Similar Project Section */}
      <Section spacing="md" theme="surface">
        <div className="max-w-5xl mx-auto p-8 sm:p-12 border border-border bg-sand-50/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase text-burnt font-semibold tracking-wider block">
              Direct Technical Advisory
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-charcoal">
              Need a bespoke system engineered for your business?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-50 leading-relaxed font-sans">
              From high-density operational platforms to deterministic multi-agent pipelines, Code&amp;Crumbs builds production software designed for high-conviction scale.
            </p>
          </div>

          <div className="shrink-0">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="gap-2 text-xs font-mono uppercase tracking-wider px-8">
                <span>Discuss Your Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
