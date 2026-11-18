"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input, Textarea, FormLabel, FormGroup, Select } from "@/components/ui/form";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Play,
  RotateCcw,
  Cpu,
  CheckCircle2,
  Clock,
  Sparkles,
  Terminal,
  AlertTriangle,
  Layers,
  Database,
  Bell,
  Check,
  Sliders,
  Send,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkflowStep {
  id: string;
  name: string;
  role: string;
  icon: React.ElementType;
  status: "idle" | "running" | "success" | "failed";
  outputPreview?: string;
}

export default function AiAutomationDemo() {
  // Configurable / Editable Input Lead State
  const [leadInput, setLeadInput] = useState({
    name: "Dr. Julian Vance",
    company: "Vance Biotech Systems",
    email: "julian@vancebio.internal",
    budget: "$100,000–$250,000",
    inquiry:
      "We need an enterprise document intelligence and OCR pipeline to extract clinical trial safety tables from 40,000 pages of FDA filings monthly.",
  });

  // Action Configuration Settings
  const [qualificationThreshold, setQualificationThreshold] = useState<number>(80);
  const [simulateFailure, setSimulateFailure] = useState<boolean>(false);

  // Execution State
  const [executionState, setExecutionState] = useState<"idle" | "running" | "completed" | "error">("idle");
  const [activeStepIdx, setActiveStepIdx] = useState<number>(-1);
  const [logs, setLogs] = useState<string[]>([
    "[00:00:00] System initialized in standby mode.",
    "[00:00:00] Webhook listener armed: /v1/intake/webhook.",
  ]);

  const stepsConfig: WorkflowStep[] = [
    {
      id: "step-1",
      name: "01. Webhook Ingestion",
      role: "Payload Sanitization & IP Verification",
      icon: Zap,
      status:
        activeStepIdx > 0
          ? "success"
          : activeStepIdx === 0
          ? "running"
          : "idle",
      outputPreview: "HTTP 200 • Form payload schema validated (0 schema errors)",
    },
    {
      id: "step-2",
      name: "02. AI Lead Qualification",
      role: "Deterministic Intent & Budget Scoring",
      icon: Cpu,
      status:
        simulateFailure && activeStepIdx >= 1
          ? "failed"
          : activeStepIdx > 1
          ? "success"
          : activeStepIdx === 1
          ? "running"
          : "idle",
      outputPreview: simulateFailure
        ? "Qualification Score: 42/100 (Below threshold of 80) • Flagged as Low-Intent"
        : "Qualification Score: 94/100 • Tier: Tier-1 Enterprise Opportunity",
    },
    {
      id: "step-3",
      name: "03. Classification & Routing",
      role: "Vector Topic Categorization & Sentiment",
      icon: Layers,
      status:
        simulateFailure && activeStepIdx >= 1
          ? "idle"
          : activeStepIdx > 2
          ? "success"
          : activeStepIdx === 2
          ? "running"
          : "idle",
      outputPreview: "Category: Document AI & Extraction • Sentiment: Positive High Urgency",
    },
    {
      id: "step-4",
      name: "04. CRM Account Synced",
      role: "Automated Record & Deal Creation",
      icon: Database,
      status:
        simulateFailure && activeStepIdx >= 1
          ? "idle"
          : activeStepIdx > 3
          ? "success"
          : activeStepIdx === 3
          ? "running"
          : "idle",
      outputPreview: "Record #CRM-9824 created • Pipeline: Q4 Enterprise • Deal Size: $150,000",
    },
    {
      id: "step-5",
      name: "05. Partner Notification",
      role: "Dispatched to Slack & Partner Calendar",
      icon: Bell,
      status:
        simulateFailure && activeStepIdx >= 1
          ? "idle"
          : activeStepIdx >= 4
          ? "success"
          : activeStepIdx === 4
          ? "running"
          : "idle",
      outputPreview: "Message transmitted to #partner-leads • Executive discovery invite prepared",
    },
  ];

  const handleRunWorkflow = () => {
    setExecutionState("running");
    setActiveStepIdx(0);
    const now = () => new Date().toLocaleTimeString();

    setLogs([
      `[${now()}] 🚀 Trigger event fired: Webhook received for ${leadInput.company}.`,
      `[${now()}] Node 01: Ingesting payload from ${leadInput.name} (${leadInput.email})...`,
    ]);

    // Step 1 -> Step 2
    setTimeout(() => {
      setActiveStepIdx(1);
      setLogs((prev) => [
        `[${now()}] Node 01 completed in 42ms. Schema validated.`,
        `[${now()}] Node 02: Evaluating lead qualification based on declared budget ${leadInput.budget}...`,
        ...prev,
      ]);
    }, 700);

    // Step 2 Evaluation
    setTimeout(() => {
      if (simulateFailure) {
        setExecutionState("error");
        setLogs((prev) => [
          `[${now()}] ❌ Node 02 FAILED: Qualification score below threshold ${qualificationThreshold}.`,
          `[${now()}] Pipeline halted. Sent rejection notice to lead quarantine queue.`,
          ...prev,
        ]);
        return;
      }

      setActiveStepIdx(2);
      setLogs((prev) => [
        `[${now()}] Node 02 SUCCESS: Lead scored 94/100 (Threshold: ${qualificationThreshold}).`,
        `[${now()}] Node 03: Categorizing intent for inquiry: "${leadInput.inquiry.slice(0, 40)}..."`,
        ...prev,
      ]);
    }, 1400);

    if (simulateFailure) return;

    // Step 3 -> Step 4
    setTimeout(() => {
      setActiveStepIdx(3);
      setLogs((prev) => [
        `[${now()}] Node 03 SUCCESS: Classified as "Document AI & Extraction Engine".`,
        `[${now()}] Node 04: Transmitting deal to CRM API with optimistic locking...`,
        ...prev,
      ]);
    }, 2100);

    // Step 4 -> Step 5
    setTimeout(() => {
      setActiveStepIdx(4);
      setExecutionState("completed");
      setLogs((prev) => [
        `[${now()}] Node 04 SUCCESS: CRM Lead #CRM-9824 created. Assigned to Senior Partner.`,
        `[${now()}] Node 05 SUCCESS: Slack broadcast dispatched to channel #partner-leads.`,
        `[${now()}] 🎉 Automation workflow finished in 2.8s with 0 warnings.`,
        ...prev,
      ]);
    }, 2800);
  };

  const handleReset = () => {
    setExecutionState("idle");
    setActiveStepIdx(-1);
    setSimulateFailure(false);
    setLogs([
      `[${new Date().toLocaleTimeString()}] System reset to baseline.`,
      `[${new Date().toLocaleTimeString()}] Ready for execution.`,
    ]);
  };

  return (
    <div className="w-full">
      {/* Top Header Bar */}
      <Section spacing="sm" divider="bottom" className="bg-surface">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/demos"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-charcoal-50 hover:text-burnt transition-colors font-semibold"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Demos Directory</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono bg-burnt/10 text-burnt border border-burnt/30 px-3 py-1 font-semibold flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-burnt animate-pulse" />
              Interactive Demo — Deterministic Simulator
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="gap-1.5 text-xs font-mono uppercase"
            >
              <RotateCcw className="h-3.5 w-3.5 text-charcoal-50" />
              <span>Reset State</span>
            </Button>
          </div>
        </div>
      </Section>

      <Section spacing="md" theme="sand">
        <div className="border border-border bg-surface shadow-subtle">
          {/* Internal Application Header */}
          <div className="p-6 bg-charcoal text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-charcoal-200">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase text-burnt tracking-widest font-semibold">
                  Demo 02 • Workflow Automation
                </span>
                <span className="text-charcoal-200">•</span>
                <span className="text-xs font-mono text-sand/80">
                  Autonomous Multi-Stage Pipeline
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif text-white tracking-tight mt-1">
                Lead Intake &amp; Qualification Orchestrator
              </h1>
            </div>

            {/* Run Button */}
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="lg"
                onClick={handleRunWorkflow}
                disabled={executionState === "running"}
                className="gap-2 text-xs font-mono uppercase tracking-wider px-8"
              >
                {executionState === "running" ? (
                  <>
                    <Clock className="h-4 w-4 animate-spin" />
                    <span>Executing Pipeline...</span>
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 fill-current" />
                    <span>Run Automation Pipeline</span>
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Split Row: Configurable Trigger Input & Pipeline Parameters */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Editable Form Trigger Input */}
              <div className="lg:col-span-6 p-6 border border-border bg-sand-50/50 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-burnt" />
                    <h3 className="font-serif text-lg text-charcoal">
                      Step Trigger: Webhook Ingestion Payload
                    </h3>
                  </div>
                  <Badge variant="outline" className="text-[10px] font-mono">
                    Editable Form
                  </Badge>
                </div>
                <p className="text-xs text-charcoal-50">
                  Edit the lead parameters below before executing the automation pipeline to see deterministic routing in action.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <FormGroup>
                      <FormLabel>Client Name</FormLabel>
                      <Input
                        value={leadInput.name}
                        onChange={(e) => setLeadInput({ ...leadInput, name: e.target.value })}
                        disabled={executionState === "running"}
                        className="text-xs"
                      />
                    </FormGroup>

                    <FormGroup>
                      <FormLabel>Organization</FormLabel>
                      <Input
                        value={leadInput.company}
                        onChange={(e) => setLeadInput({ ...leadInput, company: e.target.value })}
                        disabled={executionState === "running"}
                        className="text-xs"
                      />
                    </FormGroup>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <FormGroup>
                      <FormLabel>Business Email</FormLabel>
                      <Input
                        value={leadInput.email}
                        onChange={(e) => setLeadInput({ ...leadInput, email: e.target.value })}
                        disabled={executionState === "running"}
                        className="text-xs"
                      />
                    </FormGroup>

                    <FormGroup>
                      <FormLabel>Declared Budget</FormLabel>
                      <Select
                        value={leadInput.budget}
                        onChange={(e) => setLeadInput({ ...leadInput, budget: e.target.value })}
                        disabled={executionState === "running"}
                        className="text-xs"
                      >
                        <option value="$100,000–$250,000">$100,000–$250,000 (Tier 1)</option>
                        <option value="$50,000–$100,000">$50,000–$100,000 (Tier 2)</option>
                        <option value="$10,000–$25,000">$10,000–$25,000 (Tier 3)</option>
                        <option value="Under $5,000">Under $5,000 (Low Intent)</option>
                      </Select>
                    </FormGroup>
                  </div>

                  <FormGroup>
                    <FormLabel>Inquiry Description</FormLabel>
                    <Textarea
                      rows={3}
                      value={leadInput.inquiry}
                      onChange={(e) => setLeadInput({ ...leadInput, inquiry: e.target.value })}
                      disabled={executionState === "running"}
                      className="text-xs font-sans"
                    />
                  </FormGroup>
                </div>
              </div>

              {/* Right Column: Execution Settings & Failure State Simulator */}
              <div className="lg:col-span-6 p-6 border border-border bg-sand-50/50 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <div className="flex items-center gap-2">
                      <Sliders className="h-4 w-4 text-burnt" />
                      <h3 className="font-serif text-lg text-charcoal">
                        Action Configuration &amp; Rule Thresholds
                      </h3>
                    </div>
                    <Badge variant="outline" className="text-[10px] font-mono">
                      Logic Gates
                    </Badge>
                  </div>

                  <div className="space-y-4 text-xs font-mono">
                    <div className="p-4 bg-surface border border-border space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-charcoal font-semibold">
                          Minimum Lead Score Threshold:
                        </span>
                        <strong className="text-burnt">{qualificationThreshold} / 100</strong>
                      </div>
                      <input
                        type="range"
                        min={50}
                        max={95}
                        step={5}
                        value={qualificationThreshold}
                        onChange={(e) => setQualificationThreshold(Number(e.target.value))}
                        disabled={executionState === "running"}
                        className="w-full accent-burnt cursor-pointer"
                      />
                      <p className="text-[11px] text-charcoal-50 font-sans">
                        Leads scoring above this threshold are dispatched to the enterprise CRM.
                      </p>
                    </div>

                    {/* Simulate Failure State Toggle */}
                    <div className="p-4 bg-surface border border-border flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <span className="font-semibold text-charcoal flex items-center gap-1.5">
                          <AlertTriangle className="h-4 w-4 text-amber-600" />
                          <span>Simulate Pipeline Failure State</span>
                        </span>
                        <p className="text-[11px] text-charcoal-50 font-sans">
                          Forces an evaluation failure at Step 02 to demonstrate automated error quarantine and fallback alerts.
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={simulateFailure}
                        onChange={(e) => setSimulateFailure(e.target.checked)}
                        disabled={executionState === "running"}
                        className="h-4 w-4 accent-burnt mt-1 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-sand-100 border border-border text-[11px] font-mono text-charcoal-50 flex items-center justify-between">
                  <span>Current Pipeline Health:</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Operational [Zero Cold Starts]
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Node Diagram (Connected Steps) */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase text-burnt font-semibold tracking-wider block">
                Topological Node Architecture
              </span>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {stepsConfig.map((step, idx) => (
                  <div
                    key={step.id}
                    className={cn(
                      "p-4 border transition-all duration-300 relative space-y-3",
                      step.status === "running" &&
                        "border-burnt bg-burnt-muted shadow-card ring-2 ring-burnt/30",
                      step.status === "success" &&
                        "border-emerald-500/60 bg-emerald-50/40 text-charcoal",
                      step.status === "failed" &&
                        "border-red-500/60 bg-red-50/40 text-charcoal",
                      step.status === "idle" &&
                        "border-border bg-surface text-charcoal-50"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <step.icon
                        className={cn(
                          "h-5 w-5",
                          step.status === "running" && "text-burnt animate-pulse",
                          step.status === "success" && "text-emerald-700",
                          step.status === "failed" && "text-red-700",
                          step.status === "idle" && "text-charcoal-50"
                        )}
                      />
                      <span className="text-[10px] font-mono uppercase">
                        {step.status === "running" && "Active"}
                        {step.status === "success" && "Cleared"}
                        {step.status === "failed" && "Halted"}
                        {step.status === "idle" && "Standby"}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-mono text-xs font-bold text-charcoal">
                        {step.name}
                      </h4>
                      <p className="text-[10px] text-charcoal-50 mt-0.5 leading-snug">
                        {step.role}
                      </p>
                    </div>

                    {step.status !== "idle" && (
                      <div className="pt-2 border-t border-border/60 text-[10px] font-mono text-charcoal/80 line-clamp-2">
                        {step.outputPreview}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Real-Time Execution Log Terminal */}
            <div className="p-5 bg-charcoal text-white border border-charcoal-200 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-charcoal-200 text-charcoal-50 text-[10px] uppercase">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-burnt" />
                  <span>Execution Event Telemetry (Standard Output)</span>
                </div>
                <span>Status: {executionState.toUpperCase()}</span>
              </div>

              <div className="max-h-48 overflow-y-auto space-y-1.5 text-[11px] text-sand/80 pr-2">
                {logs.map((log, i) => (
                  <div
                    key={i}
                    className={cn(
                      "leading-relaxed",
                      log.includes("FAILED") && "text-red-400 font-semibold",
                      log.includes("SUCCESS") && "text-emerald-400",
                      log.includes("Trigger") && "text-burnt font-semibold"
                    )}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mandatory Discuss Similar Project CTA */}
      <Section spacing="md" theme="surface" divider="top">
        <div className="max-w-4xl mx-auto p-8 sm:p-10 border border-border bg-sand-50/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-burnt font-semibold tracking-wider block">
              Enterprise Engineering
            </span>
            <h3 className="font-serif text-2xl text-charcoal">
              Automating mission-critical operations?
            </h3>
            <p className="text-xs text-charcoal-50 max-w-lg">
              We architect deterministic business workflows, webhook pipelines, and multi-agent systems with zero downtime and strict auditability.
            </p>
          </div>

          <Link
            href="/contact?service=Business+workflow+automation"
            className="shrink-0"
          >
            <Button
              variant="primary"
              size="lg"
              className="gap-2 text-xs font-mono uppercase tracking-wider px-8"
            >
              <span>Discuss a Similar Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
