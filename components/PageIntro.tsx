import type { ReactNode } from "react";
import { Blob } from "./Blob";
import { ScriptNote } from "./ScriptNote";

type Props = {
  title: string;
  lead: string;
  kicker?: string;      // Caveat line above the h1
  children?: ReactNode; // chips, buttons
  narrow?: boolean;
};

/** The top of every route except home. Shaped, so the page opens with the motif. */
export function PageIntro({ title, lead, kicker, children, narrow }: Props) {
  return (
    <section className="gm-shaped" style={{ background: "var(--color-paper)" }}>
      <Blob tone="peach" shape="b" size={300} top={-80} right={-120} />
      <Blob tone="sage" shape="a" size={240} bottom={-90} left={-110} />
      <div className={`${narrow ? "gm-container-narrow" : "gm-container"} gm-section`} style={{ position: "relative" }}>
        {kicker && <ScriptNote>{kicker}</ScriptNote>}
        <h1 style={{ maxWidth: "15ch", margin: kicker ? "6px 0 16px" : "0 0 16px" }}>{title}</h1>
        <p className="gm-lead" style={{ margin: 0, maxWidth: "54ch" }}>{lead}</p>
        {children && <div style={{ marginTop: 26 }}>{children}</div>}
      </div>
    </section>
  );
}
