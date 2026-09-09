type Props = {
  tone?: "peach" | "sage";
  shape?: "a" | "b";
  size: number;                 // px, the wider axis
  top?: number; right?: number; bottom?: number; left?: number;
  opacity?: number;
};

/**
 * Decorative organic shape. Every paper section on the site carries one or two,
 * bleeding off an edge. The parent section must be .gm-shaped
 * (position:relative; overflow:hidden) and its content wrapped so it sits above.
 * Purely decorative: never put text, icons or links on top of a blob edge.
 */
export function Blob({ tone = "peach", shape = "b", size, top, right, bottom, left, opacity }: Props) {
  return (
    <span
      aria-hidden
      className={tone === "peach" ? "gm-blob-peach" : "gm-blob-sage"}
      style={{
        width: size, height: Math.round(size * 0.95), top, right, bottom, left, opacity,
        borderRadius: shape === "a" ? "var(--radius-blob)" : "var(--radius-blob-b)",
      }}
    />
  );
}
