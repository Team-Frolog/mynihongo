import { useMutation } from '@tanstack/react-query';
import { createOrGetUserInfo } from '../services/user';
import { useUserStore } from '@/stores/useUserStore';
import { UserInfo } from '@/types/user';
import { useState } from 'react';

export const useUser = () => {
  const setUser = useUserStore((state) => state.setUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { mutate: createUser } = useMutation({
    mutationFn: async (userId: string) => {
      return await createOrGetUserInfo(userId);
    },
    onSuccess: (data) => {
      setUser(data as UserInfo);
      setIsLoggedIn(true);
    },
    onError: (error) => {
      console.log(error);
      setIsLoggedIn(false);
    },
  });

  return { createUser, isLoggedIn };
};
