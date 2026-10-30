import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { InsightCard } from "@/components/InsightCard";
import { CtaBand } from "@/components/CtaBand";
import { listInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Short, practical notes for parents of Reception, Year 1 and Year 2 children on phonics, maths, reading and handwriting.",
  alternates: { canonical: "/insights" },
};

// Static with ISR: picks up new Sanity notes without a rebuild.
export const revalidate = 3600;

export default async function InsightsPage() {
  const insights = await listInsights();
  return (
    <>
      <PageIntro
        title="Insights"
        lead="Short, practical notes for parents of Reception, Year 1 and Year 2 children. Written from fifteen years of watching where KS1 children get stuck, and what actually helps at home."
        narrow
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {insights.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </PageIntro>

      <CtaBand />
    </>
  );
}
