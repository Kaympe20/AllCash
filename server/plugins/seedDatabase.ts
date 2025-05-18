import { Nitro } from "nitropack";
import { BudgetCard } from "../models/Budget";
import { Settings } from "../models/Settings";

export default async (_nitroApp: Nitro) => {
    try {
        if (await Settings.countDocuments() === 0) {
            console.log('Seeding settings with default settings...');
            
            const defaultSettings = [
                {
                    light: true,
                }
            ];
            
            await Settings.insertMany(defaultSettings);
            console.log('Settings seeded successfully!');
        } else {
            console.log('Settings already seeded. Skipping seeding process.');
        }
    } catch (e) {
        console.error('Error seeding database:', e);
    }

    //End if the instance is in production mode
    if (process.env.NODE_ENV !== 'development') {
        console.log('Skipping budget seeding because instance is in production mode.');
        return;
    }
    try {
        if (await BudgetCard.countDocuments() === 0) {
            console.log('Seeding budget database with initial budget data...');
            
            const BudgetElements = [
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
            
            await BudgetCard.insertMany(BudgetElements);
            console.log('Budget database seeded successfully!');
        } else {
            console.log('Budget database already seeded. Skipping seeding process.');
        }
    } catch (e) {
        console.error('Error seeding budget database:', e);
    }
};