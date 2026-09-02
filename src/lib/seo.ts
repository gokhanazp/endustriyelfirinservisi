import type { Metadata } from "next";
import { site, absoluteUrl } from "./site";
import type { FaqItem } from "./services";

type BuildMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  noindex?: boolean;
};

/** Her sayfada tekrar eden metadata mantigini tek yerde toplar. */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  noindex = false,
}: BuildMeta): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl("/og.png");

  return {
    /**
     * `absolute`, layout'taki `title.template` ekini devre disi birakir.
     * Site adi "Endüstriyel Fırın Servisi" oldugu ve sayfa basliklarinin
     * tamami zaten bu ifadeyi tasidigi icin sablon eki her sayfada
     * anahtar kelimeyi ikinci kez tekrarliyor, basligi 80+ karaktere
     * cikariyordu. Baslik artik sayfanin kendi kontrolunde.
     */
    title: { absolute: title },
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: {
      canonical: url,
      languages: { "tr-TR": url, "x-default": url },
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: site.name,
      locale: "tr_TR",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  JSON-LD SEMA URETICILERI                                           */
/* ------------------------------------------------------------------ */

const areaServed = [
  {
    "@type": "City",
    name: "İstanbul",
    "@id": "https://www.wikidata.org/wiki/Q406",
  },
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo.svg"),
      width: 512,
      height: 512,
    },
    image: absoluteUrl("/og.png"),
    description: site.description,
    telephone: site.phone.raw,
    foundingDate: String(site.foundingYear),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.area.city,
      addressRegion: site.area.region,
      addressCountry: site.area.country,
    },
    areaServed,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: site.phone.raw,
        availableLanguage: ["Turkish", "tr"],
        areaServed: "TR",
      },
    ],
    sameAs: Object.values(site.social).filter(Boolean),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "tr-TR",
    publisher: { "@id": `${site.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/arama?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessSchema(opts?: {
  name?: string;
  description?: string;
  url?: string;
  districtName?: string;
}) {
  const name = opts?.name ?? site.name;
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness"],
    "@id": `${opts?.url ?? site.url}/#localbusiness`,
    name,
    description: opts?.description ?? site.description,
    url: opts?.url ?? site.url,
    telephone: site.phone.raw,
    image: absoluteUrl("/og.png"),
    priceRange: "₺₺",
    currenciesAccepted: "TRY",
    paymentAccepted: "Nakit, Kredi Kartı, Havale/EFT",
    /**
     * Service-area business: acik adres yayinlanmaz, yalnizca
     * sehir/bolge bildirilir ve hizmet alani areaServed ile tanimlanir.
     */
    address: {
      "@type": "PostalAddress",
      addressLocality: opts?.districtName ?? site.area.city,
      addressRegion: site.area.region,
      addressCountry: site.area.country,
    },
    areaServed: opts?.districtName
      ? [
          {
            "@type": "AdministrativeArea",
            name: `${opts.districtName}, İstanbul`,
          },
        ]
      : areaServed,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    parentOrganization: { "@id": `${site.url}/#organization` },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  districtName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${opts.url}/#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: opts.url,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: opts.districtName
      ? [
          {
            "@type": "AdministrativeArea",
            name: `${opts.districtName}, İstanbul`,
          },
        ]
      : areaServed,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: opts.url,
      servicePhone: site.phone.raw,
      availableLanguage: { "@type": "Language", name: "Turkish", alternateName: "tr" },
    },
    hasOfferCatalog: undefined,
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListSchema(
  items: { name: string; path: string }[],
  listName: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  section: string;
  keywords: string[];
  wordCount?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${opts.url}/#article`,
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    articleSection: opts.section,
    keywords: opts.keywords.join(", "),
    wordCount: opts.wordCount,
    inLanguage: "tr-TR",
    image: [absoluteUrl("/og.png")],
    author: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function blogSchema(
  items: { name: string; path: string; description: string; date: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${site.url}/blog#blog`,
    name: `${site.name} Teknik Blog`,
    description:
      "Endüstriyel fırın ve mutfak ekipmanlarında arıza teşhisi, bakım ve verimlilik rehberleri.",
    url: absoluteUrl("/blog"),
    inLanguage: "tr-TR",
    publisher: { "@id": `${site.url}/#organization` },
    blogPost: items.map((i) => ({
      "@type": "BlogPosting",
      headline: i.name,
      description: i.description,
      url: absoluteUrl(i.path),
      datePublished: i.date,
      author: { "@type": "Organization", name: site.legalName },
    })),
  };
}

export function howToSchema(
  name: string,
  steps: { title: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.text,
    })),
  };
}
