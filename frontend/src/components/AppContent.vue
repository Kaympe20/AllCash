<template>
    <div class="content">
        <BudgetCard
            budgetName="Income"
        ></BudgetCard>
    </div>
</template>

<script lang="ts" setup>
import BudgetCard from './BudgetCard.vue'
</script>

<style scoped>
.content {
    padding: 20px;
    text-align: left;
    width: calc(100% - var(--sidebar-width) - 40px - 30px);
    margin-left: calc(30px + var(--sidebar-width));
    text-align: center;
}
</style>