import {
  updateWordLearningStatus,
  updateThemeLearnedStatus,
} from '@/services/word';
import { useMutation } from '@tanstack/react-query';
import { useUserStore } from '@/stores/useUserStore';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ThemeStatus } from '@/types/user';

export const useWord = () => {
  const queryClient = useQueryClient();
  const userId = useUserStore((state) => state.userId);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

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

  const { mutate: updateThemeStatus } = useMutation({
    mutationFn: async (data: { themeId: string; status: ThemeStatus }) => {
      return await updateThemeLearnedStatus(userId, data.themeId, data.status);
    },
    onSuccess: (data, variables) => {
      if (data === 'conversation')
        return navigation.navigate('Conversation', {
          themeId: variables.themeId,
        });
      if (data === 'completed')
        return navigation.navigate('Complete', {
          themeId: variables.themeId,
        });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { updateWordToLearned, updateThemeStatus };
};
