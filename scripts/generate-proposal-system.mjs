import fs from "fs";
import path from "path";
import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel, AlignmentType, BorderStyle, WidthType } from "docx";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

const OUTPUT_DIR = path.join(process.cwd(), "docs", "internal", "proposals");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// =========================================================================
// 1. GENERATE EDITABLE DOCX PROPOSAL TEMPLATE
// =========================================================================
async function generateDocxTemplate() {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Header / Title
          new Paragraph({
            text: "CODE&CRUMBS SOFTWARE ENGINEERING",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "COMMERCIAL STATEMENT OF WORK & PROPOSAL",
                bold: true,
                size: 32, // 16pt
                color: "E85D35",
              }),
            ],
            spacing: { after: 240 },
          }),
          new Paragraph({
            text: "Document Reference: CC-PROP-2025-001 • Strictly Confidential & Proprietary",
            spacing: { after: 360 },
          }),

          // 1. Client Details
          new Paragraph({
            text: "1. CLIENT & ENGAGEMENT METADATA",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 240, after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Client Organization: ", bold: true }),
              new TextRun("Vance Bio Labs / Enterprise Systems\n"),
              new TextRun({ text: "Primary Stakeholder: ", bold: true }),
              new TextRun("Dr. Elena Vance, VP of Engineering (elena@vancebio.internal)\n"),
              new TextRun({ text: "Engagement Type: ", bold: true }),
              new TextRun("Full-Stack Enterprise Architecture & Web Flagship\n"),
              new TextRun({ text: "Proposal Validity: ", bold: true }),
              new TextRun("30 Calendar Days from Transmission"),
            ],
            spacing: { after: 240 },
          }),

          // 2. Project Scope
          new Paragraph({
            text: "2. PROJECT SCOPE & OBJECTIVES",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 240, after: 120 },
          }),
          new Paragraph({
            text: "Code&Crumbs will design and engineer a production-grade enterprise application comprising high-density tabular matrix views, real-time telemetry streaming, and automated role-based access controls. The solution will replace legacy spreadsheet pipelines with an event-driven Next.js App Router and PostgreSQL architecture.",
            spacing: { after: 240 },
          }),

          // 3. Features & Deliverables
          new Paragraph({
            text: "3. FEATURES & DELIVERABLES",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 240, after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun("• Interactive Telemetry Dashboard: Virtualized tables rendering 50,000+ SKU rows at 60 FPS.\n"),
              new TextRun("• Authentication & RBAC: Multi-role permissions for Admin, Operations, and Finance heads.\n"),
              new TextRun("• Automated Invoicing & Three-Way Reconciliation: Zero-drift ledger entries.\n"),
              new TextRun("• Design System: Custom tokens, Swiss typography, tactile light/dark modes.\n"),
              new TextRun("• Complete IP & Code Transfer: Full Git repository ownership, Docker runbooks, and CI/CD pipelines."),
            ],
            spacing: { after: 240 },
          }),

          // 4. Out-of-Scope Items
          new Paragraph({
            text: "4. OUT-OF-SCOPE ITEMS",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 240, after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun("• Native iOS/Android app store packaging (unless separately contracted under Mobile SOW).\n"),
              new TextRun("• Legacy database data migration exceeding 10M records without prior ETL indexing.\n"),
              new TextRun("• Ongoing third-party vendor subscription or cloud hosting infrastructure costs (AWS/Vercel fees billed to client)."),
            ],
            spacing: { after: 240 },
          }),

          // 5. Technology Stack
          new Paragraph({
            text: "5. VERIFIED TECHNOLOGY STACK",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 240, after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun("• Frontend: Next.js 15 (App Router), React 19, TypeScript (Strict), Tailwind CSS, TanStack Virtual\n"),
              new TextRun("• Backend: Python (FastAPI) & Node.js, PostgreSQL, Redis Distributed Mutex Locks\n"),
              new TextRun("• Infrastructure: Docker, AWS ECS / Vercel Edge, GitHub Actions CI/CD"),
            ],
            spacing: { after: 240 },
          }),

          // 6. Milestones & Estimated Duration
          new Paragraph({
            text: "6. MILESTONES & DELIVERY SCHEDULE (8 WEEKS TOTAL)",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 240, after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun("• Stage 1 (Weeks 1–2): Architecture blueprint, schema contracts, database migration plan.\n"),
              new TextRun("• Stage 2 (Weeks 3–5): Core platform sprints, data matrix, authentication, staging deployment.\n"),
              new TextRun("• Stage 3 (Weeks 6–7): Third-party integrations, stress testing, Lighthouse 98+ audit.\n"),
              new TextRun("• Stage 4 (Week 8): Production deployment, zero-downtime cutover, 100% IP transfer."),
            ],
            spacing: { after: 240 },
          }),

          // 7. Pricing & Payment Milestones
          new Paragraph({
            text: "7. COMMERCIAL PRICING & PAYMENT MILESTONES",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 240, after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Total Fixed Investment: ", bold: true }),
              new TextRun("$48,000 USD (or equivalent INR rate locked upon execution)\n"),
              new TextRun("• Milestone 1 (Mobilization Deposit): 35% ($16,800) due upon SOW signature.\n"),
              new TextRun("• Milestone 2 (Staging Review Delivery): 35% ($16,800) due upon delivery of functional Stage 2 staging environment.\n"),
              new TextRun("• Milestone 3 (Production Launch & Handover): 30% ($14,400) due upon production cutover and code transfer."),
            ],
            spacing: { after: 240 },
          }),

          // 8. Revision Policy & Maintenance Terms
          new Paragraph({
            text: "8. REVISION POLICY & MAINTENANCE WARRANTY",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 240, after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun("• Revisions: Two rounds of structural layout revisions are included in Stage 2 before frontend locking.\n"),
              new TextRun("• 30-Day Engineering Warranty: Full resolution of any bugs or regressions matching specifications included at zero additional cost.\n"),
              new TextRun("• Ongoing Velocity Retainer: Optional quarterly retainers available at $4,500/mo (Advisory) or $14,000/mo (Embedded Sprint Team)."),
            ],
            spacing: { after: 240 },
          }),

          // 9. Acceptance & Signatures
          new Paragraph({
            text: "9. ACCEPTANCE & SIGNATURES",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 240, after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun("CLIENT ACCEPTANCE:\n"),
              new TextRun("Authorized Signature: _______________________      Date: _______________\n"),
              new TextRun("Printed Name: ______________________________      Title: ______________\n\n"),
              new TextRun("CODE&CRUMBS ACCEPTANCE:\n"),
              new TextRun("Partner Signature: _________________________      Date: _______________\n"),
              new TextRun("Printed Name: Principal Software Architect        Title: Managing Partner\n"),
            ],
            spacing: { after: 240 },
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const docxPath = path.join(OUTPUT_DIR, "code-and-crumbs-proposal-template.docx");
  fs.writeFileSync(docxPath, buffer);
  console.log("✓ Generated editable DOCX proposal template:", docxPath);
}

// =========================================================================
// 2. GENERATE PRINT-READY PDF PROPOSAL TEMPLATE
// =========================================================================
async function generatePdfTemplate() {
  const doc = await PDFDocument.create();
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontSerif = await doc.embedFont(StandardFonts.TimesRomanBold);

  const COLOR_CHARCOAL = rgb(0.09, 0.09, 0.09);
  const COLOR_BURNT = rgb(0.91, 0.36, 0.21);
  const COLOR_SAND = rgb(0.96, 0.94, 0.91);
  const COLOR_MUTED = rgb(0.47, 0.45, 0.42);
  const COLOR_BORDER = rgb(0.85, 0.82, 0.77);
  const COLOR_WHITE = rgb(1, 1, 1);

  // Page 1
  const page1 = doc.addPage([595.28, 841.89]);
  const margin = 48;
  page1.drawRectangle({ x: 0, y: 0, width: 595.28, height: 841.89, color: COLOR_SAND });
  page1.drawRectangle({ x: 24, y: 24, width: 595.28 - 48, height: 841.89 - 48, color: COLOR_WHITE, borderColor: COLOR_BORDER, borderWidth: 1 });

  let y = 780;
  page1.drawText("CODE&CRUMBS SOFTWARE ENGINEERING", { x: margin, y, size: 9, font: fontBold, color: COLOR_BURNT });
  y -= 22;
  page1.drawText("Statement of Work & Commercial Proposal", { x: margin, y, size: 20, font: fontSerif, color: COLOR_CHARCOAL });
  y -= 16;
  page1.drawText("Confidential Proposal Reference: CC-PROP-2025-001  •  Strict Mutual NDA Protected", { x: margin, y, size: 8, font: fontRegular, color: COLOR_MUTED });
  page1.drawLine({ start: { x: margin, y: y - 10 }, end: { x: 595.28 - margin, y: y - 10 }, thickness: 1, color: COLOR_BORDER });
  y -= 30;

  // Client Details Box
  page1.drawRectangle({ x: margin, y: y - 56, width: 595.28 - margin * 2, height: 56, color: COLOR_SAND, borderColor: COLOR_BORDER, borderWidth: 0.5 });
  page1.drawText("CLIENT IDENTIFICATION & TIMING", { x: margin + 12, y: y - 16, size: 8, font: fontBold, color: COLOR_BURNT });
  page1.drawText("Client Entity: Vance Bio Labs / Enterprise Systems   •   Stakeholder: Dr. Elena Vance (VP Eng)", { x: margin + 12, y: y - 30, size: 8, font: fontRegular, color: COLOR_CHARCOAL });
  page1.drawText("Engagement: Full-Stack Architecture Sprint (8 Weeks)   •   Validity: 30 Calendar Days", { x: margin + 12, y: y - 44, size: 8, font: fontRegular, color: COLOR_MUTED });
  y -= 80;

  // Section 1: Scope
  page1.drawText("01. PROJECT SCOPE & ARCHITECTURE", { x: margin, y, size: 9, font: fontBold, color: COLOR_BURNT });
  y -= 14;
  page1.drawText("Code&Crumbs will engineer an enterprise operational matrix platform with real-time telemetry streaming,", { x: margin, y, size: 8.5, font: fontRegular, color: COLOR_CHARCOAL });
  y -= 12;
  page1.drawText("sub-16ms tabular virtualization for 50,000+ line items, and automated three-way invoice reconciliation.", { x: margin, y, size: 8.5, font: fontRegular, color: COLOR_CHARCOAL });
  y -= 26;

  // Section 2: Deliverables & Tech Stack
  page1.drawText("02. DELIVERABLES & VERIFIED TECHNOLOGY STACK", { x: margin, y, size: 9, font: fontBold, color: COLOR_BURNT });
  y -= 14;
  const items = [
    "• High-Density Virtualized Telemetry Dashboard (Next.js 15, React 19, TypeScript, TanStack Virtual)",
    "• Event-Driven Backend Microservices & Mutex Locking (Python FastAPI, Node.js, Redis, PostgreSQL)",
    "• Role-Based Access Controls (RBAC) & Cryptographic Audit Trails for Operations and Controllers",
    "• Complete Intellectual Property Transfer with Git Repositories, Docker Runbooks, and CI/CD Gates",
  ];
  items.forEach((item) => {
    page1.drawText(item, { x: margin, y, size: 8, font: fontRegular, color: COLOR_CHARCOAL });
    y -= 13;
  });
  y -= 15;

  // Section 3: Commercial Investment & Milestones
  page1.drawText("03. COMMERCIAL INVESTMENT & PAYMENT MILESTONES", { x: margin, y, size: 9, font: fontBold, color: COLOR_BURNT });
  y -= 14;
  page1.drawText("Fixed Scope Project Total: $48,000 USD (Net 15 Milestone Terms)", { x: margin, y, size: 9.5, font: fontBold, color: COLOR_CHARCOAL });
  y -= 16;
  const milestones = [
    "• Milestone 01 (Mobilization Deposit): 35% ($16,800) due upon SOW signature & discovery launch",
    "• Milestone 02 (Functional Staging Review): 35% ($16,800) due upon Stage 2 deployment sign-off",
    "• Milestone 03 (Production Cutover & IP Handover): 30% ($14,400) due upon final acceptance",
  ];
  milestones.forEach((m) => {
    page1.drawText(m, { x: margin, y, size: 8, font: fontRegular, color: COLOR_MUTED });
    y -= 13;
  });
  y -= 18;

  // Section 4: Warranty & Out of Scope
  page1.drawText("04. WARRANTY, REVISIONS & GOVERNANCE", { x: margin, y, size: 9, font: fontBold, color: COLOR_BURNT });
  y -= 14;
  page1.drawText("• Revision Policy: Two complete review rounds included in Stage 2 prior to frontend code locking.", { x: margin, y, size: 8, font: fontRegular, color: COLOR_CHARCOAL });
  y -= 12;
  page1.drawText("• 30-Day Engineering Warranty: Direct bug resolution matching specification included at zero cost.", { x: margin, y, size: 8, font: fontRegular, color: COLOR_CHARCOAL });
  y -= 12;
  page1.drawText("• Out-of-Scope: Third-party cloud infrastructure (AWS/Vercel) billed directly to client account.", { x: margin, y, size: 8, font: fontRegular, color: COLOR_MUTED });
  y -= 30;

  // Signatures Box
  page1.drawRectangle({ x: margin, y: y - 90, width: 595.28 - margin * 2, height: 90, color: COLOR_SAND, borderColor: COLOR_BORDER, borderWidth: 0.5 });
  page1.drawText("05. FORMAL ACCEPTANCE & AUTHORIZED SIGNATURES", { x: margin + 12, y: y - 16, size: 8, font: fontBold, color: COLOR_BURNT });
  page1.drawText("Client Authorized Signature: _______________________      Date: ______________", { x: margin + 12, y: y - 38, size: 8, font: fontRegular, color: COLOR_CHARCOAL });
  page1.drawText("Code&Crumbs Partner Signature: ____________________      Date: ______________", { x: margin + 12, y: y - 62, size: 8, font: fontRegular, color: COLOR_CHARCOAL });
  page1.drawText("By executing this document, both parties bind to the terms and mutual confidentiality covenants.", { x: margin + 12, y: y - 80, size: 7, font: fontRegular, color: COLOR_MUTED });

  const pdfBytes = await doc.save();
  const pdfPath = path.join(OUTPUT_DIR, "code-and-crumbs-proposal-template.pdf");
  fs.writeFileSync(pdfPath, pdfBytes);
  console.log("✓ Generated print-ready PDF proposal template:", pdfPath);
}

async function run() {
  await generateDocxTemplate();
  await generatePdfTemplate();
  console.log("Internal proposal system generation completed successfully!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
