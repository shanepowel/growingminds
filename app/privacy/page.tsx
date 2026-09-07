import type { Metadata } from "next";
import { site } from "@/content/site";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "How Growing Minds Tutoring collects, uses and protects your data, written with UK GDPR and the ICO Children's Code in mind.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const { title, updated, sections } = site.legal.privacy;
  return <LegalPage title={title} updated={updated} sections={sections} />;
}
