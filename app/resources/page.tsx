import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SalesKit } from "@/components/sections/sales-kit";
import { ArrowUpRight, ShieldCheck, Mail, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Sales Kit & Company Resources | Code&Crumbs",
  description:
    "Official downloadable executive briefs, services specifications, technology stack dossiers, and engagement protocols for Code&Crumbs.",
};

export default function ResourcesPage() {
  return (
    <div className="w-full">
      {/* Editorial Header */}
      <Section spacing="hero" withGrid divider="bottom">
        <div className="max-w-4xl space-y-6">
          <Badge variant="burnt" withDot className="font-mono text-xs">
            Commercial Dossiers &amp; Executive Briefings
          </Badge>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal tracking-tight leading-[1.08]">
            Authoritative documents for <span className="italic font-normal text-burnt">informed</span> decisions.
          </h1>
          <p className="editorial-lead text-charcoal-50 max-w-2xl">
            Download verified technical briefs, architecture dossiers, and engagement frameworks prepared for engineering directors, procurement teams, and founding partners.
          </p>
        </div>
      </Section>

      {/* Main Sales Kit Grid */}
      <SalesKit />

      {/* Direct Principal Consultation Banner */}
      <Section spacing="md" theme="surface">
        <div className="max-w-5xl mx-auto p-8 sm:p-12 border border-border bg-sand-50/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase text-burnt font-semibold tracking-wider block">
              Direct Partner Access
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-charcoal">
              Need a bespoke technical proposal or RFP response?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-50 leading-relaxed font-sans">
              Our partners prepare customized architecture blueprints, sprint estimates, and fixed-milestone proposals within 48 business hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="gap-2 text-xs font-mono uppercase tracking-wider px-8"
              >
                <span>Request Custom Proposal</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
