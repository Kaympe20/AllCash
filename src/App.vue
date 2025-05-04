<template>
  <AppSidebar></AppSidebar>
  <AppContent></AppContent>
</template>

<script>
import AppSidebar from './components/AppSidebar.vue'
import AppContent from './components/content/AppContent.vue';

export default {
  name: 'App',
  components: {
    AppSidebar,
    AppContent
  }
}
</script>

<style>
:root {
  --sidebar-width: 300px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
