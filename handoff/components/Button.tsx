import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "onDark";
type Props = {
  children: ReactNode;
  href?: string;          // internal route or tel:/mailto:
  onClick?: () => void;   // only inside a "use client" parent
  variant?: Variant;
  type?: "button" | "submit";
  className?: string;
};

const variants: Record<Variant, string> = {
  primary: "gm-btn gm-btn-primary",
  secondary: "gm-btn gm-btn-secondary",
  onDark: "gm-btn gm-btn-on-dark",
};

export function Button({ children, href, onClick, variant = "primary", type = "button", className = "" }: Props) {
  const cls = `${variants[variant]} ${className}`.trim();
  if (href) {
    return href.startsWith("/") ? (
      <Link href={href} className={cls}>{children}</Link>
    ) : (
      <a href={href} className={cls}>{children}</a>
    );
  }
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}
