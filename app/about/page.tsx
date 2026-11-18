import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Compass,
  Shield,
  Zap,
  Terminal,
  Cpu,
  Layers,
  Code2,
  CheckCircle2,
  Check,
  Building,
  Clock,
  Sparkles,
  GitBranch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About the Studio — Code&Crumbs",
  description:
    "We combine engineering, product thinking and AI capabilities to build useful digital products.",
};

export default function AboutPage() {
  const differentiators = [
    {
      kicker: "01 / Senior Hands Only",
      title: "No Junior Hand-Offs or Sales Padding",
      desc: "At traditional agencies, senior partners close the deal while inexperienced junior developers build your codebase. At Code&Crumbs, every architectural decision, schema contract, and line of code is authored by senior software engineers with deep production tenure.",
    },
    {
      kicker: "02 / Zero Vanity Bloat",
      title: "Tactile Product Thinking Over Purple AI Gradients",
      desc: "We reject the sea of generic AI illustrations, glowing purple blobs, and repetitive template sections. We design through Swiss typographic discipline, generous whitespace, architectural grid alignment, and real interactive 3D objects that explain technical concepts.",
    },
    {
      kicker: "03 / Deterministic Velocity",
      title: "Contract-Driven Type Safety from Day One",
      desc: "By combining strict TypeScript, Zod schema validation, and Next.js 15 App Router architecture, we eliminate an entire class of runtime bugs before they reach staging. Features are shipped in predictable, weekly demonstrable milestones.",
    },
    {
      kicker: "04 / Full IP Hand-off",
      title: "Zero Vendor Lock-in & Complete Code Ownership",
      desc: "All source code, Docker configs, CI/CD pipelines, and design system tokens are transferred with 100% intellectual property ownership under your team's Git repositories upon project completion.",
    },
  ];

  const capabilities = [
    {
      category: "Product Development",
      items: ["SaaS Architecture", "Production MVPs", "Custom Web Applications", "Internal Enterprise Portals", "ERP & CRM Systems"],
    },
    {
      category: "AI & Workflow Automation",
      items: ["Multi-Agent Swarms", "Deterministic Business Workflows", "Document OCR Intelligence", "RAG & Vector Retrieval", "Conversational AI Simulators"],
    },
    {
      category: "Web & Spatial Interfaces",
      items: ["High-Density Data Consoles", "Design System Engineering", "React Three Fiber (R3F) 3D", "Kinetic Scroll Storytelling", "WCAG 2.1 AA Accessibility"],
    },
    {
      category: "Backend & Cloud Architecture",
      items: ["High-Throughput APIs (FastAPI & Node)", "PostgreSQL Partitioning", "Redis Distributed Locks", "Docker & Edge Gateways", "Zero-Downtime Deployment"],
    },
  ];

  const principles = [
    {
      title: "Software as Primary Brand Asset",
      desc: "For modern companies, the interface IS the brand. If your dashboard lags, your product feels unreliable. We engineer high frame-rate ergonomics that build institutional trust.",
      icon: Terminal,
    },
    {
      title: "Simplicity in Complexity",
      desc: "High data density does not require visual chaos. We organize thousands of real-time telemetry points into clear, intuitive tabular matrices and ergonomic controls.",
      icon: Layers,
    },
    {
      title: "Deterministic AI Integrations",
      desc: "AI features must be auditable, verifiable, and bounded. We design strict verification layers that eliminate hallucination before tokens reach client interfaces.",
      icon: Cpu,
    },
    {
      title: "Radical Transparency",
      desc: "We work directly with founders and CTOs in shared Slack channels and Git repositories. You see real progress every week—never polished slide decks masking delayed delivery.",
      icon: Shield,
    },
  ];

  return (
    <div className="w-full">
      {/* 01. Hero Header - Exact Required Positioning */}
      <Section spacing="hero" withGrid divider="bottom">
        <div className="max-w-4xl space-y-6">
          <Badge variant="burnt" withDot className="font-mono text-xs">
            Agency Positioning &amp; Identity
          </Badge>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal tracking-tight leading-[1.08]">
            We combine engineering, product thinking and AI capabilities to build{" "}
            <span className="italic font-normal text-burnt">useful digital products.</span>
          </h1>
          <p className="editorial-lead text-charcoal-50 max-w-2xl">
            Code&amp;Crumbs is an independent technology and product development agency. We architect intelligent software, scalable web systems, and high-performance digital platforms for ambitious businesses.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="gap-2 text-xs font-mono uppercase tracking-wider px-8">
                <span>Build Your Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/process">
              <Button variant="outline" size="lg" className="gap-2 text-xs font-mono uppercase text-charcoal-50 hover:text-charcoal">
                <span>Explore Our Process</span>
                <GitBranch className="h-4 w-4 text-burnt" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* 02. Agency Introduction & Philosophy */}
      <Section spacing="lg" theme="sand" divider="bottom">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase text-burnt tracking-widest font-semibold block">
                01 / Studio Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal tracking-tight">
                Crafted for businesses that prioritize engineering substance.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans">
              <p>
                Too much modern software is built on fragile scaffolding: hastily wired templates, unvetted AI wrappers, and generic purple gradients that look identical to every competitor.
              </p>
              <p>
                Code&amp;Crumbs was formed by senior software engineers who believe digital craft matters. We operate at the intersection of mathematical systems design and tactile visual hierarchy. When you commission Code&amp;Crumbs, you are engaging a partner who thinks deeply about data structures, latency budgets, state ergonomics, and long-term maintainability.
              </p>
              <div className="p-4 bg-surface border border-border mt-4 text-xs font-mono text-charcoal flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-burnt shrink-0" />
                <span>Zero outsourcing. Every line authored by verified senior product engineers.</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 03. What Makes Our Engineering Approach Different */}
      <Section spacing="lg" theme="surface" divider="bottom">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase text-burnt tracking-widest font-semibold block">
              02 / The Differentiator
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal tracking-tight">
              Why leading teams choose Code&amp;Crumbs
            </h2>
            <p className="text-sm text-charcoal-50 font-sans">
              How our delivery model departs fundamentally from traditional design shops and legacy dev boutiques.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {differentiators.map((diff) => (
              <div
                key={diff.kicker}
                className="p-6 sm:p-8 border border-border bg-sand-50/50 space-y-3 hover:border-burnt/60 transition-colors"
              >
                <span className="text-[10px] font-mono uppercase text-burnt font-bold tracking-widest block">
                  {diff.kicker}
                </span>
                <h3 className="font-serif text-xl text-charcoal font-medium">
                  {diff.title}
                </h3>
                <p className="text-xs text-charcoal-50 leading-relaxed font-sans">
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 04. Capabilities Overview */}
      <Section spacing="lg" theme="sand" divider="bottom">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-burnt tracking-widest font-semibold block mb-1">
                03 / Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal">
                End-to-End Product Capabilities
              </h2>
            </div>
            <Link href="/services">
              <Button variant="outline" size="sm" className="font-mono text-xs gap-1.5">
                <span>View Complete Service Index</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-burnt" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <Card key={cap.category} variant="paper" className="p-6">
                <span className="text-[11px] font-mono uppercase text-burnt font-semibold tracking-wider block mb-3 pb-2 border-b border-border">
                  {cap.category}
                </span>
                <ul className="space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="text-xs text-charcoal-50 flex items-start gap-1.5 font-sans">
                      <Check className="h-3 w-3 text-burnt shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 05. Development Principles */}
      <Section spacing="lg" theme="surface" divider="bottom">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase text-burnt tracking-widest font-semibold block">
              04 / Engineering Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal">
              Core Principles That Guide Every Line of Code
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="p-6 border border-border bg-sand-50/40 space-y-3">
                  <div className="p-2.5 bg-surface border border-border w-fit text-burnt">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-lg text-charcoal font-medium">
                    {p.title}
                  </h3>
                  <p className="text-xs text-charcoal-50 leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 06. Contact CTA */}
      <Section spacing="md" theme="sand">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="burnt" withDot className="font-mono text-xs">
            Start Your Engagement
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-serif text-charcoal tracking-tight">
            Ready to build what moves your business forward?
          </h2>
          <p className="editorial-lead text-charcoal-50 max-w-xl mx-auto">
            Configure your technical scope using our interactive project builder or connect directly with our software architects.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="gap-2 text-xs font-mono uppercase tracking-wider px-8"
              >
                <span>Build Your Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
