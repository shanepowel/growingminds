/**
 * Image slot placeholder. Real photos (Sam, the tutoring space, hands-and-materials
 * shots) drop in later via next/image from /public/brand as WebP. Until then this
 * striped sage box marks what belongs there, so no stock photo of a child ever ships.
 */
export function ImageSlot({
  label,
  className = "",
  minHeight = 220,
  onDark = false,
}: {
  label: string;
  className?: string;
  minHeight?: number;
  onDark?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={`flex items-center justify-center rounded-[var(--radius-card)] p-4 text-center font-mono text-[12px] ${
        onDark
          ? "border border-sage/35 text-sage"
          : "border border-sage-mid text-leaf-light"
      } ${className}`}
      style={{
        minHeight,
        background: onDark
          ? "repeating-linear-gradient(135deg,rgba(220,232,206,.28) 0 9px,rgba(220,232,206,.12) 9px 18px)"
          : "repeating-linear-gradient(135deg,#DCE8CE 0 9px,#EEF3E6 9px 18px)",
      }}
    >
      {label}
    </div>
  );
}
