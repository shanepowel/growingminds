import { CheckList } from "./CheckList";
import { Blob } from "./Blob";
import type { ReactNode } from "react";

type Subject = {
  title: string;
  long: string;
  session: string;
  outcomes: readonly string[];
};

/**
 * One subject on /curriculum. Alternates tint (sage / peach) and column order
 * by index, so the five sections read as a rhythm rather than a list.
 */
export function SubjectCard({ subject, index, icon }: { subject: Subject; index: number; icon: ReactNode }) {
  const warm = index % 2 === 1;
  const tint = warm ? "#FBEDE3" : "var(--color-sage-pale)";
  const line = warm ? "#EBD1C0" : "var(--color-sage)";
  const radius = warm ? "var(--radius-blob-b)" : "var(--radius-blob)";

  return (
    <article className="gm-shaped" style={{ background: tint, border: `1px solid ${line}`,
      borderRadius: "var(--radius-card)", padding: "var(--space-card)" }}>
      <Blob tone={warm ? "peach" : "sage"} shape={warm ? "b" : "a"} size={200} top={-70} right={-70} opacity={0.55} />
      <div style={{ position: "relative", display: "grid", gap: 30, alignItems: "start",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        <div style={{ minWidth: 0, order: warm ? -1 : 1 }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 14 }}>
            <span style={{ width: 52, height: 52, borderRadius: radius, background: "#fff",
              display: "grid", placeItems: "center", color: "var(--color-green)", flex: "0 0 auto" }}>{icon}</span>
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700,
                color: "var(--color-clay-ink)", lineHeight: 1 }}>{String(index + 1).padStart(2, "0")}</span>
              <h3 style={{ fontSize: 30 }}>{subject.title}</h3>
            </div>
          </div>
          <p style={{ margin: "0 0 18px", fontSize: 17, lineHeight: 1.7, color: "var(--color-body-dark)" }}>
            {subject.long}
          </p>
          <div style={{ background: "#fff", border: `1px solid ${line}`, borderRadius: 16, padding: "18px 20px" }}>
            <p className="gm-eyebrow" style={{ margin: "0 0 8px" }}>A typical session</p>
            <p style={{ margin: 0, fontSize: "15.5px", color: "var(--color-body)", lineHeight: 1.6 }}>{subject.session}</p>
          </div>
        </div>
        <div style={{ minWidth: 0 }}>
          <p className="gm-eyebrow" style={{ margin: "0 0 12px" }}>What we work on</p>
          <CheckList items={subject.outcomes} divided />
        </div>
      </div>
    </article>
  );
}
