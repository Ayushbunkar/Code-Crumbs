import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Container } from "./container";
import { cn } from "@/lib/utils";

const sectionVariants = cva("relative w-full overflow-hidden", {
  variants: {
    theme: {
      sand: "bg-sand text-charcoal",
      surface: "bg-surface text-charcoal",
      dark: "bg-charcoal text-white",
      muted: "bg-sand-50 text-charcoal",
    },
    spacing: {
      none: "py-0",
      sm: "py-8 sm:py-12",
      md: "py-12 sm:py-16",
      lg: "py-14 sm:py-20",
      hero: "pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16",
    },
    divider: {
      none: "",
      top: "border-t border-border",
      bottom: "border-b border-border",
      both: "border-y border-border",
    },
  },
  defaultVariants: {
    theme: "sand",
    spacing: "md",
    divider: "none",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  containerSize?: "default" | "narrow" | "wide" | "full";
  withGrid?: boolean;
}

export function Section({
  theme,
  spacing,
  divider,
  containerSize = "wide",
  withGrid = false,
  className,
  children,
  ...props
}: SectionProps) {
  // If dark theme, set border divider color to dark border
  const customDivider =
    theme === "dark" && divider !== "none"
      ? divider === "top"
        ? "border-t border-charcoal-200"
        : divider === "bottom"
        ? "border-b border-charcoal-200"
        : "border-y border-charcoal-200"
      : "";

  return (
    <section
      className={cn(
        sectionVariants({ theme, spacing, divider }),
        customDivider,
        className
      )}
      {...props}
    >
      {withGrid && (
        <div
          className={cn(
            "absolute inset-0 grid-lines pointer-events-none",
            theme === "dark" ? "opacity-10 invert" : "opacity-30"
          )}
        />
      )}
      <Container size={containerSize} className="relative z-10">
        {children}
      </Container>
    </section>
  );
}
