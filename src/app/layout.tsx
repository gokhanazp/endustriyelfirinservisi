import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd, MobileCallBar } from "@/components/Ui";
import { site } from "@/lib/site";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.slogan} | ${site.name} — İstanbul`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Teknik Servis",
  keywords: [
    "endüstriyel fırın servisi",
    "endüstriyel fırın tamiri",
    "sanayi tipi fırın servisi",
    "konveksiyonel fırın servisi",
    "pizza fırını servisi",
    "endüstriyel mutfak servisi",
    "istanbul endüstriyel fırın servisi",
    "endüstriyel fırın tamircisi",
  ],
  alternates: {
    canonical: site.url,
    languages: { "tr-TR": site.url },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: `${site.slogan} | ${site.name}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.slogan} | ${site.name}`,
    description: site.description,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: site.verification.google || undefined,
    yandex: site.verification.yandex || undefined,
  },
  other: {
    "geo.region": "TR-34",
    "geo.placename": "İstanbul",
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#05080f",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="preload"
          href="/fonts/inter-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/manrope-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
        >
          İçeriğe geç
        </a>
        <JsonLd
          data={[organizationSchema(), websiteSchema(), localBusinessSchema()]}
        />
        <Header />
        <main id="icerik" className="pb-24 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
