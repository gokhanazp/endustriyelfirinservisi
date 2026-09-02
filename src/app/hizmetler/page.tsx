import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/services";
import { brands } from "@/lib/brands";
import { districts } from "@/lib/districts";
import { posts, formatDate } from "@/lib/blog";
import { site, workflowSteps } from "@/lib/site";
import {
  hubChooser,
  hubFaq,
  hubIntro,
  hubPricing,
  hubSymptoms,
} from "@/lib/services-hub";
import {
  buildMetadata,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
} from "@/lib/seo";
import {
  CtaBand,
  FaqAccordion,
  JsonLd,
  PageHero,
  SectionHead,
} from "@/components/Ui";
import { Icon, IconAlert, IconArrow, IconCheck, IconPhone } from "@/components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Endüstriyel Fırın ve Mutfak Servis Hizmetleri | İstanbul",
  description:
    "Konveksiyonel, kombi, sanayi tipi ve pizza fırınlarında yerinde arıza tespiti, onarım ve bakım. İstanbul'un 39 ilçesinde aynı gün servis. ☎ 0533 191 24 78",
  path: "/hizmetler",
  keywords: [
    "endüstriyel fırın servisi hizmetleri",
    "endüstriyel fırın ve mutfak servisi istanbul",
    "endüstriyel mutfak teknik servis hizmetleri",
    "fırın bakım onarım hizmetleri istanbul",
  ],
});

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Hizmetler", path: "/hizmetler" },
];

/** Hub sayfasinda one cikarilan ilceler — tam liste /bolgeler sayfasinda */
const featuredDistricts = districts.slice(0, 16);

/** Hub sayfasinda gosterilen son teknik yazilar */
const latestPosts = posts.slice(0, 3);

export default function ServicesIndex() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          itemListSchema(
            services.map((s) => ({ name: s.name, path: `/hizmetler/${s.slug}` })),
            "Endüstriyel fırın ve mutfak servis hizmetleri"
          ),
          faqSchema(hubFaq),
        ]}
      />

      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Endüstriyel Fırın ve Mutfak Ekipmanları Servis Hizmetleri"
        description="Fırın tipine göre uzmanlaşmış ekiplerle çalışıyoruz. Aşağıdaki başlıklardan işletmenizin ihtiyacına uygun hizmeti seçerek arıza belirtileri, servis kapsamı ve sık sorulan soruların tamamına ulaşabilirsiniz."
        breadcrumbs={crumbs}
      />

      {/* ---- 2. Giris metni ---- */}
      <section className="container-x pt-14 lg:pt-16">
        <div className="prose-tr max-w-4xl">
          {hubIntro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ---- 3. Hizmet kartlari ---- */}
      <section className="container-x py-14 lg:py-16">
        <SectionHead
          eyebrow="Servis başlıkları"
          title="Altı ayrı uzmanlık alanı"
          description="Her başlık kendi arıza profili, ölçüm yöntemi ve yedek parça setiyle çalışır. Detay sayfalarında o hizmete özel belirtiler, kapsam ve sık sorulan sorular yer alır."
        />
        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.slug}
              className="group rounded-2xl border border-ink-100 bg-white p-7 transition-all hover:border-ember-200 hover:shadow-lift sm:p-9"
            >
              <div className="flex items-start gap-5">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink-900 text-ember-400 transition-colors group-hover:bg-ember-500 group-hover:text-white">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-display text-[19px] font-bold leading-snug text-ink-900">
                    <Link
                      href={`/hizmetler/${s.slug}`}
                      className="transition-colors hover:text-ember-600"
                    >
                      {s.name}
                    </Link>
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                    {s.excerpt}
                  </p>
                </div>
              </div>

              <ul className="mt-6 grid gap-2 border-t border-ink-100 pt-6 sm:grid-cols-2">
                {s.scope.slice(0, 4).map((x) => (
                  <li
                    key={x}
                    className="flex items-start gap-2 text-[14px] leading-relaxed text-ink-500"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-400" />
                    {x}
                  </li>
                ))}
              </ul>

              <Link
                href={`/hizmetler/${s.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-[14.5px] font-bold text-ember-600 transition-all hover:gap-3"
              >
                Hizmet detayları <IconArrow className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ---- 4. Hangi hizmeti secmeliyim? ---- */}
      <section className="border-y border-ink-100 bg-ink-50/60 py-14 lg:py-16">
        <div className="container-x">
          <SectionHead
            eyebrow="Yönlendirme"
            title="Hangi hizmeti seçmeliyim?"
            description="Cihaz tipinizi ve gördüğünüz belirtiyi eşleştirin; sağdaki sayfa sizin için doğru başlangıç noktasıdır. Emin değilseniz telefonda tarif etmeniz de yeterli, doğru ekibi biz yönlendiririz."
          />
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink-100 bg-white">
            <table className="w-full min-w-[46rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-ink-100 bg-ink-50/80">
                  <th className="px-5 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-ink-500">
                    Cihazınız
                  </th>
                  <th className="px-5 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-ink-500">
                    Belirti
                  </th>
                  <th className="px-5 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-ink-500">
                    Gideceğiniz sayfa
                  </th>
                </tr>
              </thead>
              <tbody>
                {hubChooser.map((row) => (
                  <tr
                    key={row.serviceSlug}
                    className="border-b border-ink-100 last:border-0 transition-colors hover:bg-ember-50/40"
                  >
                    <td className="px-5 py-4 text-[15px] font-semibold text-ink-800">
                      {row.device}
                    </td>
                    <td className="px-5 py-4 text-[14.5px] leading-relaxed text-ink-500">
                      {row.symptom}
                    </td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/hizmetler/${row.serviceSlug}`}
                        className="inline-flex items-center gap-1.5 text-[14.5px] font-bold text-ember-600 transition-all hover:gap-2.5"
                      >
                        {row.serviceLabel} <IconArrow className="h-3.5 w-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- 5. Ariza belirtisi -> teknik yazi ---- */}
      <section className="container-x py-14 lg:py-16">
        <SectionHead
          eyebrow="Arıza belirtileri"
          title="Belirtiden kök nedene"
          description="Sahada en sık karşılaştığımız altı belirti ve arkasındaki tipik nedenler. Her satırın sonundaki teknik yazı, o arızayı adım adım nasıl teşhis ettiğimizi anlatıyor."
        />
        <div className="mt-8 overflow-x-auto rounded-2xl border border-ink-100">
          <table className="w-full min-w-[48rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-ink-100 bg-ink-50/80">
                <th className="px-5 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-ink-500">
                  Belirti
                </th>
                <th className="px-5 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-ink-500">
                  Olası kök neden
                </th>
                <th className="px-5 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-ink-500">
                  Ayrıntılı yazı
                </th>
              </tr>
            </thead>
            <tbody>
              {hubSymptoms.map((row) => (
                <tr
                  key={row.postSlug}
                  className="border-b border-ink-100 bg-white last:border-0 transition-colors hover:bg-ember-50/40"
                >
                  <td className="px-5 py-4">
                    <span className="flex items-start gap-2.5 text-[15px] font-semibold text-ink-800">
                      <IconAlert className="mt-0.5 h-4 w-4 shrink-0 text-ember-500" />
                      {row.symptom}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-[14.5px] leading-relaxed text-ink-500">
                    {row.cause}
                  </td>
                  <td className="px-5 py-4">
                    <Link
                      href={`/blog/${row.postSlug}`}
                      className="inline-flex items-center gap-1.5 text-[14.5px] font-bold text-ember-600 transition-all hover:gap-2.5"
                    >
                      {row.postLabel} <IconArrow className="h-3.5 w-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- 6. Servis sureci ---- */}
      <section className="border-y border-ink-100 bg-ink-50/60 py-14 lg:py-16">
        <div className="container-x">
          <SectionHead
            eyebrow="Nasıl çalışıyoruz"
            title="Arıza bildiriminden garantiye altı adım"
            description="Servis süreci her işletmede aynı işler. Hangi adımda olduğunuzu bilmeniz, işin ne kadar süreceğini ve ne zaman onay vermeniz gerektiğini önceden görmenizi sağlar."
          />
          <ol className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((s) => (
              <li
                key={s.step}
                className="rounded-2xl border border-ink-100 bg-white p-6"
              >
                <span className="font-display text-[13px] font-extrabold tracking-[0.14em] text-ember-600">
                  {s.step}
                </span>
                <h3 className="mt-3 font-display text-[16.5px] font-bold leading-snug text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-500">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- 7. Servis bedeli ve garanti ---- */}
      <section className="container-x py-14 lg:py-16">
        <SectionHead
          eyebrow="Şeffaflık"
          title="Servis bedeli, parça ve garanti nasıl işliyor?"
          description={hubPricing.intro}
        />
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hubPricing.rows.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-ink-100 bg-white p-6"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ember-100 text-ember-600">
                  <IconCheck className="h-3.5 w-3.5" strokeWidth={2.6} />
                </span>
                <div>
                  <h3 className="font-display text-[15.5px] font-bold leading-snug text-ink-900">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-500">
                    {r.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-ember-200 bg-ember-50/70 p-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-[15.5px] leading-relaxed text-ink-600">
            Cihazın markasını, modelini ve arıza belirtisini iletin; telefonda ön
            teşhis yapıp tahmini bir aralık verelim.
          </p>
          <a
            href={site.phone.href}
            className="inline-flex h-12 shrink-0 items-center gap-2.5 rounded-xl bg-ink-900 px-6 text-[15px] font-bold text-white transition-colors hover:bg-ink-800"
          >
            <IconPhone className="h-4 w-4" /> {site.phone.display}
          </a>
        </div>
      </section>

      {/* ---- 8. Marka servisleri ---- */}
      <section className="border-y border-ink-100 bg-ink-50/60 py-14 lg:py-16">
        <div className="container-x">
          <SectionHead
            eyebrow="Marka servisleri"
            title="Cihazınızın markasına özel servis sayfaları"
            description="Her markanın arıza profili ve parça yapısı farklıdır. Aşağıdan markanızı seçerek o markaya özel servis bilgilerine ulaşabilirsiniz. Listede olmayan markalara da servis veriyoruz."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {brands.map((b) => (
              <Link
                key={b.slug}
                href={`/markalar/${b.slug}`}
                className="rounded-xl border border-ink-200 bg-white px-5 py-3 text-[15px] font-semibold text-ink-800 transition-all hover:-translate-y-0.5 hover:border-ember-300 hover:text-ember-600"
              >
                {b.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 9. SSS ---- */}
      <section className="container-x py-14 lg:py-16">
        <SectionHead
          eyebrow="Sıkça sorulan sorular"
          title="Hizmetlerimiz hakkında merak edilenler"
          description="Cihaza özel sorular ilgili hizmet sayfalarında yanıtlanıyor. Buradakiler hizmetlerin kapsamı, fiyatlandırma mantığı ve çalışma şeklimizle ilgili."
        />
        <div className="mt-8">
          <FaqAccordion items={hubFaq} />
        </div>
      </section>

      {/* ---- 10. Ilgili teknik yazilar ---- */}
      <section className="border-y border-ink-100 bg-ink-50/60 py-14 lg:py-16">
        <div className="container-x">
          <SectionHead
            eyebrow="Teknik blog"
            title="Servis ekibimizin sahadan yazdıkları"
            description="Arıza belirtilerini, ölçüm adımlarını ve kalıcı çözümleri gerçek servis kayıtlarına dayanarak anlatıyoruz."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {latestPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-ember-200 hover:shadow-lift"
              >
                <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-ember-600">
                  {p.category} · {p.readingMinutes} dk okuma
                </span>
                <h3 className="mt-2.5 font-display text-[16.5px] font-bold leading-snug text-ink-900 transition-colors group-hover:text-ember-600">
                  {p.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-ink-500">
                  {p.excerpt}
                </p>
                <span className="mt-4 text-[13px] text-ink-400">
                  Güncelleme: {formatDate(p.updatedAt)}
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 text-[14.5px] font-bold text-ember-600 transition-all hover:gap-3"
          >
            Tüm teknik yazılar <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ---- 11. Servis bolgeleri ---- */}
      <section className="container-x py-14 lg:py-16">
        <SectionHead
          eyebrow="Servis bölgeleri"
          title="İstanbul'un 39 ilçesinde yerinde servis"
          description="Her ilçede bölgesel ekip bulunduğu için ortalama varış süresi 2-4 saattir. İlçenizi seçerek o bölgedeki işletme profili, tipik arızalar ve servis notlarımıza ulaşabilirsiniz."
        />
        <div className="mt-8 flex flex-wrap gap-2.5">
          {featuredDistricts.map((x) => (
            <Link
              key={x.key}
              href={`/bolgeler/${x.slug}`}
              className="rounded-lg border border-ink-100 bg-white px-4 py-2.5 text-[14.5px] text-ink-600 transition-colors hover:border-ember-300 hover:text-ember-600"
            >
              {x.name}
            </Link>
          ))}
          <Link
            href="/bolgeler"
            className="rounded-lg bg-ink-900 px-4 py-2.5 text-[14.5px] font-semibold text-white transition-colors hover:bg-ink-800"
          >
            Tüm ilçeler →
          </Link>
        </div>
      </section>

      <div className="pb-16 lg:pb-20">
        <CtaBand />
      </div>
    </>
  );
}
