import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { getAnalytics, isSupported } from "firebase/analytics";
import { firebaseConfig } from './config';

const app = initializeApp(firebaseConfig);
// Initialize Analytics only in the browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then(yes => yes && (analytics = getAnalytics(app)));
}
const auth = getAuth(app);

export const signInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signInWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  return signInWithPopup(auth, provider);
};

export const signInWithTwitter = () => {
  const provider = new TwitterAuthProvider();
  return signInWithPopup(auth, provider);
};

export const signOut = () => {
  return auth.signOut();
};

export { auth, analytics };