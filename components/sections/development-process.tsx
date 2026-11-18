import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Compass, Layout, Code2, Rocket } from "lucide-react";

export function DevelopmentProcess() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      duration: "1 – 2 Weeks",
      desc: "Deep technical audit of constraints, performance targets, database models, and editorial hierarchy. We define the concrete architectural blueprint and sprint milestones.",
      icon: Compass,
    },
    {
      num: "02",
      title: "Design",
      duration: "2 – 3 Weeks",
      desc: "Engineering design system tokens, typography scales, and high-density layouts. Interactive wireframes are prototyped directly in Next.js to test real device ergonomics.",
      icon: Layout,
    },
    {
      num: "03",
      title: "Develop",
      duration: "4 – 8 Weeks",
      desc: "Full-speed development by senior software architects. Weekly staging releases, live branch deployments, and continuous automated lint and type-check verification.",
      icon: Code2,
    },
    {
      num: "04",
      title: "Deploy",
      duration: "1 – 2 Weeks",
      desc: "Core Web Vitals auditing (98+ target), cross-browser stress testing, SEO configuration, complete repository transfer, and 30 days of post-launch engineering warranty.",
      icon: Rocket,
    },
  ];

  return (
    <Section spacing="lg" theme="sand" divider="bottom">
      <div className="space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-4 border-b border-border">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase text-burnt tracking-widest block font-semibold">
              05 / Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
              Four connected stages. Zero surprises.
            </h2>
            <p className="editorial-lead text-charcoal-50 text-base sm:text-lg">
              Our structured engineering process ensures institutional rigor, weekly visibility, and deterministic delivery times.
            </p>
          </div>
          <Link href="/process">
            <Button variant="secondary" size="sm" className="font-mono text-xs gap-1.5 shrink-0">
              <span>View Full Process Breakdown</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.num} variant="paper" className="p-6 flex flex-col justify-between group hover:border-burnt/60 transition-colors">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-border/80">
                    <span className="font-serif text-2xl font-semibold text-burnt">
                      {step.num}
                    </span>
                    <Badge variant="outline" className="text-[10px] font-mono">
                      {step.duration}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mt-4 mb-2">
                    <Icon className="h-4 w-4 text-burnt shrink-0" />
                    <h3 className="font-serif text-xl text-charcoal font-medium">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-charcoal-50 leading-relaxed font-sans">{step.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/60">
                  <Link
                    href="/process"
                    className="text-[11px] font-mono text-charcoal hover:text-burnt uppercase tracking-wider flex items-center justify-between"
                  >
                    <span>Read Stage Spec</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
