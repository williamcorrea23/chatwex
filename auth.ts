

import {  adminDB } from './firebase-admin'
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirestoreAdapter } from '@auth/firebase-adapter';

// Configuração do NextAuth
const authOptions = {
  providers: [
    // Provedor Google (configuração simplificada)
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Adicione outros provedores se necessário
  ],
  adapter: FirestoreAdapter(adminDB),

  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      // Adapte conforme necessário para adicionar informações ao objeto de sessão
      session.user.id = token.id;
      return session;
    },
    async signIn({ user }) {
      // Adapte conforme necessário para personalizar o processo de login
      return true;
    },
  },
};

// Função de manuseio do NextAuth
export default (req, res) => NextAuth(req, res, authOptions);
