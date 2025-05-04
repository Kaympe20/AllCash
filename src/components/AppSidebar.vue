<template>
    <div class="sidebar">
        <div class="sidebar-header">
        <img src="https://images.icon-icons.com/3279/PNG/512/money_stack_icon_208061.png" alt="Logo" class="logo">
        <hr>
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
  width: 300px;
  height: 100vh;
  padding: 20px;
  background-color: lightblue;
  flex-shrink: 0;
}
.logo {
  width: 90%;
}
</style>