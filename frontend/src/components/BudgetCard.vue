<template>
    <div style="text-align: center;">
        <div class="card">
            <table>
                <tr>
                    <th>{{ budgetName }}</th>
                    <th>Planned</th>
                    <th v-if="spent">Spent</th>
                    <th v-else>Received</th>
                </tr>
                <tr v-for="(budget, index) in budgetArray" :key="index">
                    <td>{{ budget.title }}</td>
                    <td>{{ formatCurrency(budget.planned) }}</td>
                    <td v-if="spent">{{ formatCurrency(budget.planned - budget.remaining) }}</td>
                    <td v-else>{{ formatCurrency(budget.remaining) }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'


interface BudgetElement {
    title: string;
    planned: number;
    remaining: number;
}

export default {
    name: 'BudgetCard',
    props: {
        budgetName: {
            type: String,
            required: true
        },
        spent: {
            type: Boolean,
            default: false
        },
        budgetArray: {
            type: Array as PropType<BudgetElement[]>,
            default: () => []
        }
    },
    methods: {
        formatCurrency(amount: number): string {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2
            }).format(amount);
        }
    }
}
</script>

<style scoped>
.card {
    width: 80%;
    min-height: 15vh;
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
th {
    font-size: max(2vw, 2vh);
}
td {
    font-size: max(1.5vw, 1.5vh);
}
</style>