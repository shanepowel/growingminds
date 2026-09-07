import { site } from "@/content/site";

/**
 * Parent testimonials. Every quote is a [QUOTE] placeholder until Sam supplies real
 * ones with written permission. See the note the design reference keeps here.
 */
export function Testimonials({
  heading = "What parents say",
  showNote = true,
}: {
  heading?: string;
  showNote?: boolean;
}) {
  return (
    <>
      <h2 className="font-display mb-[26px] text-center text-[clamp(26px,3.6vw,36px)] font-semibold text-deep">
        {heading}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {site.testimonials.map((t, i) => (
          <figure
            key={i}
            className="rounded-[var(--radius-card)] border border-sage bg-white p-[26px] shadow-[0_2px_12px_rgba(27,74,44,.05)]"
          >
            <div
              aria-hidden
              className="font-display mb-3 text-[34px] leading-[0.6] text-sage-deep"
            >
              &ldquo;
            </div>
            <blockquote className="m-0 text-[16.5px] leading-[1.6] text-body">
              {t.quote}
            </blockquote>
            <figcaption className="mt-4 text-[14.5px] font-extrabold text-leaf">
              {t.parentName}, {t.childYear} parent
            </figcaption>
          </figure>
        ))}
      </div>
      {showNote && (
        <p className="mt-5 text-center font-mono text-[12px] text-[#6b7a6e]">
          real quotes to replace [QUOTE] placeholders, with written permission
        </p>
      )}
    </>
  );
}
