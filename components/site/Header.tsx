"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navItems } from "@/lib/nav";
import { site } from "@/content/site";
import { resolveHref } from "@/lib/content";
import { Logo } from "./Logo";
import { FacebookGlyph } from "./FacebookGlyph";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const fbHref = resolveHref(site.business.facebookUrl);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-md">
      <div className="container-page flex items-center gap-5 py-3">
        <Logo />

        <nav
          aria-label="Primary"
          className="ml-auto hidden flex-wrap gap-0.5 lg:flex"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-[9px] px-[11px] py-2 text-[14px] transition-colors hover:bg-sage-soft hover:text-deep ${
                  active
                    ? "bg-sage font-extrabold text-deep"
                    : "font-semibold text-body-soft"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex flex-shrink-0 items-center gap-2 lg:ml-0">
          <a
            href={site.business.phoneHref}
            className="flex min-h-[44px] items-center gap-2 rounded-full bg-deep px-[15px] py-2.5 text-[14px] font-extrabold text-white no-underline transition-colors hover:bg-deep-press"
          >
            <Phone size={15} aria-hidden />
            <span className="hidden sm:inline">{site.business.phone}</span>
            <span className="sr-only">Call {site.business.phone}</span>
          </a>
          <a
            href={fbHref}
            target={fbHref === "#" ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={`${site.business.facebookPageName} on Facebook`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sage-mid bg-sage-soft text-deep transition-colors hover:bg-sage"
          >
            <FacebookGlyph size={18} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sage-mid bg-white text-deep lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-cream lg:hidden"
        >
          <div className="container-page flex flex-col py-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-[9px] px-3 py-3 text-[16px] ${
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
      )}
    </header>
  );
}
