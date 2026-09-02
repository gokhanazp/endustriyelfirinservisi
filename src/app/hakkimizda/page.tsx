import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { CtaBand, JsonLd, PageHero, SectionHead, CheckList } from "@/components/Ui";
import { experienceYears, site, workflowSteps } from "@/lib/site";
import { brands } from "@/lib/brands";

export const metadata: Metadata = buildMetadata({
  title: "Hakkımızda | Endüstriyel Fırın Servisi",
  description: `${experienceYears} yılı aşkın saha deneyimiyle İstanbul genelinde endüstriyel fırın servisi ve tamiri. Sertifikalı teknik ekip, ölçüme dayalı teşhis ve garantili işçilik.`,
  path: "/hakkimizda",
});

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Hakkımızda", path: "/hakkimizda" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="Hakkımızda"
        title="Endüstriyel mutfakların çalışmaya devam etmesi için buradayız"
        description={`${site.foundingYear} yılından bu yana İstanbul'da endüstriyel fırın servisi ve tamiri yapıyoruz. İşimiz cihazı çalıştırmak değil, arızadan önceki pişirme performansına döndürmek.`}
        breadcrumbs={crumbs}
      />

      <section className="container-x py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div className="prose-tr">
            <p>
              Bu iş, saatle ölçülen bir iştir. Bir restoranın fırını öğle
              servisinden bir saat önce durduğunda kaybedilen yalnızca o günün
              cirosu değil, müşterinin bir sonraki tercihi de olur. Sahada
              geçirdiğimiz {experienceYears} yıl bize şunu öğretti: hızlı gelmek
              tek başına yetmez, doğru parçayla gelmek gerekir.
            </p>
            <p>
              Bu yüzden her arıza kaydında telefonda ön teşhis yaparız. Cihazın
              markası, modeli, arıza belirtisi ve varsa ekrandaki hata kodu
              alınır; teknisyen olası parçaları yanına alarak yola çıkar. Basit
              görünen bu adım, işlerin büyük bölümünün ikinci bir ziyarete gerek
              kalmadan tek seferde kapanmasını sağlar.
            </p>
            <p>
              Teşhisi gözle muayeneye değil ölçüme dayandırırız. Rezistans
              direnci, izolasyon değeri, faz dengesi, prob direnç–sıcaklık
              eğrisi ve gazlı cihazlarda iyonizasyon akımı ölçülür. Onarım
              sonrasında cihaz boş değil tam yükte test edilir; set sıcaklığına
              ulaşma süresi, raflar arası sıcaklık farkı, buhar debisi ve kapı
              sızdırmazlığı kontrol edilerek işletmeye teslim edilir.
            </p>
            <p>
              Fiyat konusunda tek bir kuralımız var: onayınız alınmadan hiçbir
              işlem yapılmaz. Parça ve işçilik bedeli işleme başlanmadan önce
              bildirilir, tüm servisler faturalandırılır ve sökülen parçalar
              talep edilmesi hâlinde işletmeye teslim edilir. Onarımın ekonomik
              olmadığı durumlarda bunu açıkça söyler, cihaz yenileme
              alternatiflerini maliyet karşılaştırmasıyla sunarız.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-7">
              <h2 className="font-display text-[17px] font-bold text-ink-900">
                Rakamlarla
              </h2>
              <dl className="mt-5 space-y-4">
                {[
                  { t: "Saha deneyimi", v: `${experienceYears}+ yıl` },
                  { t: "Servis bölgesi", v: "İstanbul · 39 ilçe" },
                  { t: "Marka kapsamı", v: `${brands.length} marka` },
                  { t: "Ortalama varış", v: "2-4 saat" },
                  { t: "İşçilik garantisi", v: "24 aya kadar" },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="flex items-baseline justify-between gap-4 border-b border-ink-200/60 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="text-[14.5px] text-ink-500">{x.t}</dt>
                    <dd className="font-display text-[16px] font-bold text-ink-900">
                      {x.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-white p-7">
              <h2 className="font-display text-[17px] font-bold text-ink-900">
                Belge ve yetkinlikler
              </h2>
              <div className="mt-5">
                <CheckList
                  columns={1}
                  items={[
                    "Gaz yakıcı cihaz servis yetki belgesi",
                    "Elektrik iç tesisat yetkinliği",
                    "İş sağlığı ve güvenliği eğitimli saha ekibi",
                    "Üretici servis prosedürlerine uygun müdahale",
                    "Kalibre ölçüm cihazları ile test",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-100 bg-ink-50/60 py-16 lg:py-20">
        <div className="container-x">
          <SectionHead
            eyebrow="Çalışma prensibimiz"
            title="Her serviste uyguladığımız 6 adım"
            align="center"
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((s) => (
              <li
                key={s.step}
                className="rounded-2xl border border-ink-100 bg-white p-7"
              >
                <span className="font-display text-[2.2rem] font-extrabold leading-none text-ink-100">
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
        </div>
      </section>

      <div className="py-16 lg:py-20">
        <CtaBand />
      </div>
    </>
  );
}
