"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "./SiteHeader";

/** Client wrapper so the server SiteHeader can highlight the active nav item. */
export function HeaderBar() {
  const pathname = usePathname();
  return <SiteHeader pathname={pathname} />;
}
