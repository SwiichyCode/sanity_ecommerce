import { create } from "zustand";

interface PaginationStore {
  page: number;
  productsPerPage: number;
  setPage: (page: number) => void;
  setProductsPerPage: (productsPerPage: number) => void;
  indexOfFirstProduct: (page: number) => number;
  indexOfLastProduct: (page: number) => number;
}

export const usePaginationStore = create<PaginationStore>((set) => ({
  page: 1,
  productsPerPage: 10,
  setPage: (page: number) => set(() => ({ page })),
  setProductsPerPage: (productsPerPage: number) =>
    set(() => ({ productsPerPage })),
  indexOfFirstProduct: (page: number) => {
    const indexOfFistProduct = page * 10 - 10;
    return indexOfFistProduct;
  },
  indexOfLastProduct: (page: number) => {
    const indexOfLastProduct = page * 10;
    return indexOfLastProduct;
  },
}));
