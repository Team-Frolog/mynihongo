import { updateWordLearningStatus } from '@/services/word';
import { useMutation } from '@tanstack/react-query';
import { useUserStore } from '@/stores/useUserStore';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useWord = () => {
  const queryClient = useQueryClient();
  const userId = useUserStore((state) => state.userId);

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries({ queryKey: ['user', userId] });
    };
  }, [queryClient, userId]);

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
