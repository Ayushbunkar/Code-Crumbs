import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionIndexBadge, ModularBlocks } from "@/components/ui/modular-blocks";
import { projectsData } from "@/data/projects";
import { ProjectGallery } from "@/components/portfolio/project-gallery";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Terminal,
  Github,
  Code2,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | Code&Crumbs`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const prevProject = projectsData.find((p) => p.slug === project.prevSlug) || projectsData[0];
  const nextProject = projectsData.find((p) => p.slug === project.nextSlug) || projectsData[1];

  return (
    <div className="w-full">
      {/* 01. Breadcrumb & Navigation Top Bar */}
      <Section spacing="sm" divider="bottom" className="bg-surface">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-charcoal-50 hover:text-burnt transition-colors font-medium"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Index of Case Studies</span>
          </Link>

          <div className="flex items-center gap-3">
            <Badge variant="outline" className="font-mono text-xs">
              {project.category}
            </Badge>
            <span className="text-xs font-mono text-charcoal-50">{project.year}</span>
          </div>
        </div>
      </Section>

      {/* 02. Project Hero Presentation */}
      <Section spacing="hero" withGrid divider="bottom">
        <div className="max-w-5xl space-y-8">
          <div className="space-y-4">
            <SectionIndexBadge number="00" label={`Architectural Case Study • ${project.category}`} />
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal tracking-tight leading-[1.06]">
              {project.title}
            </h1>
            <p className="editorial-lead text-charcoal-50 max-w-3xl">
              {project.tagline}
            </p>
          </div>

          {/* Action CTAs & Working Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.liveDemoUrl && (
              <Link href={project.liveDemoUrl}>
                <Button
                  variant="primary"
                  size="lg"
                  className="gap-2 text-xs font-mono uppercase tracking-wider px-8"
                >
                  <span>Launch Live Prototype</span>
                  <Terminal className="h-4 w-4" />
                </Button>
              </Link>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 text-xs font-mono uppercase text-charcoal hover:text-burnt"
                >
                  <Github className="h-4 w-4" />
                  <span>Repository Blueprint</span>
                </Button>
              </a>
            )}

            <Link href={`/contact?service=${encodeURIComponent(project.title)}`}>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-xs font-mono uppercase text-charcoal-50 hover:text-charcoal"
              >
                <span>Scope Similar Architecture</span>
                <ArrowUpRight className="h-4 w-4 text-burnt" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* 03. Verified Metrics Strip (No Fake Statistics) */}
      <Section spacing="none" divider="bottom" className="bg-sand-50">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="p-8 text-center sm:text-left space-y-1">
              <span className="text-3xl sm:text-4xl font-serif font-semibold text-charcoal block">
                {metric.value}
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-burnt font-semibold block">
                {metric.label}
              </span>
              {metric.detail && (
                <span className="text-[11px] font-mono text-charcoal-50 block pt-0.5">
                  {metric.detail}
                </span>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* 04. Large Visual Layout & Browser Mockup Gallery */}
      <Section spacing="lg" theme="sand" divider="bottom">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ModularBlocks size="xs" variant="indicator" activeBlock={2} />
              <span className="text-xs font-mono uppercase tracking-widest text-burnt font-semibold">
                Visual System Showcase
              </span>
            </div>
            <span className="text-xs font-mono text-charcoal-50">
              Interactive High-Fidelity Previews
            </span>
          </div>

          <ProjectGallery slug={project.slug} screenshots={project.screenshots} />
        </div>
      </Section>

      {/* 05. The Strategic Narrative: Problem vs. Solution */}
      <Section spacing="lg" theme="surface" divider="bottom">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <SectionIndexBadge number="01" label="Strategic Context & Objective" className="mb-2" />
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal tracking-tight">
              Executive Overview
            </h2>
            <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-sans mt-4 max-w-4xl">
              {project.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-border">
            {/* The Problem Statement */}
            <div className="p-6 sm:p-8 border border-border bg-sand-50/70 space-y-4">
              <div className="flex items-center gap-2 text-burnt">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">
                  The Problem Statement
                </span>
              </div>
              <p className="text-sm leading-relaxed text-charcoal/90 font-sans">
                {project.problemStatement}
              </p>
            </div>

            {/* The Engineering Solution */}
            <div className="p-6 sm:p-8 border border-burnt/30 bg-burnt-muted/40 space-y-4">
              <div className="flex items-center gap-2 text-burnt">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">
                  The Engineering Solution
                </span>
              </div>
              <p className="text-sm leading-relaxed text-charcoal/90 font-sans">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 06. Architecture & System Implementation Blueprint */}
      <Section spacing="lg" theme="sand" divider="bottom">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <SectionIndexBadge number="02" label="Architecture & Implementation" className="mb-2" />
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal tracking-tight">
              Technical Blueprint
            </h2>
            <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans mt-3 max-w-3xl">
              {project.architecture}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {project.architectureDetails.map((detail, idx) => (
              <div
                key={idx}
                className="p-5 bg-surface border border-border flex items-start gap-3"
              >
                <div className="h-6 w-6 rounded-none bg-burnt/10 border border-burnt/30 text-burnt font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <p className="text-xs leading-relaxed text-charcoal font-sans font-medium">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 07. Key Features Breakdown */}
      <Section spacing="lg" theme="surface" divider="bottom">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <SectionIndexBadge number="03" label="Delivered Capabilities" className="mb-2" />
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal tracking-tight">
              Key Platform Features
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-sand-50/60 border border-border space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg text-charcoal font-medium">
                    {feature.title}
                  </h3>
                  {feature.badge && (
                    <Badge variant="outline" className="text-[10px] font-mono">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-charcoal-50 leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 08. Development Challenges & Engineering Resolutions */}
      <Section spacing="lg" theme="sand" divider="bottom">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <SectionIndexBadge number="04" label="Hard Problems Solved" className="mb-2" />
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal tracking-tight">
              Development Challenges &amp; Engineering Resolutions
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-50 mt-2 font-sans">
              Authentic architectural bottlenecks encountered in production and our systematic engineering solutions.
            </p>
          </div>

          <div className="space-y-6">
            {project.developmentChallenges.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-surface border border-border space-y-4"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-burnt tracking-wider font-bold block">
                    Challenge 0{idx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif text-charcoal font-medium">
                    {item.challenge}
                  </h3>
                </div>

                <div className="p-4 bg-sand-50 border-l-2 border-burnt text-xs font-sans text-charcoal/90 leading-relaxed">
                  <strong className="font-mono text-burnt uppercase text-[10px] block mb-1">
                    Engineering Resolution:
                  </strong>
                  {item.engineeringResolution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 09. Technology Stack Grid */}
      <Section spacing="md" theme="surface" divider="bottom">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <SectionIndexBadge number="05" label="Verified Dependencies" className="mb-2" />
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal">
                Technologies &amp; Architecture
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className="px-4 py-2.5 bg-sand-50 border border-border text-xs font-mono text-charcoal flex items-center gap-2"
              >
                <Code2 className="h-3.5 w-3.5 text-burnt" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 10. Next & Previous Project Navigation */}
      <Section spacing="none" divider="bottom" className="bg-charcoal text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-charcoal-200">
          {/* Previous Project */}
          <Link
            href={`/work/${prevProject.slug}`}
            className="p-8 sm:p-12 hover:bg-charcoal-200/40 transition-colors block group"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-charcoal-50 flex items-center gap-2 mb-2 group-hover:text-burnt transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Previous Case Study</span>
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif text-white group-hover:text-burnt transition-colors">
              {prevProject.title}
            </h4>
            <p className="text-xs font-mono text-charcoal-50 mt-1 line-clamp-1">
              {prevProject.category}
            </p>
          </Link>

          {/* Next Project */}
          <Link
            href={`/work/${nextProject.slug}`}
            className="p-8 sm:p-12 hover:bg-charcoal-200/40 transition-colors block text-left sm:text-right group"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-charcoal-50 flex items-center sm:justify-end gap-2 mb-2 group-hover:text-burnt transition-colors">
              <span>Next Case Study</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif text-white group-hover:text-burnt transition-colors">
              {nextProject.title}
            </h4>
            <p className="text-xs font-mono text-charcoal-50 mt-1 line-clamp-1">
              {nextProject.category}
            </p>
          </Link>
        </div>
      </Section>

      {/* 11. Final Conversion Section */}
      <Section spacing="lg" theme="sand">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="burnt" withDot className="font-mono text-xs">
            Start Your Engagement
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-serif text-charcoal tracking-tight">
            Ready to build high-performance software?
          </h2>
          <p className="editorial-lead text-charcoal-50 max-w-xl mx-auto">
            Configure your technical scope using our interactive project builder or connect directly with our software architects.
          </p>
          <div className="pt-2">
            <Link href={`/contact?service=${encodeURIComponent(project.title)}`}>
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
