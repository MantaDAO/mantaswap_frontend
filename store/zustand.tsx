import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  signedIn: false,
  toggleAuth: () => set((state: any) => ({ signedIn: !state.signedIn })),
}));
