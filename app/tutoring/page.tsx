import type { Metadata } from "next";
import { site } from "@/content/site";
import { getIcon } from "@/lib/icons";
import { CheckItem } from "@/components/site/Check";
import { Cta } from "@/components/site/Cta";

export const metadata: Metadata = {
  title: "What I tutor",
  description:
    "KS1 tutoring in Maths, Early Reading, Phonics, Handwriting and Literacy, aligned to the Year 1 and Year 2 national curriculum.",
  alternates: { canonical: "/tutoring" },
};

export default function TutoringPage() {
  return (
    <>
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
      <Cta />
    </>
  );
}
