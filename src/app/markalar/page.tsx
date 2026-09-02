import Link from "next/link";
import type { Metadata } from "next";
import { brands } from "@/lib/brands";
import { services } from "@/lib/services";
import { buildMetadata, breadcrumbSchema, itemListSchema } from "@/lib/seo";
import { CtaBand, JsonLd, PageHero, SectionHead } from "@/components/Ui";
import { IconArrow } from "@/components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Servis Verdiğimiz Markalar | Endüstriyel Fırın Servisi ve Tamiri",
  description: `Electrolux, Unox, İnoksan, Öztiryakiler, Pimak, Empero, Üçler, Ayfa, CSA ve daha fazlası — ${brands.length} marka için endüstriyel fırın servisi ve tamiri, orijinal yedek parça ve garantili işçilik.`,
  path: "/markalar",
  keywords: [
    "electrolux fırın servisi",
    "unox fırın servisi",
    "inoksan fırın servisi",
    "öztiryakiler fırın servisi",
    "endüstriyel fırın marka servisi",
  ],
});

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Markalar", path: "/markalar" },
];

export default function BrandsIndex() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          itemListSchema(
            brands.map((b) => ({
              name: `${b.name} Fırın Servisi ve Tamiri`,
              path: `/markalar/${b.slug}`,
            })),
            "Servis verdiğimiz endüstriyel fırın markaları"
          ),
        ]}
      />

      <PageHero
        eyebrow="Marka servisleri"
        title={`${brands.length} Marka İçin Endüstriyel Fırın Servisi ve Tamiri`}
        description="Her markanın kendine özgü arıza profili, elektronik mimarisi ve parça yapısı vardır. Cihazınızın markasını seçerek o markaya özel arıza başlıkları, yedek parça listesi ve servis detaylarına ulaşabilirsiniz."
        breadcrumbs={crumbs}
      />

      <section className="container-x py-16 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <article
              key={b.slug}
              className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-ember-200 hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display text-[19px] font-extrabold leading-tight text-ink-900 transition-colors group-hover:text-ember-600">
                  <Link href={`/markalar/${b.slug}`}>{b.name}</Link>
                </h2>
                <span className="shrink-0 rounded-md bg-ink-50 px-2.5 py-1 text-[11.5px] font-semibold uppercase tracking-wide text-ink-400">
                  {b.origin}
                </span>
              </div>
              <p className="mt-1 text-[13.5px] font-semibold text-ember-600">
                Fırın Servisi / Tamiri
              </p>
              <p className="mt-3.5 flex-1 text-[14.5px] leading-relaxed text-ink-500">
                {b.tagline}
              </p>
              <Link
                href={`/markalar/${b.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold text-ember-600"
              >
                Servis detayları
                <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-ink-100 bg-ink-50/60 py-16 lg:py-20">
        <div className="container-x">
          <SectionHead
            eyebrow="Marka bağımsız hizmetler"
            title="Markası ne olursa olsun servis veriyoruz"
            description="Listede olmayan bir markaya sahip olsanız da cihazınıza müdahale edebiliriz. Fırın tipine göre hazırladığımız hizmet sayfalarını inceleyin."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="rounded-xl border border-ink-200 bg-white px-5 py-4 text-[15px] font-semibold text-ink-800 transition-all hover:-translate-y-0.5 hover:border-ember-300 hover:text-ember-600"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="py-16 lg:py-20">
        <CtaBand />
      </div>
    </>
  );
}
