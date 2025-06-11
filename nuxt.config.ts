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
    mongodbUri: process.env.MONGODB_URI,
    authSecret: process.env.AUTH_SECRET,
    workFactor: process.env.WORK_FACTOR 
      ? parseInt(process.env.WORK_FACTOR)
      : 10,

    public: {
      build: 
        process.env.NODE_ENV === 'development'
          ? 'Development'
          : process.env.NUXT_ENV_CURRENT_GIT_SHA
            ? process.env.NUXT_ENV_CURRENT_GIT_SHA
            : 'Error: build not available',
      commit: process.env.NUXT_ENV_CURRENT_GIT_SHA !== undefined,
    }
  },

  modules: [
    "@nuxtjs/color-mode",
    "@sidebase/nuxt-auth"
  ],

  auth: {
    provider: {
      type: 'authjs',
      defaultProvider: 'credentials',
    }
  }
})