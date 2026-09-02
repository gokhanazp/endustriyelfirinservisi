import type { FaqItem } from "../services";

/** Yazi govdesini olusturan icerik bloklari */
export type Block =
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "note"; title: string; text: string; tone?: "info" | "warn" | "tip" }
  | { t: "table"; head: string[]; rows: string[][]; caption?: string }
  | { t: "steps"; items: { title: string; text: string }[] }
  | { t: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  keywords: string[];
  /** Ilgili hizmet sayfasinin slug'i */
  serviceSlug: string;
  category: string;
  publishedAt: string; // ISO
  updatedAt: string; // ISO
  readingMinutes: number;
  /** Yazinin ustunde gorunen kisa ozet maddeleri */
  takeaways: string[];
  body: Block[];
  faq: FaqItem[];
};

/** Icindekiler listesi icin h2 basliklarini cikarir */
export function tableOfContents(body: Block[]) {
  return body
    .filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2")
    .map((b) => ({ text: b.text, id: slugifyHeading(b.text) }));
}

/** Turkce karakterleri de destekleyen baslik -> id donusturucu */
export function slugifyHeading(text: string): string {
  const map: Record<string, string> = {
    ç: "c",
    Ç: "c",
    ğ: "g",
    Ğ: "g",
    ı: "i",
    İ: "i",
    ö: "o",
    Ö: "o",
    ş: "s",
    Ş: "s",
    ü: "u",
    Ü: "u",
    â: "a",
    î: "i",
    û: "u",
  };
  return text
    .split("")
    .map((ch) => map[ch] ?? ch)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/** Yazinin duz metin uzunlugundan okuma suresi hesaplar (yedek) */
export function estimateReadingMinutes(body: Block[]): number {
  let words = 0;
  for (const b of body) {
    if (b.t === "p" || b.t === "h2" || b.t === "h3" || b.t === "quote") {
      words += b.text.split(/\s+/).length;
    } else if (b.t === "ul" || b.t === "ol") {
      words += b.items.join(" ").split(/\s+/).length;
    } else if (b.t === "steps") {
      words += b.items.map((i) => `${i.title} ${i.text}`).join(" ").split(/\s+/)
        .length;
    } else if (b.t === "note") {
      words += `${b.title} ${b.text}`.split(/\s+/).length;
    } else if (b.t === "table") {
      words += [...b.head, ...b.rows.flat()].join(" ").split(/\s+/).length;
    }
  }
  return Math.max(3, Math.round(words / 200));
}
