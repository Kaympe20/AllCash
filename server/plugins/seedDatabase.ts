import { Nitro } from "nitropack";
import { BudgetCard } from "../models/Budget";

export default async (_nitroApp: Nitro) => {
  // Only run in development mode
    if (process.env.NODE_ENV !== 'development') return;
    
    try {
        if (await BudgetCard.countDocuments() === 0) {
        console.log('Seeding database with initial budget data...');
        
        const seedData = [
            {
            title: "Income",
            income: true,
            budgetElements: [
                { title: 'Salary', planned: 5000, remaining: 3000 },
                { title: 'Freelance', planned: 2000, remaining: 1000 },
                { title: 'Investments', planned: 1500, remaining: 500 },
                { title: 'Side Hustle', planned: 800, remaining: 200 },
                { title: 'Gifts', planned: 300, remaining: 100 }
            ]
            },
            {
            title: "Food",
            income: false,
            budgetElements: [
                { title: 'Groceries', planned: 500, remaining: 300 }
            ]
            },
            {
            title: "Housing",
            income: false,
            budgetElements: [
                { title: 'Rent', planned: 3000, remaining: 1000 }
            ]
            }
        ];
        
        await BudgetCard.insertMany(seedData);
        console.log('Database seeded successfully!');
        }
    } catch (e) {
        console.error('Error seeding database:', e);
    }
};