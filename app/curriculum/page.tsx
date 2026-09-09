import type { Metadata } from "next";
import { site } from "@/content/site";
import { getIcon } from "@/lib/icons";
import { Section } from "@/components/Section";
import { PageIntro } from "@/components/PageIntro";
import { ModeTabs } from "@/components/ModeTabs";
import { StepList } from "@/components/StepList";
import { SubjectCard } from "@/components/SubjectCard";
import { ScriptNote } from "@/components/ScriptNote";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Curriculum",
  description:
    "How a session works, then everything I teach: Maths, Early Reading, Phonics, Handwriting and Literacy, aligned to the Key Stage 1 national curriculum.",
  alternates: { canonical: "/curriculum" },
};

export default function CurriculumPage() {
  return (
    <>
      <PageIntro
        kicker="What we actually do"
        title="Curriculum"
        lead="How a session works, then everything I teach. All of it aligned to the Key Stage 1 national curriculum and to the phonics scheme your child's school follows."
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {site.subjects.map((s) => {
            const Icon = getIcon(s.icon);
            return (
              <span
                key={s.slug}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  background: "#fff",
                  border: "1px solid var(--color-sage-line)",
                  color: "var(--color-ink)",
                  padding: "9px 16px 9px 10px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "var(--color-sage-pale)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--color-green)",
                  }}
                >
                  <Icon size={15} strokeWidth={1.9} />
                </span>
                {s.title}
              </span>
            );
          })}
        </div>
      </PageIntro>

      <Section tone="sage">
        <h2 style={{ marginBottom: 12 }}>How a session works</h2>
        <p className="gm-lead" style={{ maxWidth: "62ch", marginBottom: 26 }}>
          Three ways to have a session. You can mix them, and you can change your mind after a few weeks if
          something else would suit better.
        </p>
        <ModeTabs />
      </Section>

      <Section narrow>
        <h2 style={{ margin: "0 0 8px" }}>Getting started</h2>
        <p className="gm-lead" style={{ maxWidth: "58ch", marginBottom: 26 }}>
          Four steps, no paperwork, nothing to sign.
        </p>
        <StepList />
      </Section>

      <Section narrow>
        <h2 style={{ margin: "0 0 10px" }}>What I teach</h2>
        <p className="gm-lead" style={{ maxWidth: "60ch", marginBottom: 34 }}>
          Five subjects, all KS1 aligned. We start with a quick, gentle look at where your child is, then build
          from there.
        </p>
        <div style={{ display: "grid", gap: 26 }}>
          {site.subjects.map((s, i) => {
            const Icon = getIcon(s.icon);
            return <SubjectCard key={s.slug} subject={s} index={i} icon={<Icon size={24} strokeWidth={1.9} />} />;
          })}
        </div>
        <div
          className="gm-shaped"
          style={{
            marginTop: 34,
            background: "var(--color-paper)",
            border: "1px dashed var(--color-sage-line)",
            borderRadius: "var(--radius-card)",
            padding: "var(--space-card)",
            textAlign: "center",
          }}
        >
          <ScriptNote>Every session is personalised</ScriptNote>
          <p style={{ margin: "8px auto 0", maxWidth: "58ch", fontSize: 17, lineHeight: 1.65, color: "var(--color-body-dark)" }}>
            No two children need the same thing, so no two sessions look the same. I plan around your child, their
            school&rsquo;s methods and whatever is worrying them most this week.
          </p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
