import type { Metadata } from "next";
import { site } from "@/content/site";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Tutoring terms",
  description:
    "Simple tutoring terms covering bookings, payment, cancellations, face to face sessions, safeguarding, recordings and progress.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const { title, updated, sections } = site.legal.terms;
  return <LegalPage title={title} updated={updated} sections={sections} />;
}
