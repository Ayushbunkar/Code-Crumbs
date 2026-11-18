import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Layout,
  Code2,
  Rocket,
  CheckCircle2,
  FileText,
  Clock,
  Shield,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Development Process — Code&Crumbs",
  description:
    "Our structured four-stage development methodology: Discover, Design, Develop, Deploy. Predictable sprints with deterministic delivery times.",
};

const processStages = [
  {
    step: "01",
    name: "Discover",
    duration: "Sprint 0 • 1–2 Weeks",
    tagline: "Rigorous technical architecture, schema contracts, and scope definition.",
    icon: Compass,
    whatHappens:
      "We conduct an in-depth technical discovery to analyze your business requirements, legacy system boundaries, performance budgets, and database models. We define the concrete architectural blueprint and eliminate ambiguity before any code is written.",
    clientReceives: [
      "System Architecture Specification & Blueprint",
      "Database Schema & Entity Relationship Diagram",
      "Sprint Milestones & Concrete Delivery Schedule",
      "Signed Mutual NDA & IP Security Charter",
    ],
    infoNeeded: [
      "Target business objectives, user workflows & constraints",
      "Existing codebase or API documentation (if replatforming)",
      "Required third-party services & integration endpoints",
      "Designated technical point-of-contact for alignment",
    ],
    howFeedbackWorks:
      "Two 60-minute technical discovery sessions with senior architects, followed by asynchronous review and approval on the architecture blueprint document.",
  },
  {
    step: "02",
    name: "Design",
    duration: "Sprint 1 • 2–3 Weeks",
    tagline: "Design token engineering, editorial hierarchy, and interactive prototypes.",
    icon: Layout,
    whatHappens:
      "We design the tactile visual system, typography scales, and high-density interface components. We prototype core interactive workflows directly in Next.js code to test ergonomic interactions on real devices rather than relying solely on static Figma frames.",
    clientReceives: [
      "Complete Component Design System & Color Tokens",
      "Responsive Desktop & Mobile Layout Ergonomics",
      "Interactive Code Prototypes for Key User Workflows",
      "Spatial 3D Model Wireframes (when applicable)",
    ],
    infoNeeded: [
      "Brand identity assets, guidelines, or typography references",
      "Specific data fields required for tables and forms",
      "Key conversion goals and priority user paths",
      "Accessibility tier requirements (WCAG 2.1 AA default)",
    ],
    howFeedbackWorks:
      "Interactive design walkthrough via screen share, followed by asynchronous comments on Figma and live code prototypes with a 48-hour revision turnaround.",
  },
  {
    step: "03",
    name: "Develop",
    duration: "Sprints 2–6 • 4–8 Weeks",
    tagline: "High-velocity two-week sprints authored exclusively by senior engineers.",
    icon: Code2,
    whatHappens:
      "Our senior engineers build the full-stack system in focused two-week momentum sprints. We implement contract-driven type safety with strict TypeScript and Zod validation, integrate AI pipelines, connect databases, and maintain continuous automated CI/CD checks.",
    clientReceives: [
      "Access to private staging environments updated continuously",
      "Weekly sprint demo recordings & milestone changelogs",
      "Direct Slack / Discord channel with lead software architects",
      "Automated unit, integration, and type-check verification reports",
    ],
    infoNeeded: [
      "Sandbox / staging credentials for third-party integrations",
      "Sample or seed data for realistic tabular stress testing",
      "Review feedback during weekly sprint milestone demos",
      "Approval for release candidate builds",
    ],
    howFeedbackWorks:
      "Weekly video demonstrations of working software. Real-time collaboration in your private team channel, with asynchronous issue tracking in Linear or GitHub.",
  },
  {
    step: "04",
    name: "Deploy",
    duration: "Final Sprint • 1–2 Weeks",
    tagline: "Production cutover, Core Web Vitals audit, and complete IP transfer.",
    icon: Rocket,
    whatHappens:
      "We execute a zero-downtime production launch, optimize edge network asset distribution, audit performance to ensure 98+ Lighthouse scores, conduct security reviews, and formally transfer 100% intellectual property ownership to your organization.",
    clientReceives: [
      "Complete Git repository ownership with clean commit history",
      "Production deployment runbooks & technical architecture docs",
      "30-day post-launch engineering bug warranty",
      "Option for embedded quarterly architectural velocity retainers",
    ],
    infoNeeded: [
      "Production DNS & hosting access (AWS, Vercel, or custom Docker)",
      "Production API keys and environmental secrets",
      "Sign-off on User Acceptance Testing (UAT) checklist",
      "Post-launch domain routing verification",
    ],
    howFeedbackWorks:
      "Structured UAT testing with direct engineer availability for rapid zero-friction resolution of any launch-day adjustments.",
  },
];

export default function ProcessPage() {
  return (
    <div className="w-full">
      {/* Editorial Header */}
      <Section spacing="hero" withGrid divider="bottom">
        <div className="max-w-4xl space-y-6">
          <Badge variant="burnt" withDot className="font-mono text-xs">
            Engineering Methodology
          </Badge>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal tracking-tight leading-[1.08]">
            Four connected stages. <span className="italic font-normal text-burnt">Deterministic</span> delivery.
          </h1>
          <p className="editorial-lead text-charcoal-50 max-w-2xl">
            We operate with institutional engineering rigor. Every engagement moves through four clearly defined stages with documented deliverables, transparent feedback cycles, and weekly visibility.
          </p>
        </div>
      </Section>

      {/* The 4 Connected Stages */}
      <Section spacing="lg" theme="sand" divider="bottom">
        <div className="max-w-5xl mx-auto space-y-16">
          {processStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.step}
                className="p-8 sm:p-12 border border-border bg-surface shadow-subtle space-y-8 relative group hover:border-burnt/60 transition-colors"
              >
                {/* Stage Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-burnt">
                      {stage.step}
                    </span>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-serif text-charcoal">
                        {stage.name}
                      </h2>
                      <p className="text-xs font-mono text-charcoal-50 mt-0.5">
                        {stage.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-mono text-xs">
                      {stage.duration}
                    </Badge>
                  </div>
                </div>

                {/* 01. What Happens */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase text-burnt tracking-wider font-bold block">
                    What Happens
                  </span>
                  <p className="text-sm leading-relaxed text-charcoal/90 font-sans">
                    {stage.whatHappens}
                  </p>
                </div>

                {/* Grid: What Client Receives vs What Info is Needed */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* What Client Receives */}
                  <div className="p-5 border border-border bg-sand-50/60 space-y-3">
                    <span className="text-[10px] font-mono uppercase text-charcoal font-bold tracking-wider block">
                      What the Client Receives
                    </span>
                    <ul className="space-y-2">
                      {stage.clientReceives.map((item) => (
                        <li key={item} className="text-xs text-charcoal-50 flex items-start gap-2 font-sans">
                          <CheckCircle2 className="h-3.5 w-3.5 text-burnt shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What Information is Needed */}
                  <div className="p-5 border border-border bg-sand-50/60 space-y-3">
                    <span className="text-[10px] font-mono uppercase text-charcoal font-bold tracking-wider block">
                      What Information is Needed
                    </span>
                    <ul className="space-y-2">
                      {stage.infoNeeded.map((item) => (
                        <li key={item} className="text-xs text-charcoal-50 flex items-start gap-2 font-sans">
                          <FileText className="h-3.5 w-3.5 text-charcoal-50 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* How Feedback Works */}
                <div className="p-4 bg-burnt-muted/50 border border-burnt/30 text-xs font-sans text-charcoal/90 flex items-start gap-3">
                  <MessageSquare className="h-4 w-4 text-burnt shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-mono text-burnt uppercase text-[10px] block mb-0.5">
                      How Feedback &amp; Approvals Work:
                    </strong>
                    <span>{stage.howFeedbackWorks}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Engagement Readiness CTA */}
      <Section spacing="md" theme="surface">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 border border-border bg-sand-50/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-burnt font-semibold tracking-wider block">
              Predictable Delivery
            </span>
            <h3 className="font-serif text-2xl text-charcoal">
              Have a project ready for discovery?
            </h3>
            <p className="text-xs text-charcoal-50 max-w-lg">
              Our partners review requirements within 24 business hours and deliver fixed-scope sprint plans.
            </p>
          </div>

          <Link href="/contact" className="shrink-0">
            <Button variant="primary" size="lg" className="gap-2 text-xs font-mono uppercase tracking-wider px-8">
              <span>Build Your Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
