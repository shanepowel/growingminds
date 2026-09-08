"use client";

import { useState } from "react";
import { CheckList } from "./CheckList";
import { Chip } from "./Chip";
import { site } from "@/content/site";

/** "How a session works" on /curriculum. Three modes, keyboard reachable. */
export function ModeTabs() {
  const [active, setActive] = useState(site.modes[0].id);
  const mode = site.modes.find((m) => m.id === active) ?? site.modes[0];

  return (
    <div>
      <div role="tablist" aria-label="Ways to have a session"
        style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 26 }}>
        {site.modes.map((m) => {
          const on = m.id === active;
          return (
            <button key={m.id} role="tab" aria-selected={on} id={`tab-${m.id}`} aria-controls={`panel-${m.id}`}
              onClick={() => setActive(m.id)}
              style={{ cursor: "pointer", padding: "12px 22px", borderRadius: "var(--radius-pill)",
                fontWeight: 800, fontSize: "15.5px", minHeight: 44,
                border: `1.5px solid ${on ? "var(--color-ink)" : "#D7DECF"}`,
                background: on ? "var(--color-ink)" : "#fff", color: on ? "#fff" : "#33453A" }}>
              {m.title}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" id={`panel-${mode.id}`} aria-labelledby={`tab-${mode.id}`} className="gm-card"
        style={{ padding: 32, display: "grid", gap: 34, alignItems: "start",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        <div style={{ minWidth: 0 }}>
          <h3 style={{ fontSize: 29, marginBottom: 12 }}>{mode.title}</h3>
          <p style={{ margin: "0 0 18px", fontSize: 17, lineHeight: 1.7, color: "var(--color-body-dark)" }}>{mode.intro}</p>
          <CheckList items={mode.points} />
        </div>
        <div style={{ minWidth: 0 }}>
          {/* replace with <BlobImage> once Sam supplies the photo for this mode */}
          <div className="gm-blob" style={{ minHeight: 280, background: "var(--color-sage-pale)" }} />
          {mode.id === "yours" && (
            <ul style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18, listStyle: "none", padding: 0 }}>
              {site.business.areasCovered.map((a) => <li key={a}><Chip label={a} /></li>)}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
