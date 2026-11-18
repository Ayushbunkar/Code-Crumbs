import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";
import { ProjectShowcase } from "@/components/portfolio/project-cards";
import { ArrowUpRight, Sparkles, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Portfolio & Case Studies | Code&Crumbs",
  description:
    "Curated technical case studies across enterprise ERP systems, document AI, multi-agent research swarms, and voice intelligence by Code&Crumbs.",
};

export default function WorkPage() {
  return (
    <div className="w-full">
      {/* Editorial Header */}
      <Section spacing="hero" withGrid divider="bottom">
        <div className="max-w-4xl space-y-6">
          <Badge variant="burnt" withDot className="font-mono text-xs">
            Engineering Portfolio &amp; Case Studies
          </Badge>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal tracking-tight leading-[1.08]">
            Rigorous systems built for <span className="italic font-normal text-burnt">production momentum.</span>
          </h1>
          <p className="editorial-lead text-charcoal-50 max-w-2xl">
            A comprehensive index of enterprise ERPs, document intelligence engines, multi-agent swarms, and conversational AI simulators designed and delivered by Code&Crumbs.
          </p>
        </div>
      </Section>

      {/* Main Showcase & Interactive Category Filter */}
      <Section spacing="lg" theme="sand" divider="bottom">
        <ProjectShowcase projects={projectsData} />
      </Section>

      {/* Architectural Standards & No-Hallucination Commitment */}
      <Section spacing="md" theme="surface">
        <div className="max-w-5xl mx-auto p-8 sm:p-12 border border-border bg-sand-50/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-burnt font-semibold block">
              Direct Engineering Engagement
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-charcoal">
              Have a complex technical requirement?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-50 leading-relaxed font-sans">
              Our partners evaluate technical feasibility, system architecture, and delivery milestones with zero sales fluff.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
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
