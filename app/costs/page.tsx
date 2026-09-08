import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageIntro } from "@/components/PageIntro";
import { PriceCard } from "@/components/PriceCard";
import { Card } from "@/components/Card";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Costs",
  description: "Simple, clear tutoring prices with no joining fee and no contract. Pay for the sessions you have, one at a time or in a block.",
  alternates: { canonical: "/costs" },
};

export default function CostsPage() {
  return (
    <>
      <PageIntro
        title="Costs"
        lead="No joining fee and no contract. Pay for the sessions you have, one at a time or in a block if you prefer to lock in a regular slot."
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
          {site.pricing.map((p) => (
            <PriceCard key={p.label} tier={p} />
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 34 }}>
          {site.policies.map((pol) => (
            <Card key={pol.title} tone="sage">
              <h3 style={{ fontSize: 21, margin: "0 0 10px" }}>{pol.title}</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "#33453A" }}>{pol.body}</p>
            </Card>
          ))}
        </div>
      </PageIntro>

      <CtaBand />
    </>
  );
}
