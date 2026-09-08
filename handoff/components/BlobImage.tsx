import Image from "next/image";

type Props = {
  src: string;
  alt: string;          // never empty: these images carry meaning
  variant?: "a" | "b";  // two organic masks, alternate them down a page
  priority?: boolean;
  minHeight?: number;
};

/** Organic-masked photo frame. No child faces to camera in any image. */
export function BlobImage({ src, alt, variant = "a", priority, minHeight = 420 }: Props) {
  return (
    <div
      className={variant === "a" ? "gm-blob" : "gm-blob-alt"}
      style={{ position: "relative", minHeight, width: "100%", background: "var(--color-sage-pale)" }}
    >
      <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 768px) 100vw, 560px"
        style={{ objectFit: "cover" }} />
    </div>
  );
}
