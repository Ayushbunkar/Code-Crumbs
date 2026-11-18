import fs from "fs";
import path from "path";
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");
const PROPOSALS_DIR = path.join(process.cwd(), "docs", "internal", "proposals");

if (!fs.existsSync(PROPOSALS_DIR)) {
  fs.mkdirSync(PROPOSALS_DIR, { recursive: true });
}

function getTargetLead(targetRef) {
  if (!fs.existsSync(LEADS_FILE)) {
    return null;
  }
  const content = fs.readFileSync(LEADS_FILE, "utf8");
  const leads = JSON.parse(content);
  if (!Array.isArray(leads) || leads.length === 0) return null;

  if (targetRef) {
    const found = leads.find((l) => l.reference === targetRef);
    if (found) return found;
  }
  return leads[0]; // latest lead
}

async function generateTailoredProposal(leadRecord) {
  const ref = leadRecord ? leadRecord.reference : `CC-2025-SAMPLE`;
  const enq = leadRecord ? leadRecord.enquiry : {
    fullName: "Elena Vance",
    companyName: "Vance Bio Labs",
    businessEmail: "elena@vancebio.internal",
    projectTypes: ["SaaS product", "ERP / CRM"],
    problemStatement: "Need an enterprise multi-warehouse allocation matrix.",
    features: ["User authentication", "Admin dashboard", "Database and APIs"],
    designRequirement: "Premium editorial design",
    technologies: ["React / Next.js", "Python / FastAPI"],
    budgetRange: "$50,000–$1,00,000",
    currency: "USD",
    timeline: "1–2 months",
  };

  console.log(`Generating tailored proposal for: ${enq.companyName || enq.fullName} [${ref}]...`);

  // 1. Generate Custom DOCX
  const docx = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: "CODE&CRUMBS SOFTWARE ENGINEERING",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `COMMERCIAL PROPOSAL: ${enq.companyName ? enq.companyName.toUpperCase() : "CLIENT ENGAGEMENT"}`,
                bold: true,
                size: 28,
                color: "E85D35",
              }),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            text: `Enquiry Reference: ${ref} • Date: ${new Date().toISOString().split("T")[0]}`,
            spacing: { after: 300 },
          }),
          new Paragraph({
            text: "1. CLIENT INFORMATION",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Client: ", bold: true }),
              new TextRun(`${enq.fullName} (${enq.companyName || "Organization"})\n`),
              new TextRun({ text: "Email: ", bold: true }),
              new TextRun(`${enq.businessEmail}\n`),
              new TextRun({ text: "Scope Archetypes: ", bold: true }),
              new TextRun(`${enq.projectTypes.join(", ")}\n`),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            text: "2. PROBLEM & SYSTEM ARCHITECTURE",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 },
          }),
          new Paragraph({
            text: enq.problemStatement,
            spacing: { after: 200 },
          }),
          new Paragraph({
            text: "3. DELIVERABLES & FEATURES",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 },
          }),
          new Paragraph({
            children: enq.features.map((f) => new TextRun(`• ${f}\n`)),
            spacing: { after: 200 },
          }),
          new Paragraph({
            text: "4. COMMERCIAL ESTIMATE & TIMELINE",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Target Timeline: ", bold: true }),
              new TextRun(`${enq.timeline}\n`),
              new TextRun({ text: "Budget Framework: ", bold: true }),
              new TextRun(`${enq.budgetRange} (${enq.currency || "USD"})\n`),
              new TextRun("• Milestone 1: 35% mobilization upon SOW execution\n"),
              new TextRun("• Milestone 2: 35% functional staging review\n"),
              new TextRun("• Milestone 3: 30% production deployment & 100% IP transfer\n"),
            ],
            spacing: { after: 200 },
          }),
        ],
      },
    ],
  });

  const docxBuffer = await Packer.toBuffer(docx);
  const docxFile = path.join(PROPOSALS_DIR, `${ref}-tailored-proposal.docx`);
  fs.writeFileSync(docxFile, docxBuffer);
  console.log(`✓ Generated DOCX proposal: ${docxFile}`);

  // 2. Generate Custom PDF
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontSerif = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

  const page = pdfDoc.addPage([595.28, 841.89]);
  const margin = 48;
  const COLOR_CHARCOAL = rgb(0.09, 0.09, 0.09);
  const COLOR_BURNT = rgb(0.91, 0.36, 0.21);
  const COLOR_SAND = rgb(0.96, 0.94, 0.91);
  const COLOR_MUTED = rgb(0.47, 0.45, 0.42);
  const COLOR_BORDER = rgb(0.85, 0.82, 0.77);
  const COLOR_WHITE = rgb(1, 1, 1);

  page.drawRectangle({ x: 0, y: 0, width: 595.28, height: 841.89, color: COLOR_SAND });
  page.drawRectangle({ x: 24, y: 24, width: 595.28 - 48, height: 841.89 - 48, color: COLOR_WHITE, borderColor: COLOR_BORDER, borderWidth: 1 });

  let y = 780;
  page.drawText("CODE&CRUMBS SOFTWARE ENGINEERING", { x: margin, y, size: 8.5, font: fontBold, color: COLOR_BURNT });
  y -= 20;
  page.drawText(`Tailored Proposal: ${enq.companyName || enq.fullName}`, { x: margin, y, size: 18, font: fontSerif, color: COLOR_CHARCOAL });
  y -= 16;
  page.drawText(`Enquiry Reference: ${ref}  •  Protected Under Mutual NDA`, { x: margin, y, size: 8, font: fontRegular, color: COLOR_MUTED });
  page.drawLine({ start: { x: margin, y: y - 10 }, end: { x: 595.28 - margin, y: y - 10 }, thickness: 1, color: COLOR_BORDER });
  y -= 30;

  page.drawText("CLIENT & PROJECT SPECIFICATION", { x: margin, y, size: 8.5, font: fontBold, color: COLOR_BURNT });
  y -= 14;
  page.drawText(`Client: ${enq.fullName} (${enq.businessEmail})   •   Timeline: ${enq.timeline}`, { x: margin, y, size: 8.5, font: fontRegular, color: COLOR_CHARCOAL });
  y -= 12;
  page.drawText(`Investment Bracket: ${enq.budgetRange} (${enq.currency || "USD"})   •   Archetypes: ${enq.projectTypes.join(", ")}`, { x: margin, y, size: 8.5, font: fontRegular, color: COLOR_CHARCOAL });
  y -= 25;

  page.drawText("TECHNICAL BLUEPRINT & DELIVERABLES", { x: margin, y, size: 8.5, font: fontBold, color: COLOR_BURNT });
  y -= 14;
  enq.features.slice(0, 6).forEach((f) => {
    page.drawText(`• ${f}`, { x: margin, y, size: 8, font: fontRegular, color: COLOR_CHARCOAL });
    y -= 13;
  });
  y -= 15;

  page.drawText("COMMERCIAL TERMS & IP GOVERNANCE", { x: margin, y, size: 8.5, font: fontBold, color: COLOR_BURNT });
  y -= 14;
  page.drawText("• Milestone Terms: 35% mobilization, 35% staging review, 30% production launch.", { x: margin, y, size: 8, font: fontRegular, color: COLOR_CHARCOAL });
  y -= 12;
  page.drawText("• Intellectual Property: 100% full transfer of repositories, runbooks, and tokens upon final release.", { x: margin, y, size: 8, font: fontRegular, color: COLOR_CHARCOAL });
  y -= 12;
  page.drawText("• Warranty: 30 calendar days of post-launch engineering support included at zero cost.", { x: margin, y, size: 8, font: fontRegular, color: COLOR_CHARCOAL });

  const pdfBytes = await pdfDoc.save();
  const pdfFile = path.join(PROPOSALS_DIR, `${ref}-tailored-proposal.pdf`);
  fs.writeFileSync(pdfFile, pdfBytes);
  console.log(`✓ Generated PDF proposal: ${pdfFile}`);
}

const targetRef = process.argv[2] || null;
const lead = getTargetLead(targetRef);
generateTailoredProposal(lead).catch((err) => {
  console.error(err);
  process.exit(1);
});
