import type { Metadata } from "next";
import { site } from "@/content/site";
import { Cta } from "@/components/site/Cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple KS1 tutoring pricing with no joining fee and no contract. Pay per session or in a block of six, with a free 15 minute intro chat.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <section className="container-page section-y">
        <h1 className="font-display m-0 mb-3.5 text-[clamp(36px,5.4vw,58px)] font-bold leading-none text-deep">
          Pricing
        </h1>
        <p className="m-0 mb-[34px] max-w-[62ch] text-[18px] leading-[1.65] text-body">
          No joining fee and no contract. Pay for the sessions you have, one at a
          time or in a block if you prefer to lock in a regular slot.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {site.pricing.map((p) => (
            <div
              key={p.label}
              className="flex flex-col gap-2 rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-[0_2px_12px_rgba(27,74,44,.05)]"
            >
              <div className="text-[18px] font-extrabold text-deep">
                {p.label}
              </div>
              <div className="font-display text-[44px] font-bold leading-none text-leaf">
                {p.price}
              </div>
              <div className="text-[15px] font-bold text-leaf-light">
                {p.duration}
              </div>
              <div className="mt-1 text-[15.5px] leading-[1.6] text-body-soft">
                {p.note}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[34px] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {site.policies.map((pol) => (
            <div
              key={pol.title}
              className="rounded-[var(--radius-card)] border border-sage-mid bg-sage-soft p-[26px]"
            >
              <div className="font-display mb-2.5 text-[21px] font-semibold text-deep">
                {pol.title}
              </div>
              <div className="text-[16px] leading-[1.65] text-[#33453a]">
                {pol.body}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
