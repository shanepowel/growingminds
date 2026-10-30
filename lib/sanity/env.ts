/**
 * Sanity project configuration, read from the environment. The site works
 * without these set: the insights fall back to the bodies written in
 * content/insight-bodies.ts until a Sanity project is connected.
 */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";

/** True once a real Sanity project is wired up via env vars. */
export const sanityConfigured = projectId.length > 0;
