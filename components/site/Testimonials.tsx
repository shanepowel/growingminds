import { publishedTestimonials } from "@/lib/content";

type Quote = ReturnType<typeof publishedTestimonials>[number];

/**
 * Parent testimonials. Hidden until Sam supplies real quotes with written
 * permission. Do not fill with invented text.
 */
export function Testimonials({
  heading = "What parents say",
  quotes,
}: {
  heading?: string;
  quotes?: Quote[];
}) {
  const items = quotes ?? publishedTestimonials();
  if (items.length === 0) return null;

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
        {items.map((t, i) => (
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
    </>
  );
}
