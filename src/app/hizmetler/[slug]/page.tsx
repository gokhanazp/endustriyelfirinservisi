import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getService, services } from "@/lib/services";
import { brands, getServiceBrands } from "@/lib/brands";
import { districts } from "@/lib/districts";
import { getPostsByService, formatDate } from "@/lib/blog";
import { absoluteUrl, site } from "@/lib/site";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";
import {
  CheckList,
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
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/hizmetler/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = absoluteUrl(`/hizmetler/${service.slug}`);
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
    { name: service.name, path: `/hizmetler/${service.slug}` },
  ];

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const featuredDistricts = districts.slice(0, 12);
  const guides = getPostsByService(service.slug);

  /** Bu hizmetin kapsamina giren markalar; eslesme yoksa ilk 10 marka. */
  const matchedBrands = getServiceBrands(service.slug);
  const sidebarBrands = (matchedBrands.length ? matchedBrands : brands).slice(0, 10);

  /** Daha spesifik kardes hizmet sayfalari — keyword cakismasini onler */
  const relatedServices = (service.related ?? [])
    .map((r) => ({ note: r.note, target: getService(r.slug) }))
    .filter((x): x is { note: string; target: NonNullable<typeof x.target> } =>
      Boolean(x.target)
    );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            url,
            serviceType: service.name,
          }),
          faqSchema(service.faq),
        ]}
      />

      <PageHero
        eyebrow="Hizmet"
        title={service.h1}
        description={service.excerpt}
        breadcrumbs={crumbs}
      />

      <div className="container-x grid gap-14 py-16 lg:grid-cols-[1fr_20rem] lg:gap-16 lg:py-20">
        <article>
          {/* Giris */}
          <div className="prose-tr">
            {service.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Daha spesifik hizmet sayfalari */}
          {relatedServices.length > 0 && (
            <section className="mt-12 rounded-2xl border border-ink-100 bg-ink-50/60 p-7 sm:p-8">
              <h2 className="font-display text-[17px] font-bold text-ink-900">
                Cihazınız daha özel bir tipteyse
              </h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink-600">
                Aşağıdaki başlıklar bu hizmetin alt dallarıdır ve o cihaz tipine
                özel arıza belirtilerini, ölçüm adımlarını ve yedek parçaları
                ayrıntılı anlatır.
              </p>
              <ul className="mt-6 space-y-3">
                {relatedServices.map((r) => (
                  <li key={r.target.slug}>
                    <Link
                      href={`/hizmetler/${r.target.slug}`}
                      className="group flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 transition-all hover:border-ember-200 hover:shadow-soft"
                    >
                      <IconArrow className="mt-1 h-4 w-4 shrink-0 text-ink-300 transition-all group-hover:translate-x-0.5 group-hover:text-ember-500" />
                      <span>
                        <span className="block font-display text-[15.5px] font-bold text-ink-900 transition-colors group-hover:text-ember-600">
                          {r.target.name}
                        </span>
                        <span className="mt-1.5 block text-[14.5px] leading-relaxed text-ink-500">
                          {r.note}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Ariza belirtileri */}
          <section className="mt-14">
            <SectionHead
              eyebrow="Arıza belirtileri"
              title={`${service.name} gerektiren durumlar`}
              description="Aşağıdaki belirtilerden biri varsa cihazı zorlamadan servis çağırmak, hem arızanın büyümesini hem de ikinci bir parçanın zarar görmesini önler."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {service.symptoms.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-ink-100 bg-white p-6"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ember-50 text-ember-600">
                      <IconAlert className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-[16px] font-bold leading-snug text-ink-900">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-ink-500">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Kapsam */}
          <section className="mt-14">
            <SectionHead
              eyebrow="Servis kapsamı"
              title="Bu hizmet kapsamında yapılan işlemler"
            />
            <div className="mt-7 rounded-2xl border border-ink-100 bg-ink-50/60 p-7">
              <CheckList items={service.scope} columns={2} />
            </div>
          </section>

          {/* Cihaz tipleri + parcalar */}
          <section className="mt-14 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-ink-100 bg-white p-7">
              <h2 className="font-display text-[17px] font-bold text-ink-900">
                Servis verdiğimiz cihaz tipleri
              </h2>
              <ul className="mt-4 space-y-2.5">
                {service.equipment.map((e) => (
                  <li
                    key={e}
                    className="flex items-start gap-2.5 text-[15px] text-ink-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-ink-100 bg-white p-7">
              <h2 className="font-display text-[17px] font-bold text-ink-900">
                Sık değişen yedek parçalar
              </h2>
              <ul className="mt-4 space-y-2.5">
                {service.parts.map((e) => (
                  <li
                    key={e}
                    className="flex items-start gap-2.5 text-[15px] text-ink-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-300" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Fiyat notu */}
          <section className="mt-14 rounded-2xl border border-ember-200 bg-ember-50/70 p-7">
            <h2 className="font-display text-[17px] font-bold text-ink-900">
              Fiyatlandırma nasıl yapılır?
            </h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-ink-600">
              {service.priceNote}
            </p>
            <a
              href={site.phone.href}
              className="mt-5 inline-flex h-12 items-center gap-2.5 rounded-xl bg-ink-900 px-6 text-[15px] font-bold text-white transition-colors hover:bg-ink-800"
            >
              <IconPhone className="h-4 w-4" /> Fiyat bilgisi alın
            </a>
          </section>

          {/* Teknik rehberler */}
          {guides.length > 0 && (
            <section className="mt-14">
              <SectionHead
                eyebrow="Teknik rehber"
                title="Bu hizmetle ilgili yazılarımız"
                description="Arıza belirtilerini, teşhis adımlarını ve kalıcı çözümleri sahadan örneklerle anlattığımız detaylı rehberler."
              />
              <div className="mt-7 space-y-4">
                {guides.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/blog/${g.slug}`}
                    className="group flex flex-col justify-between gap-4 rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-ember-200 hover:shadow-soft sm:flex-row sm:items-center"
                  >
                    <div>
                      <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-ember-600">
                        {g.category} · {g.readingMinutes} dk okuma
                      </span>
                      <h3 className="mt-2 font-display text-[16.5px] font-bold leading-snug text-ink-900 transition-colors group-hover:text-ember-600">
                        {g.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-ink-500">
                        {g.excerpt}
                      </p>
                      <span className="mt-2 block text-[13px] text-ink-400">
                        Güncelleme: {formatDate(g.updatedAt)}
                      </span>
                    </div>
                    <IconArrow className="h-5 w-5 shrink-0 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-ember-500" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* SSS */}
          <section className="mt-14">
            <SectionHead
              eyebrow="Sıkça sorulan sorular"
              title={`${service.name} hakkında merak edilenler`}
            />
            <div className="mt-7">
              <FaqAccordion items={service.faq} />
            </div>
          </section>

          {/* Bolgeler */}
          <section className="mt-14">
            <h2 className="font-display text-[19px] font-bold text-ink-900">
              {service.name} verdiğimiz bölgeler
            </h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-ink-500">
              İstanbul&apos;un 39 ilçesinin tamamında yerinde servis veriyoruz.
              Bölgenize özel bilgiler için ilçenizi seçin.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featuredDistricts.map((x) => (
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
                className="rounded-lg bg-ink-900 px-3.5 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-ink-800"
              >
                Tüm ilçeler →
              </Link>
            </div>
          </section>
        </article>

        {/* ---- Kenar cubugu ---- */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl bg-ink-950 p-7 text-white">
            <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-ember-500">
              Hızlı servis talebi
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-300">
              Cihazın markasını, modelini ve arıza belirtisini iletin; ön teşhis
              yapıp en yakın ekibi yönlendirelim.
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
            <dl className="mt-6 space-y-2 border-t border-white/10 pt-5 text-[13.5px]">
              <div className="flex justify-between gap-3">
                <dt className="text-ink-400">Hafta içi</dt>
                <dd>{site.hours.weekday}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-400">Cumartesi</dt>
                <dd>{site.hours.saturday}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-400">Acil hat</dt>
                <dd className="text-ember-400">7/24</dd>
              </div>
            </dl>
          </div>

          <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-7">
            <h2 className="font-display text-[16px] font-bold text-ink-900">
              Diğer hizmetlerimiz
            </h2>
            <ul className="mt-4 space-y-1">
              {services
                .filter((s) => s.slug !== service.slug)
                .map((s) => (
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
              Marka servisleri
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {sidebarBrands.map((b) => (
                <Link
                  key={b.slug}
                  href={`/markalar/${b.slug}`}
                  className="rounded-lg border border-ink-100 px-3 py-1.5 text-[13.5px] text-ink-600 transition-colors hover:border-ember-300 hover:text-ember-600"
                >
                  {b.name}
                </Link>
              ))}
              <Link
                href="/markalar"
                className="rounded-lg bg-ink-100 px-3 py-1.5 text-[13.5px] font-semibold text-ink-700"
              >
                Tümü →
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <section className="container-x pb-16 lg:pb-20">
        <SectionHead eyebrow="İlgili hizmetler" title="Bunlar da ilginizi çekebilir" />
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {others.map((s) => (
            <LinkCard
              key={s.slug}
              href={`/hizmetler/${s.slug}`}
              title={s.name}
              text={s.excerpt}
              meta="Hizmet"
            />
          ))}
        </div>
      </section>

      <CtaBand />
      <div className="h-20" />
    </>
  );
}
