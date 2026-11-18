export interface SalesKitDoc {
  id: string;
  title: string;
  fileName: string;
  fileUrl: string;
  category: string;
  sizeLabel: string;
  description: string;
  topics: string[];
}

export const salesKitDocuments: SalesKitDoc[] = [
  {
    id: "company-introduction",
    title: "Company Introduction & Practice Manifesto",
    fileName: "code-and-crumbs-company-introduction.pdf",
    fileUrl: "/docs/code-and-crumbs-company-introduction.pdf",
    category: "Corporate Overview",
    sizeLabel: "4.9 KB • Vector PDF",
    description:
      "Comprehensive introduction to Code&Crumbs identity, executive leadership, client profiles, service disciplines, and engineering ethos.",
    topics: [
      "Code&Crumbs Brand Identity & Manifesto",
      "Who We Work With (Founders to Enterprise)",
      "Core Service Disciplines & Capabilities",
      "Four-Stage Engineering Development Process",
      "Principal Access & Direct Engagement Terms",
    ],
  },
  {
    id: "services-capabilities",
    title: "Services & Capabilities Specification",
    fileName: "code-and-crumbs-services-capabilities.pdf",
    fileUrl: "/docs/code-and-crumbs-services-capabilities.pdf",
    category: "Technical Capabilities",
    sizeLabel: "3.0 KB • Vector PDF",
    description:
      "Detailed breakdown of software engineering services across SaaS, MVP development, AI workflow automation, and custom web applications.",
    topics: [
      "SaaS Platform & Production MVP Acceleration",
      "Applied AI, LLM Integration & Automation",
      "High-Density Web Applications & Visual Systems",
      "Interactive 3D Spatial Web (React Three Fiber)",
      "Backend Infrastructure & Event-Driven APIs",
    ],
  },
  {
    id: "technology-stack",
    title: "Technology Stack & Standards Dossier",
    fileName: "code-and-crumbs-technology-stack.pdf",
    fileUrl: "/docs/code-and-crumbs-technology-stack.pdf",
    category: "Engineering Architecture",
    sizeLabel: "2.2 KB • Vector PDF",
    description:
      "Authoritative catalog of frontend frameworks, WebGL rendering engines, AI model gateways, and distributed database infrastructure.",
    topics: [
      "Next.js 15, React 19 & TypeScript Strict Types",
      "React Three Fiber, Drei & Three.js 3D Viewports",
      "Python, FastAPI, Redis Pub/Sub & Vector Indices",
      "PostgreSQL Partitioned Architecture & Docker",
      "Sub-40ms INP Performance & Zero CLS Standards",
    ],
  },
  {
    id: "case-studies",
    title: "Selected Case Studies & Engineering Briefs",
    fileName: "code-and-crumbs-case-studies.pdf",
    fileUrl: "/docs/code-and-crumbs-case-studies.pdf",
    category: "Verified Case Studies",
    sizeLabel: "2.8 KB • Vector PDF",
    description:
      "Deep dive into production architectures: Evaluna ERP, Summrix AI document extraction, Multi-Agent swarm, and AI Interview Simulator.",
    topics: [
      "Evaluna ERP: Multi-Hub Stock Allocation (<16ms)",
      "Summrix AI: Byte-Accurate Regulatory Extraction",
      "Multi-Agent Research Swarm: Distributed Consensus",
      "AI Interview Simulator: Real-Time Audio VAD (<80ms)",
      "Zero Fabricated Metrics or Testimonial Claims",
    ],
  },
  {
    id: "engagement-process",
    title: "Project Engagement Process & Governance",
    fileName: "code-and-crumbs-engagement-process.pdf",
    fileUrl: "/docs/code-and-crumbs-engagement-process.pdf",
    category: "Commercial Framework",
    sizeLabel: "2.3 KB • Vector PDF",
    description:
      "Transparent procurement blueprint detailing Mutual NDAs, technical discovery, sprint cycles, staging previews, and IP hand-off.",
    topics: [
      "Mutual Non-Disclosure Agreement (NDA) Protocol",
      "Technical Discovery & Schema Milestone Planning",
      "Two-Week Agile Sprints with Live Staging Previews",
      "Codebase Hand-Off & Complete IP Ownership",
      "Post-Launch Warranty & Retainer Governance",
    ],
  },
];
