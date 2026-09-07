import type { Metadata } from "next";
import { site } from "@/content/site";
import { Cta } from "@/components/site/Cta";
import { ImageSlot } from "@/components/site/ImageSlot";
import { PersonJsonLd } from "@/components/site/JsonLd";

export const metadata: Metadata = {
  title: "About Sam",
  description:
    "Sam is a qualified primary school teacher with over 15 years in Key Stage 1, Enhanced DBS checked, tutoring in Portsmouth and online.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PersonJsonLd />
      <section className="container-page section-y">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-[34px]">
          <ImageSlot label="portrait of Sam (daylight, 4:5)" minHeight={420} />
          <div>
            <p className="font-script text-[30px] leading-none text-leaf-light">
              Hello, I&rsquo;m {site.tutor.name}
            </p>
            <h1 className="font-display m-0 mb-1.5 mt-1 text-[clamp(34px,5vw,52px)] font-bold leading-none text-deep">
              {site.tutor.role}
            </h1>
            <p className="mb-5 text-[17px] font-bold text-leaf">
              Over {site.tutor.yearsExperience} years in Key Stage 1, based in
              Portsmouth
            </p>
            {site.tutor.bio.map((para, i) => (
              <p
                key={i}
                className="m-0 mb-4 text-[17.5px] leading-[1.7] text-body"
              >
                {para}
              </p>
            ))}

            <div className="mt-[26px] rounded-[var(--radius-card)] border border-sage-mid bg-sage-soft p-[26px]">
              <h2 className="font-display m-0 mb-3.5 text-[22px] font-semibold text-deep">
                Qualifications and checks
              </h2>
              <ul className="m-0 list-none p-0">
                {site.tutor.qualifications.map((q, i) => (
                  <li key={i} className="flex items-start gap-3 py-[7px]">
                    <span className="mt-0.5 flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-leaf text-[12px] font-extrabold text-white">
                      ✓
                    </span>
                    <span className="text-[16px] leading-[1.5] text-[#33453a]">
                      {q}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-[34px] rounded-[var(--radius-card)] bg-sage p-8">
          <p className="mb-2.5 text-[13px] font-extrabold tracking-[0.16em] text-[#3e5b31]">
            SAFEGUARDING
          </p>
          <h2 className="font-display m-0 mb-3.5 text-[clamp(24px,3.2vw,32px)] font-semibold text-deep">
            Your child&rsquo;s safety comes first
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            {site.tutor.safeguarding.map((para, i) => (
              <p
                key={i}
                className="m-0 text-[16.5px] leading-[1.7] text-[#2c3b31]"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-[34px] max-w-[70ch]">
          <h2 className="font-display m-0 mb-3 text-[clamp(24px,3.2vw,32px)] font-semibold text-deep">
            Why I tutor
          </h2>
          <p className="m-0 text-[17.5px] leading-[1.7] text-body">
            {site.tutor.whyITutor}
          </p>
        </div>
      </section>
      <Cta />
    </>
  );
}
