<template>
    <div id="app">
        <AppSidebar />
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
import AppSidebar from '~/components/AppSidebar.vue'
</script>

<style>
:root {
    --sidebar-width: min(20vw, 200px);
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    min-height: 100vh;
}
</style>