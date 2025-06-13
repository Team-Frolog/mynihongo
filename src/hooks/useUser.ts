import { useMutation, useQuery } from '@tanstack/react-query';
import { createUserIfNotExists, getUserInfo } from '../services/user';
import { useState } from 'react';
import { useUserStore } from '@/stores/useUserStore';
import { UserInfo } from '@/types/user';

export const useUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { userId, setUserId } = useUserStore();

  const { mutate: createUser } = useMutation({
    mutationFn: async (userId: string) => {
      return await createUserIfNotExists(userId);
    },
    onSuccess: (userId) => {
      setIsLoggedIn(true);
      setUserId(userId!);
    },
    onError: (error) => {
      console.log(error);
      setIsLoggedIn(false);
    },
  });

  const { data: userInfo } = useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const userInfo = await getUserInfo(userId);
      return userInfo as UserInfo;
    },
    enabled: userId !== '',
  });

  return { createUser, isLoggedIn, userInfo };
};
