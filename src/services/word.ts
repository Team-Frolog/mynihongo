import { db } from 'firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { UserInfo } from '@/types/user';

export const updateWordLearningStatus = async (
  userId: string,
  wordId: string,
  themeId: string,
) => {
  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);
  const userData = userDoc.data() as UserInfo;

  if (!userDoc.exists()) return;

  const themeStatus = userData?.themeStatus || [];
  const existingThemeIndex = themeStatus.findIndex(
    (theme) => theme.themeId === themeId,
  );

  let updatedThemeStatus: UserInfo['themeStatus'];

  if (existingThemeIndex !== -1) {
    updatedThemeStatus = themeStatus.map((theme, index) => {
      if (index === existingThemeIndex) {
        const currentWords = Array.isArray(theme.words) ? theme.words : [];
        const newWords = currentWords.includes(wordId)
          ? currentWords
          : [...currentWords, wordId];

        const isCompleted = newWords.length === 10;

        return {
          ...theme,
          status: isCompleted ? 'quiz' : 'learning',
          words: newWords,
        };
      }
      return theme;
    });
  } else {
    updatedThemeStatus = [
      ...themeStatus,
      { themeId, status: 'learning', words: [wordId] },
    ];
  }

  await updateDoc(userRef, {
    themeStatus: updatedThemeStatus,
  });
};
