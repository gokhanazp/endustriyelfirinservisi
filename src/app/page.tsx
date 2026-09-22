import Link from "next/link";
import type { Metadata } from "next";
import { services, primaryService } from "@/lib/services";
import { brands } from "@/lib/brands";
import { anatolianDistricts, europeanDistricts, districts } from "@/lib/districts";
import { site, trustBadges, workflowSteps, experienceYears } from "@/lib/site";
import { posts, formatDate } from "@/lib/blog";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  howToSchema,
  itemListSchema,
  serviceSchema,
} from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import {
  CtaBand,
  FaqAccordion,
  JsonLd,
  LinkCard,
  SectionHead,
} from "@/components/Ui";
import { Icon, IconArrow, IconCheck, IconPhone, IconWhatsapp } from "@/components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Endüstriyel Fırın Servisi ve Tamiri | İstanbul Aynı Gün Servis",
  description:
    "İstanbul'un 39 ilçesinde endüstriyel fırın servisi ve tamiri. Konveksiyonel, pizza ve sanayi tipi fırınlarda aynı gün yerinde servis, 24 ay garanti.",
  path: "/",
  keywords: [
    "endüstriyel fırın servisi",
    "endüstriyel fırın tamiri",
    "endüstriyel fırın tamircisi",
    "istanbul endüstriyel fırın servisi",
    "sanayi tipi fırın servisi",
    "endüstriyel mutfak servisi",
  ],
});

const homeFaq = [
  {
    q: "Endüstriyel fırın servisi ne kadar sürede gelir?",
    a: "İstanbul'un 39 ilçesinde bölgesel ekip bulundurduğumuz için ortalama varış süremiz 2-4 saattir. Hafta içi 16:00'a kadar açılan arıza kayıtlarında aynı gün yerinde müdahale hedeflenir; üretimi tamamen durduran arızalarda öncelikli acil kayıt açılır.",
  },
  {
    q: "Hangi fırın tiplerine servis veriyorsunuz?",
    a: "Konveksiyonel fırın, kombi (buharlı) fırın, sanayi tipi katlı ve döner fırınlar, tünel ve konveyör fırınlar, taş tabanlı pizza fırınları ile odun ve gaz ateşli kubbe fırınların tamamına servis veriyoruz. Ayrıca ocak, fritöz, bulaşık makinesi gibi diğer endüstriyel mutfak ekipmanları da hizmet kapsamımızdadır.",
  },
  {
    q: "Servis ücreti nasıl belirleniyor?",
    a: "Yerinde arıza tespiti için servis bedeli uygulanır ve onarım tarafımızca yapıldığında bu bedel toplam tutardan düşülür. Parça ve işçilik bedeli işleme başlanmadan önce bildirilir; onayınız alınmadan hiçbir işlem yapılmaz. Tüm servisler faturalandırılır.",
  },
  {
    q: "Yaptığınız onarım garantili mi?",
    a: "İşçilik 24 aya kadar, değişen parçalar ise üretici garanti süresi boyunca garanti altındadır. Garanti kapsamındaki aynı arıza için servis ve işçilik bedeli alınmaz.",
  },
  {
    q: "Hangi markalara servis veriyorsunuz?",
    a: `Electrolux, Unox, İnoksan, Öztiryakiler, Pimak, Empero, Üçler, Ayfa, CSA, Kayalar, Maksan, Venarro, Greenoks, Alveo, İnoxclass, Vital, Ndustrio, Fimak, Özköseoğlu ve Turhan Çelik başta olmak üzere ${brands.length} marka için yetkin teknik servis hizmeti veriyoruz. Markası ne olursa olsun cihazınızın arızasını telefonda anlatmanız yeterlidir.`,
  },
  {
    q: "Periyodik bakım sözleşmesi yapıyor musunuz?",
    a: "Evet. Otel, restoran, fabrika yemekhanesi ve catering işletmeleri için yıllık bakım sözleşmeleri düzenliyoruz. Sözleşme; öncelikli servis hakkı, indirimli işçilik ve parça fiyatı, planlı bakım takvimi ve fotoğraflı ekipman raporu içerir.",
  },
];

const stats = [
  { value: `${experienceYears}+`, label: "Yıllık saha deneyimi" },
  { value: "39", label: "İstanbul ilçesinde servis" },
  { value: `${brands.length}`, label: "Marka için teknik servis" },
  { value: "2-4 sa", label: "Ortalama varış süresi" },
];

export default function HomePage() {
  const jsonLd = [
    breadcrumbSchema([{ name: "Ana Sayfa", path: "/" }]),
    serviceSchema({
      name: "Endüstriyel Fırın Servisi ve Tamiri",
      description: site.description,
      url: absoluteUrl("/"),
      serviceType: "Endüstriyel fırın servisi ve tamiri",
    }),
    faqSchema(homeFaq),
    howToSchema(
      "Endüstriyel fırın servis süreci nasıl işler?",
      workflowSteps.map((s) => ({ title: s.title, text: s.text }))
    ),
    itemListSchema(
      services.map((s) => ({ name: s.name, path: `/hizmetler/${s.slug}` })),
      "Endüstriyel fırın ve mutfak servis hizmetleri"
    ),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-ink-950">
        <div aria-hidden className="pointer-events-none absolute inset-0 grain opacity-70" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-ember-600/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-64 -left-32 h-[30rem] w-[30rem] rounded-full bg-ember-500/10 blur-3xl"
        />

        <div className="container-x relative grid gap-14 py-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-ember-500/30 bg-ember-500/10 px-3.5 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-ember-400">
              <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-ember-500" />
              İstanbul geneli · 7/24 acil servis
            </p>

            <h1 className="mt-6 font-display text-[2.15rem] font-extrabold leading-[1.08] text-white sm:text-[2.9rem] lg:text-[3.4rem]">
              Endüstriyel Fırın Servisi ve{" "}
              <span className="relative whitespace-nowrap text-ember-500">
                Tamiri
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-300">
              Konveksiyonel, kombi, pizza, katlı ve sanayi tipi fırınlarda{" "}
              <strong className="font-semibold text-white">
                aynı gün yerinde arıza tespiti
              </strong>
              . Sertifikalı teknisyen, orijinal yedek parça ve 24 ay işçilik
              garantisiyle işletmenizi bekletmeden üretime döndürüyoruz.
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
              {[
                "Aynı gün yerinde servis",
                "Onaysız işlem yapılmaz",
                "Faturalı ve garantili",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-[14.5px] text-ink-200">
                  <IconCheck className="h-4 w-4 text-ember-500" strokeWidth={2.4} />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phone.href}
                className="inline-flex h-14 items-center justify-center gap-2.5 rounded-xl bg-ember-500 px-7 text-[16px] font-bold text-white shadow-ember transition-all hover:-translate-y-0.5 hover:bg-ember-600"
              >
                <IconPhone className="h-5 w-5" /> {site.phone.display}
              </a>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-7 text-[16px] font-bold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                <IconWhatsapp className="h-5 w-5 text-[#25D366]" /> WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>

          {/* Hizli arıza kart */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
              <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-ember-500">
                En sık gelen arızalar
              </p>
              <ul className="mt-5 space-y-3.5">
                {[
                  "Fırın ısınmıyor / geç ısınıyor",
                  "Sıcaklık göstergeden farklı",
                  "Üstü yanıyor, altı çiğ kalıyor",
                  "Buhar gelmiyor, kireç sorunu",
                  "Panelde hata kodu var",
                  "Fan ses yapıyor, devir düşük",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 border-b border-white/5 pb-3.5 text-[15px] text-ink-200 last:border-0 last:pb-0"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href={`/hizmetler/${primaryService.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-[14.5px] font-bold text-ember-400 transition-all hover:gap-3"
              >
                Arıza rehberini inceleyin <IconArrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Istatistikler */}
        <div className="relative border-t border-white/5">
          <div className="container-x grid grid-cols-2 gap-px py-0 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-2 py-7 text-center lg:py-9">
                <p className="font-display text-[1.9rem] font-extrabold text-ember-500 lg:text-[2.3rem]">
                  {s.value}
                </p>
                <p className="mt-1 text-[13.5px] text-ink-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- GUVEN ---------------- */}
      <section className="container-x -mt-px py-16 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-ink-100 bg-white p-6 transition-shadow hover:shadow-soft"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ember-50 text-ember-600">
                <Icon name={b.icon} className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-[16.5px] font-bold text-ink-900">
                {b.title}
              </h2>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-500">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- HIZMETLER ---------------- */}
      <section className="border-y border-ink-100 bg-ink-50/60 py-18 lg:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="Hizmetlerimiz"
              title="Endüstriyel fırın ve mutfak ekipmanlarında tam kapsamlı servis"
              description="Fırın tipine ve arızanın niteliğine göre uzmanlaşmış ekiplerle çalışıyoruz. Aşağıdaki hizmet başlıklarından işletmenize uygun olanı inceleyebilirsiniz."
            />
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-5 py-3 text-[14.5px] font-bold text-ink-800 transition-colors hover:border-ember-300 hover:text-ember-600"
            >
              Tüm hizmetler <IconArrow className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-ember-200 hover:shadow-lift"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-ember-400 transition-colors group-hover:bg-ember-500 group-hover:text-white">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-[18px] font-bold leading-snug text-ink-900 transition-colors group-hover:text-ember-600">
                  {s.name}
                </h3>
                <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-500">
                  {s.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold text-ember-600">
                  İncele
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SUREC ---------------- */}
      <section className="container-x py-18 lg:py-24">
        <SectionHead
          eyebrow="Nasıl çalışıyoruz"
          title="Arıza bildiriminden garantili teslime kadar 6 adım"
          description="Her serviste aynı prosedürü uygularız. Böylece hem müdahale süresi kısalır hem de yapılan işlemler kayıt altına alınır."
          align="center"
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workflowSteps.map((s) => (
            <li
              key={s.step}
              className="relative rounded-2xl border border-ink-100 bg-white p-7"
            >
              <span className="font-display text-[2.4rem] font-extrabold leading-none text-ink-100">
                {s.step}
              </span>
              <h3 className="mt-3 font-display text-[17px] font-bold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-500">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------------- MARKALAR ---------------- */}
      <section className="border-y border-ink-100 bg-ink-50/60 py-18 lg:py-24">
        <div className="container-x">
          <SectionHead
            eyebrow="Marka servisleri"
            title={`${brands.length} marka için yetkin endüstriyel fırın servisi`}
            description="Her markanın kendine özgü arıza profili, parça yapısı ve servis prosedürü vardır. Cihazınızın markasını seçerek o markaya özel servis detaylarını görebilirsiniz."
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {brands.map((b) => (
              <Link
                key={b.slug}
                href={`/markalar/${b.slug}`}
                className="group inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-5 py-3.5 transition-all hover:-translate-y-0.5 hover:border-ember-300 hover:shadow-soft"
                title={`${b.name} fırın servisi ve ${b.name} fırın tamiri`}
              >
                <span className="font-display text-[15.5px] font-bold text-ink-900 transition-colors group-hover:text-ember-600">
                  {b.name}
                </span>
                <span className="text-[13.5px] text-ink-400">
                  fırın servisi
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- BOLGELER ---------------- */}
      <section className="container-x py-18 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHead
              eyebrow="Servis bölgeleri"
              title="İstanbul'un 39 ilçesinde yerinde endüstriyel fırın servisi"
              description="Avrupa ve Anadolu yakasında bölgesel ekiplerle çalışıyoruz. İlçenizi seçerek bölgeye özel servis bilgilerini, ortalama varış süresini ve sık karşılaşılan arızaları görebilirsiniz."
            />
            <Link
              href="/bolgeler"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-ink-900 px-6 py-3.5 text-[14.5px] font-bold text-white transition-colors hover:bg-ink-800"
            >
              Tüm servis bölgeleri <IconArrow className="h-4 w-4" />
            </Link>

            <dl className="mt-10 space-y-4 border-t border-ink-100 pt-8">
              <div>
                <dt className="text-[13px] font-bold uppercase tracking-[0.14em] text-ember-600">
                  Avrupa Yakası
                </dt>
                <dd className="mt-1 text-[14.5px] text-ink-500">
                  {europeanDistricts.length} ilçe · bölgesel mobil ekipler
                </dd>
              </div>
              <div>
                <dt className="text-[13px] font-bold uppercase tracking-[0.14em] text-ember-600">
                  Anadolu Yakası
                </dt>
                <dd className="mt-1 text-[14.5px] text-ink-500">
                  {anatolianDistricts.length} ilçe · bölgesel mobil ekipler
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-ink-100 bg-white p-6 sm:p-8">
            <div className="grid gap-x-4 gap-y-1 sm:grid-cols-3">
              {districts.map((x) => (
                <Link
                  key={x.key}
                  href={`/bolgeler/${x.slug}`}
                  className="rounded-lg px-2.5 py-2 text-[14.5px] text-ink-600 transition-colors hover:bg-ember-50 hover:text-ember-700"
                  title={`${x.name} endüstriyel fırın servisi`}
                >
                  {x.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- NEDEN BIZ ---------------- */}
      <section className="border-y border-ink-100 bg-ink-50/60 py-18 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHead
              eyebrow="Neden biz"
              title="Cihazı çalıştırmak değil, performansına döndürmek"
            />
            <div className="prose-tr mt-6">
              <p>
                Bir endüstriyel fırının yeniden çalışması tek başına yeterli
                değildir. Set sıcaklığına ulaşma süresi, raflar arasındaki
                sıcaklık farkı, buhar debisi ve kapı sızdırmazlığı arızadan
                önceki değerlere dönmediyse iş yarım kalmış demektir. Bu yüzden
                her serviste onarım sonrası ölçüm yapıyor ve sonuçları servis
                formuna yazıyoruz.
              </p>
              <p>
                Ekiplerimiz gaz yakıcı cihaz ve elektrik yetki belgelidir;
                müdahaleler üretici servis prosedürlerine uygun yürütülür.
                Kullanılan tüm parçalar faturalandırılır, sökülen parçalar
                talep edilmesi hâlinde işletmeye teslim edilir.
              </p>
              <p>
                Onarımın ekonomik olmadığı durumlarda bunu açıkça söylüyoruz.
                Gereksiz parça değişimi önermek yerine cihaz yenileme
                alternatiflerini maliyet karşılaştırmasıyla birlikte
                sunuyoruz — uzun vadede işletmenin lehine olan yaklaşım budur.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                t: "Ölçümle teşhis",
                d: "Gözle muayene değil; direnç, izolasyon, faz dengesi ve prob eğrisi ölçümü.",
              },
              {
                t: "Şeffaf fiyat",
                d: "Parça ve işçilik bedeli işleme başlanmadan önce yazılı bildirilir.",
              },
              {
                t: "Saha stoğu",
                d: "Sık arızalanan parçalar araç stoğunda; çoğu iş tek ziyarette kapanır.",
              },
              {
                t: "Kayıtlı servis",
                d: "Her müdahale servis formu, ölçüm değerleri ve fatura ile belgelenir.",
              },
              {
                t: "Önleyici bakım",
                d: "Periyodik bakım programıyla ani duruşların büyük bölümü önlenir.",
              },
              {
                t: "7/24 acil hat",
                d: "Üretimi durduran arızalarda gece ve hafta sonu ekip yönlendirmesi.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-ink-100 bg-white p-6"
              >
                <h3 className="font-display text-[16px] font-bold text-ink-900">
                  {x.t}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-500">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- BLOG ---------------- */}
      <section className="container-x py-18 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Teknik blog"
            title="Sahadan yazılmış arıza ve bakım rehberleri"
            description="Servis kayıtlarımızdan çıkan, hangi belirtinin hangi arızayı işaret ettiğini anlatan detaylı yazılar."
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-5 py-3 text-[14.5px] font-bold text-ink-800 transition-colors hover:border-ember-300 hover:text-ember-600"
          >
            Tüm yazılar <IconArrow className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-ember-200 hover:shadow-lift"
            >
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-ember-600">
                {p.category}
              </span>
              <h3 className="mt-3 font-display text-[17.5px] font-bold leading-snug text-ink-900 transition-colors group-hover:text-ember-600">
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </h3>
              <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-500">
                {p.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4 text-[13px] text-ink-400">
                <span>{formatDate(p.publishedAt)}</span>
                <span>{p.readingMinutes} dk okuma</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- SSS ---------------- */}
      <section className="container-x py-18 lg:py-24">
        <SectionHead
          eyebrow="Sıkça sorulan sorular"
          title="Endüstriyel fırın servisi hakkında merak edilenler"
          align="center"
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <FaqAccordion items={homeFaq} />
          <p className="mt-6 text-center text-[14.5px] text-ink-500">
            Aradığınız cevabı bulamadınız mı?{" "}
            <Link
              href="/sikca-sorulan-sorular"
              className="font-bold text-ember-600 hover:underline"
            >
              Tüm soruları görüntüleyin
            </Link>
          </p>
        </div>
      </section>

      {/* ---------------- ILGILI SAYFALAR ---------------- */}
      <section className="container-x pb-18 lg:pb-24">
        <SectionHead eyebrow="Öne çıkan sayfalar" title="Popüler servis başlıkları" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <LinkCard
            href="/hizmetler/endustriyel-firin-servisi"
            meta="Hizmet"
            title="Endüstriyel Fırın Servisi ve Tamiri"
            text="Tüm fırın tipleri için arıza tespiti, onarım ve bakım."
          />
          <LinkCard
            href="/hizmetler/pizza-firini-servisi"
            meta="Hizmet"
            title="Pizza Fırını Servisi ve Tamiri"
            text="Taş tabanlı, konveyör ve odun ateşli fırınlarda çözüm."
          />
          <LinkCard
            href="/markalar/electrolux-firin-servisi"
            meta="Marka"
            title="Electrolux Fırın Servisi"
            text="Kombi fırın, buhar grubu ve elektronik kart arızaları."
          />
          <LinkCard
            href="/bolgeler/kadikoy-endustriyel-firin-servisi"
            meta="Bölge"
            title="Kadıköy Endüstriyel Fırın Servisi"
            text="Kadıköy ve çevresinde aynı gün yerinde servis."
          />
        </div>
      </section>

      <CtaBand />
      <div className="h-20" />
    </>
  );
}
