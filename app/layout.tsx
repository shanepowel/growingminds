import type { Metadata } from "next";
import { Source_Serif_4, Nunito, Caveat } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { HeaderBar } from "@/components/HeaderBar";
import { SiteFooter } from "@/components/SiteFooter";
import { StatusBanner } from "@/components/StatusBanner";
import { OrganizationJsonLd } from "@/components/site/JsonLd";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-source-serif",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.business.domain}`),
  title: {
    default: `${site.business.name} · ${site.business.tagline}`,
    template: `%s · ${site.business.name}`,
  },
  description: site.hero.lead,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.business.name,
    title: `${site.business.name} · ${site.business.tagline}`,
    description: site.hero.lead,
    url: `https://${site.business.domain}`,
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body
        className={`${sourceSerif.variable} ${nunito.variable} ${caveat.variable}`}
      >
        <HeaderBar />
        <StatusBanner />
        <main>{children}</main>
        <SiteFooter />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
