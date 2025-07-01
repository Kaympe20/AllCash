import mongoose from "mongoose";

const BudgetElementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    planned: { type: Number, required: true },
    remaining: { type: Number, required: true },
    order: { type: Number, default: 0 }
});

const BudgetCardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    income: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    budgetElements: [BudgetElementSchema]
}, { timestamps: true });

export const BudgetCard = mongoose.model('BudgetCard', BudgetCardSchema);

const defaultBudgetCard = [
    {
        title: "Income",
        income: false,
        order: 0,
        budgetElements: [
            {
                title: "Salary",
                planned: 5000,
                remaining: 2000,
                order: 0
            }
        ]
    }
]

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    budgetCards: { type: [BudgetCardSchema], required: false, default: defaultBudgetCard },
}, { timestamps: true });

export const User = mongoose.model('User', UserSchema);