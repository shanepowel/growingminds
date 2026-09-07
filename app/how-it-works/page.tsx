import type { Metadata } from "next";
import { site } from "@/content/site";
import { Cta } from "@/components/site/Cta";
import { HowItWorks } from "@/components/site/HowItWorks";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Three ways to have a session: online with a shared whiteboard, at Sam's home in Portsmouth, or at your home across the local area.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="container-page section-y">
        <h1 className="font-display m-0 mb-3.5 text-[clamp(36px,5.4vw,58px)] font-bold leading-none text-deep">
          How it works
        </h1>
        <p className="m-0 mb-[30px] max-w-[62ch] text-[18px] leading-[1.65] text-body">
          Three ways to have a session. You can mix them, and you can change your
          mind after a few weeks if something else would suit better.
        </p>

        <HowItWorks />

        <div className="mt-11">
          <h2 className="font-display m-0 mb-6 text-[clamp(26px,3.6vw,36px)] font-semibold text-deep">
            Getting started
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-[18px]">
            {site.gettingStarted.map((step) => (
              <div
                key={step.n}
                className="rounded-[var(--radius-card)] border border-sage-mid bg-sage-soft p-[22px]"
              >
                <div className="font-display mb-2 text-[34px] font-bold leading-none text-sage-deep">
                  {step.n}
                </div>
                <div className="mb-1.5 text-[18px] font-extrabold text-deep">
                  {step.title}
                </div>
                <div className="text-[15.5px] leading-[1.55] text-body-soft">
                  {step.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
