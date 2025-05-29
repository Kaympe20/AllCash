import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    budgetCards: { type: [mongoose.Schema.Types.ObjectId], ref: 'BudgetCard', required: false, default: [
        {
            title: "Income",
            income: false,
            order: 0,
            budgetElements: [
                {
                    title: "Salary",
                    planned: 100,
                    remaining: 100,
                    order: 0
                }
            ]
        }
    ]},
}, { timestamps: true });

export const User = mongoose.model('User', UserSchema);