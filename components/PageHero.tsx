import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { ScriptNote } from "./ScriptNote";

type Props = {
  title: string;
  eyebrow?: string;
  script?: string;
  lead?: string;
  narrow?: boolean;
  children?: ReactNode;
};

/**
 * Shared page intro that carries the home hero motif (peach blob + serif title)
 * across inner pages. The blob is clipped by the section so it never causes
 * horizontal scroll.
 */
export function PageHero({ title, eyebrow, script, lead, narrow, children }: Props) {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--color-paper)" }}>
      <span className="gm-blob-peach" style={{ right: -150, top: -90, width: 340, height: 320 }} aria-hidden />
      <div
        className={`${narrow ? "gm-container-narrow" : "gm-container"} gm-section`}
        style={{ position: "relative", paddingBottom: 0 }}
      >
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {script && <ScriptNote>{script}</ScriptNote>}
        <h1 style={{ fontSize: "var(--text-h1-page)", maxWidth: "20ch", marginTop: script ? 6 : 0 }}>{title}</h1>
        {lead && (
          <p className="gm-lead" style={{ marginTop: 14, maxWidth: "62ch" }}>
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
