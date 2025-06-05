import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NuxtAuthHandler({
    secret: useRuntimeConfig().authSecret,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'Username' },
                password: { label: 'Password', type: 'password', placeholder: 'Password' },
            },
            authorize: async (credentials) => {
                if (
                    credentials?.username === 'admin' &&
                    credentials?.password === 'password'
                ) {
                    return { id: '1', name: 'Admin', email: 'admin@example.com' }
                }
                return null
            },
        })
    ],
})