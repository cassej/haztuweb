import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Статический экспорт для Cloudflare Pages
  output: "export",

  // Отключить оптимизацию изображений (не поддерживается в статическом экспорте)
  images: {
    unoptimized: true,
  },

  // Трейлинг слеш для корректной работы на статическом хостинге
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
