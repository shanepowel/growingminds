import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "onDark" | "onDarkGhost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-extrabold transition-colors min-h-[44px] px-[26px] py-[13px] text-[16px] no-underline";

const variants: Record<Variant, string> = {
  primary: "bg-deep text-white hover:bg-deep-press",
  secondary:
    "bg-white text-deep border-2 border-sage-mid hover:bg-sage-soft",
  onDark: "bg-sage text-deep hover:bg-white",
  onDarkGhost:
    "bg-white/10 text-white border border-sage/40 hover:bg-white/20",
};

type LinkButtonProps = {
  variant?: Variant;
} & ComponentProps<typeof Link>;

export function LinkButton({
  variant = "primary",
  className = "",
  ...props
}: LinkButtonProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
