export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Spades Empire',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Spades Empire Application' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      apiBase: 'https://admin.spinnempire.com/wp-content/themes/api/app/',
    },
  },

  nitro: {
    preset: 'static',
  },

  ssr: false,
})