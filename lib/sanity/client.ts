import { createClient, type SanityClient } from "@sanity/client";
import { apiVersion, dataset, projectId, sanityConfigured } from "./env";

/**
 * Read-only Sanity client. Returns null until a project is configured, so the
 * data layer can fall back to the local bodies without throwing.
 */
export const sanityClient: SanityClient | null = sanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;
