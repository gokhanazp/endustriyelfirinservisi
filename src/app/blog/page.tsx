import Link from "next/link";
import type { Metadata } from "next";
import { posts, formatDate } from "@/lib/blog";
import { getService } from "@/lib/services";
import {
  blogSchema,
  breadcrumbSchema,
  buildMetadata,
  itemListSchema,
} from "@/lib/seo";
import { CtaBand, JsonLd, PageHero, SectionHead } from "@/components/Ui";
import { IconArrow } from "@/components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Teknik Blog | Endüstriyel Fırın Arıza ve Bakım Rehberleri",
  description:
    "Endüstriyel fırın ve mutfak ekipmanlarında arıza teşhisi, periyodik bakım, enerji verimliliği ve yedek parça seçimi üzerine sahadan yazılmış teknik rehberler.",
  path: "/blog",
  keywords: [
    "endüstriyel fırın arıza rehberi",
    "endüstriyel mutfak bakım rehberi",
    "fırın teknik blog",
    "pizza fırını ayarı",
    "kombi fırın kireç",
  ],
});

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Teknik Blog", path: "/blog" },
];

export default function BlogIndex() {
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          blogSchema(
            posts.map((p) => ({
              name: p.title,
              path: `/blog/${p.slug}`,
              description: p.excerpt,
              date: p.publishedAt,
            }))
          ),
          itemListSchema(
            posts.map((p) => ({ name: p.title, path: `/blog/${p.slug}` })),
            "Teknik rehberler"
          ),
        ]}
      />

      <PageHero
        eyebrow="Teknik blog"
        title="Sahadan Yazılmış Arıza, Bakım ve Verimlilik Rehberleri"
        description="Bu yazıların hepsi servis kayıtlarımızdan çıktı. Pazarlama metni değil; hangi belirtinin hangi arızayı işaret ettiğini, neyin kendi başınıza yapılabileceğini ve neyin teknik servise bırakılması gerektiğini anlatıyoruz."
        breadcrumbs={crumbs}
      />

      {/* Öne çıkan yazı */}
      <section className="container-x py-16 lg:py-20">
        <article className="group grid gap-8 overflow-hidden rounded-3xl border border-ink-100 bg-white p-7 transition-all hover:border-ember-200 hover:shadow-lift lg:grid-cols-[1.35fr_1fr] lg:p-10">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-[12.5px]">
              <span className="rounded-full bg-ember-500 px-3 py-1 font-bold uppercase tracking-[0.1em] text-white">
                Öne çıkan
              </span>
              <span className="rounded-full bg-ink-50 px-3 py-1 font-semibold text-ink-500">
                {featured.category}
              </span>
              <span className="text-ink-400">
                {formatDate(featured.publishedAt)} · {featured.readingMinutes} dk
                okuma
              </span>
            </div>

            <h2 className="mt-5 font-display text-[1.6rem] font-extrabold leading-[1.2] text-ink-900 transition-colors group-hover:text-ember-600 sm:text-[2rem]">
              <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
            </h2>

            <p className="mt-4 text-[16.5px] leading-relaxed text-ink-500">
              {featured.excerpt}
            </p>

            <Link
              href={`/blog/${featured.slug}`}
              className="mt-7 inline-flex h-12 items-center gap-2.5 rounded-xl bg-ink-900 px-6 text-[15px] font-bold text-white transition-colors hover:bg-ink-800"
            >
              Yazıyı oku <IconArrow className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-2xl bg-ink-50/70 p-6 sm:p-7">
            <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-ember-600">
              Yazıdan çıkarımlar
            </p>
            <ul className="mt-4 space-y-3">
              {featured.takeaways.map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                  <span className="text-[14.5px] leading-relaxed text-ink-600">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      {/* Diğer yazılar */}
      <section className="border-y border-ink-100 bg-ink-50/60 py-16 lg:py-20">
        <div className="container-x">
          <SectionHead
            eyebrow="Tüm yazılar"
            title="Hizmet başlıklarımıza bağlı teknik rehberler"
            description="Her yazı, ilgili servis hizmetiyle eşleştirilmiştir. Yazının sonundan doğrudan o hizmetin detay sayfasına geçebilirsiniz."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((p) => {
              const service = getService(p.serviceSlug);
              return (
                <article
                  key={p.slug}
                  className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-ember-200 hover:shadow-lift"
                >
                  <div className="flex flex-wrap items-center gap-2 text-[12px]">
                    <span className="rounded-full bg-ink-50 px-2.5 py-1 font-semibold text-ink-500">
                      {p.category}
                    </span>
                    <span className="text-ink-400">
                      {p.readingMinutes} dk okuma
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-[17.5px] font-bold leading-snug text-ink-900 transition-colors group-hover:text-ember-600">
                    <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                  </h3>

                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-500">
                    {p.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-ink-100 pt-5">
                    <span className="text-[13px] text-ink-400">
                      {formatDate(p.publishedAt)}
                    </span>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="inline-flex items-center gap-2 text-[14px] font-bold text-ember-600"
                    >
                      Oku
                      <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {service && (
                    <Link
                      href={`/hizmetler/${service.slug}`}
                      className="mt-3 text-[13px] text-ink-400 transition-colors hover:text-ember-600"
                    >
                      İlgili hizmet: {service.navName}
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div className="py-16 lg:py-20">
        <CtaBand
          title="Yazıda anlatılan arıza sizde de mi var?"
          text="Belirtiyi telefonda anlatın; ekibimiz ön teşhis yapıp aynı gün yerinde müdahale için yola çıksın."
        />
      </div>
    </>
  );
}
