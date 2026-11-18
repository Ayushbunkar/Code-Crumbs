import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Layers,
  Server,
  Cpu,
  Database,
  Cloud,
  ArrowUpRight,
  ShieldCheck,
  Check,
  Code2,
  Terminal,
  Activity,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Stack & Architecture Standards | Code&Crumbs",
  description:
    "Production-verified technologies organized across Frontend, Backend, AI, Databases, and Cloud Infrastructure by Code&Crumbs.",
};

interface TechDetail {
  name: string;
  role: string;
  description: string;
  benchmarks: string;
}

interface TechCategory {
  id: string;
  category: string;
  tagline: string;
  icon: React.ElementType;
  items: TechDetail[];
}

const techStackCategories: TechCategory[] = [
  {
    id: "frontend",
    category: "Frontend Engineering",
    tagline: "High-density data layouts, strict type contracts, and sub-millisecond rendering.",
    icon: Layers,
    items: [
      {
        name: "React 19 & Next.js 15 (App Router)",
        role: "Application Framework & Server Components",
        description:
          "Granular React Server Components (RSC) for zero-client bundle overhead on data fetches, streaming SSR, and edge route handlers.",
        benchmarks: "Sub-0.6s First Contentful Paint • Automatic Static Optimization",
      },
      {
        name: "TypeScript (Strict Mode)",
        role: "Static Type Guarantees & Contracts",
        description:
          "Strict typing across every component, API response, and mutation. Prevents null pointer errors and synchronizes backend schemas.",
        benchmarks: "100% Type Coverage • Zero 'any' types in production",
      },
      {
        name: "Tailwind CSS & Token System",
        role: "Design System Architecture",
        description:
          "Custom design tokens, Swiss grid alignments, and pre-compiled CSS resulting in tiny stylesheet payloads under 12 kB.",
        benchmarks: "Sub-16ms Frame Times • Zero Runtime Style Computation",
      },
      {
        name: "React Three Fiber & Three.js",
        role: "Selective 3D & Spatial Web",
        description:
          "WebGL viewports with instanced mesh GLSL vertex shaders, level-of-detail degradation, and smooth mouse lerp controls.",
        benchmarks: "60 FPS on Mobile & Desktop • Zero Unnecessary GPU Thrashing",
      },
    ],
  },
  {
    id: "backend",
    category: "Backend & Microservices",
    tagline: "Event-driven microservices, high-throughput APIs, and asynchronous message queues.",
    icon: Server,
    items: [
      {
        name: "Python & FastAPI",
        role: "High-Performance AI & Data Services",
        description:
          "Asynchronous Python microservices for machine learning pipelines, document extraction, vector indexing, and low-latency inference.",
        benchmarks: "Sub-20ms Route Execution • Native Asyncio IO Concurrency",
      },
      {
        name: "Node.js & Express",
        role: "Lightweight API Gateways",
        description:
          "Non-blocking I/O routing for transaction dispatch, webhooks, auth validation, and client state synchronization.",
        benchmarks: "High-Frequency Webhook Dispatch • Low Memory Footprint",
      },
      {
        name: "NestJS",
        role: "Enterprise Modular Microservices",
        description:
          "Dependency-injected enterprise backend architectures following strict domain-driven design (DDD) and CQRS patterns.",
        benchmarks: "Strict Enterprise Modularity • Native OpenAPI / Swagger Typing",
      },
    ],
  },
  {
    id: "ai",
    category: "Artificial Intelligence & Agent Systems",
    tagline: "Deterministic multi-agent swarms, zero-hallucination RAG, and live voice intelligence.",
    icon: Cpu,
    items: [
      {
        name: "Large Language Models (LLMs)",
        role: "Reasoning & Extraction Runtimes",
        description:
          "Engineered prompts and structured output parsing utilizing Claude 3.5 Sonnet, GPT-4o, and open-weight models for specialized tasks.",
        benchmarks: "Strict JSON Schema Validation • Deterministic Zero-Shot Extraction",
      },
      {
        name: "RAG & Vector Retrieval",
        role: "Document & Knowledge Intelligence",
        description:
          "Hybrid dense/sparse retrieval uniting BM25 lexical keyword matching with high-dimensional vector embeddings and reranking.",
        benchmarks: "100% Byte-Accurate PDF Citations • Sub-280ms First Token SSE",
      },
      {
        name: "LangChain & LangGraph",
        role: "Agent Orchestration & DAG Workflows",
        description:
          "Directed Acyclic Graph (DAG) state machines for autonomous multi-agent consensus, error recovery, and cycle prevention.",
        benchmarks: "Deterministic Convergence • Sub-12ms Message Bus Routing",
      },
      {
        name: "Vector Databases",
        role: "Semantic Embedding Indices",
        description:
          "Production vector indices configured with pgvector, Pinecone, and ChromaDB for sub-second nearest-neighbor semantic search.",
        benchmarks: "Cosine Similarity Scoring > 0.94 • Millisecond Query Latency",
      },
      {
        name: "Autonomous AI Agents",
        role: "Self-Directed Research & Task Swarms",
        description:
          "Multi-role agent swarms (Scraper, Analyst, Critic, Editor) with isolated memory scratchpads and deterministic tie-breaking.",
        benchmarks: "Parallelized Task Execution • Dual-Pass Verification",
      },
    ],
  },
  {
    id: "databases",
    category: "Databases & Cache Layers",
    tagline: "ACID compliance, distributed locking, and real-time ledger synchronization.",
    icon: Database,
    items: [
      {
        name: "PostgreSQL",
        role: "Relational Primary Data Store",
        description:
          "Partitioned relational tables, strict foreign key constraints, JSONB column flexibility, and row-level security policies.",
        benchmarks: "ACID Transaction Guarantees • High-Throughput Write Buffers",
      },
      {
        name: "Redis",
        role: "Distributed Mutex & In-Memory Bus",
        description:
          "Distributed locking to prevent phantom stock transfers, Pub/Sub channels for agent swarms, and sub-millisecond session caching.",
        benchmarks: "Sub-1ms Latency • Atomic Mutex Lock Release",
      },
      {
        name: "MongoDB",
        role: "Document Storage & Unstructured Schemas",
        description:
          "Flexible document schemas for high-velocity logging, dynamic audit trails, and unstructured JSON telemetry archives.",
        benchmarks: "Horizontal Scalability • High-Volume Write Ingestion",
      },
    ],
  },
  {
    id: "infrastructure",
    category: "Cloud Infrastructure & DevOps",
    tagline: "Edge networks, containerized runtimes, and automated continuous delivery.",
    icon: Cloud,
    items: [
      {
        name: "Docker & Containerization",
        role: "Reproducible Environment Runtimes",
        description:
          "Multi-stage Docker builds ensuring byte-for-byte identity between local development, staging environments, and production clusters.",
        benchmarks: "Minimal Production Image Sizes • Fast Cold Start Runtimes",
      },
      {
        name: "Amazon Web Services (AWS)",
        role: "Enterprise Scalable Infrastructure",
        description:
          "Container orchestration via ECS Fargate, S3 object stores with pre-signed URLs, RDS PostgreSQL, and CloudFront caching.",
        benchmarks: "99.99% Infrastructure Uptime • Multi-AZ Redundancy",
      },
      {
        name: "Vercel Edge Network",
        role: "Global Frontend Edge Distribution",
        description:
          "Instant global TTFB, automatic Brotli compression, edge middleware authentication, and sub-second asset hydration.",
        benchmarks: "Global Sub-40ms Edge Latency • Automated SSL & DDoS Protection",
      },
      {
        name: "CI/CD & GitHub Actions",
        role: "Automated Build & Quality Gates",
        description:
          "Continuous automated pipelines enforcing linting, strict TypeScript checks, unit test suites, and staging branch previews on every PR.",
        benchmarks: "Zero Untested Code to Main • Automatic Staging URLs",
      },
    ],
  },
];

export default function TechnologyPage() {
  return (
    <div className="w-full">
      {/* Editorial Header */}
      <Section spacing="hero" withGrid divider="bottom">
        <div className="max-w-4xl space-y-6">
          <Badge variant="burnt" withDot className="font-mono text-xs">
            Architecture &amp; Verified Stack
          </Badge>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal tracking-tight leading-[1.08]">
            Built with technologies engineered for <span className="italic font-normal text-burnt">production longevity.</span>
          </h1>
          <p className="editorial-lead text-charcoal-50 max-w-2xl">
            We avoid volatile framework trends. We build upon battle-tested web standards, type-safe runtimes, and bounded AI frameworks that our senior team has delivered repeatedly in production.
          </p>

          <div className="flex items-center gap-2 pt-2">
            <span className="text-xs font-mono bg-burnt/10 text-burnt border border-burnt/30 px-3 py-1 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4" />
              <span>Genuinely Delivered Capabilities • Zero Trend Chasing</span>
            </span>
          </div>
        </div>
      </Section>

      {/* Main Technology Categories */}
      <Section spacing="lg" theme="sand" divider="bottom">
        <div className="max-w-5xl mx-auto space-y-16">
          {techStackCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="space-y-6">
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-border gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-surface border border-border text-burnt">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-burnt font-bold tracking-widest block">
                        Category 0{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-serif text-charcoal">
                        {cat.category}
                      </h2>
                    </div>
                  </div>
                  <p className="text-xs text-charcoal-50 font-mono max-w-sm sm:text-right">
                    {cat.tagline}
                  </p>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.items.map((item) => (
                    <Card
                      key={item.name}
                      variant="paper"
                      className="p-6 flex flex-col justify-between hover:border-burnt/60 transition-colors"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-lg text-charcoal font-medium">
                            {item.name}
                          </h3>
                        </div>
                        <span className="text-[11px] font-mono text-burnt font-semibold block">
                          {item.role}
                        </span>
                        <p className="text-xs text-charcoal-50 leading-relaxed font-sans">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-border/60">
                        <span className="text-[10px] font-mono text-charcoal/80 block">
                          Benchmark: <strong className="text-charcoal font-semibold">{item.benchmarks}</strong>
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Engineering Quality Standards Matrix */}
      <Section spacing="md" theme="surface" divider="bottom">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <span className="text-xs font-mono uppercase text-burnt tracking-widest font-semibold block mb-1">
              Quality Assurance
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-charcoal">
              Code&amp;Crumbs Production Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 border border-border bg-sand-50/60 space-y-2">
              <span className="text-3xl font-serif font-bold text-charcoal block">100%</span>
              <span className="text-xs font-mono uppercase text-burnt font-semibold block">
                Strict Type Coverage
              </span>
              <p className="text-xs text-charcoal-50 font-sans">
                TypeScript strict configuration with zero unchecked `any` primitives across frontend and backend.
              </p>
            </div>

            <div className="p-6 border border-border bg-sand-50/60 space-y-2">
              <span className="text-3xl font-serif font-bold text-charcoal block">&lt;40ms</span>
              <span className="text-xs font-mono uppercase text-burnt font-semibold block">
                Interaction to Next Paint
              </span>
              <p className="text-xs text-charcoal-50 font-sans">
                Ergonomic input response with virtualized DOM rendering and off-thread Web Worker calculations.
              </p>
            </div>

            <div className="p-6 border border-border bg-sand-50/60 space-y-2">
              <span className="text-3xl font-serif font-bold text-charcoal block">98+</span>
              <span className="text-xs font-mono uppercase text-burnt font-semibold block">
                Lighthouse Score
              </span>
              <p className="text-xs text-charcoal-50 font-sans">
                Rigorous asset compression, Brotli encoding, next-gen picture pipelines, and zero layout shift.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Direct CTA */}
      <Section spacing="md" theme="sand">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="burnt" withDot className="font-mono text-xs">
            Architectural Advisory
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-serif text-charcoal tracking-tight">
            Ready to build on a verified foundation?
          </h2>
          <p className="editorial-lead text-charcoal-50 max-w-xl mx-auto">
            Configure your technology preferences in our project builder or discuss your system requirements directly with our senior software architects.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="gap-2 text-xs font-mono uppercase tracking-wider px-8"
              >
                <span>Build Your Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
