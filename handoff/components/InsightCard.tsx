import Link from "next/link";

type Insight = { slug: string; tag: string; read: string; title: string; blurb: string };

/** One note on /insights. Body copy comes from Sanity, everything else from site.ts. */
export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link href={`/insights/${insight.slug}`} className="gm-card gm-card-link"
      style={{ display: "flex", flexDirection: "column", gap: 10, color: "inherit" }}>
      <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: "12.5px", fontWeight: 800, letterSpacing: ".1em", color: "#3E5B31",
          background: "var(--color-sage-pale)", border: "1px solid var(--color-sage)",
          padding: "5px 12px", borderRadius: "var(--radius-pill)" }}>{insight.tag}</span>
        <span style={{ fontSize: "13.5px", color: "var(--color-muted)" }}>{insight.read}</span>
      </span>
      <h2 style={{ fontSize: 23, lineHeight: 1.2 }}>{insight.title}</h2>
      <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--color-body)" }}>{insight.blurb}</p>
      <span style={{ marginTop: "auto", paddingTop: 6, fontWeight: 800, fontSize: 15, color: "var(--color-green)" }}>
        Read the note &rarr;
      </span>
    </Link>
  );
}
