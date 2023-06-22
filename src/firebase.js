import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAo-agyvVO8uE2dxwHU-2W-9l8iKEvbfTc',
  authDomain: 'restaurant-59278.firebaseapp.com',
  projectId: 'restaurant-59278',
  storageBucket: 'restaurant-59278.appspot.com',
  messagingSenderId: '981429100470',
  appId: '1:981429100470:web:319aba64cbf30a7b84eb17',
  measurementId: 'G-E58SV6D2ZQ',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
