"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { primaryNav } from "@/lib/nav";
import { site } from "@/content/site";
import { facebookHref } from "@/lib/content";
import { Logo } from "./Logo";
import { FacebookGlyph } from "./FacebookGlyph";

export function Header() {
  const pathname = usePathname();
  const fbHref = facebookHref();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header>
      {/* Trust strip. Not sticky: it scrolls away as the parent reads on. */}
      <div className="border-b border-sage-mid bg-sage-soft text-body-soft">
        <div className="container-page flex items-center justify-between gap-3 py-1.5 text-[12.5px]">
          <span className="font-semibold">
            <span className="hidden sm:inline">
              Qualified KS1 teacher · Enhanced DBS on the Update Service
            </span>
            <span className="sm:hidden">Qualified KS1 teacher · DBS checked</span>
          </span>
          <Link
            href="/pupil-area"
            className="whitespace-nowrap font-extrabold text-leaf hover:text-deep"
          >
            {site.pupilArea.signIn.cta} sign in →
          </Link>
        </div>
      </div>

      {/* Sticky: brand and contact bar, then the four item nav row. */}
      <div className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-md">
        <div className="container-page flex h-[60px] items-center gap-4">
          <Logo />
          <div className="ml-auto flex flex-shrink-0 items-center gap-2">
            <a
              href={site.business.phoneHref}
              className="flex min-h-[42px] items-center gap-2 rounded-full bg-deep px-4 py-2 text-[14px] font-extrabold text-white no-underline transition-colors hover:bg-deep-press"
            >
              <Phone size={15} aria-hidden />
              <span className="hidden sm:inline">{site.business.phone}</span>
              <span className="sr-only">Call {site.business.phone}</span>
            </a>
            <a
              href={fbHref}
              target="_blank"
              rel="noreferrer"
              aria-label={`${site.business.facebookPageName} on Facebook`}
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-sage-mid bg-sage-soft text-deep transition-colors hover:bg-sage"
            >
              <FacebookGlyph size={18} />
            </a>
          </div>
        </div>

        <nav aria-label="Primary" className="border-t border-line/70">
          <div className="container-page flex justify-start gap-1 overflow-x-auto py-1.5 md:justify-center">
            {primaryNav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-[15px] transition-colors hover:bg-sage-soft hover:text-deep ${
                    active
                      ? "bg-sage font-extrabold text-deep"
                      : "font-semibold text-body-soft"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
