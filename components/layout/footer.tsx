import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ArrowUpRight, ShieldCheck, FileText } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-charcoal text-white pt-24 pb-12 border-t border-charcoal-200">
      <Container size="wide">
        {/* Upper Editorial Call to Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-burnt" />
              <span className="text-burnt uppercase text-xs font-mono tracking-widest block font-medium">
                Client Acquisition & Project Scope
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-white max-w-3xl leading-[1.12]">
              Construct your unfair digital advantage with high-conviction engineering.
            </h2>
            <p className="text-charcoal-50 max-w-xl text-base leading-relaxed">
              We partner selectively with venture-backed leaders and forward-looking enterprises to build modern flagships, web apps, and 3D experiences.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end gap-5">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto uppercase tracking-wider text-xs font-semibold gap-2 py-4 px-8"
              >
                <span>BUILD YOUR PROJECT</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="mailto:codeandcrumbs.agency@gmail.com"
              className="group inline-flex items-center gap-2 text-sm text-charcoal-50 hover:text-burnt transition-colors font-mono"
            >
              <span>codeandcrumbs.agency@gmail.com</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-burnt transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Middle Navigation & Information Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 py-16 text-sm text-charcoal-50 border-b border-white/10">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4 pr-6">
            <Logo variant="dark" size="md" withSubtext />
            <p className="text-sm leading-relaxed text-muted-foreground pt-2 max-w-sm">
              Code&Crumbs is an international digital agency designing bespoke web systems, interactive 3D spaces, and performant digital flagships.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span>EST. 2024</span>
              <span>•</span>
              <span>GLOBAL PRACTICE</span>
            </div>
          </div>

          {/* Core Routes */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider text-white font-semibold">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/demos" className="hover:text-white transition-colors">
                  Live Demos
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Interactive Demos */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider text-white font-semibold">
              Live Prototypes
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/demos/saas-dashboard"
                  className="hover:text-burnt transition-colors flex items-center gap-1.5"
                >
                  <span>SaaS Dashboard</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/demos/ai-automation"
                  className="hover:text-burnt transition-colors flex items-center gap-1.5"
                >
                  <span>AI Automation Hub</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/demos/erp-workflow"
                  className="hover:text-burnt transition-colors flex items-center gap-1.5"
                >
                  <span>ERP Workflow Engine</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Standards */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider text-white font-semibold">
              Legal & Terms
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/resources"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <FileText className="h-3.5 w-3.5 text-burnt" />
                  <span>Sales Kit &amp; Resources</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-burnt" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <FileText className="h-3.5 w-3.5 text-burnt" />
                  <span>Terms of Engagement</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <p>© {currentYear} Code&Crumbs Agency Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Next.js 15 App Router</span>
            <span>•</span>
            <span>R3F 3D Canvas</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
