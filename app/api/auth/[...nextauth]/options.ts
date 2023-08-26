import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { CognitoUser, AuthenticationDetails, CognitoUserPool } from 'amazon-cognito-identity-js';

const USER_POOL_ID = process.env.COGNITO_USERPOOL_ID as string;
const CLIENT_ID = process.env.COGNITO_CLIENT_ID as string;

const poolData = {
  UserPoolId: USER_POOL_ID,
  ClientId: CLIENT_ID,
};

import crypto from 'crypto';

function calculateSecretHash(secretKey: any, username: any, clientId: any) {
  return crypto.createHmac('SHA256', secretKey)
               .update(username + clientId)
               .digest('base64');
}

async function authenticateWithCognito(email: string, password: string) {
  const userPool = new CognitoUserPool(poolData);
  const secretKey = process.env.COGNITO_CLIENT_SECRET;
  const authenticationData = {
    Username: email,
    Password: password,
    SecretHash: calculateSecretHash(secretKey, email, CLIENT_ID),
  };
  const authenticationDetails = new AuthenticationDetails(authenticationData);
  const userData = {
    Username: email,
    Pool: userPool,
  };
  const cognitoUser = new CognitoUser(userData);

  return new Promise<{ id: string, email: string, name: string }>((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (session) => {
        resolve({
          id: email,
          email: email,
          name: 'Placeholder',
        });
      },
      onFailure: (err) => {
        console.error("Authentication error:", err);
        reject(new Error("Authentication failed"));
      },
      newPasswordRequired: () => {
          console.error("Password change required");
          reject(new Error("Password change required"));
      }
    });
  });
}

export const Options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials?: { email?: string, password?: string }) {
        if (!credentials?.email || !credentials?.password) {
            return null;
        }
        try {
            const user = await authenticateWithCognito(credentials.email, credentials.password);
            if (user) {
                return { id: user.id, email: user.email, name: user.name };
            }
        } catch (error) {
            console.error("Error during authentication:", error);
        }
        return null;
      },    
    }),
  ],
  secret: process.env.NEXTAUTH_URL,
  debug: process.env.NODE_ENV === 'development',
};
