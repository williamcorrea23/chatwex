import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

import { adminAuth, adminDB } from './firebase-admin'
import { FirestoreAdapter } from '@auth/firebase-adapter'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials?.password === process.env.DEMO_USER_PASSWORD) {
          return {
            id: 'demo_user_id',
            name: 'John Doe',
            email: 'johndoe@example.com',
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=72&auto=format&fit=crop&q=60',
          }
        }
        return null
      },
    }),
  ],
  adapter: FirestoreAdapter(adminDB),
  pages: {
    signIn: '/auth/signin',  // Customize the sign-in page URL if needed
  },
  session: {
    strategy: 'database',  // Use database session strategy
  },
}

export default NextAuth(authOptions)
