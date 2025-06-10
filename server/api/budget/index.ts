import { BudgetCard } from '../../models/User';

export default defineEventHandler(async (event) => {
    try {
        const budgetCards = await BudgetCard.find().sort({ order: 1 });
        return { success: true, data: budgetCards };
    } catch (error) {
    console.error('Error fetching budget cards:', error);
        return { success: false, error: 'Failed to fetch budget cards' };
    }
});