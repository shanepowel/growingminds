import Link from "next/link";

/**
 * Logo lockup. The mascot is a deliberate placeholder circle; the real vector
 * mascot comes from Sam's flyer designer (see handoff README). Do not redraw it.
 */
export function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-shrink-0 items-center gap-2.5"
      aria-label="Growing Minds Tutoring, home"
    >
      <span
        aria-hidden
        className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-sage-mid text-center font-mono text-[7px] leading-[1.1] text-leaf-light"
        style={{
          background:
            "repeating-linear-gradient(135deg,#DCE8CE 0 6px,#EEF3E6 6px 12px)",
        }}
      >
        LOGO
        <br />
        SVG
      </span>
      <span className="leading-none">
        <span className="font-display block text-[17px] font-semibold tracking-[0.04em] text-deep">
          Growing Minds
        </span>
        <span className="block text-[9.5px] font-bold tracking-[0.28em] text-leaf-light">
          TUTORING
        </span>
      </span>
    </Link>
  );
}
