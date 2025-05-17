<template>
  <NuxtLayout />
</template>

<script>
import AppSidebar from './components/AppSidebar.vue'
import AppContent from './components/AppContent.vue'

export default {
  name: 'App',
  components: {
    AppSidebar,
    AppContent
  },
  setup() {
    useSeoMeta({
      title: 'AllCash | FOSS Budgeting',
      description: 'A completely free and open source alternative to EveryDollar, YNAB, or Mint.',
    })
    useHead({
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'https://images.icon-icons.com/3279/PNG/512/money_stack_icon_208061.png'
        }
      ]
    })
  }
  
}
</script>

<style>
:root {
  --sidebar-width: min(20vw, 200px);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
