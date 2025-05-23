<template>
    <div class="card">
        <h1>Settings</h1>
        <div class="theme-buttons">
            <button 
                v-for="theme in ['system', 'light', 'dark']" 
                :key="theme"
                @click="$colorMode.preference = theme"
                :class="{ active: $colorMode.preference === theme }">
                {{ theme.charAt(0).toUpperCase() + theme.slice(1) }}
            </button>
        </div>
    </div>
</template>

<script setup>
const colorMode = useColorMode()

console.log(colorMode.preference)
</script>

<style scoped>
    .theme-buttons {
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    .theme-buttons button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: rgb(66, 75, 83);
        color: white;
        font-size: 16px;
    }
    .theme-buttons button.active {
        background-color: slategray;
    }
</style>