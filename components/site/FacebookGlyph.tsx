/**
 * Facebook "f" mark. lucide-react dropped brand icons, and the flyer/design
 * reference uses a simple Oswald "f" anyway, so we render that.
 */
export function FacebookGlyph({ size = 18 }: { size?: number }) {
  return (
    <span
      aria-hidden
      className="font-display font-bold leading-none"
      style={{ fontSize: size }}
    >
      f
    </span>
  );
}
