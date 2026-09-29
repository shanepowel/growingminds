"use client";

import { Chip } from "./Chip";
import { BlobImage } from "./BlobImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { site } from "@/content/site";

/** "How a session works" on /curriculum. Three modes; arrow keys move between tabs. */
export function ModeTabs() {
  return (
    <Tabs defaultValue={site.modes[0].id}>
      <TabsList aria-label="Ways to have a session" className="mb-[26px]">
        {site.modes.map((m) => (
          <TabsTrigger key={m.id} value={m.id}>
            {m.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {site.modes.map((mode) => (
        <TabsContent key={mode.id} value={mode.id} className="gm-card"
          style={{ padding: 32, display: "grid", gap: 34, alignItems: "start",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div style={{ minWidth: 0 }}>
            <h3 style={{ fontSize: 29, marginBottom: 12 }}>{mode.heading}</h3>
            {mode.body.map((para, i) => (
              <p key={i} style={{ margin: "0 0 14px", fontSize: 17, lineHeight: 1.7, color: "var(--color-body-dark)" }}>{para}</p>
            ))}
          </div>
          <div style={{ minWidth: 0 }}>
            <BlobImage src={mode.image} alt={mode.imageAlt} variant="b" minHeight={280} />
            {"showAreas" in mode && mode.showAreas === true && (
              <ul style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18, listStyle: "none", padding: 0 }}>
                {site.business.areasCovered.map((a) => <li key={a}><Chip label={a} /></li>)}
              </ul>
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
