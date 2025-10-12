// https://nuxt.com/docs/api/configuration/nuxt-config
import meta from './app/config/meta'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Ourganize - AI Powered Organize',
      meta: meta,
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    'nuxt-nodemailer',
  ],

  nodemailer: {
    from: process.env.SMTP_USER,
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,   
    },
  ],

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      {code: 'tr', name: 'Türkçe'},
      {code: 'de', name: 'Deutsch'},
      {code: 'en', name: 'English'},
      {code: 'fr', name: 'Français'},
      {code: 'es', name: 'Español'},
    ],
    vueI18n: "~/config/i18n.config",
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    storageKey: 'ourganize-color-mode',
    classSuffix: '',
  },

  typescript: {
    typeCheck: false // Disable type checking during build
  },

  runtimeConfig: {
    public: {
      contactEmail: process.env.SMTP_USER,
    }
  }
})