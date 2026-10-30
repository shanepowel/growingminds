import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { projectId, dataset } from "./lib/sanity/env";

/**
 * Standalone Sanity Studio config. Run it with `npm run studio` once
 * NEXT_PUBLIC_SANITY_PROJECT_ID is set (create a project at sanity.io/manage).
 * The site reads published notes via lib/insights.ts; until then the written
 * fallback bodies in content/insight-bodies.ts are shown.
 */
export default defineConfig({
  name: "growing-minds",
  title: "Growing Minds Tutoring",
  projectId: projectId || "placeholder",
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
