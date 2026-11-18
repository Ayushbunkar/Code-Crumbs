import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";
import { demosData } from "@/data/demos";
import { ArrowUpRight, Play, Terminal, Database, Cpu } from "lucide-react";

export function WorkingDemos() {
  const iconMap: Record<string, React.ElementType> = {
    "saas-dashboard": Database,
    "ai-automation": Cpu,
    "erp-workflow": Terminal,
  };

  return (
    <Section spacing="lg" theme="surface" divider="bottom">
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div>
            <span className="text-xs font-mono uppercase text-burnt tracking-widest block font-semibold mb-2">
              03 / Functional Code
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
              Live Functional Prototypes
            </h2>
          </div>
          <Link href="/demos">
            <Button variant="secondary" size="sm" className="font-mono text-xs gap-1.5">
              <span>All Interactive Demos</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demosData.map((demo) => {
            const Icon = iconMap[demo.id] || Terminal;
            return (
              <TiltCard key={demo.id} maxTilt={3} className="h-full">
                <Card variant="paper" className="flex flex-col justify-between group h-full">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-border">
                      <div className="p-2 bg-sand-100 border border-border text-charcoal">
                        <Icon className="h-4 w-4 text-burnt" />
                      </div>
                      <Badge variant="outline" className="text-[10px] font-mono">
                        {demo.category}
                      </Badge>
                    </div>

                    <CardHeader className="pt-6">
                      <CardTitle className="text-xl text-charcoal group-hover:text-burnt transition-colors">
                        {demo.title}
                      </CardTitle>
                      <p className="text-xs text-charcoal-50 pt-1 leading-relaxed">
                        {demo.tagline}
                      </p>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-1 pt-1">
                        {demo.features.slice(0, 3).map((f) => (
                          <li key={f} className="text-xs text-charcoal-50 flex items-center gap-1.5">
                            <span className="h-1 w-1 bg-burnt rounded-full" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border">
                    <Link href={`/demos/${demo.slug}`} className="block w-full">
                      <Button variant="primary" size="sm" className="w-full justify-between text-xs font-mono uppercase">
                        <span>Launch Module</span>
                        <Play className="h-3 w-3 fill-current" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
