import { site } from "@/content/site";

/**
 * Parent testimonials. Every quote is a [QUOTE] placeholder until Sam supplies
 * real ones with written permission.
 */
export function Testimonials({
  heading = "What parents say",
  showNote = true,
}: {
  heading?: string;
  showNote?: boolean;
}) {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: "0 0 26px" }}>{heading}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
        }}
      >
        {site.testimonials.map((t, i) => (
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
              {t.parentName}, {t.childYear} parent
            </figcaption>
          </figure>
        ))}
      </div>
      {showNote && (
        <p
          style={{
            textAlign: "center",
            marginTop: 20,
            fontFamily: "ui-monospace, monospace",
            fontSize: 12,
            color: "var(--color-muted)",
          }}
        >
          real quotes to replace [QUOTE] placeholders, with written permission
        </p>
      )}
    </>
  );
}
