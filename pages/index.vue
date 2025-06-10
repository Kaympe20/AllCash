<script lang="ts" setup>
import BudgetCard from '../components/BudgetCard.vue'
import { BudgetElement } from '../classes/BudgetElement'
import { BudgetCardClass } from '../classes/BudgetCard'
import { fetchBudgetData } from '../functions/fetchBudgetData'

const budgetCards = ref<BudgetCardClass[]>([]);

fetchBudgetData(budgetCards);

</script>

<template>
    <div class="content">
        <BudgetCard
            v-for="(budgetCard, index) in budgetCards" :key="index"
            :budgetName="budgetCard.title"
            :spent="true"
            :budgetArray="budgetCard.budgetElements"
        ></BudgetCard>
    </div>
</template>