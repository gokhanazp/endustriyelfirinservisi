"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { brands } from "@/lib/brands";
import { districts } from "@/lib/districts";
import { IconWhatsapp, IconPhone } from "./Icons";

const field =
  "h-12 w-full rounded-xl border border-ink-200 bg-white px-4 text-[15px] text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-ember-500";
const label = "mb-1.5 block text-[13.5px] font-semibold text-ink-700";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    district: "",
    service: "",
    brand: "",
    model: "",
    message: "",
  });

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildText = () =>
    [
      "Endüstriyel fırın servis talebi",
      "",
      `Ad Soyad / İşletme: ${form.name || "-"}`,
      `Telefon: ${form.phone || "-"}`,
      `İlçe: ${form.district || "-"}`,
      `Hizmet: ${form.service || "-"}`,
      `Marka: ${form.brand || "-"}`,
      `Model: ${form.model || "-"}`,
      "",
      `Arıza açıklaması: ${form.message || "-"}`,
    ].join("\n");

  const waHref = `https://wa.me/${site.whatsapp.raw}?text=${encodeURIComponent(
    buildText()
  )}`;

  return (
    <form
      className="rounded-2xl border border-ink-100 bg-white p-7 sm:p-9"
      onSubmit={(e) => e.preventDefault()}
    >
      <h2 className="font-display text-[19px] font-bold text-ink-900">
        Servis talebi oluşturun
      </h2>
      <p className="mt-2 text-[14.5px] leading-relaxed text-ink-500">
        Formu doldurup WhatsApp ile gönderin; bilgiler hazır bir mesaj hâlinde
        iletilir. Talebiniz ulaştığında en kısa sürede dönüş yapıp randevu
        saatini birlikte belirleyelim.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="cf-name">
            Ad Soyad / İşletme
          </label>
          <input
            id="cf-name"
            className={field}
            value={form.name}
            onChange={set("name")}
            placeholder="Örn. Moda Pizza"
            autoComplete="organization"
          />
        </div>
        <div>
          <label className={label} htmlFor="cf-phone">
            Telefon
          </label>
          <input
            id="cf-phone"
            className={field}
            value={form.phone}
            onChange={set("phone")}
            placeholder="05xx xxx xx xx"
            inputMode="tel"
            autoComplete="tel"
          />
        </div>

        <div>
          <label className={label} htmlFor="cf-district">
            İlçe
          </label>
          <select
            id="cf-district"
            className={field}
            value={form.district}
            onChange={set("district")}
          >
            <option value="">Seçiniz</option>
            {districts.map((x) => (
              <option key={x.key} value={x.name}>
                {x.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="cf-service">
            Hizmet
          </label>
          <select
            id="cf-service"
            className={field}
            value={form.service}
            onChange={set("service")}
          >
            <option value="">Seçiniz</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={label} htmlFor="cf-brand">
            Cihaz markası
          </label>
          <select
            id="cf-brand"
            className={field}
            value={form.brand}
            onChange={set("brand")}
          >
            <option value="">Seçiniz</option>
            {brands.map((b) => (
              <option key={b.slug} value={b.name}>
                {b.name}
              </option>
            ))}
            <option value="Diğer">Diğer / Bilmiyorum</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="cf-model">
            Model (varsa)
          </label>
          <input
            id="cf-model"
            className={field}
            value={form.model}
            onChange={set("model")}
            placeholder="Örn. 10 tepsi konveksiyonel"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={label} htmlFor="cf-message">
            Arıza açıklaması
          </label>
          <textarea
            id="cf-message"
            rows={4}
            className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-[15px] text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-ember-500"
            value={form.message}
            onChange={set("message")}
            placeholder="Örn. Fırın 180 dereceye çıkıyor ama 250'ye ulaşmıyor, panelde E04 hatası var."
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-4 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
        >
          <IconWhatsapp className="h-5 w-5" /> WhatsApp ile gönder
        </a>
        <a
          href={site.phone.href}
          className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-xl border border-ink-200 px-6 py-4 text-[15px] font-bold text-ink-800 transition-colors hover:border-ember-300 hover:text-ember-600"
        >
          <IconPhone className="h-5 w-5" /> {site.phone.display}
        </a>
      </div>

      <p className="mt-4 text-[13px] leading-relaxed text-ink-400">
        Form verileri sunucumuzda saklanmaz; doğrudan WhatsApp üzerinden bize
        iletilir. Acil durumlarda{" "}
        <a
          href={site.phone.href}
          className="font-semibold text-ember-600 hover:underline"
        >
          {site.phone.display}
        </a>{" "}
        numarasını arayabilirsiniz — telefon ve WhatsApp aynı hattır.
      </p>
    </form>
  );
}
