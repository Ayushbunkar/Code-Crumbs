"use client";

import React, { useState } from "react";
import { ProjectScreenshot } from "@/data/projects";
import { BrowserMockup } from "@/components/portfolio/browser-mockup";
import { cn } from "@/lib/utils";
import { Layers, Monitor, Sliders, FileCode, Check } from "lucide-react";

interface ProjectGalleryProps {
  slug: string;
  screenshots: ProjectScreenshot[];
}

export function ProjectGallery({ slug, screenshots }: ProjectGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeScreenshot = screenshots[selectedIdx] || screenshots[0];

  return (
    <div className="space-y-6">
      {/* Gallery Tabs Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-charcoal-50 font-semibold">
            Gallery Views ({screenshots.length}):
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {screenshots.map((s, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedIdx(idx)}
                className={cn(
                  "px-3 py-1.5 text-xs font-mono uppercase transition-all flex items-center gap-2 border",
                  isSelected
                    ? "bg-burnt text-white border-burnt shadow-subtle font-semibold"
                    : "bg-surface text-charcoal-50 border-border hover:bg-sand-100 hover:text-charcoal"
                )}
              >
                {s.type === "browser" && <Monitor className="h-3 w-3" />}
                {s.type === "dashboard" && <Sliders className="h-3 w-3" />}
                {s.type === "schematic" && <FileCode className="h-3 w-3" />}
                <span>{s.title}</span>
                {isSelected && <Check className="h-3 w-3" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Large Visual Browser Mockup */}
      <div className="transition-all duration-300">
        <BrowserMockup slug={slug} screenshotId={activeScreenshot.id} interactive={true} />
      </div>

      {/* Caption & Architectural Highlight Banner */}
      <div className="p-4 bg-surface border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase text-burnt font-semibold tracking-wider block">
            Interface Viewport • {activeScreenshot.title}
          </span>
          <p className="text-xs text-charcoal-50 font-sans max-w-2xl">
            {activeScreenshot.caption}
          </p>
        </div>
        <div className="shrink-0 text-xs font-mono text-charcoal-50 bg-sand-100 border border-border px-3 py-1">
          Scale: 100% Native Render
        </div>
      </div>
    </div>
  );
}
