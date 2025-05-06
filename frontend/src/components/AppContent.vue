<script lang="ts" setup>
import BudgetCard from './BudgetCard.vue'
import { BudgetElement } from '../classes/BudgetElement'
import { BudgetCardClass } from '../classes/BudgetCard'

const budgetCards: BudgetCardClass[] = [
    new BudgetCardClass(
        "Income",
        true,
        [
            new BudgetElement('Salary', 5000, 3000),
            new BudgetElement('Freelance', 2000, 1000),
            new BudgetElement('Investments', 1500, 500),
            new BudgetElement('Side Hustle', 800, 200),
            new BudgetElement('Gifts', 300, 100)
        ]
    ),
    new BudgetCardClass(
        "Food",
        false,
        [
            new BudgetElement('Groceries', 5000, 3000)
        ]
    ),
    new BudgetCardClass(
        "Housing",
        false,
        [
            new BudgetElement('Rent', 3000, 1000)
        ]
    )
]

</script>

<template>
    <div class="content">
        <BudgetCard
            v-for="(budgetCard, index) in budgetCards" :key="index"
            :budgetName="budgetCard.title"
            :spent="false"
            :budgetArray="budgetCard.budgetElements"
            ></BudgetCard>
    </div>
</template>

<style scoped>
.content {
    padding: 20px;
    text-align: left;
    width: calc(100% - var(--sidebar-width) - 40px - 30px);
    margin-left: calc(30px + var(--sidebar-width));
    text-align: center;
}
</style>