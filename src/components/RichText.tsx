import type { ReactNode } from "react";
import Link from "next/link";

/**
 * Blog govdesinde baglamsal ic link kullanabilmek icin kucuk bir
 * markdown-benzeri link sozdizimi:
 *
 *   "... detaylari [konveksiyonel fırın servisi](/hizmetler/konveksiyonel-firin-servisi) sayfasinda."
 *
 * Sadece site ici mutlak yollar ("/" ile baslayan) desteklenir; disa
 * acilan link kabul edilmez, boylece yanlislikla dofollow dis link
 * uretilmez.
 */
const LINK_PATTERN = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

export function renderRich(text: string): ReactNode {
  if (!text.includes("](")) return text;

  const nodes: ReactNode[] = [];
  const re = new RegExp(LINK_PATTERN.source, "g");
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = re.exec(text)) !== null) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));
    nodes.push(
      <Link
        key={`${match.index}-${match[2]}`}
        href={match[2]}
        className="font-semibold text-ember-600 underline decoration-ember-300 underline-offset-[3px] transition-colors hover:text-ember-700 hover:decoration-ember-500"
      >
        {match[1]}
      </Link>
    );
    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

/** Duz metin uzunlugu hesaplarken link sozdizimini temizler */
export function stripRich(text: string): string {
  return text.replace(LINK_PATTERN, "$1");
}
