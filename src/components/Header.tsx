"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { brands } from "@/lib/brands";
import { anatolianDistricts, europeanDistricts } from "@/lib/districts";
import { IconArrow, IconPhone, IconWhatsapp } from "./Icons";

type MenuKey = "hizmetler" | "markalar" | "bolgeler" | null;

const MENUS: { key: Exclude<MenuKey, null>; label: string; href: string }[] = [
  { key: "hizmetler", label: "Hizmetler", href: "/hizmetler" },
  { key: "markalar", label: "Markalar", href: "/markalar" },
  { key: "bolgeler", label: "Servis Bölgeleri", href: "/bolgeler" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* --- Mega menu acma/kapama: gecikmeli kapanis sayesinde fare
         tetikleyiciden panele giderken menu kapanmaz --- */
  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(null), 180);
  }, [cancelClose]);

  const openMenu = useCallback(
    (key: MenuKey) => {
      cancelClose();
      setOpen(key);
    },
    [cancelClose]
  );

  useEffect(() => () => cancelClose(), [cancelClose]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  const navLink =
    "whitespace-nowrap rounded-lg px-3 py-2 text-[14.5px] font-medium text-ink-700 transition-colors hover:bg-ink-50 hover:text-ember-600 2xl:px-3.5 2xl:text-[15px]";

  return (
    <>
      {/* ---------- Ust bilgi seridi ---------- */}
      <div className="hidden bg-ink-950 text-ink-200 lg:block">
        <div className="container-x flex h-10 items-center justify-between gap-6 text-[13px]">
          <p className="flex items-center gap-2 truncate">
            <span className="inline-flex h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-ember-500" />
            <span className="truncate">
              İstanbul&apos;un 39 ilçesinde{" "}
              <strong className="font-semibold text-white">
                aynı gün yerinde servis
              </strong>{" "}
              · {site.hours.emergency}
            </span>
          </p>
          <div className="flex shrink-0 items-center gap-5">
            <span className="hidden text-ink-400 xl:inline">
              Telefon &amp; WhatsApp
            </span>
            <span className="hidden h-3 w-px bg-ink-700 xl:block" />
            <a
              href={site.phone.href}
              className="font-semibold text-white transition-colors hover:text-ember-400"
            >
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Ana header ---------- */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-ink-100 bg-white/90 shadow-soft backdrop-blur-xl"
            : "border-ink-100/60 bg-white"
        }`}
        onMouseLeave={scheduleClose}
      >
        <div className="container-x flex h-16 items-center gap-4 lg:h-[4.5rem] xl:gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5 lg:gap-3"
            aria-label={`${site.name} — ana sayfa`}
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 lg:h-11 lg:w-11">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-ember-500 to-ember-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <svg
                viewBox="0 0 24 24"
                className="relative h-5 w-5 text-ember-400 transition-colors group-hover:text-white lg:h-[1.4rem] lg:w-[1.4rem]"
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
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-extrabold tracking-tight text-ink-900 lg:text-[16.5px]">
                Endüstriyel Fırın Servisi
              </span>
              <span className="block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ember-600 lg:text-[11px]">
                Teknik Servis &amp; Tamir
              </span>
            </span>
          </Link>

          {/* Masaustu menu — xl ve uzeri */}
          <nav
            className="mx-auto hidden items-center gap-0.5 xl:flex"
            aria-label="Ana menü"
          >
            {MENUS.map((m) => (
              <div key={m.key} onMouseEnter={() => openMenu(m.key)}>
                <Link
                  href={m.href}
                  aria-expanded={open === m.key}
                  aria-haspopup="true"
                  onFocus={() => openMenu(m.key)}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-[14.5px] font-medium transition-colors 2xl:px-3.5 2xl:text-[15px] ${
                    open === m.key
                      ? "bg-ember-50 text-ember-600"
                      : "text-ink-700 hover:bg-ink-50 hover:text-ember-600"
                  }`}
                >
                  {m.label}
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-3.5 w-3.5 transition-transform ${
                      open === m.key ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>
              </div>
            ))}

            <span className="mx-1.5 h-5 w-px bg-ink-100" />

            <Link href="/blog" className={navLink} onMouseEnter={scheduleClose}>
              Blog
            </Link>
            <Link href="/hakkimizda" className={navLink} onMouseEnter={scheduleClose}>
              Hakkımızda
            </Link>
            <Link
              href="/sikca-sorulan-sorular"
              className={navLink}
              onMouseEnter={scheduleClose}
            >
              S.S.S.
            </Link>
            <Link href="/iletisim" className={navLink} onMouseEnter={scheduleClose}>
              İletişim
            </Link>
          </nav>

          {/* Sag taraf */}
          <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-0">
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-11 w-11 items-center justify-center rounded-xl border border-ink-100 text-[#25D366] transition-colors hover:border-[#25D366]/40 hover:bg-[#25D366]/5 sm:inline-flex"
              aria-label="WhatsApp ile yazın"
            >
              <IconWhatsapp className="h-5 w-5" />
            </a>
            <a
              href={site.phone.href}
              className="inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-xl bg-ember-500 px-4 text-[14.5px] font-bold text-white shadow-ember transition-all hover:-translate-y-0.5 hover:bg-ember-600 lg:px-5"
            >
              <IconPhone className="h-4 w-4" />
              <span className="hidden sm:inline">{site.phone.display}</span>
              <span className="sm:hidden">Ara</span>
            </a>

            <button
              type="button"
              onClick={() => setMobile((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-100 text-ink-800 transition-colors hover:bg-ink-50 xl:hidden"
              aria-label={mobile ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={mobile}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all ${
                    mobile ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-opacity ${
                    mobile ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all ${
                    mobile ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* ---------- Mega menu panelleri ---------- */}
        {open && (
          <div
            className="absolute inset-x-0 top-full hidden border-t border-ink-100 bg-white shadow-lift xl:block"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="container-x py-8">
              {open === "hizmetler" && (
                <>
                  <div className="grid grid-cols-3 gap-x-8 gap-y-1">
                    {services.map((s) => (
                      <MegaLink
                        key={s.slug}
                        href={`/hizmetler/${s.slug}`}
                        title={s.name}
                        desc={s.excerpt}
                      />
                    ))}
                  </div>
                  <MegaFooter href="/hizmetler" label="Tüm hizmetleri görüntüle" />
                </>
              )}

              {open === "markalar" && (
                <>
                  <div className="grid grid-cols-5 gap-x-4 gap-y-0.5">
                    {brands.map((b) => (
                      <Link
                        key={b.slug}
                        href={`/markalar/${b.slug}`}
                        className="rounded-lg px-3 py-2 text-[14.5px] font-medium text-ink-700 transition-colors hover:bg-ember-50 hover:text-ember-700"
                      >
                        {b.name}
                      </Link>
                    ))}
                  </div>
                  <MegaFooter href="/markalar" label="Tüm markaları görüntüle" />
                </>
              )}

              {open === "bolgeler" && (
                <>
                  <div className="grid grid-cols-2 gap-10">
                    <div>
                      <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-ember-600">
                        Avrupa Yakası
                      </p>
                      <div className="grid grid-cols-3 gap-x-3 gap-y-0.5">
                        {europeanDistricts.map((x) => (
                          <Link
                            key={x.key}
                            href={`/bolgeler/${x.slug}`}
                            className="rounded px-2 py-1.5 text-[14px] text-ink-600 transition-colors hover:bg-ember-50 hover:text-ember-700"
                          >
                            {x.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-ember-600">
                        Anadolu Yakası
                      </p>
                      <div className="grid grid-cols-3 gap-x-3 gap-y-0.5">
                        {anatolianDistricts.map((x) => (
                          <Link
                            key={x.key}
                            href={`/bolgeler/${x.slug}`}
                            className="rounded px-2 py-1.5 text-[14px] text-ink-600 transition-colors hover:bg-ember-50 hover:text-ember-700"
                          >
                            {x.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <MegaFooter href="/bolgeler" label="Tüm servis bölgeleri" />
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* ---------- Mobil menu ---------- */}
      {mobile && (
        <div className="fixed inset-0 top-16 z-40 overflow-y-auto bg-white xl:hidden">
          <div className="container-x space-y-1 py-6 pb-28">
            <MobileLink href="/">Ana Sayfa</MobileLink>
            <MobileGroup title="Hizmetler" seeAll="/hizmetler">
              {services.map((s) => (
                <MobileSub key={s.slug} href={`/hizmetler/${s.slug}`}>
                  {s.name}
                </MobileSub>
              ))}
            </MobileGroup>
            <MobileGroup title="Markalar" seeAll="/markalar">
              {brands.map((b) => (
                <MobileSub key={b.slug} href={`/markalar/${b.slug}`}>
                  {b.name} Fırın Servisi
                </MobileSub>
              ))}
            </MobileGroup>
            <MobileGroup title="Servis Bölgeleri" seeAll="/bolgeler">
              {[...europeanDistricts, ...anatolianDistricts].map((x) => (
                <MobileSub key={x.key} href={`/bolgeler/${x.slug}`}>
                  {x.name}
                </MobileSub>
              ))}
            </MobileGroup>
            <MobileLink href="/blog">Teknik Blog</MobileLink>
            <MobileLink href="/hakkimizda">Hakkımızda</MobileLink>
            <MobileLink href="/sikca-sorulan-sorular">
              Sıkça Sorulan Sorular
            </MobileLink>
            <MobileLink href="/iletisim">İletişim</MobileLink>

            <div className="!mt-6 grid grid-cols-2 gap-3">
              <a
                href={site.phone.href}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-ember-500 text-sm font-bold text-white"
              >
                <IconPhone className="h-4 w-4" /> Hemen Ara
              </a>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-bold text-white"
              >
                <IconWhatsapp className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MegaLink({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl p-3 transition-colors hover:bg-ink-50"
    >
      <span className="block text-[15px] font-semibold text-ink-900 transition-colors group-hover:text-ember-600">
        {title}
      </span>
      <span className="mt-1 block text-[13px] leading-relaxed text-ink-400">
        {desc}
      </span>
    </Link>
  );
}

function MegaFooter({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-5 border-t border-ink-100 pt-5">
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-bold text-ember-600 transition-all hover:gap-3"
      >
        {label} <IconArrow className="h-4 w-4" />
      </Link>
    </div>
  );
}

function MobileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block rounded-xl px-4 py-3.5 text-[16px] font-semibold text-ink-900 hover:bg-ink-50"
    >
      {children}
    </Link>
  );
}

function MobileGroup({
  title,
  seeAll,
  children,
}: {
  title: string;
  seeAll: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-xl">
      <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3.5 text-[16px] font-semibold text-ink-900 hover:bg-ink-50">
        {title}
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-ink-400 transition-transform group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <div className="mb-2 ml-2 space-y-0.5 border-l border-ink-100 pl-3">
        {children}
        <Link
          href={seeAll}
          className="block px-3 py-2 text-[14px] font-bold text-ember-600"
        >
          Tümünü gör →
        </Link>
      </div>
    </details>
  );
}

function MobileSub({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-3 py-2 text-[15px] text-ink-600 hover:bg-ink-50"
    >
      {children}
    </Link>
  );
}
