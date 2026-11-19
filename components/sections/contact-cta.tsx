import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SectionIndexBadge, ModularBlocks } from "@/components/ui/modular-blocks";
import { ArrowUpRight, ShieldCheck, Mail, Compass } from "lucide-react";

export function ContactCta() {
  return (
    <Section spacing="lg" theme="sand">
      <div className="p-8 sm:p-16 border border-border bg-surface shadow-card relative overflow-hidden">
        {/* Subtle Background Architectural Grid */}
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-20" />

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="flex flex-wrap items-center gap-3">
            <SectionIndexBadge number="06" label="Direct Partner Intake" />
            <span className="hidden sm:inline-block text-xs font-mono text-charcoal-50 border-l border-border pl-3">
              Direct Technical Review • Zero Junior Hand-Offs
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-charcoal tracking-tight leading-[1.08]">
            Ready to build a digital asset with{" "}
            <span className="italic font-normal text-burnt">uncompromised</span> standards?
          </h2>

          <p className="editorial-lead text-charcoal-50 text-base sm:text-lg max-w-xl">
            Whether you require an enterprise SaaS platform, an autonomous AI pipeline, or an architectural digital flagship, our engineering partners are prepared to review your requirements.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="font-medium tracking-wider uppercase text-xs gap-2 py-4 px-8 shadow-card"
              >
                <span>BUILD YOUR PROJECT</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>

            <a href="mailto:codeandcrumbs.agency@gmail.com">
              <Button
                variant="outline"
                size="lg"
                className="font-mono text-xs uppercase gap-2 py-4 px-7 border-border hover:border-charcoal/40"
              >
                <Mail className="h-4 w-4 text-burnt" />
                <span>codeandcrumbs.agency@gmail.com</span>
              </Button>
            </a>
          </div>

          <div className="pt-8 mt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-charcoal-50">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-burnt" />
              <span>Mutual Non-Disclosure Agreement Executed Before Code Access</span>
            </div>
            <div className="flex items-center gap-2">
              <ModularBlocks size="xs" variant="indicator" activeBlock={3} />
              <span>SLA Response &lt; 24 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
