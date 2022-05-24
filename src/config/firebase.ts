import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { config } from '../config/config';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const Firebase = firebase.initializeApp(config.firebase);

export const auth = firebase.auth();
export default Firebase;

export function useAuth() {
  const [currentUser, setCurrentUser] = useState<any>('');

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}
