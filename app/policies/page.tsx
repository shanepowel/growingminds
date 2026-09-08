import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Policies } from "@/components/site/Policies";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Growing Minds Tutoring privacy notice and tutoring terms, written in plain English with UK GDPR and the ICO Children's Code in mind.",
  alternates: { canonical: "/policies" },
};

export default function PoliciesPage() {
  return (
    <Section narrow>
      <Policies />
    </Section>
  );
}
