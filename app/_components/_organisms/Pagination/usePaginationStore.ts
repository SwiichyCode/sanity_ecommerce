import { create } from "zustand";

interface PaginationStore {
  page: number;
  productsPerPage: number;
  maxDisplayedButtons: number;
  setPage: (page: number) => void;
  setProductsPerPage: (productsPerPage: number) => void;
  indexOfFirstProduct: (page: number) => number;
  indexOfLastProduct: (page: number) => number;
}

export const usePaginationStore = create<PaginationStore>()((set) => ({
  page: 1,
  productsPerPage: 10,
  maxDisplayedButtons: 3,
  setPage: (page: number) => set(() => ({ page })),
  setProductsPerPage: (productsPerPage: number) =>
    set(() => ({ productsPerPage })),
  indexOfFirstProduct: (page: number) => page * 10 - 10,
  indexOfLastProduct: (page: number) => page * 10,
}));
