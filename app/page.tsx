import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/content/site";
import { getIcon } from "@/lib/icons";
import { LinkButton } from "@/components/site/Button";
import { Cta } from "@/components/site/Cta";
import { ImageSlot } from "@/components/site/ImageSlot";
import { Testimonials } from "@/components/site/Testimonials";

export default function HomePage() {
  return (
    <>
      {/* Hero — flyer split */}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] bg-cream">
        <div className="section-y flex flex-col justify-center gap-[18px] px-8 lg:pl-[max(24px,calc((100vw-1120px)/2))]">
          <p className="font-script text-[38px] leading-none text-leaf-light">
            {site.hero.script}
          </p>
          <h1 className="font-display m-0 text-[clamp(44px,6.4vw,74px)] font-bold leading-[0.92] text-deep">
            {site.hero.display[0]}
            <br />
            {site.hero.display[1]}
          </h1>
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-[34px] bg-leaf-light" />
            <span className="text-[18px] font-bold text-leaf">
              {site.hero.subline}
            </span>
            <span className="h-0.5 flex-1 bg-sage" />
          </div>
          <p className="m-0 max-w-[46ch] text-[18px] leading-[1.6] text-body">
            {site.hero.body}
          </p>
          <div className="mt-1.5 flex flex-wrap gap-3">
            <LinkButton href="/contact">{site.hero.primaryCta}</LinkButton>
            <LinkButton href="/contact" variant="secondary">
              {site.hero.secondaryCta}
            </LinkButton>
          </div>
        </div>

        <div className="section-y flex flex-col bg-deep px-8 lg:pr-[max(24px,calc((100vw-1120px)/2))]">
          <ImageSlot
            label="photo of Sam at the tutoring table (landscape, warm grade)"
            minHeight={190}
            onDark
            className="mb-[26px] rounded-[18px]"
          />
          <ul className="m-0 list-none p-0">
            {site.trust.map((t, i) => {
              const Icon = getIcon(t.icon);
              return (
                <li
                  key={i}
                  className="flex items-start gap-4 border-b border-dashed border-sage/45 py-4 last:border-0"
                >
                  <span className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-sage text-deep">
                    <Icon size={26} strokeWidth={1.9} aria-hidden />
                  </span>
                  <div>
                    <div className="mb-1 text-[19px] font-extrabold leading-[1.2] text-white">
                      {t.title}
                    </div>
                    <div className="text-[15px] leading-[1.5] text-on-dark">
                      {t.body}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* I specialise in + How it works */}
      <section className="container-page section-y grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[34px]">
        <div className="rounded-[var(--radius-card)] border border-sage-mid bg-sage-soft p-[30px]">
          <h2 className="font-display m-0 mb-[18px] text-[26px] font-semibold text-deep">
            I specialise in
          </h2>
          <ul className="m-0 list-none p-0">
            {site.subjects.map((s) => (
              <li key={s.slug} className="flex items-start gap-3.5 py-[9px]">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-leaf text-[13px] font-extrabold text-white">
                  ✓
                </span>
                <div>
                  <div className="text-[18px] font-extrabold text-deep">
                    {s.title}
                  </div>
                  <div className="text-[15px] leading-[1.5] text-body-soft">
                    {s.blurb}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="my-3.5 border-t border-dashed border-sage-deep" />
          <div className="text-[16px] font-extrabold text-leaf">
            KS1 specialist tutoring
          </div>
          <div className="text-[15px] text-body-soft">
            Sessions available online or face to face.
          </div>
        </div>

        <div>
          <p className="eyebrow mb-2.5">How it works</p>
          <h2 className="font-display m-0 mb-3 text-[clamp(28px,4vw,40px)] font-semibold leading-[1.05] text-deep">
            Three ways to learn
          </h2>
          <p className="m-0 mb-[22px] text-[17px] leading-[1.65] text-body">
            Pick whatever fits your family. Some children settle best at their
            own kitchen table, others love the novelty of a shared whiteboard.
          </p>
          <div className="grid gap-3.5">
            {site.modes.map((m) => {
              const Icon = getIcon(m.icon);
              return (
                <Link
                  key={m.id}
                  href="/how-it-works"
                  className="flex items-center gap-4 rounded-[var(--radius-card)] border border-line bg-white px-[22px] py-5 no-underline shadow-[0_2px_12px_rgba(27,74,44,.05)] transition-all hover:border-sage-deep hover:shadow-[0_6px_18px_rgba(27,74,44,.09)]"
                >
                  <span className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full bg-sage-soft text-deep">
                    <Icon size={20} strokeWidth={1.9} aria-hidden />
                  </span>
                  <div>
                    <div className="text-[18px] font-extrabold text-deep">
                      {m.title}
                    </div>
                    <div className="text-[15px] leading-[1.5] text-body-soft">
                      {m.short}
                    </div>
                  </div>
                  <ChevronRight
                    className="ml-auto text-leaf-light"
                    aria-hidden
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-sage bg-sage-soft">
        <div className="container-page section-y">
          <Testimonials />
        </div>
      </section>

      {/* Pricing + FAQ teaser */}
      <section className="container-page section-y grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[34px]">
        <div className="rounded-[var(--radius-card)] bg-deep p-[30px] text-white">
          <p className="mb-2.5 text-[13px] font-extrabold tracking-[0.16em] text-sage-deep">
            PRICING
          </p>
          <h2 className="font-display m-0 mb-2 text-[30px] font-semibold">
            Simple and clear
          </h2>
          <div className="my-3.5 flex items-baseline gap-2">
            <span className="font-display text-[52px] font-bold leading-none">
              {site.pricingSummary.headlinePrice}
            </span>
            <span className="text-[16px] text-sage">
              {site.pricingSummary.per}
            </span>
          </div>
          <p className="mb-5 text-[15.5px] leading-[1.6] text-sage">
            {site.pricingSummary.note}
          </p>
          <LinkButton href="/pricing" variant="onDark">
            See full pricing
          </LinkButton>
        </div>

        <div>
          <h2 className="font-display m-0 mb-[18px] text-[clamp(26px,3.6vw,34px)] font-semibold text-deep">
            Common questions
          </h2>
          {site.faqTeaser.map((f, i) => (
            <div
              key={i}
              className="border-b border-dashed border-sage-mid py-3.5"
            >
              <div className="mb-1.5 text-[17px] font-extrabold text-deep">
                {f.q}
              </div>
              <div className="text-[15.5px] leading-[1.6] text-body-soft">
                {f.a}
              </div>
            </div>
          ))}
          <Link
            href="/faqs"
            className="mt-[18px] inline-block text-[16px] font-extrabold text-leaf hover:text-deep"
          >
            All questions answered →
          </Link>
        </div>
      </section>

      <Cta />
    </>
  );
}
