import { Button } from "./Button";
import { ScriptNote } from "./ScriptNote";
import { site } from "@/content/site";

/** The one dark band a page is allowed. Sits directly above the footer. */
export function CtaBand() {
  return (
    <section className="gm-band-dark">
      <div className="gm-container gm-section" style={{ display: "grid", gap: 32, alignItems: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        <div>
          <p className="gm-script" style={{ margin: 0, color: "#A9C293", fontSize: 40 }}>{site.footerCta.kicker}</p>
          <h2 style={{ color: "#fff", margin: "8px 0 12px" }}>Ready to start?</h2>
          <p style={{ margin: 0, fontSize: "17.5px", lineHeight: 1.65, color: "var(--color-on-dark)", maxWidth: "46ch" }}>
            {site.footerCta.body}
          </p>
        </div>
        <div style={{ display: "grid", gap: 12 }}>
          <Button href="/contact" variant="onDark">{site.footerCta.primary}</Button>
          <Button href={`mailto:${site.business.email}`} variant="onDark">Email me</Button>
        </div>
      </div>
    </section>
  );
}
