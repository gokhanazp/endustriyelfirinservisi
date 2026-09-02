import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import type { FaqItem } from "@/lib/services";
import { IconArrow, IconCheck, IconPhone, IconWhatsapp } from "./Icons";

/* ---------------------------------------------------------------- */
/*  JSON-LD                                                          */
/* ---------------------------------------------------------------- */

export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

/* ---------------------------------------------------------------- */
/*  Breadcrumbs                                                      */
/* ---------------------------------------------------------------- */

export function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Site haritası" className="text-[13px]">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-ink-400">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span className="font-medium text-ink-600" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path}
                    className="transition-colors hover:text-ember-600"
                  >
                    {item.name}
                  </Link>
                  <span aria-hidden className="text-ink-300">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/* ---------------------------------------------------------------- */
/*  Sayfa basligi (alt sayfalar)                                     */
/* ---------------------------------------------------------------- */

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: { name: string; path: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-ink-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grain opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-ember-600/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 left-1/4 h-[26rem] w-[26rem] rounded-full bg-ember-500/10 blur-3xl"
      />
      <div className="container-x relative py-12 lg:py-16">
        <div className="[&_a]:text-ink-400 [&_a:hover]:text-ember-400 [&_li>span]:text-ink-200 [&_span]:text-ink-500">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {eyebrow && (
          <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-ember-500/30 bg-ember-500/10 px-3.5 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-ember-400">
            {eyebrow}
          </p>
        )}

        <h1 className="mt-4 max-w-4xl font-display text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-[2.9rem]">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-300">
            {description}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={site.phone.href}
            className="inline-flex h-12 items-center gap-2.5 rounded-xl bg-ember-500 px-6 text-[15px] font-bold text-white shadow-ember transition-all hover:-translate-y-0.5 hover:bg-ember-600"
          >
            <IconPhone className="h-4 w-4" /> {site.phone.display}
          </a>
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-6 text-[15px] font-bold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            <IconWhatsapp className="h-4 w-4 text-[#25D366]" /> WhatsApp
          </a>
        </div>

        {children}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Bolum basligi                                                    */
/* ---------------------------------------------------------------- */

export function SectionHead({
  eyebrow,
  title,
  description,
  align = "left",
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-3 text-[12.5px] font-bold uppercase tracking-[0.16em] text-ember-600">
          {eyebrow}
        </p>
      )}
      <As className="font-display text-[1.75rem] font-extrabold leading-tight text-ink-900 sm:text-[2.1rem]">
        {title}
      </As>
      {description && (
        <p className="mt-4 text-[16.5px] leading-relaxed text-ink-500">
          {description}
        </p>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Liste (tik isaretli)                                             */
/* ---------------------------------------------------------------- */

export function CheckList({
  items,
  columns = 2,
}: {
  items: readonly string[];
  columns?: 1 | 2 | 3;
}) {
  const cols =
    columns === 1
      ? "sm:grid-cols-1"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2";
  return (
    <ul className={`grid gap-x-8 gap-y-3 ${cols}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ember-100 text-ember-600">
            <IconCheck className="h-3 w-3" strokeWidth={2.6} />
          </span>
          <span className="text-[15.5px] leading-relaxed text-ink-600">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ---------------------------------------------------------------- */
/*  SSS akordiyon (JS gerektirmez — <details>)                       */
/* ---------------------------------------------------------------- */

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
      {items.map((f, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-5 py-5 sm:px-7">
            <h3 className="font-display text-[16.5px] font-bold leading-snug text-ink-900 transition-colors group-open:text-ember-600">
              {f.q}
            </h3>
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-all group-open:rotate-45 group-open:border-ember-500 group-open:text-ember-600">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <div className="px-5 pb-6 pr-14 text-[15.5px] leading-relaxed text-ink-500 sm:px-7 sm:pr-20">
            {f.a}
          </div>
        </details>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  CTA bandi                                                        */
/* ---------------------------------------------------------------- */

export function CtaBand({
  title = "Fırınınız durduysa vakit kaybetmeyin",
  text = "Arıza belirtisini telefonda anlatın; ekibimiz ön teşhis yapıp size en yakın teknisyeni yönlendirsin. Aynı gün yerinde servis için hemen arayın.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x">
      <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-12 sm:px-12 lg:px-16 lg:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grain opacity-60"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-ember-500/25 blur-3xl"
        />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-extrabold leading-tight text-white sm:text-[2rem]">
              {title}
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-300">
              {text}
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={site.phone.href}
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-xl bg-ember-500 px-7 text-[15px] font-bold text-white shadow-ember transition-all hover:-translate-y-0.5 hover:bg-ember-600"
            >
              <IconPhone className="h-4 w-4" /> {site.phone.display}
            </a>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-7 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              <IconWhatsapp className="h-4 w-4 text-[#25D366]" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Ic baglanti kartlari                                             */
/* ---------------------------------------------------------------- */

export function LinkCard({
  href,
  title,
  text,
  meta,
}: {
  href: string;
  title: string;
  text?: string;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-ember-200 hover:shadow-lift"
    >
      <div>
        {meta && (
          <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.14em] text-ember-600">
            {meta}
          </p>
        )}
        <h3 className="font-display text-[17px] font-bold leading-snug text-ink-900 transition-colors group-hover:text-ember-600">
          {title}
        </h3>
        {text && (
          <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-500">
            {text}
          </p>
        )}
      </div>
      <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold text-ember-600">
        Detaylı bilgi
        <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

/* ---------------------------------------------------------------- */
/*  Mobil sabit arama cubugu                                         */
/* ---------------------------------------------------------------- */

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-100 bg-white/95 p-3 backdrop-blur-lg lg:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={site.phone.href}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-ember-500 text-[15px] font-bold text-white"
        >
          <IconPhone className="h-4 w-4" /> Hemen Ara
        </a>
        <a
          href={site.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-[15px] font-bold text-white"
        >
          <IconWhatsapp className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
