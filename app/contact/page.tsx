import React, { Suspense } from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ModularBlocks, SectionIndexBadge } from "@/components/ui/modular-blocks";
import { ContactSculpture } from "@/components/3d/contact-sculpture";
import { ProjectConfigurator } from "@/components/forms/project-configurator";
import { CalendarBookingCard } from "@/components/ui/calendar-booking";
import { FaqsSection } from "@/components/sections/faqs-section";
import {
  Clock,
  Shield,
  Mail,
  CheckCircle2,
  ExternalLink,
  Github,
  Globe,
  FileText,
  Building,
  ArrowUpRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact, Project Builder & Meeting Booking | Code&Crumbs",
  description:
    "Direct technical contact, meeting scheduling, and multi-step project configurator for Code&Crumbs.",
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* 01. Editorial Header - Asymmetric 12-Column Grid with 3D Intake Relay Sculpture */}
      <Section spacing="hero" withGrid divider="bottom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Direct Engagement Copy & Telemetry */}
          <div className="lg:col-span-7 space-y-6">
            <SectionIndexBadge
              number="05"
              label="Direct Technical Engagement & Intake"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal tracking-tight leading-[1.08]">
              Let&apos;s build something <span className="italic font-normal text-burnt">meaningful.</span>
            </h1>
            <p className="editorial-lead text-charcoal-50 max-w-2xl">
              Tell us what you&apos;re planning. We&apos;ll understand your requirements and recommend the right approach. Direct partner review with zero junior hand-offs.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#project-intake">
                <Button variant="primary" size="lg" className="gap-2 text-xs font-mono uppercase tracking-wider px-8">
                  <span>Start Project Configurator</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="mailto:hello@codeandcrumbs.com">
                <Button variant="outline" size="lg" className="gap-2 text-xs font-mono uppercase text-charcoal-50 hover:text-charcoal">
                  <span>hello@codeandcrumbs.com</span>
                  <Mail className="h-4 w-4 text-burnt" />
                </Button>
              </a>
            </div>

            {/* Architectural Telemetry Strip */}
            <div className="pt-6 border-t border-border/80 grid grid-cols-3 gap-4 font-mono text-xs">
              <div>
                <span className="text-charcoal-50 block uppercase text-[10px] tracking-wider mb-1">
                  01 / Response SLA
                </span>
                <span className="text-charcoal font-semibold text-xs sm:text-sm">
                  &lt; 12h Direct
                </span>
              </div>
              <div>
                <span className="text-charcoal-50 block uppercase text-[10px] tracking-wider mb-1">
                  02 / Intake Path
                </span>
                <span className="text-charcoal font-semibold text-xs sm:text-sm">
                  Interactive Spec
                </span>
              </div>
              <div>
                <span className="text-charcoal-50 block uppercase text-[10px] tracking-wider mb-1">
                  03 / Review
                </span>
                <span className="text-burnt font-semibold text-xs sm:text-sm">
                  Principal Lead
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Framed 3D Technical Intake Sculpture */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-border bg-surface p-2 sm:p-4 shadow-card">
              {/* Corner Architectural Crop Marks */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-charcoal pointer-events-none" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-charcoal pointer-events-none" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-charcoal pointer-events-none" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-charcoal pointer-events-none" />

              {/* R3F 3D Canvas */}
              <ContactSculpture />

              <div className="p-3 border-t border-border/70 bg-sand-50/70 flex items-center justify-between text-[11px] font-mono text-charcoal-50">
                <div className="flex items-center gap-2">
                  <ModularBlocks size="xs" variant="indicator" activeBlock={5} />
                  <span className="truncate">FIG 06: INTAKE &amp; RELAY NODE</span>
                </div>
                <span className="text-burnt shrink-0 font-medium">[TACTILE 3D]</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 02. Scheduling & Booking Option */}
      <Section spacing="md" theme="sand" divider="bottom">
        <div className="max-w-5xl mx-auto space-y-6">
          <CalendarBookingCard />
        </div>
      </Section>

      {/* 03. Main Multi-Step Interactive Configurator */}
      <Section id="project-intake" spacing="lg" theme="sand" divider="bottom">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="border-b border-border pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase text-burnt font-bold tracking-widest block">
                Primary Specification Route
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal">
                Interactive Project Builder
              </h2>
            </div>
            <span className="text-xs font-mono text-charcoal-50">
              Estimated completion: 2–3 minutes
            </span>
          </div>

          <Suspense
            fallback={
              <div className="p-16 bg-surface border border-border text-center space-y-4 font-mono text-xs text-charcoal-50">
                <div className="h-6 w-6 border-2 border-burnt border-t-transparent animate-spin rounded-full mx-auto" />
                <div>Initializing Project Engine &amp; Preselection Sync...</div>
              </div>
            }
          >
            <ProjectConfigurator />
          </Suspense>
        </div>
      </Section>

      {/* 04. Direct Communication, SLA & Footprint Details */}
      <Section spacing="md" theme="surface" divider="bottom">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <span className="text-xs font-mono uppercase text-burnt font-semibold tracking-wider block mb-1">
              Direct Access
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-charcoal">
              Communication Channels &amp; Operating Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="paper" className="p-6 space-y-3">
              <span className="text-xs font-mono uppercase text-burnt font-semibold block">
                01 / Direct Correspondence
              </span>
              <h3 className="font-serif text-lg text-charcoal">Partnership Inquiries</h3>
              <p className="text-xs text-charcoal-50 leading-relaxed font-sans">
                For executive RFPs, technical specifications, or confidential inquiries outside our builder.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:partner@codeandcrumbs.com"
                  className="text-xs font-mono text-burnt font-semibold hover:underline flex items-center gap-1.5"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>partner@codeandcrumbs.com</span>
                </a>
              </div>
            </Card>

            <Card variant="paper" className="p-6 space-y-3">
              <span className="text-xs font-mono uppercase text-burnt font-semibold block">
                02 / Response Guarantee
              </span>
              <h3 className="font-serif text-lg text-charcoal">Turnaround SLA</h3>
              <p className="text-xs text-charcoal-50 leading-relaxed font-sans">
                Every project brief is reviewed directly by a technical partner within 24 business hours.
              </p>
              <div className="pt-2 text-xs font-mono text-charcoal/90 flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-burnt" />
                <span>Response within 24 business hours</span>
              </div>
            </Card>

            <Card variant="paper" className="p-6 space-y-3">
              <span className="text-xs font-mono uppercase text-burnt font-semibold block">
                03 / Strict Confidentiality
              </span>
              <h3 className="font-serif text-lg text-charcoal">Mutual NDA Protection</h3>
              <p className="text-xs text-charcoal-50 leading-relaxed font-sans">
                All client source code, design systems, and business models are protected under mutual NDA.
              </p>
              <div className="pt-2 text-xs font-mono text-charcoal/90 flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-emerald-600" />
                <span>Mutual NDA Executed Prior to Access</span>
              </div>
            </Card>
          </div>

          {/* Company Links Strip */}
          <div className="p-6 bg-sand-50 border border-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <span className="text-charcoal-50 uppercase font-semibold">
              Official Studio Directory:
            </span>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/resources" className="text-charcoal hover:text-burnt flex items-center gap-1">
                <FileText className="h-3.5 w-3.5 text-burnt" />
                <span>Sales Kit &amp; Resources</span>
              </Link>
              <a
                href="https://github.com/codeandcrumbs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal hover:text-burnt flex items-center gap-1"
              >
                <Github className="h-3.5 w-3.5 text-burnt" />
                <span>GitHub Repositories</span>
              </a>
              <Link href="/privacy" className="text-charcoal hover:text-burnt flex items-center gap-1">
                <Shield className="h-3.5 w-3.5 text-emerald-600" />
                <span>Privacy &amp; IP Terms</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 05. Frequently Answered Questions */}
      <FaqsSection />
    </div>
  );
}
