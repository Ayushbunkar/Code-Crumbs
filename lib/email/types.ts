import { ProjectConfigState } from "@/types/configurator";

export interface EmailPayload {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}

export interface SendEmailResult {
  success: boolean;
  messageId?: string;
  provider: string;
  error?: string;
}

export interface EnquiryEmailContext {
  reference: string;
  timestamp: string;
  enquiry: ProjectConfigState;
}
