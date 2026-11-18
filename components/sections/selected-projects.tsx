import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function SelectedProjects() {
  const featured = projectsData.filter((p) => p.featured);

  return (
    <Section spacing="lg" theme="sand" divider="bottom">
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div>
            <span className="text-xs font-mono uppercase text-burnt tracking-widest block font-semibold mb-2">
              02 / Proven Systems
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
              Selected Case Studies
            </h2>
          </div>
          <Link href="/work">
            <Button variant="secondary" size="sm" className="font-mono text-xs gap-1.5">
              <span>View All Projects</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <div className="space-y-8">
          {featured.map((project, idx) => (
            <Card key={project.slug} variant="paper" className="p-8 sm:p-10 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-charcoal-50 uppercase">
                      Archive 0{idx + 1}
                    </span>
                    <span>•</span>
                    <Badge variant="outline" className="text-[10px] font-mono">
                      {project.category}
                    </Badge>
                  </div>

                  <Link href={`/work/${project.slug}`}>
                    <h3 className="text-2xl sm:text-3xl font-serif text-charcoal group-hover:text-burnt transition-colors">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-charcoal/80 leading-relaxed max-w-2xl">
                    {project.overview}
                  </p>

                  <div className="p-3 bg-sand-50 border border-border/70 max-w-2xl">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-burnt font-semibold block mb-1">
                      Architecture
                    </span>
                    <p className="text-xs text-charcoal-50">{project.architecture}</p>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-border lg:pl-8">
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="p-3 bg-sand-50 border border-border/50">
                        <span className="text-xl font-serif font-semibold text-charcoal block">
                          {m.value}
                        </span>
                        <span className="text-[10px] font-mono uppercase text-charcoal-50 block truncate">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/work/${project.slug}`}>
                    <Button variant="outline" size="sm" className="w-full justify-between text-xs font-mono uppercase">
                      <span>Examine Case Study</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
