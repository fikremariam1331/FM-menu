import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeFirestore, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCtJrj0kfuuxVKZg8Q6-dCmYa9ZJ829gfY',
  authDomain: 'fm-juice-and-salad-menu.firebaseapp.com',
  projectId: 'fm-juice-and-salad-menu',
  storageBucket: 'fm-juice-and-salad-menu.firebasestorage.app',
  messagingSenderId: '1046855009885',
  appId: '1:1046855009885:web:d748226161655909d3efb4',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

let database;
try {
  // Falls back to a simpler connection quickly when the live connection is blocked or slow
  database = initializeFirestore(app, { experimentalAutoDetectLongPolling: true });
} catch (e) {
  database = getFirestore(app);
}

export const db = database;