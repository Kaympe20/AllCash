<template>
    <div style="text-align: center;">
        <div class="card">
            <table>
                <thead>
                    <tr>
                        <th>{{ budgetName }}</th>
                        <th>Planned</th>
                        <th v-if="spent">Spent</th>
                        <th v-else>Received</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="divider-row">
                        <td colspan="3"><hr /></td>
                    </tr>
                    <template v-for="(budget, index) in budgetArray" :key="index">
                        <tr>
                            <td>{{ budget.title }}</td>
                            <td>{{ formatCurrency(budget.planned) }}</td>
                            <td v-if="spent">{{ formatCurrency(budget.planned - budget.remaining) }}</td>
                            <td v-else>{{ formatCurrency(budget.remaining) }}</td>
                        </tr>
                        <tr v-if="index < budgetArray.length" class="divider-row">
                            <td colspan="3"><hr /></td>
                        </tr>
                    </template>
                </tbody>
                <tfoot>
                    <tr class="total-row">
                        <td><strong>Total</strong></td>
                        <td><strong>{{ formatCurrency(totalPlanned) }}</strong></td>
                        <td v-if="spent"><strong>{{ formatCurrency(totalSpent) }}</strong></td>
                        <td v-else><strong>{{ formatCurrency(totalReceived) }}</strong></td>
                    </tr>
                </tfoot>
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
    computed: {
        totalPlanned(): number {
            return this.budgetArray.reduce((sum, budget) => sum + budget.planned, 0);
        },
        totalSpent(): number {
            return this.budgetArray.reduce((sum, budget) => sum + (budget.planned - budget.remaining), 0);
        },
        totalReceived(): number {
            return this.budgetArray.reduce((sum, budget) => sum + budget.remaining, 0);
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
table {
    width: 100%;
}
th {
    font-size: max(1.5vw, 1.5vh);
    font-weight: bolder;
}
th:nth-child(1) {
    font-size: max(2vw, 2vh);
    font-weight: 800;
}
td {
    font-size: max(1.5vw, 1.5vh);
}
.total-row td {
    font-weight: bold;
}
.divider-row hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 0;
}
td:nth-of-type(1),th:nth-of-type(1) {
    text-align: left;
    width: 50%;
}
td:nth-of-type(2),th:nth-of-type(2) {
    text-align: right;
    width: 25%;
}
td:nth-of-type(3),th:nth-of-type(3) {
    text-align: right;
    width: 25%;
}
</style>