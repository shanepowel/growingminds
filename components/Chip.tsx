"use client";

type Props = { label: string; selected?: boolean; onToggle?: () => void };

/** Static area chip when onToggle is absent, multi-select control when present. */
export function Chip({ label, selected, onToggle }: Props) {
  const cls = `gm-chip ${selected ? "gm-chip-on" : ""}`.trim();
  if (!onToggle) return <span className={cls}>{label}</span>;
  return (
    <button type="button" role="checkbox" aria-checked={!!selected} onClick={onToggle} className={cls}>
      {label}
    </button>
  );
}
