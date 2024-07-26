import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

import { adminAuth, adminDB } from './firebase-admin'
import { FirestoreAdapter } from '@auth/firebase-adapter'

// @ts-ignore
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'johndoe' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = {
          id: 'demo_user_id',
          name: 'John Doe',
          email: 'johndoe@example.com',
          image:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=72&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
        }

        if (credentials?.password === process.env.DEMO_USER_PASSWORD)
          return user
        else return null
      },
    }),
  ],
 

  // @ts-ignore
  adapter: FirestoreAdapter(adminDB),
} satisfies NextAuthOptions
