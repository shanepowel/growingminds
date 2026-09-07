import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.business.url;
  const routes = [
    "/",
    "/about",
    "/tutoring",
    "/how-it-works",
    "/tutoring-portsmouth",
    "/pricing",
    "/faqs",
    "/contact",
    "/privacy",
    "/terms",
  ];
  const now = new Date();
  return routes.map((route) => ({
    url: `${base}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
