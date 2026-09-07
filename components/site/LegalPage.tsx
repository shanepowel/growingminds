type Section = { readonly h: string; readonly p: string };

function slugify(h: string) {
  return h
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: readonly Section[];
}) {
  return (
    <section className="mx-auto max-w-[1000px] px-6 section-y">
      <h1 className="font-display m-0 mb-2 text-[clamp(32px,4.6vw,50px)] font-bold leading-none text-deep">
        {title}
      </h1>
      <div className="mb-[34px] text-[14.5px] text-muted">
        Last updated {updated}
      </div>
      <div className="grid grid-cols-1 items-start gap-[34px] md:grid-cols-[minmax(200px,240px)_minmax(0,1fr)]">
        <nav
          aria-label="On this page"
          className="rounded-[var(--radius-card)] border border-sage-mid bg-sage-soft p-[22px] md:sticky md:top-[110px]"
        >
          <div className="mb-3 text-[12.5px] font-extrabold tracking-[0.14em] text-leaf-light">
            ON THIS PAGE
          </div>
          {sections.map((s) => (
            <a
              key={s.h}
              href={`#${slugify(s.h)}`}
              className="block py-[5px] text-[15px] font-bold leading-[1.4] text-leaf hover:text-deep"
            >
              {s.h}
            </a>
          ))}
        </nav>
        <div className="min-w-0">
          {sections.map((s) => (
            <div key={s.h} id={slugify(s.h)} className="mb-7 scroll-mt-[110px]">
              <h2 className="font-display m-0 mb-2.5 text-[22px] font-semibold text-deep">
                {s.h}
              </h2>
              <p className="m-0 max-w-[68ch] text-[16.5px] leading-[1.75] text-body">
                {s.p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
