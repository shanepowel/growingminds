import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { site } from "@/content/site";
import { getIcon } from "@/lib/icons";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Cta } from "@/components/Cta";
import { Testimonials } from "@/components/site/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* I specialise in + how it works */}
      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 34,
            alignItems: "start",
          }}
        >
          <Card tone="sage">
            <h2 style={{ fontSize: 26, marginBottom: 18 }}>I specialise in</h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {site.subjects.map((s) => (
                <li key={s.slug} style={{ display: "flex", gap: 13, alignItems: "flex-start", padding: "9px 0" }}>
                  <span
                    aria-hidden
                    style={{
                      flex: "0 0 auto",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "var(--color-green)",
                      color: "#fff",
                      display: "grid",
                      placeItems: "center",
                      marginTop: 2,
                    }}
                  >
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span>
                    <span style={{ display: "block", fontWeight: 800, fontSize: 18, color: "var(--color-ink)" }}>
                      {s.title}
                    </span>
                    <span style={{ display: "block", fontSize: 15, color: "var(--color-body)", lineHeight: 1.5 }}>
                      {s.blurb}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <div style={{ borderTop: "1px dashed var(--color-green-soft)", margin: "16px 0 14px" }} />
            <p style={{ margin: 0, fontWeight: 800, color: "var(--color-green)", fontSize: 16 }}>
              KS1 specialist tutoring
            </p>
            <p style={{ margin: 0, fontSize: 15, color: "var(--color-body)" }}>
              Sessions available online or face to face.
            </p>
          </Card>

          <div>
            <Eyebrow>How it works</Eyebrow>
            <h2 style={{ marginBottom: 12 }}>Three ways to learn</h2>
            <p className="gm-lead" style={{ margin: "0 0 22px", maxWidth: "48ch" }}>
              Pick whatever fits your family. Some children settle best at their own kitchen table, others love the
              novelty of a shared whiteboard.
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              {site.modes.map((m) => {
                const Icon = getIcon(m.icon);
                return (
                  <Card key={m.id} href="/tutoring#how-it-works">
                    <span style={{ display: "flex", gap: 16, alignItems: "center" }}>
                      <span
                        aria-hidden
                        style={{
                          flex: "0 0 auto",
                          width: 46,
                          height: 46,
                          borderRadius: "50%",
                          background: "var(--color-sage-pale)",
                          color: "var(--color-ink)",
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <Icon size={20} strokeWidth={1.9} />
                      </span>
                      <span style={{ minWidth: 0 }}>
                        <span style={{ display: "block", fontWeight: 800, fontSize: 18, color: "var(--color-ink)" }}>
                          {m.title}
                        </span>
                        <span style={{ display: "block", fontSize: 15, color: "var(--color-body)", lineHeight: 1.5 }}>
                          {m.short}
                        </span>
                      </span>
                      <ChevronRight size={20} aria-hidden style={{ marginInlineStart: "auto", color: "var(--color-green-mid)", flex: "0 0 auto" }} />
                    </span>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="sage">
        <Testimonials />
      </Section>

      {/* Pricing teaser + FAQ teaser */}
      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 34,
            alignItems: "start",
          }}
        >
          <Card tone="dark">
            <p className="gm-eyebrow" style={{ color: "var(--color-sage)", margin: "0 0 10px" }}>
              Pricing
            </p>
            <h2 style={{ color: "#fff", margin: "0 0 8px" }}>Simple and clear</h2>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, margin: "14px 0 6px" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 52, fontWeight: 700, lineHeight: 1, color: "#fff" }}>
                {site.pricingSummary.headlinePrice}
              </span>
              <span style={{ color: "var(--color-on-dark)", fontSize: 16 }}>{site.pricingSummary.per}</span>
            </div>
            <p style={{ fontSize: "15.5px", color: "var(--color-on-dark)", lineHeight: 1.6, margin: "0 0 20px" }}>
              {site.pricingSummary.note}
            </p>
            <Button href="/tutoring#pricing" variant="onDark">
              See full pricing
            </Button>
          </Card>

          <div>
            <h2 style={{ margin: "0 0 18px" }}>Common questions</h2>
            {site.faqTeaser.map((f, i) => (
              <div key={i} style={{ borderBottom: "1px dashed var(--color-sage-line)", padding: "14px 0" }}>
                <p style={{ margin: "0 0 5px", fontWeight: 800, fontSize: 17, color: "var(--color-ink)" }}>{f.q}</p>
                <p style={{ margin: 0, fontSize: "15.5px", color: "var(--color-body)", lineHeight: 1.6 }}>{f.a}</p>
              </div>
            ))}
            <Link
              href="/faqs"
              style={{ display: "inline-block", marginTop: 18, fontWeight: 800, fontSize: 16, color: "var(--color-green)" }}
            >
              All questions answered &rarr;
            </Link>
          </div>
        </div>
      </Section>

      <Cta />
    </>
  );
}
