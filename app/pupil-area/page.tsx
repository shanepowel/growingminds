import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { getIcon } from "@/lib/icons";
import { resolveLink, pupilSignInHref } from "@/lib/content";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Pupil area",
  description:
    "For current families: everything for your child's sessions lives in your own Google Classroom, plus the session whiteboard and video link.",
  alternates: { canonical: "/pupil-area" },
};

export default function PupilAreaPage() {
  const signInHref = pupilSignInHref();

  return (
    <Section narrow>
      <p className="gm-eyebrow" style={{ margin: "0 0 12px" }}>{site.pupilArea.signIn.eyebrow}</p>
      <h1 style={{ fontSize: "var(--text-h1-page)", marginBottom: 14 }}>{site.pupilArea.signIn.title}</h1>
      <p className="gm-lead" style={{ maxWidth: "62ch", marginBottom: 8 }}>{site.pupilArea.signIn.body}</p>
      <p style={{ margin: "0 0 24px", maxWidth: "62ch", fontSize: 16, lineHeight: 1.65, color: "var(--color-body)" }}>
        {site.pupilArea.signIn.reassurance}
      </p>
      <div style={{ marginBottom: 40 }}>
        <Button href={signInHref}>{site.pupilArea.signIn.cta}</Button>
      </div>

      <h2 style={{ fontSize: "var(--text-h2)", marginBottom: 18 }}>{site.pupilArea.signIn.onceInHeading}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 18 }}>
        {site.pupilArea.links.map((l) => {
          const Icon = getIcon(l.icon);
          const href = resolveLink(l.href, l.fallback);
          return (
            <a key={l.title} href={href} target="_blank" rel="noreferrer" className="gm-card gm-card-link" style={{ display: "block" }}>
              <span
                aria-hidden
                style={{ display: "grid", placeItems: "center", width: 46, height: 46, borderRadius: "50%", background: "var(--color-sage-pale)", color: "var(--color-ink)", marginBottom: 10 }}
              >
                <Icon size={20} strokeWidth={1.9} />
              </span>
              <span style={{ display: "block", fontWeight: 800, fontSize: 19, color: "var(--color-ink)" }}>{l.title}</span>
              <span style={{ display: "block", fontSize: "15.5px", lineHeight: 1.6, color: "var(--color-body)", margin: "8px 0" }}>{l.body}</span>
              <span style={{ display: "block", fontWeight: 800, fontSize: 15, color: "var(--color-green)" }}>{l.cta} &rarr;</span>
            </a>
          );
        })}
      </div>

      <div style={{ marginTop: 40 }}>
        <Card tone="sage">
          <p className="gm-eyebrow" style={{ margin: "0 0 10px" }}>{site.pupilArea.safety.heading}</p>
          <p style={{ margin: "0 0 18px", maxWidth: "64ch", fontSize: "16.5px", lineHeight: 1.65, color: "var(--color-body-dark)" }}>
            {site.pupilArea.safety.lead}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {site.pupilArea.safety.cards.map((c) => (
              <div key={c.h}>
                <p style={{ margin: "0 0 4px", fontWeight: 800, fontSize: 16, color: "var(--color-ink)" }}>{c.h}</p>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--color-body-dark)" }}>{c.p}</p>
              </div>
            ))}
          </div>
          <p style={{ margin: "18px 0 0", fontSize: "14.5px", lineHeight: 1.6, color: "var(--color-body)" }}>
            {site.pupilArea.safety.footnote} See the{" "}
            <Link href="/policies?tab=privacy">privacy notice</Link>.
          </p>
        </Card>
      </div>
    </Section>
  );
}
