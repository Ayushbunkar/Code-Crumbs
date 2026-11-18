import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative transition-all duration-300",
  {
    variants: {
      variant: {
        paper:
          "bg-surface border border-border p-6 sm:p-8 shadow-card hover:shadow-elevated hover:border-charcoal/30",
        flat:
          "bg-sand-50 border border-border/80 p-6 sm:p-8 hover:bg-surface hover:border-border",
        dark:
          "bg-charcoal text-white border border-charcoal-200 p-6 sm:p-8 hover:border-burnt/50",
        asymmetric:
          "bg-surface border-l-4 border-l-burnt border-y border-r border-border p-6 sm:p-8 shadow-subtle hover:translate-x-1",
        metric:
          "bg-sand-50/70 border border-border p-6 sm:p-8 flex flex-col justify-between",
        ghost:
          "border border-dashed border-border/80 p-6 sm:p-8 hover:border-charcoal/40",
      },
    },
    defaultVariants: {
      variant: "paper",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  as?: React.ElementType;
}

export function Card({
  as: Component = "div",
  className,
  variant,
  children,
  ...props
}: CardProps) {
  return (
    <Component className={cn(cardVariants({ variant, className }))} {...props}>
      {children}
    </Component>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col space-y-1.5 pb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-serif text-xl sm:text-2xl font-medium tracking-tight text-charcoal",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-charcoal-50 leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("pt-2", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center pt-6 border-t border-border/60 mt-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}
