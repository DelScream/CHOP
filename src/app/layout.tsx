import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Unbounded } from "next/font/google";
import { ExitPopup } from "@/components/forms/ExitPopup";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { organizationJsonLd } from "@/lib/jsonld";
import { site } from "@/lib/site";
import "./globals.css";

const display = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600"],
});

const sans = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seoTitle,
    template: "%s — CHOP",
  },
  description: site.seoDescription,
  keywords: [
    "частное охранное предприятие",
    "ЧОП",
    "охрана объектов",
    "охрана предприятий",
    "охрана склада",
    "охрана производства",
    "охрана офиса",
    "охрана имущества",
    "контроль доступа",
    "охрана мероприятий",
    "частная охрана",
    "охранные услуги",
    "CHOP",
  ],
  authors: [{ name: site.author.name, url: site.author.github }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.fullName,
    title: site.seoTitle,
    description: site.seoDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#content">
          К содержанию
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <ExitPopup />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
      </body>
    </html>
  );
}
