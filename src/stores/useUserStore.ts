import { create } from 'zustand';
import { User } from 'firebase/auth';

interface Store {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<Store>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
