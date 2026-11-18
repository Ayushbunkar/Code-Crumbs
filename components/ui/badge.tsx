import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium tracking-wider uppercase transition-colors select-none",
  {
    variants: {
      variant: {
        default:
          "bg-sand-200 text-charcoal border border-border/80",
        burnt:
          "bg-burnt/10 text-burnt border border-burnt/30",
        dark:
          "bg-charcoal text-white border border-charcoal",
        outline:
          "text-charcoal border border-border bg-transparent",
        dot:
          "bg-surface text-charcoal border border-border shadow-subtle",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  withDot?: boolean;
}

function Badge({ className, variant, withDot, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {withDot && (
        <span className="h-1.5 w-1.5 rounded-full bg-burnt animate-pulse" />
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
