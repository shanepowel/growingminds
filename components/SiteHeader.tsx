import Link from "next/link";
import { Phone, UserRound } from "lucide-react";
import { LeafMark } from "./LeafMark";
import { site } from "@/content/site";
import { facebookHref } from "@/lib/content";

/** Two rows. Sage trust strip (not sticky) then the sticky brand + nav bar. */
export function SiteHeader({ pathname }: { pathname: string }) {
  return (
    <>
      <div style={{ background: "var(--color-sage-pale)", color: "var(--color-body-dark)" }}>
        <div className="gm-container" style={{ paddingBlock: 7, display: "flex", flexWrap: "wrap",
          alignItems: "center", gap: "4px 14px", fontSize: "12.5px", fontWeight: 700, letterSpacing: ".02em" }}>
          <span>{site.business.credentialLine}</span>
          <span style={{ color: "var(--color-clay)" }} aria-hidden>&#10022;</span>
          <span>{site.business.deliveryLine}</span>
          <a href={facebookHref()} target="_blank" rel="noreferrer" style={{ marginInlineStart: "auto", color: "var(--color-body-dark)", fontWeight: 700 }}>
            Facebook
          </a>
        </div>
      </div>

      <header style={{ position: "sticky", top: 0, zIndex: 40, background: "rgba(247,246,241,.97)",
        backdropFilter: "blur(10px)", borderBottom: "1px solid var(--color-rule)" }}>
        <div className="gm-container" style={{ paddingBlock: 12, display: "flex", flexWrap: "wrap",
          alignItems: "center", gap: "10px 26px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, flex: "0 0 auto" }}>
            <LeafMark />
            <span>
              <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 21,
                color: "var(--color-ink)", lineHeight: 1.05, whiteSpace: "nowrap" }}>Growing Minds</span>
              <span style={{ display: "block", fontSize: "9.5px", letterSpacing: ".3em", color: "var(--color-body)",
                fontWeight: 700, marginTop: 1 }}>TUTORING</span>
            </span>
          </Link>

          <nav aria-label="Main" style={{ display: "flex", alignItems: "center", gap: 6, flex: "1 1 auto",
            minWidth: 0, overflowX: "auto" }}>
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`gm-navlink ${pathname === item.href ? "gm-navlink-active" : ""}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10, flex: "0 0 auto" }}>
            <a href={`tel:${site.business.phoneRaw}`} className="gm-btn gm-btn-primary"
              style={{ padding: "11px 18px", fontSize: "14.5px" }}>
              <Phone size={16} strokeWidth={1.9} aria-hidden /> {site.business.phone}
            </a>
            {site.pupilArea.enabled && (
              <Link href="/pupil-area" style={{ display: "flex", alignItems: "center", gap: 9, minHeight: 44,
                padding: "0 4px", whiteSpace: "nowrap", color: "var(--color-ink)" }}>
                <span style={{ width: 26, height: 26, borderRadius: "50%", border: "1.6px solid var(--color-green-mid)",
                  color: "var(--color-green-mid)", display: "grid", placeItems: "center", flex: "0 0 auto" }}>
                  <UserRound size={16} strokeWidth={1.9} aria-hidden />
                </span>
                <span style={{ lineHeight: 1.15 }}>
                  <span style={{ display: "block", fontSize: "13.5px", fontWeight: 800 }}>Pupil Area</span>
                  <span style={{ display: "block", fontSize: "12.5px", color: "var(--color-body)" }}>Sign in</span>
                </span>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
