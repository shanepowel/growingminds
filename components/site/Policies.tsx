"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

type Tab = "privacy" | "terms";

function slugify(h: string) {
  return h
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function Policies() {
  const [tab, setTab] = useState<Tab>("privacy");

  // Deep links: /policies?tab=terms (and legacy #terms) select the tab.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("tab");
    const hash = window.location.hash.replace("#", "");
    if (q === "terms" || hash === "terms") setTab("terms");
    else if (q === "privacy" || hash === "privacy") setTab("privacy");
  }, []);

  const select = (t: Tab) => {
    setTab(t);
    if (typeof history !== "undefined") {
      history.replaceState(null, "", t === "terms" ? "?tab=terms" : "?tab=privacy");
    }
  };

  const doc = tab === "privacy" ? site.legal.privacy : site.legal.terms;
  const tabs: { id: Tab; label: string }[] = [
    { id: "privacy", label: "Privacy notice" },
    { id: "terms", label: "Tutoring terms" },
  ];

  return (
    <>
      <h1 style={{ fontSize: "var(--text-h1-page)", marginBottom: 16 }}>Policies</h1>

      <div role="tablist" aria-label="Policies" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 30 }}>
        {tabs.map((t) => {
          const selected = t.id === tab;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => select(t.id)}
              className={`gm-chip ${selected ? "gm-chip-on" : ""}`}
              style={{ cursor: "pointer" }}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <p style={{ margin: "0 0 30px", fontSize: "14.5px", color: "var(--color-muted)" }}>
        Last updated {doc.updated}
      </p>

      <nav aria-label="On this page" className="gm-card-sage" style={{ marginBottom: 34 }}>
        <p className="gm-eyebrow" style={{ margin: "0 0 12px" }}>
          On this page
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px" }}>
          {doc.sections.map((s) => (
            <a key={s.h} href={`#${slugify(s.h)}`} style={{ fontWeight: 700, fontSize: 15 }}>
              {s.h}
            </a>
          ))}
        </div>
      </nav>
      <div style={{ minWidth: 0 }}>
        {doc.sections.map((s) => (
          <div key={s.h} id={slugify(s.h)} style={{ marginBottom: 28, scrollMarginTop: 130 }}>
            <h2 style={{ fontSize: 22, margin: "0 0 10px" }}>{s.h}</h2>
            <p style={{ margin: 0, maxWidth: "68ch", fontSize: "16.5px", lineHeight: 1.75, color: "var(--color-body-dark)" }}>
              {s.p}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
