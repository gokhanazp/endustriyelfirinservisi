import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { brands } from "@/lib/brands";
import { districts } from "@/lib/districts";
import { posts } from "@/lib/blog";
import {
  brandDates,
  brandDatesDefault,
  contentDate,
  districtDates,
  districtDatesDefault,
  pageDates,
  serviceDates,
} from "@/lib/content-dates";

/**
 * `output: "export"` ile metadata route'lari statik dosyaya yazilabilmesi
 * icin force-static gerekiyor; aksi halde build "Collecting page data"
 * asamasinda hata veriyor.
 */
export const dynamic = "force-static";

/**
 * lastmod degerleri build zamanindan degil, @/lib/content-dates
 * dosyasindaki gercek icerik guncelleme tarihlerinden gelir.
 *
 * changefreq ve priority bilincli olarak eklenmemistir: Google bu iki
 * alani 2023'ten beri yok sayiyor, sitemap'i gereksiz sisiriyorlar.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const day = (iso: string) => new Date(`${iso}T00:00:00Z`);

  const staticPages: MetadataRoute.Sitemap = (
    Object.entries(pageDates) as [keyof typeof pageDates, string][]
  ).map(([path, iso]) => ({
    url: path === "/" ? `${site.url}/` : `${site.url}${path}`,
    lastModified: day(iso),
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/hizmetler/${s.slug}`,
    lastModified: contentDate(serviceDates, s.slug, "2026-08-30"),
  }));

  const brandPages: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${site.url}/markalar/${b.slug}`,
    lastModified: contentDate(brandDates, b.slug, brandDatesDefault),
  }));

  const districtPages: MetadataRoute.Sitemap = districts.map((x) => ({
    url: `${site.url}/bolgeler/${x.slug}`,
    lastModified: contentDate(districtDates, x.slug, districtDatesDefault),
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: day(p.updatedAt),
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...brandPages,
    ...districtPages,
    ...blogPages,
  ];
}
