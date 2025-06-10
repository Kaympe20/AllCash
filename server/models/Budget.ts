import mongoose from 'mongoose';

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