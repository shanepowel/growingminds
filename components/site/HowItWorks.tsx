"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { CheckItem } from "./Check";
import { ImageSlot } from "./ImageSlot";

export function HowItWorks() {
  const [activeId, setActiveId] = useState<string>(site.modes[0].id);
  const active = site.modes.find((m) => m.id === activeId) ?? site.modes[0];

  return (
    <>
      <div
        role="tablist"
        aria-label="Delivery modes"
        className="mb-[26px] flex flex-wrap gap-2"
      >
        {site.modes.map((m) => {
          const selected = m.id === activeId;
          return (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveId(m.id)}
              className={`min-h-[44px] rounded-full border-2 px-5 py-3 text-[15.5px] font-extrabold transition-colors ${
                selected
                  ? "border-deep bg-deep text-white"
                  : "border-field-border bg-white text-[#33453a] hover:bg-sage-soft"
              }`}
            >
              {m.title}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-[30px] rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[0_2px_14px_rgba(27,74,44,.05)]">
        <div>
          <h2 className="font-display m-0 mb-3 text-[30px] font-semibold text-deep">
            {active.title}
          </h2>
          <p className="m-0 mb-[18px] text-[17px] leading-[1.7] text-body">
            {active.intro}
          </p>
          <ul className="m-0 list-none p-0">
            {active.points.map((p, i) => (
              <CheckItem key={i} size={22}>
                {p}
              </CheckItem>
            ))}
          </ul>
        </div>
        <div>
          <ImageSlot label={active.imageAlt} minHeight={250} className="rounded-[16px]" />
          {active.showAreas && (
            <div className="mt-4 flex flex-wrap gap-2">
              {site.business.areasCovered.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-sage-mid bg-sage-soft px-3.5 py-[7px] text-[14.5px] font-bold text-deep"
                >
                  {a}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
