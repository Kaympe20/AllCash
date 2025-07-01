import { User } from "../models/User";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        await User.create({
            username: body.username,
            email: body.email,
            passwordHash: await bcrypt.hash(body.password, 10),
        });

        console.log('User created successfully:', body.username);
        return { success: true };
    } catch (error: any) {
        if (error.code === 11000) {
            return { success: false, error: 'Username or email already exists.' };
        }

        console.error('Error during sign-up:', error);
        return { success: false, error: error };
    }
})