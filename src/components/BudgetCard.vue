<template>
    <div style="text-align: center;">
        <div class="card">
            <table>
                <tr>
                    <th><h1>{{ budgetName }}</h1></th>
                    <th>Planned</th>
                    <th v-if="spent">Spent</th>
                    <th v-else>Recieved</th>
                </tr>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Test variables until reactivity is set up
const budgetName = ref('Income');
const spent = true;
</script>

<style scoped>
.card {
    width: 80%;
    min-height: 40vh;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
table {
    width: 100%;
    border-spacing: 30px;
}
</style>