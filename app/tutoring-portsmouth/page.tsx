import type { Metadata } from "next";
import { site } from "@/content/site";
import { getIcon } from "@/lib/icons";
import { LinkButton } from "@/components/site/Button";
import { Cta } from "@/components/site/Cta";
import { ImageSlot } from "@/components/site/ImageSlot";
import { Testimonials } from "@/components/site/Testimonials";

export const metadata: Metadata = {
  title: "KS1 tutoring in Portsmouth",
  description:
    "A Portsmouth based primary school teacher offering KS1 tutoring for Reception, Year 1 and Year 2, online or face to face across Portsmouth and nearby towns.",
  alternates: { canonical: "/tutoring-portsmouth" },
};

export default function PortsmouthPage() {
  return (
    <>
      <section className="bg-deep text-white">
        <div className="container-page section-y grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-8">
          <div>
            <p className="mb-3 text-[13px] font-extrabold tracking-[0.16em] text-sage-deep">
              PORTSMOUTH AND SURROUNDING AREAS
            </p>
            <h1 className="font-display m-0 mb-3.5 text-[clamp(36px,5.4vw,58px)] font-bold leading-none">
              KS1 tutoring in Portsmouth
            </h1>
            <p className="m-0 mb-[22px] max-w-[52ch] text-[18px] leading-[1.65] text-sage">
              I am a Portsmouth based primary school teacher offering one to one
              tutoring for Reception, Year 1 and Year 2 children, online, at my
              home, or at yours across the city and nearby towns.
            </p>
            <LinkButton href="/contact" variant="onDark">
              Enquire about a Portsmouth slot
            </LinkButton>
          </div>
          <ImageSlot
            label="travel radius map — Portsmouth city centre outward"
            minHeight={280}
            onDark
          />
        </div>
      </section>

      <section className="container-page section-y">
        <h2 className="font-display m-0 mb-2 text-[clamp(26px,3.6vw,36px)] font-semibold text-deep">
          Areas I cover around Portsmouth
        </h2>
        <p className="m-0 mb-5 max-w-[62ch] text-[17px] leading-[1.65] text-body">
          Face to face sessions at your home in any of these areas. Anywhere
          further afield, online works just as well and there is no travel to
          pay for.
        </p>
        <div className="mb-10 flex flex-wrap gap-2.5">
          {site.business.areasCovered.map((a) => (
            <span
              key={a}
              className="rounded-full border border-sage-mid bg-sage-soft px-[17px] py-2.5 text-[15.5px] font-bold text-deep"
            >
              {a}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {site.modes.map((m) => {
            const Icon = getIcon(m.icon);
            return (
              <div
                key={m.id}
                className="rounded-[var(--radius-card)] border border-line bg-white p-[26px] shadow-[0_2px_12px_rgba(27,74,44,.05)]"
              >
                <span className="mb-3.5 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-sage-soft text-deep">
                  <Icon size={20} strokeWidth={1.9} aria-hidden />
                </span>
                <div className="mb-1.5 text-[19px] font-extrabold text-deep">
                  {m.title}
                </div>
                <div className="text-[15.5px] leading-[1.6] text-body-soft">
                  {m.short}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-sage bg-sage-soft">
        <div className="container-page section-y">
          <Testimonials heading="From Portsmouth parents" showNote={false} />
        </div>
      </section>
      <Cta />
    </>
  );
}
