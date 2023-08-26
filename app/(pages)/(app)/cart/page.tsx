"use client";

import CartTable from "./_components/CartTable";
import { useCartStore } from "./_stores/store";

export default function CartPage() {
  const { cart } = useCartStore();

  return (
    <>
      <CartTable cart={cart} />
    </>
  );
}
