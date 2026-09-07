/**
 * Small helpers for handling the [SQUARE BRACKET] placeholders in content/site.ts.
 * Sam's real values replace the brackets; until then we degrade links gracefully
 * rather than shipping a broken href.
 */
import { site } from "@/content/site";

export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value) return true;
  return value.trim().startsWith("[");
}

/** Returns a usable href, or a safe fallback ("#") when the value is a placeholder. */
export function resolveHref(value: string | undefined | null): string {
  return isPlaceholder(value) ? "#" : (value as string);
}

/** True when a value is safe to link to (not a placeholder). */
export function hasHref(value: string | undefined | null): boolean {
  return !isPlaceholder(value);
}

/**
 * Where a "Sign in" affordance points. When the pupil app is enabled it goes to
 * the app; otherwise straight to Google Classroom (the login at launch). Falls
 * back to "#" while both are placeholders.
 */
export function pupilSignInHref(): string {
  const { appEnabled, appUrl, links } = site.pupilArea;
  const classroom = links[0]?.href;
  return resolveHref(appEnabled ? appUrl : classroom);
}
