import { db } from 'firebaseConfig';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

export const createUserIfNotExists = async (userId: string) => {
  if (!userId) return;

  const initialUserData = {
    uid: userId,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    visitedDate: { lastDate: '', totalVisited: 0 },
    themeStatus: [],
  };

  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    await setDoc(userRef, initialUserData);
  }
};
