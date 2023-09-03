import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "./_types/product.type";

interface Store {
  //Product
  product: Product;
  setProduct: (product: Product) => void;
  //Cart
  cart: Product[];
  setCart: (cart: Product[]) => void;
  addToCart: (product: Product, quantity: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalCost: (cart: Product[]) => number;
}

export const useCartStore = create<Store>()(
  persist(
    (set) => ({
      product: {
        name: "",
        description: "",
        id: "",
        cost: 0,
        images: "",
        quantity: 0,
      },
      setProduct: (product) => set({ product }),
      cart: [],

      setCart: (cart) => set({ cart }),

      addToCart: (product, quantity) =>
        set((state) => ({
          cart: state.cart.some((item) => item.id === product.id)
            ? state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity! + quantity }
                  : item
              )
            : [...state.cart, { ...product, quantity: quantity }],
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((product) => product.id !== id),
        })),

      totalCost: (cart) =>
        cart.reduce((acc, { cost, quantity = 0 }) => acc + cost * quantity, 0),

      clearCart: () => set({ cart: [] }),
    }),

    {
      name: "store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);