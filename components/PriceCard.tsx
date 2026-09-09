type Price = { label: string; price: string; duration: string; note: string };

/** One tier on /costs. [SQUARE BRACKETS] stay until Sam supplies real figures. */
export function PriceCard({ tier }: { tier: Price }) {
  return (
    <div className="gm-card" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <p style={{ margin: 0, fontWeight: 800, fontSize: 18, color: "var(--color-ink)" }}>{tier.label}</p>
      <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 700,
        color: "var(--color-green)", lineHeight: 1 }}>{tier.price}</p>
      <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "var(--color-green-mid)" }}>{tier.duration}</p>
      <p style={{ margin: "4px 0 0", fontSize: "15.5px", color: "var(--color-body)", lineHeight: 1.6 }}>{tier.note}</p>
    </div>
  );
}
