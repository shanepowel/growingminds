import { Button } from "./Button";
import { BlobImage } from "./BlobImage";
import { ScriptNote } from "./ScriptNote";
import { site } from "@/content/site";

/** Home hero. Peach blob bleeds off the lower left, photo is blob-masked right. */
export function Hero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--color-paper)" }}>
      <span className="gm-blob-peach" style={{ left: -150, bottom: -70, width: 360, height: 340 }} aria-hidden />
      <div className="gm-container gm-section" style={{ position: "relative", display: "grid", gap: 44,
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
          <h1 style={{ maxWidth: "14ch" }}>{site.hero.heading}</h1>
          <p className="gm-lead" style={{ margin: 0 }}>{site.hero.lead}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 4 }}>
            <Button href="/contact">{site.hero.primaryCta} &rarr;</Button>
            <Button href="/contact" variant="secondary">{site.hero.secondaryCta}</Button>
          </div>
          <ScriptNote>{site.hero.scriptNote}</ScriptNote>
        </div>
        <BlobImage src="/brand/hero.webp" alt={site.hero.imageAlt} priority />
      </div>
    </section>
  );
}
