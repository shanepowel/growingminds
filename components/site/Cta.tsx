import { site } from "@/content/site";
import { resolveHref } from "@/lib/content";
import { LinkButton } from "./Button";

/** Closing call to action, shown on most pages (mirrors the flyer's "shine" moment). */
export function Cta() {
  const fbHref = resolveHref(site.business.facebookUrl);

  return (
    <section className="bg-deep text-white">
      <div className="container-page section-y grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center gap-8">
        <div>
          <p className="font-script text-[40px] leading-[1.1] text-sage-deep">
            Let&rsquo;s help your child shine!
          </p>
          <h2 className="font-display mt-2 mb-3 text-[clamp(28px,4vw,42px)] font-semibold leading-[1.05]">
            Ready to start?
          </h2>
          <p className="m-0 max-w-[46ch] text-[17.5px] leading-[1.65] text-sage">
            Send me a message or give me a ring. A free 15 minute chat costs you
            nothing and tells us both a great deal.
          </p>
        </div>
        <div className="grid gap-3">
          <LinkButton href="/contact" variant="onDark" className="text-center">
            Send an enquiry
          </LinkButton>
          <a
            href={site.business.phoneHref}
            className="min-h-[44px] rounded-full border-[1.5px] border-sage/40 bg-white/10 px-6 py-3.5 text-center text-[16.5px] font-extrabold text-white no-underline transition-colors hover:bg-white/20"
          >
            Call {site.business.phone}
          </a>
          <a
            href={fbHref}
            target={fbHref === "#" ? undefined : "_blank"}
            rel="noreferrer"
            className="min-h-[44px] rounded-full border-[1.5px] border-sage/40 bg-white/10 px-6 py-3.5 text-center text-[16.5px] font-extrabold text-white no-underline transition-colors hover:bg-white/20"
          >
            Message me on Facebook
          </a>
        </div>
      </div>
      <div className="border-t border-sage/25">
        <div className="container-page py-4 text-center text-[15px] text-on-dark">
          ♡ &nbsp;{site.footerNote}
        </div>
      </div>
    </section>
  );
}
