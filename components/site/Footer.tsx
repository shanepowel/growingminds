import Link from "next/link";
import { site } from "@/content/site";
import { primaryNav, secondaryNav, legalItems } from "@/lib/nav";
import { resolveHref } from "@/lib/content";

export function Footer() {
  const fbHref = resolveHref(site.business.facebookUrl);

  return (
    <footer className="bg-deep-press text-on-dark">
      <div className="container-page grid grid-cols-2 gap-x-8 gap-y-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div className="col-span-2 md:col-span-1">
          <div className="font-display text-[19px] font-semibold tracking-[0.04em] text-white">
            Growing Minds Tutoring
          </div>
          <p className="mt-2 max-w-[30ch] text-[14.5px] leading-[1.7]">
            KS1 specialist tutoring, Portsmouth and online.
          </p>
          <div className="mt-3 flex flex-col gap-1 text-[14.5px]">
            <a href={site.business.phoneHref} className="font-bold text-white hover:underline">
              {site.business.phone}
            </a>
            <a href={`mailto:${site.business.email}`} className="hover:text-white">
              {site.business.email}
            </a>
            <a
              href={fbHref}
              target={fbHref === "#" ? undefined : "_blank"}
              rel="noreferrer"
              className="hover:text-white"
            >
              {site.business.facebookPageName} on Facebook
            </a>
          </div>
        </div>

        <nav aria-label="Explore">
          <div className="mb-3 text-[12.5px] font-extrabold tracking-[0.14em] text-sage-deep">
            EXPLORE
          </div>
          {[{ label: "Home", href: "/" }, ...primaryNav].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-[3px] text-[14.5px] text-on-dark hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="More">
          <div className="mb-3 text-[12.5px] font-extrabold tracking-[0.14em] text-sage-deep">
            MORE
          </div>
          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-[3px] text-[14.5px] text-on-dark hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div>
          <div className="mb-3 text-[12.5px] font-extrabold tracking-[0.14em] text-sage-deep">
            AREAS COVERED
          </div>
          <div className="text-[14.5px] leading-[1.8]">
            {site.business.areasCovered.join(" · ")}
          </div>
        </div>
      </div>

      <div className="border-t border-sage/18">
        <div className="container-page flex flex-col gap-2 py-4 text-[13.5px] text-[#8fa884] sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.business.name}. {site.legalNote}
          </span>
          <span className="flex gap-4">
            {legalItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
