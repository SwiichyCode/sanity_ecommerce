"use client";
import { useEffect, useState } from "react";
import OrderService from "@/app/_modules/shop/order.service";
import { useCartStore } from "@/app/_modules/shop/cart.store";
import { getProductById } from "@/sanity/lib/getProductById";

export default function OrderDetail() {
  const { clearCart } = useCartStore();
  const [lastOrder, setLastOrder] = useState<any>(null);
  const [productDetail, setProductDetail] = useState<any>(null);

  const fetchLastOrder = async () => {
    try {
      const { data } = await OrderService.getLastOrder(
        "1343cff3-5751-4fbf-9314-9c1d77db3430"
      );
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
      return products;
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

  return (
    <div>
      {productDetail &&
        productDetail.map((orderProducts: any, index: number) => (
          <div key={index}>
            {orderProducts.map((item: any, productIndex: number) => (
              <div key={productIndex}>
                <h1>{item.name}</h1>
                <p>
                  {item.price * lastOrder[index].product[productIndex].quantity}
                </p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
