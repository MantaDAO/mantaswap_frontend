// authStore.js
import create from 'zustand';

const useAuthStore = create((set) => ({
  signedIn: false,
  setSignedIn: (signedIn) => set({ signedIn }),
}));

export default useAuthStore;
