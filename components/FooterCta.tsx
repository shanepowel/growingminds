import { site } from "@/content/site";
import { Button } from "./Button";

/** Pale sage nudge strip that sits directly above the warm footer, site wide. */
export function FooterCta() {
  return (
    <section className="gm-band">
      <div
        className="gm-container"
        style={{
          paddingBlock: 34,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 18,
        }}
      >
        <div style={{ flex: "1 1 320px", minWidth: 0 }}>
          <p className="gm-script" style={{ margin: 0, fontSize: 30, color: "var(--color-clay-ink)" }}>
            {site.footerCta.kicker}
          </p>
          <p
            style={{
              margin: "2px 0 0",
              fontSize: "16.5px",
              lineHeight: 1.55,
              color: "var(--color-body-dark)",
              maxWidth: "52ch",
              textWrap: "pretty",
            }}
          >
            {site.footerCta.body}
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, flex: "0 0 auto" }}>
          <Button href="/contact">{site.footerCta.primary}</Button>
          <Button href={site.business.phoneHref} variant="secondary">
            Call {site.business.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
