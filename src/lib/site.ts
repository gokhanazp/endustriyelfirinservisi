/**
 * TEK MERKEZ AYAR DOSYASI
 * ------------------------------------------------------------------
 * Firma bilgilerini yalnizca burada degistirin. Site genelindeki tum
 * basliklar, telefon linkleri, JSON-LD semalari ve sitemap otomatik
 * olarak bu degerleri kullanir.
 */

export const site = {
  /** Yayina alirken kendi alan adinizla degistirin. */
  url: "https://www.endustriyelfirinservisi.com",

  /** Marka / firma adi */
  name: "Endüstriyel Fırın Servisi",
  legalName: "Endüstriyel Fırın Servisi Teknik Servis",
  shortName: "EFS",

  /** Site geneli varsayilan baslik ve aciklama */
  slogan: "Endüstriyel Fırın Servisi ve Tamiri",
  description:
    "İstanbul genelinde endüstriyel fırın servisi ve tamiri. Konveksiyonel fırın, pizza fırını, sanayi tipi fırın ve endüstriyel mutfak ekipmanlarında aynı gün yerinde teknik servis, orijinal yedek parça ve garantili işçilik.",

  /**
   * TEK ILETISIM KANALI: telefon ve WhatsApp ayni numara.
   * - display : sitede gorunen bicim
   * - href    : tiklanabilir baglanti (tel: / wa.me)
   * - raw     : uluslararasi format (JSON-LD semalari kullanir)
   */
  phone: {
    display: "0533 191 24 78",
    href: "tel:+905331912478",
    raw: "+905331912478",
  },
  whatsapp: {
    display: "0533 191 24 78",
    href: "https://wa.me/905331912478",
    raw: "905331912478",
  },

  /**
   * Hizmet alani (service-area business).
   * Fiziksel magaza adresi yayinlanmadigi icin acik adres yerine
   * yalnizca sehir/bolge bilgisi kullanilir. Google bu yapiyi
   * "yerinde hizmet veren isletme" olarak tanir.
   */
  area: {
    city: "İstanbul",
    region: "İstanbul",
    country: "TR",
    countryName: "Türkiye",
  },

  /** Hizmet alaninin merkez koordinati (Istanbul) */
  geo: {
    latitude: 41.0082,
    longitude: 28.9784,
  },

  /** Calisma saatleri */
  hours: {
    weekday: "08:00 - 20:00",
    saturday: "09:00 - 18:00",
    sunday: "Acil servis (7/24)",
    emergency: "7/24 acil arıza hattı",
  },

  /** Sosyal medya — kullanmadiklarinizi silin */
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
    linkedin: "https://www.linkedin.com/",
  },

  /** Kurulus yili — deneyim hesaplamasi icin kullanilir */
  foundingYear: 2009,

  /**
   * Alt bilgideki kunye (web tasarim kredisi).
   * label = baglantinin gorunen metni (ayni zamanda anchor text).
   */
  credit: {
    label: "Web Tasarım",
    url: "https://gokhan-yildirim.com",
  },

  /** Dogrulama kodlari (opsiyonel, bos birakilabilir) */
  verification: {
    google: "",
    yandex: "",
  },
} as const;

export const currentYear = new Date().getFullYear();
export const experienceYears = currentYear - site.foundingYear;

/** Kanonik URL uretici */
export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${clean === "/" ? "" : clean}`;
}

/** Guven rozetleri — anasayfa ve alt sayfalarda kullanilir */
export const trustBadges = [
  {
    title: "Aynı Gün Yerinde Servis",
    text: "Sabah 16:00'a kadar açtığınız arıza kayıtları, aynı gün içinde yerinde müdahale ile karşılanır.",
    icon: "clock",
  },
  {
    title: "Orijinal Yedek Parça",
    text: "Rezistans, termostat, fan motoru, kontaktör ve elektronik kartlarda marka orijinali veya muadili sertifikalı parça.",
    icon: "part",
  },
  {
    title: "24 Ay İşçilik Garantisi",
    text: "Yapılan tüm onarımlar faturalandırılır ve 24 aya varan işçilik garantisi altına alınır.",
    icon: "shield",
  },
  {
    title: "Sertifikalı Teknik Ekip",
    text: "Gaz yakıcı cihaz ve elektrik yetki belgeli teknisyenlerle, üretici servis prosedürlerine uygun müdahale.",
    icon: "badge",
  },
] as const;

/** Calisma adimlari */
export const workflowSteps = [
  {
    step: "01",
    title: "Arıza Bildirimi",
    text: "Telefon veya WhatsApp üzerinden cihaz markası, modeli ve arıza belirtisini iletirsiniz. Ekip aynı görüşmede ön teşhis yapar.",
  },
  {
    step: "02",
    title: "Randevu ve Yönlendirme",
    text: "İşletmenizin bulunduğu ilçeye en yakın teknisyen ekibi yönlendirilir, size net bir varış saati bildirilir.",
  },
  {
    step: "03",
    title: "Yerinde Teşhis",
    text: "Cihaz üzerinde elektriksel ve mekanik ölçümler yapılır; arızanın kaynağı ve değişmesi gereken parçalar netleştirilir.",
  },
  {
    step: "04",
    title: "Onaylı Onarım",
    text: "Parça ve işçilik bedeli önceden bildirilir. Onayınız alınmadan hiçbir işlem yapılmaz.",
  },
  {
    step: "05",
    title: "Test ve Teslim",
    text: "Onarım sonrası cihaz tam yükte çalıştırılır, sıcaklık ve pişirme testleri yapılır, kullanım önerileri aktarılır.",
  },
  {
    step: "06",
    title: "Garanti ve Takip",
    text: "Servis formu ve fatura teslim edilir. Garanti süresi boyunca aynı arıza için ücret alınmaz.",
  },
] as const;
