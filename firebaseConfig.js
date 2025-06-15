// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIRE_BASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIRE_BASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIRE_BASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIRE_BASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIRE_BASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIRE_BASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
