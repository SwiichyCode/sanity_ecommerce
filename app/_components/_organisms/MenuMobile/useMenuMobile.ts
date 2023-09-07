import { create } from "zustand";

interface IMenuMobileStore {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useMenuMobileStore = create<IMenuMobileStore>((set) => ({
  isMenuOpen: false,

  toggleMenu: () => {
    set((state) => ({ isMenuOpen: !state.isMenuOpen }));
    document.body.classList.toggle("no-scroll");
  },

  closeMenu: () => {
    set({ isMenuOpen: false });
    document.body.classList.remove("no-scroll");
  },
}));
