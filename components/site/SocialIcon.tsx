import type { ReactNode } from "react";
import { facebookHref, instagramHref } from "@/lib/content";

type SocialName = "facebook" | "instagram";

type IconProps = {
  name: SocialName;
  size?: number;
};

/**
 * Facebook and Instagram marks, drawn as stroke icons so they sit with the
 * Lucide icons already used on the site. Lucide no longer ships these brand
 * marks. Colour stays currentColor, so they pick up the link or disc colour
 * and never introduce a new hue.
 */
export function SocialIcon({ name, size = 18 }: IconProps) {
  const shared = {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    focusable: false as const,
  };

  switch (name) {
    case "facebook":
      return (
        <svg {...shared}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...shared}>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    default: {
      const exhaustive: never = name;
      return exhaustive;
    }
  }
}

const inlineLink = {
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  fontWeight: 700,
  whiteSpace: "nowrap" as const,
  verticalAlign: "-0.2em",
};

function socialLink(name: SocialName, index: number) {
  const href = name === "facebook" ? facebookHref() : instagramHref();
  const label = name === "facebook" ? "Facebook" : "Instagram";
  return (
    <a key={`${name}-${index}`} href={href} target="_blank" rel="noreferrer" style={inlineLink}>
      <SocialIcon name={name} size={16} />
      {label}
    </a>
  );
}

/** Turns the words Facebook and Instagram in a sentence into icon links. */
export function withSocialIcons(text: string): ReactNode {
  const parts = text.split(/(Facebook|Instagram)/g);
  if (parts.length === 1) return text;
  return parts.map((part, index) => {
    if (part === "Facebook") return socialLink("facebook", index);
    if (part === "Instagram") return socialLink("instagram", index);
    return part;
  });
}
