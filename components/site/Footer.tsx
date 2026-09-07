import Link from "next/link";
import { site } from "@/content/site";
import { legalItems, navItems } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="bg-deep-press text-on-dark">
      <div className="container-page grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[30px] py-11 pt-11">
        <div>
          <div className="font-display text-[19px] font-semibold tracking-[0.04em] text-white">
            Growing Minds Tutoring
          </div>
          <div className="mt-2 text-[14.5px] leading-[1.7]">
            KS1 specialist tutoring, Portsmouth and online.
            <br />
            <a href={site.business.phoneHref} className="hover:text-white">
              {site.business.phone}
            </a>
            <br />
            <a
              href={`mailto:${site.business.email}`}
              className="hover:text-white"
            >
              {site.business.email}
            </a>
          </div>
        </div>

        <nav aria-label="Footer pages">
          <div className="mb-2.5 text-[12.5px] font-extrabold tracking-[0.14em] text-sage-deep">
            PAGES
          </div>
          {navItems.map((item) => (
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
          <div className="mb-2.5 text-[12.5px] font-extrabold tracking-[0.14em] text-sage-deep">
            AREAS COVERED
          </div>
          <div className="text-[14.5px] leading-[1.8]">
            {site.business.areasCovered.join(" · ")}
          </div>
        </div>

        <nav aria-label="Legal">
          <div className="mb-2.5 text-[12.5px] font-extrabold tracking-[0.14em] text-sage-deep">
            LEGAL
          </div>
          {legalItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-[3px] text-[14.5px] text-on-dark hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-sage/20">
        <div className="container-page py-3.5 text-[13.5px] text-[#8fa884]">
          © {new Date().getFullYear()} {site.business.name}. {site.legalNote}
        </div>
      </div>
    </footer>
  );
}
