import { site } from "@/content/site";
import { facebookHref } from "@/lib/content";
import { Button } from "./Button";

/** The single dark band a page is allowed. Shown on most pages, before the footer. */
export function Cta() {
  return (
    <section className="gm-band-dark">
      <div
        className="gm-container gm-section"
        style={{
          display: "grid",
          gap: 32,
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          alignItems: "center",
        }}
      >
        <div>
          <p className="gm-script" style={{ margin: 0, color: "var(--color-sage)", fontSize: 34 }}>
            {site.cta.script}
          </p>
          <h2 style={{ color: "#fff", margin: "8px 0 12px" }}>{site.cta.heading}</h2>
          <p style={{ margin: 0, maxWidth: "46ch", color: "var(--color-on-dark)", lineHeight: 1.6 }}>
            {site.cta.body}
          </p>
        </div>
        <div style={{ display: "grid", gap: 12 }}>
          <Button href="/contact" variant="onDark">
            {site.cta.primary}
          </Button>
          {site.business.showPhone && (
            <a
              href={site.business.phoneHref}
              className="gm-btn gm-btn-on-dark"
              style={{ background: "rgba(255,255,255,.08)", color: "#fff", border: "1.5px solid rgba(220,232,206,.4)" }}
            >
              Call {site.business.phone}
            </a>
          )}
          <a
            href={`mailto:${site.business.email}`}
            className="gm-btn gm-btn-on-dark"
            style={{ background: "rgba(255,255,255,.08)", color: "#fff", border: "1.5px solid rgba(220,232,206,.4)" }}
          >
            Email me directly
          </a>
          <a
            href={facebookHref()}
            target="_blank"
            rel="noreferrer"
            className="gm-btn gm-btn-on-dark"
            style={{ background: "rgba(255,255,255,.08)", color: "#fff", border: "1.5px solid rgba(220,232,206,.4)" }}
          >
            Message me on Facebook
          </a>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(220,232,206,.25)" }}>
        <div
          className="gm-container"
          style={{ paddingBlock: 16, textAlign: "center", fontSize: 15, color: "var(--color-on-dark)" }}
        >
          &#9825; &nbsp;{site.footerNote}
        </div>
      </div>
    </section>
  );
}
