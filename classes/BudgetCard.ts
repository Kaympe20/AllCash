import type { BudgetElement } from "./BudgetElement";

export class BudgetCardClass {
    title: string;
    income: boolean;
    budgetElements: BudgetElement[];

    constructor(title: string, income: boolean, budgetElements: BudgetElement[]) {
        this.title = title;
        this.income = income;
        this.budgetElements = budgetElements;
    }
}