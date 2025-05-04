<template>
  <div class="app-container">
    <AppSidebar></AppSidebar>
    <AppContent></AppContent>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.app-container {
  display: flex;
  min-height: 100vh;
  width: 100%;
}
</style>
