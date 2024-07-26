

import {  adminDB } from './firebase-admin'
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirestoreAdapter } from '@auth/firebase-adapter';


const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  adapter: FirestoreAdapter(adminDB),
  session: {
    strategy: 'database',
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);
