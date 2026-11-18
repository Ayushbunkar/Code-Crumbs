"use client";

import React, { useEffect, useRef } from "react";
import { Section } from "@/components/ui/section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Check if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el, index) => {
        if (!el) return;

        gsap.fromTo(
          el,
          { opacity: 0.25, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 60%",
              scrub: 0.6,
            },
          }
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const milestones = [
    {
      index: "01",
      label: "Zero Template Bloat",
      heading: "Architectural Precision from Ground Zero",
      body: "We discard generic boilerplates and visual clichés. Every digital flagship is designed around an uncompromising Swiss grid and purpose-built component primitives.",
    },
    {
      index: "02",
      label: "Tactile Kinetic Response",
      heading: "Purposeful 3D & Real-time WebGL",
      body: "Interactive spatial viewports engineered with React Three Fiber, custom GLSL vertex shaders, and hardware-aware tiering that runs effortlessly across all devices.",
    },
    {
      index: "03",
      label: "Institutional Speed",
      heading: "Sub-Second Global Edge Delivery",
      body: "Next.js 15 App Router architecture optimized for instant Core Web Vitals, sub-second LCP, and zero cumulative layout shifts under cellular network conditions.",
    },
  ];

  return (
    <Section spacing="lg" theme="sand" divider="bottom">
      <div ref={containerRef} className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div>
            <span className="text-xs font-mono uppercase text-burnt tracking-widest block font-semibold mb-2">
              Studio Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal tracking-tight">
              The Code&Crumbs Engineering Standards
            </h2>
          </div>
          <span className="text-xs font-mono text-charcoal-50">
            [SCROLL-DRIVEN ARCHITECTURE AUDIT]
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((item, idx) => (
            <div
              key={item.index}
              ref={(el) => {
                itemsRef.current[idx] = el;
              }}
              className="p-8 border border-border bg-surface shadow-subtle flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-border/80">
                  <span className="font-serif text-2xl font-semibold text-burnt">
                    {item.index}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-50">
                    {item.label}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-charcoal font-medium mt-4 mb-2">
                  {item.heading}
                </h3>
                <p className="text-xs text-charcoal-50 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
