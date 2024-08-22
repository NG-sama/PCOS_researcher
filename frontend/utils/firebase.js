import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './config';

console.log('Firebase Config:', firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };