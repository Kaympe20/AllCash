<template>
    <div v-if="$device.isDesktop">
        <div class="sidebar">
            <div class="sidebar-menu">
                <NuxtLink v-for="(item, index) in menuItems" :key="index"
                    class="sidebar-item"
                    :to="item.link"
                    :class="{ active: $route.path === item.link }"
                >
                    {{ item.name }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            menuItems: [
                { name: 'Budget', link: '/' },
                { name: 'Settings', link: '/settings'},
            ]
        }
    }
}
</script>

<style scoped>

.sidebar {
    width: 100vh;
    position: grid;
    top: 0;
    text-align: center;
    border-right: rgb(66, 67, 73) 6px solid;
    
}
.sidebar-menu {
    padding-right: 0;
    margin: 0;
}
.sidebar-item {
    list-style: none;
    margin-right: 5px;
    width: 30%;
    aspect-ratio: 1/3;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 0.5em;
    transition-duration: 0.4s;
}
.light-mode .sidebar {
    background-color: rgb(134, 164, 175);
    color: black;
}
.light-mode .sidebar-item:hover {
    background-color: lightgray;
}
.light-mode .sidebar-item {
    background-color: white;
    color: black;
}
.light-mode .sidebar-item.active {
    background-color: rgb(173, 196, 219);
}
.dark-mode .sidebar {
    background-color: #383838;
    color: white;
}
.dark-mode .sidebar-item:hover {
    background-color: #505050;
}
.dark-mode .sidebar-item {
    border: none;
    cursor: pointer;
    background-color: rgb(66, 75, 83);
    color: white;
}
.dark-mode .sidebar-item.active {
    background-color: rgb(44, 49, 55);
}
</style>