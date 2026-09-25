import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { getIcon } from "@/lib/icons";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Chip } from "@/components/Chip";
import { Button } from "@/components/Button";
import { BlobImage } from "@/components/BlobImage";
import { CtaBand } from "@/components/CtaBand";
import { Testimonials, publishedTestimonials } from "@/components/site/Testimonials";

const page = site.localPage;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/tutoring-waterlooville" },
};

export default function WaterloovillePage() {
  return (
    <>
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 34, alignItems: "center" }}>
          <div>
            <p className="gm-eyebrow" style={{ margin: "0 0 12px" }}>{page.eyebrow}</p>
            <h1 style={{ fontSize: "var(--text-h1-page)", marginBottom: 14 }}>{page.heading}</h1>
            <p className="gm-lead" style={{ maxWidth: "52ch", marginBottom: 22 }}>{page.intro}</p>
            <Button href="/contact">{page.cta}</Button>
          </div>
          <BlobImage src="/brand/waterlooville.webp" alt={page.imageAlt} variant="b" minHeight={300} />
        </div>
      </Section>

      <Section tone="sage">
        <h2 style={{ marginBottom: 8 }}>{page.areasHeading}</h2>
        <p className="gm-lead" style={{ maxWidth: "62ch", marginBottom: 20 }}>{page.areasLead}</p>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: 8, listStyle: "none", margin: "0 0 40px", padding: 0 }}>
          {site.business.areasCovered.map((a) => (
            <li key={a}>
              <Chip label={a} />
            </li>
          ))}
        </ul>

        <h2 style={{ marginBottom: 8 }}>{page.optionsHeading}</h2>
        <p className="gm-lead" style={{ maxWidth: "62ch", marginBottom: 20 }}>{page.optionsNote}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
          {page.options.map((o) => {
            const Icon = getIcon(o.icon);
            return (
              <Card key={o.title}>
                <span
                  aria-hidden
                  style={{ display: "grid", placeItems: "center", width: 46, height: 46, borderRadius: "50%", background: "var(--color-sage-pale)", color: "var(--color-ink)", marginBottom: 14 }}
                >
                  <Icon size={20} strokeWidth={1.9} />
                </span>
                <p style={{ margin: "0 0 6px", fontWeight: 800, fontSize: 19, color: "var(--color-ink)" }}>{o.title}</p>
                <p style={{ margin: "0 0 6px", fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 700, lineHeight: 1, color: "var(--color-green)" }}>
                  {o.price}
                </p>
                <p style={{ margin: 0, fontSize: "15.5px", lineHeight: 1.6, color: "var(--color-body)" }}>{o.note}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          <Card tone="sage">
            <h2 style={{ fontSize: 22, margin: "0 0 10px" }}>{page.safeguardingHeading}</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--color-body-dark)" }}>{page.safeguarding}</p>
          </Card>
          <Card tone="sage">
            <h2 style={{ fontSize: 22, margin: "0 0 10px" }}>{page.contactHeading}</h2>
            <p style={{ margin: "0 0 12px", fontSize: 16, lineHeight: 1.65, color: "var(--color-body-dark)" }}>{page.contactLead}</p>
            <a
              href={`mailto:${site.business.email}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 10, minHeight: 44, fontWeight: 800, color: "var(--color-green)", wordBreak: "break-word" }}
            >
              <Mail size={18} aria-hidden />
              {site.business.email}
            </a>
          </Card>
        </div>
      </Section>

      {publishedTestimonials().length > 0 && (
        <Section tone="sage">
          <Testimonials />
        </Section>
      )}
      <CtaBand />
    </>
  );
}
