import Link from "next/link";
import { services } from "@/lib/services";
import { IconArrow, IconPhone } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata = {
  title: "Sayfa Bulunamadı",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="container-x py-24 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-display text-[5rem] font-extrabold leading-none text-ink-100">
          404
        </p>
        <h1 className="mt-2 font-display text-[1.9rem] font-extrabold text-ink-900 sm:text-[2.3rem]">
          Aradığınız sayfayı bulamadık
        </h1>
        <p className="mt-4 text-[16.5px] leading-relaxed text-ink-500">
          Sayfa taşınmış veya adres hatalı yazılmış olabilir. Aşağıdaki
          bağlantılardan devam edebilir ya da doğrudan bizi arayabilirsiniz.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-ink-900 px-6 text-[15px] font-bold text-white transition-colors hover:bg-ink-800"
          >
            Ana sayfaya dön
          </Link>
          <a
            href={site.phone.href}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-ember-500 px-6 text-[15px] font-bold text-white transition-colors hover:bg-ember-600"
          >
            <IconPhone className="h-4 w-4" /> {site.phone.display}
          </a>
        </div>

        <div className="mt-12 grid gap-3 text-left sm:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/hizmetler/${s.slug}`}
              className="group flex items-center justify-between gap-3 rounded-xl border border-ink-100 bg-white px-5 py-4 text-[15px] font-medium text-ink-700 transition-colors hover:border-ember-300 hover:text-ember-600"
            >
              {s.navName}
              <IconArrow className="h-4 w-4 text-ink-300 transition-transform group-hover:translate-x-1 group-hover:text-ember-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
