import { create } from 'zustand';
import { UserInfo } from '@/types/user';

interface Store {
  userInfo: UserInfo | null;
  setUser: (userInfo: UserInfo) => void;
}

export const useUserStore = create<Store>((set) => ({
  userInfo: null,
  setUser: (userInfo) => set({ userInfo }),
}));
