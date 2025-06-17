import { db } from 'firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export const updateWordLearningStatus = async (
  userId: string,
  wordId: string,
  themeName: string,
) => {
  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) return;

  const themeStatus = userDoc.data()?.themeStatus || [];

  const updatedThemeStatus = themeStatus.map((theme: any) => {
    if (theme.themeName === themeName) {
      const currentWords = Array.isArray(theme.words) ? theme.words : [];
      return {
        ...theme,
        words: currentWords.includes(wordId)
          ? currentWords
          : [...currentWords, wordId],
      };
    }
    return theme;
  });

  await updateDoc(userRef, {
    themeStatus: updatedThemeStatus,
  });
};
