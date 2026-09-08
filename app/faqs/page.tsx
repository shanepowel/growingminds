import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Cta } from "@/components/Cta";
import { Faqs } from "@/components/site/Faqs";
import { FaqJsonLd } from "@/components/site/JsonLd";

export const metadata: Metadata = {
  title: "Questions parents ask",
  description:
    "Answers to common questions about KS1 tutoring: ages, session numbers, online sessions, recordings, additional needs, safeguarding and data.",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <FaqJsonLd />
      <Section narrow>
        <h1 style={{ fontSize: "var(--text-h1-page)", marginBottom: 14 }}>Questions parents ask</h1>
        <p className="gm-lead" style={{ maxWidth: "62ch", marginBottom: 34 }}>
          If yours is not here, message me on Facebook or call and I will answer honestly, even if the answer is that I
          am not the right fit.
        </p>
        <Faqs />
      </Section>
      <Cta />
    </>
  );
}
