export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'GitHub Search',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Search for awesome repositories on GitHub',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },
  css: [],
  plugins: ['~/plugins/github'],
  components: true,
  buildModules: ['@nuxtjs/dotenv', '@nuxt/typescript-build'],
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {},
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  build: {},
}
