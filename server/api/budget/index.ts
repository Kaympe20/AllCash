import { BudgetCard } from '../../models/Budget';

export default defineEventHandler(async (event) => {
    try {
        const budgetCards = await BudgetCard.find().sort({ income: -1, title: 1 });
        return { success: true, data: budgetCards };
    } catch (error) {
    console.error('Error fetching budget cards:', error);
        return { success: false, error: 'Failed to fetch budget cards' };
    }
});