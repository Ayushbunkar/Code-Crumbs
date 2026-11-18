import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center p-6 bg-sand text-charcoal">
      <div className="space-y-6 text-center">
        {/* Editorial Monogram / Spinner */}
        <div className="relative h-12 w-12 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 border border-border" />
          <div className="absolute inset-0 border border-burnt border-t-transparent animate-spin" style={{ animationDuration: "1s" }} />
          <span className="font-mono text-xs font-bold text-burnt tracking-tighter">C&amp;C</span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-50 block">
            System Synchronizing
          </span>
          <p className="font-serif text-lg text-charcoal tracking-tight">
            Code&amp;Crumbs Architecture Engine
          </p>
        </div>
      </div>
    </div>
  );
}
