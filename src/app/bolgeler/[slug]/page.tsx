import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { districts, getDistrict, getDistrictByKey } from "@/lib/districts";
import { services } from "@/lib/services";
import { brands } from "@/lib/brands";
import { absoluteUrl, site } from "@/lib/site";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  localBusinessSchema,
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
import { Icon, IconArrow, IconCheck, IconPhone, IconPin } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return districts.map((x) => ({ slug: x.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const district = getDistrict(slug);
  if (!district) return {};

  const title = `${district.name} Endüstriyel Fırın Servisi | Aynı Gün Yerinde`;
  /**
   * Aciklamanin ilk cumlesi ilceye ozeldir (mahalle adlari): 39 ilce
   * sayfasinin meta aciklamasi birbirinin ayni olmaz, doorway page
   * riski azalir.
   */
  const description = `${district.name} endüstriyel fırın servisi. ${district.areas
    .slice(0, 2)
    .join(", ")} ve çevresinde konveksiyonel, pizza ve sanayi tipi fırınlarda aynı gün yerinde tamir ve bakım.`;

  return buildMetadata({
    title,
    description,
    path: `/bolgeler/${district.slug}`,
    keywords: [
      `${district.name} endüstriyel fırın servisi`,
      `${district.name} endüstriyel fırın tamiri`,
      `${district.name} fırın tamircisi`,
      `${district.name} endüstriyel mutfak servisi`,
      `${district.name} pizza fırını servisi`,
      `${district.name} sanayi tipi fırın servisi`,
    ],
  });
}

export default async function DistrictDetail({ params }: Props) {
  const { slug } = await params;
  const district = getDistrict(slug);
  if (!district) notFound();

  const url = absoluteUrl(`/bolgeler/${district.slug}`);
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Servis Bölgeleri", path: "/bolgeler" },
    {
      name: `${district.name} Endüstriyel Fırın Servisi`,
      path: `/bolgeler/${district.slug}`,
    },
  ];

  const neighbors = district.neighbors
    .map((k) => getDistrictByKey(k))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const sameSide = districts
    .filter((x) => x.side === district.side && x.key !== district.key)
    .slice(0, 12);

  const faq = [
    {
      q: `${district.name} endüstriyel fırın servisi aynı gün gelir mi?`,
      a: `Evet. ${district.name} bölgesinde ${district.side} Yakası ekibimiz görev yapar; hafta içi 16:00'a kadar açılan arıza kayıtlarında aynı gün yerinde müdahale hedeflenir. Ortalama varış süresi 2-4 saattir, üretimi tamamen durduran arızalarda öncelikli acil kayıt açılır.`,
    },
    {
      q: `${district.name}'de hangi mahallelere servis veriyorsunuz?`,
      a: `${district.areas.join(", ")} başta olmak üzere ${district.name} ilçesinin tüm mahallelerine servis veriyoruz. Ayrıca komşu ilçeler ${neighbors
        .map((n) => n.name)
        .join(", ")} da aynı ekibin servis alanındadır.`,
    },
    {
      q: `${district.name}'de hangi fırın tiplerine bakıyorsunuz?`,
      a: `Konveksiyonel fırın, kombi (buharlı) fırın, katlı ve döner sanayi tipi fırınlar, konveyör ve tünel fırınlar, taş tabanlı pizza fırınları ile odun ve gaz ateşli kubbe fırınların tamamına servis veriyoruz. Fırın dışındaki endüstriyel mutfak ekipmanları da hizmet kapsamımızdadır.`,
    },
    {
      q: `${district.name} için servis ücreti farklı mı?`,
      a: `Hayır. İstanbul'un tüm ilçelerinde aynı tarife uygulanır. Yerinde arıza tespiti için servis bedeli alınır ve onarım tarafımızca yapıldığında bu bedel toplam tutardan düşülür. Parça ve işçilik bedeli işleme başlanmadan önce bildirilir.`,
    },
    {
      q: `${district.name}'de periyodik bakım sözleşmesi yapıyor musunuz?`,
      a: `Evet. ${district.name}'deki otel, restoran, pastane, fabrika yemekhanesi ve catering işletmeleri için yıllık bakım sözleşmeleri düzenliyoruz. Sözleşme; öncelikli servis hakkı, indirimli işçilik ve parça fiyatı ile planlı bakım takvimi içerir.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          localBusinessSchema({
            name: `${site.name} — ${district.name}`,
            description: `${district.name} ve çevresinde endüstriyel fırın servisi, tamiri ve endüstriyel mutfak bakım hizmeti.`,
            url,
            districtName: district.name,
          }),
          serviceSchema({
            name: `${district.name} Endüstriyel Fırın Servisi ve Tamiri`,
            description: `${district.name} bölgesinde endüstriyel fırın servisi, arıza tespiti, onarım, yedek parça ve periyodik bakım.`,
            url,
            serviceType: "Endüstriyel fırın servisi ve tamiri",
            districtName: district.name,
          }),
          faqSchema(faq),
        ]}
      />

      <PageHero
        eyebrow={`${district.side} Yakası · İstanbul`}
        title={`${district.name} Endüstriyel Fırın Servisi ve Tamiri`}
        description={`${district.name} ve çevresindeki restoran, otel, pastane, fabrika yemekhanesi ve catering işletmelerine aynı gün yerinde endüstriyel fırın servisi veriyoruz.`}
        breadcrumbs={crumbs}
      >
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {[
            { t: "Ortalama varış", v: "2-4 saat" },
            { t: "Servis günleri", v: "Hafta içi + Cumartesi" },
            { t: "Acil hat", v: "7/24 açık" },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
            >
              <p className="text-[12.5px] uppercase tracking-[0.12em] text-ink-400">
                {x.t}
              </p>
              <p className="mt-1 font-display text-[17px] font-bold text-white">
                {x.v}
              </p>
            </div>
          ))}
        </div>
      </PageHero>

      <div className="container-x grid gap-14 py-16 lg:grid-cols-[1fr_20rem] lg:gap-16 lg:py-20">
        <article>
          <div className="prose-tr">
            <p>{district.profile}</p>
            <p>{district.serviceNote}</p>
            <p>
              {district.name} endüstriyel fırın tamiri taleplerinde önce telefonda
              ön teşhis yapıyoruz: cihazın markası, modeli, arıza belirtisi ve
              varsa ekrandaki hata kodu alınıyor. Bu bilgi, teknisyenin doğru
              yedek parçayla yola çıkmasını sağlıyor ve çoğu işi ikinci bir
              ziyarete gerek kalmadan tek seferde kapatıyor. Yerinde yapılan
              elektriksel ölçümler, değişen parçalar ve onarım sonrası test
              değerleri servis formuna yazılıp işletmeye teslim ediliyor.
            </p>
          </div>

          {/* Mahalleler */}
          <section className="mt-12 rounded-2xl border border-ink-100 bg-ink-50/60 p-7">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-ember-600">
                <IconPin className="h-4 w-4" />
              </span>
              <h2 className="font-display text-[17px] font-bold text-ink-900">
                {district.name}&apos;de servis verdiğimiz başlıca bölgeler
              </h2>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {district.areas.map((a) => (
                <span
                  key={a}
                  className="rounded-lg border border-ink-200 bg-white px-3.5 py-2 text-[14px] text-ink-600"
                >
                  {a}
                </span>
              ))}
            </div>
            <p className="mt-5 text-[14.5px] leading-relaxed text-ink-500">
              Listede yer almayan mahalleler dâhil {district.name} ilçesinin
              tamamına servis veriyoruz.
            </p>
          </section>

          {/* Hizmetler — ilce adiyla */}
          <section className="mt-14">
            <SectionHead
              eyebrow="Hizmetler"
              title={`${district.name}'de verdiğimiz servis hizmetleri`}
              description={`${district.name} ve çevresindeki işletmelerde aşağıdaki hizmet başlıklarının tamamını yerinde sunuyoruz.`}
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/hizmetler/${s.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-ember-200 hover:shadow-soft"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-ember-400 transition-colors group-hover:bg-ember-500 group-hover:text-white">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-[16px] font-bold leading-snug text-ink-900 transition-colors group-hover:text-ember-600">
                      {district.name} {s.navName}
                    </span>
                    <span className="mt-1.5 block text-[14px] leading-relaxed text-ink-500">
                      {s.excerpt}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Sik arizalar */}
          <section className="mt-14">
            <SectionHead
              eyebrow="Saha notları"
              title={`${district.name}'de en sık karşılaştığımız arızalar`}
            />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Fırın ısınmıyor / geç ısınıyor (rezistans, kontaktör, prob)",
                "Sıcaklık göstergeden farklı okuyor (kalibrasyon)",
                "Buhar üretmiyor, kireç kaynaklı tıkanma",
                "Fan ses yapıyor, tepsiler arasında pişme farkı",
                "Panelde hata kodu, cihaz kilitleniyor",
                "Kapı contası ısı kaçırıyor, tüketim artıyor",
                "Pizza fırınında taban çiğ kalıyor",
                "Gazlı modelde alev tutmuyor",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white px-5 py-4 text-[14.5px] leading-relaxed text-ink-600"
                >
                  <IconCheck
                    className="mt-0.5 h-4 w-4 shrink-0 text-ember-500"
                    strokeWidth={2.4}
                  />
                  {t}
                </li>
              ))}
            </ul>
          </section>

          {/* Markalar */}
          <section className="mt-14">
            <SectionHead
              eyebrow="Marka servisleri"
              title={`${district.name}'de servis verdiğimiz markalar`}
              description="Cihazınızın markasını seçerek o markaya özel arıza profilini ve yedek parça bilgilerini görebilirsiniz."
            />
            <div className="mt-7 flex flex-wrap gap-2.5">
              {brands.map((b) => (
                <Link
                  key={b.slug}
                  href={`/markalar/${b.slug}`}
                  className="rounded-xl border border-ink-100 bg-white px-4 py-2.5 text-[14.5px] font-medium text-ink-700 transition-colors hover:border-ember-300 hover:text-ember-600"
                  title={`${district.name} ${b.name} fırın servisi ve tamiri`}
                >
                  {b.name}
                </Link>
              ))}
            </div>
          </section>

          {/* SSS */}
          <section className="mt-14">
            <SectionHead
              eyebrow="Sıkça sorulan sorular"
              title={`${district.name} endüstriyel fırın servisi hakkında`}
            />
            <div className="mt-7">
              <FaqAccordion items={faq} />
            </div>
          </section>

          {/* Komsu ilceler */}
          {neighbors.length > 0 && (
            <section className="mt-14">
              <h2 className="font-display text-[19px] font-bold text-ink-900">
                {district.name} çevresindeki servis bölgeleri
              </h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink-500">
                Aynı ekip aşağıdaki komşu ilçelere de hizmet vermektedir.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {neighbors.map((n) => (
                  <Link
                    key={n.key}
                    href={`/bolgeler/${n.slug}`}
                    className="rounded-lg border border-ink-100 bg-white px-3.5 py-2 text-[14px] text-ink-600 transition-colors hover:border-ember-300 hover:text-ember-600"
                  >
                    {n.name} Endüstriyel Fırın Servisi
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl bg-ink-950 p-7 text-white">
            <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-ember-500">
              {district.name} servis hattı
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-300">
              {district.name} ve çevresindeki ekibimize doğrudan ulaşın. Arıza
              belirtisini iletin, ön teşhisle yola çıkalım.
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
              {district.side} Yakası&apos;ndaki diğer ilçeler
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {sameSide.map((x) => (
                <Link
                  key={x.key}
                  href={`/bolgeler/${x.slug}`}
                  className="rounded-lg border border-ink-100 px-3 py-1.5 text-[13.5px] text-ink-600 transition-colors hover:border-ember-300 hover:text-ember-600"
                >
                  {x.name}
                </Link>
              ))}
              <Link
                href="/bolgeler"
                className="rounded-lg bg-ink-100 px-3 py-1.5 text-[13.5px] font-semibold text-ink-700"
              >
                Tümü →
              </Link>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-7">
            <h2 className="font-display text-[16px] font-bold text-ink-900">
              Hizmetlerimiz
            </h2>
            <ul className="mt-4 space-y-1">
              {services.map((s) => (
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
        </aside>
      </div>

      <section className="container-x pb-16 lg:pb-20">
        <SectionHead eyebrow="Yakın bölgeler" title="Diğer servis bölgelerimiz" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sameSide.slice(0, 4).map((x) => (
            <LinkCard
              key={x.key}
              href={`/bolgeler/${x.slug}`}
              meta={`${x.side} Yakası`}
              title={`${x.name} Endüstriyel Fırın Servisi`}
              text={x.serviceNote.slice(0, 110) + "…"}
            />
          ))}
        </div>
      </section>

      <CtaBand
        title={`${district.name}'de fırınınız mı arızalandı?`}
        text={`${district.name} bölgesindeki ekibimiz aynı gün yerinde müdahale için hazır. Arayın, arıza belirtisini iletin; ön teşhisle yola çıkalım.`}
      />
      <div className="h-20" />
    </>
  );
}
