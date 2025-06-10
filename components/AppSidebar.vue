<template>
    <div class="sidebar">
        <div class="sidebar-header">
        <img src="https://hc-juice.s3.amazonaws.com/omg-moments/1748745715065-homestuckalllcash.png" alt="Logo" class="logo">
        <hr>
        <h1>AllCash</h1>
        <p><s>The only</s> <s>The first</s> <s>The best</s> A FOSS EveryDollar Alternative</p>

        </div>
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
</template>

<script lang="ts">
export default {
    data() {
        return {
            menuItems: [
                { name: 'Budget', link: '/' },
                { name: 'Settings', link: '/settings'},
                { name: 'Auth', link: '/sign-in' },
            ]
        }
    }
}
</script>

<style scoped>
.sidebar {
    width: var(--sidebar-width);
    height: 100vh;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    border-right: rgb(66, 67, 73) 6px solid;
}
.logo {
    max-width: 80%;
    max-height: 20vh;
    margin: 0 auto;
}
.sidebar-menu {
    padding-left: 0;
    margin: 0;
}
.sidebar-item {
    list-style: none;
    margin: 20px auto;
    width: 95%;
    aspect-ratio: 3/1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.5em;
    transition-duration: 0.4s;
    border-radius: 5px;
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