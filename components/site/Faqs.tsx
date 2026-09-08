"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { site } from "@/content/site";

export function Faqs() {
  // One open at a time; first item open on load.
  const [openKey, setOpenKey] = useState("0-0");

  return (
    <>
      {site.faqs.map((group, gi) => (
        <div key={group.group} style={{ marginBottom: 30 }}>
          <p className="gm-eyebrow" style={{ margin: "0 0 12px" }}>
            {group.group}
          </p>
          {group.items.map((item, ii) => {
            const key = `${gi}-${ii}`;
            const open = key === openKey;
            const panelId = `faq-panel-${key}`;
            const btnId = `faq-btn-${key}`;
            return (
              <div
                key={key}
                style={{
                  overflow: "hidden",
                  borderRadius: 14,
                  border: "1px solid var(--color-rule-soft)",
                  background: "#fff",
                  marginBottom: 10,
                }}
              >
                <h3 style={{ margin: 0, fontSize: 17 }}>
                  <button
                    type="button"
                    id={btnId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenKey(open ? "" : key)}
                    style={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      gap: 14,
                      padding: "17px 20px",
                      background: "transparent",
                      border: 0,
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 17, lineHeight: 1.4, color: "var(--color-ink)" }}>
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      style={{
                        marginInlineStart: "auto",
                        flex: "0 0 auto",
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: "var(--color-sage-pale)",
                        color: "var(--color-green)",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      {open ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                </h3>
                {open && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    style={{ padding: "0 20px 19px", maxWidth: "70ch", fontSize: 16, lineHeight: 1.7, color: "var(--color-body)" }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}
