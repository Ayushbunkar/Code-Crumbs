export interface ProjectScreenshot {
  id: string;
  title: string;
  caption: string;
  type: "browser" | "dashboard" | "mobile" | "schematic";
}

export interface ProjectFeature {
  title: string;
  description: string;
  badge?: string;
}

export interface ProjectChallenge {
  challenge: string;
  engineeringResolution: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  categorySlug: "erp-enterprise" | "document-ai" | "agent-systems" | "applied-ai" | "spatial-3d" | "fintech";
  year: string;
  tagline: string;
  overview: string;
  problemStatement: string;
  solution: string;
  architecture: string;
  architectureDetails: string[];
  keyFeatures: ProjectFeature[];
  technologies: string[];
  screenshots: ProjectScreenshot[];
  liveDemoUrl?: string;
  githubUrl?: string;
  developmentChallenges: ProjectChallenge[];
  metrics: ProjectMetric[];
  featured: boolean;
  prevSlug: string;
  nextSlug: string;
}

export const projectCategories = [
  { label: "All Projects", slug: "all" },
  { label: "Enterprise ERP", slug: "erp-enterprise" },
  { label: "Document AI", slug: "document-ai" },
  { label: "Agent Systems", slug: "agent-systems" },
  { label: "Applied AI", slug: "applied-ai" },
  { label: "Spatial & WebGL", slug: "spatial-3d" },
] as const;

export const projectsData: ProjectItem[] = [
  {
    slug: "evaluna-erp",
    title: "Evaluna ERP",
    category: "Enterprise ERP & Operations",
    categorySlug: "erp-enterprise",
    year: "2024",
    tagline: "Mission-critical resource planning, multi-warehouse inventory matrix, and financial reconciliation engine.",
    overview:
      "Evaluna ERP was engineered for distributed manufacturing and supply chain enterprises requiring unified procurement, real-time inventory ledger updates across multi-site fulfillment centers, and automated vendor invoice reconciliation.",
    problemStatement:
      "Distributed legacy operational software caused 3–5 day reconciliation discrepancies between warehouse receipt reports and accounting ledgers, resulting in stockouts, unbilled freight surcharges, and lost margin transparency.",
    solution:
      "An event-driven enterprise operations platform featuring optimistic concurrency controls, high-density virtualized data tables, automated double-entry ledger journals, and role-based operational permissions across regional fulfillment hubs.",
    architecture:
      "Built on Next.js App Router and Node.js microservices with PostgreSQL partitioned tables, Redis for optimistic distributed lock management, and TanStack Table for rendering 50,000+ SKU line items with sub-16ms frame times.",
    architectureDetails: [
      "Event-driven CQRS ledger service decoupling reads from high-frequency write buffers",
      "Redis distributed mutex locking to prevent phantom stock transfers between fulfillment nodes",
      "Sub-second TanStack Virtual tabular virtualization with client-side column filtering",
      "Automated three-way invoice matching engine (PO vs. Goods Receipt vs. Vendor Invoice)",
    ],
    keyFeatures: [
      {
        title: "Multi-Warehouse Matrix",
        description: "Real-time bin and lot tracking with SKU barcoding and cross-hub inventory transfers.",
        badge: "Operations",
      },
      {
        title: "Real-Time Ledger Synchronization",
        description: "Automatic double-entry journal creation upon shipment delivery verification.",
        badge: "Finance",
      },
      {
        title: "Three-Way Invoice Reconciliation",
        description: "Automated verification comparing purchase order terms, warehouse receipts, and vendor invoices.",
        badge: "Compliance",
      },
      {
        title: "Role-Based Access Hierarchy",
        description: "Granular access controls separating warehouse floor dispatch from financial controllers.",
        badge: "Security",
      },
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Tailwind CSS", "TanStack Virtual", "Zod"],
    screenshots: [
      {
        id: "evaluna-overview",
        title: "Multi-Warehouse Inventory Ledger",
        caption: "High-density SKU monitoring matrix displaying live stock allocations across 6 regional centers.",
        type: "browser",
      },
      {
        id: "evaluna-reconciliation",
        title: "Three-Way Invoice Matching Drawer",
        caption: "Automated tolerance analysis highlighting variance between PO terms and warehouse receipts.",
        type: "dashboard",
      },
      {
        id: "evaluna-audit",
        title: "Immutable Audit Trail & Batch Action",
        caption: "Cryptographic event log tracking user authorization, stock movements, and financial releases.",
        type: "schematic",
      },
    ],
    liveDemoUrl: "/demos/erp-workflow",
    githubUrl: "https://github.com/codeandcrumbs/evaluna-erp",
    developmentChallenges: [
      {
        challenge: "Handling concurrent stock transfers across 8 regional distribution nodes without phantom stock updates.",
        engineeringResolution:
          "Implemented database-level row locks with Redis-based distributed mutexes and transactional outbox patterns, ensuring idempotent inventory state transitions.",
      },
      {
        challenge: "Rendering latency and memory spikes when filtering over 50,000 active SKU variants on client laptops.",
        engineeringResolution:
          "Integrated off-thread Web Worker filter indexing with TanStack Virtual DOM recycling, maintaining smooth 60fps scrolling during rapid keyword searches.",
      },
    ],
    metrics: [
      { label: "Tabular Render Latency", value: "<16ms", detail: "50k virtualized SKU rows" },
      { label: "Ledger Sync Time", value: "Real-Time", detail: "Sub-second journal posting" },
      { label: "Type Safety Coverage", value: "100%", detail: "Strict end-to-end Zod schemas" },
    ],
    featured: true,
    prevSlug: "ai-interview-simulator",
    nextSlug: "summrix-ai",
  },
  {
    slug: "summrix-ai",
    title: "Summrix AI",
    category: "AI & Document Intelligence",
    categorySlug: "document-ai",
    year: "2024",
    tagline: "Automated multi-format document synthesis, dense citation extraction, and structured intelligence platform.",
    overview:
      "Summrix AI is an enterprise document intelligence platform that parses complex regulatory filings, 100+ page technical audits, financial prospectuses, and research papers into executive summaries with byte-accurate citations.",
    problemStatement:
      "Technical analysts and compliance officers spent up to 14 hours per week manually extracting clauses from unstructured PDFs, struggling with citation hallucinations and inability to audit source claims.",
    solution:
      "A hybrid extraction pipeline uniting optical layout OCR, semantic vector embeddings, and an interactive side-by-side verification viewer that highlights original document bounding boxes upon click.",
    architecture:
      "Next.js App Router frontend with WebGL PDF rendering canvas, Python FastAPI backend, hybrid dense/sparse vector retrieval index, LangChain orchestration, and streaming Server-Sent Events (SSE) for low-latency synthesis.",
    architectureDetails: [
      "Layout-aware OCR preserving multi-column reading order and financial tabular hierarchies",
      "Hybrid vector retrieval combining BM25 keyword matching with dense sentence-transformers",
      "Bidirectional citation anchors mapping extracted assertions back to exact PDF coordinates",
      "Zero-hallucination verification pipeline rejecting claims with sub-threshold retrieval scores",
    ],
    keyFeatures: [
      {
        title: "Multi-Format Ingestion",
        description: "Parse native PDFs, scanned legal filings, complex tabular spreadsheets, and research whitepapers.",
        badge: "Ingestion",
      },
      {
        title: "Byte-Accurate Citation Anchors",
        description: "Click any synthesized assertion to jump directly to the exact highlight in the source document.",
        badge: "Auditability",
      },
      {
        title: "Semantic Outline Decomposition",
        description: "Hierarchical TOC extraction producing structured executive briefings and bullet summaries.",
        badge: "Synthesis",
      },
      {
        title: "Structured JSON & Markdown Export",
        description: "One-click export of structured tables and citations directly to Markdown, Notion, or JSON schemas.",
        badge: "Workflow",
      },
    ],
    technologies: ["Next.js", "Python", "FastAPI", "Tailwind CSS", "PDF.js", "Claude API", "PostgreSQL"],
    screenshots: [
      {
        id: "summrix-workspace",
        title: "Interactive Synthesis Canvas",
        caption: "Side-by-side document inspection with linked citation badges and live streaming executive summary.",
        type: "browser",
      },
      {
        id: "summrix-citation",
        title: "Bounding Box Source Verification",
        caption: "High-precision PDF viewport highlighting exact source paragraphs that substantiate generated claims.",
        type: "dashboard",
      },
      {
        id: "summrix-export",
        title: "Schema Export & Structured Table Inspector",
        caption: "Extracted balance sheet tables formatted with strict decimal validation and column headers.",
        type: "schematic",
      },
    ],
    liveDemoUrl: "/demos/saas-dashboard",
    githubUrl: "https://github.com/codeandcrumbs/summrix-ai",
    developmentChallenges: [
      {
        challenge: "Extracting nested financial tables and multi-column layouts without garbling reading order.",
        engineeringResolution:
          "Developed layout-aware bounding-box heuristics combined with vision OCR parsing to maintain columnar structural hierarchy before passing tokens to the embedding model.",
      },
      {
        challenge: "Ensuring zero hallucination in generated executive syntheses.",
        engineeringResolution:
          "Engineered a strict verification guardrail where every statement requires bidirectional cosine similarity matching against retrieved chunks, flagging unanchored assertions.",
      },
    ],
    metrics: [
      { label: "Document Ingestion Rate", value: "<2.4s", detail: "Per 100 pages indexed" },
      { label: "Citation Precision", value: "100%", detail: "Byte-anchored PDF coordinates" },
      { label: "Stream Latency", value: "<280ms", detail: "First token SSE response" },
    ],
    featured: true,
    prevSlug: "evaluna-erp",
    nextSlug: "multi-agent-research-system",
  },
  {
    slug: "multi-agent-research-system",
    title: "Multi-Agent Research System",
    category: "Multi-Agent Systems",
    categorySlug: "agent-systems",
    year: "2024",
    tagline: "Autonomous directed acyclic graph (DAG) research agent swarm with real-time peer fact-checking.",
    overview:
      "An autonomous multi-agent orchestration framework where specialized autonomous agents collaborate asynchronously to execute deep-dive technical and competitive intelligence investigations.",
    problemStatement:
      "Single-prompt LLM research workflows produce shallow, biased overviews prone to subtle inaccuracies and missing counter-evidence when investigating complex, fast-evolving technological topics.",
    solution:
      "A specialized 4-agent swarm architecture: Scraper Agent collects verified citations; Analyst Agent structures hypotheses; Critic Agent challenges assumptions and stress-tests sources; Editor Agent compiles the publication-ready dossier.",
    architecture:
      "Built with Next.js interface, Node.js / Python agent worker runtime, Redis Pub/Sub message board for inter-agent communication, and a visual node graph canvas for tracking live agent thought streams.",
    architectureDetails: [
      "Directed Acyclic Graph (DAG) task engine orchestrating dependent sub-queries",
      "Redis Pub/Sub message board coordinating asynchronous peer agent dialogue",
      "Client-side requestAnimationFrame canvas streaming 30Hz agent state changes",
      "Deterministic convergence thresholds to prevent cyclical agent debate deadlocks",
    ],
    keyFeatures: [
      {
        title: "Asynchronous Agent Swarm",
        description: "Specialized roles with independent memory scratchpads collaborating toward a unified brief.",
        badge: "Swarm",
      },
      {
        title: "DAG Task Dependency Resolver",
        description: "Parallelized web exploration tasks that automatically await blocking peer deliverables.",
        badge: "Orchestration",
      },
      {
        title: "Live Thought Stream Canvas",
        description: "Real-time inspection of agent reasoning loops, search queries, and critique debates.",
        badge: "Telemetry",
      },
      {
        title: "Automated Contradiction Flagging",
        description: "Cross-references conflicting statements across distinct sources with confidence scores.",
        badge: "Verification",
      },
    ],
    technologies: ["Next.js", "Python", "Node.js", "Redis", "Framer Motion", "Tailwind CSS", "Docker"],
    screenshots: [
      {
        id: "swarm-canvas",
        title: "Agent Swarm Visual DAG",
        caption: "Live topological node view rendering real-time message flow between Research, Critic, and Editor agents.",
        type: "browser",
      },
      {
        id: "swarm-terminal",
        title: "Live Streamed Agent Thought Log",
        caption: "High-density terminal inspector showing tool dispatches, search results, and verification evaluations.",
        type: "dashboard",
      },
      {
        id: "swarm-dossier",
        title: "Synthesized Research Dossier",
        caption: "Multi-chapter editorial report with confidence indicators, contradictory findings, and cited footnotes.",
        type: "schematic",
      },
    ],
    liveDemoUrl: "/demos/ai-automation",
    githubUrl: "https://github.com/codeandcrumbs/multi-agent-research",
    developmentChallenges: [
      {
        challenge: "Preventing infinite agent consensus loops and circular critique deadlocks during complex debates.",
        engineeringResolution:
          "Implemented strict maximum iteration budgets, deterministic convergence scoring, and an arbitration protocol that breaks debate ties after 3 rounds.",
      },
      {
        challenge: "Visualizing high-velocity WebSocket streaming from 4 concurrent agent processes without freezing the DOM.",
        engineeringResolution:
          "Designed a batched requestAnimationFrame buffer on the client that throttles UI state dispatches to 30Hz while preserving millisecond-level event logging in the background.",
      },
    ],
    metrics: [
      { label: "Dispatch Latency", value: "<12ms", detail: "Redis Pub/Sub inter-agent bus" },
      { label: "Swarm Concurrency", value: "4 Agents", detail: "Parallelized research DAG" },
      { label: "Verification Strictness", value: "Dual-Pass", detail: "Critic + Editor peer reviews" },
    ],
    featured: true,
    prevSlug: "summrix-ai",
    nextSlug: "ai-interview-simulator",
  },
  {
    slug: "ai-interview-simulator",
    title: "AI Interview Simulator",
    category: "Applied AI & Audio/Video Intelligence",
    categorySlug: "applied-ai",
    year: "2024",
    tagline: "Real-time conversational interview rehearsal environment with speech latency optimization and behavioral analytics.",
    overview:
      "A high-fidelity technical and executive interview simulator delivering low-latency voice dialogues, adaptive follow-up questioning based on candidate responses, and instant rubric-based competency assessments.",
    problemStatement:
      "Candidates and hiring teams lack realistic, objective simulation environments that test situational problem-solving under real conversational pressure without human scheduling bottlenecks.",
    solution:
      "An ultra-low latency voice-to-voice pipeline combining browser Web Audio API, streaming speech-to-text, adaptive role-playing intelligence, and real-time speech synthesis.",
    architecture:
      "Next.js frontend with Web Audio API PCM streaming, WebSockets connecting to an edge voice router, Claude API for dynamic reasoning, sub-200ms transcription, and streaming audio synthesis.",
    architectureDetails: [
      "Client-side Web Audio Voice Activity Detection (VAD) with sub-80ms interruption triggers",
      "Edge WebSocket gateway managing full-duplex binary audio and JSON telemetry streams",
      "Adaptive prompt steering reacting dynamically to vague answers and canned responses",
      "Multi-dimensional rubric grading engine mapping responses to engineering competencies",
    ],
    keyFeatures: [
      {
        title: "Sub-800ms Voice Turnaround",
        description: "Natural conversational cadence with natural speech interruption and conversational pacing.",
        badge: "Real-Time Audio",
      },
      {
        title: "Adaptive Questioning Engine",
        description: "Dynamically deepens technical inquiries if candidate responses are generic or rehearsed.",
        badge: "Intelligence",
      },
      {
        title: "Multi-Dimensional Scorecard",
        description: "Evaluates architectural trade-offs, system clarity, edge-case anticipation, and poise.",
        badge: "Analytics",
      },
      {
        title: "Annotated Timeline Playback",
        description: "Session recording with timestamped feedback markers and actionable recommendations.",
        badge: "Feedback",
      },
    ],
    technologies: ["Next.js", "Web Audio API", "WebSockets", "Claude API", "Tailwind CSS", "TypeScript"],
    screenshots: [
      {
        id: "interview-stage",
        title: "Interactive Voice Interview Stage",
        caption: "Minimalist spatial audio stage with dynamic waveform visualizer and conversational turn indicators.",
        type: "browser",
      },
      {
        id: "interview-scorecard",
        title: "Competency Matrix & Rubric Assessment",
        caption: "Comprehensive seniority rating scorecard comparing response depth against Staff+ engineering criteria.",
        type: "dashboard",
      },
      {
        id: "interview-transcript",
        title: "Timestamped Transcript Analysis",
        caption: "Word-for-word transcript with inline architectural suggestions, time pauses, and clarity markers.",
        type: "schematic",
      },
    ],
    liveDemoUrl: "/demos/saas-dashboard",
    githubUrl: "https://github.com/codeandcrumbs/ai-interview-simulator",
    developmentChallenges: [
      {
        challenge: "Achieving true conversational interruption detection without accidental triggers from ambient room noise.",
        engineeringResolution:
          "Built a client-side Web Audio VAD (Voice Activity Detection) worker running an energy-threshold classifier that sends pause interrupts to the audio playback buffer within 80ms.",
      },
      {
        challenge: "Providing actionable, non-generic interview feedback rather than boilerplate praise.",
        engineeringResolution:
          "Configured structured rubric outputs anchored directly to candidate quote timestamps, mapping responses against standardized software engineering seniority levels.",
      },
    ],
    metrics: [
      { label: "End-to-End Latency", value: "<780ms", detail: "Spoken question to speech playback" },
      { label: "Voice Interruption", value: "<80ms", detail: "Client-side Web Audio VAD" },
      { label: "Rubric Coverage", value: "8 Vectors", detail: "System architecture to poise" },
    ],
    featured: true,
    prevSlug: "multi-agent-research-system",
    nextSlug: "aurora-synthetics",
  },
  {
    slug: "aurora-synthetics",
    title: "Aurora Synthetics",
    category: "Spatial & WebGL Molecular Interface",
    categorySlug: "spatial-3d",
    year: "2024",
    tagline: "High-density molecular exploration interface and spatial web flagship.",
    overview:
      "Aurora required an editorial yet mathematically rigorous interface to present computational peptide discoveries to institutional partners and pharmaceutical research teams.",
    problemStatement:
      "Pharmaceutical partners found traditional PDF data packages difficult to parse and lacking intuitive spatial understanding of 3D peptide bonding sites.",
    solution:
      "A high-performance WebGL interface combining custom instanced mesh shaders with editorial Swiss typography and responsive molecular exploration tools.",
    architecture:
      "Next.js App Router, React Three Fiber for WebGL molecular rendering, and custom GLSL vertex shaders with instanced meshes for 60fps rendering across mobile and desktop devices.",
    architectureDetails: [
      "Instanced mesh WebGL buffers rendering 10,000+ atomic coordinates at 60 FPS",
      "Dynamic camera tweening following amino acid sequence bonding coordinates",
      "Progressive asset hydration allowing interactive inspection before full model load",
      "Editorial Swiss typographic layout with strict architectural grid lines",
    ],
    keyFeatures: [
      {
        title: "Spatial 3D Molecule Inspector",
        description: "Interactive real-time rotation, zoom, and cross-section slicing of synthetic peptides.",
        badge: "WebGL",
      },
      {
        title: "Editorial Design System",
        description: "Warm paper aesthetic paired with charcoal typography and burnt orange coordinate markers.",
        badge: "Design",
      },
      {
        title: "Partner Briefing Room",
        description: "Encrypted presentation viewports for institutional pharmaceutical partner reviews.",
        badge: "Enterprise",
      },
      {
        title: "Global Edge Deployment",
        description: "Sub-second global TTFB with optimized asset streaming and Brotli compression.",
        badge: "Infrastructure",
      },
    ],
    technologies: ["Next.js", "React Three Fiber", "Three.js", "Tailwind CSS", "GSAP", "TypeScript"],
    screenshots: [
      {
        id: "aurora-3d",
        title: "Spatial Molecular Viewport",
        caption: "Real-time 3D peptide structure rendering with custom GLSL lighting shaders and atomic coordinate labels.",
        type: "browser",
      },
      {
        id: "aurora-telemetry",
        title: "Bonding Telemetry & Sequence Matrix",
        caption: "Tabular amino acid sequence breakdown aligned to physical rotational angles in the 3D viewport.",
        type: "dashboard",
      },
    ],
    liveDemoUrl: "/demos/saas-dashboard",
    developmentChallenges: [
      {
        challenge: "Rendering complex 3D molecular structures in real-time on mobile browsers while maintaining 60 FPS.",
        engineeringResolution:
          "Developed custom GLSL instanced vertex shaders and level-of-detail (LOD) geometry fallbacks, reducing draw calls by 84%.",
      },
    ],
    metrics: [
      { label: "Rendering Rate", value: "60 FPS", detail: "Mobile & Desktop WebGL" },
      { label: "Lighthouse Score", value: "99/100", detail: "Near-instant FCP & LCP" },
      { label: "Draw Call Reduction", value: "84%", detail: "Instanced GLSL buffers" },
    ],
    featured: false,
    prevSlug: "ai-interview-simulator",
    nextSlug: "evaluna-erp",
  },
];
