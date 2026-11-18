"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SectionIndexBadge, ModularBlocks } from "@/components/ui/modular-blocks";
import { ArrowUpRight, Check, Code2, Cpu, Database, Globe, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

interface CapabilityCategory {
  id: string;
  code: string;
  title: string;
  lead: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  stack: string[];
  metrics: string;
  timeline: string;
}

const capabilities: CapabilityCategory[] = [
  {
    id: "product-development",
    code: "CAP-01",
    title: "Product Development",
    lead: "SaaS architecture, MVP acceleration, and custom web applications.",
    description:
      "From zero-to-one software architecture to scalable multi-tenant platforms. We design database schemas, tenant isolation boundaries, and production frontends that transition smoothly to your internal teams.",
    icon: Code2,
    deliverables: [
      "Multi-tenant SaaS architecture",
      "Interactive MVP in 6–8 weeks",
      "Enterprise ERP & CRM portals",
      "Comprehensive TypeScript codebase",
    ],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    metrics: "99.9% Uptime Baseline",
    timeline: "6–12 Weeks Typical",
  },
  {
    id: "ai-automation",
    code: "CAP-02",
    title: "AI & Automation",
    lead: "Autonomous multi-agent swarms, RAG document intelligence, and OCR.",
    description:
      "Custom generative AI workflows and deterministic business process automation. We build verifiable agent graphs with human-in-the-loop approvals, vector search retrieval, and enterprise telemetry.",
    icon: Cpu,
    deliverables: [
      "Multi-agent task orchestrators",
      "Hybrid RAG document pipelines",
      "Intelligent lead & ticket triage",
      "Deterministic fallback guards",
    ],
    stack: ["LangGraph", "FastAPI", "Python", "pgvector", "Claude / OpenAI"],
    metrics: "78% Manual Effort Reduction",
    timeline: "4–8 Weeks Typical",
  },
  {
    id: "web-systems",
    code: "CAP-03",
    title: "Web & Digital Systems",
    lead: "High-performance digital products, design systems, and responsive interfaces.",
    description:
      "Bespoke digital platforms engineered with editorial Swiss grid precision. Zero template bloat, sub-second Core Web Vitals, and smooth micro-interactions that communicate uncompromising craftsmanship.",
    icon: Globe,
    deliverables: [
      "Design systems & component tokens",
      "High-conversion marketing engines",
      "Data-dense analytics dashboards",
      "WCAG AA accessible interfaces",
    ],
    stack: ["React 19", "Three.js / R3F", "Framer Motion", "GSAP", "Lenis"],
    metrics: "Sub-Second LCP Score",
    timeline: "3–6 Weeks Typical",
  },
  {
    id: "backend-infrastructure",
    code: "CAP-04",
    title: "Backend & Infrastructure",
    lead: "Distributed APIs, database tuning, authentication, and cloud deployment.",
    description:
      "Robust server architecture built to survive real traffic spikes. We build resilient asynchronous event queues, automated CI/CD deployment pipelines, and zero-trust authentication policies.",
    icon: Database,
    deliverables: [
      "High-throughput REST & GraphQL APIs",
      "PostgreSQL indexing & query optimization",
      "Dockerized microservice topologies",
      "Multi-region CDN & edge routing",
    ],
    stack: ["Node.js", "NestJS", "Redis", "Docker", "AWS / Vercel"],
    metrics: "<80ms API Response P95",
    timeline: "4–8 Weeks Typical",
  },
  {
    id: "ongoing-support",
    code: "CAP-05",
    title: "Ongoing Evolution & Support",
    lead: "Continuous SLA maintenance, security updates, and performance tuning.",
    description:
      "Technical stewardship that ensures your software remains secure, compliant, and continuously evolving alongside market requirements with guaranteed SLA response times.",
    icon: Wrench,
    deliverables: [
      "24/7 uptime & latency monitoring",
      "Automated vulnerability patching",
      "Iterative monthly feature sprints",
      "Dedicated partner technical reviews",
    ],
    stack: ["Datadog", "Sentry", "GitHub Actions", "Terraform"],
    metrics: "<2hr Urgent Response SLA",
    timeline: "Monthly Dedicated Retainer",
  },
];

export function ServicesOverview() {
  const [activeCategory, setActiveCategory] = useState<string>("product-development");

  const current = capabilities.find((c) => c.id === activeCategory) || capabilities[0];
  const IconComponent = current.icon;

  return (
    <Section spacing="lg" theme="sand" divider="bottom">
      <div className="space-y-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div className="space-y-3">
            <SectionIndexBadge number="01" label="Core Disciplines & Specifications" />
            <h2 className="text-3xl sm:text-5xl font-serif text-charcoal tracking-tight leading-tight">
              Engineering Capability Matrix
            </h2>
            <p className="text-sm text-charcoal-50 max-w-2xl leading-relaxed">
              Decoupled digital engineering disciplines structured for mission-critical reliability, modular scalability, and long-term production longevity.
            </p>
          </div>
          <Link href="/services">
            <Button variant="secondary" size="sm" className="font-mono text-xs gap-1.5 shrink-0">
              <span>View All 28 Services</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        {/* 12-Column Capability Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Capability Selector Column (7 Cols) */}
          <div className="lg:col-span-7 border border-border bg-surface divide-y divide-border">
            {capabilities.map((cap, idx) => {
              const isSelected = activeCategory === cap.id;
              const RowIcon = cap.icon;

              return (
                <div
                  key={cap.id}
                  onClick={() => setActiveCategory(cap.id)}
                  onMouseEnter={() => setActiveCategory(cap.id)}
                  className={cn(
                    "p-5 sm:p-6 transition-all cursor-pointer relative group",
                    isSelected ? "bg-sand-50/90" : "hover:bg-sand-50/50"
                  )}
                >
                  {/* Left Active Accent Indicator */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-burnt" />
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono text-charcoal-50 uppercase tracking-wider font-semibold">
                          {cap.code}
                        </span>
                        <span className="text-xs text-charcoal-50">•</span>
                        <span className="text-[11px] font-mono text-burnt font-semibold">
                          {cap.metrics}
                        </span>
                      </div>
                      <h3
                        className={cn(
                          "text-xl sm:text-2xl font-serif transition-colors",
                          isSelected ? "text-burnt font-semibold" : "text-charcoal group-hover:text-charcoal"
                        )}
                      >
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal-50 leading-relaxed max-w-xl">
                        {cap.lead}
                      </p>
                    </div>

                    <div className="flex flex-col items-end justify-between h-full shrink-0">
                      <div
                        className={cn(
                          "h-8 w-8 rounded-none border flex items-center justify-center transition-colors",
                          isSelected
                            ? "bg-burnt text-white border-burnt"
                            : "border-border text-charcoal-50 group-hover:border-charcoal group-hover:text-charcoal"
                        )}
                      >
                        <RowIcon className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] font-mono text-charcoal-50 mt-4 hidden sm:block">
                        {cap.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Dynamic Deliverables & Technical Detail Specification Panel (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24 border border-border bg-surface p-6 sm:p-8 space-y-6 shadow-card">
            {/* Top Specification Metadata Header */}
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div className="flex items-center gap-2">
                <ModularBlocks size="xs" variant="indicator" activeBlock={3} />
                <span className="text-xs font-mono uppercase font-semibold text-charcoal">
                  {current.code} Specification
                </span>
              </div>
              <span className="text-[11px] font-mono text-burnt font-semibold uppercase">
                {current.metrics}
              </span>
            </div>

            {/* Title & Detailed Scope Description */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <IconComponent className="h-5 w-5 text-burnt" />
                <h4 className="text-2xl font-serif text-charcoal">{current.title}</h4>
              </div>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Concrete Deliverables Checklist */}
            <div className="space-y-2.5 pt-2 border-t border-border/80">
              <span className="text-[11px] font-mono uppercase text-burnt font-bold tracking-wider block">
                Deliverables &amp; Output Artifacts
              </span>
              <ul className="space-y-2">
                {current.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-charcoal">
                    <Check className="h-3.5 w-3.5 text-burnt shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack Tags */}
            <div className="space-y-2 pt-2 border-t border-border/80">
              <span className="text-[11px] font-mono uppercase text-charcoal-50 font-bold tracking-wider block">
                Target Technologies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {current.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 bg-sand-100 border border-border text-charcoal font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Call To Action */}
            <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
              <Link href={`/contact?preselect=${current.id}`} className="w-full">
                <Button variant="primary" size="sm" className="w-full justify-between text-xs font-mono uppercase py-4">
                  <span>Configure {current.title}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
