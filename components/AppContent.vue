<script lang="ts" setup>
import BudgetCard from './BudgetCard.vue'
import { BudgetElement } from '../classes/BudgetElement'
import { BudgetCardClass } from '../classes/BudgetCard'

const budgetCards = ref<BudgetCardClass[]>([]);

// Fetch budget data from API
async function fetchBudgetData() {
    try {
        const response = await fetch('/api/getBudget');
        const result = await response.json();
        
        if (result.success) {
        // Convert data to BudgetCardClass instances
        budgetCards.value = result.data.map((card: any) => {
            const elements = card.budgetElements.map((element: any) => 
            new BudgetElement(element.title, element.planned, element.remaining)
            );
            
            return new BudgetCardClass(card.title, card.income, elements);
        });
        } else {
        console.error('Failed to fetch budget data');
        }
    } catch (error) {
        console.error('Error fetching budget data:', error);
    }
}

onMounted(fetchBudgetData);
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

<style scoped>
.content {
    padding: 20px;
    text-align: left;
    width: calc(100% - var(--sidebar-width) - 40px - 30px);
    margin-left: calc(30px + var(--sidebar-width));
    text-align: center;
}
</style>