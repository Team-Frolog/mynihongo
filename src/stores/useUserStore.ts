import { create } from 'zustand';

interface Store {
  userId: string;
  setUserId: (userId: string) => void;
}

export const useUserStore = create<Store>((set) => ({
  userId: '',
  setUserId: (userId) => set({ userId }),
}));
