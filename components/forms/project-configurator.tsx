"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input, Textarea, FormLabel, FormGroup, Select } from "@/components/ui/form";
import { ProjectConfigState } from "@/types/configurator";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Check,
  Shield,
  Clock,
  Sparkles,
  Send,
  RotateCcw,
  Copy,
  Printer,
  ChevronRight,
  AlertCircle,
  Layers,
  Code2,
  DollarSign,
  Calendar,
  User,
  Building,
  Globe,
  FileText,
} from "lucide-react";

const TOTAL_STEPS = 9;

export function ProjectConfigurator() {
  const searchParams = useSearchParams();
  const preselectedParam = searchParams.get("service");

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionReference, setSubmissionReference] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedRef, setCopiedRef] = useState<boolean>(false);

  // Initial Form State
  const [state, setState] = useState<ProjectConfigState>({
    projectTypes: [],
    problemStatement: "",
    targetUsers: "",
    expectedOutcome: "",
    industry: "",
    currentSolution: "",
    features: [],
    designRequirement: "Premium editorial design",
    technologies: [],
    letAgencyDecide: true,
    currency: "USD",
    budgetRange: "$1,000–$3,000",
    timeline: "1–2 months",
    fullName: "",
    businessEmail: "",
    companyName: "",
    website: "",
    country: "United States",
    phone: "",
    privacyConsent: true,
  });

  // Handle URL Preselection from Services Page
  useEffect(() => {
    if (preselectedParam) {
      // Map service name or append it
      setState((prev) => {
        if (!prev.projectTypes.includes(preselectedParam)) {
          return { ...prev, projectTypes: [preselectedParam, ...prev.projectTypes] };
        }
        return prev;
      });
    }
  }, [preselectedParam]);

  // Options Definitions
  const projectTypeOptions = [
    "SaaS product",
    "Business website",
    "Web application",
    "Mobile application",
    "ERP / CRM",
    "AI agent",
    "AI chatbot",
    "Workflow automation",
    "Internal business tool",
    "E-commerce platform",
    "API integration",
    "MVP",
    "Existing product improvement",
    "Something else",
  ];

  const featureOptions = [
    "User authentication",
    "Admin dashboard",
    "Customer dashboard",
    "Payment integration",
    "Subscription management",
    "Database and APIs",
    "AI integration",
    "Document processing",
    "Analytics",
    "Notifications",
    "Third-party integrations",
    "Mobile responsiveness",
    "Role-based access",
    "Reporting",
    "Inventory management",
    "Other requirements",
  ];

  const designOptions = [
    { title: "Minimal business design", desc: "Clean, structured, corporate clarity" },
    { title: "Premium editorial design", desc: "Swiss typography, tactile whitespace, high authority" },
    { title: "Dashboard UI/UX", desc: "High-density data layouts, virtualized tables, ergonomics" },
    { title: "3D interactive website", desc: "React Three Fiber viewports, spatial objects, kinetic motion" },
    { title: "Existing website redesign", desc: "Replatforming legacy web to modern Next.js" },
    { title: "Need design consultation", desc: "Collaborate with Code&Crumbs design principals" },
  ];

  const techOptions = [
    "React / Next.js",
    "Node.js",
    "Python / FastAPI",
    "AI / LLM integrations",
    "Cloud infrastructure",
    "Other",
  ];

  const budgetOptionsUSD = [
    "Below $500",
    "$500–$1,000",
    "$1,000–$3,000",
    "$3,000–$5,000",
    "$5,000+",
    "Not decided",
  ];

  const budgetOptionsINR = [
    "Below ₹25,000",
    "₹25,000–₹50,000",
    "₹50,000–₹1,00,000",
    "₹1,00,000–₹3,00,000",
    "₹3,00,000+",
    "Not decided",
  ];

  const timelineOptions = [
    "Urgent",
    "2–4 weeks",
    "1–2 months",
    "3+ months",
    "Flexible",
  ];

  const countries = [
    "United States",
    "United Kingdom",
    "India",
    "Germany",
    "Canada",
    "Australia",
    "Switzerland",
    "Singapore",
    "United Arab Emirates",
    "France",
    "Netherlands",
    "Other International",
  ];

  // Multi-select toggle helpers
  const toggleProjectType = (type: string) => {
    setState((prev) => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type)
        ? prev.projectTypes.filter((t) => t !== type)
        : [...prev.projectTypes, type],
    }));
  };

  const toggleFeature = (feature: string) => {
    setState((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const toggleTech = (tech: string) => {
    setState((prev) => {
      const exists = prev.technologies.includes(tech);
      const updated = exists
        ? prev.technologies.filter((t) => t !== tech)
        : [...prev.technologies, tech];
      return {
        ...prev,
        technologies: updated,
        letAgencyDecide: updated.length === 0,
      };
    });
  };

  // Step Validation Check
  const canProceed = () => {
    if (currentStep === 1) return state.projectTypes.length > 0;
    if (currentStep === 2) return state.problemStatement.trim().length > 10;
    if (currentStep === 3) return state.features.length > 0;
    if (currentStep === 4) return !!state.designRequirement;
    if (currentStep === 6) return !!state.budgetRange;
    if (currentStep === 7) return !!state.timeline;
    if (currentStep === 8) {
      return (
        state.fullName.trim().length > 1 &&
        state.businessEmail.includes("@") &&
        state.businessEmail.includes(".")
      );
    }
    return true;
  };

  const handleNext = () => {
    if (canProceed() && currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  const handleJumpToStep = (stepNumber: number) => {
    setCurrentStep(stepNumber);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  // Final Submission Handler
  const handleSubmitBrief = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit brief.");
      }

      setSubmissionReference(data.reference);
    } catch (err: unknown) {
      setSubmitError(
        err instanceof Error ? err.message : "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    if (!submissionReference) return;
    navigator.clipboard.writeText(submissionReference);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2500);
  };

  // Success Screen
  if (submissionReference) {
    return (
      <div className="max-w-4xl mx-auto py-12">
        <Card variant="paper" className="p-8 sm:p-14 text-center space-y-8 animate-fade-in">
          <div className="h-20 w-20 bg-burnt/10 border border-burnt/30 text-burnt rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="h-10 w-10" />
          </div>

          <div className="space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-burnt font-semibold">
              Project Brief Confirmed & Logged
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-charcoal">
              Thank you, {state.fullName}.
            </h2>
            <p className="text-sm text-charcoal-50 max-w-lg mx-auto leading-relaxed">
              We have received your comprehensive specifications for{" "}
              <strong className="text-charcoal">{state.companyName || "your venture"}</strong>. Our senior software architects are reviewing your requirements.
            </p>
          </div>

          {/* Reference Pill */}
          <div className="p-6 bg-sand-50 border border-border inline-flex flex-col sm:flex-row items-center gap-4 text-left">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-charcoal-50 block">
                Unique Enquiry Reference
              </span>
              <span className="text-2xl font-mono font-bold text-charcoal tracking-wider">
                {submissionReference}
              </span>
            </div>
            <button
              onClick={copyToClipboard}
              className="px-3 py-2 text-xs font-mono border border-border bg-surface hover:bg-sand-200 text-charcoal flex items-center gap-1.5 transition-colors"
            >
              {copiedRef ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedRef ? "Copied" : "Copy Code"}</span>
            </button>
          </div>

          {/* SLA Statement */}
          <div className="p-4 bg-surface border border-border/80 max-w-md mx-auto text-xs font-mono text-charcoal/80 space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-burnt font-semibold">
              <Clock className="h-4 w-4" />
              <span>Response SLA: Within 24 Business Hours</span>
            </div>
            <p className="text-charcoal-50 text-[11px]">
              Direct correspondence dispatched to <span className="font-semibold text-charcoal">{state.businessEmail}</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-border">
            <Button
              variant="outline"
              size="default"
              onClick={() => window.print()}
              className="gap-2 text-xs font-mono uppercase"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print Brief Summary</span>
            </Button>

            <Link href="/">
              <Button variant="primary" size="default" className="text-xs font-mono uppercase">
                Return to Studio Homepage
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  // Step Titles for Progress Indicator
  const stepTitles = [
    "What to Build",
    "Problem Statement",
    "Features Selection",
    "Design Direction",
    "Technology Preferences",
    "Budget Range",
    "Timeline",
    "Contact Details",
    "Review & Submit",
  ];

  const progressPercentage = Math.round((currentStep / TOTAL_STEPS) * 100);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Progress Header */}
      <div className="p-6 bg-surface border border-border shadow-subtle space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-burnt font-bold">
              Step 0{currentStep} of 0{TOTAL_STEPS}
            </span>
            <span className="text-charcoal-50">•</span>
            <span className="font-semibold text-charcoal uppercase">
              {stepTitles[currentStep - 1]}
            </span>
          </div>
          <span className="text-charcoal-50">{progressPercentage}% Complete</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-sand-200 h-1.5 relative overflow-hidden">
          <motion.div
            className="h-full bg-burnt"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Step Container */}
      <Card variant="paper" className="p-6 sm:p-12 relative min-h-[500px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {/* STEP 1: WHAT DO YOU WANT TO BUILD? */}
          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div>
                <span className="text-xs font-mono uppercase text-burnt tracking-widest font-semibold block mb-1">
                  Step 01 / Archetype
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif text-charcoal tracking-tight">
                  What do you want Code&Crumbs to build?
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-50 mt-1">
                  Select all software categories and platforms relevant to your requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {projectTypeOptions.map((type) => {
                  const isSelected = state.projectTypes.includes(type);
                  return (
                    <button
                      type="button"
                      key={type}
                      onClick={() => toggleProjectType(type)}
                      className={`p-4 text-left border text-xs font-mono transition-all flex items-center justify-between ${
                        isSelected
                          ? "border-burnt bg-burnt-muted text-charcoal font-semibold shadow-subtle"
                          : "border-border bg-surface text-charcoal-50 hover:bg-sand-50 hover:border-charcoal/30"
                      }`}
                    >
                      <span>{type}</span>
                      {isSelected && <CheckCircle2 className="h-4 w-4 text-burnt shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 2: WHAT PROBLEM ARE YOU SOLVING? */}
          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div>
                <span className="text-xs font-mono uppercase text-burnt tracking-widest font-semibold block mb-1">
                  Step 02 / Problem Context
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif text-charcoal tracking-tight">
                  What core business problem are you solving?
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-50 mt-1">
                  Detail your user pain points, expected business outcome, and current operational setup.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <FormGroup>
                  <FormLabel required>Core Business Problem & Opportunity</FormLabel>
                  <Textarea
                    placeholder="Describe what is broken, slow, or missing. What will this new software enable that isn't possible today?"
                    rows={4}
                    value={state.problemStatement}
                    onChange={(e) => setState({ ...state, problemStatement: e.target.value })}
                  />
                </FormGroup>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormGroup>
                    <FormLabel>Target Users / Customers</FormLabel>
                    <Input
                      placeholder="e.g. Enterprise risk managers, B2B founders, external clients"
                      value={state.targetUsers}
                      onChange={(e) => setState({ ...state, targetUsers: e.target.value })}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>Industry / Sector</FormLabel>
                    <Input
                      placeholder="e.g. Fintech, Healthcare, Logistics, SaaS, Creative"
                      value={state.industry}
                      onChange={(e) => setState({ ...state, industry: e.target.value })}
                    />
                  </FormGroup>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormGroup>
                    <FormLabel>Expected Business Outcome</FormLabel>
                    <Input
                      placeholder="e.g. 5x faster onboarding, launch MVP for Series A, replace Excel"
                      value={state.expectedOutcome}
                      onChange={(e) => setState({ ...state, expectedOutcome: e.target.value })}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>Current Workaround / Solution (if any)</FormLabel>
                    <Input
                      placeholder="e.g. Manual spreadsheets, legacy WordPress, multiple disconnected tools"
                      value={state.currentSolution}
                      onChange={(e) => setState({ ...state, currentSolution: e.target.value })}
                    />
                  </FormGroup>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 3: SELECT FEATURES */}
          {currentStep === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div>
                <span className="text-xs font-mono uppercase text-burnt tracking-widest font-semibold block mb-1">
                  Step 03 / Functional Scope
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif text-charcoal tracking-tight">
                  Select required software features
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-50 mt-1">
                  Choose all functional capabilities required for your initial release.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {featureOptions.map((feature) => {
                  const isSelected = state.features.includes(feature);
                  return (
                    <button
                      type="button"
                      key={feature}
                      onClick={() => toggleFeature(feature)}
                      className={`p-3.5 text-left border text-xs font-mono transition-all flex items-center justify-between ${
                        isSelected
                          ? "border-burnt bg-burnt-muted text-charcoal font-semibold shadow-subtle"
                          : "border-border bg-surface text-charcoal-50 hover:bg-sand-50"
                      }`}
                    >
                      <span>{feature}</span>
                      {isSelected && <CheckCircle2 className="h-4 w-4 text-burnt shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 4: DESIGN REQUIREMENTS */}
          {currentStep === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div>
                <span className="text-xs font-mono uppercase text-burnt tracking-widest font-semibold block mb-1">
                  Step 04 / Visual Direction
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif text-charcoal tracking-tight">
                  Select your design & aesthetic requirements
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-50 mt-1">
                  Determine the visual polish, typography discipline, and interaction complexity.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {designOptions.map((opt) => {
                  const isSelected = state.designRequirement === opt.title;
                  return (
                    <button
                      type="button"
                      key={opt.title}
                      onClick={() => setState({ ...state, designRequirement: opt.title })}
                      className={`p-5 text-left border transition-all flex flex-col justify-between space-y-2 ${
                        isSelected
                          ? "border-burnt bg-burnt-muted/50 text-charcoal shadow-subtle"
                          : "border-border bg-surface text-charcoal-50 hover:bg-sand-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-semibold text-charcoal text-base">
                          {opt.title}
                        </span>
                        {isSelected && <CheckCircle2 className="h-4 w-4 text-burnt shrink-0" />}
                      </div>
                      <p className="text-xs text-charcoal-50">{opt.desc}</p>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 5: TECHNOLOGY PREFERENCES (OPTIONAL) */}
          {currentStep === 5 && (
            <motion.div
              key="step-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono uppercase text-burnt tracking-widest font-semibold block mb-1">
                    Step 05 / Technology (Optional)
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-serif text-charcoal tracking-tight">
                    Do you have specific tech stack preferences?
                  </h2>
                </div>
                <Badge variant="outline" className="font-mono text-xs w-fit">
                  Optional Step
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-50">
                You can specify constraints or let our senior software architects recommend the ideal modern stack.
              </p>

              {/* Default "Let Agency Decide" Button */}
              <button
                type="button"
                onClick={() =>
                  setState({ ...state, letAgencyDecide: true, technologies: [] })
                }
                className={`w-full p-4 border text-left font-mono text-xs transition-all flex items-center justify-between ${
                  state.letAgencyDecide
                    ? "border-burnt bg-burnt-muted text-charcoal font-semibold shadow-subtle"
                    : "border-border bg-sand-50 text-charcoal-50 hover:bg-surface"
                }`}
              >
                <div>
                  <span className="font-bold text-sm block mb-0.5">
                    Let Code&Crumbs recommend the best architecture
                  </span>
                  <span className="text-[11px] text-charcoal-50 font-normal">
                    We select battle-tested stacks (Next.js 15, TypeScript, Python, R3F) matching your speed and scale requirements.
                  </span>
                </div>
                {state.letAgencyDecide && <CheckCircle2 className="h-5 w-5 text-burnt shrink-0" />}
              </button>

              <div className="pt-2">
                <span className="text-xs font-mono uppercase text-charcoal-50 block mb-2 font-semibold">
                  Or specify custom preferences:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {techOptions.map((tech) => {
                    const isSelected = state.technologies.includes(tech);
                    return (
                      <button
                        type="button"
                        key={tech}
                        onClick={() => toggleTech(tech)}
                        className={`p-3 text-left border text-xs font-mono transition-all flex items-center justify-between ${
                          isSelected
                            ? "border-burnt bg-surface text-charcoal font-semibold"
                            : "border-border bg-surface text-charcoal-50 hover:bg-sand-50"
                        }`}
                      >
                        <span>{tech}</span>
                        {isSelected && <Check className="h-3.5 w-3.5 text-burnt" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 6: BUDGET */}
          {currentStep === 6 && (
            <motion.div
              key="step-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase text-burnt tracking-widest font-semibold block mb-1">
                    Step 06 / Investment
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-serif text-charcoal tracking-tight">
                    Select your anticipated budget bracket
                  </h2>
                </div>

                {/* Currency Switcher: INR vs USD */}
                <div className="flex items-center gap-1 bg-sand-100 p-1 border border-border">
                  <button
                    type="button"
                    onClick={() =>
                      setState({
                        ...state,
                        currency: "USD",
                        budgetRange: budgetOptionsUSD[2],
                      })
                    }
                    className={`px-3 py-1.5 text-xs font-mono uppercase transition-colors ${
                      state.currency === "USD"
                        ? "bg-charcoal text-white font-semibold"
                        : "text-charcoal-50 hover:text-charcoal"
                    }`}
                  >
                    USD ($)
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setState({
                        ...state,
                        currency: "INR",
                        budgetRange: budgetOptionsINR[2],
                      })
                    }
                    className={`px-3 py-1.5 text-xs font-mono uppercase transition-colors ${
                      state.currency === "INR"
                        ? "bg-charcoal text-white font-semibold"
                        : "text-charcoal-50 hover:text-charcoal"
                    }`}
                  >
                    INR (₹)
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-charcoal-50">
                Helps us calibrate initial architectural depth and sprint duration. We do not generate fake automated quotes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                {(state.currency === "USD" ? budgetOptionsUSD : budgetOptionsINR).map((range) => {
                  const isSelected = state.budgetRange === range;
                  return (
                    <button
                      type="button"
                      key={range}
                      onClick={() => setState({ ...state, budgetRange: range })}
                      className={`p-5 text-left border text-sm font-mono transition-all flex items-center justify-between ${
                        isSelected
                          ? "border-burnt bg-burnt-muted text-charcoal font-bold shadow-subtle"
                          : "border-border bg-surface text-charcoal-50 hover:bg-sand-50"
                      }`}
                    >
                      <span>{range}</span>
                      {isSelected && <CheckCircle2 className="h-4 w-4 text-burnt shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 7: TIMELINE */}
          {currentStep === 7 && (
            <motion.div
              key="step-7"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div>
                <span className="text-xs font-mono uppercase text-burnt tracking-widest font-semibold block mb-1">
                  Step 07 / Velocity
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif text-charcoal tracking-tight">
                  When do you need this delivered?
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-50 mt-1">
                  We schedule dedicated engineering capacity to guarantee focused momentum.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                {timelineOptions.map((t) => {
                  const isSelected = state.timeline === t;
                  return (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setState({ ...state, timeline: t })}
                      className={`p-5 text-left border text-sm font-mono transition-all flex items-center justify-between ${
                        isSelected
                          ? "border-burnt bg-burnt-muted text-charcoal font-bold shadow-subtle"
                          : "border-border bg-surface text-charcoal-50 hover:bg-sand-50"
                      }`}
                    >
                      <span>{t}</span>
                      {isSelected && <CheckCircle2 className="h-4 w-4 text-burnt shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 8: CONTACT INFORMATION */}
          {currentStep === 8 && (
            <motion.div
              key="step-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div>
                <span className="text-xs font-mono uppercase text-burnt tracking-widest font-semibold block mb-1">
                  Step 08 / Direct Access
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif text-charcoal tracking-tight">
                  Who should our partners contact?
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-50 mt-1">
                  We communicate directly via email and scheduled discovery calls. Zero spam.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormGroup>
                    <FormLabel required>Full Name</FormLabel>
                    <Input
                      placeholder="e.g. Elena Vance"
                      required
                      value={state.fullName}
                      onChange={(e) => setState({ ...state, fullName: e.target.value })}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel required>Business Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="e.g. elena@vanceholdings.com"
                      required
                      value={state.businessEmail}
                      onChange={(e) => setState({ ...state, businessEmail: e.target.value })}
                    />
                  </FormGroup>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormGroup>
                    <FormLabel>Company or Venture Name</FormLabel>
                    <Input
                      placeholder="e.g. Vance Bio Labs"
                      value={state.companyName}
                      onChange={(e) => setState({ ...state, companyName: e.target.value })}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>Existing Website URL (Optional)</FormLabel>
                    <Input
                      placeholder="https://..."
                      value={state.website}
                      onChange={(e) => setState({ ...state, website: e.target.value })}
                    />
                  </FormGroup>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormGroup>
                    <FormLabel>Country of Operation</FormLabel>
                    <Select
                      value={state.country}
                      onChange={(e) => setState({ ...state, country: e.target.value })}
                    >
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>Phone / WhatsApp (Optional)</FormLabel>
                    <Input
                      placeholder="+1 (555) 000-0000"
                      value={state.phone}
                      onChange={(e) => setState({ ...state, phone: e.target.value })}
                    />
                  </FormGroup>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 9: FINAL REVIEW */}
          {currentStep === 9 && (
            <motion.div
              key="step-9"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div>
                <span className="text-xs font-mono uppercase text-burnt tracking-widest font-semibold block mb-1">
                  Step 09 / Review & Verification
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif text-charcoal tracking-tight">
                  Review your project specification
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-50 mt-1">
                  Ensure all requirements are accurately captured. You can jump back to edit any section.
                </p>
              </div>

              {/* Review Summary Grid */}
              <div className="space-y-4 pt-2">
                {/* Section 1: Services & Problem */}
                <div className="p-5 border border-border bg-sand-50/70 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-border/80">
                    <span className="text-xs font-mono uppercase text-burnt font-semibold flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5" />
                      <span>01. Project Types & Problem</span>
                    </span>
                    <button
                      onClick={() => handleJumpToStep(1)}
                      className="text-xs font-mono text-charcoal hover:text-burnt underline"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="text-xs font-mono text-charcoal space-y-1">
                    <div>
                      <span className="text-charcoal-50">Selected Archetypes: </span>
                      <strong className="text-charcoal font-semibold">
                        {state.projectTypes.join(", ") || "None specified"}
                      </strong>
                    </div>
                    {state.problemStatement && (
                      <div className="pt-1">
                        <span className="text-charcoal-50 block">Problem Statement:</span>
                        <p className="text-charcoal italic mt-0.5 font-sans text-xs">
                          &ldquo;{state.problemStatement}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Section 2: Features & Design */}
                <div className="p-5 border border-border bg-sand-50/70 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-border/80">
                    <span className="text-xs font-mono uppercase text-burnt font-semibold flex items-center gap-1.5">
                      <Code2 className="h-3.5 w-3.5" />
                      <span>02. Features & Design Direction</span>
                    </span>
                    <button
                      onClick={() => handleJumpToStep(3)}
                      className="text-xs font-mono text-charcoal hover:text-burnt underline"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="text-xs font-mono text-charcoal space-y-2">
                    <div>
                      <span className="text-charcoal-50">Design Language: </span>
                      <strong className="text-charcoal">{state.designRequirement}</strong>
                    </div>
                    <div>
                      <span className="text-charcoal-50">Required Features ({state.features.length}):</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {state.features.map((f) => (
                          <span
                            key={f}
                            className="bg-surface border border-border px-2 py-0.5 text-[11px]"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Tech, Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 border border-border bg-sand-50/70 space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-border/80">
                      <span className="text-xs font-mono uppercase text-burnt font-semibold flex items-center gap-1.5">
                        <DollarSign className="h-3.5 w-3.5" />
                        <span>Investment & Velocity</span>
                      </span>
                      <button
                        onClick={() => handleJumpToStep(6)}
                        className="text-xs font-mono text-charcoal hover:text-burnt underline"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="text-xs font-mono space-y-1">
                      <div>
                        <span className="text-charcoal-50">Budget Bracket: </span>
                        <strong>{state.budgetRange}</strong> ({state.currency})
                      </div>
                      <div>
                        <span className="text-charcoal-50">Target Window: </span>
                        <strong>{state.timeline}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 border border-border bg-sand-50/70 space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-border/80">
                      <span className="text-xs font-mono uppercase text-burnt font-semibold flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5" />
                        <span>Client Information</span>
                      </span>
                      <button
                        onClick={() => handleJumpToStep(8)}
                        className="text-xs font-mono text-charcoal hover:text-burnt underline"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="text-xs font-mono space-y-1">
                      <div>
                        <span className="text-charcoal-50">Contact: </span>
                        <strong>{state.fullName}</strong> ({state.businessEmail})
                      </div>
                      <div>
                        <span className="text-charcoal-50">Entity: </span>
                        <strong>{state.companyName || "Not provided"}</strong> ({state.country})
                      </div>
                    </div>
                  </div>
                </div>

                {/* Error Banner if any */}
                {submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Privacy Consent Checkbox */}
                <div className="p-4 bg-surface border border-border flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={state.privacyConsent}
                    onChange={(e) => setState({ ...state, privacyConsent: e.target.checked })}
                    className="mt-0.5 h-4 w-4 accent-burnt cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-xs text-charcoal/80 cursor-pointer">
                    I agree to the Code&Crumbs{" "}
                    <Link href="/privacy" className="underline text-burnt">
                      Privacy Policy
                    </Link>{" "}
                    and confirm that submitted specifications are protected under strict mutual confidentiality.
                  </label>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step Navigation Bar */}
        <div className="pt-8 mt-8 border-t border-border flex items-center justify-between gap-4">
          <div>
            {currentStep > 1 && (
              <Button
                variant="outline"
                size="default"
                onClick={handleBack}
                disabled={isSubmitting}
                className="gap-2 text-xs font-mono uppercase"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back</span>
              </Button>
            )}
          </div>

          <div>
            {currentStep < TOTAL_STEPS ? (
              <Button
                variant="primary"
                size="lg"
                onClick={handleNext}
                disabled={!canProceed()}
                className="gap-2 text-xs font-mono uppercase tracking-wider px-8"
              >
                <span>Continue</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant="primary"
                size="lg"
                onClick={handleSubmitBrief}
                disabled={isSubmitting || !state.privacyConsent}
                className="gap-2 text-xs font-mono uppercase tracking-wider px-8"
              >
                {isSubmitting ? (
                  <>
                    <Clock className="h-4 w-4 animate-spin" />
                    <span>Logging Brief...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Project Brief</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
