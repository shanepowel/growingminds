import type { Metadata } from "next";
import { site } from "@/content/site";
import { getIcon } from "@/lib/icons";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";
import { ScriptNote } from "@/components/ScriptNote";
import { Cta } from "@/components/Cta";
import { CheckItem } from "@/components/site/Check";
import { HowItWorks } from "@/components/site/HowItWorks";

export const metadata: Metadata = {
  title: "Subjects, sessions and prices",
  description:
    "KS1 tutoring in Maths, Early Reading, Phonics, Handwriting and Literacy, how a session works online or face to face, and simple pricing with no contract.",
  alternates: { canonical: "/tutoring" },
};

export default function TutoringPage() {
  return (
    <>
      {/* Subjects */}
      <PageHero
        title="What I tutor"
        lead="Everything here is aligned to the Key Stage 1 national curriculum for Year 1 and Year 2, and to the phonics scheme your child's school follows. We start with a quick, gentle look at where they are, then build from there."
      />
      <Section>
        {site.subjects.map((s) => {
          const Icon = getIcon(s.icon);
          return (
            <div
              key={s.slug}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 28,
                borderTop: "1px dashed var(--color-sage-line)",
                padding: "30px 0",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                  <span
                    aria-hidden
                    style={{ width: 50, height: 50, borderRadius: "50%", background: "var(--color-sage-pale)", color: "var(--color-ink)", display: "grid", placeItems: "center" }}
                  >
                    <Icon size={22} strokeWidth={1.9} />
                  </span>
                  <h2 style={{ margin: 0, fontSize: 30 }}>{s.title}</h2>
                </div>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: "var(--color-body-dark)" }}>{s.long}</p>
              </div>
              <Card>
                <p className="gm-eyebrow" style={{ margin: "0 0 12px" }}>What we work on</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {s.outcomes.map((o, i) => (
                    <CheckItem key={i} size={20}>
                      {o}
                    </CheckItem>
                  ))}
                </ul>
                <div style={{ borderTop: "1px dashed var(--color-sage-line)", margin: "14px 0 12px" }} />
                <p className="gm-eyebrow" style={{ margin: "0 0 8px" }}>A typical session</p>
                <p style={{ margin: 0, fontSize: "15.5px", lineHeight: 1.6, color: "var(--color-body)" }}>{s.session}</p>
              </Card>
            </div>
          );
        })}

        <div style={{ borderTop: "1px dashed var(--color-sage-line)", paddingTop: 30, marginTop: 10, textAlign: "center" }}>
          <ScriptNote>Every session is personalised</ScriptNote>
          <p style={{ margin: "8px auto 0", maxWidth: "58ch", fontSize: 17, lineHeight: 1.65, color: "var(--color-body-dark)" }}>
            No two children need the same thing, so no two sessions look the same. I plan around your child, their
            school&rsquo;s methods and whatever is worrying them most this week.
          </p>
        </div>
      </Section>

      {/* How a session works */}
      <Section id="how-it-works" tone="sage">
        <Eyebrow>How a session works</Eyebrow>
        <h2 style={{ marginBottom: 14 }}>Three ways to learn</h2>
        <p className="gm-lead" style={{ maxWidth: "62ch", marginBottom: 32 }}>
          Three ways to have a session. You can mix them, and change your mind after a few weeks if something else would
          suit better.
        </p>

        <HowItWorks />

        <div style={{ marginTop: 44 }}>
          <h3 style={{ fontSize: "var(--text-h2)", margin: "0 0 24px" }}>Getting started</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 18 }}>
            {site.gettingStarted.map((step) => (
              <Card key={step.n}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 700, lineHeight: 1, color: "var(--color-green-soft)", marginBottom: 8 }}>
                  {step.n}
                </div>
                <p style={{ margin: "0 0 6px", fontWeight: 800, fontSize: 18, color: "var(--color-ink)" }}>{step.title}</p>
                <p style={{ margin: 0, fontSize: "15.5px", lineHeight: 1.55, color: "var(--color-body)" }}>{step.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing">
        <Eyebrow>Pricing</Eyebrow>
        <h2 style={{ marginBottom: 14 }}>Simple and clear</h2>
        <p className="gm-lead" style={{ maxWidth: "62ch", marginBottom: 32 }}>
          No joining fee and no contract. Pay for the sessions you have, one at a time or in a block if you prefer to
          lock in a regular slot.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
          {site.pricing.map((p) => (
            <Card key={p.label}>
              <p style={{ margin: 0, fontWeight: 800, fontSize: 18, color: "var(--color-ink)" }}>{p.label}</p>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 700, lineHeight: 1, color: "var(--color-green)", margin: "8px 0" }}>
                {p.price}
              </div>
              <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "var(--color-green-mid)" }}>{p.duration}</p>
              <p style={{ margin: "6px 0 0", fontSize: "15.5px", lineHeight: 1.6, color: "var(--color-body)" }}>{p.note}</p>
            </Card>
          ))}
        </div>

        <div style={{ marginTop: 34, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {site.policies.map((pol) => (
            <Card key={pol.title} tone="sage">
              <h3 style={{ fontSize: 21, margin: "0 0 10px" }}>{pol.title}</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "#33453a" }}>{pol.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Cta />
    </>
  );
}
