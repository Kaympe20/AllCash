import { NuxtAuthHandler } from '#auth'
import CredentialsProviderImport from 'next-auth/providers/credentials'
const CredentialsProvider = CredentialsProviderImport.default
import { User } from '~/server/models/User'
import bcrypt from 'bcrypt'

export default NuxtAuthHandler({
    secret: useRuntimeConfig().authSecret,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'Username' },
                password: { label: 'Password', type: 'password', placeholder: 'Password' },
            },
            authorize: async (credentials, req) => {
                if (
                    credentials?.username === 'admin' &&
                    credentials?.password === 'password'
                ) {
                    return { id: '1', name: 'Admin', email: 'admin@example.com' }
                }

                const user = await User.findOne({username: credentials?.username}).exec();

                if (!credentials?.username || !credentials?.password) {
                    return null;
                }

                if (!user) {
                    return null;
                }

                if (await bcrypt.compare(credentials.password, user.passwordHash)) {
                    return {
                        id: user._id.toString(),
                        username: user.username,
                    };
                }
                
                return null;
            },
        })
    ],
})