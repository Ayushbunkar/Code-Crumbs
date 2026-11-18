import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function AgencyIntro() {
  return (
    <Section spacing="lg" theme="dark" divider="bottom">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono uppercase text-burnt tracking-widest block font-semibold">
            06 / Studio Manifesto
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-[1.15]">
            We build for organizations that refuse to blend into the generic background.
          </h2>
          <p className="text-charcoal-50 text-base sm:text-lg leading-relaxed">
            The modern web is inundated with cookie-cutter landing pages, neon gradients, and slow template bloat. Code&Crumbs stands as an antidote: an international creative software practice that treats web architecture with the mathematical discipline of Swiss typography and the precision of industrial design.
          </p>
        </div>

        <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-white/10 lg:pl-10">
          <div className="space-y-4 text-sm text-charcoal-50">
            <div className="p-4 border border-white/10 bg-charcoal-950">
              <span className="font-mono text-xs uppercase text-white block mb-1">
                Direct Principal Involvement
              </span>
              <p className="text-xs leading-relaxed">
                Zero layers of junior account executives. You collaborate directly with senior frontend engineers and design directors.
              </p>
            </div>
            <div className="p-4 border border-white/10 bg-charcoal-950">
              <span className="font-mono text-xs uppercase text-white block mb-1">
                Zero Template Shortcuts
              </span>
              <p className="text-xs leading-relaxed">
                Every line of code and every interaction is tailored specifically to your audience and business goals.
              </p>
            </div>
          </div>

          <Link href="/about" className="inline-block">
            <Button variant="primary" size="default" className="text-xs uppercase font-mono tracking-wider gap-2">
              <span>Read Agency Manifesto</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
