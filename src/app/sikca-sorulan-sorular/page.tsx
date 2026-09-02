import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/services";
import { brands } from "@/lib/brands";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import {
  CtaBand,
  FaqAccordion,
  JsonLd,
  PageHero,
  SectionHead,
} from "@/components/Ui";

export const metadata: Metadata = buildMetadata({
  title: "Sıkça Sorulan Sorular | Endüstriyel Fırın Servisi ve Tamiri",
  description:
    "Endüstriyel fırın servisi ve tamiri hakkında sıkça sorulan sorular: servis süresi, fiyatlandırma, garanti, yedek parça, periyodik bakım ve marka kapsamı.",
  path: "/sikca-sorulan-sorular",
  keywords: [
    "endüstriyel fırın servisi sıkça sorulan sorular",
    "endüstriyel fırın tamiri fiyat",
    "fırın servisi garanti",
  ],
});

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Sıkça Sorulan Sorular", path: "/sikca-sorulan-sorular" },
];

const general = [
  {
    q: "Endüstriyel fırın servisi ne kadar sürede gelir?",
    a: "İstanbul'un 39 ilçesinde bölgesel ekip bulundurduğumuz için ortalama varış süremiz 2-4 saattir. Hafta içi 16:00'a kadar açılan arıza kayıtlarında aynı gün yerinde müdahale hedeflenir; üretimi tamamen durduran arızalarda öncelikli acil kayıt açılır.",
  },
  {
    q: "Servis ücreti nasıl hesaplanıyor?",
    a: "Yerinde arıza tespiti için servis bedeli uygulanır; onarım tarafımızca yapıldığında bu bedel toplam tutardan düşülür. Parça ve işçilik bedeli işleme başlanmadan önce bildirilir, onayınız alınmadan hiçbir işlem yapılmaz. Tüm servisler faturalandırılır.",
  },
  {
    q: "Telefonda fiyat verebiliyor musunuz?",
    a: "Arıza belirtisine göre tahmini bir aralık verebiliyoruz; ancak kesin fiyat yerinde teşhis sonrası netleşir. Örneğin 'ısınmıyor' şikâyeti rezistans kaynaklıysa farklı, kontrol kartı kaynaklıysa farklı bir maliyet çıkar. Bu nedenle ölçüm yapılmadan kesin fiyat vermiyoruz.",
  },
  {
    q: "Yapılan onarım garantili mi?",
    a: "İşçilik 24 aya kadar, değişen parçalar ise üretici garanti süresi boyunca garanti altındadır. Garanti kapsamındaki aynı arıza için servis ve işçilik bedeli alınmaz. Her serviste servis formu ve fatura düzenlenir.",
  },
  {
    q: "Hafta sonu ve mesai dışı servis var mı?",
    a: "Restoran ve otel mutfaklarının çalışma düzeni dikkate alınarak hafta sonu ve mesai dışı randevu verilebilir. Üretimi durduran acil arızalar için 7/24 acil hattımız açıktır.",
  },
  {
    q: "Cihazımı servise götürmem gerekir mi?",
    a: "Hayır. Endüstriyel fırınlarda müdahale kural olarak yerinde yapılır. Yalnızca elektronik kart onarımı gibi atölye gerektiren işlemlerde kart sökülüp götürülür, onarım sonrası aynı ekip tarafından yerine takılır.",
  },
];

const technical = [
  {
    q: "Fırınım ısınmıyor, sorun ne olabilir?",
    a: "En sık nedenler; yanmış rezistans, arızalı güç kontaktörü, kopmuş bir faz, bozulmuş sıcaklık probu veya devreye girmiş emniyet termostatıdır. Bu kalemler yerinde elektriksel ölçümle ayırt edilir. Cihazı defalarca açıp kapatarak zorlamak, sorunu büyütebilir.",
  },
  {
    q: "Ekrandaki sıcaklık ile gerçek sıcaklık neden farklı?",
    a: "Genellikle sıcaklık probunun (NTC/PT100) kalibrasyonu kaymıştır ya da prob konumu hatalıdır. Kalibre referans termometreyle ölçüm alınıp kontrol kartındaki offset parametresi düzeltilerek sorun giderilir.",
  },
  {
    q: "Kombi fırında buhar gelmiyor, ne yapmalıyım?",
    a: "Neredeyse tüm vakalarda sebep kireçtir: kireçlenmiş boyler, tıkalı püskürtme nozulu veya arızalı su pompası/solenoid valf. Kireç çözme tek başına geçici çözümdür; kalıcı sonuç için cihaz girişine su yumuşatma sistemi kurulmalı ve reçine periyodik yenilenmelidir.",
  },
  {
    q: "Tepsiler arasında pişme farkı oluyor, neden?",
    a: "Konveksiyonel fırınlarda homojenliği hava akışı belirler. Fan devrinin düşmesi, fan kanadının deforme olması, hava yönlendirme sacının eğrilmesi veya kapı contasının sızdırması tepsiler arasında fark yaratır. Servis sonrası raf bazlı sıcaklık ölçümüyle sapma 5 °C altına indirilir.",
  },
  {
    q: "Pizza fırınında taban neden çiğ kalıyor?",
    a: "Üç ana sebep vardır: zayıflamış alt rezistans, ısı kapasitesini yitirmiş veya çatlamış pişirme taşı ve alt bölge probunun hatalı okuması. Yoğun serviste kapı sık açıldığı için tabanın toparlanamaması da benzer belirti verir. Üçü birlikte kontrol edilmelidir.",
  },
  {
    q: "Periyodik bakım ne sıklıkta yapılmalı?",
    a: "Günde 8 saatin üzerinde çalışan işletmelerde 3 ayda bir, normal yoğunluktaki mutfaklarda 6 ayda bir bakım önerilir. Bakım; kireç çözme, conta kontrolü, elektriksel bağlantı sıkma, fan temizliği ve sıcaklık kalibrasyonunu kapsar.",
  },
  {
    q: "Fırınım çok eski, yedek parçası bulunur mu?",
    a: "Üretimden kalkmış modellerde parça envanterimiz, muadil tedarikçi ağımız ve gerektiğinde imalat çözümleriyle (özel ölçü rezistans sarımı, kapı contası kesimi, fan kanadı balanslama) çalışırız. Onarımın ekonomik olmadığı durumlarda bunu açıkça belirtiriz.",
  },
  {
    q: "Enerji tüketimimi nasıl düşürebilirim?",
    a: "En hızlı kazanç kapı contası ve menteşe ayarındadır — sızdıran bir kapı tüketimi %20'ye kadar artırır. Ardından izolasyon kontrolü, kireç çözme, brülör yanma ayarı ve doğru ısınma çevrimi programlaması gelir. Ölçüm öncesi ve sonrası değerler raporlanır.",
  },
];

const commercial = [
  {
    q: "Bakım sözleşmesi işletmeye ne kazandırır?",
    a: "Öncelikli servis hakkı, indirimli işçilik ve parça fiyatı, planlı duruş imkânı ve arıza sıklığında belirgin düşüş sağlar. Ayrıca bakımlı bir cihaz aynı işi daha az enerjiyle yapar; sözleşme bedelinin önemli bölümü enerji tasarrufuyla geri döner.",
  },
  {
    q: "Tüm mutfak ekipmanlarım için tek anlaşma yapabilir miyim?",
    a: "Evet. Fırın, ocak, fritöz, bulaşık makinesi, soğutucu ve davlumbazı kapsayan tek bir periyodik bakım sözleşmesi düzenliyoruz. Her ekipman marka-model-seri numarasıyla envantere alınır, bakım geçmişi tek dosyada tutulur.",
  },
  {
    q: "Yeni açılacak mutfağın kurulumunu yapıyor musunuz?",
    a: "Ekipman yerleşimi, elektrik-gaz-su altyapısının kontrolü, cihaz montajı, devreye alma ve personel eğitimi hizmetlerimiz kapsamındadır. Kurulum sonrası ilk 3 ay içindeki ayar taleplerini ücretsiz karşılıyoruz.",
  },
  {
    q: "Fırınımı başka bir adrese taşıyabilir misiniz?",
    a: "Katlı ve döner fırınların sökümü, taşınması, yeni adreste montajı, elektrik-gaz bağlantısı ve devreye alınması hizmet kapsamımızdadır. Taşıma öncesi ölçü ve altyapı kontrolü için keşif yapılır.",
  },
  {
    q: "Hangi markalara servis veriyorsunuz?",
    a: `Electrolux, Unox, İnoksan, Öztiryakiler, Pimak, Empero, Üçler, Ayfa, CSA, Kayalar, Maksan, Venarro, Greenoks, Alveo, İnoxclass, Vital ve Ndustrio dâhil ${brands.length} marka için yetkin teknik servis veriyoruz. Listede olmayan markalarda da cihaz tipine göre müdahale edebiliyoruz.`,
  },
  {
    q: "Fatura ve belge düzenliyor musunuz?",
    a: "Her serviste servis formu ve fatura düzenlenir. Servis formunda yapılan işlemler, değişen parçalar, ölçüm değerleri ve garanti süresi yer alır. Kurumsal işletmelerin muhasebe ve kalite süreçlerine uygun belgelendirme sağlanır.",
  },
];

export default function FaqPage() {
  const all = [...general, ...technical, ...commercial];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(all)]} />

      <PageHero
        eyebrow="Sıkça sorulan sorular"
        title="Endüstriyel Fırın Servisi Hakkında Merak Edilenler"
        description="Servis süreci, fiyatlandırma, garanti ve teknik konularda en sık aldığımız soruları ve cevaplarını bir araya getirdik."
        breadcrumbs={crumbs}
      />

      <section className="container-x py-16 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-14">
          <div>
            <SectionHead eyebrow="Genel" title="Servis süreci ve çalışma şeklimiz" />
            <div className="mt-7">
              <FaqAccordion items={general} />
            </div>
          </div>

          <div>
            <SectionHead eyebrow="Teknik" title="Arıza ve bakım soruları" />
            <div className="mt-7">
              <FaqAccordion items={technical} />
            </div>
          </div>

          <div>
            <SectionHead eyebrow="Ticari" title="Sözleşme, kurulum ve belgelendirme" />
            <div className="mt-7">
              <FaqAccordion items={commercial} />
            </div>
          </div>

          <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-7">
            <h2 className="font-display text-[17px] font-bold text-ink-900">
              Hizmete özel sorular
            </h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-500">
              Her hizmet sayfasında o başlığa özel sorular ve cevapları yer alır.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/hizmetler/${s.slug}`}
                  className="rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-[14.5px] font-medium text-ink-700 transition-colors hover:border-ember-300 hover:text-ember-600"
                >
                  {s.navName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="pb-16 lg:pb-20">
        <CtaBand />
      </div>
    </>
  );
}
