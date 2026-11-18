export interface FAQItem {
  question: string;
  answer: string;
  category: "Engagements" | "Technical" | "Process" | "Commercial";
}

export const faqsData: FAQItem[] = [
  {
    category: "Engagements",
    question: "How does Code&Crumbs structure client engagements?",
    answer:
      "We operate primarily on dedicated engineering sprints or fixed-scope architectural deliverables. Typically, an engagement spans 4 to 12 weeks with dedicated senior architects, guaranteeing focused momentum without divided attention.",
  },
  {
    category: "Technical",
    question: "Why do you specialize in Next.js App Router and React Three Fiber?",
    answer:
      "Next.js App Router delivers the optimal combination of server-side performance, instant edge delivery, and SEO visibility. Pairing it with React Three Fiber allows us to embed tactile, interactive 3D elements natively without the overhead of heavy external runtime engines.",
  },
  {
    category: "Process",
    question: "Do you design from scratch or work with existing brand guidelines?",
    answer:
      "Both. We frequently translate existing brand identities and Figma systems into production code, or we originate full Swiss-inspired editorial design systems and design tokens from the ground up.",
  },
  {
    category: "Technical",
    question: "How do you ensure 3D elements don't degrade mobile performance?",
    answer:
      "We apply strict asset budget constraints, progressive shader tiering, offscreen render pauses when elements are outside the viewport, and hardware detection that gracefully scales geometry resolution.",
  },
  {
    category: "Commercial",
    question: "What is your typical project kickoff timeline?",
    answer:
      "We maintain a selective engagement pipeline, limiting concurrent projects to preserve executive engineering attention. Kickoffs are typically scheduled 2 to 4 weeks following contract execution and discovery alignment.",
  },
];
