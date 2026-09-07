import { site } from "@/content/site";
import { hasHref } from "@/lib/content";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Service-area LocalBusiness, no street address, areaServed from site.ts. */
export function OrganizationJsonLd() {
  const sameAs = hasHref(site.business.facebookUrl)
    ? [site.business.facebookUrl]
    : undefined;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "EducationalOrganization"],
        "@id": `${site.business.url}/#business`,
        name: site.business.name,
        description: site.business.tagline,
        url: site.business.url,
        email: site.business.email,
        telephone: site.business.phone,
        priceRange: "££",
        areaServed: site.business.areasCovered.map((name) => ({
          "@type": "City",
          name,
        })),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Portsmouth",
          addressRegion: "Hampshire",
          addressCountry: "GB",
        },
        ...(sameAs ? { sameAs } : {}),
      }}
    />
  );
}

export function PersonJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: site.tutor.name,
        jobTitle: site.tutor.role,
        worksFor: {
          "@type": "Organization",
          name: site.business.name,
          url: site.business.url,
        },
        knowsAbout: site.subjects.map((s) => s.title),
        areaServed: site.business.areasCovered,
      }}
    />
  );
}

export function FaqJsonLd() {
  const questions: { q: string; a: string }[] = site.faqs.flatMap((group) =>
    group.items.map((item) => ({ q: item.q, a: item.a })),
  );
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }}
    />
  );
}
