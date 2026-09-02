import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * `output: "export"` ile metadata route'lari statik dosyaya yazilabilmesi
 * icin force-static gerekiyor; aksi halde build "Collecting page data"
 * asamasinda hata veriyor.
 */
export const dynamic = "force-static";


export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
