import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  formatDate,
  getPost,
  getRelatedPosts,
  posts,
  tableOfContents,
} from "@/lib/blog";
import { getService } from "@/lib/services";
import { districts } from "@/lib/districts";
import { absoluteUrl, site } from "@/lib/site";
import {
  articleSchema,
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
} from "@/lib/seo";
import {
  CtaBand,
  FaqAccordion,
  JsonLd,
  PageHero,
  SectionHead,
} from "@/components/Ui";
import PostBody from "@/components/PostBody";
import { IconArrow, IconPhone, IconWhatsapp } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    ...buildMetadata({
      title: post.metaTitle,
      description: post.metaDescription,
      path: `/blog/${post.slug}`,
      keywords: post.keywords,
      type: "article",
    }),
    openGraph: {
      type: "article",
      url: absoluteUrl(`/blog/${post.slug}`),
      title: post.metaTitle,
      description: post.metaDescription,
      siteName: site.name,
      locale: "tr_TR",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [site.legalName],
      section: post.category,
      tags: post.keywords,
      images: [{ url: absoluteUrl("/og.png"), width: 1200, height: 630 }],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}`);
  const service = getService(post.serviceSlug);
  const toc = tableOfContents(post.body);
  const related = getRelatedPosts(post, 3);

  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Teknik Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          articleSchema({
            headline: post.title,
            description: post.metaDescription,
            url,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            section: post.category,
            keywords: post.keywords,
          }),
          faqSchema(post.faq),
        ]}
      />

      <PageHero
        eyebrow={post.category}
        title={post.h1}
        description={post.excerpt}
        breadcrumbs={crumbs}
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-ink-400">
          <span>Yayın: {formatDate(post.publishedAt)}</span>
          <span className="hidden h-1 w-1 rounded-full bg-ink-600 sm:block" />
          <span>Güncelleme: {formatDate(post.updatedAt)}</span>
          <span className="hidden h-1 w-1 rounded-full bg-ink-600 sm:block" />
          <span>{post.readingMinutes} dakika okuma</span>
        </div>
      </PageHero>

      <div className="container-x grid gap-14 py-16 lg:grid-cols-[1fr_18rem] lg:gap-16 lg:py-20">
        <article className="min-w-0">
          {/* Özet kutusu */}
          <div className="rounded-2xl border border-ember-200 bg-ember-50/60 p-6 sm:p-8">
            <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-ember-700">
              Özet
            </p>
            <ul className="mt-4 space-y-3">
              {post.takeaways.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                  <span className="text-[15.5px] leading-relaxed text-ink-700">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobil içindekiler */}
          {toc.length > 2 && (
            <details className="group mt-8 rounded-2xl border border-ink-100 bg-white p-5 lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-[15px] font-bold text-ink-900">
                İçindekiler
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
              <ol className="mt-4 space-y-2 border-t border-ink-100 pt-4">
                {toc.map((h, i) => (
                  <li key={h.id} className="flex gap-2.5">
                    <span className="text-[13px] font-bold text-ember-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={`#${h.id}`}
                      className="text-[14.5px] leading-snug text-ink-600 hover:text-ember-600"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </details>
          )}

          <div className="mt-12">
            <PostBody body={post.body} />
          </div>

          {/* SSS */}
          {post.faq.length > 0 && (
            <section className="mt-16">
              <SectionHead eyebrow="Sıkça sorulan sorular" title="Bu konuda sık sorulanlar" />
              <div className="mt-7">
                <FaqAccordion items={post.faq} />
              </div>
            </section>
          )}

          {/* İlgili hizmet */}
          {service && (
            <section className="mt-16 overflow-hidden rounded-3xl bg-ink-950 p-7 text-white sm:p-10">
              <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-ember-500">
                İlgili hizmetimiz
              </p>
              <h2 className="mt-3 font-display text-[1.5rem] font-extrabold leading-tight sm:text-[1.8rem]">
                {service.name}
              </h2>
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-300">
                {service.excerpt}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-[15px] font-bold text-ink-900 transition-colors hover:bg-ink-100"
                >
                  Hizmet detayları <IconArrow className="h-4 w-4" />
                </Link>
                <a
                  href={site.phone.href}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-ember-500 px-6 text-[15px] font-bold text-white transition-colors hover:bg-ember-600"
                >
                  <IconPhone className="h-4 w-4" /> {site.phone.display}
                </a>
              </div>
            </section>
          )}

          {/* İlgili yazılar */}
          {related.length > 0 && (
            <section className="mt-16">
              <SectionHead eyebrow="Devamı" title="İlgili teknik rehberler" />
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-ember-200 hover:shadow-soft"
                  >
                    <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-ember-600">
                      {r.category}
                    </span>
                    <span className="mt-2.5 block flex-1 font-display text-[15.5px] font-bold leading-snug text-ink-900 transition-colors group-hover:text-ember-600">
                      {r.title}
                    </span>
                    <span className="mt-4 text-[13px] text-ink-400">
                      {r.readingMinutes} dk okuma
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Kenar çubuğu */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          {toc.length > 2 && (
            <nav
              className="hidden rounded-2xl border border-ink-100 bg-white p-6 lg:block"
              aria-label="İçindekiler"
            >
              <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-ember-600">
                İçindekiler
              </p>
              <ol className="mt-4 space-y-2.5">
                {toc.map((h, i) => (
                  <li key={h.id} className="flex gap-2.5">
                    <span className="text-[12.5px] font-bold text-ink-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={`#${h.id}`}
                      className="text-[14px] leading-snug text-ink-600 transition-colors hover:text-ember-600"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="mt-6 rounded-2xl bg-ink-950 p-6 text-white">
            <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-ember-500">
              Yerinde servis
            </p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-300">
              Arıza belirtisini iletin; İstanbul&apos;un 39 ilçesinde aynı gün
              yerinde müdahale.
            </p>
            <a
              href={site.phone.href}
              className="mt-5 flex h-11 items-center justify-center gap-2 rounded-xl bg-ember-500 text-[14.5px] font-bold text-white transition-colors hover:bg-ember-600"
            >
              <IconPhone className="h-4 w-4" /> {site.phone.display}
            </a>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 text-[14.5px] font-bold text-white transition-colors hover:bg-white/10"
            >
              <IconWhatsapp className="h-4 w-4 text-[#25D366]" /> WhatsApp
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-6">
            <p className="font-display text-[15px] font-bold text-ink-900">
              Popüler servis bölgeleri
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {districts.slice(0, 8).map((x) => (
                <Link
                  key={x.key}
                  href={`/bolgeler/${x.slug}`}
                  className="rounded-lg border border-ink-100 px-2.5 py-1.5 text-[13px] text-ink-600 transition-colors hover:border-ember-300 hover:text-ember-600"
                >
                  {x.name}
                </Link>
              ))}
              <Link
                href="/bolgeler"
                className="rounded-lg bg-ink-100 px-2.5 py-1.5 text-[13px] font-semibold text-ink-700"
              >
                Tümü →
              </Link>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-6">
            <p className="font-display text-[15px] font-bold text-ink-900">
              Tüm yazılar
            </p>
            <ul className="mt-4 space-y-2.5">
              {posts
                .filter((p) => p.slug !== post.slug)
                .map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="block text-[14px] leading-snug text-ink-600 transition-colors hover:text-ember-600"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </div>

      <CtaBand />
      <div className="h-20" />
    </>
  );
}
