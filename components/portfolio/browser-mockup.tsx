"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Globe,
  Maximize2,
  Lock,
  Layers,
  Sparkles,
  Bot,
  Mic,
  Database,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  FileText,
  Search,
  Filter,
  RefreshCw,
  ExternalLink,
} from "lucide-react";

interface BrowserMockupProps {
  slug: string;
  screenshotId?: string;
  className?: string;
  interactive?: boolean;
}

export function BrowserMockup({
  slug,
  screenshotId = "default",
  className,
  interactive = true,
}: BrowserMockupProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Address Bar URL calculation
  const getUrl = () => {
    switch (slug) {
      case "evaluna-erp":
        return "https://app.evaluna-enterprise.internal/inventory/matrix";
      case "summrix-ai":
        return "https://app.summrix.ai/workspace/dossier-sec-10k";
      case "multi-agent-research-system":
        return "https://swarm.codeandcrumbs.internal/topology/dag-active";
      case "ai-interview-simulator":
        return "https://stage.interviewsim.ai/session/live-audio";
      case "aurora-synthetics":
        return "https://aurora-synthetics.internal/molecular-viewport";
      default:
        return "https://app.codeandcrumbs.internal";
    }
  };

  return (
    <div
      className={cn(
        "w-full border border-border bg-charcoal text-white rounded-none shadow-subtle overflow-hidden select-none",
        className
      )}
    >
      {/* Editorial Window Bar */}
      <div className="bg-[#1f1f1f] border-b border-charcoal-200 px-4 py-3 flex items-center justify-between gap-4">
        {/* Window Controls */}
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-border/40 border border-border/20" />
          <div className="h-2.5 w-2.5 rounded-full bg-border/40 border border-border/20" />
          <div className="h-2.5 w-2.5 rounded-full bg-border/40 border border-border/20" />
        </div>

        {/* Minimalist Address Bar */}
        <div className="flex-1 max-w-xl mx-auto bg-charcoal border border-charcoal-200 px-3 py-1 text-[11px] font-mono text-charcoal-50 flex items-center justify-center gap-2">
          <Lock className="h-3 w-3 text-burnt shrink-0" />
          <span className="truncate text-sand/80">{getUrl()}</span>
        </div>

        {/* System Badges */}
        <div className="flex items-center gap-3 text-xs font-mono text-charcoal-50">
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-burnt">
            <span className="h-1.5 w-1.5 rounded-full bg-burnt animate-pulse" />
            LIVE UI
          </span>
        </div>
      </div>

      {/* Screen Viewport Canvas */}
      <div className="bg-[#141414] min-h-[380px] sm:min-h-[460px] p-4 sm:p-6 text-sand relative overflow-hidden font-sans">
        {slug === "evaluna-erp" && <EvalunaErpScreen activeTab={activeTab} />}
        {slug === "summrix-ai" && <SummrixAiScreen activeTab={activeTab} />}
        {slug === "multi-agent-research-system" && <MultiAgentScreen activeTab={activeTab} />}
        {slug === "ai-interview-simulator" && <InterviewSimScreen activeTab={activeTab} />}
        {slug === "aurora-synthetics" && <AuroraScreen activeTab={activeTab} />}
      </div>
    </div>
  );
}

/* =========================================================================
   1. EVALUNA ERP UI SCREENSHOT
   ========================================================================= */
function EvalunaErpScreen({ activeTab }: { activeTab: number }) {
  const [selectedWarehouse, setSelectedWarehouse] = useState("Hub North (Chicago)");

  const rows = [
    { sku: "SKU-9921-A", item: "Titanium Alloy Rod 40mm", stock: 1420, reserved: 380, status: "Optimal", hub: "Chicago" },
    { sku: "SKU-8832-C", item: "Micro-Hydraulic Valve v3", stock: 84, reserved: 80, status: "Low Buffer", hub: "Berlin" },
    { sku: "SKU-4412-K", item: "Graphite Seal Rings (Pack 100)", stock: 3200, reserved: 120, status: "Surplus", hub: "Tokyo" },
    { sku: "SKU-1029-X", item: "Optic Fiber Conduit 200m", stock: 410, reserved: 410, status: "Locked", hub: "Chicago" },
    { sku: "SKU-7734-M", item: "Thermal Heat Sink Basalt 12x", stock: 890, reserved: 210, status: "Optimal", hub: "Austin" },
  ];

  return (
    <div className="space-y-4">
      {/* Top Ledger Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-charcoal-200 gap-3">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-burnt block">
            Evaluna Operations OS • v4.2.1
          </span>
          <h4 className="text-lg font-serif font-medium text-white">
            Multi-Warehouse Inventory Ledger &amp; Reconciliation
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono bg-charcoal-200 px-2.5 py-1 text-sand border border-charcoal-100 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Ledger Sync: Real-Time
          </span>
        </div>
      </div>

      {/* KPI Ticker */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 bg-charcoal border border-charcoal-200">
          <span className="text-[10px] font-mono text-charcoal-50 uppercase block">Total SKUs Tracked</span>
          <span className="text-xl font-mono font-bold text-white">52,480</span>
        </div>
        <div className="p-3 bg-charcoal border border-charcoal-200">
          <span className="text-[10px] font-mono text-charcoal-50 uppercase block">Active Fulfillment Hubs</span>
          <span className="text-xl font-mono font-bold text-white">6 Regional</span>
        </div>
        <div className="p-3 bg-charcoal border border-charcoal-200">
          <span className="text-[10px] font-mono text-charcoal-50 uppercase block">Pending Reconciliations</span>
          <span className="text-xl font-mono font-bold text-burnt">14 POs</span>
        </div>
        <div className="p-3 bg-charcoal border border-charcoal-200">
          <span className="text-[10px] font-mono text-charcoal-50 uppercase block">Lock Engine</span>
          <span className="text-xl font-mono font-bold text-emerald-400">Redis Mutex</span>
        </div>
      </div>

      {/* Interactive Inventory Table */}
      <div className="border border-charcoal-200 bg-charcoal overflow-x-auto">
        <table className="w-full text-left text-xs font-mono">
          <thead className="bg-[#1b1b1b] border-b border-charcoal-200 text-charcoal-50 text-[10px] uppercase">
            <tr>
              <th className="p-3">SKU Identifier</th>
              <th className="p-3">Component Description</th>
              <th className="p-3 text-right">Physical Stock</th>
              <th className="p-3 text-right">Allocated</th>
              <th className="p-3">Fulfillment Node</th>
              <th className="p-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-charcoal-200">
            {rows.map((row) => (
              <tr key={row.sku} className="hover:bg-charcoal-200/50 transition-colors">
                <td className="p-3 text-burnt font-semibold">{row.sku}</td>
                <td className="p-3 text-sand/90">{row.item}</td>
                <td className="p-3 text-right font-medium text-white">{row.stock.toLocaleString()}</td>
                <td className="p-3 text-right text-charcoal-50">{row.reserved.toLocaleString()}</td>
                <td className="p-3 text-sand/80">{row.hub}</td>
                <td className="p-3 text-right">
                  <span
                    className={cn(
                      "px-2 py-0.5 text-[10px] font-mono uppercase border",
                      row.status === "Optimal" && "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
                      row.status === "Low Buffer" && "border-burnt/40 text-burnt bg-burnt/10",
                      row.status === "Surplus" && "border-blue-500/40 text-blue-400 bg-blue-500/10",
                      row.status === "Locked" && "border-amber-500/40 text-amber-400 bg-amber-500/10"
                    )}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* =========================================================================
   2. SUMMRIX AI UI SCREENSHOT
   ========================================================================= */
function SummrixAiScreen({ activeTab }: { activeTab: number }) {
  const [activeCitation, setActiveCitation] = useState<number | null>(1);

  return (
    <div className="space-y-4">
      {/* Workspace Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-charcoal-200 gap-2">
        <div className="flex items-center gap-3">
          <FileText className="h-5 w-5 text-burnt" />
          <div>
            <h4 className="text-sm font-serif font-medium text-white">
              Form 10-K Comprehensive Technical Audit &amp; Risk Filing
            </h4>
            <span className="text-[10px] font-mono text-charcoal-50">
              Document ID: SEC-10K-2024 • 148 Pages Ingested • 99.8% Parse Confidence
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono bg-burnt/10 text-burnt border border-burnt/30 px-2 py-1">
            Byte-Accurate Anchors Active
          </span>
        </div>
      </div>

      {/* Split Ingestion Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left: Source Document Viewport */}
        <div className="lg:col-span-5 p-4 bg-charcoal border border-charcoal-200 text-xs font-mono space-y-3">
          <div className="flex items-center justify-between text-[10px] text-charcoal-50 uppercase pb-2 border-b border-charcoal-200">
            <span>Source PDF Viewport (Page 42)</span>
            <span className="text-burnt font-semibold">Bounding Box [X:142, Y:890]</span>
          </div>
          <div className="p-3 bg-charcoal-200/40 border border-charcoal-100 text-[11px] leading-relaxed text-sand/80 space-y-2">
            <p className="text-charcoal-50 line-clamp-2">
              Item 7A. Quantitative and Qualitative Disclosures About Market Risk. The Company&apos;s exposure to market risk fluctuates across foreign exchange rate shifts.
            </p>
            <div
              className={cn(
                "p-2 border transition-all cursor-pointer",
                activeCitation === 1
                  ? "bg-burnt/15 border-burnt text-white font-medium"
                  : "bg-charcoal border-charcoal-200 text-sand/90"
              )}
              onClick={() => setActiveCitation(1)}
            >
              <span className="text-[9px] font-mono uppercase text-burnt block mb-0.5">
                Anchor Ref §7.1.4
              </span>
              &ldquo;Operating gross margin expanded to 41.8% primarily attributable to automated fulfillment routing and decreased third-party logistics surcharges.&rdquo;
            </div>
            <p className="text-charcoal-50 text-[10px]">
              Item 8. Consolidated Financial Statements and Supplementary Data.
            </p>
          </div>
        </div>

        {/* Right: Streaming Synthesis & Citation Panel */}
        <div className="lg:col-span-7 p-4 bg-charcoal border border-charcoal-200 space-y-3">
          <div className="flex items-center justify-between text-[10px] text-charcoal-50 uppercase pb-2 border-b border-charcoal-200">
            <span>Executive Synthesis Feed</span>
            <span className="text-emerald-400 font-mono flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Verified Zero Hallucination
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-surface text-charcoal border border-border space-y-2">
              <span className="text-[10px] font-mono uppercase text-burnt font-bold tracking-wider block">
                Key Strategic Finding 01
              </span>
              <p className="text-xs leading-relaxed font-sans">
                Operating margins experienced expansion reaching <strong>41.8%</strong>, driven by systemic supply chain automated dispatch{" "}
                <button
                  onClick={() => setActiveCitation(1)}
                  className="inline-flex items-center gap-0.5 font-mono text-[10px] bg-burnt text-white px-1.5 py-0.5 font-semibold hover:opacity-90 ml-1"
                >
                  [Ref 1]
                </button>{" "}
                rather than raw price index increases.
              </p>
            </div>

            <div className="p-3 bg-charcoal-200/50 border border-charcoal-100 text-sand space-y-1 font-mono text-[11px]">
              <div className="flex items-center justify-between text-charcoal-50 text-[10px]">
                <span>Vector Semantic Similarity</span>
                <span className="text-emerald-400">0.96 Cosine Match</span>
              </div>
              <div className="w-full bg-charcoal h-1.5 border border-charcoal-100">
                <div className="bg-emerald-500 h-full w-[96%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. MULTI-AGENT RESEARCH SYSTEM SCREENSHOT
   ========================================================================= */
function MultiAgentScreen({ activeTab }: { activeTab: number }) {
  const agents = [
    { name: "Scraper Agent", role: "Citation Harvester", status: "Active Fetching", color: "text-blue-400", ping: "8ms" },
    { name: "Analyst Agent", role: "Hypothesis Synthesizer", status: "Clustering Vector Nodes", color: "text-emerald-400", ping: "14ms" },
    { name: "Critic Agent", role: "Contradiction Verifier", status: "Cross-Checking Footnotes", color: "text-burnt", ping: "11ms" },
    { name: "Editor Agent", role: "Publication Formatter", status: "Compiling Dossier", color: "text-amber-400", ping: "9ms" },
  ];

  return (
    <div className="space-y-4">
      {/* Topology Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-charcoal-200 gap-2">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-burnt block">
            Agent Swarm DAG Orchestrator • Session #8812
          </span>
          <h4 className="text-sm sm:text-base font-serif font-medium text-white">
            Autonomous Parallel Research Topology: Distributed Consensus
          </h4>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="bg-burnt/10 border border-burnt/30 text-burnt px-2 py-0.5 text-[10px]">
            Redis Message Bus Active
          </span>
        </div>
      </div>

      {/* 4 Agent Nodes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {agents.map((ag) => (
          <div key={ag.name} className="p-3 bg-charcoal border border-charcoal-200 space-y-2">
            <div className="flex items-center justify-between">
              <Bot className={cn("h-4 w-4", ag.color)} />
              <span className="text-[9px] font-mono text-charcoal-50">{ag.ping}</span>
            </div>
            <div>
              <span className="text-xs font-mono font-semibold text-white block">{ag.name}</span>
              <span className="text-[10px] font-mono text-charcoal-50 block">{ag.role}</span>
            </div>
            <div className="pt-2 border-t border-charcoal-200 text-[10px] font-mono flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sand/80 truncate">{ag.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Live Agent Terminal Stream */}
      <div className="p-3 bg-charcoal border border-charcoal-200 font-mono text-xs space-y-1.5">
        <div className="flex items-center justify-between text-[10px] text-charcoal-50 uppercase pb-1 border-b border-charcoal-200">
          <span>Inter-Agent Dialogue Stream (Redis Pub/Sub)</span>
          <span className="text-burnt">30Hz Throttled Feed</span>
        </div>
        <div className="space-y-1 text-[11px] text-sand/80 pt-1">
          <div className="flex items-start gap-2">
            <span className="text-blue-400 shrink-0">[SCRAPER]</span>
            <span>Retrieved 24 verified patent claims from USPTO database. Transmitting to Analyst buffer.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-emerald-400 shrink-0">[ANALYST]</span>
            <span>Synthesizing hypothesis cluster: Architecture convergence in multi-modal LLM reasoning.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-burnt shrink-0">[CRITIC]</span>
            <span>Challenging claim #3: Contradicted by IEEE benchmark published Oct 2024. Flagged for review.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-amber-400 shrink-0">[EDITOR]</span>
            <span>Integrating peer critique. Structuring publication briefing with 18 confirmed citations.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   4. AI INTERVIEW SIMULATOR SCREENSHOT
   ========================================================================= */
function InterviewSimScreen({ activeTab }: { activeTab: number }) {
  return (
    <div className="space-y-4">
      {/* Audio Stage Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-charcoal-200 gap-2">
        <div className="flex items-center gap-3">
          <Mic className="h-5 w-5 text-burnt animate-pulse" />
          <div>
            <h4 className="text-sm sm:text-base font-serif font-medium text-white">
              Principal Systems Architect Interview Simulation
            </h4>
            <span className="text-[10px] font-mono text-charcoal-50">
              Scenario: Global Distributed Event Streaming Engine Under High Partitioning
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2 py-0.5 text-[10px]">
            Audio Turnaround: 740ms
          </span>
        </div>
      </div>

      {/* Interactive Audio Waveform Visualization */}
      <div className="p-6 bg-charcoal border border-charcoal-200 text-center space-y-4">
        <div className="flex items-center justify-center gap-1 h-16">
          {[40, 65, 80, 45, 95, 70, 30, 85, 100, 60, 40, 75, 90, 50, 65, 30, 80, 55, 90, 40].map(
            (height, i) => (
              <div
                key={i}
                className={cn(
                  "w-1 sm:w-1.5 transition-all duration-300 rounded-full",
                  i % 2 === 0 ? "bg-burnt" : "bg-sand/70"
                )}
                style={{ height: `${height}%` }}
              />
            )
          )}
        </div>
        <p className="text-xs font-mono text-sand/80 max-w-lg mx-auto italic">
          &ldquo;How would your architecture maintain strict linearizability when 3 out of 5 consensus nodes lose WAN connectivity?&rdquo;
        </p>
      </div>

      {/* Seniority Competency Rubric Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3 bg-charcoal border border-charcoal-200 space-y-1.5">
          <div className="flex justify-between text-[10px] font-mono uppercase text-charcoal-50">
            <span>Distributed Systems Depth</span>
            <span className="text-burnt font-bold">9.4 / 10</span>
          </div>
          <div className="w-full bg-charcoal-200 h-1.5">
            <div className="bg-burnt h-full w-[94%]" />
          </div>
        </div>

        <div className="p-3 bg-charcoal border border-charcoal-200 space-y-1.5">
          <div className="flex justify-between text-[10px] font-mono uppercase text-charcoal-50">
            <span>Trade-Off Articulation</span>
            <span className="text-emerald-400 font-bold">9.0 / 10</span>
          </div>
          <div className="w-full bg-charcoal-200 h-1.5">
            <div className="bg-emerald-500 h-full w-[90%]" />
          </div>
        </div>

        <div className="p-3 bg-charcoal border border-charcoal-200 space-y-1.5">
          <div className="flex justify-between text-[10px] font-mono uppercase text-charcoal-50">
            <span>Conciseness &amp; Poise</span>
            <span className="text-blue-400 font-bold">8.8 / 10</span>
          </div>
          <div className="w-full bg-charcoal-200 h-1.5">
            <div className="bg-blue-400 h-full w-[88%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   5. AURORA SYNTHETICS SCREENSHOT
   ========================================================================= */
function AuroraScreen({ activeTab }: { activeTab: number }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-charcoal-200">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-burnt block">
            WebGL Molecular Canvas • 60 FPS
          </span>
          <h4 className="text-base font-serif font-medium text-white">
            Synthetic Peptide Sequence Exploration Viewport
          </h4>
        </div>
        <div className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5">
          GLSL Shaders Active
        </div>
      </div>

      <div className="p-10 bg-charcoal border border-charcoal-200 flex flex-col items-center justify-center space-y-4 relative">
        {/* Abstract 3D Molecule Graphic */}
        <div className="relative h-32 w-32 flex items-center justify-center">
          <div className="absolute inset-0 border border-burnt/30 rounded-full animate-spin" style={{ animationDuration: "12s" }} />
          <div className="absolute h-20 w-20 border border-sand/30 rounded-full animate-ping" style={{ animationDuration: "4s" }} />
          <div className="h-10 w-10 bg-burnt rounded-full shadow-lg shadow-burnt/30 flex items-center justify-center font-mono text-xs text-white font-bold">
            P-84
          </div>
        </div>
        <span className="text-xs font-mono text-sand/70">
          Target: Angiotensin-Binding Fragment • 1,420 Coordinates Tracked
        </span>
      </div>
    </div>
  );
}
