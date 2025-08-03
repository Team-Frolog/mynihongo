import { db } from 'firebaseConfig';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export const createUserIfNotExists = async (userId: string) => {
  if (!userId) return;

  const initialUserData = {
    uid: userId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    visitedDate: { lastDate: '', totalVisited: 1 },
    themeStatus: [],
  };

  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    await setDoc(userRef, initialUserData);
  }
  return userId;
};

export const getUserInfo = async (userId: string) => {
  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);

  return userDoc.data();
};

export const updateUserVisited = async (userId: string) => {
  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);

  const today = new Date().toISOString().split('T')[0];

  const visitedDate = userDoc.data()?.visitedDate;

  const newVisitedDate = {
    lastDate: today,
    totalVisited: visitedDate.totalVisited + 1,
  };

  await updateDoc(userRef, { visitedDate: newVisitedDate });
};
