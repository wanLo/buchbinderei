export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'de',
    },
    title: 'Buchbinderei Meyer Oberlichtenau',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: `og:image`, name: 'og:image', content: 'logo.jpg' },
      { hid: `twitter:image`, name: 'twitter:image', content: 'logo.jpg' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon_16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon_32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '64x64',
        href: '/favicon_64.png',
      },
    ],
  },
  /* Loading bar */
  loading: {
    color: '#616161',
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/juliomrqz/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
  ],
  optimizedImages: {
    optimizeImages: true,
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', '@nuxtjs/sitemap'],
  sitemap: {
    hostname: process.env.BASE_URL || 'https://buchbinderei-meyer.de',
    routes: async () => {
      const { $content } = require('@nuxt/content')

      const mainMenuPages = await $content('')
        .where({ menu: 'main' })
        .sortBy('order', 'asc')
        .skip(1) // skip index and add / below
        .fetch()
      const footerPages = await $content('')
        .where({ menu: 'footer' })
        .sortBy('order', 'asc')
        .fetch()

      return ['/']
        .concat(...mainMenuPages.map((m) => m.path))
        .concat(...footerPages.map((f) => f.path))
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
