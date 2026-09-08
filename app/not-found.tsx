import { LeafMark } from "@/components/LeafMark";
import { Button } from "@/components/Button";
import { ScriptNote } from "@/components/ScriptNote";

export default function NotFound() {
  return (
    <section className="gm-container-narrow" style={{ paddingBlock: "100px 120px", textAlign: "center" }}>
      <div style={{ display: "grid", placeItems: "center", marginBottom: 20 }}>
        <LeafMark size={72} />
      </div>
      <ScriptNote>Oops</ScriptNote>
      <h1 style={{ fontSize: "var(--text-h1-page)", margin: "6px 0 12px" }}>This page has wandered off</h1>
      <p style={{ margin: "0 auto 24px", maxWidth: "48ch", fontSize: "17.5px", lineHeight: 1.65, color: "var(--color-body-dark)" }}>
        It happens to the best of us. Let&rsquo;s get you back to somewhere useful.
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <Button href="/">Back to the home page</Button>
        <Button href="/contact" variant="secondary">Get in touch</Button>
      </div>
    </section>
  );
}
