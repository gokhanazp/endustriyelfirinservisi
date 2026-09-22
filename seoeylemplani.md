# Endüstriyel Fırın Servisi — SEO Eylem Planı

**Site:** endustriyelfirinservisi.com (yerel: `localhost:3001`)
**Hedef:** "Hizmetler" sayfası ve hizmet alt sayfalarıyla İstanbul'da endüstriyel fırın servisi aramalarında 1. sıra
**Analiz tarihi:** 1 Eylül 2026

---

## 1. Yönetici Özeti

Site, bu sektördeki rakiplerin çok önünde bir **bilgi mimarisi**yle kurulmuş. 6 hizmet + 17 marka + 39 ilçe = ~80 landing page ve gerçek teknik derinliği olan bir blog. Rakiplerin hiçbirinde bu yapı yok.

Ama şu anda üç şey eksik ve bu üçü olmadan ilk sıra gelmez:

| Sorun | Etki |
|---|---|
| `/hizmetler` sayfası "link listesi" — ~350 kelime özgün içerik, sıralama yapacak metin yok | 🔴 Kritik |
| Yapısal veri (Schema.org) ve Google Business Profile durumu doğrulanmamış | 🔴 Kritik |
| Sıfır backlink, sıfır Google değerlendirmesi, domain yaşı 0 | 🟠 Yüksek |

**En kritik gerçek:** "endüstriyel fırın servisi" gibi aramalarda ekranın üst yarısını **Google Harita paketi (Local Pack)** kaplar. Organik 1. sıra, harita paketinin altında kalır. Yani Google Business Profile'sız bir SEO çalışması, kazanılabilir trafiğin yarısını baştan bırakmak demektir. Bu yüzden Bölüm 7'yi Bölüm 4 kadar ciddiye alın.

---

## 2. Rakip Analizi

Aranan sorgular: `endüstriyel fırın servisi istanbul`, `sanayi tipi fırın servisi tamir bakım istanbul`

### 2.1 Rakip karnesi

| Rakip | Konumlanma | Güçlü yanı | Zayıf yanı (bizim fırsatımız) |
|---|---|---|---|
| **inoksteknik.com** | En yakın gerçek rakip. `/hizmetler/istanbul-endustriyel-firin-teknik-servisi/` ve `/hizmetler/sanayi-tipi-firin-servisi/` ile iki ayrı sorguda birden çıkıyor | Bizimkine benzer hizmet-slug mimarisi, yerleşik domain | Marka ve ilçe kırılımı yok, blog derinliği yok |
| **cmteknik.com.tr** | "Endüstriyel mutfak" odaklı, fırın ikincil | ~3.500-4.000 kelime ana sayfa, 48+ marka, 15 yıl + fiziksel adres (Ataşehir), yetkili servis iddiası, blog var | **FAQ yok**, hizmet başına ayrı sayfa yok, ilçe sayfası yok |
| **inokservis.com** | Zayıf ama sıralanıyor | Net telefon odaklı | ~1.200 kelime, **blog yok, FAQ yok**, sadece Küçükçekmece/Halkalı |
| **fatihteknikistanbul.com** | Ekipman bazlı sayfalar (fritöz vb.) | Ekipman kırılımı | Fırın odaklı değil |
| **etkiliendustriyelservisi.com** | İstanbul + Kocaeli + Gebze | Bölge genişliği | İçerik sığ |
| **armut.com** | 2 sorguda da ilk 2'de | Devasa domain otoritesi | **Rakip değil, kanal.** Buraya kayıt olunmalı |

### 2.2 Rakiplerden çıkan üç ders

1. **Hiçbirinde FAQ bölümü yok.** Bizde ana sayfada 6 soruluk FAQ + ayrı `/sikca-sorulan-sorular` var. FAQPage schema ile bu, SERP'te rakiplerde olmayan bir görünürlük demek.
2. **Hiçbirinde arıza-belirti bazlı içerik yok.** Bizim blog ("fırın ısınmıyor", "taban çiğ kalıyor", "kireç") tam da müşterinin aradığı dil. Bu içerikleri hizmet sayfalarına bağlamak fark yaratır.
3. **Güven sinyalinde gerideyiz.** CM Teknik: açık fiziksel adres, 15 yıl, yetkili servis listesi. Bizde 17 yıl deneyim yazıyor ama **açık adres ve Google değerlendirmesi görünmüyor.** Bu doldurulmalı.

### 2.3 Bizim yapısal üstünlüğümüz

| Kriter | Biz | En iyi rakip |
|---|---|---|
| Hizmet landing page | 6 | 2 (inoksteknik) |
| Marka sayfası | 17 | 0 |
| İlçe sayfası | 39 | 0 |
| Teknik blog yazısı | 6 | ~var (sığ) |
| FAQ bölümü | Var | Yok |
| Toplam indekslenebilir sayfa | ~80 | ~15-20 |

Yani **savaş içerik derinliğinde değil, sayfa kalitesi + otorite + yerel sinyallerde** kazanılacak.

---

## 3. `/hizmetler` İçin Hedef Kelime Haritası

`/hizmetler` bir **hub** sayfası. Genel ve karşılaştırmalı sorguları o alacak, spesifik sorguları alt sayfalar alacak. Karıştırılırsa keyword cannibalization olur.

### 3.1 `/hizmetler` — birincil hedefler
- endüstriyel fırın servisi hizmetleri
- endüstriyel fırın ve mutfak servisi istanbul
- endüstriyel mutfak teknik servis hizmetleri
- fırın bakım onarım hizmetleri istanbul

### 3.2 Alt sayfalara bırakılacaklar (hub'da hedeflenmeyecek)

| Sayfa | Birincil kelime |
|---|---|
| `/hizmetler/endustriyel-firin-servisi` | endüstriyel fırın servisi / endüstriyel fırın tamiri |
| `/hizmetler/sanayi-tipi-firin-servisi` | sanayi tipi fırın servisi / sanayi fırın tamircisi |
| `/hizmetler/konveksiyonel-firin-servisi` | konveksiyonel fırın servisi / kombi fırın tamiri |
| `/hizmetler/pizza-firini-servisi` | pizza fırını servisi / pizza fırını tamiri |
| `/hizmetler/endustriyel-mutfak-servisi` | endüstriyel mutfak servisi / endüstriyel mutfak tamiri |
| `/hizmetler/pizza-firin-tasi-degisimi` | pizza fırın taşı / şamot taş fiyat |

### 3.3 Kural
Her sayfanın **tek bir birincil kelimesi** olsun. Aynı kelimeyi iki sayfada H1 yapmayın. `/hizmetler` H1'i "…Servis Hizmetleri" kalıbında, alt sayfa H1'i "…Servisi ve Tamiri" kalıbında olsun — şu anda doğru kurgulanmış, bozmayın.

---

## 4. `/hizmetler` Sayfasının Yeniden Yapılandırılması

### 4.1 Mevcut durum

```
✔ Breadcrumb var
✔ 6 hizmet kartı (her birinde 4 madde)
✔ 17 marka linki
✔ CTA bloğu
✔ Footer'da 39 ilçe

✘ Özgün gövde metni ~350 kelime (rakip inoksteknik ~1.200+)
✘ FAQ bölümü yok
✘ "Nasıl çalışıyoruz" süreci yok (ana sayfada var, burada yok)
✘ Fiyatlandırma / servis bedeli mantığı anlatılmıyor
✘ Görsel yok → alt text fırsatı, Google Görseller trafiği sıfır
✘ Blog yazılarına iç link yok
✘ Hangi hizmeti seçeceğimi anlatan yönlendirme yok
```

### 4.2 Hedef: 1.400–1.800 kelime, aşağıdaki sırayla

| # | Bölüm | Ne yapacak |
|---|---|---|
| 1 | Hero + H1 + breadcrumb | Mevcut, koru |
| 2 | **Giriş paragrafı (150-200 kelime)** | ⭐ YENİ — hedef kelimeyi ilk 100 kelimede doğal geçir |
| 3 | 6 hizmet kartı | Mevcut. Her karta **görsel + açıklayıcı alt text** ekle |
| 4 | **"Hangi hizmeti seçmeliyim?" tablosu** | ⭐ YENİ — cihaz tipi → doğru sayfa. Featured snippet adayı |
| 5 | **Arıza belirtisi → çözüm tablosu** | ⭐ YENİ — blog yazılarına iç link kaynağı |
| 6 | **6 adımlı servis süreci** | ⭐ YENİ — ana sayfadaki bloğu buraya da koy |
| 7 | **Servis bedeli & garanti şeffaflığı** | ⭐ YENİ — rakiplerde yok, dönüşüm + güven |
| 8 | 17 marka linki | Mevcut, koru |
| 9 | **Hizmetlerle ilgili 6-8 SSS** | ⭐ YENİ — FAQPage schema ile |
| 10 | **İlgili blog yazıları (3 kart)** | ⭐ YENİ |
| 11 | İlçe listesi + CTA | Mevcut, koru |

### 4.3 Yazılacak meta etiketler

**Title** (mevcut 74 karakter — çok uzun, "Endüstriyel Fırın Servisi" iki kez geçiyor):

```
Mevcut : Hizmetlerimiz | Endüstriyel Fırın ve Mutfak Servisi | Endüstriyel Fırın Servisi
Öneri  : Endüstriyel Fırın ve Mutfak Servis Hizmetleri | İstanbul
```
→ 52 karakter, tekrar yok, konum var.

**Meta description** (150-158 karakter):
```
Konveksiyonel, kombi, sanayi tipi ve pizza fırınlarında yerinde arıza tespiti,
onarım ve periyodik bakım. İstanbul'un 39 ilçesinde aynı gün servis. ☎ 0536 931 96 67
```

**H1:** `Endüstriyel Fırın ve Mutfak Ekipmanları Servis Hizmetleri` — mevcut hali iyi, koru.

### 4.4 Yeni bölüm 4 — "Hangi hizmeti seçmeliyim?" (kopyalanabilir)

| Cihazınız | Belirti | Gideceğiniz sayfa |
|---|---|---|
| Konveksiyonel / kombi fırın | Buhar gelmiyor, fan ses yapıyor, kart hatası | Konveksiyonel Fırın Servisi |
| Katlı, döner, tünel, konveyör fırın | Bant durdu, pano arızası, ısı dengesizliği | Sanayi Tipi Fırın Servisi |
| Taş tabanlı / konveyörlü pizza fırını | Taban çiğ kalıyor, üst yanıyor | Pizza Fırını Servisi |
| Pişirme taşı çatlamış / aşınmış | Hamur yapışıyor, taş kırık | Pizza Fırın Taşı Değişimi |
| Bulaşıkhane, soğutma, pişirme grubu birlikte | Birden fazla ekipman | Endüstriyel Mutfak Servisi |
| Marka/model belli, arıza belirsiz | Panelde hata kodu | Endüstriyel Fırın Servisi |

### 4.5 Yeni bölüm 5 — Arıza belirtisi tablosu (blog iç linki kaynağı)

| Belirti | Olası kök neden | Ayrıntı |
|---|---|---|
| Fırın ısınmıyor / geç ısınıyor | Rezistans, kontaktör, termostat | → `/blog/endustriyel-firin-isinmiyor-ne-yapmali` |
| Buhar gelmiyor | Kireç, solenoid valf, su hattı | → `/blog/kombi-firinda-kirec-sorunu-ve-kalici-cozumu` |
| Pizza tabanı çiğ kalıyor | Taş kalınlığı, taban ısısı, ön ısıtma | → `/blog/pizza-firininda-taban-cig-kaliyor-cozum` |
| Faturalar arttı | Conta, izolasyon, ayar kaçıklığı | → `/blog/sanayi-tipi-firin-enerji-tuketimi-dusurme` |
| Sürekli aynı arıza | Bakım planı eksikliği | → `/blog/endustriyel-mutfak-periyodik-bakim-takvimi` |

**Bu tablo tek başına iki iş birden yapıyor:** kullanıcıyı doğru sayfaya götürüyor ve blog yazılarına konu-alakalı iç link veriyor. Şu anda blog yazılarına hiç iç link yok, bu en büyük hızlı kazanç.

### 4.6 Yeni bölüm 9 — `/hizmetler` için SSS (ana sayfadakiyle aynı olmasın)

1. Endüstriyel fırın servisi ile endüstriyel mutfak servisi arasındaki fark nedir?
2. Cihazımın markası listenizde yok, servis veriyor musunuz?
3. Arıza tespiti için servis bedeli alıyor musunuz, onarım yapılırsa mahsup ediliyor mu?
4. Yedek parça orijinal mi, muadil mi? Nasıl karar veriliyor?
5. Periyodik bakım sözleşmesi hangi ekipmanları kapsıyor?
6. Hafta sonu ve gece arıza müdahalesi yapıyor musunuz?
7. Onarım mı ekonomik, yenileme mi? Nasıl karar veriyorsunuz?
8. Servis sonrası hangi belgeleri teslim ediyorsunuz?

> ⚠️ **Önemli:** Google, FAQ rich result'ları artık büyük ölçüde sadece resmî kurum ve sağlık sitelerinde gösteriyor. FAQPage schema yine de eklenmeli (anlamsal netlik + AI Overviews / asistan cevapları için değerli) ama **SERP'te yıldızlı görünme garantisi yok** — beklentiyi buna göre kurun.

---

## 5. Teknik SEO — Kontrol ve Düzeltme Listesi

### 5.1 Doğrulanmış bulgular

**`robots.txt` — ✅ doğru**
```
User-Agent: *
Allow: /
Disallow: /api/
Host: https://www.endustriyelfirinservisi.com
Sitemap: https://www.endustriyelfirinservisi.com/sitemap.xml
```

**`sitemap.xml` — ⚠️ 2 sorun**

Tüm sayfalar (ana sayfa, 6 hizmet, 17 marka, 39 ilçe, blog) doğru şekilde listelenmiş. Ama:

1. 🔴 **`lastmod` her build'de "şu an"a eşitleniyor.** Bütün statik sayfalarda `2026-09-01T20:26:07.017Z` yazıyor — yani içerik değişmese bile her deploy'da tarih değişiyor. Google bunu fark ettiğinde `lastmod` sinyalini tamamen yok sayar. **Düzeltme:** `lastmod`'u içerik dosyasının gerçek son değişiklik tarihine bağlayın (blog yazılarında zaten doğru yapılmış: `2026-08-27` vb.).
2. 🟡 **`changefreq` ve `priority` Google tarafından yok sayılıyor.** Zarar vermez ama boşuna. Kaldırılabilir.

### 5.2 Yayına almadan önce mutlaka doğrulanacaklar

Aşağıdakileri yerel ortamda `Ctrl+U` (sayfa kaynağını görüntüle) ile tek tek kontrol edin:

- [ ] `<html lang="tr">` var mı?
- [ ] Her sayfada **benzersiz** `<title>` ve `<meta name="description">` var mı? (39 ilçe sayfasının şablondan üretilen açıklamaları birbirinin aynısı olmamalı — en az bir cümlesi ilçeye özel olsun)
- [ ] `<link rel="canonical">` her sayfada kendi mutlak URL'sini gösteriyor mu?
- [ ] Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) ve `twitter:card` var mı?
- [ ] `og:image` gerçek bir görsel mi? (1200×630, saha fotoğrafı ideal)
- [ ] `<meta name="robots">` yanlışlıkla `noindex` mi? (Next.js dev/staging'de sık hata)
- [ ] Her sayfada **tek bir H1** var mı? (Footer'daki "İstanbul'un Tüm İlçelerinde…" başlığı H2 olmalı, H1 değil)
- [ ] Tüm görsellerde açıklayıcı `alt` var mı?
- [ ] www / non-www ve http/https tek hedefe 301 yönleniyor mu?
- [ ] Trailing slash tutarlı mı? (`/hizmetler` ve `/hizmetler/` ikisi de 200 dönmemeli)
- [ ] 404 sayfası gerçekten 404 status kodu dönüyor mu?

### 5.3 Yapısal veri (Schema.org) — eklenmesi gerekenler

| Şema | Nerede | Öncelik |
|---|---|---|
| `LocalBusiness` | Ana sayfa + `/iletisim` | 🔴 |
| `BreadcrumbList` | Tüm alt sayfalar | 🔴 |
| `Service` | Her hizmet sayfası | 🟠 |
| `FAQPage` | `/sikca-sorulan-sorular`, ana sayfa, `/hizmetler` | 🟠 |
| `ItemList` | `/hizmetler`, `/markalar`, `/bolgeler` | 🟡 |
| `BlogPosting` | Blog yazıları | 🟠 |
| `AggregateRating` | ❌ **EKLEMEYİN** | — |

> ⚠️ Google, kendi sitenizde topladığınız/yazdığınız yıldız puanları için `AggregateRating` kullanımını yaptırıma tabi tutuyor. Değerlendirmeler Google Business Profile üzerinde toplanmalı.

**LocalBusiness örneği** (`/iletisim` ve ana sayfaya):

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.endustriyelfirinservisi.com/#business",
  "name": "Endüstriyel Fırın Servisi",
  "description": "İstanbul genelinde endüstriyel fırın servisi, tamiri ve endüstriyel mutfak bakım hizmetleri.",
  "url": "https://www.endustriyelfirinservisi.com",
  "telephone": "+905369319667",
  "priceRange": "$$",
  "image": "https://www.endustriyelfirinservisi.com/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "AÇIK ADRESİNİZ",
    "addressLocality": "İLÇE",
    "addressRegion": "İstanbul",
    "postalCode": "34XXX",
    "addressCountry": "TR"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 41.0, "longitude": 29.0 },
  "areaServed": { "@type": "City", "name": "İstanbul" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00", "closes": "20:00" },
    { "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday", "opens": "09:00", "closes": "18:00" }
  ],
  "sameAs": ["GOOGLE BUSINESS PROFILE URL", "INSTAGRAM URL"]
}
```

**Service örneği** (her hizmet sayfasına):

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Endüstriyel Fırın Servisi ve Tamiri",
  "provider": { "@id": "https://www.endustriyelfirinservisi.com/#business" },
  "areaServed": { "@type": "City", "name": "İstanbul" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Endüstriyel Fırın Servis Kapsamı",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Yerinde arıza tespiti ve elektriksel ölçüm" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rezistans, termostat ve sıcaklık probu değişimi" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fan motoru, rulman ve kanat onarımı" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elektronik kontrol kartı tamiri ve programlama" }}
    ]
  }
}
```

**BreadcrumbList örneği:**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Ana Sayfa",
      "item": "https://www.endustriyelfirinservisi.com/" },
    { "@type": "ListItem", "position": 2, "name": "Hizmetler",
      "item": "https://www.endustriyelfirinservisi.com/hizmetler" },
    { "@type": "ListItem", "position": 3, "name": "Endüstriyel Fırın Servisi ve Tamiri" }
  ]
}
```

Doğrulama: <https://validator.schema.org> ve Search Console → "Zengin sonuç testi".

### 5.4 Core Web Vitals

- [ ] `next/image` ile tüm görseller optimize, WebP/AVIF
- [ ] Hero görseline `priority` / `fetchpriority="high"`
- [ ] Yazı tiplerinde `font-display: swap`, `next/font` ile self-host
- [ ] LCP < 2.5 sn, INP < 200 ms, CLS < 0.1
- [ ] Mobil: tel/WhatsApp butonları en az 48×48 px dokunma alanı
- [ ] Lighthouse mobil skoru ≥ 90

Ölçüm: PageSpeed Insights + Search Console "Core Web Vitals" raporu (gerçek kullanıcı verisi).

---

## 6. İç Link Yapısı

### 6.1 Mevcut sorunlar

| Sorun | Çözüm |
|---|---|
| 🔴 Blog yazılarına hiçbir hizmet/marka/ilçe sayfasından link yok | Her hizmet sayfasına "İlgili teknik yazılar" bloğu (2-3 yazı) |
| 🔴 Blog yazılarından hizmet sayfalarına link yok | Her yazının içine ve sonuna ilgili hizmet CTA'sı |
| 🟠 Marka sayfaları ↔ hizmet sayfaları birbirine bağlı değil | Electrolux sayfası → Konveksiyonel Fırın Servisi; Pimak → Sanayi Tipi Fırın Servisi vb. |
| 🟠 İlçe sayfaları birbirine bağlı değil | Her ilçe sayfasında "Komşu ilçeler" bloğu (Kadıköy → Üsküdar, Ataşehir, Maltepe) |
| 🟡 Footer'da 39 ilçe + 17 marka = her sayfada ~60 link | Link equity dağılımını seyreltiyor. Footer'da 8-10 öne çıkan ilçe bırakıp "Tüm bölgeler"e yönlendirin |

### 6.2 Hedef link akışı

```
Ana Sayfa
   ├─→ /hizmetler (hub)
   │      ├─→ 6 hizmet sayfası
   │      │      ├─→ ilgili markalar
   │      │      ├─→ ilgili blog yazıları
   │      │      └─→ ilgili ilçeler
   │      └─→ /markalar, /bolgeler
   ├─→ /blog → hizmet sayfaları (yazı içinden, bağlamsal)
   └─→ /iletisim
```

**Kural:** Anchor text çeşitlendirilsin. Her linkte "endüstriyel fırın servisi" yazmayın — "konveksiyonel fırında buhar arızası", "Kadıköy'de yerinde servis", "pizza taşı seçimi" gibi doğal ifadeler kullanın.

---

## 7. 🔴 Yerel SEO — En Kritik Eksik

Bu sektörde tıklamaların büyük kısmını **Google Harita paketi** alıyor. Organik 1. sıra bile bunun altında kalır. Sıralama vaadi verilen "hizmetler" sorgusunda gerçek kazanç buradan gelir.

### 7.1 Google Business Profile (yapılmadıysa hepsi acil)

- [ ] İşletme profilini oluşturun / talep edin
- [ ] Kategori: **birincil "Fırın tamir servisi"**, ikincil "Ticari mutfak ekipmanı servisi", "Elektrikli ev aletleri tamiri"
- [ ] Adres doğrulaması (kartpostal / video). Ofis yoksa **hizmet alanı işletmesi (SAB)** olarak açın, adresi gizleyin, hizmet alanına İstanbul ilçelerini ekleyin
- [ ] Çalışma saatleri sitedekiyle **birebir aynı** olsun (Ptesi-Cuma 08:00-20:00, Cmt 09:00-18:00)
- [ ] Telefon: `0536 931 96 67` — sitede, GBP'de, dizinlerde **aynı formatta**
- [ ] Web sitesi linki
- [ ] Hizmetler bölümüne 6 hizmetin tamamını girin
- [ ] Ürünler bölümüne markaları ekleyin
- [ ] 20+ gerçek saha fotoğrafı: teknisyen çalışırken, açılmış fırın, servis aracı, ölçüm cihazı, değişen parça
- [ ] Mesajlaşmayı açın

### 7.2 Değerlendirmeler (sıralamanın en güçlü yerel faktörü)

- [ ] Her tamamlanan işten sonra WhatsApp'tan kısa değerlendirme linki gönderin
- [ ] İlk 90 günde **en az 25 değerlendirme** hedefleyin
- [ ] Değerlendirmenin metninde ilçe ve cihaz tipi geçmesi çok değerli ("Beşiktaş'ta kombi fırınımız…") — ama **asla ne yazacaklarını dikte etmeyin**, sadece "hangi ilçede ve hangi cihaz olduğunu yazarsanız çok yardımcı olur" deyin
- [ ] Her değerlendirmeye 48 saat içinde cevap verin
- [ ] ❌ Sahte veya ücretli değerlendirme almayın — profil askıya alınır, geri dönüşü çok zordur

### 7.3 NAP tutarlılığı ve dizinler

İşletme adı, adres, telefon **her yerde tıpatıp aynı** olmalı.

- [ ] Google Business Profile
- [ ] **Armut.com** — iki hedef sorguda da ilk 2'de. Rakip değil, müşteri kanalı. Mutlaka kayıt olun
- [ ] Bing Places
- [ ] Apple Business Connect
- [ ] Yandex İşletmem (Türkiye'de hâlâ trafik var)
- [ ] Sanayi/ticaret odası kaydı, sektör dizinleri

### 7.4 İlçe sayfalarını "gerçek" yapın

39 ilçe sayfası, aralarındaki tek fark ilçe adıysa Google bunu **doorway page** sayar ve toplu değersizleştirir. Her sayfada en az 2-3 özgün öğe olmalı:

- O ilçedeki tipik müşteri profili (Beşiktaş → otel/restoran mutfağı; Ümraniye → fabrika yemekhanesi; Bağcılar → sanayi fırıncılığı)
- O bölgeye ortalama varış süresi
- O ilçede gerçekten yapılmış bir işin kısa anonim vaka özeti
- Komşu ilçe linkleri
- İlçeye özel harita gömme

> **Kaynak yetmiyorsa 39 ilçenin tamamını yayınlamayın.** 10 iyi ilçe sayfası, 39 şablon sayfadan çok daha iyi sıralanır. Kalanları hazır oldukça açın.

---

## 8. İçerik Planı

### 8.1 Mevcut blog (6 yazı) — güçlü, doğru yönde

Ortalama 10-11 dk okuma, arıza-belirti odaklı. Bu tam olarak doğru strateji. Eksik olan tek şey: **hiçbir hizmet sayfasından bu yazılara link yok.**

### 8.2 Sonraki 12 yazı (arama niyetine göre sıralı)

**Arıza / belirti (en yüksek dönüşüm):**
1. Konveksiyonel fırın hata kodları ve anlamları (marka bazlı tablo)
2. Fırın fanı ses yapıyor: rulman mı, kanat mı, motor mu?
3. Endüstriyel fırın kapı contası ne zaman değişir?
4. Fırın sıcaklığı gösterge ile uyuşmuyor: prob kalibrasyonu

**Karar / satın alma:**
5. Endüstriyel fırın servis ücreti nasıl hesaplanır? (fiyat vermeden mantığı anlatın — rakiplerde yok)
6. Onarım mı yenileme mi? Karar tablosu
7. Orijinal parça vs muadil: ne zaman hangisi?
8. Periyodik bakım sözleşmesi neyi kapsamalı?

**Marka / karşılaştırma:**
9. Unox vs Rational vs Electrolux: servis ve parça açısından
10. İnoksan fırınlarda en sık 5 arıza
11. Öztiryakiler fırın yedek parça rehberi

**Mevzuat / işletme:**
12. Endüstriyel mutfakta gaz hattı kontrolü ve yasal yükümlülükler

### 8.3 Yayın temposu
Haftada 1 yazı, 1.500+ kelime, saha fotoğrafı ile. 3 ayda 12 yazı → toplam 18 yazı, hiçbir rakipte olmayan bir arşiv.

---

## 9. Otorite ve Backlink

Şu anda domain yeni, backlink yok. En büyük dezavantaj bu.

| Taktik | Zorluk | Etki |
|---|---|---|
| Armut.com profili | Kolay | 🔴 Yüksek (hem link hem müşteri) |
| Yerel dizinler, oda kayıtları | Kolay | 🟠 |
| Servis verdiğiniz markaların bayi/servis listelerine girmek | Orta | 🔴 Yüksek |
| Endüstriyel mutfak ekipmanı satan firmalarla karşılıklı yönlendirme | Orta | 🔴 Yüksek |
| Restoran/otel sektörü yayınlarına teknik makale | Zor | 🔴 Yüksek |
| Ekipman satan e-ticaret sitelerine "servis rehberi" içeriği | Orta | 🟠 |
| Sektör forumları, Ekşi, Reddit r/Turkey teknik cevaplar | Kolay | 🟡 |
| LinkedIn'de teknisyen gözünden vaka paylaşımları | Kolay | 🟡 |

> ❌ Link satın almayın, PBN kullanmayın. Bu boyuttaki bir yerel işletme için tek gerçek strateji: **iş ilişkilerinden doğal link.**

---

## 10. Ölçüm

### 10.1 Kurulacaklar
- [ ] Google Search Console (domain doğrulaması + sitemap gönderimi)
- [ ] Google Analytics 4
- [ ] GA4 dönüşüm olayları: `tel:` tıklama, WhatsApp tıklama, form gönderimi
- [ ] Google Business Profile Insights
- [ ] Aylık sıralama takibi (hedef kelimeler + 39 ilçe kombinasyonu)

### 10.2 Takip edilecek metrikler

| Metrik | 30 gün | 90 gün | 180 gün |
|---|---|---|---|
| İndekslenen sayfa | 40+ | 80 | 95+ |
| Organik oturum / ay | 150 | 800 | 2.500 |
| GBP arama gösterimi | 500 | 3.000 | 10.000 |
| Google değerlendirme | 10 | 25 | 50 |
| Telefon + WhatsApp tıklaması | 25 | 120 | 400 |
| İlk 3'te olan kelime | 3 | 20 | 60 |

*Bunlar yeni bir domain için gerçekçi hedeflerdir; garanti değildir. Sektör rekabeti ve GBP doğrulama süresi sonucu ciddi biçimde etkiler.*

---

## 11. Öncelik Sıralı Yapılacaklar Listesi

### 🔴 1. Hafta — Yayın öncesi zorunlu

- [ ] Google Business Profile oluştur, doğrulama sürecini başlat *(en uzun süren adım, ilk gün başlat)*
- [ ] Bölüm 5.2'deki meta/canonical/OG kontrol listesini baştan sona doğrula
- [ ] `sitemap.xml` `lastmod` sorununu düzelt (gerçek içerik tarihine bağla)
- [ ] `LocalBusiness` + `BreadcrumbList` şemalarını ekle
- [ ] Footer'daki H2 seviyesini kontrol et (sayfa başına tek H1)
- [ ] Search Console + GA4 kur, sitemap gönder

### 🔴 2. Hafta — `/hizmetler` sayfasını yeniden yaz

- [ ] Bölüm 4.3'teki title + meta description'ı uygula
- [ ] 150-200 kelimelik giriş paragrafı ekle
- [ ] "Hangi hizmeti seçmeliyim?" tablosunu ekle (4.4)
- [ ] Arıza belirtisi tablosunu ekle + blog iç linklerini bağla (4.5)
- [ ] 6 adımlı servis sürecini ekle
- [ ] Servis bedeli & garanti şeffaflık bloğunu ekle
- [ ] 8 soruluk SSS + `FAQPage` şeması ekle
- [ ] İlgili blog yazıları bloğu ekle
- [ ] Her hizmet kartına görsel + alt text ekle
- [ ] Hedef: 1.400-1.800 kelime

### 🟠 3-4. Hafta — Hizmet sayfaları ve iç link

- [ ] 6 hizmet sayfasının her birini 1.200+ kelimeye çıkar
- [ ] Her hizmet sayfasına `Service` şeması
- [ ] Her hizmet sayfasına: ilgili markalar + ilgili blog + ilgili ilçeler blokları
- [ ] Blog yazılarından hizmet sayfalarına bağlamsal link
- [ ] Marka ↔ hizmet çapraz linkleri
- [ ] Footer link sayısını azalt (39 → 10 ilçe + "tümü")
- [ ] Core Web Vitals optimizasyonu, Lighthouse ≥ 90

### 🟠 5-8. Hafta — Yerel ve içerik

- [ ] GBP: 20+ fotoğraf, hizmetler, ürünler, mesajlaşma
- [ ] Değerlendirme toplama sürecini WhatsApp akışına yerleştir
- [ ] Armut.com + Bing Places + Yandex + Apple kayıtları
- [ ] İlçe sayfalarını özgünleştir — önce en yoğun 10 ilçe
- [ ] Haftada 1 blog yazısı (Bölüm 8.2 listesinden)

### 🟡 9-12. Hafta — Otorite

- [ ] Marka bayi/servis listelerine girme başvuruları
- [ ] Ekipman satıcılarıyla karşılıklı yönlendirme görüşmeleri
- [ ] Sektör yayınlarına teknik makale
- [ ] Kalan 29 ilçe sayfasını özgünleştir
- [ ] İlk performans değerlendirmesi ve strateji revizyonu

---

## 12. Kaynaklar

Rakip analizi için incelenen siteler:

- [CM Teknik Endüstriyel Mutfak Servisi](https://www.cmteknik.com.tr/)
- [Inoks Servis — Endüstriyel Mutfak Tamiri](https://inokservis.com/)
- [İnoks Teknik — İstanbul Endüstriyel Fırın Teknik Servisi](https://inoksteknik.com/hizmetler/istanbul-endustriyel-firin-teknik-servisi/)
- [İnoks Teknik — Sanayi Tipi Fırın Servisi](https://inoksteknik.com/hizmetler/sanayi-tipi-firin-servisi/)
- [Fatih Teknik İstanbul](https://www.fatihteknikistanbul.com/)
- [Etkili Servis — İstanbul, Kocaeli, Gebze](https://etkiliendustriyelservisi.com/)
- [Armut — İstanbul Endüstriyel Mutfak Servisi](https://armut.com/istanbul-endustriyel-mutfak-servisi)
- [Armut — İstanbul Fırın Tamiri](https://armut.com/istanbul-firin-tamiri)
- [Endüstriyel Soğutucu Teknik Servis](https://www.endustriyelsogutucu.com/)
- [Ocak Tamiri — Fırın Bakım Tamir Servisi](https://www.ocaktamiri.com/ocak-tamir-servis/firin-tamiri-servisi.html)

---

### Not

`/hizmetler` sayfasının kaynak kodundaki `<meta>`, `<link rel="canonical">` ve JSON-LD etiketlerini tarayıcı üzerinden okuyamadım (güvenlik kısıtı). Bölüm 5.2'deki maddeler bu yüzden **doğrulama listesi** olarak yazıldı — sayfa kaynağından tek tek kontrol edin. Kod tabanını paylaşırsanız bu maddeleri kesinleştirebilirim.
