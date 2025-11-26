export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  css: ['~/assets/css/main.css'],


  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Spades Empire',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Spades Empire Application' },
        { name: 'google-site-verification', content: 'bne_4L5mTBKNUOYJhWHuq3LFswe1H-pRGUNlnG2Nvpk' },
        { name: 'trustpilot-one-time-domain-verification-id', content: '106c8e4d-39c3-49cf-81d1-5650dec28bd6' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/mulish-400.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/mulish-700.woff2', crossorigin: 'anonymous' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://spinnempire.com',
      apiBase: 'https://admin.spinnempire.com/wp-content/themes/api/app/',
      ref: 'https://spinempire.sbs/dboyt377c',
      ref_sign_up: 'https://spinempire.sbs/df2favs0t'
    },
  },
  ssr: true,
})
