<template>
    <div class="sidebar">
        <div class="sidebar-header">
        <img src="https://images.icon-icons.com/3279/PNG/512/money_stack_icon_208061.png" alt="Logo" class="logo">
        <hr>
        <h1>AllCash</h1>
        <p>The <i>only</i> FOSS EveryDollar Alternative</p>

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
}
.logo {
    max-width: 80%;
    max-height: 20vh;
}
</style>