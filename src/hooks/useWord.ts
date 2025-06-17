import { updateWordLearningStatus } from '@/services/word';
import { useMutation } from '@tanstack/react-query';
import { useUserStore } from '@/stores/useUserStore';

export const useWord = () => {
  const userId = useUserStore((state) => state.userId);

  const { mutate: updateWordToLearned } = useMutation({
    mutationFn: async (data: { wordId: string; themeId: string }) => {
      return await updateWordLearningStatus(userId, data.wordId, data.themeId);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { updateWordToLearned };
};
