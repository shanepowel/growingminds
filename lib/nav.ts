export type NavItem = { label: string; href: string };

/**
 * Primary navigation: exactly four items per CLAUDE.md. The logo links home,
 * so Home is not repeated here. Tutoring holds subjects, how a session works
 * and pricing, so it is labelled "Subjects and prices".
 */
export const primaryNav: NavItem[] = [
  { label: "Subjects and prices", href: "/tutoring" },
  { label: "About me", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

/** Secondary pages: the local SEO landing page and the current-families area. */
export const secondaryNav: NavItem[] = [
  { label: "Portsmouth", href: "/tutoring-portsmouth" },
  { label: "Pupil area", href: "/pupil-area" },
];

/** Privacy and terms live on one tabbed /policies page. */
export const legalItems: NavItem[] = [
  { label: "Privacy notice", href: "/policies#privacy" },
  { label: "Tutoring terms", href: "/policies#terms" },
];
