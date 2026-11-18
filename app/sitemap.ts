import { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";
import { demosData } from "@/data/demos";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codeandcrumbs.com";
  const currentDate = new Date().toISOString();

  // Core Static Routes
  const staticRoutes = [
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/work`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/demos`, lastModified: currentDate, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/process`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/technology`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.75 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // Dynamic Case Studies
  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Dynamic Demos
  const demoRoutes = demosData.map((demo) => ({
    url: `${baseUrl}/demos/${demo.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes, ...demoRoutes];
}
