import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { InsightBody } from "@/components/site/InsightBody";
import { getInsight, insightSlugs } from "@/lib/insights";

// Static with ISR: new or edited Sanity notes refresh without a rebuild.
export const revalidate = 3600;
export const dynamicParams = true;

export function generateStaticParams() {
  return insightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.blurb,
    alternates: { canonical: `/insights/${insight.slug}` },
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) notFound();

  return (
    <>
      <PageIntro kicker={insight.tag} title={insight.title} lead={insight.blurb} narrow />
      <Section narrow>
        <article style={{ maxWidth: "68ch" }}>
          <InsightBody value={insight.body} />
        </article>
        <Link href="/insights" style={{ display: "inline-block", marginTop: 12, fontWeight: 800, fontSize: 16 }}>
          &larr; Back to Insights
        </Link>
      </Section>
      <CtaBand />
    </>
  );
}
