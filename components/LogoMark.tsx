import Image from "next/image";

/** The flower, book and pencil from Sam's logo, without the wordmark. Decorative: sits beside the typed name. */
export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <Image
      src="/brand/logo-mark.webp"
      alt=""
      aria-hidden
      width={Math.round(size * 1.015)}
      height={size}
      style={{ flex: "0 0 auto", display: "block" }}
    />
  );
}

/** The full stacked logo: mark, "Growing Minds" and "Tutoring". */
export function Logo({ width = 160, priority }: { width?: number; priority?: boolean }) {
  return (
    <Image
      src="/brand/logo.webp"
      alt="Growing Minds Tutoring"
      width={width}
      height={Math.round((width * 763) / 640)}
      priority={priority}
      style={{ display: "block", height: "auto" }}
    />
  );
}
