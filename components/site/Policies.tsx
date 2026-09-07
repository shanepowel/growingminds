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

  // Deep links: /policies#privacy and /policies#terms select the tab.
  useEffect(() => {
    const h = window.location.hash.replace("#", "");
    if (h === "terms" || h === "privacy") setTab(h);
  }, []);

  const select = (t: Tab) => {
    setTab(t);
    if (typeof history !== "undefined") {
      history.replaceState(null, "", `#${t}`);
    }
  };

  const doc = tab === "privacy" ? site.legal.privacy : site.legal.terms;

  const tabs: { id: Tab; label: string }[] = [
    { id: "privacy", label: "Privacy notice" },
    { id: "terms", label: "Tutoring terms" },
  ];

  return (
    <section className="mx-auto max-w-[1000px] px-6 section-y">
      <h1 className="font-display m-0 mb-4 text-[clamp(32px,4.6vw,50px)] font-bold leading-none text-deep">
        Policies
      </h1>

      <div role="tablist" aria-label="Policies" className="mb-8 flex flex-wrap gap-2">
        {tabs.map((t) => {
          const selected = t.id === tab;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => select(t.id)}
              className={`min-h-[44px] rounded-full border-2 px-5 py-2.5 text-[15.5px] font-extrabold transition-colors ${
                selected
                  ? "border-deep bg-deep text-white"
                  : "border-field-border bg-white text-[#33453a] hover:bg-sage-soft"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="mb-[30px] text-[14.5px] text-muted">
        Last updated {doc.updated}
      </div>

      <div className="grid grid-cols-1 items-start gap-[34px] md:grid-cols-[minmax(200px,240px)_minmax(0,1fr)]">
        <nav
          aria-label="On this page"
          className="rounded-[var(--radius-card)] border border-sage-mid bg-sage-soft p-[22px] md:sticky md:top-[130px]"
        >
          <div className="mb-3 text-[12.5px] font-extrabold tracking-[0.14em] text-leaf-light">
            ON THIS PAGE
          </div>
          {doc.sections.map((s) => (
            <a
              key={s.h}
              href={`#${slugify(s.h)}`}
              className="block py-[5px] text-[15px] font-bold leading-[1.4] text-leaf hover:text-deep"
            >
              {s.h}
            </a>
          ))}
        </nav>
        <div className="min-w-0">
          {doc.sections.map((s) => (
            <div key={s.h} id={slugify(s.h)} className="mb-7 scroll-mt-[130px]">
              <h2 className="font-display m-0 mb-2.5 text-[22px] font-semibold text-deep">
                {s.h}
              </h2>
              <p className="m-0 max-w-[68ch] text-[16.5px] leading-[1.75] text-body">
                {s.p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
