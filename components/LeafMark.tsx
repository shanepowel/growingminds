import Image from "next/image";

type Props = { size?: number; className?: string };

/** Compact crop of the Growing Minds logo illustration. Size is height in px. */
const MARK_RATIO = 400 / 256;

export function LeafMark({ size = 46, className }: Props) {
  const height = size;
  const width = Math.round(size * MARK_RATIO);
  return (
    <Image
      src="/brand/logo-mark.png"
      alt=""
      width={width}
      height={height}
      className={className}
      aria-hidden
      style={{ width, height, objectFit: "contain", flex: "0 0 auto" }}
    />
  );
}

/** Full logo lockup, including the Growing Minds Tutoring wordmark. */
export function BrandLockup({ height = 96, className }: { height?: number; className?: string }) {
  return (
    <Image
      src="/brand/logo.png"
      alt="Growing Minds Tutoring"
      width={height}
      height={height}
      className={className}
      style={{ width: height, height: height, objectFit: "contain" }}
    />
  );
}
