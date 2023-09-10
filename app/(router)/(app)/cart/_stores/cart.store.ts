import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "../_types/product.type";

interface Store {
  //Product
  product: Product;
  setProduct: (product: Product) => void;
  //Cart
  cart: Product[];
  setCart: (cart: Product[]) => void;
  addToCart: (product: Product, quantity: number) => void;
  addFishToCart: (product: Product, quantity: number) => void;
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
        productId: "",
        price: 0,
        images: "",
        quantity: 0,
        sizes: {
          size: 0,
          weight: 0,
          price: 0,
          fishSpecies: {
            name: "",
          },
        },
        weight: 0,
        category: "",
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

      addFishToCart: (product, quantity) =>
        set((state) => ({
          cart: state.cart.some((item) => item.sizes === product.sizes)
            ? state.cart.map((item) =>
                item.productId === product.productId &&
                item.sizes === product.sizes
                  ? { ...item, quantity: item.quantity! + quantity }
                  : item
              )
            : [...state.cart, { ...product, quantity: quantity }],
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.productId === id ? { ...item, quantity } : item
          ),
        })),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((product) => product.productId !== id),
        })),

      totalCost: (cart) =>
        cart.reduce(
          (acc, { price, quantity = 0 }) => acc + price * quantity,
          0
        ),

      clearCart: () => set({ cart: [] }),
    }),

    {
      name: "store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
