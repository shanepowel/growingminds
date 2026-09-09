import type { Metadata } from "next";
import { site } from "@/content/site";
import { getIcon } from "@/lib/icons";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Chip } from "@/components/Chip";
import { Button } from "@/components/Button";
import { BlobImage } from "@/components/BlobImage";
import { CtaBand } from "@/components/CtaBand";
import { Testimonials } from "@/components/site/Testimonials";

export const metadata: Metadata = {
  title: "KS1 tutoring in Portsmouth",
  description:
    "A Portsmouth based primary school teacher offering KS1 tutoring for Reception, Year 1 and Year 2, online or face to face across Portsmouth and nearby towns.",
  alternates: { canonical: "/tutoring-portsmouth" },
};

export default function PortsmouthPage() {
  return (
    <>
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 34, alignItems: "center" }}>
          <div>
            <p className="gm-eyebrow" style={{ margin: "0 0 12px" }}>Portsmouth and surrounding areas</p>
            <h1 style={{ fontSize: "var(--text-h1-page)", marginBottom: 14 }}>KS1 tutoring in Portsmouth</h1>
            <p className="gm-lead" style={{ maxWidth: "52ch", marginBottom: 22 }}>
              I am a Portsmouth based primary school teacher offering one to one tutoring for Reception, Year 1 and Year
              2 children, online, at my home, or at yours across the city and nearby towns.
            </p>
            <Button href="/contact">Enquire about a Portsmouth slot</Button>
          </div>
          <BlobImage src="/brand/portsmouth.webp" alt="Travel radius across Portsmouth and nearby towns" variant="b" minHeight={300} />
        </div>
      </Section>

      <Section tone="sage">
        <h2 style={{ marginBottom: 8 }}>Areas I cover around Portsmouth</h2>
        <p className="gm-lead" style={{ maxWidth: "62ch", marginBottom: 20 }}>
          Face to face sessions at your home in any of these areas. Anywhere further afield, online works just as well
          and there is no travel to pay for.
        </p>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: 8, listStyle: "none", margin: "0 0 40px", padding: 0 }}>
          {site.business.areasCovered.map((a) => (
            <li key={a}>
              <Chip label={a} />
            </li>
          ))}
        </ul>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
          {site.modes.map((m) => {
            const Icon = getIcon(m.icon);
            return (
              <Card key={m.id}>
                <span
                  aria-hidden
                  style={{ display: "grid", placeItems: "center", width: 46, height: 46, borderRadius: "50%", background: "var(--color-sage-pale)", color: "var(--color-ink)", marginBottom: 14 }}
                >
                  <Icon size={20} strokeWidth={1.9} />
                </span>
                <p style={{ margin: "0 0 6px", fontWeight: 800, fontSize: 19, color: "var(--color-ink)" }}>{m.title}</p>
                <p style={{ margin: 0, fontSize: "15.5px", lineHeight: 1.6, color: "var(--color-body)" }}>{m.short}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section tone="sage">
        <Testimonials heading="From Portsmouth parents" showNote={false} />
      </Section>
      <CtaBand />
    </>
  );
}
