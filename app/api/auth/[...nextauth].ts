import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { credential, initializeApp } from "firebase-admin";

const firebaseCredentials = {
//   type: "service_account",
//   project_id: "YOUR_PROJECT_ID",
//   private_key_id: "YOUR_PRIVATE_KEY_ID",
//   private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
//   client_email: "YOUR_CLIENT_EMAIL",
//   client_id: "YOUR_CLIENT_ID",
//   auth_uri: "https://accounts.google.com/o/oauth2/auth",
//   token_uri: "https://oauth2.googleapis.com/token",
//   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//   client_x509_cert_url: "YOUR_CLIENT_CERT_URL",
};

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

// // Initialize Firebase
// if (!initializeApp.apps.length) {
//   initializeApp({
//     credential: credential.cert(firebaseCredentials),
//   });
// }

const app = initializeApp(firebaseConfig);

// export default NextAuth({
//   providers: [
//     Providers.Credentials({
//       // Name for the provider
//       name: 'Firebase',
//       credentials: {},
//       authorize: async (credentials) => {
//         // You can use the provided credentials (if necessary) to authenticate against Firebase
//         // If successful, you can return a token/user object
//       },
//     }),
//     // Add other providers as necessary
//   ],
//   // Add custom configurations if needed
// });
