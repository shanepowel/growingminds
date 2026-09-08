import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
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
      <PageHero
        narrow
        title="Questions parents ask"
        lead="If yours is not here, send me an enquiry or message the Facebook page and I will answer honestly, even if the answer is that I am not the right fit."
      />
      <Section narrow>
        <Faqs />
      </Section>
      <Cta />
    </>
  );
}
