// components/ui/modular-blocks.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface ModularBlocksProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "brand" | "indicator" | "matrix" | "grid";
  activeBlock?: number;
}

/**
 * Code&Crumbs Signature Brand Motif: Modular Software Component Blocks
 * Represents decoupled, interlocking software architecture components coming together.
 */
export function ModularBlocks({
  className,
  size = "sm",
  variant = "brand",
  activeBlock = 1,
}: ModularBlocksProps) {
  const sizeClasses = {
    xs: "h-1.5 w-1.5 gap-0.5",
    sm: "h-2 w-2 gap-1",
    md: "h-3 w-3 gap-1",
    lg: "h-4 w-4 gap-1.5",
  };

  const blockSizes = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-3 w-3",
    lg: "h-4 w-4",
  };

  if (variant === "indicator") {
    // 3 small sequential architectural blocks (active, pending, future)
    return (
      <div className={cn("inline-flex items-center gap-1", className)}>
        <span className={cn("block border border-charcoal/40 transition-colors", blockSizes[size], activeBlock >= 1 ? "bg-burnt border-burnt" : "bg-transparent")} />
        <span className={cn("block border border-charcoal/40 transition-colors", blockSizes[size], activeBlock >= 2 ? "bg-charcoal border-charcoal" : "bg-transparent")} />
        <span className={cn("block border border-charcoal/40 transition-colors", blockSizes[size], activeBlock >= 3 ? "bg-charcoal/30 border-charcoal/40" : "bg-transparent")} />
      </div>
    );
  }

  if (variant === "matrix") {
    // 2x2 grid representing modular systems architecture
    return (
      <div className={cn("grid grid-cols-2 gap-1 p-0.5 border border-border inline-block bg-surface", className)}>
        <span className="block h-2 w-2 bg-charcoal" />
        <span className="block h-2 w-2 bg-burnt" />
        <span className="block h-2 w-2 bg-border" />
        <span className="block h-2 w-2 bg-charcoal-50" />
      </div>
    );
  }

  // Default "brand" motif: 3 asymmetrical interlocking blocks
  return (
    <div className={cn("inline-flex items-end gap-0.5", className)}>
      <span className={cn("block bg-charcoal transition-transform hover:scale-110", blockSizes[size])} />
      <span className={cn("block bg-burnt transition-transform hover:scale-110", blockSizes[size], "h-[140%]")} />
      <span className={cn("block border border-charcoal/60 bg-transparent transition-transform hover:scale-110", blockSizes[size])} />
    </div>
  );
}

/**
 * Editorial Section Index Badge with Modular Block Glyph
 * e.g., "[ ■ 01 ]"
 */
export function SectionIndexBadge({
  number,
  label,
  className,
}: {
  number: string;
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-charcoal-50", className)}>
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border border-border/80 bg-surface/70 text-charcoal">
        <span className="h-1.5 w-1.5 bg-burnt inline-block" />
        <span className="font-semibold text-charcoal">{number}</span>
      </span>
      {label && <span className="font-medium tracking-wider text-charcoal/80">{label}</span>}
    </div>
  );
}
