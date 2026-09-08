import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.business.domain}`;
  const routes = [
    "/",
    "/curriculum",
    "/costs",
    "/insights",
    "/about",
    "/tutoring-portsmouth",
    "/faqs",
    "/pupil-area",
    "/contact",
    "/policies",
  ];
  const now = new Date();
  return routes.map((route) => ({
    url: `${base}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
