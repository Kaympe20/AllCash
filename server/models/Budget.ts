import mongoose from 'mongoose';

// Schema for budget elements within a budget card
const BudgetElementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    planned: { type: Number, required: true },
    remaining: { type: Number, required: true }
});

// Schema for budget cards
const BudgetCardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    income: { type: Boolean, default: false },
    budgetElements: [BudgetElementSchema]
}, { timestamps: true });

// Create and export the model
export const BudgetCard = mongoose.model('BudgetCard', BudgetCardSchema);