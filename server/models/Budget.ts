import mongoose from 'mongoose';

const BudgetElementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    planned: { type: Number, required: true },
    remaining: { type: Number, required: true }
});

const BudgetCardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    income: { type: Boolean, default: false },
    budgetElements: [BudgetElementSchema]
}, { timestamps: true });

export const BudgetCard = mongoose.model('BudgetCard', BudgetCardSchema);