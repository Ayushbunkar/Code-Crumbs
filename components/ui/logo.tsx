import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  withSubtext?: boolean;
  className?: string;
}

export function Logo({
  variant = "light",
  size = "md",
  withSubtext = false,
  className,
}: LogoProps) {
  const isDark = variant === "dark";

  const sizeConfig = {
    sm: {
      text: "text-lg",
      amp: "text-xl",
      subtext: "text-[9px] tracking-[0.2em]",
    },
    md: {
      text: "text-xl",
      amp: "text-2xl",
      subtext: "text-[10px] tracking-[0.22em]",
    },
    lg: {
      text: "text-3xl",
      amp: "text-4xl",
      subtext: "text-xs tracking-[0.25em]",
    },
  };

  const currentSize = sizeConfig[size];

  return (
    <Link
      href="/"
      aria-label="Code and Crumbs Homepage"
      className={cn("group inline-flex flex-col leading-none select-none", className)}
    >
      <div className="flex items-baseline gap-0.5">
        <span
          className={cn(
            "font-sans font-black tracking-tighter uppercase transition-colors",
            currentSize.text,
            isDark ? "text-white" : "text-charcoal"
          )}
        >
          CODE
        </span>
        <span
          className={cn(
            "font-serif italic font-normal text-burnt transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 inline-block px-0.5",
            currentSize.amp
          )}
        >
          &
        </span>
        <span
          className={cn(
            "font-sans font-black tracking-tighter uppercase transition-colors",
            currentSize.text,
            isDark ? "text-white" : "text-charcoal"
          )}
        >
          CRUMBS
        </span>

        {/* Modular software component block signature */}
        <span className="inline-flex items-end gap-0.5 ml-1.5 mb-1 opacity-90 group-hover:opacity-100 transition-opacity">
          <span className={cn("block w-1.5 h-1.5", isDark ? "bg-white" : "bg-charcoal")} />
          <span className="block w-1.5 h-2.5 bg-burnt" />
          <span className={cn("block w-1.5 h-1.5 border", isDark ? "border-white/60" : "border-charcoal/60")} />
        </span>
      </div>

      {withSubtext && (
        <span
          className={cn(
            "font-mono uppercase mt-1 font-medium tracking-[0.2em]",
            currentSize.subtext,
            isDark ? "text-muted-foreground" : "text-charcoal-50"
          )}
        >
          Product &amp; Engineering Studio
        </span>
      )}
    </Link>
  );
}
