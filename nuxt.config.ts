export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  
  // Явно включаем SSR (по умолчанию true в Nuxt 3)
  ssr: true,
  
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      title: 'Spades Empire',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Spades Empire Application' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ]
    }
  },
  
  // Настройки для статической генерации
  nitro: {
    preset: 'static', // Статическая генерация
    compressPublicAssets: true,
    prerender: {
      failOnError: false, // Игнорируем ошибки 404 для внешних ссылок
      crawlLinks: true,
    }
  },
  
  // Настройки для статической генерации
  routeRules: {
    '/': { prerender: true }, // Генерируем статические страницы
    '/about-us': { prerender: true },
    '/bonuses': { prerender: true },
    '/casino': { prerender: true },
    '/contact-us': { prerender: true },
    '/responsible-gaming': { prerender: true },
    '/privacy-policy': { prerender: true },
    '/terms-conditions': { prerender: true },
  }
})

