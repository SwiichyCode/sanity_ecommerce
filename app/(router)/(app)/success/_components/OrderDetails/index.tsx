"use client";
import { useEffect, useState } from "react";
import OrderService from "@/app/_modules/shop/order.service";
import { useCartStore } from "@/app/_modules/shop/cart.store";
import { getProductById } from "@/sanity/lib/getProductById";

export default function OrderDetail() {
  const { clearCart } = useCartStore();
  const [lastOrder, setLastOrder] = useState<any>(null);
  const [orderQuantity, setOrderQuantity] = useState<any>(null); // [1, 2, 3
  const [productDetail, setProductDetail] = useState<any>(null);

  const handleFetchLastOrder = async () => {
    const { data, error } = await OrderService.getLastOrder(
      "1343cff3-5751-4fbf-9314-9c1d77db3430"
    );

    setLastOrder(data);
  };

  const handleFetchProductDetail = async () => {
    if (lastOrder) {
      const item = lastOrder.map((item: any) => {
        return item?.product.map(async (item: any) => {
          const product = await getProductById(item.id);

          return setProductDetail(product);
        });
      });
    }
  };

  const handleOrderQuantity = () => {
    if (lastOrder) {
      const item = lastOrder.map((item: any) => {
        return item?.product.map(async (item: any) => {
          return setOrderQuantity(item.quantity);
        });
      });
    }
  };

  useEffect(() => {
    handleFetchLastOrder();
    clearCart();

    return () => {
      clearCart();
    };
  }, []);

  useEffect(() => {
    handleFetchProductDetail();
    handleOrderQuantity();
  }, [lastOrder]);

  return (
    <div>
      {productDetail &&
        productDetail.map((item: any, index: number) => (
          <div>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.price * [orderQuantity][index]}</div>
          </div>
        ))}
    </div>
  );
}
