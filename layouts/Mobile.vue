<template>
        <main class="main-content">
            <NuxtPage />
        </main>
    <footer>
        <MoblieAppSidebar/>
    </footer>
</template>

<script setup>
import MoblieAppSidebar from '~/components/MobileAppSidebar.vue'
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
    padding-top: 20px;
    width: 100vh;
    text-align: center;
}
</style>