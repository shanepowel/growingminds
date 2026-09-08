import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "white" | "sage" | "dark";
  href?: string;
  className?: string;
};

const tones = { white: "gm-card", sage: "gm-card-sage", dark: "gm-card-dark" } as const;

export function Card({ children, tone = "white", href, className = "" }: Props) {
  const cls = `${tones[tone]} ${href ? "gm-card-link" : ""} ${className}`.trim();
  return href ? <Link href={href} className={cls}>{children}</Link> : <div className={cls}>{children}</div>;
}
