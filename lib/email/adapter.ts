import { EmailPayload, SendEmailResult, EnquiryEmailContext } from "./types";

/**
 * Transactional Email Dispatcher for Code&Crumbs
 * Reads environment variables at runtime with zero client-side exposure.
 */
export async function sendTransactionalEmail(payload: EmailPayload): Promise<SendEmailResult> {
  const provider = (process.env.EMAIL_PROVIDER || "console").toLowerCase();
  const apiKey = process.env.EMAIL_PROVIDER_API_KEY || "";

  // 1. Resend API Adapter
  if (provider === "resend" && apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: payload.from,
          to: payload.to,
          reply_to: payload.replyTo,
          subject: payload.subject,
          text: payload.text,
          html: payload.html,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("[Email:Resend] Delivery error response:", errorText);
        return {
          success: false,
          provider: "resend",
          error: "Failed to deliver transactional email through provider.",
        };
      }

      const data = await res.json();
      return {
        success: true,
        messageId: data.id,
        provider: "resend",
      };
    } catch (err) {
      console.error("[Email:Resend] Network exception during dispatch:", err);
      return {
        success: false,
        provider: "resend",
        error: "Network timeout or connection error during email dispatch.",
      };
    }
  }

  // 2. Postmark API Adapter
  if (provider === "postmark" && apiKey) {
    try {
      const res = await fetch("https://api.postmarkapp.com/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Postmark-Server-Token": apiKey,
        },
        body: JSON.stringify({
          From: payload.from,
          To: payload.to,
          ReplyTo: payload.replyTo,
          Subject: payload.subject,
          TextBody: payload.text,
          HtmlBody: payload.html,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("[Email:Postmark] Delivery error response:", errorText);
        return {
          success: false,
          provider: "postmark",
          error: "Failed to deliver transactional email through Postmark.",
        };
      }

      const data = await res.json();
      return {
        success: true,
        messageId: data.MessageID,
        provider: "postmark",
      };
    } catch (err) {
      console.error("[Email:Postmark] Network exception during dispatch:", err);
      return {
        success: false,
        provider: "postmark",
        error: "Network exception during Postmark dispatch.",
      };
    }
  }

  // 3. Fallback: Secure Local / Console Logger
  // Standard in local development or before production email keys are provisioned
  console.log(`\n============================================================`);
  console.log(`[TRANSACTIONAL EMAIL DISPATCH — PROVIDER: ${provider.toUpperCase()}]`);
  console.log(`TO:       ${payload.to}`);
  console.log(`FROM:     ${payload.from}`);
  console.log(`SUBJECT:  ${payload.subject}`);
  console.log(`REPLY-TO: ${payload.replyTo || "N/A"}`);
  console.log(`------------------------------------------------------------`);
  console.log(payload.text);
  console.log(`============================================================\n`);

  return {
    success: true,
    messageId: `sim-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    provider: "console-fallback",
  };
}

/**
 * Formats Agency Notification Email with Full Project Brief
 */
export function formatAgencyNotificationEmail(ctx: EnquiryEmailContext): EmailPayload {
  const { reference, timestamp, enquiry } = ctx;
  const to = process.env.CONTACT_EMAIL || "partner@codeandcrumbs.com";
  const from = process.env.CONTACT_FROM_EMAIL || "intake@codeandcrumbs.com";

  const subject = `[NEW BRIEF ${reference}] ${enquiry.companyName || enquiry.fullName} — ${enquiry.projectTypes.slice(0, 2).join(", ")}`;

  const text = `
CODE&CRUMBS — NEW PROJECT BRIEF RECEIVED
Reference: ${reference}
Timestamp: ${timestamp}

CLIENT INFORMATION:
- Full Name: ${enquiry.fullName}
- Business Email: ${enquiry.businessEmail}
- Company / Venture: ${enquiry.companyName || "Not provided"}
- Website: ${enquiry.website || "Not provided"}
- Country: ${enquiry.country}
- Phone / WhatsApp: ${enquiry.phone || "Not provided"}

PROJECT SPECIFICATIONS:
- Project Archetypes: ${enquiry.projectTypes.join(", ")}
- Problem Statement:
${enquiry.problemStatement}

- Target Users: ${enquiry.targetUsers || "Not specified"}
- Expected Outcome: ${enquiry.expectedOutcome || "Not specified"}
- Industry: ${enquiry.industry || "Not specified"}
- Current Solution: ${enquiry.currentSolution || "Not specified"}

FEATURES & ARCHITECTURE:
- Selected Features (${enquiry.features.length}): ${enquiry.features.join(", ")}
- Design Language: ${enquiry.designRequirement}
- Technologies: ${enquiry.letAgencyDecide ? "Let Code&Crumbs Decide" : enquiry.technologies.join(", ")}

COMMERCIAL PARAMETERS:
- Budget Bracket: ${enquiry.budgetRange} (${enquiry.currency})
- Target Timeline: ${enquiry.timeline}
- Privacy & NDA Consent: ${enquiry.privacyConsent ? "Agreed" : "No"}

--
Direct transmission via Code&Crumbs Intake Engine.
`.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F4F0E8; color: #171717; margin: 0; padding: 24px; }
    .card { max-width: 640px; margin: 0 auto; background: #FFFFFF; border: 1px solid #D8D1C5; padding: 32px; border-radius: 0; }
    .header { border-bottom: 2px solid #E85D35; padding-bottom: 16px; margin-bottom: 24px; }
    .kicker { font-family: monospace; font-size: 11px; text-transform: uppercase; color: #E85D35; font-weight: bold; }
    h1 { font-family: Georgia, serif; font-size: 24px; margin: 8px 0 0 0; color: #171717; }
    .meta { font-family: monospace; font-size: 12px; color: #77736B; margin-top: 4px; }
    .section-title { font-family: monospace; font-size: 11px; text-transform: uppercase; color: #E85D35; font-weight: bold; margin-top: 24px; margin-bottom: 8px; border-bottom: 1px solid #D8D1C5; padding-bottom: 4px; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 16px; }
    th { text-align: left; padding: 6px 8px; font-family: monospace; font-size: 11px; text-transform: uppercase; color: #77736B; width: 35%; }
    td { padding: 6px 8px; color: #171717; }
    .quote-box { background: #F4F0E8; border-left: 3px solid #E85D35; padding: 12px; font-style: italic; font-size: 13px; margin: 12px 0; }
    .badge { display: inline-block; background: #F4F0E8; border: 1px solid #D8D1C5; padding: 2px 6px; font-family: monospace; font-size: 11px; margin: 2px; }
    .footer { border-top: 1px solid #D8D1C5; margin-top: 32px; padding-top: 16px; font-family: monospace; font-size: 11px; color: #77736B; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <span class="kicker">Code&Crumbs Intake System</span>
      <h1>New Project Brief Transmitted</h1>
      <div class="meta">Reference: <strong>${reference}</strong> • ${timestamp}</div>
    </div>

    <div class="section-title">01 / Client Identification</div>
    <table>
      <tr><th>Full Name</th><td><strong>${enquiry.fullName}</strong></td></tr>
      <tr><th>Business Email</th><td><a href="mailto:${enquiry.businessEmail}" style="color: #E85D35;">${enquiry.businessEmail}</a></td></tr>
      <tr><th>Company / Venture</th><td>${enquiry.companyName || "Not provided"}</td></tr>
      <tr><th>Existing Website</th><td>${enquiry.website ? `<a href="${enquiry.website}">${enquiry.website}</a>` : "Not provided"}</td></tr>
      <tr><th>Country / Region</th><td>${enquiry.country}</td></tr>
      <tr><th>Phone / WhatsApp</th><td>${enquiry.phone || "Not provided"}</td></tr>
    </table>

    <div class="section-title">02 / Project Problem & Objective</div>
    <div><strong>Selected Archetypes:</strong> ${enquiry.projectTypes.map(t => `<span class="badge">${t}</span>`).join(" ")}</div>
    <div class="quote-box">"${enquiry.problemStatement}"</div>
    <table>
      <tr><th>Target Users</th><td>${enquiry.targetUsers || "Not specified"}</td></tr>
      <tr><th>Expected Outcome</th><td>${enquiry.expectedOutcome || "Not specified"}</td></tr>
      <tr><th>Industry</th><td>${enquiry.industry || "Not specified"}</td></tr>
      <tr><th>Current Solution</th><td>${enquiry.currentSolution || "None / Manual"}</td></tr>
    </table>

    <div class="section-title">03 / Features & Architecture</div>
    <div><strong>Required Features:</strong></div>
    <div style="margin: 8px 0;">
      ${enquiry.features.map(f => `<span class="badge">${f}</span>`).join(" ")}
    </div>
    <table>
      <tr><th>Design Requirement</th><td><strong>${enquiry.designRequirement}</strong></td></tr>
      <tr><th>Tech Preference</th><td>${enquiry.letAgencyDecide ? "Let Code&Crumbs Decide" : enquiry.technologies.join(", ")}</td></tr>
    </table>

    <div class="section-title">04 / Investment & Velocity</div>
    <table>
      <tr><th>Budget Bracket</th><td><strong style="color: #E85D35; font-size: 15px;">${enquiry.budgetRange}</strong> (${enquiry.currency})</td></tr>
      <tr><th>Target Timeline</th><td><strong>${enquiry.timeline}</strong></td></tr>
      <tr><th>Mutual NDA</th><td>${enquiry.privacyConsent ? "Agreed & Executed" : "Pending"}</td></tr>
    </table>

    <div class="footer">
      CONFIDENTIAL COMMERCIAL SPECIFICATION • CODE&CRUMBS AGENCY LTD
    </div>
  </div>
</body>
</html>
`.trim();

  return { to, from, replyTo: enquiry.businessEmail, subject, text, html };
}

/**
 * Formats Professional Client Confirmation Autoresponder
 */
export function formatClientConfirmationEmail(ctx: EnquiryEmailContext): EmailPayload {
  const { reference, enquiry } = ctx;
  const to = enquiry.businessEmail;
  const from = process.env.CONTACT_FROM_EMAIL || "partner@codeandcrumbs.com";
  const partnerEmail = process.env.CONTACT_EMAIL || "partner@codeandcrumbs.com";

  const subject = `Your Project Brief has been received [${reference}] — Code&Crumbs`;

  const text = `
Dear ${enquiry.fullName},

Thank you for transmitting your project specifications to Code&Crumbs.

Your unique enquiry reference is: ${reference}

Our software architects and technical partners are reviewing your requirements for ${enquiry.companyName || "your venture"}. Under our standard Service Level Agreement (SLA), a partner will contact you directly within 24 business hours to discuss technical feasibility and recommend the right delivery approach.

Summary of submitted parameters:
- Target Archetypes: ${enquiry.projectTypes.join(", ")}
- Target Delivery Timeline: ${enquiry.timeline}
- Investment Bracket: ${enquiry.budgetRange} (${enquiry.currency})
- Confidentiality: Protected under strict mutual NDA.

If you have supplementary architecture documents, RFPs, or design assets to share, you may reply directly to this email or send them to ${partnerEmail}.

Best regards,
The Partners
Code&Crumbs Software Engineering
https://codeandcrumbs.com
`.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F4F0E8; color: #171717; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #D8D1C5; padding: 36px; }
    .header { border-bottom: 2px solid #E85D35; padding-bottom: 16px; margin-bottom: 24px; }
    .kicker { font-family: monospace; font-size: 11px; text-transform: uppercase; color: #E85D35; font-weight: bold; }
    h1 { font-family: Georgia, serif; font-size: 24px; margin: 8px 0 0 0; color: #171717; }
    .reference-box { background: #F4F0E8; border: 1px solid #D8D1C5; padding: 16px; text-align: center; margin: 24px 0; font-family: monospace; }
    .reference-code { font-size: 20px; font-weight: bold; color: #171717; letter-spacing: 1px; }
    p { font-size: 14px; line-height: 1.6; color: #171717; }
    .sla { background: #FFF8F5; border-left: 3px solid #E85D35; padding: 12px; font-size: 13px; margin: 20px 0; }
    .footer { border-top: 1px solid #D8D1C5; margin-top: 32px; padding-top: 16px; font-family: monospace; font-size: 11px; color: #77736B; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <span class="kicker">Code&Crumbs Technical Partners</span>
      <h1>Project Brief Transmitted</h1>
    </div>

    <p>Dear ${enquiry.fullName},</p>

    <p>Thank you for submitting your project specifications to <strong>Code&Crumbs</strong>. We have logged your requirements for <strong>${enquiry.companyName || "your venture"}</strong> into our partner review queue.</p>

    <div class="reference-box">
      <div style="font-size: 10px; text-transform: uppercase; color: #77736B; margin-bottom: 4px;">Unique Enquiry Reference</div>
      <div class="reference-code">${reference}</div>
    </div>

    <div class="sla">
      <strong>Turnaround Guarantee:</strong> A technical partner will review your brief and respond with architectural recommendations within <strong>24 business hours</strong>.
    </div>

    <p>All shared details and intellectual property are protected under strict mutual confidentiality.</p>

    <p>If you have supplementary RFP documents, technical specs, or Figma links to share, you may reply directly to this email.</p>

    <p style="margin-top: 24px;">
      Warm regards,<br>
      <strong>The Technical Partners</strong><br>
      <span style="font-family: monospace; font-size: 12px; color: #77736B;">Code&Crumbs Software Engineering</span>
    </p>

    <div class="footer">
      CODE&CRUMBS • DIGITAL AGENCY & PRODUCT ENGINEERING PRACTICE<br>
      <a href="https://codeandcrumbs.com" style="color: #E85D35;">https://codeandcrumbs.com</a>
    </div>
  </div>
</body>
</html>
`.trim();

  return { to, from, replyTo: partnerEmail, subject, text, html };
}
