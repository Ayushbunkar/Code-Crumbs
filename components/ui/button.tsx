import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-charcoal-900 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-burnt text-white hover:bg-burnt-hover active:bg-burnt-active shadow-subtle tracking-wide",
        dark:
          "bg-charcoal text-white hover:bg-charcoal-200 shadow-subtle tracking-wide",
        secondary:
          "bg-surface text-charcoal border border-border hover:bg-sand-50 active:bg-sand-200",
        outline:
          "border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-200",
        ghost:
          "text-charcoal hover:bg-sand-200/50 hover:text-charcoal-900",
        link:
          "text-burnt underline-offset-4 hover:underline p-0 h-auto font-normal",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-sm",
        sm: "h-9 px-4 rounded-sm text-xs",
        lg: "h-13 px-8 rounded-sm text-base",
        icon: "h-10 w-10 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
