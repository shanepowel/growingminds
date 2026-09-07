import type { Metadata } from "next";
import { Cta } from "@/components/site/Cta";
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
      <section className="mx-auto max-w-[900px] px-6 section-y">
        <h1 className="font-display m-0 mb-3.5 text-[clamp(36px,5.4vw,58px)] font-bold leading-none text-deep">
          Questions parents ask
        </h1>
        <p className="m-0 mb-[34px] text-[18px] leading-[1.65] text-body">
          If yours is not here, message me on Facebook or call and I will answer
          honestly, even if the answer is that I am not the right fit.
        </p>
        <Faqs />
      </section>
      <Cta />
    </>
  );
}
