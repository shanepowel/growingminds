"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { CheckItem } from "./Check";
import { BlobImage } from "@/components/BlobImage";
import { Chip } from "@/components/Chip";

export function HowItWorks() {
  const [activeId, setActiveId] = useState<string>(site.modes[0].id);
  const active = site.modes.find((m) => m.id === activeId) ?? site.modes[0];

  return (
    <>
      <div role="tablist" aria-label="Delivery modes" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 26 }}>
        {site.modes.map((m) => {
          const selected = m.id === activeId;
          return (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveId(m.id)}
              className={`gm-chip ${selected ? "gm-chip-on" : ""}`}
              style={{ cursor: "pointer" }}
            >
              {m.title}
            </button>
          );
        })}
      </div>

      <div
        className="gm-card"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 30,
          alignItems: "start",
        }}
      >
        <div>
          <h3 style={{ fontSize: 26, margin: "0 0 12px" }}>{active.title}</h3>
          <p style={{ margin: "0 0 18px", fontSize: 17, lineHeight: 1.7, color: "var(--color-body-dark)" }}>
            {active.intro}
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {active.points.map((p, i) => (
              <CheckItem key={i} size={22}>
                {p}
              </CheckItem>
            ))}
          </ul>
        </div>
        <div>
          <BlobImage src={active.image} alt={active.imageAlt} variant="b" minHeight={250} />
          {"showAreas" in active && active.showAreas && (
            <ul style={{ display: "flex", flexWrap: "wrap", gap: 8, listStyle: "none", margin: "16px 0 0", padding: 0 }}>
              {site.business.areasCovered.map((a) => (
                <li key={a}>
                  <Chip label={a} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
