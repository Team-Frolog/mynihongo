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

export const updateThemeLearnedStatus = async (
  userId: string,
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

  if (existingThemeIndex !== -1) {
    const updatedThemeStatus = themeStatus.map((theme, index) => {
      if (index === existingThemeIndex) {
        return {
          ...theme,
          status: 'conversation',
        };
      }
      return theme;
    });

    await updateDoc(userRef, {
      themeStatus: updatedThemeStatus,
    });
  }
};

// 1. themeId 이용 유저 정보의 themeStatus에서 해당 theme 찾기
// 2. 해당 theme의 status를 'conversation'으로 변경
