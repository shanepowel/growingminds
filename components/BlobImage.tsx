import Image from "next/image";

/**
 * Real photo paths that have actually been supplied and live in /public/brand.
 * Until a path is listed here, BlobImage renders an organic-masked peach/sage
 * placeholder wash carrying the alt text, so a missing photo never ships as a
 * broken image. Add the path here (and drop the WebP in /public/brand) to go live.
 */
const SHIPPED = new Set<string>([]);

type Props = {
  src: string;
  alt: string; // never empty: these images carry meaning
  variant?: "a" | "b"; // two organic masks, alternate them down a page
  priority?: boolean;
  minHeight?: number;
};

/** Organic-masked photo frame. No child faces to camera in any image. */
export function BlobImage({ src, alt, variant = "a", priority, minHeight = 420 }: Props) {
  const mask = variant === "a" ? "gm-blob" : "gm-blob-alt";

  if (!SHIPPED.has(src)) {
    return (
      <div
        className={mask}
        style={{
          position: "relative",
          minHeight,
          width: "100%",
          display: "grid",
          placeItems: "center",
          padding: 24,
          background:
            "linear-gradient(135deg, var(--color-sage-pale) 0%, var(--color-peach) 100%)",
        }}
      >
        <span
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 12,
            lineHeight: 1.5,
            color: "var(--color-body)",
            textAlign: "center",
            maxWidth: "34ch",
          }}
        >
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div
      className={mask}
      style={{ position: "relative", minHeight, width: "100%", background: "var(--color-sage-pale)" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 560px"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
