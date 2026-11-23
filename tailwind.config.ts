import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sand: {
          DEFAULT: "#F4F0E8",
          50: "#FAF8F5",
          100: "#F4F0E8",
          200: "#E9E3D6",
          300: "#DDD4C2",
          400: "#CFC4AC",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#FAF8F5",
        },
        charcoal: {
          DEFAULT: "#171717",
          50: "#77736B",
          100: "#44423E",
          200: "#2B2A27",
          900: "#171717",
          950: "#0F0F0F",
        },
        burnt: {
          DEFAULT: "#E85D35",
          hover: "#D44F29",
          active: "#BF431F",
          muted: "#FCEEE9",
        },
        border: {
          DEFAULT: "#D8D1C5",
          light: "#E8E2D8",
          dark: "#2A2927",
        },
        muted: {
          DEFAULT: "#77736B",
          foreground: "#A19C93",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        display: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(23, 23, 23, 0.04)',
        'card': '0 4px 20px -2px rgba(23, 23, 23, 0.05)',
        'elevated': '0 12px 32px -4px rgba(23, 23, 23, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
