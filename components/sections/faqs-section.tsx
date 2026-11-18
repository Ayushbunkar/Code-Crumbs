"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { faqsData } from "@/data/faqs";
import { Plus, Minus } from "lucide-react";

export function FaqsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section spacing="lg" theme="sand" divider="bottom">
      <div className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase text-burnt tracking-widest block font-semibold">
            09 / Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
            Frequently Answered Questions
          </h2>
          <p className="editorial-lead text-charcoal-50 text-base sm:text-lg">
            Essential operational insights into our studio standards, intellectual property governance, and engineering practices.
          </p>
        </div>

        <div className="max-w-4xl space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="border border-border bg-surface transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 select-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-charcoal font-medium">
                    {faq.question}
                  </span>
                  <div className="p-1 border border-border bg-sand-50 text-charcoal shrink-0">
                    {isOpen ? <Minus className="h-4 w-4 text-burnt" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-border/40 text-sm text-charcoal/80 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
