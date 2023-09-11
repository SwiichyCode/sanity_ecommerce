import { useState, useEffect } from "react";
import OrderService from "@/app/(router)/(app)/cart/_services/order.service";
import { useCartStore } from "../_stores/cart.store";
import { getProductById } from "@/sanity/utils/getProductById";

function useOrderDetails(profileId: string, isLastOrder: boolean) {
  const { clearCart } = useCartStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastOrder, setLastOrder] = useState<any>(null);
  const [productDetail, setProductDetail] = useState<any>(null);

  useEffect(() => {
    const fetchLastOrder = async () => {
      try {
        setIsLoading(true);

        if (isLastOrder) {
          const { data } = await OrderService.getLastOrder(profileId);
          setLastOrder(data);
        } else {
          const { data } = await OrderService.getOrders(profileId);
          setLastOrder(data);
        }
      } catch (error) {
        console.error("Failed to fetch last order:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLastOrder();

    clearCart();
  }, [profileId, isLastOrder]);

  useEffect(() => {
    if (!lastOrder) return;

    const fetchProductDetail = async () => {
      try {
        const productDetails = await Promise.all(
          isLastOrder
            ? lastOrder.flatMap(({ product }: any) => {
                return product.map(async (product: any) => {
                  const productData = await getProductById(product.id);

                  return {
                    ...productData,
                    quantity: product.quantity,
                    sizes: product.size,
                  };
                });
              })
            : lastOrder.map(async (product: any) => {
                return product;
              })
        );
        setProductDetail(productDetails);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    fetchProductDetail();
  }, [lastOrder]);

  return { lastOrder, productDetail, isLoading };
}

export default useOrderDetails;
