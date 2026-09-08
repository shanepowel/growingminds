import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageIntro } from "@/components/PageIntro";
import { InsightCard } from "@/components/InsightCard";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Insights",
  description: "Short, practical notes for parents of Reception, Year 1 and Year 2 children on phonics, maths, reading and handwriting.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageIntro
        title="Insights"
        lead="Short, practical notes for parents of Reception, Year 1 and Year 2 children. Written from fifteen years of watching where KS1 children get stuck, and what actually helps at home."
        narrow
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {site.insights.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </PageIntro>

      <CtaBand />
    </>
  );
}
