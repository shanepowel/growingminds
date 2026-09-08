"use client";

import { useActionState, useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import { site } from "@/content/site";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";
import { Turnstile } from "./Turnstile";
import { Chip } from "@/components/Chip";

const initialState: EnquiryState = { status: "idle" };

export function ContactForm() {
  const isWaitlist = site.status === "waitlist";
  const copy = isWaitlist ? site.form.waitlist : site.form.accepting;

  const [state, formAction, isPending] = useActionState(submitEnquiry, initialState);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [mode, setMode] = useState<string>("");
  const [consent, setConsent] = useState(false);

  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div className="gm-card">
        <div
          aria-hidden
          style={{ width: 54, height: 54, borderRadius: "50%", background: "var(--color-green)", color: "#fff", display: "grid", placeItems: "center", marginBottom: 16 }}
        >
          <Check size={26} strokeWidth={3} />
        </div>
        <h2 style={{ fontSize: 26, margin: "0 0 10px" }}>{site.form.success.title}</h2>
        <p style={{ margin: "0 0 18px", fontSize: "16.5px", lineHeight: 1.7, color: "var(--color-body)" }}>
          {site.form.success.lead}
        </p>
        <a href={site.business.phoneHref} className="gm-btn gm-btn-primary">
          Call {site.business.phone}
        </a>
      </div>
    );
  }

  const toggleSubject = (label: string) =>
    setSubjects((cur) => (cur.includes(label) ? cur.filter((x) => x !== label) : [...cur, label]));

  return (
    <form action={formAction} className="gm-card">
      <h2 style={{ fontSize: 24, margin: "0 0 4px" }}>{copy.title}</h2>
      <p style={{ margin: "0 0 22px", fontSize: "15.5px", lineHeight: 1.6, color: "var(--color-body)" }}>{copy.lead}</p>

      <div style={{ display: "grid", gap: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
          <div>
            <label htmlFor="gm-name" className="gm-label">Your name</label>
            <input id="gm-name" name="name" type="text" autoComplete="name" placeholder="Jo Bloggs" className="gm-field" />
          </div>
          <div>
            <label htmlFor="gm-email" className="gm-label">Email</label>
            <input
              id="gm-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jo@example.com"
              aria-invalid={!!errors.email}
              className={`gm-field ${errors.email ? "gm-field-error" : ""}`}
            />
            {errors.email && <p style={{ margin: "6px 0 0", fontSize: "13.5px", fontWeight: 700, color: "var(--color-danger)" }}>{errors.email}</p>}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
          <div>
            <label htmlFor="gm-phone" className="gm-label">
              Phone <span style={{ fontWeight: 600, color: "var(--color-muted)" }}>(optional)</span>
            </label>
            <input id="gm-phone" name="phone" type="tel" autoComplete="tel" placeholder="07000 000000" className="gm-field" />
          </div>
          <div>
            <label htmlFor="gm-year" className="gm-label">Child&rsquo;s year group</label>
            <select id="gm-year" name="yearGroup" defaultValue={site.form.yearGroups[0]} className="gm-field">
              {site.form.yearGroups.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>

        <fieldset style={{ margin: 0, border: 0, padding: 0 }}>
          <legend className="gm-label" style={{ marginBottom: 8 }}>Subjects you are interested in</legend>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {site.subjects.map((s) => (
              <Chip key={s.slug} label={s.title} selected={subjects.includes(s.title)} onToggle={() => toggleSubject(s.title)} />
            ))}
          </div>
          {subjects.map((s) => (
            <input key={s} type="hidden" name="subjects" value={s} />
          ))}
        </fieldset>

        <fieldset style={{ margin: 0, border: 0, padding: 0 }}>
          <legend className="gm-label" style={{ marginBottom: 8 }}>Where would you like sessions?</legend>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {site.form.modeOptions.map((m) => (
              <Chip key={m.id} label={m.label} selected={mode === m.id} onToggle={() => setMode(m.id)} />
            ))}
          </div>
          {mode && <input type="hidden" name="mode" value={mode} />}
        </fieldset>

        <div>
          <label htmlFor="gm-msg" className="gm-label">How can I help?</label>
          <textarea
            id="gm-msg"
            name="message"
            rows={4}
            placeholder="A sentence or two about how your child is getting on and what you would like help with."
            aria-invalid={!!errors.message}
            className={`gm-field ${errors.message ? "gm-field-error" : ""}`}
            style={{ resize: "vertical", lineHeight: 1.55 }}
          />
          {errors.message ? (
            <p style={{ margin: "6px 0 0", fontSize: "13.5px", fontWeight: 700, color: "var(--color-danger)" }}>{errors.message}</p>
          ) : (
            <p style={{ margin: "6px 0 0", fontSize: "13.5px", color: "var(--color-muted)" }}>{site.form.childDataHint}</p>
          )}
        </div>

        <button
          type="button"
          aria-pressed={consent}
          onClick={() => setConsent((v) => !v)}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
            borderRadius: 12,
            border: `1.5px solid ${errors.consent ? "var(--color-danger)" : "var(--color-sage-line)"}`,
            background: "#F7FAF4",
            padding: 14,
            textAlign: "left",
            cursor: "pointer",
          }}
        >
          <span
            aria-hidden
            style={{
              marginTop: 1,
              flex: "0 0 auto",
              width: 22,
              height: 22,
              borderRadius: 6,
              border: "2px solid var(--color-green)",
              background: consent ? "var(--color-green)" : "transparent",
              color: "#fff",
              display: "grid",
              placeItems: "center",
            }}
          >
            {consent && <Check size={13} strokeWidth={3} />}
          </span>
          <span style={{ fontSize: "14.5px", lineHeight: 1.55, color: "var(--color-body-dark)" }}>
            I am happy for Sam to use these details to reply to my enquiry, as described in the{" "}
            <Link href="/policies?tab=privacy">privacy notice</Link>.
          </span>
        </button>
        {consent && <input type="hidden" name="consent" value="on" />}
        {errors.consent && <p style={{ margin: 0, fontSize: "13.5px", fontWeight: 700, color: "var(--color-danger)" }}>{errors.consent}</p>}

        <Turnstile />

        {errors.form && (
          <div
            role="alert"
            style={{ borderRadius: 11, border: "1px solid rgba(179,38,30,.4)", background: "rgba(179,38,30,.05)", padding: "12px 16px", fontSize: "14.5px", fontWeight: 700, color: "var(--color-danger)" }}
          >
            {errors.form}
          </div>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14 }}>
          <button type="submit" disabled={isPending} className="gm-btn gm-btn-primary" style={{ opacity: isPending ? 0.8 : 1 }}>
            <span>{isPending ? "Sending…" : copy.submit}</span>
          </button>
          <p style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.5, color: "var(--color-muted)" }}>
            Protected by an invisible spam check.
            <br />
            No cookies, no marketing lists.
          </p>
        </div>
      </div>
    </form>
  );
}
