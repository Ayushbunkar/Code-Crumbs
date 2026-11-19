import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codeandcrumbs.com";

export const viewport: Viewport = {
  themeColor: "#F4F0E8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Code&Crumbs — Digital Product & Engineering Studio",
    template: "%s | Code&Crumbs",
  },
  description:
    "Code&Crumbs designs and develops intelligent software, AI-powered products and digital experiences for ambitious businesses. Swiss grid typography and high-conviction engineering.",
  keywords: [
    "Digital Agency",
    "Product Engineering",
    "Next.js Development",
    "SaaS Architecture",
    "Enterprise ERP",
    "AI Agents",
    "Interactive 3D",
    "React Three Fiber",
    "Tailwind CSS",
  ],
  authors: [{ name: "Code&Crumbs Engineering Partners" }],
  creator: "Code&Crumbs",
  publisher: "Code&Crumbs Agency Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Code&Crumbs — Digital Agency & Software Engineering Practice",
    description:
      "We combine engineering, product thinking and AI capabilities to build useful digital products.",
    siteName: "Code&Crumbs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code&Crumbs — Digital Agency & Software Engineering Practice",
    description:
      "We combine engineering, product thinking and AI capabilities to build useful digital products.",
    creator: "@codeandcrumbs",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Code&Crumbs",
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      description:
        "Independent software design and engineering practice combining engineering rigor, product thinking, and applied AI.",
      contactPoint: {
        "@type": "ContactPoint",
        email: "codeandcrumbs.agency@gmail.com",
        contactType: "Customer Service",
      },
      sameAs: [
        "https://github.com/codeandcrumbs",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Code&Crumbs",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Code&Crumbs Digital Agency",
      url: siteUrl,
      priceRange: "$$$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Engineering & AI Capabilities",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Product Development",
              description: "SaaS architecture, MVP acceleration, and custom web applications.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI & Automation",
              description: "Autonomous multi-agent swarms, RAG document intelligence, and OCR.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enterprise ERP & Operations",
              description: "High-density multi-hub warehouse matrices and ledger synchronization.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans bg-sand text-charcoal antialiased selection:bg-burnt selection:text-white min-h-screen flex flex-col justify-between overflow-x-hidden">
        <CustomCursor />
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
