import type { Metadata } from "next";
import { withSocialIcons } from "@/components/site/SocialIcon";
import { Section } from "@/components/Section";
import { PageIntro } from "@/components/PageIntro";
import { CtaBand } from "@/components/CtaBand";
import { Faqs } from "@/components/site/Faqs";
import { FaqJsonLd } from "@/components/site/JsonLd";

export const metadata: Metadata = {
  title: "Questions parents ask",
  description:
    "Answers to common questions about KS1 tutoring: ages, sessions, online learning, supporting your child, homework, safeguarding and data.",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <FaqJsonLd />
      <PageIntro
        narrow
        title="Questions parents ask"
        lead={withSocialIcons("If yours is not here, send me an enquiry or message me on Facebook or Instagram and I will answer honestly, even if the answer is that I am not the right fit.")}
      />
      <Section narrow>
        <Faqs />
      </Section>
      <CtaBand />
    </>
  );
}
