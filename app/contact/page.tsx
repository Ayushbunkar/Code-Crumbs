import React, { Suspense } from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
      {/* 01. Editorial Header */}
      <Section spacing="hero" withGrid divider="bottom">
        <div className="max-w-4xl space-y-6">
          <Badge variant="burnt" withDot className="font-mono text-xs">
            Direct Technical Engagement &amp; Intake
          </Badge>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal tracking-tight leading-[1.08]">
            Let&apos;s build something <span className="italic font-normal text-burnt">meaningful.</span>
          </h1>
          <p className="editorial-lead text-charcoal-50 max-w-2xl">
            Tell us what you&apos;re planning. We&apos;ll understand your requirements and recommend the right approach. Direct partner review with zero junior hand-offs.
          </p>
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
