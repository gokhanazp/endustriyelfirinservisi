import Link from "next/link";
import type { Metadata } from "next";
import {
  anatolianDistricts,
  districts,
  europeanDistricts,
} from "@/lib/districts";
import { services } from "@/lib/services";
import { buildMetadata, breadcrumbSchema, itemListSchema } from "@/lib/seo";
import { CtaBand, JsonLd, PageHero, SectionHead } from "@/components/Ui";
import { IconPin } from "@/components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Servis Bölgeleri | İstanbul'un 39 İlçesinde Fırın Servisi",
  description:
    "İstanbul'un 39 ilçesinde endüstriyel fırın servisi ve tamiri. Avrupa ve Anadolu yakasında bölgesel ekiplerle aynı gün yerinde arıza tespiti ve onarım.",
  path: "/bolgeler",
  keywords: [
    "istanbul endüstriyel fırın servisi",
    "kadıköy endüstriyel fırın servisi",
    "bakırköy endüstriyel fırın servisi",
    "avrupa yakası fırın servisi",
    "anadolu yakası fırın servisi",
  ],
});

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Servis Bölgeleri", path: "/bolgeler" },
];

function DistrictColumn({
  title,
  list,
}: {
  title: string;
  list: typeof districts;
}) {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ember-50 text-ember-600">
          <IconPin className="h-4.5 w-4.5" />
        </span>
        <h2 className="font-display text-[19px] font-bold text-ink-900">
          {title}
          <span className="ml-2 text-[14px] font-medium text-ink-400">
            ({list.length} ilçe)
          </span>
        </h2>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {list.map((x) => (
          <Link
            key={x.key}
            href={`/bolgeler/${x.slug}`}
            className="group rounded-xl border border-ink-100 bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-ember-200 hover:shadow-soft"
            title={`${x.name} Endüstriyel Fırın Servisi`}
          >
            <span className="block font-display text-[15.5px] font-bold text-ink-900 transition-colors group-hover:text-ember-600">
              {x.name}
            </span>
            <span className="mt-0.5 block text-[13px] text-ink-400">
              Endüstriyel Fırın Servisi
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function DistrictsIndex() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          itemListSchema(
            districts.map((x) => ({
              name: `${x.name} Endüstriyel Fırın Servisi`,
              path: `/bolgeler/${x.slug}`,
            })),
            "İstanbul ilçelerinde endüstriyel fırın servisi"
          ),
        ]}
      />

      <PageHero
        eyebrow="Servis bölgeleri"
        title="İstanbul'un 39 İlçesinde Endüstriyel Fırın Servisi ve Tamiri"
        description="Avrupa ve Anadolu yakasında bölgesel ekiplerle çalışıyoruz. İlçenizi seçerek bölgeye özel servis bilgilerini, sık karşılaşılan arızaları ve ortalama varış süresini görebilirsiniz."
        breadcrumbs={crumbs}
      />

      <section className="container-x py-16 lg:py-20">
        <div className="prose-tr max-w-3xl">
          <p>
            İstanbul&apos;da endüstriyel fırın servisi, mesafe kadar zamanlama
            işidir. Bir restoranın öğle servisi, bir pastanenin sabah üretimi ya
            da bir fabrika yemekhanesinin vardiya düzeni, teknisyenin ne zaman
            geleceğini en az arızanın türü kadar belirler. Bu yüzden şehri tek
            merkezden değil, bölgesel ekiplerle yönetiyoruz.
          </p>
          <p>
            Aşağıdaki ilçelerin tamamında yerinde arıza tespiti, onarım,
            periyodik bakım ve yedek parça hizmeti veriyoruz. İlçe sayfalarında
            o bölgedeki işletme profiline, en sık karşılaştığımız arızalara ve
            servis planlamasına dair notlarımızı bulacaksınız.
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-16">
          <DistrictColumn title="Avrupa Yakası" list={europeanDistricts} />
          <DistrictColumn title="Anadolu Yakası" list={anatolianDistricts} />
        </div>
      </section>

      <section className="border-y border-ink-100 bg-ink-50/60 py-16 lg:py-20">
        <div className="container-x">
          <SectionHead
            eyebrow="Tüm bölgelerde"
            title="Her ilçede verdiğimiz hizmetler"
            description="Bölge fark etmeksizin aşağıdaki hizmet başlıklarının tamamı, aynı ekipman ve aynı prosedürle sunulur."
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
