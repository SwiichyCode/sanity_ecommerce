"use client";
import { useEffect, useState } from "react";
import OrderService from "@/app/_modules/shop/order.service";
export default function SuccessPage() {
  const [lastOrder, setLastOrder] = useState<any>(null); // [lastOrder, setLastOrder
  const handleCreateOrder = async () => {
    const { error } = await OrderService.createOrder({
      profile_id: "1343cff3-5751-4fbf-9314-9c1d77db3430",
      product: {
        id: "3",
        name: "test2",
      },
    });

    console.log(error);
  };

  const handleFetchLastOrder = async () => {
    const { data, error } = await OrderService.getLastOrder(
      "1343cff3-5751-4fbf-9314-9c1d77db3430"
    );

    setLastOrder(data);
    console.log(data, error);
  };

  useEffect(() => {
    handleFetchLastOrder();
  }, []);

  return (
    <div>
      <h1>
        <button onClick={handleCreateOrder}>create</button>
      </h1>
    </div>
  );
}
