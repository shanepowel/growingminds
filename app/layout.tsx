import type { Metadata } from "next";
import { Oswald, Nunito, Caveat } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StatusBanner } from "@/components/site/StatusBanner";
import { OrganizationJsonLd } from "@/components/site/JsonLd";
import { SpeedInsights } from "@vercel/speed-insights/next";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
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
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.business.url),
  title: {
    default: `${site.business.name} — ${site.business.tagline}`,
    template: `%s — ${site.business.name}`,
  },
  description: site.hero.body,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.business.name,
    title: `${site.business.name} — ${site.business.tagline}`,
    description: site.hero.body,
    url: site.business.url,
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
        className={`${oswald.variable} ${nunito.variable} ${caveat.variable}`}
      >
        <Header />
        <StatusBanner />
        <main>{children}</main>
        <Footer />
        <OrganizationJsonLd />
        <SpeedInsights />
      </body>
    </html>
  );
}
