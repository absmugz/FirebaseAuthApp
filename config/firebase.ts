// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

const extra = Constants.expoConfig?.extra ?? {};

const firebaseConfig = {
  apiKey: extra.API_KEY,
  authDomain: extra.AUTH_DOMAIN,
  projectId: extra.PROJECT_ID,
  storageBucket: extra.STORAGE_BUCKET,
  messagingSenderId: extra.MESSAGING_SENDER_ID,
  appId: extra.APP_ID,
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();