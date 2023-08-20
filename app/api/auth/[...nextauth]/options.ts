import { Accounts } from '@/constants';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import CognitoProvider from "next-auth/providers/cognito";

export const Options: NextAuthOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID as string,
      clientSecret: process.env.COGNITO_CLIENT_SECRET as string,
      issuer: process.env.COGNITO_ISSUER,
    }),
    //   CredentialsProvider({
    //     name: 'Credentials',
    //     // Not sure if we need the things below as this just creates an auto generated page from nextauth (username/password fields)
    //     credentials: {
    //       email: {
    //       label: 'Email',
    //       type: 'text',
    //       placeholder: 'Email',
    //     },
    //     username: {
    //       label: 'Username',
    //       type: 'text',
    //       placeholder: 'Username',
    //     },
    //     password: {
    //       label: 'Password',
    //       type: 'password',
    //       placeholder: 'Password',
    //     },
    //   },
    //   async authorize(credentials) {
    //     // This is where you would retrieve data
    //     // Fake user below
    //     // const user = { id: '42', username: 'Dave', password: 'davey123' };

    //     Accounts.map((account) => {
    //       Accounts.map((account) => {
    //         if (
    //           account.Email === credentials?.email ||
    //           account.Username === credentials?.username
    //         )
    //           return false;
    //       });
    //       return true;
    //     });
    //     return null;
    //   },
    // }),
    // Add more providers here
  ],

  secret: process.env.NEXTAUTH_URL,
  debug: process.env.NODE_ENV === 'development',
};
