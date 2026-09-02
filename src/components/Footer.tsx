import Link from "next/link";
import { site, currentYear } from "@/lib/site";
import { services } from "@/lib/services";
import { brands } from "@/lib/brands";
import { districts, featuredDistricts } from "@/lib/districts";
import { IconPhone, IconPin, IconWhatsapp } from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink-950 text-ink-300">
      {/* Bolge linkleri — one cikan ilceler; tam liste /bolgeler sayfasinda */}
      <div className="border-b border-white/5">
        <div className="container-x py-14">
          <h2 className="font-display text-lg font-bold text-white">
            İstanbul&apos;un Tüm İlçelerinde Endüstriyel Fırın Servisi
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-400">
            {districts.length} ilçenin tamamında yerinde arıza tespiti, onarım ve
            periyodik bakım hizmeti veriyoruz. Aşağıda en yoğun çalıştığımız
            bölgeler yer alıyor; ilçenizi listede göremiyorsanız tüm servis
            bölgelerine göz atabilirsiniz.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {featuredDistricts.map((x) => (
              <li key={x.key}>
                <Link
                  href={`/bolgeler/${x.slug}`}
                  className="block rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-[13.5px] text-ink-300 transition-colors hover:border-ember-500/40 hover:text-white"
                  title={`${x.name} Endüstriyel Fırın Servisi`}
                >
                  {x.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/bolgeler"
                className="block rounded-lg bg-ember-500 px-4 py-2 text-[13.5px] font-semibold text-white transition-colors hover:bg-ember-600"
              >
                Tüm servis bölgeleri ({districts.length} ilçe) →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-ember-700">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="3" y="2.5" width="18" height="19" rx="2.5" />
                <path d="M3 8.5h18" />
                <rect x="6" y="11.5" width="12" height="7" rx="1.2" />
                <path d="M6.5 5.5h4" />
              </svg>
            </span>
            <span className="font-display text-[17px] font-extrabold tracking-tight text-white">
              Endüstriyel Fırın Servisi
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
            İstanbul genelinde endüstriyel fırın servisi ve tamiri, endüstriyel
            mutfak bakımı ve yedek parça hizmeti. Sertifikalı teknik ekip,
            garantili işçilik ve aynı gün yerinde müdahale.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <a
              href={site.phone.href}
              className="flex items-center gap-3 text-white transition-colors hover:text-ember-400"
            >
              <IconPhone className="h-4 w-4 text-ember-500" />
              <span className="font-semibold">{site.phone.display}</span>
            </a>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <IconWhatsapp className="h-4 w-4 text-[#25D366]" />
              WhatsApp Destek Hattı
            </a>
            <p className="flex items-start gap-3">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-ember-500" />
              <span>
                Hizmet bölgesi: {site.area.city}
                <br />
                39 ilçede yerinde servis
              </span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-white">
            Hizmetlerimiz
          </h3>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/hizmetler/${s.slug}`}
                  className="text-ink-400 transition-colors hover:text-ember-400"
                >
                  {s.navName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-white">
            Marka Servisleri
          </h3>
          <ul className="space-y-2.5 text-sm">
            {brands.slice(0, 8).map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/markalar/${b.slug}`}
                  className="text-ink-400 transition-colors hover:text-ember-400"
                >
                  {b.name} Fırın Servisi
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/markalar"
                className="font-semibold text-ink-300 transition-colors hover:text-ember-400"
              >
                Tüm markalar ({brands.length}) →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-white">
            Kurumsal
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/hakkimizda" className="text-ink-400 hover:text-ember-400">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/hizmetler" className="text-ink-400 hover:text-ember-400">
                Tüm Hizmetler
              </Link>
            </li>
            <li>
              <Link href="/markalar" className="text-ink-400 hover:text-ember-400">
                Servis Verdiğimiz Markalar
              </Link>
            </li>
            <li>
              <Link href="/bolgeler" className="text-ink-400 hover:text-ember-400">
                Servis Bölgeleri
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-ink-400 hover:text-ember-400">
                Teknik Blog
              </Link>
            </li>
            <li>
              <Link
                href="/sikca-sorulan-sorular"
                className="text-ink-400 hover:text-ember-400"
              >
                Sıkça Sorulan Sorular
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="text-ink-400 hover:text-ember-400">
                İletişim
              </Link>
            </li>
            <li>
              <Link
                href="/gizlilik-politikasi"
                className="text-ink-400 hover:text-ember-400"
              >
                Gizlilik Politikası
              </Link>
            </li>
          </ul>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-ember-500">
              Çalışma Saatleri
            </p>
            <dl className="mt-3 space-y-1.5 text-[13px]">
              <div className="flex justify-between gap-3">
                <dt className="text-ink-400">Pazartesi - Cuma</dt>
                <dd className="text-white">{site.hours.weekday}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-400">Cumartesi</dt>
                <dd className="text-white">{site.hours.saturday}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-400">Pazar</dt>
                <dd className="text-white">{site.hours.sunday}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center text-[13px] text-ink-500 sm:flex-row sm:text-left">
          <p>
            © {currentYear} {site.legalName}. Tüm hakları saklıdır.
          </p>

          <p className="order-3 sm:order-2">
            Endüstriyel fırın servisi · Endüstriyel fırın tamiri · İstanbul
          </p>

          <p className="order-2 sm:order-3">
            <a
              href={site.credit.url}
              target="_blank"
              rel="noopener"
              title={site.credit.label}
              className="font-semibold text-ink-300 underline decoration-ink-700 underline-offset-4 transition-colors hover:text-ember-400 hover:decoration-ember-500"
            >
              {site.credit.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
