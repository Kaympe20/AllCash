<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <AppSidebar></AppSidebar>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppSidebar from './components/AppSidebar.vue'

export default {
  name: 'App',
  components: {
    AppSidebar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
