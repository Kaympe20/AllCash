<template>
  <NuxtLayout />
</template>

<script lang="ts">
export default {
  name: 'App',
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
          href: 'https://hc-juice.s3.amazonaws.com/omg-moments/1748745715065-homestuckalllcash.png'
        }
      ]
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
