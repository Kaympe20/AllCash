import { BudgetCard } from '../../models/User';

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const { id, ...updateData } = body;
        
        const updatedCard = await BudgetCard.findByIdAndUpdate(
        id,
        updateData,
        { new: true }
        );
        
        if (!updatedCard) {
        return { success: false, error: 'Budget card not found' };
        }
        
        return { success: true, data: updatedCard };
    } catch (error) {
        console.error('Error updating budget card:', error);
        return { success: false, error: 'Failed to update budget card' };
    }
});