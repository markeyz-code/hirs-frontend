export default {
  ssr: false,
  target: "static",
  app: {
    head: {
      title: "Hayyiz HRIS | Enterprise Human Resources Management",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        { name: "description", content: "The complete HRIS platform designed for modern enterprises. Track promotions, administer benefits, and manage stock options efficiently and professionally." },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Hayyiz HRIS | Enterprise Human Resources Management" },
        { property: "og:description", content: "The complete HRIS platform designed for modern enterprises. Track promotions, administer benefits, and manage stock options efficiently and professionally." },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:title", content: "Hayyiz HRIS | Enterprise Human Resources Management" },
        { property: "twitter:description", content: "The complete HRIS platform designed for modern enterprises. Track promotions, administer benefits, and manage stock options efficiently and professionally." }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" }
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  plugins: ["~/plugins/aos.client.ts"],
  css: ["/assets/css/main.css", 'leaflet/dist/leaflet.css'],
  tailwindcss: {
    cssPath: "@/assets/css/main.css",
  },
  axios: {
    // Axios options here
    timeout: 10000, // Example: set timeout to 10 seconds
  },
  // buildModules: [
  //   '@nuxtjs/moment'
  // ]
  // alias: {
  // 	'@': '/'
  // },
};
