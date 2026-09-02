/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Cloudflare Pages icin tam statik cikti.
   * Sitede API route, server action, ISR ve next/image kullanimi yok;
   * 77 sayfanin tamami build sirasinda HTML olarak uretiliyor.
   * `npm run build` -> `out/` klasoru.
   */
  output: "export",

  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,

  images: {
    /** Statik export'ta Next'in goruntu optimizasyon sunucusu calismaz. */
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },

  /**
   * NOT: next.config icindeki `headers()` statik export'ta calismaz —
   * guvenlik ve cache basliklari `public/_headers` dosyasindan
   * Cloudflare Pages tarafindan uygulaniyor. Basligi degistirmeniz
   * gerekirse o dosyayi duzenleyin.
   */
};

export default nextConfig;
