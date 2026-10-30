import type { PortableTextBlock } from "@portabletext/react";
import { site } from "@/content/site";
import { insightBodies } from "@/content/insight-bodies";
import { sanityClient } from "@/lib/sanity/client";

export type InsightMeta = {
  slug: string;
  tag: string;
  read: string;
  title: string;
  blurb: string;
};

export type InsightDoc = InsightMeta & { body: PortableTextBlock[] };

const localMeta: InsightMeta[] = site.insights.map((i) => ({
  slug: i.slug,
  tag: i.tag,
  read: i.read,
  title: i.title,
  blurb: i.blurb,
}));

const LIST_QUERY = `*[_type == "insight" && !(_id in path("drafts.**"))]
  | order(order asc, _createdAt desc){
    "slug": slug.current, tag, read, title, blurb
  }`;

const DOC_QUERY = `*[_type == "insight" && slug.current == $slug][0]{
  "slug": slug.current, tag, read, title, blurb, body
}`;

/** Insight metadata for the listing page. Sanity when connected, else local. */
export async function listInsights(): Promise<InsightMeta[]> {
  if (sanityClient) {
    try {
      const docs = await sanityClient.fetch<InsightMeta[]>(LIST_QUERY);
      if (docs && docs.length) return docs;
    } catch (err) {
      console.error("[insights] Sanity list failed, using local bodies", err);
    }
  }
  return localMeta;
}

/** One note with its body. Sanity when connected, else the written fallback. */
export async function getInsight(slug: string): Promise<InsightDoc | null> {
  if (sanityClient) {
    try {
      const doc = await sanityClient.fetch<InsightDoc | null>(DOC_QUERY, { slug });
      if (doc) return { ...doc, body: doc.body ?? [] };
    } catch (err) {
      console.error("[insights] Sanity fetch failed, using local body", err);
    }
  }
  const meta = localMeta.find((i) => i.slug === slug);
  if (!meta) return null;
  return { ...meta, body: insightBodies[slug] ?? [] };
}

/** Slugs to prerender at build (the local set; Sanity notes render via ISR). */
export function insightSlugs(): string[] {
  return localMeta.map((i) => i.slug);
}
