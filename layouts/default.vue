<template>
    <div id="app">
        <div v-if="$device.isDesktop">
            <AppSidebar />
        <main class="main-content">
            <NuxtPage />
        </main>
        </div>
        <div v-else>
            <MobileAppSidebar />
            <main class="mobile-main-content">
            <NuxtPage />
            </main>
        </div>

    </div>
</template>

<script setup lang="ts">
import AppSidebar from '~/components/AppSidebar.vue'
import MobileAppSidebar from '~/components/MobileAppSidebar.vue'
</script>

<style>
:root {
    --sidebar-width: min(20vw, 200px);
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
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
.mobile-main-content {
    flex: 1;
    padding: 20px;
    width: 100vh;
    text-align: center;
    box-sizing: border-box;
}
</style>