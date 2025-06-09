import { db } from 'firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const createOrGetUserInfo = async (userId: string) => {
  if (!userId) return;

  const initialUserData = {
    uid: userId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    visitedDate: { lastDate: '', totalVisited: 0 },
    themeStatus: [],
  };

  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    await setDoc(userRef, initialUserData);
    return initialUserData;
  }

  return userDoc.data();
};
