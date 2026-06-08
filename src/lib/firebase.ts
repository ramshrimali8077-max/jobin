import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Check if Firebase config is provided to avoid crashing the app if environment variables are missing
const isFirebaseConfigured = Boolean(firebaseConfig.apiKey);

let app;
let authInstance = null;

try {
  app = isFirebaseConfigured ? initializeApp(firebaseConfig) : initializeApp({ apiKey: 'dummy', projectId: 'dummy' });
  authInstance = getAuth(app);
} catch (error) {
  console.warn('Firebase initialization failed. Please check environment variables.', error);
}

export const auth = authInstance;
export const googleProvider = new GoogleAuthProvider();
