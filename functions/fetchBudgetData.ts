import { BudgetCardClass } from '../classes/BudgetCard'
import { BudgetElement } from '../classes/BudgetElement'

export async function fetchBudgetData(budgetCards: Ref<BudgetCardClass[]>): Promise<void> {
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