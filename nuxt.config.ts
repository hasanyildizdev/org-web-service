// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/i18n',
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: [
      {code: 'tr', name: 'Türkçe'},
      {code: 'de', name: 'Deutsch'},
      {code: 'en', name: 'English'},
      {code: 'fr', name: 'Français'},
      {code: 'es', name: 'Español'},
    ],
    vueI18n: "~/config/i18n.config",
  }
})