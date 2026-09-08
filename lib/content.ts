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

/** Returns the value if real, otherwise the given working fallback URL. */
export function resolveLink(
  value: string | undefined | null,
  fallback: string,
): string {
  return isPlaceholder(value) ? fallback : (value as string);
}

/** True when a value is safe to link to (not a placeholder). */
export function hasHref(value: string | undefined | null): boolean {
  return !isPlaceholder(value);
}

/**
 * Facebook link. Uses Sam's page URL once she supplies it; until then it points
 * at a Facebook search for the business so the button still lands somewhere useful.
 */
export function facebookHref(): string {
  return resolveLink(
    site.business.facebookUrl,
    "https://www.facebook.com/search/top?q=Growing%20Minds%20Tutoring",
  );
}

/**
 * Where a "Sign in" affordance points. When the pupil app is enabled it goes to
 * the app; otherwise straight to Google Classroom (the login at launch), falling
 * back to the Classroom sign in page while the per-family link is a placeholder.
 */
export function pupilSignInHref(): string {
  const { appEnabled, appUrl, links } = site.pupilArea;
  if (appEnabled && hasHref(appUrl)) return appUrl;
  return resolveLink(links[0]?.href, "https://classroom.google.com");
}
