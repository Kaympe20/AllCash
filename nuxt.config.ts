// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/style.css'],

  nitro: {
    plugins: [
      "~/server/plugins/mongodb.ts",
      "~/server/plugins/seedDatabase.ts"
    ],
  },

  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI
  },

  modules: [
    "@nuxtjs/color-mode",
    "@sidebase/nuxt-auth"
  ]
})