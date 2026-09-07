"use client";

import { useEffect, useRef } from "react";

/**
 * Cloudflare Turnstile widget. Renders only when a site key is configured
 * (NEXT_PUBLIC_TURNSTILE_SITE_KEY). It injects a hidden `cf-turnstile-response`
 * field into the enclosing form, which the server action verifies. With no key
 * set (local/dev) it renders nothing and the server action skips verification.
 */
export function Turnstile() {
  const ref = useRef<HTMLDivElement>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey) return;
    const id = "cf-turnstile-script";
    if (!document.getElementById(id)) {
      const script = document.createElement("script");
      script.id = id;
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, [siteKey]);

  if (!siteKey) return null;

  return (
    <div
      ref={ref}
      className="cf-turnstile"
      data-sitekey={siteKey}
      data-theme="light"
    />
  );
}
