import { BudgetCard } from '../../models/Budget';

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        
        const budgetCard = new BudgetCard({
            title: body.title,
            income: body.income,
            budgetElements: body.budgetElements
        });
        
        await budgetCard.save();
        
        return { success: true, data: budgetCard };
    } catch (error) {
        console.error('Error creating budget card:', error);
        return { success: false, error: 'Failed to create budget card' };
    }
});