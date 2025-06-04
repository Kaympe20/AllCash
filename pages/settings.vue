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
        <p>
            Running Build: 
            <template v-if="config.public.commit">
                <a :href="`https://github.com/kaympe20/allcash/commit/${config.public.build}`" target="_blank">
                    {{ config.public.build }}
                </a>
            </template>
            <template v-else>
                {{ config.public.build }}
            </template>
        </p>
    </div>
</template>

<script setup>
const colorMode = useColorMode()
const config = useRuntimeConfig()

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