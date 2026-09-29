import { site } from "@/content/site";
import { isPlaceholder } from "@/lib/content";

/** Only quotes Sam has written permission for, never [QUOTE] placeholders. */
export function publishedTestimonials() {
  return site.testimonials.filter((t) => !isPlaceholder(t.quote));
}

/**
 * Parent testimonials. Placeholder slots are hidden rather than shown as gaps;
 * render nothing at all when there is no real quote yet.
 */
export function Testimonials({ heading = "What parents say" }: { heading?: string }) {
  const quotes = publishedTestimonials();
  if (quotes.length === 0) return null;

  return (
    <>
      <h2 style={{ textAlign: "center", margin: "0 0 26px" }}>{heading}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
          maxWidth: quotes.length === 1 ? 720 : undefined,
          marginInline: "auto",
        }}
      >
        {quotes.map((t, i) => (
          <figure key={i} className="gm-card" style={{ margin: 0 }}>
            <div
              aria-hidden
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 34,
                color: "var(--color-green-soft)",
                lineHeight: 0.6,
                marginBottom: 12,
              }}
            >
              &ldquo;
            </div>
            <blockquote style={{ margin: 0, fontSize: "16.5px", lineHeight: 1.6, color: "var(--color-body-dark)" }}>
              {t.quote}
            </blockquote>
            <figcaption style={{ marginTop: 16, fontWeight: 800, color: "var(--color-green)", fontSize: "14.5px" }}>
              {t.byline}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
