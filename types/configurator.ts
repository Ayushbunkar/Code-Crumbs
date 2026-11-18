export interface ProjectConfigState {
  // Step 1: What to build
  projectTypes: string[];

  // Step 2: Problem statement
  problemStatement: string;
  targetUsers: string;
  expectedOutcome: string;
  industry: string;
  currentSolution: string;

  // Step 3: Features
  features: string[];

  // Step 4: Design requirements
  designRequirement: string;

  // Step 5: Technology preferences (Optional)
  technologies: string[];
  letAgencyDecide: boolean;

  // Step 6: Budget
  currency: "INR" | "USD";
  budgetRange: string;

  // Step 7: Timeline
  timeline: string;

  // Step 8: Contact information
  fullName: string;
  businessEmail: string;
  companyName: string;
  website: string;
  country: string;
  phone: string;

  // Step 9: Consent
  privacyConsent: boolean;
}

export interface SubmissionResult {
  reference: string;
  timestamp: string;
  enquiry: ProjectConfigState;
}
