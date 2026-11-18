/**
 * CODE&CRUMBS DESIGN SYSTEM & BRAND SPECIFICATION
 * International Creative Software & Technology Agency
 */

export const brandTokens = {
  identity: {
    name: "Code&Crumbs",
    descriptor: "Creative Software & Technology Agency",
    ethos: "Editorial minimalism, Swiss-inspired grid layouts, and high-conviction engineering.",
    founded: "2024",
  },
  colors: {
    sand: {
      value: "#F4F0E8",
      role: "Global application background. Warm, tactile, non-sterile off-white.",
    },
    surface: {
      value: "#FFFFFF",
      role: "Elevated surfaces, card backgrounds, and data displays.",
    },
    charcoal: {
      value: "#171717",
      role: "Primary typography, headers, dark sections, and high-contrast footers.",
    },
    muted: {
      value: "#77736B",
      role: "Secondary editorial copy, subtitles, metadata, and timestamps.",
    },
    burntOrange: {
      value: "#E85D35",
      role: "Sole vibrant accent. Interactive elements, primary actions, and brand ampersand.",
    },
    border: {
      value: "#D8D1C5",
      role: "Fine architectural grid boundaries and card framing.",
    },
  },
  typography: {
    sans: {
      family: "Plus Jakarta Sans, sans-serif",
      role: "Precision UI, body prose, technical specifications, and navigational labels.",
      weights: "400 (Regular), 500 (Medium), 600 (Semi-bold), 800 (Extra-bold)",
    },
    serif: {
      family: "Playfair Display, Georgia, serif",
      role: "Editorial headlines, high-conviction value propositions, and agency manifesto.",
      weights: "400 (Italic), 500 (Medium), 600 (Bold)",
    },
    mono: {
      family: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      role: "System badges, version tags, technical metrics, and coordinates.",
    },
  },
  spacingGrid: {
    baseline: "4px / 8px incremental scale",
    containerMaxWidth: "1400px (Wide) / 1280px (Default) / 896px (Narrow)",
    sectionGaps: {
      sm: "48px - 64px",
      md: "64px - 96px",
      lg: "96px - 128px",
    },
  },
  componentMatrix: {
    buttons: ["primary (burnt)", "dark (charcoal)", "secondary (sand)", "outline", "ghost", "link"],
    cards: ["paper (elevated)", "flat", "dark (inverted)", "asymmetric (burnt-accent)", "metric", "ghost"],
    sections: ["sand (default)", "surface", "dark", "muted"],
    badges: ["default (sand-200)", "burnt", "dark", "outline", "dot (live indicator)"],
  },
} as const;
