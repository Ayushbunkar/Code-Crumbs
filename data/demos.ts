export interface DemoItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
}

export const demosData: DemoItem[] = [
  {
    id: "saas-dashboard",
    slug: "saas-dashboard",
    title: "SaaS Analytics & Telemetry Engine",
    category: "Product Interface",
    tagline: "Interactive multi-metric telemetry dashboard with virtualized data feeds.",
    description:
      "A working demonstration of our SaaS frontend architecture featuring live metric filtering, responsive charts, user activity feeds, and modular card states.",
    features: [
      "Real-time KPI metric toggling",
      "Interactive data filter controls",
      "Dynamic revenue & usage sparklines",
      "User role switching simulation",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    metrics: [
      { label: "Virtual Render Rate", value: "60 FPS" },
      { label: "Interaction Delay", value: "<10ms" },
      { label: "Component Modularization", value: "100%" },
    ],
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI Pipeline & Automation Hub",
    category: "Workflow Automation",
    tagline: "Visual execution pipeline inspector with interactive task dispatchers.",
    description:
      "A live functional prototype showcasing multi-step AI workflow orchestration, queue latency monitoring, execution logs, and automated retry mechanisms.",
    features: [
      "Live task dispatch simulation",
      "Real-time pipeline state visualization",
      "JSON payload inspection inspector",
      "Instant queue status switching",
    ],
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    metrics: [
      { label: "Dispatch Latency", value: "12ms" },
      { label: "Execution Precision", value: "99.9%" },
      { label: "State Synchronization", value: "Instant" },
    ],
  },
  {
    id: "erp-workflow",
    slug: "erp-workflow",
    title: "ERP Operations & Resource Engine",
    category: "Enterprise System",
    tagline: "Dense tabular operations suite with batch status actions and filter matrices.",
    description:
      "A mission-critical enterprise resource planning prototype illustrating high-density tabular data, inline editing, batch selection, and auditing workflows.",
    features: [
      "Multi-row batch actions",
      "Status lifecycle transition controls",
      "Column sorting and instant search",
      "Audit trail drawer inspection",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Class Variance Authority"],
    metrics: [
      { label: "Data Virtualization", value: "Instant" },
      { label: "Memory Overhead", value: "Minimal" },
      { label: "Accessibility Tier", value: "WCAG AA" },
    ],
  },
];
