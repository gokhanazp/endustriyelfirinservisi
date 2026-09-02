import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema, localBusinessSchema } from "@/lib/seo";
import { JsonLd, PageHero } from "@/components/Ui";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import { IconClock, IconPhone, IconPin, IconWhatsapp } from "@/components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "İletişim | Endüstriyel Fırın Servisi — 7/24 Acil Servis Hattı",
  description:
    "Endüstriyel fırın servisi için bize ulaşın. Telefon ve WhatsApp ile 7/24 acil servis talebi oluşturabilirsiniz. İstanbul'un 39 ilçesinde yerinde servis.",
  path: "/iletisim",
  keywords: [
    "endüstriyel fırın servisi iletişim",
    "endüstriyel fırın servisi telefon",
    "acil fırın servisi istanbul",
  ],
});

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "İletişim", path: "/iletisim" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), localBusinessSchema()]} />

      <PageHero
        eyebrow="İletişim"
        title="Servis Talebi ve İletişim"
        description="Arıza bildirimini telefonla veya WhatsApp üzerinden iletebilirsiniz. Cihazın markası, modeli ve arıza belirtisini paylaşmanız ön teşhis için yeterlidir."
        breadcrumbs={crumbs}
      />

      <section className="container-x grid gap-10 py-16 lg:grid-cols-[1fr_22rem] lg:py-20">
        <ContactForm />

        <aside className="space-y-6">
          <div className="rounded-2xl bg-ink-950 p-7 text-white">
            <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-ember-500">
              Doğrudan iletişim
            </p>
            <ul className="mt-5 space-y-4 text-[15px]">
              <li>
                <a
                  href={site.phone.href}
                  className="flex items-start gap-3 transition-colors hover:text-ember-400"
                >
                  <IconPhone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-ember-500" />
                  <span>
                    <span className="block text-[13px] text-ink-400">
                      Servis hattı
                    </span>
                    <span className="font-semibold">{site.phone.display}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-ember-400"
                >
                  <IconWhatsapp className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#25D366]" />
                  <span>
                    <span className="block text-[13px] text-ink-400">
                      WhatsApp
                    </span>
                    <span className="font-semibold">
                      {site.whatsapp.display}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IconPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-ember-500" />
                <span>
                  <span className="block text-[13px] text-ink-400">
                    Hizmet bölgesi
                  </span>
                  <span className="text-ink-200">
                    {site.area.city} — 39 ilçenin tamamında yerinde servis
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <IconClock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-ember-500" />
                <span>
                  <span className="block text-[13px] text-ink-400">
                    Acil servis
                  </span>
                  <span className="text-ink-200">
                    Üretimi durduran arızalarda 7/24 aynı numara
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-ink-100 bg-white p-7">
            <h2 className="font-display text-[16px] font-bold text-ink-900">
              Çalışma saatleri
            </h2>
            <dl className="mt-4 space-y-2.5 text-[14.5px]">
              <div className="flex justify-between gap-3 border-b border-ink-100 pb-2.5">
                <dt className="text-ink-500">Pazartesi - Cuma</dt>
                <dd className="font-semibold text-ink-900">
                  {site.hours.weekday}
                </dd>
              </div>
              <div className="flex justify-between gap-3 border-b border-ink-100 pb-2.5">
                <dt className="text-ink-500">Cumartesi</dt>
                <dd className="font-semibold text-ink-900">
                  {site.hours.saturday}
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-500">Pazar</dt>
                <dd className="font-semibold text-ember-600">
                  {site.hours.sunday}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-ember-200 bg-ember-50/70 p-7">
            <h2 className="font-display text-[16px] font-bold text-ink-900">
              Aramadan önce hazırlayın
            </h2>
            <ul className="mt-4 space-y-2 text-[14.5px] leading-relaxed text-ink-600">
              {[
                "Cihazın markası ve modeli",
                "Etiketteki seri numarası (varsa)",
                "Arıza belirtisi ve ne zaman başladığı",
                "Panelde görünen hata kodu",
                "İşletmenin adresi ve ilçesi",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
