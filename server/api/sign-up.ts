import { User } from "../models/User";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    await User.create({
        username: body.username,
        email: body.email,
        passwordHash: bcrypt.hash(body.password, 10),
    })
})