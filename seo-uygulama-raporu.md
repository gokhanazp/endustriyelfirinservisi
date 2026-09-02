# SEO Eylem Planı — Uygulama Raporu

**Tarih:** 1 Eylül 2026
**Kapsam:** `seoeylemplani.md` dosyasındaki kod tarafı maddeleri
**Doğrulama:** `tsc --noEmit` temiz · 77 URL · 13 bağlamsal iç link · JSON-LD ayrıştırma testi geçti

---

## 0. Önemli düzeltme: plan siteyi dışarıdan analiz etmiş

Plan, sayfa kaynağını okuyamadığını kendi sonunda belirtiyor. Kod tabanı denetlendiğinde planın
"eksik" saydığı maddelerin bir kısmının **zaten uygulanmış** olduğu görüldü:

| Planın iddiası | Kodun gerçeği |
|---|---|
| Yapısal veri doğrulanmamış | `lib/seo.ts` içinde Organization, WebSite, LocalBusiness, Service, FAQPage, BreadcrumbList, ItemList, BlogPosting, Blog, HowTo üreticileri mevcut ve kullanılıyor |
| `AggregateRating` riski | Hiç kullanılmamış — doğru karar |
| Canonical / OG / robots şüpheli | `buildMetadata()` her sayfada canonical, hreflang, OG, Twitter ve robots üretiyor |
| `<html lang="tr">` kontrol edilmeli | Var |
| Sayfa başına tek H1 | `PageHero` tek H1 üretiyor; footer başlığı zaten H2 |
| İlçe sayfaları şablon olabilir | 39 ilçenin her birinde özgün `profile` + `serviceNote` metni ve komşu ilçe linkleri var |
| Hizmet sayfalarından blog'a link yok | `getPostsByService()` ile "Bu hizmetle ilgili yazılarımız" bloğu zaten vardı |

---

## 1. Yapılan değişiklikler

### 1.1 `sitemap.xml` `lastmod` düzeltmesi 🔴
- **Yeni:** `src/lib/content-dates.ts` — sayfa/hizmet/marka/ilçe içerik tarihleri tek yerde.
- **Değişen:** `src/app/sitemap.ts` — `new Date()` kaldırıldı; tarihler gerçek içerik tarihinden geliyor.
- `changefreq` ve `priority` kaldırıldı (Google 2023'ten beri yok sayıyor).
- **Sonuç:** Tek bir build zamanı yerine 9 farklı gerçek tarih.

> **Bakım notu:** Bir sayfanın içeriğini değiştirdiğinizde `content-dates.ts` içindeki ilgili tarihi elle güncelleyin. Blog yazıları kendi `updatedAt` alanını kullanır, oraya dokunmaya gerek yok.

### 1.2 `/hizmetler` sayfası yeniden yazıldı 🔴
- **Yeni:** `src/lib/services-hub.ts` — hub sayfasının tüm metni (veri katmanı).
- **Değişen:** `src/app/hizmetler/page.tsx` — plandaki 11 bölümlü yapı kuruldu:
  1. Hero + breadcrumb (korundu)
  2. 3 paragraflık giriş — hedef kelime ilk 100 kelimede
  3. 6 hizmet kartı (korundu, `h2` → `h3` düzeltildi; sayfada tek `h1` + bölüm `h2`'leri)
  4. "Hangi hizmeti seçmeliyim?" tablosu — 6 satır, featured snippet adayı
  5. Arıza belirtisi → kök neden → teknik yazı tablosu — 6 satır, blog'a iç link
  6. 6 adımlı servis süreci
  7. Servis bedeli & garanti şeffaflığı — 6 kalem
  8. 17 marka linki (korundu)
  9. 8 soruluk SSS + `FAQPage` şeması (ana sayfa ve alt sayfalarla kesişmiyor)
  10. Son 3 teknik yazı kartı
  11. 16 ilçe + "Tüm ilçeler" + CTA
- **Kelime sayısı:** ~350 → **~1.706** (hedef 1.400-1.800 ✓)
- **Şema:** BreadcrumbList + ItemList + **FAQPage** (yeni)

### 1.3 Başlık tekrarı — site geneli düzeltme 🔴
Planın yakaladığı 74 karakterlik başlık aslında **tek bir sayfanın değil, tüm sitenin** sorunuydu:
`layout.tsx` içindeki `title.template` her sayfa başlığına " | Endüstriyel Fırın Servisi" ekliyordu.
Sayfa başlıkları zaten bu ifadeyi taşıdığı için anahtar kelime her sayfada iki kez geçiyordu.

- `buildMetadata()` artık `title: { absolute: ... }` kullanıyor → şablon eki devre dışı.
- Uzun kalan başlıklar kısaltıldı (ana sayfa, /bolgeler, /blog, marka ve ilçe şablonları, 3 blog yazısı).
- 160 karakteri aşan 20+ meta açıklama kısaltıldı.

**Sonuç — 75 sayfa şablonu:** başlık 38-62 karakter, açıklama 115-160 karakter. Sınır aşan sayfa yok.

### 1.4 Marka ↔ hizmet eşleştirmesi 🟠
- **Değişen:** `src/lib/brands.ts` — `brandServiceMap` (17/17 marka), `getBrandServiceSlugs()`, `getServiceBrands()`.
- Marka sayfalarına gövde içinde "**{Marka} cihazınız için doğru servis başlığı**" bloğu eklendi;
  kenar çubuğunda eşleşen hizmetler öne çıkarıldı, kalanlar "Diğer hizmetler" altına alındı.
- Hizmet sayfalarının kenar çubuğu artık ilk 10 markayı değil, **o hizmete ait markaları** gösteriyor
  (ör. Pizza Fırın Taşı Değişimi → Üçler, Kayalar; Konveksiyonel → 14 marka).

### 1.5 Blog gövdesinde bağlamsal iç link 🔴
- **Yeni:** `src/components/RichText.tsx` — `[metin](/yol)` sözdizimini `<Link>`'e çeviren renderer.
  Yalnızca site içi yollar kabul edilir; yanlışlıkla dış link üretilemez.
- **Değişen:** `src/components/PostBody.tsx` — paragraf, liste, adım, not ve tablo hücrelerinde aktif.
- 6 blog yazısının gövdesine **12 bağlamsal link** yerleştirildi (hizmet + ilgili yazı).
  Tümü mevcut cümlelerin içine, doğal anchor text ile.

### 1.6 Footer sadeleştirmesi 🟡
- 39 ilçe → **10 öne çıkan ilçe + "Tüm servis bölgeleri (39 ilçe)"**
- 17 marka → **8 marka + "Tüm markalar (17)"**
- Sayfa başına footer linki ~70 → ~38.
- **Yeni:** `districts.ts` içinde `featuredDistricts` (Kadıköy, Ataşehir, Ümraniye, Üsküdar, Maltepe,
  Beşiktaş, Şişli, Beyoğlu, Bağcılar, Başakşehir).
- Kaybolan iç linkleri telafi etmek için `/hizmetler` sayfasına 16 ilçelik blok eklendi.

### 1.7 İlçe meta açıklamaları özgünleştirildi 🟠
39 ilçenin meta açıklaması yalnızca ilçe adıyla farklılaşıyordu. Artık her açıklama
o ilçenin **mahalle adlarını** taşıyor (ör. "Moda, Caferağa ve çevresinde…") — doorway page riski azaldı.

---

## 2. Değiştirilen dosyalar

```
YENİ   src/lib/content-dates.ts          sitemap lastmod kaynağı
YENİ   src/lib/services-hub.ts           /hizmetler içeriği
YENİ   src/components/RichText.tsx       blog içi link renderer

src/app/sitemap.ts                       lastmod + changefreq/priority
src/app/hizmetler/page.tsx               tamamen yeniden yazıldı
src/app/hizmetler/[slug]/page.tsx        markaya göre kenar çubuğu
src/app/markalar/[slug]/page.tsx         hizmet eşleşmesi + başlık/açıklama
src/app/bolgeler/[slug]/page.tsx         özgün meta açıklama + başlık
src/app/page.tsx                         meta uzunlukları
src/app/blog/page.tsx                    başlık uzunluğu
src/app/bolgeler/page.tsx                başlık uzunluğu
src/app/iletisim/page.tsx                açıklama uzunluğu
src/app/gizlilik-politikasi/page.tsx     başlık + açıklama
src/lib/seo.ts                           title.absolute
src/lib/services.ts                      3 meta açıklama kısaltıldı
src/lib/brands.ts                        brandServiceMap + 2 yardımcı fonksiyon
src/lib/districts.ts                     featuredDistricts
src/components/Footer.tsx                link sadeleştirmesi
src/components/PostBody.tsx              renderRich entegrasyonu
src/lib/blog/posts/*.ts (6 dosya)        12 bağlamsal iç link + meta
```

---

## 3. Yapılamayanlar ve nedenleri

| Madde | Neden |
|---|---|
| **Görsel + alt text** (plan 4.2/3, 5.4) | `public/` klasöründe hiç fotoğraf yok — sadece font, logo, `og.png`. Saha fotoğrafı olmadan görsel eklenemez. **Bu, kalan en büyük teknik eksik.** |
| **`og.png` gerçek görsel mi?** | Dosya var ama içeriği doğrulanmadı. 1200×630 saha fotoğrafı önerilir. |
| Google Business Profile (plan 7) | Kod dışı, işletme tarafında yapılacak — **planın en kritik maddesi bu.** |
| Değerlendirme toplama, Armut/Bing/Yandex kayıtları | Kod dışı |
| Backlink çalışması (plan 9) | Kod dışı |
| Search Console / GA4 kurulumu | `site.verification.google` ve `.yandex` alanları `lib/site.ts` içinde boş — doğrulama kodunu oraya yazmanız yeterli, meta etiketi otomatik basılıyor |
| Core Web Vitals ölçümü | Yayında gerçek kullanıcı verisiyle ölçülmeli |
| www/non-www 301, trailing slash, 404 status | Sunucu/hosting katmanı — deploy sonrası kontrol edilmeli (plan 5.2) |

---

## 4. Sıradaki adımlar

1. **`npm run dev` ile görsel kontrol** — özellikle `/hizmetler` sayfasının yeni tabloları ve mobil görünümü.
2. **Saha fotoğrafları** — 6 hizmet kartı ve `og.png` için. En yüksek getirili kalan teknik iş.
3. **`lib/site.ts` → `verification.google`** — Search Console doğrulama kodunu ekleyin.
4. **`lib/site.ts` → `social`** — Instagram/Facebook alanları şu an genel adresler; kullanılmayanları silin
   (JSON-LD `sameAs` alanına aynen gidiyor, boş profil linki güven sinyalini zayıflatır).
5. **Google Business Profile** — doğrulama süreci haftalar sürebilir, ilk gün başlatın.

---

## 5. Cloudflare Pages dağıtımı

Site tam statik olarak üretiliyor (`output: "export"`). API route, server action, ISR ve
`next/image` kullanımı yok; 77 sayfanın tamamı build sırasında HTML'e dönüşüyor.
İletişim formu da sunucuya değil, WhatsApp bağlantısına gidiyor.

### Cloudflare Pages ayarları

| Alan | Değer |
|---|---|
| Framework preset | **Next.js (Static HTML Export)** |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | `22` (Environment variables → `NODE_VERSION = 22`) |
| Compatibility flag | **gerekmiyor** (`nodejs_compat`'a ihtiyaç yok) |

### Yerelde doğrulama

```bash
npm run build          # out/ klasörünü üretir
npx serve out          # veya: python3 -m http.server -d out 8000
```

### Başlıklar

`next.config.mjs` içindeki `headers()` statik export'ta çalışmadığı için güvenlik ve cache
başlıkları **`public/_headers`** dosyasına taşındı. Cloudflare Pages bu dosyayı otomatik okur.
Başlık değiştirmek istediğinizde `next.config.mjs`'yi değil o dosyayı düzenleyin.

### Yayın sonrası kontrol listesi

- [ ] **www / non-www 301** — `lib/site.ts` içinde kanonik adres `https://www.endustriyelfirinservisi.com`.
      Cloudflare → Rules → Redirect Rules ile apex (`endustriyelfirinservisi.com`) adresini
      `www`'ya 301 yönlendirin. Aksi halde aynı içerik iki adreste yayınlanır.
- [ ] `https://www.endustriyelfirinservisi.com/sitemap.xml` açılıyor mu, `lastmod` tarihleri farklı mı
- [ ] `/robots.txt` içindeki `Host` ve `Sitemap` satırları doğru domaini gösteriyor mu
- [ ] Olmayan bir adres (`/deneme`) gerçekten **404** status kodu döndürüyor mu
- [ ] Bir alt sayfada `curl -I` ile `x-content-type-options` ve `referrer-policy` başlıkları geliyor mu
- [ ] Search Console'a domain doğrulaması + sitemap gönderimi
