"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProjectItem, projectCategories } from "@/data/projects";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BrowserMockup } from "@/components/portfolio/browser-mockup";
import { TiltCard } from "@/components/ui/tilt-card";
import { ArrowUpRight, CheckCircle2, Layers, ExternalLink, Github, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectShowcaseProps {
  projects: ProjectItem[];
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.categorySlug === activeCategory);

  return (
    <div className="space-y-12">
      {/* Category Filter Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
        <div className="flex flex-wrap items-center gap-2">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={cn(
                  "px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all border",
                  isActive
                    ? "bg-burnt text-white border-burnt shadow-subtle font-semibold"
                    : "bg-surface text-charcoal-50 border-border hover:bg-sand-100 hover:text-charcoal"
                )}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <span className="ml-2 text-[10px] opacity-80">
                    ({filteredProjects.length})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="text-xs font-mono text-charcoal-50 hidden sm:block">
          Showing {filteredProjects.length} of {projects.length} Engineering Cases
        </div>
      </div>

      {/* Projects Grid with Interactive Visual Previews */}
      <div className="space-y-16">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.slug}
            className="border border-border bg-surface p-6 sm:p-10 transition-all duration-300 hover:border-burnt/60 hover:shadow-subtle group"
          >
            {/* Meta Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-burnt font-bold">
                  Case Study 0{idx + 1}
                </span>
                <span className="text-border">•</span>
                <span className="font-mono text-xs text-charcoal-50">{project.year}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="text-[11px] font-mono">
                  {project.category}
                </Badge>
                {project.liveDemoUrl && (
                  <Badge variant="burnt" className="text-[10px] font-mono">
                    Live Demo Ready
                  </Badge>
                )}
              </div>
            </div>

            {/* Content & Visual Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
              {/* Left Column: Descriptive Prose & Metrics */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl sm:text-4xl font-serif text-charcoal group-hover:text-burnt transition-colors tracking-tight">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p className="text-base text-charcoal-50 font-sans leading-relaxed">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-charcoal/80 leading-relaxed font-sans pt-2">
                    {project.overview}
                  </p>

                  {/* Architecture Highlight Mini-Pill */}
                  <div className="p-4 bg-sand-50 border border-border space-y-1.5 mt-4">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-burnt font-semibold block">
                      Core Engineering Architecture
                    </span>
                    <p className="text-xs text-charcoal-50 leading-relaxed font-sans">
                      {project.architecture}
                    </p>
                  </div>
                </div>

                <div className="space-y-6 pt-4 border-t border-border">
                  {/* Verified Engineering Metrics */}
                  <div className="grid grid-cols-3 gap-2">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="p-3 border border-border bg-sand-50/50">
                        <span className="text-lg sm:text-xl font-serif font-semibold text-charcoal block">
                          {m.value}
                        </span>
                        <span className="text-[10px] uppercase font-mono text-charcoal-50 block truncate">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono bg-sand-100 px-2 py-0.5 border border-border text-charcoal"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link href={`/work/${project.slug}`}>
                      <Button
                        variant="primary"
                        size="sm"
                        className="gap-2 text-xs font-mono uppercase tracking-wider"
                      >
                        <span>Full Case Study</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Button>
                    </Link>

                    {project.liveDemoUrl && (
                      <Link href={project.liveDemoUrl}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 text-xs font-mono uppercase text-charcoal-50 hover:text-charcoal"
                        >
                          <span>Explore Prototype</span>
                          <Terminal className="h-3.5 w-3.5 text-burnt" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: High-Fidelity Browser Mockup Preview with 3D Tilt */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <TiltCard maxTilt={4}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="block relative shadow-subtle hover:shadow-elevated transition-shadow duration-300"
                  >
                    <BrowserMockup slug={project.slug} interactive={false} />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors pointer-events-none" />
                  </Link>
                </TiltCard>
                <div className="mt-2 text-right">
                  <span className="text-[10px] font-mono text-charcoal-50 uppercase tracking-widest">
                    Click to inspect detailed engineering spec &rarr;
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
