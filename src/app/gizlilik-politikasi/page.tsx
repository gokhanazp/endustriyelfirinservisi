import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd, PageHero } from "@/components/Ui";
import { site, currentYear } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Gizlilik Politikası ve KVKK Metni | Endüstriyel Fırın Servisi",
  description:
    "Endüstriyel Fırın Servisi olarak kişisel verilerin işlenmesi, çerez kullanımı, saklama süreleri ve KVKK kapsamındaki haklarınıza dair aydınlatma metni.",
  path: "/gizlilik-politikasi",
});

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Gizlilik Politikası", path: "/gizlilik-politikasi" },
];

const sections = [
  {
    h: "1. Veri Sorumlusu",
    p: [
      `Bu internet sitesi ${site.legalName} tarafından işletilmektedir. 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla hareket edilmektedir. İletişim: ${site.phone.display} (telefon ve WhatsApp).`,
    ],
  },
  {
    h: "2. İşlenen Kişisel Veriler",
    p: [
      "Sitemiz üzerinden bizimle iletişime geçtiğinizde ad-soyad, işletme adı, telefon numarası, ilçe bilgisi ve servis talebinize ilişkin cihaz bilgileri gibi veriler işlenebilir.",
      "İletişim formu verilerinizi sunucumuzda saklamaz; talebiniz WhatsApp üzerinden doğrudan tarafımıza iletilir. Bu kanalın kendi gizlilik politikası WhatsApp tarafından belirlenir.",
    ],
  },
  {
    h: "3. İşleme Amaçları",
    p: [
      "Kişisel verileriniz; servis talebinizin karşılanması, randevu planlaması, teknik servis kaydının oluşturulması, fatura ve servis formu düzenlenmesi, garanti süreçlerinin yürütülmesi ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenir.",
    ],
  },
  {
    h: "4. Hukuki Sebep",
    p: [
      "Veriler; KVKK m.5/2 kapsamında sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, hukuki yükümlülüğün yerine getirilmesi ve meşru menfaat hukuki sebeplerine dayanılarak işlenir. Bu kapsam dışındaki hâllerde açık rızanız alınır.",
    ],
  },
  {
    h: "5. Aktarım",
    p: [
      "Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz. Servis sürecinin yürütülmesi için gerekli olduğu ölçüde saha ekibi ve yedek parça tedarikçileriyle sınırlı paylaşım yapılabilir.",
    ],
  },
  {
    h: "6. Saklama Süresi",
    p: [
      "Servis kayıtları, garanti süresi ve ilgili mevzuatta öngörülen zorunlu saklama süreleri boyunca muhafaza edilir; sürenin dolmasının ardından silinir, yok edilir veya anonim hâle getirilir.",
    ],
  },
  {
    h: "7. Çerezler",
    p: [
      "Sitemiz, temel işlevselliği sağlamak için gerekli çerezleri kullanır. Analitik veya reklam amaçlı çerezler eklenmesi hâlinde bu metin güncellenir ve ziyaretçilere bilgilendirme yapılır. Tarayıcı ayarlarınızdan çerezleri her zaman yönetebilirsiniz.",
    ],
  },
  {
    h: "8. Haklarınız",
    p: [
      "KVKK m.11 uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, işlenme amacını öğrenme, düzeltilmesini veya silinmesini isteme, işlemenin sınırlandırılmasını talep etme ve zararın giderilmesini isteme haklarına sahipsiniz.",
      `Taleplerinizi ${site.phone.display} numaralı telefon veya WhatsApp hattımız üzerinden iletebilirsiniz. Başvurularınız en geç 30 gün içinde sonuçlandırılır.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        eyebrow="Yasal"
        title="Gizlilik Politikası ve KVKK Aydınlatma Metni"
        description="Kişisel verilerinizin nasıl işlendiğine ve haklarınıza dair bilgilendirme."
        breadcrumbs={crumbs}
      />

      <section className="container-x py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-[14px] text-ink-400">
            Son güncelleme: Ocak {currentYear}
          </p>
          <div className="mt-8 space-y-10">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="font-display text-[19px] font-bold text-ink-900">
                  {s.h}
                </h2>
                <div className="prose-tr mt-3">
                  {s.p.map((t, i) => (
                    <p key={i}>{t}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-ink-100 bg-ink-50/60 p-7 text-[14.5px] leading-relaxed text-ink-500">
            Bu metin genel bilgilendirme amaçlıdır ve hukuki danışmanlık yerine
            geçmez. Yayına almadan önce faaliyet alanınıza ve veri işleme
            süreçlerinize göre bir hukuk danışmanı tarafından gözden
            geçirilmesini öneririz.
          </div>
        </div>
      </section>
    </>
  );
}
