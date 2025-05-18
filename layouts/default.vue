<template>
    <div id="app">
        <AppSidebar />
        <main class="main-content">
            <NuxtPage />
        </main>
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
    display: flex;
}
.main-content {
    flex: 1;
    padding: 20px;
    width: calc(100% - var(--sidebar-width) - 40px - 30px);
    margin-left: calc(30px + var(--sidebar-width));
    text-align: center;
    box-sizing: border-box;
}
</style>