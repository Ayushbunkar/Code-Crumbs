import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Engagement — Code&Crumbs",
  description: "Terms of engagement, intellectual property handover, and engineering agreements for Code&Crumbs.",
};

export default function TermsPage() {
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
            Legal & Governance
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-serif text-charcoal tracking-tight">
            Terms of Commercial Engagement
          </h1>
          <p className="text-sm font-mono text-charcoal-50">
            Standard Studio Framework • Version 2025.1
          </p>
        </div>
      </Section>

      <Section spacing="lg" theme="surface">
        <div className="max-w-3xl space-y-10 text-charcoal/80 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-charcoal font-semibold">1. Scope of Engagement & Delivery Sprints</h2>
            <p>
              All engineering engagements with Code&Crumbs are governed by an executed Master Services Agreement (MSA) and project Statement of Work (SOW). Work is delivered in iterative milestones with transparent staging environments, code review access, and continuous validation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-charcoal font-semibold">2. 100% Intellectual Property Assignment</h2>
            <p>
              Upon settlement of milestone fees, 100% of custom frontend code, bespoke 3D assets, component systems, and design tokens created specifically for the client are irrevocably assigned to the client. We do not retain proprietary licensing lock-ins.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-charcoal font-semibold">3. Engineering Warranty & Production Guarantee</h2>
            <p>
              Code&Crumbs provides a 30-day post-launch warranty covering any functional regressions, rendering bugs, or accessibility defects within the agreed technical specifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-charcoal font-semibold">4. Legal Contact</h2>
            <p>
              To request a copy of our standard Master Services Agreement or discuss bespoke enterprise contracting terms:
            </p>
            <p className="font-mono text-xs text-burnt">legal@codeandcrumbs.com</p>
          </section>
        </div>
      </Section>
    </div>
  );
}
