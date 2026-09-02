import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { brands, getBrand, getBrandServiceSlugs } from "@/lib/brands";
import { getService, services } from "@/lib/services";
import { districts } from "@/lib/districts";
import { absoluteUrl, site } from "@/lib/site";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";
import {
  CtaBand,
  FaqAccordion,
  JsonLd,
  LinkCard,
  PageHero,
  SectionHead,
} from "@/components/Ui";
import { IconAlert, IconArrow, IconPhone } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};

  const title = `${brand.name} Fırın Servisi ve Tamiri | İstanbul`;
  const description = `${brand.name} fırın servisi ve tamiri. İstanbul'un 39 ilçesinde aynı gün yerinde arıza tespiti, orijinal yedek parça ve 24 ay işçilik garantisi.`;

  return buildMetadata({
    title,
    description,
    path: `/markalar/${brand.slug}`,
    keywords: [
      `${brand.name} fırın servisi`,
      `${brand.name} fırın tamiri`,
      `${brand.name} fırın tamircisi`,
      `${brand.name} fırın arızası`,
      `${brand.name} fırın tamiri fiyatları`,
      `${brand.name} servis`,
      `${brand.name} yedek parça`,
      `${brand.name} endüstriyel fırın servisi`,
      `${brand.name} endüstriyel fırın tamiri`,
      `istanbul ${brand.name} fırın servisi`,
      ...brand.aliases.flatMap((a) => [
        `${a} fırın servisi`,
        `${a} fırın tamiri`,
      ]),
    ],
  });
}

export default async function BrandDetail({ params }: Props) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const url = absoluteUrl(`/markalar/${brand.slug}`);

  /** Markanin urun gamiyla ortusen hizmet sayfalari (konu alakali ic link) */
  const matchedServices = getBrandServiceSlugs(brand.slug)
    .map((sl) => getService(sl))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  const matchedSlugs = new Set(matchedServices.map((s) => s.slug));
  const otherServices = services.filter((s) => !matchedSlugs.has(s.slug));
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Markalar", path: "/markalar" },
    { name: `${brand.name} Fırın Servisi`, path: `/markalar/${brand.slug}` },
  ];

  const otherBrands = brands.filter((b) => b.slug !== brand.slug).slice(0, 4);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: `${brand.name} Fırın Servisi ve ${brand.name} Fırın Tamiri`,
            description: `${brand.name} marka endüstriyel fırınlarda yerinde arıza tespiti, ${brand.name} fırın tamiri, yedek parça temini ve periyodik bakım hizmeti.`,
            url,
            serviceType: `${brand.name} fırın tamiri`,
          }),
          faqSchema(brand.faq),
        ]}
      />

      <PageHero
        eyebrow={`${brand.origin} · Marka servisi`}
        title={`${brand.name} Fırın Servisi ve ${brand.name} Fırın Tamiri`}
        description={brand.tagline}
        breadcrumbs={crumbs}
      />

      <div className="container-x grid gap-14 py-16 lg:grid-cols-[1fr_20rem] lg:gap-16 lg:py-20">
        <article>
          <div className="prose-tr">
            {brand.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Ilgili hizmet sayfalari — konuyla alakali ic link */}
          {matchedServices.length > 0 && (
            <section className="mt-12 rounded-2xl border border-ink-100 bg-ink-50/60 p-7 sm:p-8">
              <h2 className="font-display text-[17px] font-bold text-ink-900">
                {brand.name} cihazınız için doğru servis başlığı
              </h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink-600">
                {brand.name} ürün gamı ağırlıklı olarak aşağıdaki hizmet
                başlıklarının kapsamına girer. Cihaz tipinize en yakın başlığı
                seçerek o gruba özel arıza belirtilerini, ölçüm adımlarını ve
                servis kapsamını görebilirsiniz.
              </p>
              <ul className="mt-6 space-y-3">
                {matchedServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/hizmetler/${s.slug}`}
                      className="group flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 transition-all hover:border-ember-200 hover:shadow-soft"
                    >
                      <IconArrow className="mt-1 h-4 w-4 shrink-0 text-ink-300 transition-all group-hover:translate-x-0.5 group-hover:text-ember-500" />
                      <span>
                        <span className="block font-display text-[15.5px] font-bold text-ink-900 transition-colors group-hover:text-ember-600">
                          {s.name}
                        </span>
                        <span className="mt-1.5 block text-[14.5px] leading-relaxed text-ink-500">
                          {s.excerpt}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Urun gruplari */}
          <section className="mt-14">
            <SectionHead
              eyebrow="Kapsam"
              title={`Servis verdiğimiz ${brand.name} ürün grupları`}
            />
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {brand.productLines.map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white px-5 py-4"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-ember-500" />
                  <span className="text-[15px] text-ink-700">{p}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Tamir sureci */}
          <section className="mt-14">
            <SectionHead
              eyebrow="Tamir süreci"
              title={`${brand.name} Fırın Tamiri Nasıl Yapılır?`}
              description={`${brand.name} fırın tamiri işlerinde her zaman aynı prosedürü uygularız. Böylece hem müdahale süresi kısalır hem de yapılan işlemler kayıt altına alınır.`}
            />
            <p className="mt-6 text-[16.5px] leading-[1.85] text-ink-600">
              {brand.repairNote}
            </p>
            <ol className="mt-7 space-y-4">
              {[
                {
                  t: "Telefonda ön teşhis",
                  d: `${brand.name} model bilgisi, arıza belirtisi ve varsa panelde görünen hata kodu alınır. Teknisyen olası yedek parçaları yanına alarak yola çıkar.`,
                },
                {
                  t: "Yerinde ölçüm ve teşhis",
                  d: `Rezistans direnci, izolasyon, faz dengesi, prob eğrisi ve gazlı modellerde iyonizasyon akımı ölçülür. ${brand.name} cihazının arıza profili bilindiği için teşhis süresi kısadır.`,
                },
                {
                  t: "Onaylı tamir",
                  d: "Parça ve işçilik bedeli işleme başlanmadan önce bildirilir. Onayınız alınmadan hiçbir işlem yapılmaz; sökülen parçalar talep edilirse teslim edilir.",
                },
                {
                  t: "Test ve teslim",
                  d: `Tamir sonrası cihaz tam yükte çalıştırılır; set sıcaklığa ulaşma süresi, sıcaklık dalgalanması ve ${brand.name} modeline özel fonksiyonlar test edilir.`,
                },
                {
                  t: "Garanti ve kayıt",
                  d: "Servis formu ve fatura teslim edilir. İşçilik 24 aya kadar garantilidir; garanti süresince aynı arıza için ücret alınmaz.",
                },
              ].map((s, i) => (
                <li
                  key={s.t}
                  className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-ember-500 text-[13px] font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-[16px] font-bold text-ink-900">
                      {s.t}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Sik arizalar */}
          <section className="mt-14">
            <SectionHead
              eyebrow="Arıza profili"
              title={`${brand.name} Fırın Tamirinde Sık Karşılaşılan Arızalar`}
              description={`Aşağıdaki başlıklar, ${brand.name} fırın tamiri çağrılarında sahada en sık karşılaştığımız arızalardır. Belirtiyi tanımlamanız teşhis süresini belirgin şekilde kısaltır.`}
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {brand.commonFaults.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-ink-100 bg-white p-6"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ember-50 text-ember-600">
                      <IconAlert className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-[16px] font-bold leading-snug text-ink-900">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-ink-500">
                        {f.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Yedek parca */}
          <section className="mt-14 rounded-2xl border border-ink-100 bg-ink-50/60 p-7 sm:p-9">
            <h2 className="font-display text-[19px] font-bold text-ink-900">
              {brand.name} Fırın Tamirinde Kullanılan Yedek Parçalar
            </h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-ink-500">
              Aşağıdaki parçalarda stok tutuyor veya kısa sürede temin ediyoruz.
              Orijinal parçanın temin süresi işletmeyi bekletecekse, aynı teknik
              değerlerde sertifikalı muadil seçeneği fiyatıyla birlikte sunulur.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {brand.parts.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2.5 text-[15px] text-ink-600"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                  {p}
                </li>
              ))}
            </ul>
          </section>

          {/* Fiyatlandirma */}
          <section className="mt-14 rounded-2xl border border-ember-200 bg-ember-50/70 p-7 sm:p-9">
            <h2 className="font-display text-[19px] font-bold text-ink-900">
              {brand.name} Fırın Tamiri Fiyatları Nasıl Belirlenir?
            </h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-ink-600">
              {brand.priceNote}
            </p>
            <p className="mt-3 text-[15.5px] leading-relaxed text-ink-600">
              Telefonda verilen tahmini aralık, yerinde teşhis sonrası
              kesinleşir. Parça ve işçilik bedeli işleme başlanmadan önce
              bildirilir; onayınız alınmadan hiçbir işlem yapılmaz.
            </p>
            <a
              href={site.phone.href}
              className="mt-5 inline-flex h-12 items-center gap-2.5 rounded-xl bg-ink-900 px-6 text-[15px] font-bold text-white transition-colors hover:bg-ink-800"
            >
              <IconPhone className="h-4 w-4" /> Tamir fiyatı öğrenin
            </a>
          </section>

          {/* SSS */}
          <section className="mt-14">
            <SectionHead
              eyebrow="Sıkça sorulan sorular"
              title={`${brand.name} Fırın Servisi ve Tamiri Hakkında Sık Sorulanlar`}
            />
            <div className="mt-7">
              <FaqAccordion items={brand.faq} />
            </div>
          </section>

          {/* Bolge baglantilari */}
          <section className="mt-14">
            <h2 className="font-display text-[19px] font-bold text-ink-900">
              {brand.name} Fırın Servisi ve Tamiri Verdiğimiz Bölgeler
            </h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-ink-500">
              İstanbul&apos;un 39 ilçesinin tamamında {brand.name} fırın servisi
              ve {brand.name} fırın tamiri hizmeti veriyoruz. Bulunduğunuz
              ilçeyi seçerek bölgeye özel servis bilgilerine ulaşabilirsiniz.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {districts.slice(0, 14).map((x) => (
                <Link
                  key={x.key}
                  href={`/bolgeler/${x.slug}`}
                  className="rounded-lg border border-ink-100 bg-white px-3.5 py-2 text-[14px] text-ink-600 transition-colors hover:border-ember-300 hover:text-ember-600"
                >
                  {x.name}
                </Link>
              ))}
              <Link
                href="/bolgeler"
                className="rounded-lg bg-ink-900 px-3.5 py-2 text-[14px] font-semibold text-white"
              >
                Tüm ilçeler →
              </Link>
            </div>
          </section>
        </article>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl bg-ink-950 p-7 text-white">
            <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-ember-500">
              {brand.name} servis talebi
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-300">
              Cihaz modelini ve varsa ekrandaki hata kodunu iletin; telefonda ön
              teşhis yapalım.
            </p>
            <a
              href={site.phone.href}
              className="mt-5 flex h-12 items-center justify-center gap-2 rounded-xl bg-ember-500 text-[15px] font-bold text-white transition-colors hover:bg-ember-600"
            >
              <IconPhone className="h-4 w-4" /> {site.phone.display}
            </a>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              WhatsApp ile yaz
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-7">
            <h2 className="font-display text-[16px] font-bold text-ink-900">
              İlgili hizmetler
            </h2>
            <ul className="mt-4 space-y-1">
              {matchedServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="group flex items-start gap-2 rounded-lg bg-ember-50/60 px-2 py-2 text-[14.5px] font-semibold text-ember-700 transition-colors hover:bg-ember-50"
                  >
                    <IconArrow className="mt-1 h-3.5 w-3.5 shrink-0 text-ember-500" />
                    {s.navName}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[12.5px] font-bold uppercase tracking-[0.12em] text-ink-400">
              Diğer hizmetler
            </p>
            <ul className="mt-2 space-y-1">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="group flex items-start gap-2 rounded-lg px-2 py-2 text-[14.5px] text-ink-600 transition-colors hover:bg-ember-50 hover:text-ember-700"
                  >
                    <IconArrow className="mt-1 h-3.5 w-3.5 shrink-0 text-ink-300 transition-colors group-hover:text-ember-500" />
                    {s.navName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-7">
            <h2 className="font-display text-[16px] font-bold text-ink-900">
              Diğer markalar
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {brands
                .filter((b) => b.slug !== brand.slug)
                .map((b) => (
                  <Link
                    key={b.slug}
                    href={`/markalar/${b.slug}`}
                    className="rounded-lg border border-ink-100 px-3 py-1.5 text-[13.5px] text-ink-600 transition-colors hover:border-ember-300 hover:text-ember-600"
                  >
                    {b.name}
                  </Link>
                ))}
            </div>
          </div>
        </aside>
      </div>

      <section className="container-x pb-16 lg:pb-20">
        <SectionHead eyebrow="Diğer marka servisleri" title="Bunlara da bakabilirsiniz" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {otherBrands.map((b) => (
            <LinkCard
              key={b.slug}
              href={`/markalar/${b.slug}`}
              meta="Marka"
              title={`${b.name} Fırın Servisi ve Tamiri`}
              text={b.tagline}
            />
          ))}
        </div>
      </section>

      <CtaBand
        title={`${brand.name} fırınınız arıza mı verdi?`}
        text={`${brand.name} fırın tamiri için arayın; marka, model ve varsa hata kodunu iletin. Ekibimiz ön teşhis yapıp aynı gün yerinde müdahale için yola çıksın.`}
      />
      <div className="h-20" />
    </>
  );
}
