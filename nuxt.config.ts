export default defineNuxtConfig({
  compatibilityDate: "2025-11-19",
  devtools: { enabled: true },
  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-icons/font/bootstrap-icons.css",
  ],
  plugins: ["~/plugins/bootstrap.client.ts"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "島根大学ものづくり部 Pim",
      htmlAttrs: {
        lang: "ja",
        prefix: "og: http://ogp.me/ns#",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Pimはものづくりに関する知識と技術を共有する、島根大学公認の部活動です。",
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "島根大学ものづくり部 Pim",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:url", property: "og:url", content: "https://www.pim.gr.jp" },
        {
          hid: "og:title",
          property: "og:title",
          content: "島根大学ものづくり部 Pim",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Pimはものづくりに関する知識と技術を共有する、島根大学公認の部活動です。",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://www.pim.gr.jp/logo/og_2by1.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@shimane_u_Pim" },
        { property: "fb:app_id", content: "773020421405406" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=BIZ+UDPGothic&family=Sawarabi+Gothic&family=Noto+Sans+JP:wght@400&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/sitemap",
    "nuxt-gtag",
    "nuxt-microsoft-clarity",
    "@nuxt/eslint",
  ],
  site: {
    url: "https://www.pim.gr.jp",
  },
  gtag: {
    id: "G-TEWYKXV328",
  },
  clarity: {
    id: "i4nzb2fgqy",
  },
  eslint: {
    // Enables ESLint check in dev server.
    checker: true,
  },
});
