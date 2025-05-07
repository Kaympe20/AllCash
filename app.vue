<template>
  <div id="app">
    <AppSidebar></AppSidebar>
    <AppContent></AppContent>
  </div>
</template>

<script>
import AppSidebar from './components/AppSidebar.vue'
import AppContent from './components/AppContent.vue';

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
  --sidebar-width: min(20vw, 200px);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
