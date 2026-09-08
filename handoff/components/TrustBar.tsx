import { GraduationCap, ShieldCheck, Monitor } from "lucide-react";
import { site } from "@/content/site";

const icons = [GraduationCap, ShieldCheck, Monitor];

/** Sage band directly under the hero. Trust above the fold on mobile. */
export function TrustBar() {
  return (
    <section className="gm-band">
      <div className="gm-container" style={{ paddingBlock: 28, display: "grid", gap: 24,
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {site.trust.map((t, i) => {
          const Icon = icons[i] ?? GraduationCap;
          return (
            <div key={t.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ flex: "0 0 auto", width: 44, height: 44, borderRadius: "50%", background: "#fff",
                border: "1px solid var(--color-sage-line)", display: "grid", placeItems: "center", color: "var(--color-green)" }}>
                <Icon size={22} strokeWidth={1.9} aria-hidden />
              </span>
              <div>
                <p style={{ margin: "0 0 3px", fontWeight: 800, fontSize: 17, color: "var(--color-ink)", lineHeight: 1.25 }}>
                  {t.title}
                </p>
                <p style={{ margin: 0, fontSize: "14.5px", color: "var(--color-body-dark)", lineHeight: 1.5 }}>{t.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
