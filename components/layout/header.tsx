"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/ui/logo";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change or ESC key
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/work" },
    { label: "Live Demos", href: "/demos" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 border-b",
        scrolled
          ? "border-border bg-sand/95 backdrop-blur-md shadow-subtle py-0"
          : "border-border/60 bg-sand/90 backdrop-blur-sm py-0"
      )}
    >
      <Container size="wide">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* Brand Identity / Wordmark */}
          <div className="flex items-center gap-6">
            <Logo size="md" withSubtext={false} />

            {/* Studio Availability Status Indicator */}
            <div className="hidden xl:flex items-center">
              <Badge
                variant="dot"
                withDot
                className="normal-case tracking-normal text-[11px] text-charcoal-50 py-0.5 bg-surface border-border/80 shadow-subtle"
              >
                <span>Accepting select Q3/Q4 briefs</span>
              </Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative py-2 transition-colors",
                    active
                      ? "text-charcoal font-semibold"
                      : "text-charcoal-50 hover:text-charcoal"
                  )}
                >
                  <span>{link.label}</span>
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-burnt animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA Button: BUILD YOUR PROJECT */}
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/contact">
              <Button
                variant="primary"
                size="default"
                className="font-medium tracking-wider uppercase text-xs gap-2 shadow-subtle"
              >
                <span>BUILD YOUR PROJECT</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link href="/contact" className="sm:hidden">
              <Button
                variant="primary"
                size="sm"
                className="text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5"
              >
                Build
              </Button>
            </Link>
            <Button
              variant="outline"
              size="icon"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="border-charcoal/30 h-10 w-10"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-charcoal" />
              ) : (
                <Menu className="h-5 w-5 text-charcoal" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="lg:hidden border-t border-border bg-sand pt-6 pb-10 space-y-6 shadow-xl animate-fade-in"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between text-lg font-serif px-4 py-3 border-l-2 transition-all",
                      active
                        ? "border-burnt bg-sand-200/50 text-charcoal font-medium pl-6"
                        : "border-transparent text-charcoal-50 hover:text-charcoal hover:pl-6"
                    )}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="text-xs font-mono uppercase text-burnt tracking-widest">
                        [Active]
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="px-4 pt-6 border-t border-border space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-charcoal-50">
                <span className="h-2 w-2 rounded-full bg-emerald-600 inline-block" />
                <span>Studio Availability: 2 Engagement Slots Open</span>
              </div>

              <Link href="/contact" className="block w-full">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center gap-2 uppercase tracking-wider text-xs font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>BUILD YOUR PROJECT</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
