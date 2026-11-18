import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";
import { ArrowUpRight, Check } from "lucide-react";

export function ServicesOverview() {
  return (
    <Section spacing="lg" theme="sand" divider="bottom">
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div>
            <span className="text-xs font-mono uppercase text-burnt tracking-widest block font-semibold mb-2">
              01 / Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
              Engineering Disciplines
            </h2>
          </div>
          <Link href="/services">
            <Button variant="secondary" size="sm" className="font-mono text-xs gap-1.5">
              <span>View Full Capabilities</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.slice(0, 4).map((service, idx) => (
            <Card key={service.id} variant="paper" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-border/80 text-xs font-mono text-charcoal-50">
                  <span>DISCIPLINE 0{idx + 1}</span>
                  <span>{service.timeline}</span>
                </div>
                <CardHeader className="pt-6">
                  <CardTitle className="text-2xl text-charcoal">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-charcoal-50 pt-1">
                    {service.lead}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-xs text-charcoal/80 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    {service.deliverables.slice(0, 3).map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-charcoal-50">
                        <Check className="h-3.5 w-3.5 text-burnt" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>

              <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
                <div className="flex gap-1.5">
                  {service.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono bg-sand-200 px-2 py-0.5 border border-border text-charcoal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-mono text-burnt hover:underline"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
