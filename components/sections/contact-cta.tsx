import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ShieldCheck, Mail } from "lucide-react";

export function ContactCta() {
  return (
    <Section spacing="lg" theme="sand">
      <div className="p-8 sm:p-16 border border-border bg-surface shadow-card relative overflow-hidden">
        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            <span className="text-xs font-mono uppercase tracking-widest text-charcoal-50 font-semibold">
              Currently Scheduling Engagements
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-charcoal tracking-tight leading-[1.1]">
            Ready to build a digital asset with{" "}
            <span className="italic font-normal text-burnt">uncompromised</span> standards?
          </h2>

          <p className="editorial-lead text-charcoal-50 text-base sm:text-lg max-w-xl">
            Whether you require a complete digital flagship, a specialized 3D experience, or a high-density SaaS application, our principals are ready to consult.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="font-medium tracking-wider uppercase text-xs gap-2 py-4 px-8"
              >
                <span>BUILD YOUR PROJECT</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="mailto:partner@codeandcrumbs.com">
              <Button
                variant="outline"
                size="lg"
                className="font-mono text-xs uppercase gap-2 py-4 px-7"
              >
                <Mail className="h-4 w-4 text-burnt" />
                <span>partner@codeandcrumbs.com</span>
              </Button>
            </Link>
          </div>

          <div className="pt-8 mt-8 border-t border-border flex items-center gap-2 text-xs font-mono text-charcoal-50">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Mutual Non-Disclosure Agreement Executed Before Code Access</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
