import type { Metadata } from "next";
import { site } from "@/content/site";
import { getIcon } from "@/lib/icons";
import { CheckItem } from "@/components/site/Check";
import { Cta } from "@/components/site/Cta";
import { HowItWorks } from "@/components/site/HowItWorks";

export const metadata: Metadata = {
  title: "Subjects, sessions and prices",
  description:
    "KS1 tutoring in Maths, Early Reading, Phonics, Handwriting and Literacy, how a session works online or face to face, and simple pricing with no contract.",
  alternates: { canonical: "/tutoring" },
};

export default function TutoringPage() {
  return (
    <>
      {/* Subjects */}
      <section className="container-page section-y">
        <h1 className="font-display m-0 mb-3.5 text-[clamp(36px,5.4vw,58px)] font-bold leading-none text-deep">
          What I tutor
        </h1>
        <p className="m-0 mb-10 max-w-[62ch] text-[18px] leading-[1.65] text-body">
          Everything here is aligned to the Key Stage 1 national curriculum for
          Year 1 and Year 2, and to the phonics scheme your child&rsquo;s school
          follows. We start with a quick, gentle look at where they are, then
          build from there.
        </p>

        {site.subjects.map((s) => {
          const Icon = getIcon(s.icon);
          return (
            <div
              key={s.slug}
              className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7 border-t border-dashed border-sage-mid py-[30px]"
            >
              <div>
                <div className="mb-3 flex items-center gap-3.5">
                  <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-sage-soft text-deep">
                    <Icon size={22} strokeWidth={1.9} aria-hidden />
                  </span>
                  <h2 className="font-display m-0 text-[30px] font-semibold text-deep">
                    {s.title}
                  </h2>
                </div>
                <p className="m-0 text-[17px] leading-[1.65] text-body">
                  {s.long}
                </p>
              </div>
              <div className="rounded-[var(--radius-card)] border border-line bg-white p-[26px] shadow-[0_2px_12px_rgba(27,74,44,.05)]">
                <div className="mb-3 text-[14px] font-extrabold tracking-[0.1em] text-leaf-light">
                  WHAT WE WORK ON
                </div>
                <ul className="m-0 list-none p-0">
                  {s.outcomes.map((o, i) => (
                    <CheckItem key={i} size={20}>
                      {o}
                    </CheckItem>
                  ))}
                </ul>
                <div className="my-3.5 border-t border-dashed border-sage" />
                <div className="mb-2 text-[14px] font-extrabold tracking-[0.1em] text-leaf-light">
                  A TYPICAL SESSION
                </div>
                <div className="text-[15.5px] leading-[1.6] text-body-soft">
                  {s.session}
                </div>
              </div>
            </div>
          );
        })}

        <div className="mt-2.5 border-t border-dashed border-sage-mid pt-[30px] text-center">
          <p className="font-script m-0 text-[34px] text-leaf-light">
            Every session is personalised
          </p>
          <p className="mx-auto mt-2 max-w-[58ch] text-[17px] leading-[1.65] text-body">
            No two children need the same thing, so no two sessions look the
            same. I plan around your child, their school&rsquo;s methods and
            whatever is worrying them most this week.
          </p>
        </div>
      </section>

      {/* How a session works */}
      <section
        id="how-it-works"
        className="scroll-mt-[120px] border-y border-sage bg-sage-soft"
      >
        <div className="container-page section-y">
          <p className="eyebrow mb-2.5">How a session works</p>
          <h2 className="font-display m-0 mb-3.5 text-[clamp(30px,4.4vw,44px)] font-semibold leading-[1.05] text-deep">
            Three ways to learn
          </h2>
          <p className="m-0 mb-8 max-w-[62ch] text-[17px] leading-[1.65] text-body">
            Pick whatever fits your family. You can mix them, and change your
            mind after a few weeks if something else would suit better.
          </p>

          <HowItWorks />

          <div className="mt-11">
            <h3 className="font-display m-0 mb-6 text-[clamp(24px,3.4vw,32px)] font-semibold text-deep">
              Getting started
            </h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-[18px]">
              {site.gettingStarted.map((step) => (
                <div
                  key={step.n}
                  className="rounded-[var(--radius-card)] border border-sage-mid bg-white p-[22px]"
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
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container-page section-y scroll-mt-[120px]">
        <p className="eyebrow mb-2.5">Pricing</p>
        <h2 className="font-display m-0 mb-3.5 text-[clamp(30px,4.4vw,44px)] font-semibold leading-none text-deep">
          Simple and clear
        </h2>
        <p className="m-0 mb-8 max-w-[62ch] text-[18px] leading-[1.65] text-body">
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
