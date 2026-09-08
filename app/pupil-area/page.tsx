import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { getIcon } from "@/lib/icons";
import { resolveLink, pupilSignInHref } from "@/lib/content";
import { LinkButton } from "@/components/site/Button";

export const metadata: Metadata = {
  title: "Pupil area",
  description:
    "For current families: everything for your child's sessions lives in your own Google Classroom, plus the session whiteboard and video link.",
  alternates: { canonical: "/pupil-area" },
};

export default function PupilAreaPage() {
  const signInHref = pupilSignInHref();
  return (
    <section className="mx-auto max-w-[1000px] px-6 section-y">
      <p className="eyebrow mb-3">For current families</p>
      <h1 className="font-display m-0 mb-3.5 text-[clamp(34px,5.2vw,56px)] font-bold leading-none text-deep">
        Pupil area
      </h1>
      <p className="m-0 mb-2.5 max-w-[62ch] text-[18px] leading-[1.65] text-body">
        {site.pupilArea.intro}
      </p>
      <p className="m-0 mb-6 max-w-[62ch] text-[16px] leading-[1.65] text-body-soft">
        {site.pupilArea.note}
      </p>
      <div className="mb-[34px]">
        <LinkButton
          href={signInHref}
          target={signInHref === "#" ? undefined : "_blank"}
        >
          {site.pupilArea.signIn.cta}: sign in with Google
        </LinkButton>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[18px]">
        {site.pupilArea.links.map((l) => {
          const Icon = getIcon(l.icon);
          const href = resolveLink(l.href, l.fallback);
          return (
            <a
              key={l.title}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-2 rounded-[var(--radius-card)] border border-line bg-white p-[26px] text-ink no-underline shadow-[0_2px_12px_rgba(27,74,44,.05)] transition-all hover:border-sage-deep hover:shadow-[0_6px_18px_rgba(27,74,44,.09)]"
            >
              <span className="mb-1.5 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-sage-soft text-deep">
                <Icon size={20} strokeWidth={1.9} aria-hidden />
              </span>
              <div className="text-[19px] font-extrabold text-deep">
                {l.title}
              </div>
              <div className="text-[15.5px] leading-[1.6] text-body-soft">
                {l.body}
              </div>
              <div className="mt-1.5 text-[15px] font-extrabold text-leaf">
                {l.cta} →
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-[26px] rounded-[var(--radius-card)] border border-sage-mid bg-sage-soft p-7">
        <div className="font-display mb-2.5 text-[21px] font-semibold text-deep">
          What is kept, and where
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[18px]">
          {site.pupilArea.records.map((r, i) => (
            <p key={i} className="m-0 text-[16px] leading-[1.65] text-[#33453a]">
              {i === site.pupilArea.records.length - 1 ? (
                <>
                  {r} See the{" "}
                  <Link href="/policies#privacy" className="underline">
                    privacy notice
                  </Link>
                  .
                </>
              ) : (
                r
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
