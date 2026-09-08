import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { BlobImage } from "@/components/BlobImage";
import { ScriptNote } from "@/components/ScriptNote";
import { Card } from "@/components/Card";
import { Cta } from "@/components/Cta";
import { CheckItem } from "@/components/site/Check";
import { PersonJsonLd } from "@/components/site/JsonLd";

export const metadata: Metadata = {
  title: "About Sam",
  description:
    "Sam is a qualified primary school teacher with over 15 years in Key Stage 1, Enhanced DBS checked, tutoring in Portsmouth and online.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PersonJsonLd />
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 34, alignItems: "start" }}>
          <BlobImage src="/brand/sam-portrait.webp" alt="Portrait of Sam in daylight" minHeight={440} />
          <div>
            <ScriptNote>{`Hello, I'm ${site.tutor.name}`}</ScriptNote>
            <h1 style={{ fontSize: "var(--text-h1-page)", margin: "4px 0 6px" }}>{site.tutor.role}</h1>
            <p style={{ margin: "0 0 20px", fontWeight: 700, color: "var(--color-green)", fontSize: 17 }}>
              Over {site.tutor.yearsExperience} years in Key Stage 1, based in Portsmouth
            </p>
            {site.tutor.bio.map((para, i) => (
              <p key={i} style={{ margin: "0 0 16px", fontSize: "17.5px", lineHeight: 1.7, color: "var(--color-body-dark)" }}>
                {para}
              </p>
            ))}

            <Card tone="sage">
              <h2 style={{ fontSize: 22, margin: "0 0 14px" }}>Qualifications and checks</h2>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {site.tutor.qualifications.map((q, i) => (
                  <CheckItem key={i} size={22}>
                    {q}
                  </CheckItem>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        <div style={{ marginTop: 34 }}>
          <Card tone="sage">
            <p className="gm-eyebrow" style={{ margin: "0 0 10px" }}>Safeguarding</p>
            <h2 style={{ margin: "0 0 14px" }}>Your child&rsquo;s safety comes first</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {site.tutor.safeguarding.map((para, i) => (
                <p key={i} style={{ margin: 0, fontSize: "16.5px", lineHeight: 1.7, color: "var(--color-body-dark)" }}>
                  {para}
                </p>
              ))}
            </div>
          </Card>
        </div>

        <div style={{ marginTop: 34, maxWidth: "70ch" }}>
          <h2 style={{ margin: "0 0 12px" }}>Why I tutor</h2>
          <p style={{ margin: 0, fontSize: "17.5px", lineHeight: 1.7, color: "var(--color-body-dark)" }}>{site.tutor.whyITutor}</p>
        </div>
      </Section>
      <Cta />
    </>
  );
}
