# Endüstriyel Fırın Servisi — Kurumsal Web Sitesi

Next.js 15 (App Router) + React 19 + Tailwind CSS 4 ile hazırlanmış, **%100 statik üretilen (SSG)** ve SEO odaklı teknik servis sitesi.

---

## Hızlı başlangıç

```bash
npm install       # bağımlılıkları kur
npm run dev       # geliştirme sunucusu → http://localhost:3000
npm run build     # üretim derlemesi
npm run start     # üretim sunucusu
```

Node.js 18.18+ (önerilen: 20 veya 22) gereklidir.

---

## İLK YAPILACAK: Firma bilgilerini girin

Tüm iletişim bilgileri **tek bir dosyada** toplanmıştır:

### `src/lib/site.ts`

Buradaki alanları kendi bilgilerinizle değiştirin — site genelindeki başlıklar,
telefon linkleri, JSON-LD şemaları, footer ve sitemap otomatik güncellenir.

| Alan | Açıklama |
|---|---|
| `url` | **Zorunlu.** Alan adınız (`https://www.siteadresiniz.com`). Canonical, sitemap ve robots.txt bunu kullanır. |
| `name`, `legalName` | Marka ve ticari unvan |
| `phone` | Tek iletişim numarası. `display` görünen metin, `href`/`raw` uluslararası format (`+90...`) |
| `whatsapp` | Telefonla aynı numara. `raw` alanı `905xxxxxxxxx` biçiminde olmalı |
| `area` | Hizmet bölgesi (şehir/bölge). Açık adres yayınlanmaz — service-area business yapısı |
| `geo` | Hizmet alanının merkez koordinatı |
| `hours` | Çalışma saatleri |
| `social` | Sosyal medya adresleri (kullanmadıklarınızı silin) |
| `foundingYear` | Kuruluş yılı — "X+ yıl deneyim" otomatik hesaplanır |
| `verification` | Google Search Console / Yandex doğrulama kodları |

> ⚠️ Yayına almadan önce `site.url` değerini **mutlaka** kendi alan adınızla
> değiştirin. Aksi halde canonical etiketleri ve sitemap yanlış adres gösterir.

**İletişim yapısı:** Sitede tek bir iletişim kanalı vardır — telefon ve
WhatsApp aynı numaradır. E-posta ve açık adres bilinçli olarak
yayınlanmamıştır; JSON-LD şemalarında işletme, Google'ın "service-area
business" (yerinde hizmet veren işletme) yapısına uygun biçimde yalnızca
`İstanbul` bölgesi ve `areaServed` ile tanımlanır. İleride e-posta veya adres
eklemek isterseniz `site.ts` içine alan eklemeniz ve `seo.ts` içindeki
`organizationSchema` / `localBusinessSchema` fonksiyonlarında karşılık gelen
satırları açmanız yeterlidir.

---

## İçerik nerede?

Tüm metinler veri dosyalarındadır; sayfa bileşenlerini düzenlemenize gerek yoktur.

| Dosya | İçerik |
|---|---|
| `src/lib/services.ts` | 6 hizmet sayfası (başlık, meta, giriş metni, arıza belirtileri, kapsam, parça listesi, SSS) |
| `src/lib/brands.ts` | 17 marka sayfası (giriş, ürün grupları, sık arızalar, parçalar, SSS) |
| `src/lib/districts.ts` | 39 İstanbul ilçesi (mahalleler, komşu ilçeler, bölge profili, saha notu) |
| `src/lib/blog/posts/*.ts` | 6 blog yazısı — her biri bir hizmete bağlı |
| `src/lib/blog/index.ts` | Yazı listesi, ilgili yazı eşleştirmesi, tarih biçimlendirme |
| `src/lib/site.ts` | Firma bilgileri, güven rozetleri, çalışma adımları |
| `src/lib/seo.ts` | Metadata ve JSON-LD şema üreticileri |

**Yeni hizmet eklemek:** `services.ts` dizisine yeni bir nesne ekleyin — sayfa,
menü, footer, sitemap ve iç bağlantılar otomatik oluşur.

**Yeni marka eklemek:** `brands.ts` dizisine ekleyin.

**Yeni ilçe/şehir eklemek:** `districts.ts` içindeki `d(...)` çağrılarından
birini kopyalayıp düzenleyin.

**Yeni blog yazısı eklemek:**

1. `src/lib/blog/posts/` altında yeni bir `.ts` dosyası oluşturun (mevcut
   birini kopyalamak en hızlısı)
2. `src/lib/blog/index.ts` içinde import edip `posts` dizisine ekleyin
3. Hepsi bu — sayfa, blog listesi, ilgili hizmet sayfası, sitemap ve JSON-LD
   otomatik oluşur

Yazı gövdesi blok tabanlıdır; HTML yazmanız gerekmez:

```ts
body: [
  { t: "h2", text: "Bölüm başlığı" },          // içindekilere otomatik girer
  { t: "h3", text: "Alt başlık" },
  { t: "p",  text: "Paragraf metni." },
  { t: "ul", items: ["madde", "madde"] },
  { t: "ol", items: ["numaralı", "liste"] },
  { t: "steps", items: [{ title: "Adım", text: "Açıklama" }] },
  { t: "note", tone: "warn", title: "Uyarı", text: "…" },  // info | warn | tip
  { t: "table", head: ["A","B"], rows: [["1","2"]], caption: "…" },
  { t: "quote", text: "Vurgulanacak cümle." },
]
```

---

## Sayfa yapısı (toplam 77 sayfa)

```
/                                          Ana sayfa
/hizmetler                                 Hizmet listesi
/hizmetler/[slug]                          6 hizmet sayfası
/markalar                                  Marka listesi
/markalar/[slug]                           17 marka sayfası
/bolgeler                                  Servis bölgeleri listesi
/bolgeler/[slug]                           39 ilçe sayfası
/blog                                      Teknik blog listesi
/blog/[slug]                               6 blog yazısı
/hakkimizda
/sikca-sorulan-sorular
/iletisim
/gizlilik-politikasi
/sitemap.xml                               Otomatik üretilir
/robots.txt                                Otomatik üretilir
/manifest.webmanifest                      PWA manifest
```

**URL örnekleri (anahtar kelime içeren yapı):**

- `/hizmetler/endustriyel-firin-servisi`
- `/markalar/electrolux-firin-servisi`
- `/bolgeler/kadikoy-endustriyel-firin-servisi`

---

## SEO altyapısı

Sitede hazır gelen SEO bileşenleri:

- **Metadata API** — her sayfada benzersiz `title`, `description`, `keywords`
- **Canonical URL** — her sayfada tekil kanonik adres
- **hreflang** — `tr-TR` ve `x-default`
- **Open Graph + Twitter Card** — `public/og.png` görseliyle
- **JSON-LD yapısal veri:**
  - `Organization` + `WebSite` (site geneli)
  - `LocalBusiness` / `HVACBusiness` (ilçe sayfalarında ilçeye özel `areaServed`)
  - `Service` (her hizmet, marka ve ilçe sayfasında)
  - `FAQPage` (SSS bölümü olan tüm sayfalarda → Google'da zengin sonuç)
  - `BreadcrumbList` (tüm alt sayfalarda)
  - `ItemList` (liste sayfalarında)
  - `HowTo` (ana sayfadaki servis süreci)
  - `BlogPosting` + `Blog` (teknik blog yazıları)
- **sitemap.xml** — 77 URL, öncelik ve güncellenme sıklığıyla
- **robots.txt** — sitemap referanslı
- **Semantik HTML** — tek `<h1>`, hiyerarşik `<h2>/<h3>`, `<nav aria-label>`,
  `<ol>` breadcrumb
- **İç bağlantı ağı** — hizmet ↔ marka ↔ ilçe sayfaları arasında çapraz
  bağlantılar; footer'da 39 ilçe bağlantısı
- **Core Web Vitals:**
  - Tüm sayfalar build sırasında statik HTML olarak üretilir
  - Yazı tipleri kendi sunucumuzda (self-hosted, `public/fonts`) — Google
    Fonts'a istek yok, `preload` ile LCP hızlı
  - Görsel yerine inline SVG ikonlar — layout shift yok
  - Sayfa başına ~106 kB First Load JS
  - SSS akordiyonu native `<details>` — ek JavaScript gerektirmez
- **Erişilebilirlik** — "İçeriğe geç" bağlantısı, `focus-visible` odak halkası,
  `prefers-reduced-motion` desteği, aria etiketleri

### Yayın sonrası yapılacaklar

1. `site.ts` içinde `url` değerini kendi alan adınızla değiştirin
2. Google Search Console'a siteyi ekleyin, doğrulama kodunu
   `site.verification.google` alanına yazın
3. `https://alanadiniz.com/sitemap.xml` adresini Search Console'a gönderin
4. **Google Business Profile** (Google Haritalar) kaydı açın — yerel SEO'da en
   büyük etkiyi bu yapar. `site.geo` değerlerini gerçek konumunuzla eşleyin
5. `public/og.png` görselini kendi marka görselinizle değiştirin (1200×630)
6. `public/favicon.svg` ve `public/logo.svg` dosyalarını logonuzla değiştirin
7. Zengin sonuç testi: <https://search.google.com/test/rich-results>

---

## Yayına alma (deploy)

### Vercel (önerilen)

```bash
npm i -g vercel
vercel
```

Depoyu GitHub'a yükleyip Vercel'e bağlamanız da yeterlidir; ek ayar gerekmez.

### Kendi sunucunuz (Node)

```bash
npm run build
npm run start        # varsayılan port 3000
```

Önüne Nginx ters vekil (reverse proxy) koyup HTTPS sertifikası tanımlayın.

### Tamamen statik dışa aktarma (paylaşımlı hosting / cPanel)

`next.config.mjs` dosyasına `output: "export"` ekleyip `npm run build`
çalıştırın; `out/` klasörünü sunucuya yükleyin. (Bu modda `headers()` bloğu
çalışmaz — güvenlik başlıklarını sunucu tarafında tanımlayın.)

---

## Teknik notlar

- **Tailwind CSS 4** — yapılandırma `src/app/globals.css` içindeki `@theme`
  bloğunda. Renk paleti: `ink` (lacivert/antrasit) ve `ember` (turuncu).
- **İletişim formu** sunucu gerektirmez; doldurulan bilgiyi WhatsApp veya
  e-posta bağlantısına aktarır. Sunucu tarafı form isterseniz
  `src/components/ContactForm.tsx` içine bir `POST` isteği ekleyip
  `src/app/api/` altında route oluşturabilirsiniz.
- **Güvenlik başlıkları** `next.config.mjs` içindeki `headers()` fonksiyonunda.
- **Bağımlılık güvenliği** — `npm audit` temiz (0 açık).

---

## Klasör yapısı

```
src/
├── app/
│   ├── layout.tsx              Kök şablon, global metadata, JSON-LD
│   ├── page.tsx                Ana sayfa
│   ├── globals.css             Tailwind teması + font tanımları
│   ├── sitemap.ts / robots.ts / manifest.ts
│   ├── not-found.tsx
│   ├── hizmetler/[slug]/
│   ├── markalar/[slug]/
│   ├── bolgeler/[slug]/
│   ├── hakkimizda/ iletisim/ sikca-sorulan-sorular/ gizlilik-politikasi/
├── components/
│   ├── Header.tsx              Mega menü + mobil menü
│   ├── Footer.tsx              39 ilçe iç bağlantı ağı
│   ├── Ui.tsx                  PageHero, SectionHead, FaqAccordion, CtaBand…
│   ├── ContactForm.tsx
│   └── Icons.tsx               Inline SVG ikon seti
└── lib/
    ├── site.ts                 ⚙️ FİRMA BİLGİLERİ BURADA
    ├── services.ts / brands.ts / districts.ts
    └── seo.ts
public/
├── fonts/                      Self-hosted Inter + Manrope (woff2)
├── og.png, favicon.svg, logo.svg, apple-icon.png
```
