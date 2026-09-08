import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { PageIntro } from "@/components/PageIntro";
import { CtaBand } from "@/components/CtaBand";
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
      <PageIntro
        narrow
        title="Questions parents ask"
        lead="If yours is not here, send me an enquiry or message the Facebook page and I will answer honestly, even if the answer is that I am not the right fit."
      />
      <Section narrow>
        <Faqs />
      </Section>
      <CtaBand />
    </>
  );
}
