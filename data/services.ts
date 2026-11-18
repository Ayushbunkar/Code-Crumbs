export interface ServiceDetail {
  id: string;
  name: string;
  category: "Product Development" | "AI & Automation" | "Web Development" | "Backend & Infrastructure" | "Ongoing Support";
  categoryCode: "A" | "B" | "C" | "D" | "E";
  lead: string;
  description: string;
  problemSolved: string;
  deliverables: string[];
  technologies: string[];
  useCases: string[];
  visualType: "blueprint" | "node-pipeline" | "ui-schematic" | "infra-topology" | "support-matrix";
  metrics: { label: string; value: string }[];
}

export interface ServiceCategory {
  code: "A" | "B" | "C" | "D" | "E";
  slug: string;
  name: string;
  tagline: string;
  services: ServiceDetail[];
}

export const fullServicesCatalog: ServiceCategory[] = [
  {
    code: "A",
    slug: "product-development",
    name: "Product Development",
    tagline: "End-to-end software engineering for market-defining ventures and core internal tools.",
    services: [
      {
        id: "saas-development",
        name: "SaaS Development",
        category: "Product Development",
        categoryCode: "A",
        lead: "Multi-tenant cloud platforms engineered for scale, subscription lifecycle, and rapid feature velocity.",
        description:
          "We construct full-scale SaaS architectures with strict tenant isolation, role-based access control, billing automation, and responsive real-time dashboards designed for high-retention enterprise usage.",
        problemSolved:
          "Eliminates technical debt from hurried MVP code, prevents multi-tenant security vulnerabilities, and solves database performance bottlenecks under concurrent user spikes.",
        deliverables: [
          "Next.js App Router multi-tenant frontend",
          "Automated Stripe / billing subscription engine",
          "Role-based access control (RBAC) UI & API",
          "Real-time event streaming & notifications",
          "Granular analytics and user telemetry",
        ],
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Redis"],
        useCases: [
          "B2B SaaS companies modernizing legacy web platforms",
          "Venture-funded startups launching commercial software",
          "Founders scaling to their first 10,000 paying seats",
        ],
        visualType: "ui-schematic",
        metrics: [
          { label: "P99 Response", value: "<45ms" },
          { label: "Type Safety", value: "100%" },
          { label: "Multi-Tenancy", value: "Row-Level" },
        ],
      },
      {
        id: "mvp-development",
        name: "MVP Development",
        category: "Product Development",
        categoryCode: "A",
        lead: "High-conviction minimum viable products engineered in 4 to 6-week dedicated sprints.",
        description:
          "We cut through bloated feature backlogs to design, build, and deploy investor-ready and customer-ready MVPs built on clean production-grade architecture from day zero.",
        problemSolved:
          "Prevents burning runway on generic agency mockups or brittle throwaway prototypes that require total rewrites after user feedback.",
        deliverables: [
          "Curated core product feature loop",
          "Investor demo environments & walk-throughs",
          "Authentication, onboarding & payments",
          "Automated user tracking & conversion funnels",
          "Production CI/CD deployment pipeline",
        ],
        technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Vercel"],
        useCases: [
          "Pre-seed & Seed startups preparing for Tier-1 fundraises",
          "Corporates launching new product incubation spin-outs",
          "Founders validating high-stakes market hypotheses",
        ],
        visualType: "blueprint",
        metrics: [
          { label: "Typical Delivery", value: "4-6 Weeks" },
          { label: "Code Handover", value: "100% IP" },
          { label: "Test Coverage", value: ">85%" },
        ],
      },
      {
        id: "custom-web-applications",
        name: "Custom Web Applications",
        category: "Product Development",
        categoryCode: "A",
        lead: "Bespoke digital software tailored to complex, non-standard business logic and domain workflows.",
        description:
          "When off-the-shelf software fails your operational model, we architect purpose-built web applications that streamline high-friction calculations, data transformations, and custom user portals.",
        problemSolved:
          "Replaces fragile Excel spreadsheets and fragmented third-party SaaS stacks that drain operational productivity.",
        deliverables: [
          "Domain-driven database schema & APIs",
          "Custom calculation & data ingestion engines",
          "Ergonomic workflow navigation & form steps",
          "Export engines (PDF, CSV, XLSX, JSON)",
          "Audit logs & historical change tracking",
        ],
        technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Zustand"],
        useCases: [
          "Fintech firms calculating dynamic risk matrices",
          "Logistics providers tracking distributed supply networks",
          "Professional services automating client calculations",
        ],
        visualType: "node-pipeline",
        metrics: [
          { label: "Process Speedup", value: "10x" },
          { label: "Data Integrity", value: "ACID Compliant" },
          { label: "Auditability", value: "Complete" },
        ],
      },
      {
        id: "internal-business-software",
        name: "Internal Business Software",
        category: "Product Development",
        categoryCode: "A",
        lead: "High-velocity operational back-offices, administrative consoles, and team productivity hubs.",
        description:
          "We build bespoke internal administration tools that empower operations, risk, compliance, and customer support teams with high-density data views and zero unnecessary friction.",
        problemSolved:
          "Stops internal teams from wasting hours manually querying databases or struggling with rigid no-code tools.",
        deliverables: [
          "Custom admin panels & support consoles",
          "Granular permission & approval workflows",
          "High-density data tables with batch operations",
          "Integration with enterprise identity (SSO/SAML)",
          "Automated activity audit trails",
        ],
        technologies: ["Next.js", "TanStack Table", "Tailwind CSS", "Auth0", "PostgreSQL"],
        useCases: [
          "Operations teams handling manual account reviews",
          "Compliance officers verifying KYC/AML documentation",
          "Inventory managers coordinating global shipments",
        ],
        visualType: "ui-schematic",
        metrics: [
          { label: "Task Efficiency", value: "+45%" },
          { label: "Latency", value: "<15ms" },
          { label: "SSO Standard", value: "SAML 2.0" },
        ],
      },
      {
        id: "erp-crm-systems",
        name: "ERP and CRM Systems",
        category: "Product Development",
        categoryCode: "A",
        lead: "Cohesive enterprise resource planning and bespoke customer relationship engines.",
        description:
          "Custom ERP and CRM platforms designed around your company's exact operational milestones, resource hierarchies, pipeline stages, and supplier networks.",
        problemSolved:
          "Eliminates prohibitive per-seat licensing fees from generic enterprise monoliths and avoids forcing company workflows into rigid vendor templates.",
        deliverables: [
          "End-to-end customer and deal pipeline tracker",
          "Inventory, asset, and resource allocation modules",
          "Invoicing, billing, and accounting reconciliation",
          "Interactive analytics, forecasting & charts",
          "Secure role-based partner and vendor portals",
        ],
        technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
        useCases: [
          "Mid-market enterprises replacing bloated legacy ERPs",
          "Specialty manufacturers with complex inventory cycles",
          "B2B sales teams needing proprietary deal progression",
        ],
        visualType: "blueprint",
        metrics: [
          { label: "Per-Seat Cost", value: "$0 Recurring" },
          { label: "Custom Fields", value: "Unlimited" },
          { label: "Query Speed", value: "Sub-100ms" },
        ],
      },
    ],
  },
  {
    code: "B",
    slug: "ai-automation",
    name: "AI and Automation",
    tagline: "Deploying intelligent autonomous agents, deterministic RAG systems, and workflow engines.",
    services: [
      {
        id: "ai-agents",
        name: "AI Agents",
        category: "AI & Automation",
        categoryCode: "B",
        lead: "Autonomous task-executing agents capable of multi-step planning, tool use, and verification.",
        description:
          "We develop production-grade autonomous agent systems that research, parse, synthesize, and execute actions across your company's software tools with deterministic safety guardrails.",
        problemSolved:
          "Replaces repetitive, high-touch cognitive labor with reliable autonomous execution while preventing AI hallucination through multi-agent verification.",
        deliverables: [
          "Autonomous multi-step planner architecture",
          "Tool use & API execution integrations",
          "Verification & consensus safety layers",
          "Live execution trace & telemetry dashboard",
          "Human-in-the-loop review interfaces",
        ],
        technologies: ["Python", "TypeScript", "LangGraph", "Anthropic / Gemini APIs", "Next.js", "Redis"],
        useCases: [
          "Legal & compliance research workflows",
          "Customer support triage and autonomous resolution",
          "Automated financial reconciliation & report generation",
        ],
        visualType: "node-pipeline",
        metrics: [
          { label: "Task Success", value: ">97.5%" },
          { label: "Latency", value: "Streaming" },
          { label: "Verification", value: "Dual Consensus" },
        ],
      },
      {
        id: "workflow-automation",
        name: "Business Workflow Automation",
        category: "AI & Automation",
        categoryCode: "B",
        lead: "Deterministic automation pipelines synchronizing data across mission-critical systems.",
        description:
          "End-to-end operational automation that listens for webhooks, triggers automated data transformations, and orchestrates multi-system synchronizations with error recovery.",
        problemSolved:
          "Eliminates manual copy-pasting, human data entry errors, and disconnected database silos across departments.",
        deliverables: [
          "Event-driven webhook ingestion brokers",
          "Automated reconciliation & validation scripts",
          "Failure alerting & dead-letter queue recovery",
          "Visual pipeline monitoring dashboards",
          "Legacy database ETL synchronizers",
        ],
        technologies: ["TypeScript", "Temporal.io", "Node.js", "Redis", "Kafka / SQS"],
        useCases: [
          "E-commerce order routing & multi-warehouse dispatch",
          "Billing reconciliation across banking and CRM APIs",
          "Automated client onboarding documentation pipelines",
        ],
        visualType: "infra-topology",
        metrics: [
          { label: "Throughput", value: "10k+ Events/min" },
          { label: "Reliability", value: "99.99%" },
          { label: "Retry Policy", value: "Deterministic" },
        ],
      },
      {
        id: "ai-chatbots",
        name: "AI Chatbots & Assistants",
        category: "AI & Automation",
        categoryCode: "B",
        lead: "Context-aware conversational interfaces trained strictly on company knowledge and product data.",
        description:
          "Custom conversational assistants designed for web flagships and internal teams with high-speed streaming token delivery, strict brand tone matching, and citation validation.",
        problemSolved:
          "Fixes generic, unresponsive support chatbots that hallucinate fake policies and frustrate high-value clients.",
        deliverables: [
          "Streaming chat interface with markdown & code support",
          "Vector knowledge base embedding pipeline",
          "Guardrail filters preventing prompt injection",
          "Conversation analytics & sentiment tracking",
          "Seamless handoff to human support principals",
        ],
        technologies: ["Next.js", "Vercel AI SDK", "pgvector", "TypeScript", "Tailwind CSS"],
        useCases: [
          "24/7 technical customer support for SaaS platforms",
          "Interactive website onboarding guides for complex tools",
          "Internal employee knowledge search assistants",
        ],
        visualType: "ui-schematic",
        metrics: [
          { label: "Time to First Token", value: "<250ms" },
          { label: "Hallucination Rate", value: "<0.5%" },
          { label: "Resolution Rate", value: "72% Autonomous" },
        ],
      },
      {
        id: "rag-systems",
        name: "RAG Systems (Retrieval-Augmented Generation)",
        category: "AI & Automation",
        categoryCode: "B",
        lead: "Enterprise vector retrieval pipelines that ground language models in proprietary business truth.",
        description:
          "We build production RAG architectures using hybrid keyword-vector retrieval, contextual reranking, and semantic chunking to deliver mathematically verified answers with source citations.",
        problemSolved:
          "Prevents language models from making up inaccurate answers and allows LLMs to query millions of private enterprise documents safely.",
        deliverables: [
          "Document ingestion & semantic chunking engine",
          "Hybrid search index (Dense vector + BM25 keyword)",
          "Cross-encoder reranking integration",
          "Exact citation linking & excerpt extraction",
          "Vector database tuning & index benchmarking",
        ],
        technologies: ["pgvector", "Qdrant", "Python", "TypeScript", "Cohere Rerank", "Next.js"],
        useCases: [
          "Institutional investment research across 10-K filings",
          "Medical and clinical trial literature analysis",
          "Engineering code base search across enterprise repos",
        ],
        visualType: "node-pipeline",
        metrics: [
          { label: "Retrieval Recall", value: "96.4%" },
          { label: "Index Scale", value: "Millions of Chunks" },
          { label: "Latency", value: "<300ms Total" },
        ],
      },
      {
        id: "document-intelligence",
        name: "Document Intelligence",
        category: "AI & Automation",
        categoryCode: "B",
        lead: "Automated extraction, OCR, and structured data synthesis from complex PDFs, scans, and contracts.",
        description:
          "Transform unstructured documents—such as complex tables, invoices, deeds, and regulatory filings—into structured, typed JSON schemas with high precision.",
        problemSolved:
          "Stops operational teams from wasting hundreds of hours manual reviewing PDF tables and retyping invoice data.",
        deliverables: [
          "Layout-aware OCR & table extraction pipelines",
          "Strict Pydantic / Zod schema validation",
          "Automated anomaly & mismatch detection",
          "Document comparison & version redlining tools",
          "Batch processing queues with webhook alerts",
        ],
        technologies: ["Python", "TypeScript", "Vision Models", "Zod", "PostgreSQL", "Next.js"],
        useCases: [
          "Accounts payable invoice processing",
          "Legal contract covenant extraction and auditing",
          "Insurance claim documentation verification",
        ],
        visualType: "blueprint",
        metrics: [
          { label: "Extraction Accuracy", value: "99.2%" },
          { label: "Processing Speed", value: "3s per page" },
          { label: "Schema Drift", value: "0% (Zod Enforced)" },
        ],
      },
      {
        id: "ai-integrations",
        name: "AI Integrations",
        category: "AI & Automation",
        categoryCode: "B",
        lead: "Seamlessly embedding state-of-the-art vision, reasoning, and speech models into existing stacks.",
        description:
          "We integrate frontier foundation models into your existing applications without requiring ground-up rewrites, adding intelligent features directly into current product workflows.",
        problemSolved:
          "Allows legacy or existing products to rapidly launch AI capabilities without costly replatforming.",
        deliverables: [
          "Unified LLM gateway with fallback routing",
          "Cost and token usage tracking monitors",
          "Caching layer for duplicate prompt reductions",
          "Prompt engineering and system prompt audits",
          "Model evaluation test suites",
        ],
        technologies: ["Next.js", "Vercel AI SDK", "OpenAI / Claude / Gemini APIs", "Redis", "TypeScript"],
        useCases: [
          "Content generation tools inside existing CMSs",
          "Automated code review integrations for developer tools",
          "Smart search filters for e-commerce catalogs",
        ],
        visualType: "infra-topology",
        metrics: [
          { label: "Cost Savings", value: "35% via Caching" },
          { label: "Fallback Latency", value: "<50ms" },
          { label: "Model Agnostic", value: "Yes" },
        ],
      },
      {
        id: "research-automation",
        name: "Research Automation",
        category: "AI & Automation",
        categoryCode: "B",
        lead: "Automated market intelligence, competitor tracking, and deep web synthesis.",
        description:
          "Autonomous research robots that crawl public datasets, monitor competitive pricing or regulatory shifts, and generate executive summaries on a recurring schedule.",
        problemSolved:
          "Provides executive teams with continuous market intelligence without paying exorbitant analyst fees.",
        deliverables: [
          "Headless browser scraping & crawling cluster",
          "Automated change detection & diffing algorithms",
          "Executive PDF and email report generators",
          "Configurable keyword & entity monitoring",
          "Historical trend databases",
        ],
        technologies: ["Python", "Playwright", "TypeScript", "Next.js", "PostgreSQL"],
        useCases: [
          "Venture capital deal sourcing & founder tracking",
          "Real-time competitor pricing intelligence",
          "Regulatory compliance monitoring across jurisdictions",
        ],
        visualType: "node-pipeline",
        metrics: [
          { label: "Sources Scanned", value: "1,000+ Daily" },
          { label: "Report Delivery", value: "Automated Daily" },
          { label: "Extraction Precision", value: "98.5%" },
        ],
      },
    ],
  },
  {
    code: "C",
    slug: "web-development",
    name: "Web Development",
    tagline: "Constructing high-conviction digital flagships, tactile 3D experiences, and high-conversion portals.",
    services: [
      {
        id: "business-websites",
        name: "Business Websites & Flagships",
        category: "Web Development",
        categoryCode: "C",
        lead: "International corporate headquarters engineered for authoritative positioning and client acquisition.",
        description:
          "Bespoke web flagships that reject generic template trends in favor of Swiss typography, tactile off-white palettes, architectural whitespace, and sub-second Core Web Vitals.",
        problemSolved:
          "Stops your digital presence from looking like every other generic tech startup, commanding immediate credibility with institutional partners.",
        deliverables: [
          "Bespoke Next.js 15 App Router architecture",
          "Custom design tokens & responsive grid system",
          "Sub-second LCP and perfect Lighthouse scores",
          "Headless CMS integration for effortless client editing",
          "Global edge deployment with zero server maintenance",
        ],
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
        useCases: [
          "Investment firms and quantitative capital managers",
          "Enterprise technology providers and consultancy practices",
          "High-growth venture-backed companies repositioning their brand",
        ],
        visualType: "ui-schematic",
        metrics: [
          { label: "Lighthouse Score", value: "98-100" },
          { label: "First Contentful Paint", value: "<0.6s" },
          { label: "Bounce Rate Reduction", value: "Up to 38%" },
        ],
      },
      {
        id: "landing-pages",
        name: "Landing Pages & Acquisition Funnels",
        category: "Web Development",
        categoryCode: "C",
        lead: "High-conviction product launch pages engineered for maximum conversion velocity.",
        description:
          "Tactile, interactive landing pages designed around clear value propositions, interactive calculators, live product visualizers, and streamlined inquiry funnels.",
        problemSolved:
          "Stops paid traffic and partner referrals from bouncing due to slow load times and unconvincing generic layouts.",
        deliverables: [
          "Interactive product simulators & pricing selectors",
          "Sub-millisecond form submission & CRM routing",
          "A/B testing architecture & conversion telemetry",
          "Fine-grained micro-interactions and scroll hooks",
          "Optimized mobile viewport responsive layouts",
        ],
        technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
        useCases: [
          "SaaS product launches and major feature releases",
          "Private investor waitlists and token allocations",
          "High-ticket enterprise service acquisition funnels",
        ],
        visualType: "blueprint",
        metrics: [
          { label: "Conversion Lift", value: "Measurable" },
          { label: "Load Time", value: "<400ms" },
          { label: "Layout Shift", value: "0.00 CLS" },
        ],
      },
      {
        id: "ecommerce",
        name: "Bespoke E-Commerce Flagships",
        category: "Web Development",
        categoryCode: "C",
        lead: "Headless e-commerce flagships providing editorial brand storytelling and instant checkout.",
        description:
          "We decouple frontends from traditional monolithic e-commerce platforms, delivering editorial product catalog layouts, real-time stock sync, and rapid checkout experiences.",
        problemSolved:
          "Eliminates slow, clunky Shopify themes and inflexible catalog structures that stifle luxury and premium brand positioning.",
        deliverables: [
          "Headless Shopify / Commerce Layer frontend",
          "Dynamic product configurators & 3D inspectors",
          "Sub-second multi-currency cart & checkout",
          "Granular inventory search & filtering matrices",
          "SEO-optimized structured product schema",
        ],
        technologies: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "R3F", "TypeScript"],
        useCases: [
          "Luxury physical product brands demanding bespoke aesthetics",
          "Hardware manufacturers offering customizable specifications",
          "High-volume digital and physical goods flagships",
        ],
        visualType: "ui-schematic",
        metrics: [
          { label: "Cart Speed", value: "Instantaneous" },
          { label: "Mobile Checkout", value: "1-Click Ready" },
          { label: "Catalog Filter", value: "<20ms" },
        ],
      },
      {
        id: "web-applications",
        name: "Interactive Web Applications",
        category: "Web Development",
        categoryCode: "C",
        lead: "Rich clientside applications featuring tactile kinetic feedback and spatial 3D.",
        description:
          "From visual canvas editors to real-time collaboration suites. We blend client-side state management with optimized WebGL viewports for uncompromised responsiveness.",
        problemSolved:
          "Solves jank, frame drops, and browser memory leaks in complex, feature-heavy web applications.",
        deliverables: [
          "React Three Fiber (R3F) interactive viewports",
          "Undo/redo state managers and offline caching",
          "Optimistic UI updates for instant feedback",
          "Export capabilities (SVG, PNG, GLB, JSON)",
          "Accessible keyboard navigation shortcuts",
        ],
        technologies: ["React Three Fiber", "Three.js", "Zustand", "TypeScript", "Tailwind CSS"],
        useCases: [
          "Interactive 3D architectural floorplan visualizers",
          "Industrial hardware product customizers",
          "Visual node editors and creative workflow software",
        ],
        visualType: "node-pipeline",
        metrics: [
          { label: "Frame Rate", value: "Solid 60 FPS" },
          { label: "Memory Footprint", value: "<60 MB" },
          { label: "Device Tiering", value: "Automatic" },
        ],
      },
      {
        id: "dashboard-development",
        name: "Dashboard Development",
        category: "Web Development",
        categoryCode: "C",
        lead: "Data-dense financial, analytics, and operational monitoring dashboards.",
        description:
          "We engineer interfaces that comfortably display thousands of data points with virtualized scrolling, instant sorting, and custom editorial charts that don't look like generic templates.",
        problemSolved:
          "Stops complex analytical dashboards from freezing the browser when rendering large time-series datasets.",
        deliverables: [
          "TanStack virtualized data tables (100k+ rows)",
          "Custom SVG / Canvas telemetry charts",
          "Dynamic filter builders & multi-column sorting",
          "Real-time WebSocket data stream connectors",
          "Custom dark/light editorial color palettes",
        ],
        technologies: ["Next.js", "TanStack Virtual", "Tailwind CSS", "TypeScript", "Zustand"],
        useCases: [
          "Quantitative hedge funds monitoring portfolio risk",
          "Network operations centers tracking server health",
          "Logistics dashboards monitoring fleet status",
        ],
        visualType: "ui-schematic",
        metrics: [
          { label: "Row Virtualization", value: "100k+ Rows" },
          { label: "Render Overhead", value: "<16ms per Frame" },
          { label: "Chart Density", value: "High Fidelity" },
        ],
      },
      {
        id: "ui-ux-implementation",
        name: "UI/UX System Implementation",
        category: "Web Development",
        categoryCode: "C",
        lead: "Translating sophisticated Figma designs into pixel-perfect, accessible production code.",
        description:
          "We bridge the gap between creative design vision and engineering reality, transforming high-fidelity Figma files into modular, accessible, and performant React component architectures.",
        problemSolved:
          "Eliminates the frustrating gap where production code looks and feels significantly worse than the approved design mockups.",
        deliverables: [
          "100% pixel-faithful Tailwind component implementations",
          "Micro-interaction choreography & kinetic transitions",
          "Full WCAG 2.1 AA accessibility compliance",
          "Fluid responsive breakpoints for all viewport sizes",
          "Clean, modular component directory structure",
        ],
        technologies: ["Tailwind CSS", "Framer Motion", "TypeScript", "Radix UI", "React"],
        useCases: [
          "Design agencies needing high-end engineering execution",
          "Startups with existing Figma files needing rapid code",
          "Enterprises standardizing fragmented UI implementations",
        ],
        visualType: "blueprint",
        metrics: [
          { label: "Design Fidelity", value: "100% Match" },
          { label: "Accessibility Tier", value: "WCAG AA" },
          { label: "Modular Code", value: "Zero Hardcoding" },
        ],
      },
    ],
  },
  {
    code: "D",
    slug: "backend-infrastructure",
    name: "Backend and Infrastructure",
    tagline: "Architecting resilient APIs, high-throughput databases, and automated cloud deployments.",
    services: [
      {
        id: "api-development",
        name: "API Development & Architecture",
        category: "Backend & Infrastructure",
        categoryCode: "D",
        lead: "Type-safe, high-performance REST and GraphQL APIs engineered for sub-millisecond dispatch.",
        description:
          "We construct resilient backend APIs with contract-driven schemas, automated request validation, rate limiting, and structured error responses that frontend engineers love consuming.",
        problemSolved:
          "Fixes inconsistent endpoints, undocumented backend payloads, and breaking changes between frontend and backend releases.",
        deliverables: [
          "Contract-driven TypeScript OpenAPI / Swagger specs",
          "Automated Zod request & response validation",
          "Granular token-based rate limiting & throttling",
          "Webhook delivery & retry mechanisms",
          "Comprehensive integration test suites",
        ],
        technologies: ["Node.js", "TypeScript", "Fastify / Hono", "PostgreSQL", "Redis"],
        useCases: [
          "SaaS companies launching developer-facing APIs",
          "Mobile app backends requiring ultra-low latency",
          "Multi-service architectures sharing common data models",
        ],
        visualType: "infra-topology",
        metrics: [
          { label: "API Latency", value: "<25ms Average" },
          { label: "Contract Coverage", value: "100% Zod" },
          { label: "Specification", value: "OpenAPI 3.1" },
        ],
      },
      {
        id: "database-architecture",
        name: "Database Architecture & Optimization",
        category: "Backend & Infrastructure",
        categoryCode: "D",
        lead: "Relational database schema modeling, indexing strategies, and high-frequency caching.",
        description:
          "We design relational and vector database schemas optimized for write throughput, query indexing, clean migrations, and zero-downtime replication.",
        problemSolved:
          "Resolves catastrophic query slowdowns, unindexed table scans, and lock contentions during peak traffic periods.",
        deliverables: [
          "Normalized relational database schemas (3NF)",
          "Composite indexing & query execution plan tuning",
          "Automated migration pipelines (Prisma / Drizzle)",
          "Read replica & connection pooling configurations",
          "Automated point-in-time backup strategies",
        ],
        technologies: ["PostgreSQL", "Prisma", "Drizzle", "Redis", "Supabase", "pgvector"],
        useCases: [
          "Scaling databases past 10 million relational rows",
          "High-frequency transactional systems needing strict ACID",
          "Vector search database deployment for AI applications",
        ],
        visualType: "blueprint",
        metrics: [
          { label: "Query Optimization", value: "Up to 90% Faster" },
          { label: "Index Efficiency", value: "Full Index Scans" },
          { label: "Zero Downtime", value: "Guaranteed" },
        ],
      },
      {
        id: "third-party-integrations",
        name: "Third-Party Integrations",
        category: "Backend & Infrastructure",
        categoryCode: "D",
        lead: "Battle-hardened connectors for payment gateways, CRMs, ERPs, and cloud services.",
        description:
          "We build reliable API integrations that handle unexpected partner downtime, rate limits, webhook signature verification, and payload drift with deterministic retry queues.",
        problemSolved:
          "Stops third-party API changes or transient network outages from bringing down your customer-facing product.",
        deliverables: [
          "Webhook receivers with cryptographic verification",
          "Idempotency keys preventing duplicate transactions",
          "Asynchronous worker queues for long-running syncs",
          "Mock testing servers for external dependencies",
          "Comprehensive logging & alerting triggers",
        ],
        technologies: ["Stripe", "HubSpot", "Salesforce", "Twilio", "AWS SQS", "TypeScript"],
        useCases: [
          "Global payment processor switching and reconciliation",
          "Enterprise CRM bidirectional contact synchronizers",
          "Automated accounting software ledger exports",
        ],
        visualType: "node-pipeline",
        metrics: [
          { label: "Idempotency", value: "Guaranteed" },
          { label: "Signature Security", value: "HMAC SHA-256" },
          { label: "Fault Tolerance", value: "100% Retriable" },
        ],
      },
      {
        id: "authentication-systems",
        name: "Authentication & Security Architecture",
        category: "Backend & Infrastructure",
        categoryCode: "D",
        lead: "Zero-trust identity systems, enterprise SSO/SAML, multi-factor auth, and RBAC.",
        description:
          "We implement bulletproof authentication architectures that comply with enterprise security audits while preserving effortless onboarding for end users.",
        problemSolved:
          "Prevents session hijacking, password leak vulnerabilities, and unlocks enterprise sales that mandate SAML/SSO support.",
        deliverables: [
          "Enterprise SSO & SAML 2.0 integration (Okta, Azure AD)",
          "Multi-Factor Authentication (TOTP, WebAuthn, Passkeys)",
          "JWT session management with secure HTTP-only cookies",
          "Granular role and permission hierarchies (RBAC)",
          "Automated brute-force lockout & rate limiting",
        ],
        technologies: ["Auth0", "WorkOS", "NextAuth / Auth.js", "WebAuthn", "TypeScript"],
        useCases: [
          "Enterprise B2B software closing Fortune 500 deals",
          "Fintech platforms requiring biometric passkeys",
          "Healthcare software requiring HIPAA-compliant access",
        ],
        visualType: "infra-topology",
        metrics: [
          { label: "Enterprise Ready", value: "SAML / Okta" },
          { label: "Security Tier", value: "Zero Trust" },
          { label: "Passkey Ready", value: "WebAuthn" },
        ],
      },
      {
        id: "cloud-deployment",
        name: "Cloud Deployment & DevOps",
        category: "Backend & Infrastructure",
        categoryCode: "D",
        lead: "Automated CI/CD pipelines, preview environments, and global edge hosting.",
        description:
          "We set up automated deployment infrastructure where every Git pull request gets an isolated preview environment, automated test runs, and zero-downtime production releases.",
        problemSolved:
          "Eliminates terrifying manual deployments, broken releases, and days wasted debugging environment configuration drift.",
        deliverables: [
          "Automated GitHub Actions CI/CD pipelines",
          "Ephemeral preview deployment environments",
          "Terraform / Pulumi infrastructure as code (IaC)",
          "Global Edge CDN caching and geo-routing",
          "Automated SSL certificates & DNS management",
        ],
        technologies: ["Vercel", "AWS", "GitHub Actions", "Docker", "Terraform", "Cloudflare"],
        useCases: [
          "Engineering teams scaling from 2 to 20 developers",
          "Global web flagships requiring multi-region CDN caching",
          "Regulated companies requiring reproducible IaC configurations",
        ],
        visualType: "infra-topology",
        metrics: [
          { label: "Deploy Time", value: "<90s" },
          { label: "Uptime SLA", value: "99.99%" },
          { label: "Downtime per Deploy", value: "0 Seconds" },
        ],
      },
      {
        id: "performance-optimization",
        name: "Performance & Database Optimization",
        category: "Backend & Infrastructure",
        categoryCode: "D",
        lead: "Eliminating server bottlenecks, memory leaks, and sluggish database queries.",
        description:
          "Deep architectural performance profiling to identify hot loops, unoptimized database queries, redundant network serialization, and uncompressed payload transfers.",
        problemSolved:
          "Cuts ballooning cloud infrastructure bills and turns sluggish 5-second page loads into snappy 200-millisecond interactions.",
        deliverables: [
          "Comprehensive APM profiling & bottleneck identification",
          "Database query plan optimization & index creation",
          "Redis caching layers with smart invalidation",
          "Payload compression & response streaming",
          "Load testing under simulated high-concurrency spikes",
        ],
        technologies: ["Redis", "Datadog", "PostgreSQL EXPLAIN ANALYZE", "Node.js", "Next.js"],
        useCases: [
          "Web applications facing high server CPU during spikes",
          "Companies looking to slash AWS/cloud infrastructure costs",
          "High-traffic marketing launches with viral surges",
        ],
        visualType: "blueprint",
        metrics: [
          { label: "Server Cost Cut", value: "Up to 50%" },
          { label: "P95 Speedup", value: "3x to 5x" },
          { label: "Load Capacity", value: "10,000+ Concurrent" },
        ],
      },
    ],
  },
  {
    code: "E",
    slug: "ongoing-support",
    name: "Ongoing Support and Advisory",
    tagline: "Dedicated principal engineering retainers, continuous feature velocity, and proactive monitoring.",
    services: [
      {
        id: "maintenance",
        name: "Architecture Maintenance & SRE",
        category: "Ongoing Support",
        categoryCode: "E",
        lead: "Proactive dependencies maintenance, security patches, and reliability engineering.",
        description:
          "Continuous stewardship of your production applications ensuring framework versions stay updated, deprecations are handled proactively, and zero unexpected technical debt accumulates.",
        problemSolved:
          "Prevents applications from slowly breaking due to outdated npm packages, abandoned dependencies, or unpatched security vulnerabilities.",
        deliverables: [
          "Monthly dependency & framework upgrade sprints",
          "Proactive deprecation mitigation",
          "Continuous build & lint pipeline validation",
          "Quarterly architecture health check reports",
          "Priority bug patching SLA",
        ],
        technologies: ["Next.js", "Node.js", "TypeScript", "GitHub Dependabot", "Tailwind CSS"],
        useCases: [
          "Companies with launched products seeking dedicated technical peace of mind",
          "Founders without full-time in-house DevOps or SRE staff",
          "Enterprises maintaining mission-critical digital flagships",
        ],
        visualType: "support-matrix",
        metrics: [
          { label: "Maintenance Cadence", value: "Continuous" },
          { label: "Security Patches", value: "<24h SLA" },
          { label: "Deprecation Risk", value: "Zero" },
        ],
      },
      {
        id: "feature-development",
        name: "Continuous Feature Velocity",
        category: "Ongoing Support",
        categoryCode: "E",
        lead: "Dedicated monthly engineering sprint hours to build and ship new customer-requested features.",
        description:
          "An ongoing embedded engineering partnership where our senior architects design, build, and deploy new product capabilities on a recurring monthly cycle.",
        problemSolved:
          "Eliminates the multi-month delay and heavy overhead of hiring full-time in-house engineering squads for specialized product iterations.",
        deliverables: [
          "Dedicated monthly principal engineering hours",
          "Weekly feature sprint planning & backlog grooming",
          "Staging deployments & quality assurance verification",
          "Documentation updates for every new release",
          "Direct Slack & GitHub repository collaboration",
        ],
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
        useCases: [
          "Post-launch products iterating based on early user feedback",
          "SaaS companies shipping monthly feature roadmaps",
          "Established businesses modernizing individual functional modules",
        ],
        visualType: "blueprint",
        metrics: [
          { label: "Sprint Rhythm", value: "Bi-Weekly" },
          { label: "Direct Access", value: "Principal Engineer" },
          { label: "Deployment", value: "Zero Downtime" },
        ],
      },
      {
        id: "security-updates",
        name: "Security Auditing & Patching",
        category: "Ongoing Support",
        categoryCode: "E",
        lead: "Regular vulnerability scanning, dependency auditing, and penetration defense.",
        description:
          "Rigorous security assessments covering OWASP Top 10 vulnerabilities, package integrity verification, input sanitization auditing, and authentication token rotations.",
        problemSolved:
          "Protects client customer data from costly breaches and satisfies strict enterprise vendor security questionnaires.",
        deliverables: [
          "Automated CVE and dependency vulnerability scans",
          "SQL injection & cross-site scripting (XSS) defense audits",
          "CORS and Content Security Policy (CSP) header tuning",
          "API authentication token rotation protocols",
          "Formal vendor security questionnaire support",
        ],
        technologies: ["Snyk", "GitHub Security", "TypeScript", "CSP Headers", "OWASP Standards"],
        useCases: [
          "B2B SaaS companies selling into enterprise compliance teams",
          "Fintech and transactional platforms holding sensitive records",
          "Platforms preparing for SOC 2 Type II or ISO 27001 audits",
        ],
        visualType: "support-matrix",
        metrics: [
          { label: "OWASP Compliance", value: "100% Audited" },
          { label: "Vulnerability Scan", value: "Automated Daily" },
          { label: "Response Window", value: "Immediate" },
        ],
      },
      {
        id: "monitoring",
        name: "24/7 Monitoring & Error Telemetry",
        category: "Ongoing Support",
        categoryCode: "E",
        lead: "Real-time uptime monitoring, crash alerting, and Core Web Vitals telemetry tracking.",
        description:
          "Around-the-clock automated monitoring that immediately notifies our engineering principals of any unexpected server exceptions, slow API endpoints, or user-facing frontend crashes.",
        problemSolved:
          "Ensures you find out and fix software issues before your paying customers or enterprise partners notice them.",
        deliverables: [
          "Real-time Sentry / error tracking integration",
          "Automated uptime pings every 60 seconds",
          "Core Web Vitals real-user monitoring (RUM)",
          "Incident response runbooks & severity tiering",
          "Monthly uptime and performance SLA reporting",
        ],
        technologies: ["Sentry", "BetterStack / Uptime", "Datadog", "Google Search Console RUM"],
        useCases: [
          "High-traffic transactional flagships with zero downtime tolerance",
          "Mission-critical internal enterprise software",
          "SaaS companies with contractual 99.9% uptime SLAs",
        ],
        visualType: "support-matrix",
        metrics: [
          { label: "Ping Interval", value: "60 Seconds" },
          { label: "Incident Alert", value: "Instant SMS/Slack" },
          { label: "RUM Telemetry", value: "Real-time" },
        ],
      },
      {
        id: "technical-consulting",
        name: "Technical Advisory & Architecture Consulting",
        category: "Ongoing Support",
        categoryCode: "E",
        lead: "Executive technology guidance, codebase reviews, and technology procurement advisory.",
        description:
          "Direct access to our senior architects for high-stakes decision making: vendor selection, tech stack evaluations, technical due diligence for acquisitions, and architectural reviews.",
        problemSolved:
          "Prevents non-technical founders and executive leaders from making multi-million dollar architectural mistakes.",
        deliverables: [
          "Scheduled bi-weekly technical advisory sessions",
          "Written architectural review memos & recommendations",
          "Vendor and third-party software evaluation matrices",
          "Technical hiring roadmap guidance",
          "Due diligence reviews for investor teams",
        ],
        technologies: ["System Architecture", "Cloud Topology", "API Standards", "Tech Due Diligence"],
        useCases: [
          "Non-technical founders needing Fractional CTO guidance",
          "Venture funds auditing prospective portfolio engineering quality",
          "Leadership teams deciding whether to build or buy software",
        ],
        visualType: "blueprint",
        metrics: [
          { label: "Advisory Level", value: "Principal Partner" },
          { label: "Review Depth", value: "Full Stack" },
          { label: "Deliverable", value: "Actionable Memos" },
        ],
      },
    ],
  },
];


// Compatibility export for overview components
export const servicesData = [
  {
    id: "product-development",
    title: "Product Development",
    category: "Architecture & Frontend",
    lead: "High-conviction digital presence engineered to convert high-value clients and elevate brand authority.",
    description:
      "We design and build bespoke Next.js web applications, SaaS platforms, and enterprise tools with strict Core Web Vitals optimization.",
    deliverables: [
      "Next.js App Router Architecture",
      "Tailwind Design System & Tokens",
      "Role-Based Access Control UI",
      "Stripe Subscription & Invoicing Engine",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    timeline: "4 - 8 Weeks",
  },
  {
    id: "ai-automation",
    title: "AI and Automation",
    category: "Autonomous Systems",
    lead: "Deterministic agentic pipelines and retrieval-augmented intelligence (RAG).",
    description:
      "Production-grade autonomous agent systems that research, parse, synthesize, and execute actions with mathematical safety guardrails.",
    deliverables: [
      "Autonomous Multi-Step Planners",
      "Hybrid Vector & Keyword RAG Pipelines",
      "Document Intelligence OCR",
      "Deterministic Webhook Orchestration",
    ],
    stack: ["Python", "TypeScript", "pgvector", "LangGraph", "Anthropic / Gemini"],
    timeline: "4 - 8 Weeks",
  },
  {
    id: "web-development",
    title: "Web Development & Flagships",
    category: "Creative Technology",
    lead: "Tactile spatial objects and real-time 3D environments running effortlessly across devices.",
    description:
      "Purposeful 3D implementations using React Three Fiber, fine Swiss typography, and high-performance client acquisition systems.",
    deliverables: [
      "React Three Fiber Canvas Architecture",
      "Bespoke Design Token Systems",
      "GSAP Scroll Storytelling",
      "Sub-second First Contentful Paint",
    ],
    stack: ["Next.js", "Three.js", "R3F", "Tailwind CSS", "GSAP"],
    timeline: "4 - 8 Weeks",
  },
  {
    id: "backend-infrastructure",
    title: "Backend and Infrastructure",
    category: "Systems & Standards",
    lead: "Resilient APIs, relational database schemas, and zero-downtime CI/CD pipelines.",
    description:
      "Type-safe backend architectures with OpenAPI contracts, Redis caching layers, connection pools, and global Edge CDN routing.",
    deliverables: [
      "Contract-Driven OpenAPI Schemas",
      "PostgreSQL Database Optimization",
      "Enterprise SAML/SSO Authentication",
      "Global Edge Cloud Deployments",
    ],
    stack: ["PostgreSQL", "Prisma", "Node.js", "Redis", "Cloudflare", "AWS"],
    timeline: "4 - 8 Weeks",
  },
];
