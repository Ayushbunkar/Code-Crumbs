import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Code&Crumbs",
  description: "Code&Crumbs studio privacy policy, NDA enforcement, and data protection practices.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full">
      <Section spacing="hero" withGrid divider="bottom">
        <div className="max-w-4xl space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-charcoal-50 hover:text-burnt transition-colors mb-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Home</span>
          </Link>
          <Badge variant="outline" className="font-mono text-xs block w-fit">
            Legal & Compliance
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-serif text-charcoal tracking-tight">
            Privacy Policy & Data Security
          </h1>
          <p className="text-sm font-mono text-charcoal-50">
            Effective Date: January 1, 2025 • Last Updated: Q1 2025
          </p>
        </div>
      </Section>

      <Section spacing="lg" theme="surface">
        <div className="max-w-3xl space-y-10 text-charcoal/80 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-charcoal font-semibold">1. Client Confidentiality & Strict Mutual NDA</h2>
            <p>
              Code&Crumbs operates under strict confidentiality protocols. Any project specifications, source code repositories, architecture diagrams, or proprietary business logic transmitted through our project builder or direct correspondence are held in strict confidence under mutual non-disclosure agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-charcoal font-semibold">2. Information Collection & Usage</h2>
            <p>
              We collect contact information (such as name, corporate email address, and project requirements) solely to assess project viability, respond to inquiries, and execute professional agency contracts. We do not sell, license, or barter client data to third-party data brokers or marketing vendors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-charcoal font-semibold">3. Telemetry & Analytics</h2>
            <p>
              Our web flagships are monitored for uptime, core web vitals (LCP, INP, CLS), and critical errors. We do not employ intrusive tracking pixels or fingerprinting mechanisms. All telemetry is aggregated and privacy-preserving.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-charcoal font-semibold">4. Data Inquiries & Contact</h2>
            <p>
              For data access requests, deletion requests, or formal NDA execution prior to discovery calls, direct correspondence to:
            </p>
            <p className="font-mono text-xs text-burnt">codeandcrumbs.agency@gmail.com</p>
          </section>
        </div>
      </Section>
    </div>
  );
}
