import type { Post } from "./types";
import { post as firinIsinmiyor } from "./posts/endustriyel-firin-isinmiyor";
import { post as mutfakBakim } from "./posts/endustriyel-mutfak-bakim-takvimi";
import { post as sanayiEnerji } from "./posts/sanayi-tipi-firin-enerji-tasarrufu";
import { post as pizzaTaban } from "./posts/pizza-firininda-taban-cig-kaliyor";
import { post as kombiKirec } from "./posts/kombi-firinda-kirec-sorunu";
import { post as tasSecimi } from "./posts/pizza-firin-tasi-secimi";

export type { Post, Block } from "./types";
export {
  tableOfContents,
  slugifyHeading,
  estimateReadingMinutes,
} from "./types";

/** Yayin tarihine gore yeniden eskiye siralanmis yazi listesi */
export const posts: Post[] = [
  tasSecimi,
  kombiKirec,
  pizzaTaban,
  sanayiEnerji,
  mutfakBakim,
  firinIsinmiyor,
].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

export const postSlugs = posts.map((p) => p.slug);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Bir hizmete bagli yazilari dondurur */
export function getPostsByService(serviceSlug: string): Post[] {
  return posts.filter((p) => p.serviceSlug === serviceSlug);
}

/** Ilgili yazilar: once ayni hizmetten, sonra en yeniler */
export function getRelatedPosts(current: Post, limit = 3): Post[] {
  const sameService = posts.filter(
    (p) => p.slug !== current.slug && p.serviceSlug === current.serviceSlug
  );
  const others = posts.filter(
    (p) => p.slug !== current.slug && p.serviceSlug !== current.serviceSlug
  );
  return [...sameService, ...others].slice(0, limit);
}

export const categories = Array.from(new Set(posts.map((p) => p.category)));

/** Tarihi Turkce okunur bicime cevirir */
export function formatDate(iso: string): string {
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  const d = new Date(iso + "T00:00:00Z");
  return `${d.getUTCDate()} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
