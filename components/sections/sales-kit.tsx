import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { salesKitDocuments } from "@/data/sales-kit";
import {
  ArrowUpRight,
  Check,
  FileDown,
  ShieldCheck,
  FileText,
  Download,
  ExternalLink,
  Lock,
} from "lucide-react";

export function SalesKit() {
  const models = [
    {
      title: "Sprint Architecture",
      timing: "4 – 6 Weeks",
      scope: "Focused Flagship / Token System",
      points: [
        "Single-sprint complete delivery",
        "Next.js App Router codebase",
        "Production deployment & testing",
        "30-day bug warranty",
      ],
      idealFor: "Startups launching brand flagships or new product offerings.",
    },
    {
      title: "Comprehensive Platform",
      timing: "8 – 12 Weeks",
      scope: "Full Web Application + 3D Space",
      points: [
        "Multi-page enterprise architecture",
        "Custom 3D / WebGL viewport (R3F)",
        "Advanced GSAP scroll choreographies",
        "Full design token component library",
      ],
      idealFor: "Growth-stage companies and institutions scaling brand authority.",
    },
    {
      title: "Embedded Architectural Retainer",
      timing: "Quarterly Basis",
      scope: "Dedicated Principal Engineering",
      points: [
        "Continuous product iterations",
        "Quarterly design system audits",
        "Direct Slack / Git team integration",
        "Guaranteed priority sprint capacity",
      ],
      idealFor: "Enterprises requiring on-demand senior creative technology firepower.",
    },
  ];

  return (
    <Section spacing="lg" theme="sand" divider="bottom">
      <div className="space-y-16">
        {/* Section Header - Exact Prompt 8 Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase text-burnt tracking-widest block font-semibold">
              07 / Sales Kit &amp; Documentation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal tracking-tight leading-[1.12]">
              Everything you need to know about working with{" "}
              <span className="italic font-normal text-burnt">Code&amp;Crumbs.</span>
            </h2>
            <p className="text-sm sm:text-base text-charcoal-50 font-sans leading-relaxed">
              Download our official executive dossiers, technical specifications, and engagement protocols formatted for procurement, founders, and engineering leadership.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-charcoal-50 bg-surface border border-border px-3 py-1.5 shrink-0">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Strict Commercial Accuracy • Zero Hype</span>
          </div>
        </div>

        {/* 5 Downloadable Editorial PDF Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salesKitDocuments.map((doc, idx) => (
            <Card
              key={doc.id}
              variant="paper"
              className="flex flex-col justify-between group hover:border-burnt/60 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-burnt font-semibold">
                    Document 0{idx + 1}
                  </span>
                  <Badge variant="outline" className="text-[10px] font-mono">
                    {doc.sizeLabel}
                  </Badge>
                </div>

                <CardHeader className="pt-5 pb-3">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-burnt shrink-0 mt-0.5" />
                    <div>
                      <CardTitle className="text-lg font-serif text-charcoal group-hover:text-burnt transition-colors">
                        {doc.title}
                      </CardTitle>
                      <span className="text-[11px] font-mono text-charcoal-50 block mt-0.5">
                        {doc.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-xs text-charcoal-50 leading-relaxed font-sans">
                    {doc.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-border/60">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal font-semibold block">
                      Included Briefings:
                    </span>
                    <ul className="space-y-1">
                      {doc.topics.map((topic) => (
                        <li key={topic} className="text-[11px] text-charcoal/80 flex items-start gap-1.5 font-sans">
                          <Check className="h-3 w-3 text-burnt shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 p-6 border-t border-border flex items-center justify-between gap-3">
                <a
                  href={doc.fileUrl}
                  download={doc.fileName}
                  className="flex-1"
                >
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full gap-2 text-xs font-mono uppercase tracking-wider"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download PDF</span>
                  </Button>
                </a>

                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5 text-xs font-mono uppercase text-charcoal-50 hover:text-charcoal px-3"
                    title="View in new tab"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Commercial Engagement Models Section */}
        <div className="space-y-6 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-burnt tracking-widest block font-semibold mb-1">
                Structured Engagements
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-charcoal">
                Predictable Sprints &amp; Technical Retainers
              </h3>
            </div>
            <Link href="/contact">
              <Button variant="outline" size="sm" className="font-mono text-xs gap-1.5">
                <span>Configure Your Scope</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-burnt" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((m) => (
              <Card key={m.title} variant="paper" className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <Badge variant="outline" className="text-[10px] font-mono">
                      {m.timing}
                    </Badge>
                    <span className="text-[11px] font-mono uppercase text-burnt font-semibold">
                      {m.scope}
                    </span>
                  </div>

                  <CardHeader className="pt-6">
                    <CardTitle className="text-xl text-charcoal">{m.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-xs text-charcoal-50 italic">{m.idealFor}</p>
                    <ul className="space-y-2 pt-2 border-t border-border/60">
                      {m.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs text-charcoal/80">
                          <Check className="h-3.5 w-3.5 text-burnt shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                <div className="pt-6 p-6 border-t border-border">
                  <Link href="/contact" className="block w-full">
                    <Button variant="outline" size="sm" className="w-full justify-between text-xs font-mono uppercase">
                      <span>Inquire Model</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-burnt" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
