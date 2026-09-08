import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site } from "@/content/site";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";

export function generateStaticParams() {
  return site.insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = site.insights.find((i) => i.slug === slug);
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
  const insight = site.insights.find((i) => i.slug === slug);
  if (!insight) notFound();

  return (
    <>
      <PageIntro
        kicker={insight.tag}
        title={insight.title}
        lead={insight.blurb}
        narrow
      />
      <Section narrow>
        <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--color-body-dark)", margin: "0 0 22px" }}>
          The full note is on its way. In the meantime, get in touch and I am happy to talk through this one
          directly.
        </p>
        <Link href="/insights" style={{ fontWeight: 800, fontSize: 16 }}>
          &larr; Back to Insights
        </Link>
      </Section>
      <CtaBand />
    </>
  );
}
