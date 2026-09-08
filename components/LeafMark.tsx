type Props = { size?: number; className?: string };

/** Three-leaf brand mark. Sage, deep green, clay. Decorative: aria-hidden. */
export function LeafMark({ size = 42, className }: Props) {
  return (
    <span
      aria-hidden
      className={className}
      style={{ width: size, height: size, position: "relative", flex: "0 0 auto", display: "block" }}
    >
      <i style={{ position: "absolute", left: "5%", top: "14%", width: "48%", height: "67%",
        borderRadius: "60% 8% 60% 8%", background: "var(--color-green-soft)", transform: "rotate(-18deg)" }} />
      <i style={{ position: "absolute", left: "28%", top: "5%", width: "43%", height: "62%",
        borderRadius: "60% 8% 60% 8%", background: "var(--color-green)", transform: "rotate(6deg)" }} />
      <i style={{ position: "absolute", left: "55%", top: "21%", width: "38%", height: "57%",
        borderRadius: "60% 8% 60% 8%", background: "var(--color-clay)", transform: "rotate(26deg)" }} />
    </span>
  );
}
