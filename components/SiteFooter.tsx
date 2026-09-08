import Link from "next/link";
import { LeafMark } from "./LeafMark";
import { Chip } from "./Chip";
import { site } from "@/content/site";

/** Warm paper footer. The dark band on any page is the CTA above it, not this. */
export function SiteFooter() {
  return (
    <footer style={{ background: "var(--color-paper-warm)", color: "var(--color-body)",
      borderTop: "1px solid var(--color-rule)" }}>
      <div className="gm-container" style={{ paddingBlock: "46px 30px", display: "grid", gap: 34,
        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
        <div style={{ gridColumn: "1 / -1", display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: 18,
          paddingBottom: 26, borderBottom: "1px solid var(--color-rule)" }}>
          <div style={{ flex: "1 1 300px", display: "flex", alignItems: "center", gap: 12 }}>
            <LeafMark size={38} />
            <span>
              <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22,
                color: "var(--color-ink)", lineHeight: 1.05 }}>Growing Minds Tutoring</span>
              <span className="gm-script" style={{ display: "block", fontSize: 24 }}>{site.brand.tagline}</span>
            </span>
          </div>
          <div style={{ fontSize: 15, lineHeight: 1.7, flex: "0 0 auto" }}>
            <a href={`mailto:${site.business.email}`} style={{ color: "var(--color-ink)", fontWeight: 800 }}>
              {site.business.email}
            </a>
            <br />
            <span style={{ color: "var(--color-muted)" }}>{site.business.emailNote}</span>
          </div>
        </div>

        <FooterColumn title="Explore" links={site.footer.explore} />
        <FooterColumn title="The small print" links={site.footer.legal} />
        <div>
          <p className="gm-eyebrow" style={{ margin: "0 0 12px" }}>Safeguarding</p>
          <p style={{ margin: 0, fontSize: "14.5px", lineHeight: 1.65 }}>{site.business.safeguardingLine}</p>
        </div>

        <div style={{ gridColumn: "1 / -1" }}>
          <p className="gm-eyebrow" style={{ margin: "0 0 12px" }}>Tutoring across Portsmouth</p>
          <ul style={{ display: "flex", flexWrap: "wrap", gap: 6, listStyle: "none", margin: 0, padding: 0 }}>
            {site.business.areasCovered.map((area) => (
              <li key={area}><Chip label={area} /></li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--color-rule)" }}>
        <div className="gm-container" style={{ paddingBlock: 15, display: "flex", flexWrap: "wrap",
          gap: "8px 20px", fontSize: "13.5px", color: "var(--color-muted)" }}>
          <span>&copy; {new Date().getFullYear()} Growing Minds Tutoring. Sole trader, Portsmouth.</span>
          <span style={{ marginInlineStart: "auto" }}>{site.business.dbsLine}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly { href: string; label: string }[] }) {
  return (
    <div>
      <p className="gm-eyebrow" style={{ margin: "0 0 12px" }}>{title}</p>
      <ul style={{ display: "grid", gap: 7, listStyle: "none", margin: 0, padding: 0 }}>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} style={{ fontSize: "14.5px", color: "var(--color-body)" }}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
