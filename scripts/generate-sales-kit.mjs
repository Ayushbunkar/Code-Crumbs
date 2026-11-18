import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

const COLOR_CHARCOAL = rgb(0.09, 0.09, 0.09); // #171717
const COLOR_BURNT = rgb(0.91, 0.36, 0.21);    // #E85D35
const COLOR_SAND = rgb(0.96, 0.94, 0.91);     // #F4F0E8
const COLOR_MUTED = rgb(0.47, 0.45, 0.42);    // #77736B
const COLOR_BORDER = rgb(0.85, 0.82, 0.77);   // #D8D1C5
const COLOR_WHITE = rgb(1, 1, 1);

function drawHeaderFooter(page, pageNum, totalPages, docTitle, fontRegular, fontBold) {
  const { width, height } = page.getSize();
  const margin = 48;

  // Header
  page.drawLine({
    start: { x: margin, y: height - 42 },
    end: { x: width - margin, y: height - 42 },
    thickness: 0.75,
    color: COLOR_BORDER,
  });

  page.drawText("CODE&CRUMBS", {
    x: margin,
    y: height - 36,
    size: 8.5,
    font: fontBold,
    color: COLOR_BURNT,
  });

  page.drawText(`•  ${docTitle.toUpperCase()}`, {
    x: margin + 82,
    y: height - 36,
    size: 8,
    font: fontRegular,
    color: COLOR_MUTED,
  });

  page.drawText("PRACTICE BRIEF", {
    x: width - margin - 80,
    y: height - 36,
    size: 7.5,
    font: fontRegular,
    color: COLOR_MUTED,
  });

  // Footer
  page.drawLine({
    start: { x: margin, y: 46 },
    end: { x: width - margin, y: 46 },
    thickness: 0.75,
    color: COLOR_BORDER,
  });

  page.drawText("CONFIDENTIAL & PROPRIETARY • CODE&CRUMBS SOFTWARE ENGINEERING", {
    x: margin,
    y: 34,
    size: 7.5,
    font: fontRegular,
    color: COLOR_MUTED,
  });

  const pageStr = `Page ${pageNum} of ${totalPages}`;
  page.drawText(pageStr, {
    x: width - margin - 55,
    y: 34,
    size: 7.5,
    font: fontRegular,
    color: COLOR_MUTED,
  });
}

function drawSectionHeader(page, y, kicker, title, fontRegular, fontBold, fontSerif) {
  const margin = 48;
  page.drawText(kicker.toUpperCase(), {
    x: margin,
    y,
    size: 8,
    font: fontBold,
    color: COLOR_BURNT,
  });
  page.drawText(title, {
    x: margin,
    y: y - 16,
    size: 16,
    font: fontSerif,
    color: COLOR_CHARCOAL,
  });
  page.drawLine({
    start: { x: margin, y: y - 24 },
    end: { x: margin + 140, y: y - 24 },
    thickness: 1,
    color: COLOR_BURNT,
  });
  return y - 44;
}

// -------------------------------------------------------------
// 1. COMPANY INTRODUCTION PDF
// -------------------------------------------------------------
async function generateCompanyIntroPDF() {
  const doc = await PDFDocument.create();
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontSerif = await doc.embedFont(StandardFonts.TimesRomanBold);

  // Page 1: Overview & Identity
  const page1 = doc.addPage([595.28, 841.89]); // A4
  const margin = 48;

  // Background subtle tint
  page1.drawRectangle({
    x: 0,
    y: 0,
    width: 595.28,
    height: 841.89,
    color: COLOR_SAND,
  });

  // Inner White Sheet
  page1.drawRectangle({
    x: 24,
    y: 24,
    width: 595.28 - 48,
    height: 841.89 - 48,
    color: COLOR_WHITE,
    borderColor: COLOR_BORDER,
    borderWidth: 1,
  });

  drawHeaderFooter(page1, 1, 2, "Company Introduction & Manifesto", fontRegular, fontBold);

  let y = 740;
  page1.drawText("PRACTICE OVERVIEW & CAPABILITIES DOSSIER", {
    x: margin,
    y,
    size: 8.5,
    font: fontBold,
    color: COLOR_BURNT,
  });
  y -= 26;

  page1.drawText("We build what moves your business forward.", {
    x: margin,
    y,
    size: 24,
    font: fontSerif,
    color: COLOR_CHARCOAL,
  });
  y -= 28;

  page1.drawText(
    "Code&Crumbs is an independent software design and engineering practice. We design and develop\nintelligent software, AI-powered systems, and high-performance digital platforms for ambitious ventures.",
    {
      x: margin,
      y,
      size: 10,
      font: fontRegular,
      color: COLOR_MUTED,
      lineHeight: 15,
    }
  );
  y -= 50;

  y = drawSectionHeader(page1, y, "01. Practice Identity", "Engineering Rigor & Creative Authority", fontRegular, fontBold, fontSerif);

  const p1 = [
    "Code&Crumbs operates as a high-conviction technical partner rather than a transactional vendor. We combine",
    "systems architecture, applied artificial intelligence, and tactile editorial design into software products built to scale.",
    "Every engagement is staffed by senior engineers and product architects—ensuring zero junior hand-offs and",
    "uncompromising production momentum from initial scoping through global edge deployment.",
  ];
  p1.forEach((line) => {
    page1.drawText(line, { x: margin, y, size: 9.5, font: fontRegular, color: COLOR_CHARCOAL });
    y -= 14;
  });
  y -= 20;

  y = drawSectionHeader(page1, y, "02. Who We Work With", "Venture-Backed Startups, Scaleups & Modern Enterprise", fontRegular, fontBold, fontSerif);

  const clients = [
    { type: "Series A to Growth Stage SaaS", desc: "Founders needing production MVP acceleration or complete interface re-architecting." },
    { type: "Enterprise Operations Teams", desc: "Logistics, supply chain, and financial firms replacing fragile spreadsheets with custom ERPs." },
    { type: "Autonomous Intelligence Builders", desc: "Organizations deploying multi-agent swarms, document OCR intelligence, and voice AI." },
  ];

  clients.forEach((c) => {
    page1.drawRectangle({
      x: margin,
      y: y - 26,
      width: 595.28 - margin * 2,
      height: 32,
      color: COLOR_SAND,
      borderColor: COLOR_BORDER,
      borderWidth: 0.5,
    });
    page1.drawText(c.type.toUpperCase(), { x: margin + 12, y: y - 12, size: 8.5, font: fontBold, color: COLOR_BURNT });
    page1.drawText(c.desc, { x: margin + 12, y: y - 22, size: 8, font: fontRegular, color: COLOR_MUTED });
    y -= 40;
  });

  // Page 2: Service Categories & Engagement Process
  const page2 = doc.addPage([595.28, 841.89]);
  page2.drawRectangle({ x: 0, y: 0, width: 595.28, height: 841.89, color: COLOR_SAND });
  page2.drawRectangle({ x: 24, y: 24, width: 595.28 - 48, height: 841.89 - 48, color: COLOR_WHITE, borderColor: COLOR_BORDER, borderWidth: 1 });
  drawHeaderFooter(page2, 2, 2, "Company Introduction & Manifesto", fontRegular, fontBold);

  y = 740;
  y = drawSectionHeader(page2, y, "03. Service Categories", "Core Practice Disciplines", fontRegular, fontBold, fontSerif);

  const disciplines = [
    { title: "Product Development", detail: "SaaS platforms, production MVPs, internal tooling, high-density ERP and CRM workflows." },
    { title: "AI & Workflow Automation", detail: "Multi-agent research swarms, document OCR intelligence, semantic vector search, LLM integrations." },
    { title: "Web Application & Flagships", detail: "Editorial web systems, interactive 3D spatial web (React Three Fiber), design systems." },
    { title: "Backend & Cloud Architecture", detail: "High-throughput APIs, PostgreSQL partitioned databases, Redis lock management, Docker." },
    { title: "Ongoing Support & Velocity", detail: "Embedded technical retainers, architecture maintenance, security auditing, and feature velocity." },
  ];

  disciplines.forEach((d) => {
    page2.drawText(`•  ${d.title}:`, { x: margin, y, size: 9, font: fontBold, color: COLOR_CHARCOAL });
    page2.drawText(d.detail, { x: margin + 130, y, size: 8.5, font: fontRegular, color: COLOR_MUTED });
    y -= 18;
  });
  y -= 25;

  y = drawSectionHeader(page2, y, "04. Development Process", "The Four-Stage Engineering Method", fontRegular, fontBold, fontSerif);

  const processSteps = [
    { no: "01", name: "Architecture & Scope", desc: "Rigorous technical discovery, system boundary definition, schema contracts, and milestone planning." },
    { no: "02", name: "Rapid Iterative Sprints", desc: "Two-week momentum cycles with live staging environments, weekly PR previews, and continuous CI/CD." },
    { no: "03", name: "Stress Testing & Auditing", desc: "Lighthouse optimization, end-to-end Zod validation, security reviews, and virtualized load testing." },
    { no: "04", name: "Edge Launch & Governance", desc: "Zero-downtime production cutover, observability instrumentation, telemetry, and warranty support." },
  ];

  processSteps.forEach((s) => {
    page2.drawText(`[STAGE ${s.no}]  ${s.name.toUpperCase()}`, { x: margin, y, size: 8.5, font: fontBold, color: COLOR_BURNT });
    y -= 13;
    page2.drawText(s.desc, { x: margin, y, size: 8.5, font: fontRegular, color: COLOR_CHARCOAL });
    y -= 20;
  });
  y -= 15;

  // Contact Strip
  page2.drawRectangle({
    x: margin,
    y: y - 48,
    width: 595.28 - margin * 2,
    height: 52,
    color: COLOR_CHARCOAL,
  });
  page2.drawText("DISCUSS AN ENGAGEMENT WITH OUR PRINCIPALS", {
    x: margin + 16,
    y: y - 18,
    size: 9,
    font: fontBold,
    color: COLOR_BURNT,
  });
  page2.drawText("Direct Inquiries: partner@codeandcrumbs.com  •  Configurator: https://codeandcrumbs.com/contact", {
    x: margin + 16,
    y: y - 34,
    size: 8,
    font: fontRegular,
    color: COLOR_WHITE,
  });

  return await doc.save();
}

// -------------------------------------------------------------
// 2. SERVICES & TECHNOLOGY STACK PDF
// -------------------------------------------------------------
async function generateServicesTechPDF() {
  const doc = await PDFDocument.create();
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontSerif = await doc.embedFont(StandardFonts.TimesRomanBold);

  const page = doc.addPage([595.28, 841.89]);
  const margin = 48;
  page.drawRectangle({ x: 0, y: 0, width: 595.28, height: 841.89, color: COLOR_SAND });
  page.drawRectangle({ x: 24, y: 24, width: 595.28 - 48, height: 841.89 - 48, color: COLOR_WHITE, borderColor: COLOR_BORDER, borderWidth: 1 });
  drawHeaderFooter(page, 1, 1, "Services & Technology Stack Specification", fontRegular, fontBold);

  let y = 740;
  y = drawSectionHeader(page, y, "Capabilities Matrix", "Comprehensive Software Engineering Services", fontRegular, fontBold, fontSerif);

  const services = [
    { name: "SaaS & MVP Engineering", stack: "Next.js 15, React 19, TypeScript, Stripe Billing, Supabase / PostgreSQL", desc: "Full-stack application architecture designed for velocity and commercial reliability." },
    { name: "AI Agents & Workflow Automation", stack: "Python, FastAPI, LangChain, Redis Pub/Sub, Vector DBs, Claude & OpenAI APIs", desc: "Autonomous multi-agent DAG execution, OCR parsing, and deterministic business rules." },
    { name: "High-Density Web Applications", stack: "Tailwind CSS, TanStack Virtual, Framer Motion, GSAP ScrollTrigger", desc: "High-performance data consoles handling 50k+ virtualized rows at 60 FPS." },
    { name: "Interactive 3D & Spatial Web", stack: "React Three Fiber, Drei, Three.js, Custom GLSL Shaders", desc: "Architectural, molecular, and product visualization viewports engineered with WebGL." },
    { name: "Backend Infrastructure & APIs", stack: "Node.js, PostgreSQL, Redis distributed locks, Docker, Edge Gateways", desc: "Sub-second event-driven backends with CQRS data models and strict Zod validation." },
  ];

  services.forEach((s) => {
    page.drawText(s.name, { x: margin, y, size: 10, font: fontBold, color: COLOR_CHARCOAL });
    page.drawText(`Stack: ${s.stack}`, { x: margin, y: y - 12, size: 8, font: fontRegular, color: COLOR_BURNT });
    page.drawText(s.desc, { x: margin, y: y - 24, size: 8.5, font: fontRegular, color: COLOR_MUTED });
    y -= 44;
  });
  y -= 10;

  y = drawSectionHeader(page, y, "Verified Infrastructure", "Modern Production Engineering Standards", fontRegular, fontBold, fontSerif);

  const pillars = [
    { title: "Type-Safety & Contracts", desc: "100% strict TypeScript with Zod runtime validation preventing malformed data leaks." },
    { title: "Performance Benchmarks", desc: "Sub-40ms INP, zero cumulative layout shifts (CLS), and 98+ Lighthouse standards." },
    { title: "Strict Mutual Confidentiality", desc: "Executed NDAs prior to source access. Secure code repositories with zero external data sharing." },
  ];

  pillars.forEach((p) => {
    page.drawText(`•  ${p.title}:`, { x: margin, y, size: 9, font: fontBold, color: COLOR_CHARCOAL });
    page.drawText(p.desc, { x: margin + 140, y, size: 8.5, font: fontRegular, color: COLOR_MUTED });
    y -= 22;
  });

  return await doc.save();
}

// -------------------------------------------------------------
// 3. CASE STUDIES & SELECTED PROJECTS PDF
// -------------------------------------------------------------
async function generateCaseStudiesPDF() {
  const doc = await PDFDocument.create();
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontSerif = await doc.embedFont(StandardFonts.TimesRomanBold);

  const page = doc.addPage([595.28, 841.89]);
  const margin = 48;
  page.drawRectangle({ x: 0, y: 0, width: 595.28, height: 841.89, color: COLOR_SAND });
  page.drawRectangle({ x: 24, y: 24, width: 595.28 - 48, height: 841.89 - 48, color: COLOR_WHITE, borderColor: COLOR_BORDER, borderWidth: 1 });
  drawHeaderFooter(page, 1, 1, "Selected Case Studies & Engineering Briefs", fontRegular, fontBold);

  let y = 740;
  y = drawSectionHeader(page, y, "Verified Engineering Work", "Production Architectural Case Studies", fontRegular, fontBold, fontSerif);

  const cases = [
    {
      title: "Evaluna ERP (Enterprise Resource Planning & Multi-Hub Matrix)",
      metric: "<16ms Tabular Virtualization  •  50,000+ Active SKUs  •  Zero Phantom Stock Transfers",
      challenge: "Handling concurrent stock allocation across 8 fulfillment centers without inventory lock contention.",
      solution: "Engineered Redis distributed mutexes and TanStack Table virtual DOM recycling on Next.js 15.",
    },
    {
      title: "Summrix AI (Document Intelligence & Byte-Accurate Extraction)",
      metric: "100% Citation Anchoring  •  <280ms First Token SSE Stream  •  Zero Hallucination Guardrail",
      challenge: "Parsing 140-page financial audits and multi-column regulatory tables without garbled reading order.",
      solution: "Layout-aware optical OCR combined with bidirectional vector retrieval and interactive bounding boxes.",
    },
    {
      title: "Multi-Agent Research System (Autonomous DAG Swarm)",
      metric: "4 Distributed Agents  •  <12ms Redis Message Bus  •  Dual-Pass Peer Review Verification",
      challenge: "Preventing infinite agent consensus deadlocks and browser freezing during high-velocity streams.",
      solution: "Designed requestAnimationFrame 30Hz rendering buffers and deterministic convergence scoring.",
    },
    {
      title: "AI Interview Simulator (Low-Latency Voice Rehearsal Engine)",
      metric: "<780ms End-to-End Voice Turnaround  •  <80ms Web Audio VAD  •  8 Competency Rubrics",
      challenge: "Achieving instantaneous audio interruption detection in noisy ambient environments.",
      solution: "Built a client-side Web Audio VAD worker streaming binary PCM over full-duplex WebSockets.",
    },
  ];

  cases.forEach((c) => {
    page.drawText(c.title, { x: margin, y, size: 9.5, font: fontBold, color: COLOR_CHARCOAL });
    page.drawText(c.metric, { x: margin, y: y - 12, size: 7.5, font: fontBold, color: COLOR_BURNT });
    page.drawText(`Challenge: ${c.challenge}`, { x: margin, y: y - 23, size: 8, font: fontRegular, color: COLOR_MUTED });
    page.drawText(`Resolution: ${c.solution}`, { x: margin, y: y - 34, size: 8, font: fontRegular, color: COLOR_CHARCOAL });
    y -= 52;
  });

  return await doc.save();
}

// -------------------------------------------------------------
// 4. TECHNOLOGY STACK PDF
// -------------------------------------------------------------
async function generateTechStackPDF() {
  const doc = await PDFDocument.create();
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontSerif = await doc.embedFont(StandardFonts.TimesRomanBold);

  const page = doc.addPage([595.28, 841.89]);
  const margin = 48;
  page.drawRectangle({ x: 0, y: 0, width: 595.28, height: 841.89, color: COLOR_SAND });
  page.drawRectangle({ x: 24, y: 24, width: 595.28 - 48, height: 841.89 - 48, color: COLOR_WHITE, borderColor: COLOR_BORDER, borderWidth: 1 });
  drawHeaderFooter(page, 1, 1, "Technical Stack & Infrastructure Standards", fontRegular, fontBold);

  let y = 740;
  y = drawSectionHeader(page, y, "Architecture Matrix", "Core Frameworks, Runtimes & Infrastructure", fontRegular, fontBold, fontSerif);

  const stacks = [
    { cat: "Frontend Engineering", techs: "Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, TanStack Virtual, Framer Motion" },
    { cat: "3D & Spatial Visualization", techs: "React Three Fiber (R3F), Drei, Three.js, Custom GLSL Shaders, WebGL 2.0" },
    { cat: "Applied AI & Automation", techs: "Python, FastAPI, LangChain, Vector Embeddings (ChromaDB / Pinecone), Claude 3.5 & OpenAI APIs" },
    { cat: "Data & Storage Layers", techs: "PostgreSQL, Supabase, Redis (Distributed Lock & Pub/Sub), Prisma / Drizzle ORM, Zod Schemas" },
    { cat: "DevOps & Infrastructure", techs: "Docker, Vercel Edge Network, GitHub Actions CI/CD, AWS ECS/S3, Cloudflare Workers" },
  ];

  stacks.forEach((s) => {
    page.drawRectangle({
      x: margin,
      y: y - 32,
      width: 595.28 - margin * 2,
      height: 38,
      color: COLOR_SAND,
      borderColor: COLOR_BORDER,
      borderWidth: 0.5,
    });
    page.drawText(s.cat.toUpperCase(), { x: margin + 12, y: y - 14, size: 8.5, font: fontBold, color: COLOR_BURNT });
    page.drawText(s.techs, { x: margin + 12, y: y - 26, size: 8, font: fontRegular, color: COLOR_CHARCOAL });
    y -= 48;
  });

  return await doc.save();
}

// -------------------------------------------------------------
// 5. PROJECT ENGAGEMENT PROCESS PDF
// -------------------------------------------------------------
async function generateEngagementProcessPDF() {
  const doc = await PDFDocument.create();
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontSerif = await doc.embedFont(StandardFonts.TimesRomanBold);

  const page = doc.addPage([595.28, 841.89]);
  const margin = 48;
  page.drawRectangle({ x: 0, y: 0, width: 595.28, height: 841.89, color: COLOR_SAND });
  page.drawRectangle({ x: 24, y: 24, width: 595.28 - 48, height: 841.89 - 48, color: COLOR_WHITE, borderColor: COLOR_BORDER, borderWidth: 1 });
  drawHeaderFooter(page, 1, 1, "Project Engagement Process & Governance", fontRegular, fontBold);

  let y = 740;
  y = drawSectionHeader(page, y, "Commercial Framework", "How Code&Crumbs Engages With Clients", fontRegular, fontBold, fontSerif);

  const steps = [
    {
      stage: "01. Requirement Configuration & NDA",
      desc: "Client submits technical scope via our interactive project builder or direct email. A mutual non-disclosure agreement (NDA) is executed prior to reviewing proprietary repositories or architecture plans.",
    },
    {
      stage: "02. Technical Architecture & Milestone Sizing",
      desc: "Our software architects conduct a technical discovery session. We deliver a detailed specification document detailing schema contracts, system boundaries, timeline sprints, and guaranteed deliverables.",
    },
    {
      stage: "03. Sprint Execution & Staging Previews",
      desc: "Engineering proceeds in two-week iterative sprints. Clients receive access to live staging environments, weekly PR demo recordings, and direct Slack / Discord channels with lead architects.",
    },
    {
      stage: "04. Production Hand-off & Support Retainers",
      desc: "Full source code transfer under client-owned repositories. Complete documentation, deployment runbooks, and optional ongoing technical velocity retainers for continuous feature velocity.",
    },
  ];

  steps.forEach((st) => {
    page.drawText(st.stage, { x: margin, y, size: 9.5, font: fontBold, color: COLOR_BURNT });
    y -= 14;
    page.drawText(st.desc, { x: margin, y, size: 8.5, font: fontRegular, color: COLOR_CHARCOAL, lineHeight: 13, maxWidth: 595.28 - margin * 2 });
    y -= 38;
  });

  return await doc.save();
}

// -------------------------------------------------------------
// MAIN BUILD SCRIPT
// -------------------------------------------------------------
async function buildAllSalesKitPDFs() {
  const outputDir = path.join(process.cwd(), "public", "docs");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log("Generating actual binary PDF documents in public/docs/...");

  const introBytes = await generateCompanyIntroPDF();
  fs.writeFileSync(path.join(outputDir, "code-and-crumbs-company-introduction.pdf"), introBytes);
  console.log("✓ Generated code-and-crumbs-company-introduction.pdf");

  const servicesBytes = await generateServicesTechPDF();
  fs.writeFileSync(path.join(outputDir, "code-and-crumbs-services-capabilities.pdf"), servicesBytes);
  console.log("✓ Generated code-and-crumbs-services-capabilities.pdf");

  const techBytes = await generateTechStackPDF();
  fs.writeFileSync(path.join(outputDir, "code-and-crumbs-technology-stack.pdf"), techBytes);
  console.log("✓ Generated code-and-crumbs-technology-stack.pdf");

  const caseBytes = await generateCaseStudiesPDF();
  fs.writeFileSync(path.join(outputDir, "code-and-crumbs-case-studies.pdf"), caseBytes);
  console.log("✓ Generated code-and-crumbs-case-studies.pdf");

  const processBytes = await generateEngagementProcessPDF();
  fs.writeFileSync(path.join(outputDir, "code-and-crumbs-engagement-process.pdf"), processBytes);
  console.log("✓ Generated code-and-crumbs-engagement-process.pdf");

  console.log("All 5 sales kit PDF documents successfully created!");
}

buildAllSalesKitPDFs().catch((err) => {
  console.error("PDF generation failed:", err);
  process.exit(1);
});
