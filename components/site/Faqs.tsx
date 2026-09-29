"use client";

import { site } from "@/content/site";
import type { FaqBlock } from "@/lib/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Faqs() {
  // One open at a time; first item open on load.
  return (
    <Accordion type="single" collapsible defaultValue="0-0">
      {site.faqs.map((group, gi) => (
        <div key={group.group} style={{ marginBottom: 30 }}>
          <p className="gm-eyebrow" style={{ margin: "0 0 12px" }}>
            {group.group}
          </p>
          {group.items.map((item, ii) => (
            <AccordionItem key={`${gi}-${ii}`} value={`${gi}-${ii}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>
                {(item.a as readonly FaqBlock[]).map((block, bi) =>
                  typeof block === "string" ? (
                    <p key={bi} style={{ margin: bi === 0 ? 0 : "12px 0 0" }}>{block}</p>
                  ) : (
                    <ul key={bi} style={{ margin: bi === 0 ? 0 : "10px 0 0", paddingInlineStart: 22 }}>
                      {block.map((li) => (
                        <li key={li} style={{ padding: "2px 0" }}>{li}</li>
                      ))}
                    </ul>
                  ),
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      ))}
    </Accordion>
  );
}
