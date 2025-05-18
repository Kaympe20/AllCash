import { BudgetCardClass } from '../classes/BudgetCard'
import { BudgetElement } from '../classes/BudgetElement'

export async function fetchBudgetData(budgetCards: Ref<BudgetCardClass[]>): Promise<void> {
    try {
        const { data, error } = await useFetch('/api/budget');
        
        if (error.value) {
            console.error('Failed to fetch budget data:', error.value);
            return;
        }
        
        if (data.value && 'success' in data.value && data.value.success) {
            // Check if 'data' property exists in the response
            if ('data' in data.value && Array.isArray(data.value.data)) {
                // Convert data to BudgetCardClass instances
                budgetCards.value = data.value.data.map((card: any) => {
                    const elements = card.budgetElements?.map((element: any) => 
                        new BudgetElement(element.title, element.planned, element.remaining)
                    ) || [];
                    
                    return new BudgetCardClass(card.title, card.income, elements);
                });
            } else {
                console.error('Invalid data format in response');
            }
        } else {
            console.error('Failed to fetch budget data', data.value);
        }
    } catch (error) {
        console.error('Error fetching budget data:', error);
    }
}