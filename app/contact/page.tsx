import type { Metadata } from "next";
import { Hourglass, Phone } from "lucide-react";
import { site } from "@/content/site";
import { facebookHref, hasHref } from "@/lib/content";
import { ContactForm } from "@/components/site/ContactForm";
import { FacebookGlyph } from "@/components/site/FacebookGlyph";

export const metadata: Metadata = {
  title: "Get in touch",
  description:
    "Send an enquiry about KS1 tutoring in Portsmouth or online. Sam replies within one working day. Call or message on Facebook too.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const paused = site.status === "paused";
  const fbHref = facebookHref();
  const showBooking = site.booking.enabled;
  const calConfigured = hasHref(site.booking.calUrl);

  return (
    <section className="container-page section-y">
      <h1 className="font-display m-0 mb-3.5 text-[clamp(36px,5.4vw,58px)] font-bold leading-none text-deep">
        Get in touch
      </h1>
      <p className="m-0 mb-7 max-w-[60ch] text-[18px] leading-[1.65] text-body">
        Tell me a little about your child and I will come back to you within one
        working day. There is no obligation, and a free 15 minute chat is the
        easiest way to work out whether I can help.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-7">
        {paused ? (
          <div className="rounded-[var(--radius-card)] border border-line bg-white p-[30px] shadow-[0_2px_14px_rgba(27,74,44,.05)]">
            <div className="mb-4 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-amber text-amber-ink">
              <Hourglass size={26} aria-hidden />
            </div>
            <h2 className="font-display m-0 mb-2.5 text-[26px] font-semibold text-deep">
              {site.form.paused.title}
            </h2>
            <p className="m-0 text-[16.5px] leading-[1.7] text-body-soft">
              {site.form.paused.lead}
            </p>
          </div>
        ) : (
          <ContactForm />
        )}

        <div className="grid gap-[18px]">
          <div className="rounded-[var(--radius-card)] bg-deep p-7 text-white">
            <div className="font-display mb-3.5 text-[22px] font-semibold">
              Or reach me directly
            </div>
            <a
              href={site.business.phoneHref}
              className="mb-2.5 flex items-center gap-3.5 rounded-[14px] border border-sage/30 bg-white/10 p-4 text-white no-underline hover:bg-white/20"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-deep">
                <Phone size={18} aria-hidden />
              </span>
              <span>
                <span className="block text-[18px] font-extrabold">
                  {site.business.phone}
                </span>
                <span className="block text-[14px] text-on-dark">
                  {site.business.phoneNote}
                </span>
              </span>
            </a>
            <a
              href={fbHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 rounded-[14px] border border-sage/30 bg-white/10 p-4 text-white no-underline hover:bg-white/20"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-deep">
                <FacebookGlyph size={19} />
              </span>
              <span>
                <span className="block text-[18px] font-extrabold">
                  {site.business.facebookPageName}
                </span>
                <span className="block text-[14px] text-on-dark">
                  Message me on Facebook for enquiries and bookings
                </span>
              </span>
            </a>
            <div className="mt-3.5 text-[14.5px] leading-[1.6] text-on-dark">
              Email:{" "}
              <a
                href={`mailto:${site.business.email}`}
                className="text-on-dark underline"
              >
                {site.business.email}
              </a>
            </div>
          </div>

          {showBooking && (
            <div className="rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-[0_2px_12px_rgba(27,74,44,.05)]">
              <div className="font-display mb-2 text-[22px] font-semibold text-deep">
                {site.booking.title}
              </div>
              <p className="m-0 mb-4 text-[15.5px] leading-[1.6] text-body-soft">
                {site.booking.body}
              </p>
              {calConfigured ? (
                <iframe
                  src={site.booking.calUrl}
                  title="Book a free 15 minute chat"
                  className="min-h-[420px] w-full rounded-[14px] border border-sage-mid"
                />
              ) : (
                <div
                  className="flex min-h-[190px] items-center justify-center rounded-[14px] border border-dashed border-sage-mid p-4 text-center font-mono text-[12px] text-[#5f7355]"
                  style={{
                    background:
                      "repeating-linear-gradient(135deg,#EEF3E6 0 9px,#F7FAF4 9px 18px)",
                  }}
                >
                  Cal.com booking embed
                  <br />
                  (add booking.calUrl in content/site.ts to enable)
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
