import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { ProjectConfigState } from "@/types/configurator";
import {
  sendTransactionalEmail,
  formatAgencyNotificationEmail,
  formatClientConfirmationEmail,
} from "@/lib/email/adapter";

// In-Memory Token Bucket Rate Limiter
// Limits each client IP to 5 requests per 10-minute rolling window
const ipRateLimits = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 5;

  const current = ipRateLimits.get(ip);

  if (!current || now > current.resetAt) {
    ipRateLimits.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (current.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  current.count += 1;
  return { allowed: true, remaining: maxRequests - current.count };
}

export async function POST(request: Request) {
  try {
    // 01. Client IP Extraction & Rate Limiting Check
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    const { allowed } = checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many submission attempts. Please wait 10 minutes before submitting another brief." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const data: ProjectConfigState & { bot_field?: string; timestamp_ms?: number } = body;

    // 02. Honeypot & Bot Detection
    // If hidden honeypot field is filled by an automated scraper, reject silently
    if (data.bot_field && data.bot_field.trim().length > 0) {
      console.warn(`[Security:BotTrap] Spam bot trapped from IP: ${ip}`);
      return NextResponse.json({ success: true, reference: "CC-SUB-OK" });
    }

    // 03. Server-Side Input Validation
    if (!data.fullName || typeof data.fullName !== "string" || data.fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "A valid full name (minimum 2 characters) is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.businessEmail || typeof data.businessEmail !== "string" || !emailRegex.test(data.businessEmail)) {
      return NextResponse.json(
        { error: "A valid corporate or business email address is required." },
        { status: 400 }
      );
    }

    if (!data.projectTypes || !Array.isArray(data.projectTypes) || data.projectTypes.length === 0) {
      return NextResponse.json(
        { error: "Please select at least one target project archetype." },
        { status: 400 }
      );
    }

    // Sanitize string inputs against injection
    const sanitizedName = data.fullName.replace(/[<>]/g, "").trim().slice(0, 100);
    const sanitizedEmail = data.businessEmail.trim().slice(0, 120);
    const sanitizedCompany = data.companyName ? data.companyName.replace(/[<>]/g, "").trim().slice(0, 100) : "";
    const sanitizedProblem = data.problemStatement ? data.problemStatement.replace(/[<>]/g, "").trim().slice(0, 5000) : "";

    const cleanData: ProjectConfigState = {
      ...data,
      fullName: sanitizedName,
      businessEmail: sanitizedEmail,
      companyName: sanitizedCompany,
      problemStatement: sanitizedProblem,
    };

    // 04. Unique Reference Code Generation
    const uniqueHash = Math.random().toString(36).substring(2, 7).toUpperCase();
    const reference = `CC-${new Date().getFullYear()}-${uniqueHash}`;
    const timestamp = new Date().toISOString();

    const record = {
      reference,
      timestamp,
      enquiry: cleanData,
    };

    // 05. Secure Persistence
    const leadsFilePath = path.join(process.cwd(), "data", "leads.json");
    let existingLeads = [];

    try {
      if (fs.existsSync(leadsFilePath)) {
        const fileContent = fs.readFileSync(leadsFilePath, "utf8");
        existingLeads = JSON.parse(fileContent);
      }
    } catch {
      existingLeads = [];
    }

    existingLeads.unshift(record);

    try {
      fs.writeFileSync(leadsFilePath, JSON.stringify(existingLeads, null, 2), "utf8");
    } catch (fsErr) {
      console.warn("Could not write leads file (read-only environment):", fsErr);
    }

    // 06. Transactional Email Dispatch (Dual Notifications)
    try {
      const agencyPayload = formatAgencyNotificationEmail({ reference, timestamp, enquiry: cleanData });
      await sendTransactionalEmail(agencyPayload);

      const clientPayload = formatClientConfirmationEmail({ reference, timestamp, enquiry: cleanData });
      await sendTransactionalEmail(clientPayload);
    } catch (emailErr) {
      console.error("[EmailDispatch:NonFatal]", emailErr);
    }

    return NextResponse.json({
      success: true,
      reference,
      timestamp,
      message: "Project brief successfully logged and routed to agency partners.",
    });
  } catch (error) {
    console.error("Enquiry processing error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while transmitting your project brief." },
      { status: 500 }
    );
  }
}
