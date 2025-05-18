import { Settings } from '../../models/Settings';

export default defineEventHandler(async (event) => {
    try {
        const settings = await Settings.find();
        return { success: true, data: settings };
    } catch (error) {
        console.error('Error fetching settings:', error);
        return { success: false, error: 'Failed to fetch settings' };
    }
});