"use client";
import { useEffect, useState } from "react";
import OrderService from "@/app/(router)/(app)/cart/_services/order.service";
import { useCartStore } from "@/app/(router)/(app)/cart/_stores/cart.store";
import { useProfileStore } from "@/app/_modules/auth/profile.store";
import { getProductById } from "@/sanity/utils/getProductById";
import OrderCard from "../OrderCard";

export default function OrderDetail() {
  const { clearCart } = useCartStore();
  const { profile } = useProfileStore();
  const [lastOrder, setLastOrder] = useState<any>(null);
  const [productDetail, setProductDetail] = useState<any>(null);

  const fetchLastOrder = async () => {
    try {
      const { data } = await OrderService.getLastOrder(profile?.id);
      setLastOrder(data);
    } catch (error) {
      console.error("Failed to fetch last order:", error);
    }
  };

  const fetchProductDetail = async () => {
    if (!lastOrder) return;

    const promises = lastOrder.map(async (item: any) => {
      const productIds = item.product.map((product: any) => product.id);
      const products = await Promise.all(productIds.map(getProductById));
      const quantity = item.product.map((product: any) => product.quantity);
      const sizes = item.product.map((product: any) => product.size);

      return products.map((product: any, index: number) => ({
        ...product,
        quantity: quantity[index],
        sizes: sizes[index],
      }));
    });

    try {
      const productDetails = await Promise.all(promises);
      setProductDetail(productDetails);
    } catch (error) {
      console.error("Failed to fetch product details:", error);
    }
  };

  useEffect(() => {
    fetchLastOrder();
    clearCart();

    return () => {
      clearCart();
    };
  }, []);

  useEffect(() => {
    fetchProductDetail();
  }, [lastOrder]);

  return <OrderCard productDetail={productDetail} profile={profile} />;
}
