"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar as CalendarIcon,
  Clock,
  ArrowUpRight,
  Shield,
  CheckCircle2,
  ExternalLink,
  Mail,
  Lock,
} from "lucide-react";

export function CalendarBookingCard() {
  const calendarUrl = process.env.NEXT_PUBLIC_CALENDAR_URL;
  const isConfigured = Boolean(calendarUrl && calendarUrl.trim().length > 0);

  return (
    <Card variant="paper" className="p-6 sm:p-8 space-y-6 border border-border">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-border gap-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-sand-100 border border-border text-burnt">
            <CalendarIcon className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase text-burnt font-bold tracking-widest block">
              Meeting Scheduling
            </span>
            <h3 className="font-serif text-xl text-charcoal font-medium">
              30-Minute Architectural Discovery
            </h3>
          </div>
        </div>

        <Badge variant={isConfigured ? "burnt" : "outline"} className="text-[10px] font-mono w-fit">
          {isConfigured ? "Calendar Armed" : "Direct Intake Active"}
        </Badge>
      </div>

      {isConfigured ? (
        // Configured Live Calendar Option (Cal.com / Google Calendar)
        <div className="space-y-4">
          <p className="text-xs text-charcoal-50 font-sans leading-relaxed">
            Schedule a focused technical alignment session directly on our software architect calendar.
          </p>

          <div className="p-4 bg-sand-50 border border-border text-xs font-mono space-y-2">
            <div className="flex items-center gap-2 text-charcoal">
              <Clock className="h-3.5 w-3.5 text-burnt" />
              <span>Duration: 30 minutes • Video conference link auto-dispatched</span>
            </div>
            <div className="flex items-center gap-2 text-charcoal-50">
              <Shield className="h-3.5 w-3.5 text-emerald-600" />
              <span>Senior technical principals only • Zero sales pressure</span>
            </div>
          </div>

          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full gap-2 text-xs font-mono uppercase tracking-wider"
            >
              <span>Launch Scheduling Portal</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>
      ) : (
        // Graceful Fallback When NEXT_PUBLIC_CALENDAR_URL is Unset
        <div className="space-y-4">
          <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
            To ensure dedicated engineering focus and eliminate cold vendor pitches, calendar booking links are provisioned directly upon receipt of a project brief.
          </p>

          <div className="p-4 bg-sand-50 border border-border space-y-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-charcoal font-semibold">
              <CheckCircle2 className="h-3.5 w-3.5 text-burnt" />
              <span>Turnaround Guarantee: Booking invite dispatched within 24 business hours</span>
            </div>
            <p className="text-[11px] text-charcoal-50 font-sans">
              Our software architects review your technical requirements first so the discovery call is focused on real architecture rather than introductory questions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href="mailto:codeandcrumbs.agency@gmail.com?subject=Discovery%20Call%20Request"
              className="w-full sm:w-auto flex-1"
            >
              <Button
                variant="outline"
                size="default"
                className="w-full gap-2 text-xs font-mono uppercase text-charcoal hover:text-burnt"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Request Booking Slot Via Email</span>
              </Button>
            </a>

            <button
              onClick={() => {
                const formEl = document.getElementById("project-intake");
                if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="default"
                className="w-full gap-2 text-xs font-mono uppercase tracking-wider"
              >
                <span>Complete Project Brief</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </button>
          </div>
        </div>
      )}
    </Card>
  );
}
