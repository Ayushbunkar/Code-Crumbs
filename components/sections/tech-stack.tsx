import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, Server, Cpu, Database, Cloud, ArrowUpRight } from "lucide-react";

export function TechStack() {
  const stackItems = [
    {
      title: "Frontend Engineering",
      techs: "React 19, Next.js 15, TypeScript, Tailwind CSS",
      category: "Frontend Core",
      desc: "Server-side rendering, streaming edge responses, dynamic server components, and granular asset caching.",
      icon: Layers,
    },
    {
      title: "Backend & Microservices",
      techs: "Python, FastAPI, Node.js, Express, NestJS",
      category: "Backend Services",
      desc: "Asynchronous task workers, CQRS architectures, and high-throughput REST and WebSocket APIs.",
      icon: Server,
    },
    {
      title: "Applied AI & Agent Systems",
      techs: "LLMs, RAG, LangChain, LangGraph, Vector DBs, AI Agents",
      category: "Intelligence",
      desc: "Deterministic multi-agent swarms, OCR parsing, semantic vector retrieval, and byte-accurate citations.",
      icon: Cpu,
    },
    {
      title: "Databases & In-Memory Bus",
      techs: "PostgreSQL, Redis, MongoDB",
      category: "Data Layer",
      desc: "Relational ACID models, distributed mutex locks preventing race conditions, and flexible document stores.",
      icon: Database,
    },
    {
      title: "Cloud Infrastructure & DevOps",
      techs: "Docker, AWS (ECS/S3), Vercel Edge, GitHub Actions",
      category: "Infrastructure",
      desc: "Reproducible container runtimes, sub-40ms edge routing, and continuous automated CI/CD quality gates.",
      icon: Cloud,
    },
  ];

  return (
    <Section spacing="lg" theme="sand" divider="bottom">
      <div className="space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-4 border-b border-border">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase text-burnt tracking-widest block font-semibold">
              04 / Technology Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
              Curated modern engineering foundation.
            </h2>
            <p className="editorial-lead text-charcoal-50 text-base sm:text-lg">
              We avoid volatile framework trends. We build upon battle-tested, high-performance web standards engineered to last across company product cycles.
            </p>
          </div>
          <Link href="/technology">
            <Button variant="secondary" size="sm" className="font-mono text-xs gap-1.5 shrink-0">
              <span>View Full Technology Architecture</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} variant="paper" className="p-6 flex flex-col justify-between group hover:border-burnt/60 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2.5 bg-sand-100 border border-border text-charcoal">
                      <Icon className="h-4 w-4 text-burnt" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-50">
                      {item.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-charcoal group-hover:text-burnt transition-colors">
                    {item.title}
                  </CardTitle>
                  <span className="text-[11px] font-mono text-burnt font-semibold block">
                    {item.techs}
                  </span>
                  <p className="text-xs text-charcoal-50 leading-relaxed font-sans">{item.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/60">
                  <Link
                    href="/technology"
                    className="text-[11px] font-mono text-charcoal hover:text-burnt uppercase tracking-wider flex items-center justify-between"
                  >
                    <span>Read Architecture Spec</span>
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
