"use client";

import { updateProductStock } from "@/sanity/lib/updateProductStock";

export default function BlogPage() {
  const handleUpdateStocks = async () => {
    const result = await updateProductStock([
      {
        id: "price_1Nj4ZXJSkUmCv6Rb23CkdtLJ",
        quantity: 2,
      },
      {
        id: "price_1NinV0JSkUmCv6Rbm0HREXYB",
        quantity: 5,
      },
    ]);

    console.log(result);
  };

  return (
    <div>
      <h1>
        <button onClick={handleUpdateStocks}>update</button>
      </h1>
    </div>
  );
}
