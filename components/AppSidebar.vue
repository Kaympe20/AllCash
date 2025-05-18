<template>
    <div class="sidebar">
        <div class="sidebar-header">
        <img src="https://images.icon-icons.com/3279/PNG/512/money_stack_icon_208061.png" alt="Logo" class="logo">
        <hr>
        <h1>AllCash</h1>
        <p>The <i>only</i> FOSS EveryDollar Alternative</p>

        </div>
        <div class="sidebar-menu">
            <a v-for="(item, index) in menuItems" :key="index"
                class="sidebar-item"
                :href="item.link"
            >
                {{ item.name }}
            </a>
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
    width: var(--sidebar-width);
    height: 100vh;
    background-color: lightblue;
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
    border-radius: 15px;
    background-color: white;
    aspect-ratio: 3/1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
    font-size: 1.5em;
    transition-duration: 0.4s;
}
.sidebar-item:hover {
    background-color: lightgray;
}
</style>