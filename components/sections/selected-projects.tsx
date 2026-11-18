"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SectionIndexBadge, ModularBlocks } from "@/components/ui/modular-blocks";
import { BrowserMockup } from "@/components/portfolio/browser-mockup";
import { projectsData, ProjectItem } from "@/data/projects";
import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function SelectedProjects() {
  const [activeSlug, setActiveSlug] = useState<string>(projectsData[0].slug);

  const activeProject =
    projectsData.find((p) => p.slug === activeSlug) || projectsData[0];

  return (
    <Section spacing="lg" theme="sand" divider="bottom">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div className="space-y-3">
            <SectionIndexBadge number="02" label="Architectural Case Studies & Proven Work" />
            <h2 className="text-3xl sm:text-5xl font-serif text-charcoal tracking-tight leading-tight">
              Interactive Project Index
            </h2>
            <p className="text-sm text-charcoal-50 max-w-2xl leading-relaxed">
              Explore production applications delivered by Code&amp;Crumbs. Hover over each project to inspect its live interface mockup, verified telemetry metrics, and architectural stack.
            </p>
          </div>
          <Link href="/work">
            <Button variant="secondary" size="sm" className="font-mono text-xs gap-1.5 shrink-0">
              <span>View Full Case Archive</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        {/* 12-Column Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side: Typographic Project List (6 Cols) */}
          <div className="lg:col-span-6 border-t border-border divide-y divide-border">
            {projectsData.map((project: ProjectItem, idx: number) => {
              const isSelected = activeSlug === project.slug;

              return (
                <div
                  key={project.slug}
                  onMouseEnter={() => setActiveSlug(project.slug)}
                  onClick={() => setActiveSlug(project.slug)}
                  className={cn(
                    "py-6 px-4 transition-all cursor-pointer group relative flex flex-col justify-between gap-3",
                    isSelected
                      ? "bg-surface border-l-4 border-l-burnt shadow-subtle"
                      : "hover:bg-sand-50/70 border-l-4 border-l-transparent"
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-semibold text-charcoal-50 uppercase tracking-wider">
                        0{idx + 1}
                      </span>
                      <span className="text-xs text-charcoal-50">•</span>
                      <span className="text-xs font-mono text-burnt font-medium uppercase">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-charcoal-50 hidden sm:block">
                      {project.year}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className={cn(
                        "text-2xl sm:text-3xl font-serif tracking-tight transition-colors",
                        isSelected
                          ? "text-burnt font-semibold"
                          : "text-charcoal group-hover:text-burnt"
                      )}
                    >
                      {project.title}
                    </h3>

                    <ArrowRight
                      className={cn(
                        "h-5 w-5 shrink-0 transition-transform duration-200",
                        isSelected
                          ? "text-burnt translate-x-1"
                          : "text-charcoal-50 opacity-40 group-hover:opacity-100 group-hover:translate-x-1"
                      )}
                    />
                  </div>

                  <p className="text-xs text-charcoal-50 leading-relaxed line-clamp-2 max-w-xl">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {project.technologies.slice(0, 3).map((tech: string) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 border border-border/80 bg-sand-100 text-charcoal-50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.metrics[0] && (
                      <span className="text-[10px] font-mono text-burnt font-semibold ml-auto">
                        ★ {project.metrics[0].value} {project.metrics[0].label}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Sticky Live Interactive Preview Panel (6 Cols) */}
          <div className="lg:col-span-6 sticky top-24 space-y-6">
            <div className="border border-border bg-surface p-4 sm:p-6 shadow-card space-y-5">
              {/* Preview Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-mono">
                <div className="flex items-center gap-2">
                  <ModularBlocks size="xs" variant="indicator" activeBlock={2} />
                  <span className="font-semibold text-charcoal uppercase truncate">
                    PREVIEW: {activeProject.title}
                  </span>
                </div>
                <span className="text-burnt shrink-0 font-medium">[ACTIVE CASE]</span>
              </div>

              {/* Dynamic Interactive Browser Mockup */}
              <div className="border border-border/70 overflow-hidden shadow-subtle">
                <BrowserMockup slug={activeProject.slug} interactive={false} />
              </div>

              {/* Verified Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {activeProject.metrics.slice(0, 3).map((m) => (
                  <div key={m.label} className="p-3 bg-sand-50 border border-border/60">
                    <span className="text-lg font-serif font-bold text-charcoal block leading-none mb-1">
                      {m.value}
                    </span>
                    <span className="text-[10px] font-mono text-charcoal-50 uppercase tracking-wider block truncate">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Architecture & Summary */}
              <div className="space-y-2 text-xs">
                <span className="font-mono uppercase text-burnt font-bold tracking-wider block text-[10px]">
                  System Architecture
                </span>
                <p className="text-charcoal/80 leading-relaxed">
                  {activeProject.architecture}
                </p>
              </div>

              {/* CTA Link to Full Case Study */}
              <div className="pt-3 border-t border-border flex items-center justify-between">
                <Link
                  href={`/work/${activeProject.slug}`}
                  className="w-full"
                >
                  <Button variant="primary" size="sm" className="w-full justify-between text-xs font-mono uppercase py-4">
                    <span>Examine Full {activeProject.title} Case Study</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
