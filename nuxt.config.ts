// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  // Модули
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  
  // SSG конфигурация
  ssr: true,
  
  // Настройка приложения
  app: {
    head: {
      title: 'СочиНяшка — ИИ-бот для создания детских историй в Telegram',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Telegram-бот для детей 8-12 лет. Сочиняйте сказки, приключения и детективы вместе с умным ИИ-помощником. Бесплатно и безопасно.' 
        },
        { 
          name: 'keywords', 
          content: 'детский бот, telegram бот, сочинение историй, детское творчество, ИИ для детей, развитие креативности' 
        },
        // Цвет темы для mobile browsers
        { name: 'theme-color', content: '#6366F1' },
        { name: 'msapplication-TileColor', content: '#6366F1' },
        
        // Open Graph мета-теги
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'СочиНяшка — ИИ-бот для создания детских историй в Telegram' },
        { 
          property: 'og:description', 
          content: 'Telegram-бот для детей 8-12 лет. Сочиняйте сказки, приключения и детективы вместе с умным ИИ-помощником. Бесплатно и безопасно.' 
        },
        { property: 'og:url', content: 'https://socinyashka.ru' },
        { property: 'og:image', content: 'https://socinyashka.ru/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'ru_RU' },
        
        // Twitter Card мета-теги
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'СочиНяшка — ИИ-бот для создания детских историй' },
        { 
          name: 'twitter:description', 
          content: 'Сочиняйте сказки, приключения и детективы вместе с умным ИИ-помощником в Telegram. Для детей 8-12 лет.' 
        },
        { name: 'twitter:image', content: 'https://socinyashka.ru/og-image.png' }
      ],
      link: [
        // Favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        
        // Apple Touch Icon
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        
        // Web App Manifest
        { rel: 'manifest', href: '/site.webmanifest' },
        
        // Подключение Google Fonts
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Inter:wght@400;500;600&display=swap'
        },
        // Preload критических шрифтов
        {
          rel: 'preload',
          href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap',
          as: 'style'
        }
      ]
    }
  },
  
  // Tailwind CSS конфигурация
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts'
  },
  
  // Nuxt Image конфигурация
  image: {
    format: ['webp', 'png', 'jpg'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  }
})
