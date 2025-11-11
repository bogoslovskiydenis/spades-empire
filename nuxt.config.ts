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
        { name: 'google-site-verification', content: 'bne_4L5mTBKNUOYJhWHuq3LFswe1H-pRGUNlnG2Nvpk' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      apiBase: 'https://admin.spinnempire.com/wp-content/themes/api/app/',
      ref: 'https://spinempire.sbs/dboyt377c',
      ref_sign_up: 'https://spinempire.sbs/df2favs0t'
    },
  },

  nitro: {
    preset: 'static',
  },

  ssr: false,
})
