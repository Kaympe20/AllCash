import mongoose from 'mongoose';

const SettingsSchema = new mongoose.Schema({
    light: { type: Boolean, default: true }
});

export const Settings = mongoose.model('Settings', SettingsSchema);