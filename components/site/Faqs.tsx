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
        <div key={group.group} className="mb-[30px]">
          <div className="eyebrow mb-3">{group.group}</div>
          {group.items.map((item, ii) => {
            const key = `${gi}-${ii}`;
            const open = key === openKey;
            const panelId = `faq-panel-${key}`;
            const btnId = `faq-btn-${key}`;
            return (
              <div
                key={key}
                className="mb-2.5 overflow-hidden rounded-[14px] border border-line bg-white"
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    id={btnId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenKey(open ? "" : key)}
                    className="flex w-full items-center gap-3.5 px-5 py-[17px] text-left hover:bg-[#f7faf4]"
                  >
                    <span className="text-[17px] font-extrabold leading-[1.4] text-deep">
                      {item.q}
                    </span>
                    <span className="ml-auto flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full bg-sage-soft text-leaf">
                      {open ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                </h3>
                {open && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="max-w-[70ch] px-5 pb-[19px] text-[16px] leading-[1.7] text-body-soft"
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
