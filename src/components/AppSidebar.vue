<template>
    <div class="sidebar">
        <div class="sidebar-header">
        <h1>My Sidebar</h1>
        </div>
        <ul class="sidebar-menu">
        <li v-for="item in menuItems" :key="item.id" class="sidebar-item">
            <a :href="item.link">{{ item.name }}</a>
        </li>
        </ul>
    </div>
</template>

<script lang="ts">
</script>

<style>
.sidebar {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    padding: 20px;
    background-color: lightblue;
    width: 300px;
}
</style>