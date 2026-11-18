import React from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { ScrollStory } from "@/components/sections/scroll-story";
import { AgencyIntro } from "@/components/sections/agency-intro";
import { ServicesOverview } from "@/components/sections/services-overview";
import { SelectedProjects } from "@/components/sections/selected-projects";
import { WorkingDemos } from "@/components/sections/working-demos";
import { TechStack } from "@/components/sections/tech-stack";
import { DevelopmentProcess } from "@/components/sections/development-process";
import { SalesKit } from "@/components/sections/sales-kit";
import { ProjectSelector } from "@/components/sections/project-selector";
import { FaqsSection } from "@/components/sections/faqs-section";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <div className="w-full">
      {/* 01. Homepage Hero with Interactive 3D R3F Sculpture */}
      <HeroSection />

      {/* 02. GSAP ScrollTrigger Storytelling */}
      <ScrollStory />

      {/* 03. Short Agency Introduction & Manifesto */}
      <AgencyIntro />

      {/* 04. Services Preview */}
      <ServicesOverview />

      {/* 05. Selected Work Preview */}
      <SelectedProjects />

      {/* 06. Live Demos Preview */}
      <WorkingDemos />

      {/* 07. Technology Stack */}
      <TechStack />

      {/* 08. Development Process */}
      <DevelopmentProcess />

      {/* 09. Sales Kit & Engagement Models */}
      <SalesKit />

      {/* 10. Interactive "Build Your Project" Scope Selector */}
      <ProjectSelector />

      {/* 11. Frequently Asked Questions */}
      <FaqsSection />

      {/* 12. Final Contact CTA */}
      <ContactCta />
    </div>
  );
}
