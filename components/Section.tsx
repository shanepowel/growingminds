import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** paper (default), sage band, or the one dark band a page is allowed */
  tone?: "paper" | "sage" | "dark";
  narrow?: boolean;
  id?: string;
  className?: string;
};

/** The only source of vertical rhythm on the site. */
export function Section({ children, tone = "paper", narrow, id, className = "" }: Props) {
  const band = tone === "sage" ? "gm-band" : tone === "dark" ? "gm-band-dark" : "";
  return (
    <section id={id} className={`${band} ${className}`.trim()}>
      <div className={`${narrow ? "gm-container-narrow" : "gm-container"} gm-section`}>{children}</div>
    </section>
  );
}
