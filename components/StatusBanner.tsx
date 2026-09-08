import { site } from "@/content/site";

/** Renders only when site.status is not "accepting". Copy lives in site.ts. */
export function StatusBanner() {
  const message = site.statusBanner[site.status];
  if (!message) return null;
  return (
    <div role="status" style={{ background: "var(--color-warn)", color: "#3A2E0B", textAlign: "center",
      padding: "9px 24px", fontSize: "14.5px", fontWeight: 700 }}>
      {message}
    </div>
  );
}
