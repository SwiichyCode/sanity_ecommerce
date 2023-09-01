import { client } from "@/sanity/lib/client";
import { dataset, projectId } from "../env";

export async function updateProductStock(products: any) {
  const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN;

  console.log("products", typeof products);

  const getDocumentsID = await client.fetch(
    '*[_type == "product" && id in $ids] {_id, id}',
    { ids: products.map((product: any) => product.id) }
  );

  const result = await fetch(
    `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}`,
    {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        mutations: products.map((product: any) => {
          return {
            patch: {
              id: getDocumentsID.find(
                (document: any) => document.id === product.id
              )._id,
              dec: { stock: product.quantity },
            },
          };
        }),
      }),
    }
  );

  return result;
}
