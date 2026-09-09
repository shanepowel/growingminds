import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { facebookHref, hasHref } from "@/lib/content";
import { Section } from "@/components/Section";
import { PageIntro } from "@/components/PageIntro";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata: Metadata = {
  title: "Get in touch",
  description:
    "Send an enquiry about KS1 tutoring in Portsmouth or online. Sam replies within one working day. Message on Facebook too.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const paused = site.status === "paused";
  const fbHref = facebookHref();
  const showBooking = site.booking.enabled;
  const calConfigured = hasHref(site.booking.calUrl);

  return (
    <>
      <PageIntro
        title="Get in touch"
        lead="Tell me a little about your child using the form and I will reply by email within one working day. There is no obligation, and the first 15 minute chat is free."
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, alignItems: "start" }}>
        {paused ? (
          <div className="gm-card">
            <div
              aria-hidden
              style={{ width: 54, height: 54, borderRadius: "50%", background: "var(--color-warn)", color: "#3A2E0B", display: "grid", placeItems: "center", marginBottom: 16 }}
            >
              &#9203;
            </div>
            <h2 style={{ fontSize: 26, margin: "0 0 10px" }}>{site.form.paused.title}</h2>
            <p style={{ margin: 0, fontSize: "16.5px", lineHeight: 1.7, color: "var(--color-body)" }}>{site.form.paused.lead}</p>
          </div>
        ) : (
          <ContactForm />
        )}

        <div style={{ display: "grid", gap: 18 }}>
          <div className="gm-card-dark">
            <h2 style={{ color: "#fff", fontSize: 22, margin: "0 0 14px" }}>Or reach me directly</h2>
            <a
              href={`mailto:${site.business.email}`}
              style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(255,255,255,.08)", border: "1px solid rgba(220,232,206,.3)", borderRadius: 14, padding: "15px 16px", marginBottom: 10, color: "#fff" }}
            >
              <span aria-hidden style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--color-sage)", color: "var(--color-ink)", display: "grid", placeItems: "center" }}>
                <Mail size={18} />
              </span>
              <span style={{ minWidth: 0 }}>
                <span style={{ display: "block", fontWeight: 800, fontSize: 18, wordBreak: "break-word" }}>{site.business.email}</span>
                <span style={{ display: "block", fontSize: 14, color: "var(--color-on-dark)" }}>{site.business.emailNote}</span>
              </span>
            </a>
            <a
              href={fbHref}
              target="_blank"
              rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(255,255,255,.08)", border: "1px solid rgba(220,232,206,.3)", borderRadius: 14, padding: "15px 16px", color: "#fff" }}
            >
              <span aria-hidden style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--color-sage)", color: "var(--color-ink)", display: "grid", placeItems: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19 }}>
                f
              </span>
              <span>
                <span style={{ display: "block", fontWeight: 800, fontSize: 18 }}>{site.business.facebookPageName}</span>
                <span style={{ display: "block", fontSize: 14, color: "var(--color-on-dark)" }}>Message me on Facebook for enquiries and bookings</span>
              </span>
            </a>
            <p style={{ margin: "14px 0 0", fontSize: "14.5px", color: "var(--color-on-dark)", lineHeight: 1.6 }}>
              I reply within one working day, usually sooner.
            </p>
          </div>

          {showBooking && (
            <div className="gm-card">
              <h2 style={{ fontSize: 22, margin: "0 0 8px" }}>{site.booking.title}</h2>
              <p style={{ margin: "0 0 16px", fontSize: "15.5px", lineHeight: 1.6, color: "var(--color-body)" }}>{site.booking.body}</p>
              {calConfigured ? (
                <iframe
                  src={site.booking.calUrl}
                  title="Book a free 15 minute chat"
                  style={{ width: "100%", minHeight: 420, border: "1px solid var(--color-sage-line)", borderRadius: 14 }}
                />
              ) : (
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    minHeight: 190,
                    padding: 16,
                    textAlign: "center",
                    fontFamily: "ui-monospace, monospace",
                    fontSize: 12,
                    color: "#5f7355",
                    borderRadius: 14,
                    border: "1px dashed var(--color-sage-line)",
                    background: "linear-gradient(135deg, var(--color-sage-pale), var(--color-peach))",
                  }}
                >
                  Cal.com booking embed (add booking.calUrl in content/site.ts to enable)
                </div>
              )}
            </div>
          )}
        </div>
        </div>
      </PageIntro>
    </>
  );
}
