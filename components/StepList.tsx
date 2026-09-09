import { site } from "@/content/site";

/** "Getting started" on /curriculum. Numbers sit in alternating blob discs. */
export function StepList() {
  return (
    <ol style={{ display: "grid", gap: 20, listStyle: "none", margin: 0, padding: 0,
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
      {site.gettingStarted.map((step, i) => {
        const warm = i % 2 === 1;
        return (
          <li key={step.n} style={{ paddingTop: 14 }}>
            <span aria-hidden style={{ display: "grid", placeItems: "center", width: 56, height: 56,
              borderRadius: warm ? "var(--radius-blob-b)" : "var(--radius-blob)",
              background: warm ? "var(--color-peach)" : "var(--color-sage)",
              fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700,
              color: "var(--color-ink)", marginBottom: 14 }}>{step.n}</span>
            <p style={{ margin: "0 0 6px", fontWeight: 800, fontSize: 18, color: "var(--color-ink)" }}>{step.title}</p>
            <p style={{ margin: 0, fontSize: "15.5px", color: "var(--color-body)", lineHeight: 1.55 }}>{step.body}</p>
          </li>
        );
      })}
    </ol>
  );
}
