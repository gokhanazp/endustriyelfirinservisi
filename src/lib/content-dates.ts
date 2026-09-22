/**
 * ICERIK GUNCELLEME TARIHLERI
 * ------------------------------------------------------------------
 * sitemap.xml icindeki <lastmod> degerleri BURADAN okunur.
 *
 * NEDEN: lastmod'u `new Date()` ile uretmek, icerik hic degismese bile
 * her deploy'da tarihi degistirir. Google bunu fark ettiginde sitenin
 * lastmod sinyalini tamamen yok sayar. Bu dosya, tarihi gercek icerik
 * degisikligine baglar.
 *
 * KULLANIM: Bir sayfanin icerigini degistirdiginizde asagidaki ilgili
 * tarihi elle guncelleyin (YYYY-MM-DD). Blog yazilari bu dosyaya dahil
 * degildir; onlar kendi `updatedAt` alanlarini kullanir.
 */

/** Statik sayfalarin son icerik guncelleme tarihleri */
export const pageDates = {
  "/": "2026-09-01",
  "/hizmetler": "2026-09-02",
  "/markalar": "2026-09-22",
  "/bolgeler": "2026-08-30",
  "/blog": "2026-09-01",
  "/hakkimizda": "2026-08-29",
  "/sikca-sorulan-sorular": "2026-08-29",
  "/iletisim": "2026-08-29",
  "/gizlilik-politikasi": "2026-08-29",
} as const;

/** Tek tek guncellenen hizmet sayfalari */
export const serviceDates: Record<string, string> = {
  "endustriyel-firin-servisi": "2026-09-01",
  "endustriyel-mutfak-servisi": "2026-08-30",
  "sanayi-tipi-firin-servisi": "2026-08-30",
  "pizza-firini-servisi": "2026-08-30",
  "konveksiyonel-firin-servisi": "2026-08-30",
  "pizza-firin-tasi-degisimi": "2026-08-30",
  "kombi-firin-servisi": "2026-09-02",
  "konveyorlu-firin-servisi": "2026-09-02",
  "donerli-firin-servisi": "2026-09-02",
  "matador-firin-servisi": "2026-09-02",
  "pide-lahmacun-firin-servisi": "2026-09-02",
};

/**
 * Marka ve ilce sayfalari sablon + ozgun veriden uretildigi icin
 * toplu tarih kullanir. Bir markanin/ilcenin metnini tek tek
 * guncellerseniz asagidaki map'lere o slug icin satir ekleyin.
 */
export const brandDatesDefault = "2026-08-30";
export const brandDates: Record<string, string> = {
  "senoven-firin-servisi": "2026-09-02",
  "sgs-firin-servisi": "2026-09-02",
  "omake-firin-servisi": "2026-09-02",
  "ozkoseoglu-firin-servisi": "2026-09-22",
  "fimak-firin-servisi": "2026-09-22",
  "altintop-firin-servisi": "2026-09-22",
  "turhan-celik-firin-servisi": "2026-09-22",
  "atalay-firin-servisi": "2026-09-22",
  "furmaks-firin-servisi": "2026-09-22",
};

export const districtDatesDefault = "2026-08-30";
export const districtDates: Record<string, string> = {};

/** Yardimci: map'te varsa onu, yoksa varsayilani Date olarak dondurur */
export function contentDate(
  map: Record<string, string>,
  key: string,
  fallback: string
): Date {
  return new Date(`${map[key] ?? fallback}T00:00:00Z`);
}
