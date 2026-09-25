import { Button } from "./Button";

type Price = { label: string; price: string; duration?: string; note: string; cta?: string };

/** One tier on /costs. A worded price ("Price on application") sets smaller than a figure. */
export function PriceCard({ tier, ctaHref }: { tier: Price; ctaHref?: string }) {
  const worded = tier.price.length > 8;
  return (
    <div className="gm-card" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <p style={{ margin: 0, fontWeight: 800, fontSize: 18, color: "var(--color-ink)" }}>{tier.label}</p>
      <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: worded ? 28 : 44, fontWeight: 700,
        color: "var(--color-green)", lineHeight: worded ? 1.15 : 1 }}>{tier.price}</p>
      {tier.duration && (
        <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "var(--color-green-mid)" }}>{tier.duration}</p>
      )}
      <p style={{ margin: "4px 0 0", fontSize: "15.5px", color: "var(--color-body)", lineHeight: 1.6 }}>{tier.note}</p>
      {tier.cta && ctaHref && (
        <div style={{ marginTop: "auto", paddingTop: 8 }}>
          <Button href={ctaHref} variant="secondary">{tier.cta} &rarr;</Button>
        </div>
      )}
    </div>
  );
}
